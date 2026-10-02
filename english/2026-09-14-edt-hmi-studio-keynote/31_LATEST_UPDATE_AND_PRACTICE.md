# EDT HMI Studio 新版重點與口說練習

這一份讓你接上 2026-10-02 的產品進度，不必重背整套演說。先練八句短句，再做三題問答；30 分鐘 keynote 仍是原本兩章，現場與海外線上觀眾歡迎詞保留。

## 今天先知道什麼

公開網站仍是 **0.8.5 Alpha**。來源專案最新 release tag 是 **0.8.9**，本教材固定採用 **0.9.0-dev 開發分支 2df2b5dc**（2026-10-02 18:46:45 提交），另有未提交修改。這四層不是同一個版本。

| 本次新增或修正 | 對觀眾的意義 | 不要誤說 |
|---|---|---|
| Virtual Model 與規格匯出 | 板卡還沒做好，可以先討論互動與規格 | 任意板卡都可以直接燒錄 |
| Checks 與 live logic trace | 保存情境、重跑、查看邏輯結果 | 綠燈代表通過實機或安全認證 |
| Pages、Show when、Selected when、Words | 數值可決定區域分頁、顯示、選取外觀與文字 | 公開 Alpha 已有所有新功能 |
| 元件數與 Simulator | 正常 palette 21 個；Factory 27；Simulator 現為 LVGL 9.5 | 舊版 25 個數字仍通用，或 Simulator 等同 Emulator |
| .ehsp、F746 QSPI、host-interface export | 專案保存、資源配置與交付資料更完整 | Windows／Web／Linux 全部操作一樣 |
| Reading Distance 與 glass reminders | 已提交的開發版可讀性提醒；Scroll round 另有未提交工作 | 公開 Alpha 已有，或提醒等於認證 |
| 新版授權文字 | 有 proprietary、EDT displays 限定的 in-app terms | README 的 MIT 已解決全部授權問題 |

完整證據見 [產品事實](00_PRODUCT_TRUTH.md) 與 [來源表](20_SOURCE_MAP.md)。功能進展不等於營收進展：US$200M 算式保留為假設，不增加虛構客戶、訂單或成功率。

## 先練八句

斜線是短停頓，不要念出。每次只練一句；中文是理解提示，不是要在台上翻譯。

| # | 英文 | 中文意思 |
|---:|---|---|
| 1 | The public download / is still the Alpha. | 公開下載仍是 Alpha。 |
| 2 | Today, / I am showing a development build. | 今天展示的是開發版。 |
| 3 | We can design the screen / before the board exists. | 板卡還沒出來，就能先設計畫面。 |
| 4 | We can test the interaction / and share a specification. | 可以測試互動，也可以分享規格。 |
| 5 | A Virtual Model / cannot program a real board. | 虛擬機型不能燒錄實體板卡。 |
| 6 | We can save a Check / and run it again. | 可以保存一個檢查情境，再執行一次。 |
| 7 | A passing Check / does not replace hardware testing. | 情境通過，不代表不用測試硬體。 |
| 8 | One value / can choose the words on screen. | 一個數值，可以決定畫面上的文字。 |

你不必把所有技術名詞都放進演說。先能用 3、4、5 說清楚 Virtual Model；用 6、7 說清楚 Checks，就已經可以回答很多主管問題。

## 一段 45 秒的新功能介紹

> The public download is still the Alpha. Today, I am showing a development build.
>
> Virtual Model lets us design and test an HMI before the board exists. We can share a specification, but a real board still needs engineering.
>
> Checks lets us save a test and run it again after a change. Pages and Words help us connect what people see to the values in the project.
>
> These tools help us evaluate the workflow. They do not replace hardware testing or prove the revenue target.

這是可替換段，不是額外插進 30 分鐘。用於會前暖身、主管追問，或替換較細的功能列表。

## 15 分鐘 ChatGPT Voice 練習

沿用 [Voice 主手冊](21_CHATGPT_VOICE_PLAYBOOK.md) 的操作方式。若教練讀不到本地資料，就附上這份文件或貼入本節，不要讓它憑記憶補產品事實。

- **0–4 分鐘**：八句每次一句，聽一次、跟讀兩次。
- **4–7 分鐘**：只看中文，自己說英文。忘詞時只要一個關鍵字。
- **7–10 分鐘**：說上面的 45 秒介紹；先求意思完整，再調整停頓。
- **10–13 分鐘**：回答下方三題，每題不超過 25 秒。
- **13–15 分鐘**：重說最卡的一句，記錄一個優點與一個下次修正點。

給教練：

> Read this file and the updated product truth. Treat me as a complete beginner in spoken English. Model only one sentence, then wait for me. Explain corrections in Traditional Chinese. Correct one pronunciation issue and one factual issue at most. After the eight sentences, ask the three questions below, one at a time. Wait until I say “finished.” Make me repeat the improved answer. Do not invent release status, license rights, customer results or revenue.

## 三題主管問答

**Can I download this version now?**

> The public page still shows 0.8.5 Alpha. The demonstration uses a newer development build. I will confirm which build we can provide for your evaluation.

**Can Virtual Model deploy to any board?**

> No. It is for design, emulation and specification. A physical board still needs firmware integration and hardware validation.

**If the Check passes, are we ready for production?**

> No. It verifies selected results in the Emulator. We still need to test the real machine and its operating conditions.

加問營收時：

> These features help us test the business assumptions. They do not prove the US$200M scenario.

## 回到原本 keynote

1. 開場照原稿，先歡迎現場及海外線上觀眾，不加技術清單。
2. Slides 3–4 說明今天是開發 build，帶出 Virtual Model。
3. Slides 8–11 用簡短台詞介紹 Pages、Words、live trace 和 Checks。
4. Slide 12 分清公開 Alpha、三個實體 profiles、Virtual Model 和硬體限制。
5. 第二章保留 US$200M 的三項假設與揭曉節奏，不把新功能當成營收已成立的證據。

不要清除已有的 [practice log](practice_log.csv) 或 [scorecard](scorecard.csv)。原目錄日期保留作歸檔；下一次演說時間尚未重設。
