# Fetch homepage and report head snippet, linked CSS/_next assets, and their HTTP HEAD status
$uri = 'https://www.chronix.world'
try {
  $resp = Invoke-WebRequest -Uri $uri -UseBasicParsing -TimeoutSec 30
} catch {
  Write-Error "Failed to fetch $uri : $($_.Exception.Message)"
  exit 1
}
Write-Output "StatusCode: $($resp.StatusCode)"
if ($resp.Headers['Content-Type']) { Write-Output "Content-Type: $($resp.Headers['Content-Type'])" }

# Print head snippet
$content = $resp.Content
$headMatch = [regex]::Match($content, '(?is)<head>(.*?)</head>')
if ($headMatch.Success) {
  $head = $headMatch.Groups[1].Value
  $snippet = if ($head.Length -gt 1500) { $head.Substring(0,1500) + '... (truncated)' } else { $head }
  Write-Output '--- HTML head snippet ---'
  Write-Output $snippet
} else {
  Write-Output 'No head found in HTML'
}

# Extract link hrefs and script srcs
$linkMatches = [regex]::Matches($content, '<link[^>]+href=["\''](?<h>[^"\'']+)["\'']', [System.Text.RegularExpressions.RegexOptions]::IgnoreCase) | ForEach-Object { $_.Groups['h'].Value }
$scriptMatches = [regex]::Matches($content, '<script[^>]+src=["\''](?<s>[^"\'']+)["\'']', [System.Text.RegularExpressions.RegexOptions]::IgnoreCase) | ForEach-Object { $_.Groups['s'].Value }
$hrefs = @($linkMatches + $scriptMatches) | Where-Object { $_ -and ($_ -match '\.css' -or $_ -match '_next') } | Select-Object -Unique
if (-not $hrefs -or $hrefs.Count -eq 0) { Write-Output 'No CSS or _next assets found in head.' }

foreach ($h in $hrefs) {
  if ($h.StartsWith('/')) { $u = $uri.TrimEnd('/') + $h } elseif ($h -match '^https?:') { $u = $h } else { $u = $uri.TrimEnd('/') + '/' + $h }
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
