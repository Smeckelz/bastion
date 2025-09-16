$uri = 'https://www.chronix.world'
try {
  $r = Invoke-WebRequest -Uri $uri -UseBasicParsing -TimeoutSec 30
} catch {
  Write-Error "Failed to fetch $uri : $($_.Exception.Message)"
  exit 1
}
$hdrPath = Join-Path $env:TEMP 'chronix_headers.txt'
$bodyPath = Join-Path $env:TEMP 'chronix_body.html'
$r.Headers | Format-List | Out-File -FilePath $hdrPath -Encoding utf8
$r.Content | Out-File -FilePath $bodyPath -Encoding utf8
Write-Output "Saved headers to: $hdrPath"
Write-Output "Saved body to: $bodyPath"
Write-Output '--- First 800 chars of body ---'
Get-Content -Path $bodyPath -TotalCount 40 | ForEach-Object { Write-Output $_ }
