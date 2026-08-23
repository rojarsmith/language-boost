param(
    [string]$Voice = "Microsoft Zira Desktop"
)

$ErrorActionPreference = "Stop"

$clips = @(
    @{
        Name = "pitch_30s"
        Text = "Good morning. This is E D T, H M I Studio. It is a no-code development environment for embedded touch interfaces. Users can design screens, connect device values, test the generated application, and deploy to supported hardware. Everything stays in one project. The goal is shorter development cycles and fewer integration problems."
    },
    @{
        Name = "five_steps"
        Text = "The workflow has five simple steps. First, design the screens. Second, define the logic. Third, connect the device protocol and tags. Fourth, run the generated application in the Emulator. Finally, build the firmware and flash supported hardware."
    },
    @{
        Name = "pitch_2m"
        Text = "Good morning, and thank you for your time. Today I would like to introduce E D T, H M I Studio, our visual development environment for embedded touch interfaces. Embedded H M I development is often split across several tools. One person designs the screen, another writes the application logic, and another connects the device protocol and builds the firmware. Integration problems often appear late, when the team finally tests on hardware. E D T, H M I Studio brings that work into one project. Users can design screens visually, define behavior with events and logic graphs, connect named values to a device, and generate the embedded application without starting from hand-written C. The workflow has five simple steps. First, design the screens. Second, define the logic. Third, connect the device protocol and tags. Fourth, run the generated application in the Emulator. Finally, build the firmware and flash supported hardware. The Emulator is an important difference. It compiles the generated C with real L V G L and runs the events, logic, and simulated device communication. This lets the team find many integration issues before the target board is available. The current source includes three board profiles and supports Modbus R T U and configurable serial command protocols on the implemented serial paths. It also includes multi-screen design, animations, multilingual text, images, fonts, and board-aware deployment checks. The goal is straightforward: shorten the development cycle, reduce handoff errors, and make H M I projects easier to evaluate, deploy, and support. We would like to understand your target customers, boards, and protocols, and then validate the best first use case together."
    },
    @{
        Name = "rescue_phrases"
        Text = "Sorry, could you say that once more, a little more slowly? If I understand your question correctly, you are asking about the commercial model. Is that right? There are two parts to that question. Let me take the technical part first. I do not want to give you an unofficial answer. I will confirm that with our team and follow up by Tuesday. Let me return to the key point."
    },
    @{
        Name = "meeting_open_close"
        Text = "Good morning. Thank you for making time for this discussion. We have forty-five minutes. I suggest a five-minute introduction, a short product demo, and then a discussion of your market and questions. Does that work for you? The best next step is to select one target board, one protocol, and one customer use case, and validate the complete workflow together. I will send a summary, the open questions, the owners, and the agreed dates after the meeting."
    }
)

$rates = @(
    @{ Suffix = "slow"; Rate = -3 },
    @{ Suffix = "normal"; Rate = 0 }
)

foreach ($clip in $clips) {
    foreach ($rate in $rates) {
        $synth = New-Object -ComObject SAPI.SpVoice
        $stream = New-Object -ComObject SAPI.SpFileStream
        try {
            $selectedVoice = $null
            for ($index = 0; $index -lt $synth.GetVoices().Count; $index++) {
                $candidate = $synth.GetVoices().Item($index)
                if ($candidate.GetDescription().StartsWith($Voice)) {
                    $selectedVoice = $candidate
                    break
                }
            }
            if ($null -eq $selectedVoice) {
                throw "Speech voice not found: $Voice"
            }

            $synth.Voice = $selectedVoice
            $synth.Rate = $rate.Rate
            $outputPath = Join-Path $PSScriptRoot ("{0}_{1}.wav" -f $clip.Name, $rate.Suffix)
            $stream.Format.Type = 22
            $stream.Open($outputPath, 3, $false)
            $synth.AudioOutputStream = $stream
            [void]$synth.Speak($clip.Text)
        }
        finally {
            $stream.Close()
            [void][Runtime.InteropServices.Marshal]::FinalReleaseComObject($stream)
            [void][Runtime.InteropServices.Marshal]::FinalReleaseComObject($synth)
        }
    }
}
