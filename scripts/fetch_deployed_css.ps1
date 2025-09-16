$uri = 'https://www.chronix.world/_next/static/css/ceec7adcf043d5a2.css'
try {
  $resp = Invoke-WebRequest -Uri $uri -UseBasicParsing -TimeoutSec 30
} catch {
  Write-Error "Failed to fetch $uri : $($_.Exception.Message)"
  exit 1
}
$path = Join-Path $env:TEMP 'deployed_ceec7adcf.css'
$resp.Content | Out-File -FilePath $path -Encoding utf8
Write-Output "Saved to: $path"
$patterns = @('antialiased','bg-gradient-to-br','text-gray-700')
foreach ($p in $patterns) {
  $found = Select-String -Path $path -Pattern $p -AllMatches
  if ($found) {
    Write-Output "Pattern '$p' FOUND:" 
    $found | ForEach-Object { Write-Output $_.Line.Trim() }
  } else {
    Write-Output "Pattern '$p' not found"
  }
}
Write-Output '--- First 200 chars of file ---'
Get-Content -Path $path -TotalCount 5 | ForEach-Object { Write-Output $_ }
