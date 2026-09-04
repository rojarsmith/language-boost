# 日文訓練包素材

此目錄讓 `japanese/` 可獨立進行簡報與 Demo 備援，不必依賴 `english/`。

## 內容

- `EDT-HMI-Studio-Japanese-Executive-Briefing.pptx`：七頁日文高階簡報，逐頁講稿見 [06_PRESENTATION_TALK_TRACK.md](../06_PRESENTATION_TALK_TRACK.md)。
- `hero-vivid.png`：簡報首頁插畫。
- `logo-horizontal-green.svg`：來源產品的綠色橫式 Logo。
- `screenshots/shot-*.png`：既有行銷畫面，適合 Demo 故障時備援。
- `screenshots/assistant-panel.png`、`preferences.png`：2026-09-02 的舊版 AI 助理畫面；尚未顯示後續新增的 Ollama provider 選擇。
- `demo/evk043027b-coffee-bar.json`：從產品 snapshot 複製的 EVK Coffee Bar 專案。
- `demo/f746-washing-machine.json`、`demo/evk043027b-washing-machine.json`：a7cc2a8 已追蹤的 Shizuku 日本洗衣機 Demo。

## 重要版本標示

產品來源快照：`C:\my\build\github\edt-hmi-studio`，branch `main`，HEAD `a7cc2a88204b71a3480042b267b8d3cfa816c2ef`，盤點日 2026-09-03。後續工作樹變動不屬於本快照。

`shot-design.png`、`shot-logic.png`、`shot-protocol.png`、`shot-preview.png`、`shot-splash.png` 原本是較早期的行銷素材，介面與當前版本可能不同。使用時要說：

> こちらはバックアップ用の画面です。現在の画面とは一部異なりますが、ご説明しているワークフローは同じです。  
> こちら は バックアップよう の がめん です。/ げんざい の がめん とは いちぶ ことなります が、/ ごせつめい して いる ワークフロー は おなじ です。

不要用舊畫面證明目前的精確 UI、元件數、通訊狀態或上市狀態。

## Demo 專案的已驗證數字

`evk043027b-coffee-bar.json` 在來源快照中有：

- 5 個 screens、51 個 top-level component placements。
- 3 個 languages、41 個 text resources。
- 23 個 tags、1 個 Modbus RTU link、1 個 device。
- 1 個 logic graph、22 個 animations。
- 0 個 image/font/video media payloads；不要把此 EVK Demo 說成影片播放範例。

Shizuku 的兩個檔案都有 8 screens、3 languages、102 texts、43 Modbus RTU tags、1 device、17 logic graphs。F746 為 334 widgets／75 animations／695 nodes／657 connections；EVK 為 325／72／693／655；兩者各 27 timer nodes。兩版都 build 過 firmware，只有 F746 在 Emulator 跑過指定流程，兩版都沒有 flash 到實體板。

兩個版本不是完整 byte-for-byte 相同；展示時說明它們共用產品概念與資料設計，但包含板卡專屬 UI／logic 差異。

數字是示範專案內容，不是產品效能上限。

