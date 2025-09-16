param(
  [string]$Url = 'https://www.chronix.world'
)
Write-Output "Checking URL: $Url"
try {
  $r = Invoke-WebRequest -Uri $Url -UseBasicParsing -TimeoutSec 30
} catch {
  Write-Error "Failed to fetch $Url : $($_.Exception.Message)"
  exit 1
}
Write-Output "Status: $($r.StatusCode)"
$headMatch = [regex]::Match($r.Content, '(?is)<head>(.*?)</head>')
if ($headMatch.Success) {
  $head = $headMatch.Groups[1].Value
  Write-Output '--- HTML head snippet ---'
  $snippet = if ($head.Length -gt 2000) { $head.Substring(0,2000) + '... (truncated)' } else { $head }
  Write-Output $snippet
} else { Write-Output 'No head found' }

$linkMatches = [regex]::Matches($r.Content, '<link[^>]+href=["\''](?<h>[^"\'']+)["\'']', [System.Text.RegularExpressions.RegexOptions]::IgnoreCase) | ForEach-Object { $_.Groups['h'].Value }
$scriptMatches = [regex]::Matches($r.Content, '<script[^>]+src=["\''](?<s>[^"\'']+)["\'']', [System.Text.RegularExpressions.RegexOptions]::IgnoreCase) | ForEach-Object { $_.Groups['s'].Value }
$hrefs = @($linkMatches + $scriptMatches) | Where-Object { $_ -and ($_ -match '\.css' -or $_ -match '_next') } | Select-Object -Unique

if (-not $hrefs -or $hrefs.Count -eq 0) { Write-Output 'No CSS or _next assets found in head.' }

foreach ($h in $hrefs) {
  if ($h.StartsWith('/')) { $u = $Url.TrimEnd('/') + $h } elseif ($h -match '^https?:') { $u = $h } else { $u = $Url.TrimEnd('/') + '/' + $h }
  Write-Output "Checking asset: $u"
  try {
    $a = Invoke-WebRequest -Uri $u -Method Head -UseBasicParsing -TimeoutSec 20
    $ct = $a.Headers['Content-Type'] -join ', '
    $cc = $a.Headers['Cache-Control'] -join ', '
    Write-Output "  Status: $($a.StatusCode)  Content-Type: $ct  Cache-Control: $cc"
  } catch {
    Write-Output "  Error fetching asset: $($_.Exception.Message)"
  }
}
