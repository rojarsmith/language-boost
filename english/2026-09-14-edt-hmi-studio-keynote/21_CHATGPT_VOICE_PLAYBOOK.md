# ChatGPT Voice 主訓練手冊

這是整套教材的主要入口。你不需要 API Key；ChatGPT 訂閱與 API 是不同的計費系統。若你的方案與 workspace 可使用 Voice，就用 Voice 做示範、跟讀、即時糾錯與角色扮演。`audio/` 只作離線備援。

目前官方操作重點：Voice 可以在 chat 內使用，不必每次建立空白對話。在 ChatGPT 桌面版選擇 Work 或 Codex、開啟這個本機資料夾、選擇 Voice control、允許麥克風後即可開始。Voice 會使用該體驗可用的檔案、工具與權限；同一時間只能有一場 Voice 對話。方案、workspace、地區與 app 版本可能影響可用選項與額度。官方說明：[ChatGPT Voice](https://help.openai.com/en/articles/20001274)、[ChatGPT Work and Codex](https://help.openai.com/en/articles/20001275/)、[ChatGPT 與 API 分開計費](https://help.openai.com/en/articles/9039756-managing-billing-for-chatgpt-and-the-api-platform)。

## 第一次設定

1. 開啟最新版 ChatGPT 桌面版並登入。
2. 選擇 Work 或 Codex，開啟 `C:\my\build\github\language-boost`。
3. 選擇 Voice control，第一次使用時允許麥克風權限。
4. 若設定中有 Live、Advanced 或 Standard，選擇你的方案可用且最適合自然對話的模式。
5. 說下面的「總教練指令」，再說「開始 Day 1」。

如果語音只變成可編輯文字、ChatGPT 沒有用聲音回答，你可能使用的是 Dictation。請選擇 Voice control。Voice 可以在現有 chat 中繼續，不需要為此刪除內容或重開空白 task。

## 總教練指令

可以直接用中文對 Voice 說：

> 請讀取這個 workspace 的 `english/2026-09-14-edt-hmi-studio-keynote/00_PRODUCT_TRUTH.md`、`english/2026-09-14-edt-hmi-studio-keynote/03_PITCH_30_SECONDS.md` 和 `english/2026-09-14-edt-hmi-studio-keynote/13_PRONUNCIATION.md`。把我當完全不會英文口說的初學者。練習主要用英文，糾正使用繁體中文。一次只示範一句或問一題，說完一定要停下來等我。每輪最多糾正一個最影響理解的發音問題，以及一個產品事實或回答結構問題。不要一次教很多文法。先讓我完成，不要中途搶答。產品內容只能使用教材中確認過的事實；未知事項教我說需要確認，不准替公司發明答案。每場結束只給一個優點和一個明天最優先修正的地方。

若 Voice 沒有讀取檔案，說：

> Please read the three files before we begin. Tell me only when you are ready. Do not summarize them aloud.

## 六條訓練規則

1. **你說話至少占 60%。** Voice 說太久就打斷它。
2. **一次一句或一題。** 一次十題沒有口說訓練效果。
3. **先說完再糾正。** 不要在每個單字後停下來分析。
4. **每輪只修兩件事。** 優先修「聽不懂」與「產品說錯」。
5. **錯了要立刻重說。** 聽懂建議但不重說，不算練習。
6. **不知道就安全回答。** 不猜價格、授權、上市、SLA、獨家或未確認技術能力。

## Day 1：20 分鐘照表做

### 0–2 分鐘：開場

說總教練指令，接著說：

> 開始 Day 1。今天只練 30 秒極簡安全版，不做技術問答。

### 2–10 分鐘：一句一句 echo

說：

> Read sentence one slowly, then at normal speed. Wait for me to repeat. Correct only the biggest pronunciation problem, then ask me to repeat the same sentence.

六句內容：

> Good morning.  
> This is EDT HMI Studio.  
> It is a no-code development environment for embedded touch interfaces.  
> Users can design screens, connect device values, test the generated application, and deploy to supported hardware.  
> Everything stays in one project.  
> The goal is shorter development cycles and fewer integration problems.

每句至少重複三次。第三次才要求正常速度。

### 10–15 分鐘：兩句一組

說：

> Now give me two sentences at a time. Do not show me the answer until I try. If I stop, give me only the first two words.

順序分成三組：開場、產品與流程、價值。

### 15–18 分鐘：完整一次

說：

> Let me deliver the full introduction. Do not interrupt me. Start timing when I say “Good morning.” Give feedback only after I finish.

即使卡住也不要重來；忘記一句就跳下一句。

### 18–20 分鐘：評分與紀錄

說：

> 用繁體中文告訴我一個做得好的地方和一個明天最優先修正的地方。再用 0 到 2 分評估：事實正確、容易聽懂、發音、速度停頓、不中斷。不要給其他建議。

把結果填入 `practice_log.csv`。Day 1 的目標不是好聽，而是完整說完。

## 隨時可用的控制句

Voice 太快：

> Slower, please. Say one sentence only.

Voice 講太多：

> Stop there. Let me answer before you explain.

沒有等你：

> Please wait until I say “finished.”

只想再聽一次：

> Repeat exactly the same sentence. No explanation.

聽不懂問題：

> Sorry, could you say that once more, a little more slowly?

需要中文糾正：

> Give the correction in Traditional Chinese, then ask me to answer again in English.

難度太高：

> Make the question simpler, but keep it in English.

難度太低：

> Ask the same question again in natural executive-level English.

## 六級難度

| Level | Voice 做什麼 | 你的過關標準 |
|---|---|---|
| 0 Echo | 念一句，等你逐字重複 | 主要單字可聽懂 |
| 1 Recall | 給前兩字，讓你完成句子 | 六句不中斷 |
| 2 Basic Q&A | 一次問一個基本產品問題 | 20–30 秒直接回答 |
| 3 Executive Q&A | 追問價值、差異、風險與下一步 | 先回答再解釋 |
| 4 Pressure | 打斷、質疑、改寫問題 | 不猜、不失去結構 |
| 5 Full meeting | 主持 pitch、Demo、Q&A、收尾 | 完整一次到底 |

未通過就留在同一級，不用因為日期到了硬升級。

## 專項模式指令

### 30 秒脫稿

> Read `english/2026-09-14-edt-hmi-studio-keynote/03_PITCH_30_SECONDS.md`. Ask me for the seven message cards one at a time. Then ask me to deliver the full pitch without showing the script. Do not interrupt. Afterward, correct one clarity issue and one fact issue, and make me try again.

### 發音教練

> Read `english/2026-09-14-edt-hmi-studio-keynote/13_PRONUNCIATION.md`. Choose five words from today's script. Say each word, use it in the original sentence, and wait for me to repeat. Correct only stress, final consonants, and sounds that change understanding. Do not teach phonetic theory unless I ask.

### 總經理／副總問答

> Read `english/2026-09-14-edt-hmi-studio-keynote/00_PRODUCT_TRUTH.md` and `english/2026-09-14-edt-hmi-studio-keynote/08_EXECUTIVE_QA.md`. Act as a skeptical overseas subsidiary general manager. Ask one question at a time and wait until I say “finished.” After each answer, tell me whether I answered directly and whether the product facts were safe. Keep each improved answer under 25 seconds.

### 通路商談判

> Read `english/2026-09-14-edt-hmi-studio-keynote/00_PRODUCT_TRUTH.md` and `english/2026-09-14-edt-hmi-studio-keynote/09_CHANNEL_PARTNER_QA.md`. Act as the vice president of a large distributor. Ask about target customers, margin, exclusivity, training, support, deal ownership, and next steps, but discuss only one topic at a time. If I make an unapproved commitment, stop the role-play, explain the risk in Traditional Chinese, and make me answer safely in English.

### 技術主管問答

> Read `english/2026-09-14-edt-hmi-studio-keynote/00_PRODUCT_TRUTH.md` and `english/2026-09-14-edt-hmi-studio-keynote/10_TECHNICAL_QA.md`. Act as an embedded systems director. Begin with simple questions and increase the difficulty only after three correct answers. Stop me if I present roadmap work as a current production feature. Keep model answers under 30 seconds.

### 聽不懂與救命句

> Ask one product question in natural business English. Rephrase it when I ask, but do not switch to Chinese. Train me to request repetition, confirm the topic, split a question into two parts, and promise a verified follow-up when the answer is unknown.

### 被打斷後接回

> Let me begin the two-minute pitch. Interrupt me at a random point with one relevant executive question. After I answer, wait for me to say “Let me return to the key point” and continue the pitch. Do this only twice in one session.

### 完整正式彩排

> Read `english/2026-09-14-edt-hmi-studio-keynote/23_30_MINUTE_KEYNOTE_SCRIPT.md`, `english/2026-09-14-edt-hmi-studio-keynote/25_SLIDE_STORYBOARD.md`, and the product truth file. Host one complete 30-minute keynote rehearsal, followed by fifteen minutes of mixed executive, channel, and technical Q&A. Stay in character and use English until I say “end simulation.” Ask only one question at a time. At the end, report timing, score me with the role-play rubric, and give only three priorities.

## 產品事實護欄

若 Voice 提供的產品答案與 `00_PRODUCT_TRUTH.md` 衝突，以事實表為準。立刻說：

> Stop. Check that answer against `english/2026-09-14-edt-hmi-studio-keynote/00_PRODUCT_TRUTH.md`. Do not turn an unapproved item into a product claim.

未知事項一律練這句：

> I do not want to give you an unofficial answer. I will confirm that with our team and follow up by Tuesday.

不得自行承諾：價格、授權、上市日期、試用條件、SLA、區域獨家、正式 macOS/Linux 支援、CAN、Ethernet，以及尚未確認的 RS-485 release 狀態。

## 每場結束指令

> End the role-play. Give me one strength, one priority correction, and five scores from zero to two: fact accuracy, clarity, pronunciation, pace and pauses, and directness. Then give me one exact opening question for tomorrow. Use Traditional Chinese except for the English sentence I must practice.

把結果寫進 `practice_log.csv`。下一次只修「priority correction」，不要每天重新追十個問題。

## Voice 不可用時

若達到方案額度、網路不穩或 Voice 尚未開放：

1. 使用 `audio/` 的慢速 WAV 做 echo。
2. 用手機錄完整版本。
3. 依 `scorecard.csv` 自評。
4. Voice 恢復後，先把昨天最卡的一句拿來糾正，不必重做整天。
