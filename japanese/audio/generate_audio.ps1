param(
    [string]$Voice = "",
    [string]$OutputDirectory = $PSScriptRoot,
    [ValidateSet("All", "Slow", "Normal")]
    [string]$Speed = "All"
)

$ErrorActionPreference = "Stop"
Set-StrictMode -Version Latest

$manifestPath = Join-Path $PSScriptRoot "manifest.tsv"
if (-not (Test-Path -LiteralPath $manifestPath)) {
    throw "Audio manifest not found: $manifestPath"
}

$rows = @(Import-Csv -LiteralPath $manifestPath -Delimiter "`t" -Encoding utf8)
if ($rows.Count -eq 0) {
    throw "Audio manifest is empty: $manifestPath"
}

if (-not (Test-Path -LiteralPath $OutputDirectory)) {
    New-Item -ItemType Directory -Path $OutputDirectory -Force | Out-Null
}

$probe = New-Object -ComObject SAPI.SpVoice
try {
    $allTokens = $probe.GetVoices()
    $installed = @()
    $japanese = @()

    for ($index = 0; $index -lt $allTokens.Count; $index++) {
        $token = $allTokens.Item($index)
        $description = $token.GetDescription()
        $language = ""
        try {
            $language = $token.GetAttribute("Language")
        }
        catch {
            $language = "unknown"
        }

        $entry = [pscustomobject]@{
            Token = $token
            Description = $description
            Language = $language
        }
        $installed += $entry

        # Japanese locale ID is 0x0411. SAPI commonly exposes it as 411.
        if ($language -match "(?i)(^|;)0*411(;|$)") {
            $japanese += $entry
        }
    }

    if ($japanese.Count -eq 0) {
        $voiceList = ($installed | ForEach-Object { "  - $($_.Description) [Language=$($_.Language)]" }) -join [Environment]::NewLine
        throw "No Japanese ja-JP SAPI voice is installed. The script will not use a Chinese or English voice as a fallback. Installed voices:`n$voiceList"
    }

    if ([string]::IsNullOrWhiteSpace($Voice)) {
        $selected = $japanese[0]
    }
    else {
        $matches = @($japanese | Where-Object { $_.Description -like "*$Voice*" })
        if ($matches.Count -eq 0) {
            $available = ($japanese | ForEach-Object { "  - $($_.Description)" }) -join [Environment]::NewLine
            throw "Japanese voice not found: $Voice`nAvailable Japanese voices:`n$available"
        }
        $selected = $matches[0]
    }

    Write-Host "Japanese voice: $($selected.Description)"

    foreach ($row in $rows) {
        if ($Speed -ne "All" -and $row.speed -ne $Speed.ToLowerInvariant()) {
            continue
        }

        $synth = New-Object -ComObject SAPI.SpVoice
        $stream = New-Object -ComObject SAPI.SpFileStream
        try {
            $synth.Voice = $selected.Token
            $synth.Rate = [int]$row.sapi_rate
            $outputPath = Join-Path $OutputDirectory $row.output_file

            # SAFT22kHz16BitMono: small, speech-oriented PCM WAV.
            $stream.Format.Type = 22
            $stream.Open($outputPath, 3, $false)
            $synth.AudioOutputStream = $stream
            [void]$synth.Speak($row.japanese)
            Write-Host "Created: $outputPath"
        }
        finally {
            try { $stream.Close() } catch { }
            [void][Runtime.InteropServices.Marshal]::FinalReleaseComObject($stream)
            [void][Runtime.InteropServices.Marshal]::FinalReleaseComObject($synth)
        }
    }
}
finally {
    [void][Runtime.InteropServices.Marshal]::FinalReleaseComObject($probe)
}
