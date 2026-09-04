# 日語音訊練習

主要練法是 [ChatGPT Voice 陪練](../21_VOICE_PLAYBOOK.md)；本目錄的腳本只是在網路不穩或需要固定重複素材時，產生離線 WAV 備援。

本機在教材建立時只偵測到英文與繁中 SAPI voice，沒有真正的 `ja-JP` voice，所以沒有用錯誤語音硬做日文檔。`generate_audio.ps1` 會先檢查語系；若找不到日語 voice，會列出現有語音並停止，不會拿中文或英文聲音冒充。

## 產生 WAV

先在 Windows 安裝一個日語文字轉語音 voice，然後從本目錄執行：

```powershell
powershell.exe -NoProfile -ExecutionPolicy Bypass -File .\generate_audio.ps1
```

若有多個日語 voice，可指定名稱的一部分：

```powershell
powershell.exe -NoProfile -ExecutionPolicy Bypass -File .\generate_audio.ps1 -Voice "Haruka"
```

只產生其中一種速度：

```powershell
powershell.exe -NoProfile -ExecutionPolicy Bypass -File .\generate_audio.ps1 -Speed Slow
```

產生內容與來源列在 [manifest.tsv](manifest.tsv)。每段有 `slow`（SAPI rate -3）與 `normal`（rate 0）兩版。

## 建議順序

1. `pitch_30s`
2. `workflow`
3. `rescue_phrases`
4. `scope_control`
5. `meeting_open_close`
6. `dining_small_talk`

## Shadowing 方法

1. 不看文字先聽一次，只抓意群。
2. 看來源文件的全假名與停頓，再聽一次。
3. 播 slow，落後聲音半拍跟讀；不要搶拍。
4. 關掉文字，完整說一次並錄音。
5. slow 能不中斷完成三次，再換 normal。
6. 最後關掉音檔，只看繁中意圖說日文。

合成語音只能當節奏與重複素材，不能視為唯一的 pitch accent 標準。每週至少一次讓真人或 Voice 模式檢查可懂度；以「對方第一次是否聽懂」為準，不追求模仿機械聲音。
