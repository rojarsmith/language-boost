# Audio practice files

These WAV files are offline backups. The primary training method is ChatGPT Voice; see `../21_CHATGPT_VOICE_PLAYBOOK.md`.

The files use the installed Microsoft Zira English voice. Use them only when Voice is unavailable, the plan allowance is exhausted, or the network is unstable. They are pronunciation and pacing references, not an interactive coach.

## Order

1. `pitch_30s_slow.wav`
2. `pitch_30s_normal.wav`
3. `five_steps_slow.wav`
4. `five_steps_normal.wav`
5. `pitch_2m_slow.wav`
6. `pitch_2m_normal.wav`
7. `rescue_phrases_slow.wav`
8. `rescue_phrases_normal.wav`
9. `meeting_open_close_slow.wav`
10. `meeting_open_close_normal.wav`

## Shadowing method

1. Listen once without speaking.
2. Listen again and mark pauses in the script.
3. Play the slow file and speak half a second behind the voice.
4. Repeat without reading.
5. Move to normal speed only when the slow version is smooth.

Do not imitate the synthetic voice's personality. Copy only word stress, final consonants, and pauses.

## Regenerate on Windows

Run this command from the `audio` directory if you edit the scripts:

```powershell
powershell.exe -NoProfile -ExecutionPolicy Bypass -File .\generate_audio.ps1
```

The default voice is `Microsoft Zira Desktop`. To use another installed SAPI voice, pass `-Voice "voice name"`.
