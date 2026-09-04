# EDT HMI Studio 日文上台、問答與餐敘訓練包

這是一套從「只記得五十音」開始，練到能完成指定商務任務的自學與陪練教材。目標不是 84 天精通所有日文，而是建立可重複、可驗收的 **任務型流利**：

- 不看逐字稿完成 30 秒、2 分鐘、5 分鐘產品介紹。
- 配合投影片與軟體畫面完成 Demo，出錯時能安全切換備援。
- 回答 GM、VP、通路商與高階技術主管的問題；不知道時不亂猜。
- 在餐敘中維持雙向日常交流，懂得相槌、追問、轉題與禮貌收尾。

產品內容以 `edt-hmi-studio` 的 source snapshot `a7cc2a8`（2026-09-03）為基準。價格、授權、上市狀態、SLA、獨家與其他未核准商務條件，教材都刻意保留確認界線。

## 今天就從這裡開始

第一次只做 35 分鐘，不要從頭把所有文件看完：

1. 花 8 分鐘讀 [產品事實表](00_PRODUCT_TRUTH.md) 的「一句話定位」與「禁止過度宣稱」。
2. 花 10 分鐘練 [生存日文](02_SURVIVAL_JAPANESE.md) 的問候、請重說、確認理解、爭取時間、未知答案五句。
3. 花 10 分鐘練 [30 秒介紹](03_PITCH_30_SECONDS.md)，先看全假名，再只看關鍵字。
4. 花 5 分鐘錄第一次，不停、不剪；檔名依 [recordings 說明](recordings/README.md)。
5. 花 2 分鐘把最大的一個問題記進 [error_log.csv](error_log.csv)。

接著依 [84 天訓練計畫](15_84_DAY_TRAINING_PLAN.md) 前進。每天 75–90 分鐘最好；只有 20 分鐘時，仍要真的開口，不用閱讀取代口說。

## 四條安全規則

1. **先答結論，再補一句依據。** 不用長句掩飾不確定。
2. **現在、條件、未來分開說。** `対応しています`、`構成によります`、`今後の検討項目です` 不可混用。
3. **聽不懂就修復。** 請對方重說、拆題或確認關鍵詞，比猜答案專業。
4. **未知答案要有閉環。** 說明要確認的項目、負責人與回覆日期；不要臨場發明數字或承諾。

## 教材地圖

### 產品事實與訊息

- [00_PRODUCT_TRUTH.md](00_PRODUCT_TRUTH.md)：唯一對外說法基準、產品能力與限制。
- [01_MESSAGE_HOUSE.md](01_MESSAGE_HOUSE.md)：定位、客戶問題、價值、證據與安全邊界。
- [18_GLOSSARY.md](18_GLOSSARY.md)：產品與商務術語；搭配 [glossary.tsv](glossary.tsv)。
- [20_SOURCE_MAP.md](20_SOURCE_MAP.md)：每項產品說法對應的原始碼或文件依據。

### 零基礎發音、文法與聽力

- [02_SURVIVAL_JAPANESE.md](02_SURVIVAL_JAPANESE.md)：上台前必會的救命句。
- [13_PRONUNCIATION.md](13_PRONUNCIATION.md)：長短音、促音、拗音、節拍與產品詞。
- [22_MINIMUM_GRAMMAR.md](22_MINIMUM_GRAMMAR.md)：只教本任務真正需要的固定句型。
- [23_LISTENING_REPAIR_AND_VARIANTS.md](23_LISTENING_REPAIR_AND_VARIANTS.md)：自然語速變體、短問法與聽力修復階梯。
- [21_VOICE_PLAYBOOK.md](21_VOICE_PLAYBOOK.md)：把 ChatGPT Voice 當教練的逐回合指令。
- [pronunciation_terms.tsv](pronunciation_terms.tsv)：可抽題的發音詞表。

### 產品介紹與 Demo

- [03_PITCH_30_SECONDS.md](03_PITCH_30_SECONDS.md)：走道、攤位與初次認識版本。
- [04_PITCH_2_MINUTES.md](04_PITCH_2_MINUTES.md)：短會議版本。
- [05_PITCH_5_MINUTES.md](05_PITCH_5_MINUTES.md)：高階主管完整版本。
- [06_PRESENTATION_TALK_TRACK.md](06_PRESENTATION_TALK_TRACK.md)：投影片逐頁說法與轉場。
- [07_LIVE_DEMO_SCRIPT.md](07_LIVE_DEMO_SCRIPT.md)：Coffee Bar 主線的操作、旁白、證據與失敗備援。
- [07B_SHIZUKU_WASHER_DEMO_SCRIPT.md](07B_SHIZUKU_WASHER_DEMO_SCRIPT.md)：面向日本客戶的 Shizuku 洗衣機情境；只在使用對應範例時採用。
- [日文主管簡報](assets/EDT-HMI-Studio-Japanese-Executive-Briefing.pptx)：7 頁可直接排練的 PPTX；內容邊界已依 source snapshot 標示。

### 高階主管、通路與技術問答

- [08_EXECUTIVE_QA.md](08_EXECUTIVE_QA.md)：GM／VP 的價值、差異、風險與下一步。
- [09_CHANNEL_PARTNER_QA.md](09_CHANNEL_PARTNER_QA.md)：客群、合作方式、價格與通路條件。
- [10_TECHNICAL_QA.md](10_TECHNICAL_QA.md)：架構、板卡、通訊、Emulator、Deploy 與 AI。
- [11_HARD_QUESTIONS_AND_SAFE_ANSWERS.md](11_HARD_QUESTIONS_AND_SAFE_ANSWERS.md)：尖銳題、未知題與不能承諾的題目。
- [12_DISCOVERY_QUESTIONS.md](12_DISCOVERY_QUESTIONS.md)：把單向簡報轉成需求探索。
- [14_ROLE_PLAYS.md](14_ROLE_PLAYS.md)：主管、通路、技術與壓力情境角色扮演。
- [qa_bank.tsv](qa_bank.tsv)：可隨機抽題的問答題庫。
- [flashcards.tsv](flashcards.tsv)：意圖到日文的間隔回想卡。

### 會議、餐敘與禮貌

- [17_MEETING_OPEN_CLOSE_AND_FOLLOWUP.md](17_MEETING_OPEN_CLOSE_AND_FOLLOWUP.md)：開場、議程、收尾與會後追蹤。
- [24_DINING_SMALL_TALK.md](24_DINING_SMALL_TALK.md)：到場、食物、旅行、興趣、追問與離席。
- [25_DINING_ROLE_PLAYS.md](25_DINING_ROLE_PLAYS.md)：餐敘完整場景與突發狀況。
- [26_ETIQUETTE_AND_REGISTER.md](26_ETIQUETTE_AND_REGISTER.md)：對主管、客戶與同事的語域差異。

### 上場控制、評分與最後一天

- [16_ONE_PAGE_CHEAT_SHEET.md](16_ONE_PAGE_CHEAT_SHEET.md)：活動當天唯一建議帶上台的速查頁。
- [19_COACHING_PROMPTS.md](19_COACHING_PROMPTS.md)：可直接貼給文字教練的提示詞。
- [27_EVENT_DAY_RUNBOOK.md](27_EVENT_DAY_RUNBOOK.md)：前一晚、上台前、現場與會後作業。
- [scorecard.csv](scorecard.csv)：Gate 與完整模擬評分。
- [practice_log.csv](practice_log.csv)：每天訓練紀錄。
- [error_log.csv](error_log.csv)：一次只追蹤最重要的錯誤。
- [recordings/README.md](recordings/README.md)：個人錄音命名、評分與隱私規則。

## 三種練法

### 有真人教練或日文同事

請對方不要先改稿。讓他隨機打斷、改短問題、追問理由，並用 scorecard 評分「是否聽懂、是否直接回答、是否守住產品邊界」。發音只優先修正會造成誤解的地方。

### 使用 ChatGPT Voice

依 [21_VOICE_PLAYBOOK.md](21_VOICE_PLAYBOOK.md) 每次只跑一個情境。先要求教練全程日文、一次一題、不要顯示答案；卡住時先給第一個語塊，不要立刻給整句。產品事實則以本目錄文件為準。

### 離線自練

用手機錄影，以繁中「意圖」欄當題目，遮住日文答案。電腦若已安裝真正的 `ja-JP` SAPI voice，可依 [audio/README.md](audio/README.md) 產生慢速與正常速度練習檔；工具不會拿中文語音冒充日文。

## 判定自己能不能上場

不是「稿子背完」就算完成。至少要符合：

- 30 秒、2 分鐘、5 分鐘稿能只看提示卡完成。
- 被打斷後先回答，再用接回句回到主線。
- 隨機 20 題至少 16 題安全作答；未知題零亂猜。
- Demo 出錯時能切備援，不捏造原因。
- 餐敘可維持 25 分鐘，至少四個主題與八個自然追問。
- Final Gate 三次中至少兩次達標，而且是不同日期、不同題序。

詳細門檻、延後規則與 critical error 定義都在 [15_84_DAY_TRAINING_PLAN.md](15_84_DAY_TRAINING_PLAN.md)。正式活動若早於 84 天，先保住安全 pitch、聽力修復、未知答案、Demo 備援，並安排一名可接手複雜問題的同事或口譯。

## 素材與版本

[assets/README.md](assets/README.md) 說明簡報、Demo JSON、品牌圖與截圖來源。截圖中若有舊版 UI，僅作備援示意，不能拿來證明目前版面完全相同。產品原始碼更新後，先重查 `00_PRODUCT_TRUTH.md` 與 `20_SOURCE_MAP.md`，再更新講稿與題庫。
