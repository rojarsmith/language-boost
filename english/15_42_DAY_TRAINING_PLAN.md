# 42 天 ChatGPT Voice 英文上台訓練計畫

每天 45 分鐘，以 ChatGPT Voice 為主教練。若只能做 20 分鐘，優先順序是：Voice 跟讀、脫稿、Voice 問答、紀錄。

每次都要開新的空白 Voice task，先說 [Voice 主訓練手冊](21_CHATGPT_VOICE_PLAYBOOK.md) 的總教練指令，再說當天 Day 編號。不要在同一場練發音、背稿、商務談判和技術問答。

## 每天固定流程

1. **5 分鐘**：請 Voice 依 [發音表](13_PRONUNCIATION.md) 做五個字的熱身。
2. **10 分鐘**：Voice 一次念一句；你逐句 echo，再做一次 shadowing。
3. **10 分鐘**：叫 Voice 不提示內容；你只看訊息卡重講。
4. **10 分鐘**：Voice 一次問一題；你每題在 30 秒內回答。
5. **5 分鐘**：完整說一遍；Voice 不可中途糾正，只在結束後評分。
6. **5 分鐘**：把 Voice 給的「一個優點＋一個優先修正」填入 `practice_log.csv` 與 `scorecard.csv`。

Echo：Voice 說完後你重複。Shadowing：Voice 開始後慢半秒跟著說。第一輪看稿，第二輪只看關鍵字，第三輪不看。Voice 不可用時才改用 `audio/` 的 WAV。

## Week 1 — 讓嘴巴能動

| Day | 任務 | 當天產出 |
|---|---|---|
| 1 | Voice 一次示範一句；六句各 echo 五次 | 第一次完整回答，不重來 |
| 2 | 請 Voice 專練 EDT、HMI、no-code、embedded、interface | 六句極簡版完整一次 |
| 3 | 練 design、connect、generated、deploy、supported | 45 秒內完整一次 |
| 4 | 只看六張訊息卡講，不看全文 | 兩次不中斷錄音 |
| 5 | Voice 隨機問五個基本追問 | 每題 20 秒內 |
| 6 | 站著講，手放自然；看鏡頭 | 30 秒影片 |
| 7 | 模擬第一次見面：問候＋30 秒＋收尾 | Gate 1 測驗 |

Gate 1：不看稿、45 秒內、沒有停住超過兩秒、產品範圍正確。未過就重複 Day 4–7，不急著往下。

## Week 2 — 2 分鐘有結構

| Day | 任務 | 當天產出 |
|---|---|---|
| 8 | 只練「痛點」段 | 20 秒 Problem statement |
| 9 | 只練「解法」段 | 20 秒 Solution statement |
| 10 | 練五步 Design / Logic / Connect / Validate / Deploy | 五步 40 秒 |
| 11 | 練 Emulator 差異 | 25 秒回答 |
| 12 | 練目前範圍與限制 | 30 秒回答 |
| 13 | 六段訊息卡串起來 | 2 分 30 秒內 |
| 14 | 叫 Voice 隨機打斷，再用英文接回 | Gate 2 測驗 |

Gate 2：2 分 30 秒內；順序正確；被問一題後可用 `Let me return to the key point.` 接回。

## Week 3 — 配合投影片與 Demo

| Day | 任務 | 當天產出 |
|---|---|---|
| 15 | Slide 1 標題＋一句定位 | 45 秒 |
| 16 | Slide 1 五張卡 | 2 分鐘 |
| 17 | Slide 2 四張截圖 | 90 秒 |
| 18 | 練未核准 release 說法 | 20 秒安全版 |
| 19 | Coffee Demo：Design＋Text | 2 分鐘 |
| 20 | Coffee Demo：Protocol＋Emulator | 3 分鐘 |
| 21 | 全部 7 分鐘 Demo；使用計時器 | Gate 3 測驗 |

Gate 3：沒有從空白專案開始；每個畫面只證明一件事；知道 Coffee example 沒有 logic graph；Demo 失敗時能切備援。

## Week 4 — 問答基本功

| Day | 任務 | 當天產出 |
|---|---|---|
| 22 | Voice 一次問一題，練 A-B-C 回答法 | 10 題，每題 30 秒 |
| 23 | Executive Q&A 1–10 | 隨機 5 題 |
| 24 | Executive Q&A 11–18 | 隨機 5 題 |
| 25 | Executive Q&A 19–25 | 所有未知題都含 owner + date |
| 26 | Executive Q&A 26–32 | 每題有 next step |
| 27 | 練聽不懂、重說、確認問題 | 10 次不尷尬 |
| 28 | Voice 主持 15 分鐘高階會議 | Gate 4 測驗 |

Gate 4：80% 問題第一句直接回答；任何 `[CONFIRM]` 題都不猜；平均每題 35 秒內。

## Week 5 — 通路與商務壓力

| Day | 任務 | 當天產出 |
|---|---|---|
| 29 | 通路價值與 target customer | 60 秒通路 pitch |
| 30 | Margin / pricing / exclusivity | 三題安全回答 |
| 31 | Training / support / escalation | 90 秒合作模型 |
| 32 | Deal registration / account ownership | 兩個未知答案 |
| 33 | 反問通路商十題 | 不看稿問五題 |
| 34 | Role Play 2、3、5 | 每場 10 分以上 |
| 35 | Voice 主持 20 分鐘通路商會議 | Gate 5 測驗 |

Gate 5：能把產品、商務條件、partner enablement 分成三條 workstream；不被獨家或價格逼出承諾。

## Week 6 — 技術與臨場壓力

| Day | 任務 | 當天產出 |
|---|---|---|
| 36 | 技術 Q&A：architecture / Emulator / codegen | 隨機 8 題 |
| 37 | 技術 Q&A：protocol / tags / roles | 隨機 8 題 |
| 38 | 技術 Q&A：boards / fonts / video / deploy | 隨機 8 題 |
| 39 | 尖銳問題 1–8 | 每題 30 秒 |
| 40 | 尖銳問題 9–15＋Demo failure | 每題 30 秒 |
| 41 | Voice 主持完整彩排：5 分鐘 pitch＋7 分鐘 Demo＋15 分鐘 Q&A | 看錄影自評 |
| 42 | Voice 主持正式模擬：穿正式服裝、一次到底、不重來 | Final Gate |

Final Gate：

- 5 分鐘稿在 4:30–5:30。
- Demo 在 7 分鐘內。
- 15 分鐘 Q&A 沒有過度承諾。
- 聽不懂時能請對方重說。
- 至少提出三個高品質探索問題。
- 收尾有 owner、next step、date。

## 每週只改善一件事

- Week 1：不停止。
- Week 2：有結構。
- Week 3：動作與說話同步。
- Week 4：先回答。
- Week 5：不亂承諾。
- Week 6：在壓力下仍然短、穩、準。

不要每天同時修文法、口音、手勢、內容與速度。那會讓嘴巴再次鎖住。
