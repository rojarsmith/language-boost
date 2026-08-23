# EDT HMI Studio 英文上台與高階問答訓練包

這套教材的目標不是讓你「看得懂英文」，而是讓你能用短、穩、準的英文：

1. 在 30 秒內說清楚產品是什麼。
2. 用 2 到 5 分鐘介紹產品價值。
3. 配合現有兩頁簡報與 Coffee Machine 範例完成 Demo。
4. 面對海外子公司、通路商的總經理、副總與高階經理人進行問答。
5. 不知道答案時，仍能專業地控場，而不是猜測或過度承諾。

教材依 `C:\my\build\github\edt-hmi-studio` 在 2026-08-23 的內容整理。技術基準為 commit `cfe419c`；來源專案另有兩個未提交修改，因此正式對外前仍要跑一次 [產品事實檢查](00_PRODUCT_TRUTH.md)。

## 主訓練工具：ChatGPT Voice

這套教材現在以 [ChatGPT Voice 主訓練手冊](21_CHATGPT_VOICE_PLAYBOOK.md) 為入口。Voice 負責示範、逐句跟讀、即時糾錯、隨機追問、打斷與角色扮演；`audio/` 的 WAV 只在 Voice 不可用時當離線備援。

依官方操作方式，必須先開一個新的空白 Chat 或 Codex task，並在送出第一則訊息前選擇 **Start new voice chat**。若只在既有文字 task 按麥克風，得到的是語音輸入，不是完整 Voice 對話。

## 今天就開始

第一次只做四件事，不要一次讀完：

1. 在 ChatGPT 桌面版為這個 workspace 開一個新的空白 Codex task，先啟動 Voice。
2. 打開 [Voice 主訓練手冊](21_CHATGPT_VOICE_PLAYBOOK.md)，對 Voice 說裡面的「總教練指令」。
3. 說「開始 Day 1」，讓 Voice 一次帶你練 [30 秒產品介紹](03_PITCH_30_SECONDS.md) 的一句。
4. 最後完整說一次並請 Voice 評分，再把結果填入 [練習紀錄](practice_log.csv)。

達到「不看稿、45 秒內講完、沒有停住超過兩秒」後，才進入 2 分鐘版本。

## 學習路線

### 第一階段：活下來

- [ChatGPT Voice 主訓練手冊](21_CHATGPT_VOICE_PLAYBOOK.md)
- [產品事實與不可亂答事項](00_PRODUCT_TRUTH.md)
- [產品訊息屋：到底要講什麼](01_MESSAGE_HOUSE.md)
- [英文白癡也能用的句型](02_SURVIVAL_ENGLISH.md)
- [30 秒產品介紹](03_PITCH_30_SECONDS.md)

### 第二階段：上台介紹

- [2 分鐘產品介紹](04_PITCH_2_MINUTES.md)
- [5 分鐘高階主管版](05_PITCH_5_MINUTES.md)
- [現有兩頁簡報逐字稿](06_TWO_SLIDE_TALK_TRACK.md)
- [Coffee Machine 現場 Demo 腳本](07_LIVE_DEMO_SCRIPT.md)

### 第三階段：高階問答

- [總經理／副總問答](08_EXECUTIVE_QA.md)
- [海外子公司／通路商問答](09_CHANNEL_PARTNER_QA.md)
- [技術主管問答](10_TECHNICAL_QA.md)
- [尖銳問題、未知答案與救命句](11_HARD_QUESTIONS_AND_SAFE_ANSWERS.md)
- [你應該反問對方的探索問題](12_DISCOVERY_QUESTIONS.md)

### 第四階段：流利與臨場感

- [發音、重音、停頓與台灣人常見錯誤](13_PRONUNCIATION.md)
- [六種角色扮演](14_ROLE_PLAYS.md)
- [42 天訓練計畫](15_42_DAY_TRAINING_PLAN.md)
- [上台一頁速查表](16_ONE_PAGE_CHEAT_SHEET.md)
- [會議開場、結尾與會後 Email](17_MEETING_AND_EMAIL_TEMPLATES.md)
- [產品與商務詞彙表](18_GLOSSARY.md)
- [ChatGPT Voice 專項陪練提示詞](19_COACHING_PROMPTS.md)
- [說法到原始資料的對照](20_SOURCE_MAP.md)

## 可匯入工具的練習檔

- [flashcards.tsv](flashcards.tsv)：可匯入 Anki、Quizlet 或試算表。
- [scorecard.csv](scorecard.csv)：每次錄音後評分。
- [practice_log.csv](practice_log.csv)：記錄每天練習與卡住的問題。
- [audio/README.md](audio/README.md)：Voice 不可用時的離線備援音檔。
- [assets/README.md](assets/README.md)：原始簡報、文宣與產品畫面，可離線練習 Demo。

## 三條鐵則

1. **短句比高級字重要。** 一句只講一件事。
2. **先回答，再解釋。** 不要用背景故事逃避問題。
3. **未知就標明未知。** 價格、授權、上市、區域權利與服務承諾，沒有公司核准答案就不要猜。

你不需要像母語人士。你需要做到：對方第一次就聽懂、產品事實正確、問題有被回答、下一步很清楚。
