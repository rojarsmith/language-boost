# EDT HMI Studio 產品事實基線

本文件是簡報、Demo、問答與餐敘交流的共同事實底稿。先看本頁再背台詞；若其他教材與本頁衝突，以本頁及 20_SOURCE_MAP.md 的證據為準。

## 1. 本次快照

| 項目 | 已核對內容 |
|---|---|
| 原始碼目錄 | C:\my\build\github\edt-hmi-studio |
| 分支 | main |
| 追蹤版 HEAD | a7cc2a88204b71a3480042b267b8d3cfa816c2ef |
| 短版 | a7cc2a8 |
| Git describe | 0.8.1-130-ga7cc2a8 |
| README 宣告版本 | 0.8.2；不等於正式 GA 核准 |
| HEAD 日期 | 2026-09-03 |
| 稽核原則 | 產品能力固定以此 commit 的追蹤檔案為主；之後工作樹或分支變動不得混入本次說法 |

此快照是在 `main` 工作樹乾淨時建立。前一版尚未追蹤的 Shizuku 洗衣機文件、兩個 example JSON 與正式測試，已經納入 a7cc2a8；可在本教材明載的驗證範圍內使用。快照建立後來源工作樹若再切換分支或出現異動，必須重新稽核，不能直接改用。

## 2. 一句話定義

內部中文理解：

EDT HMI Studio 是面向嵌入式 HMI 的視覺化開發環境，把畫面設計、互動邏輯、裝置通訊、產生 C 程式、實機前驗證，以及對應板卡的建置與部署，連在同一個專案流程裡。

對外日文：

「EDT HMI Studioは、組み込みHMI向けのビジュアル開発環境です。画面設計、ロジック、機器通信、実機に移る前の検証、そして対応ハードウェアへの展開までを、一つのプロジェクトでつなぎます。」

かな：

「イー・ディー・ティー エイチ・エム・アイ スタジオ は、くみこみ エイチ・エム・アイ むけ の ビジュアル かいはつ かんきょう です。がめん せっけい、ロジック、きき つうしん、じっき に うつる まえ の けんしょう、そして たいおう ハードウェア への てんかい まで を、ひとつ の プロジェクト で つなぎます。」

教練提醒：這句只說「把流程連起來」，沒有宣稱每一種硬體、通訊或客製需求都已經零程式碼支援。

## 3. 證據等級

| 等級 | 定義 | 對外使用 |
|---|---|---|
| A | a7cc2a8 追蹤程式碼、範例 JSON、可重現生成路徑 | 可說，但仍要加板卡、版本與測試範圍 |
| B | 追蹤技術文件中的實機或測試紀錄 | 可說「在記錄所列環境已驗證」，不可擴大為所有環境 |
| C | README、行銷草稿、投資人資料或規劃文件 | 只能當背景；與 A/B 衝突時不可拿來承諾 |
| X | 未追蹤檔、未跑過的現場環境、未核准商務數字 | 不可當成目前產品事實 |

## 4. 目前可證明的核心能力

| 能力 | 目前事實 | 上台說法邊界 |
|---|---|---|
| 視覺設計 | 拖放式畫面編輯、屬性編輯、事件設定；目前 palette 有 25 種元件類型 | 可說「視覺化設計」；不要引用 README 舊的 18 種 |
| 互動邏輯 | 節點式邏輯圖、事件與條件、屬性及 tag 操作，也保留 Custom C 路徑；Set Property 可用資料線輸入或固定值 | 可說標準互動可視覺化；不要說所有客製邏輯都完全免寫程式 |
| C 程式產生 | 產生 ui.h、ui.c、ui_events.h、ui_events.c、ui_logic.h、ui_logic.c 等檔案 | 可現場打開 Code Preview；不要說產生碼已在所有編譯器與板卡驗證 |
| 預覽階梯 | Prototype、Simulator、Emulator、Deploy 四個層級，各自證明不同事情 | 必須分清楚；只有實機能證明記憶體、時序、面板與真實匯流排 |
| 專案與資產 | JSON 專案、儲存、影像與字型處理、可重用 container、文字資源與 typography | 可展示 Coffee Bar；不要把 bundled font 誤稱為專案內嵌 payload |
| 多語系 | 專案可定義語言、文字資源、各語言 typography 與切換動作 | Coffee Bar 追蹤範例有英文、繁中、日文三種語言 |
| 通訊 | 主要已實作路徑為 Modbus RTU 與可設定的 serial commands；可設 panel asks 或 panel answers | 只在支援的 connector、韌體與已驗證設定範圍內說明 |
| 建置與部署 | 板卡設定、程式產生、原生 ARM 建置與有防呆的燒錄流程 | 需 STM32CubeCLT 等工具；現場未預演就只講流程，不直接燒錄 |
| 桌面版 | .NET 10 NativeWebHost；Windows、Linux、macOS 有不同 host 路徑與成熟度 | 不可說三平台安裝與硬體部署都同等完整 |
| AI 助理 | 可選 OpenRouter 或 Ollama，透過 17 個受驗證的編輯工具操作一般專案模型，支援單次執行復原 | provider 路徑已實作；仍無已發布的整體品質基準，不可稱為生產等級自主交付 |

## 5. 目前 25 種元件類型

Button、Label、Image、Image Button、Textarea、Dropdown、Checkbox、Switch、Slider、Rectangle、Line、Circle、Polygon、Container、Tab View、Tile View、Window、Progress Bar、Dial、Spinner、Chart、Table、Calendar、QR Code、Video。

重要限制：

- 「palette 有 Video 元件」不等於所有板卡能播放影片。
- Video 需板卡能力與韌體路徑支援。目前三個 profile 中，只有 H747 profile 宣告 Motion JPEG AVI、SD 卡與 JPEG 硬體路徑。
- Coffee Bar 範例沒有影像、字型或影片 payload，不可在該 Demo 中宣稱已示範媒體播放。

對外日文：

「現在のソースでは、二十五種類のコンポーネントを用意しています。ただし、利用できる機能は対象ハードウェアによって異なります。」

かな：

「げんざい の ソース では、にじゅうご しゅるい の コンポーネント を ようい して います。ただし、りよう できる きのう は たいしょう ハードウェア に よって ことなります。」

## 6. 三個板卡 profile 的真實範圍

| Profile | 顯示與方向 | 已定位的通訊路徑 | 媒體與重要限制 |
|---|---|---|---|
| STM32F746G Discovery Kit | 4.3 吋、480×272、RGB565、橫向 | ST-LINK VCP；Modbus RTU、serial commands | 不支援 Video；1 MB flash；4 MB external SDRAM LVGL heap |
| STM32H747I Discovery Kit | 4.3 吋、800×480、ARGB8888、橫向與直向 | ST-LINK VCP；Modbus RTU、serial commands | Video 僅限 Motion JPEG AVI、SD 卡、JPEG HW；USB HS 尚未編入 stack；Ethernet 無 TCP/IP stack；CAN FD 無 transceiver，只有 loopback 證據 |
| EDT EVK043027B / STM32U599 | 4.3 吋、480×272、ARGB8888、橫向與直向、可調背光 | USB-C VCP；Modbus RTU、serial commands | RS485 已裝但尚未綁定；CAN transceiver 已裝但 stack 非目前可交付資料路徑；無 JPEG/Video；2 MB flash、1 MB LVGL heap |

板卡說法：

「現在は三つのボードプロファイルがあります。対応する表示形式、接続方式、メモリ構成に合わせて、利用可能な機能を制御します。」

かな：

「げんざい は みっつ の ボード プロファイル が あります。たいおう する ひょうじ けいしき、せつぞく ほうしき、メモリ こうせい に あわせて、りよう かのう な きのう を せいぎょ します。」

### CAN 的唯一安全說法

目前有 CAN link 介面與 H747 loopback bring-up 證據，但 protocol tag 尚未進入 CAN frame，也沒有 tag 到 widget 的生產資料綁定。EVK 雖有 transceiver，相關 stack 也未編入目前路徑。

對外日文：

「CANは現在、接続層とループバック確認の段階です。タグと画面部品を結ぶ製品機能としては、まだご案内していません。」

かな：

「キャン は げんざい、せつぞく そう と ループバック かくにん の だんかい です。タグ と がめん ぶひん を むすぶ せいひん きのう と して は、まだ ごあんない して いません。」

### Video 的唯一安全說法

「動画対応はボード固有です。現在はH747向けのMotion JPEG AVI再生経路に限定されます。」

かな：

「どうが たいおう は ボード こゆう です。げんざい は エイチ なな よん なな むけ の モーション ジェイペグ エーブイアイ さいせい けいろ に げんてい されます。」

## 7. 通訊與 protocol 真實範圍

| 項目 | 狀態 | 可說的證據 |
|---|---|---|
| Modbus RTU | 已實作 | H747 的 responder/client 實機記錄涵蓋讀、寫與事件 |
| Serial commands | 已實作 | 支援可設定命令模板、Composer、Monitor、panel asks / panel answers；有真實 COM 測試記錄 |
| CAN | 部分 bring-up | link 操作與 loopback；tag-in-frame、widget binding 尚未完成 |
| Host interface export | 已實作 | 可輸出 CSV、header、HTML，供 host/controller 對照 |
| Locator | 目前支援 whole、affix、field | bytes、pattern 尚不是目前完成範圍 |

對外日文：

「主要なシリアル通信経路では、Modbus RTUと設定可能なコマンド方式を用意しています。パネルが問い合わせる構成と、パネルが応答する構成の両方を設計できます。」

かな：

「しゅよう な シリアル つうしん けいろ では、モドバス アール・ティー・ユー と せってい かのう な コマンド ほうしき を ようい して います。パネル が といあわせる こうせい と、パネル が おうとう する こうせい の りょうほう を せっけい できます。」

## 8. 四層預覽，不可混為一談

| 層級 | 它能證明什麼 | 它不能證明什麼 |
|---|---|---|
| Prototype | 快速看幾何、流程、動畫；Canvas2D 模擬 | 不是真正 LVGL，也不是產生後的 C |
| Simulator | 用預建的真實 LVGL 看渲染 | 不執行完整事件、邏輯與新產生 C |
| Emulator | 使用同一個 generator，把本次產生的 C 與真實 LVGL 編成 WebAssembly；可跑事件、邏輯、模擬 Modbus | 不能證明實機 RAM、flash、時序、面板、觸控與真實匯流排品質 |
| Deploy | 以原生 ARM 工具鏈建置並在實際板卡上驗證 | 結果仍只代表該板卡、韌體、工具鏈與測試條件 |

Emulator 對外日文：

「エミュレーターでは、今回生成したCコードを実際のLVGLと一緒にコンパイルし、イベントやロジックの動作を確認します。」

かな：

「エミュレーター では、こんかい せいせい した シー コード を じっさい の エル・ブイ・ジー・エル と いっしょ に コンパイル し、イベント や ロジック の どうさ を かくにん します。」

限制句：

「ただし、実機のメモリ、タイミング、表示、通信品質は、実機での確認が必要です。」

かな：

「ただし、じっき の メモリ、タイミング、ひょうじ、つうしん ひんしつ は、じっき での かくにん が ひつよう です。」

## 9. AI 助理：已實作，不等於已證明品質

目前可確認：

- 使用者自行觸發才會呼叫模型。
- Preferences 可選 OpenRouter 或 Ollama；provider、host 與 model 設定保存在本機 bridge 的 machine-side 設定。
- OpenRouter key 由本機 bridge 保存，不寫進頁面、專案或 log；按 Send 後，prompt、附件與專案 snapshot 會送到 OpenRouter。
- Ollama 不需要真實 API key；同一份請求會送到使用者設定的 Ollama host。只有 host 是本機／loopback 時，才能說處理留在這台電腦，不能把任意網路 host 說成本機。
- Ollama model picker 只列出同時具備 vision 與 tools capability 的模型；通過 gate 不代表模型品質足夠。
- 模型透過 17 個受控工具讀取或編輯正常專案結構；工具輸入會驗證，單次執行可復原。
- 工具範圍不包含刪除整個專案或資源、Deploy、port 與 Preferences。
- 可協助語言、字型、SVG 產生的 PNG 資產；Ollama 的獨立圖像生成路徑尚未建置，不應宣稱能可靠產生照片。
- 參考圖片附件不會自動匯入成專案資產。
- 本機 Ollama plumbing 曾以一個模型完成串流、兩次 tool calls 與 Undo；該模型也曾誤解一行需求，正好證明「能呼叫工具」不等於「輸出品質合格」。

尚不可宣稱：

- 尚無已發布的全產品、跨 provider 品質 benchmark；R2 one-shot 評估與 packaged desktop leg 仍是 open item。
- 不可說 AI 已可自主完成所有 HMI、已達生產等級，或成果無需工程審查。
- 不可籠統說「AI 資料完全不離開電腦」；必須先確認選用的 provider 與 Ollama host。

對外日文：

「AIアシスタントでは、OpenRouterとOllamaを選択できます。OpenRouterでは送信内容が外部サービスへ送られ、Ollamaでは設定したホストへ送られます。ローカルホストを指定した場合だけ、このコンピューター内で処理されます。モデルの能力と品質は分けて評価し、最終成果はエンジニアが確認します。」

かな：

「エーアイ アシスタント では、オープンルーター と オラマ を せんたく できます。オープンルーター では そうしん ないよう が がいぶ サービス へ おくられ、オラマ では せってい した ホスト へ おくられます。ローカル ホスト を してい した ばあい だけ、この コンピューター ない で しょり されます。モデル の のうりょく と ひんしつ は わけて ひょうか し、さいしゅう せいか は エンジニア が かくにん します。」

## 10. 主 Demo：EVK Coffee Bar 的已核對數字

追蹤範例：examples/evk043027b-coffee-bar.json

| 項目 | 精確數量 |
|---|---:|
| 畫面 | 5 |
| 畫面上的 top-level widget placements | 51 |
| 儲存的 widget nodes，含巢狀 child | 106 |
| 展開 reusable container instance 後的產生／渲染 widgets | 200 |
| Reusable container definitions | 3 |
| 語言 | 3：en、zh-TW、ja |
| Tags | 23 |
| Modbus links | 1 |
| Devices | 1 |
| Logic graphs | 1 |
| Animations | 22 |
| Text resources | 41 |
| Typographies | 16 |
| Image payloads | 0 |
| Font payloads | 0 |
| Video／media payloads | 0 |

避免把三種 widget 數量混講。對客戶只需說「五個畫面、三種語言、二十三個 tags」，除非對方詢問專案規模細節。

對外日文：

「このサンプルには、五つの画面、三つの言語、二十三のタグがあります。画面、ロジック、通信設定を同じプロジェクトで管理しています。」

かな：

「この サンプル には、いつつ の がめん、みっつ の げんご、にじゅうさん の タグ が あります。がめん、ロジック、つうしん せってい を おなじ プロジェクト で かんり して います。」

## 10B. 日本客戶用 Demo：Shizuku Smart Washer

追蹤範例：`examples/f746-washing-machine.json`、`examples/evk043027b-washing-machine.json`。

兩個專案都是 480×272 橫向、8 個畫面、日文優先並可切英文與繁中、102 個 text resources、43 個 Modbus RTU tags、1 個 device、17 個 logic graphs。板卡版本並非完全相同：

| 版本 | Widgets | Animations | Logic nodes | Connections | Timer nodes |
|---|---:|---:|---:|---:|---:|
| F746 | 334 | 75 | 695 | 657 | 27 |
| EDT EVK043027B | 325 | 72 | 693 | 655 | 27 |

可以說兩版共用同一產品概念、文字／tag map／typography 與 17-graph 架構，並依板卡做 UI 與 logic 差異；不可照來源文件的概括說法宣稱 layouts 與 logic byte-for-byte 完全相同。

兩版都完成產品 Deploy 路徑的 firmware build。只有 F746 版本在 Emulator 中實際跑過 touch wake 與以 `Phase = 8` 觸發完成畫面；兩版都沒有燒錄到實體板，也沒有實機效能、記憶體、觸控或匯流排量測。因此上台只能說「已建置」與「F746 Emulator 路徑已跑過」，不能說洗衣機硬體已驗證。

對外日文：

「Shizukuは、八つの画面と三つの言語を持つ洗濯機向けのデモです。F746版とEDT EVK版があり、同じ製品コンセプトとデータ設計を、ボードごとに調整しています。両方ともファームウェアのビルドまで確認していますが、実機への書き込みと性能評価はまだ行っていません。」

かな：

「しずく は、やっつ の がめん と みっつ の げんご を もつ せんたくき むけ の デモ です。エフ なな よん ろく ばん と イー・ディー・ティー イーブイケー ばん が あり、おなじ せいひん コンセプト と データ せっけい を、ボード ごと に ちょうせい して います。りょうほう とも ファームウェア の ビルド まで かくにん して います が、じっき への かきこみ と せいのう ひょうか は まだ おこなって いません。」

## 11. 不能直接說的話

| 危險說法 | 為什麼不行 | 安全日文 | かな |
|---|---|---|---|
| 完全 no-code，任何需求都不用寫程式 | 新板卡需 port；特殊行為可能用 Custom C | 「対応ボードと標準機能の範囲では、アプリケーションコードを手で書かずに開発できます。」 | 「たいおう ボード と ひょうじゅん きのう の はんい では、アプリケーション コード を て で かかず に かいはつ できます。」 |
| 三個板卡全部支援 Video | 僅 H747 profile 有特定 MJPEG AVI 路徑 | 「動画機能はH747向けの限定機能です。」 | 「どうが きのう は エイチ なな よん なな むけ の げんてい きのう です。」 |
| CAN 已經可以驅動畫面 | 只有連接層與 loopback，tag-to-widget 未完成 | 「CANは現在、接続層の評価段階です。」 | 「キャン は げんざい、せつぞく そう の ひょうか だんかい です。」 |
| Emulator 等於實機驗證 | 它無法證明硬體記憶體、時序或真實 bus | 「エミュレーター確認の後、実機評価を行います。」 | 「エミュレーター かくにん の あと、じっき ひょうか を おこないます。」 |
| AI 已能保證完整專案品質 | 真實 key benchmark 尚未完成 | 「AI機能は評価を継続しており、成果はエンジニアが確認します。」 | 「エーアイ きのう は ひょうか を けいぞく して おり、せいか は エンジニア が かくにん します。」 |
| 現在已正式量產／某月上市 | README、行銷與內部草稿狀態互相衝突 | 「提供時期と条件は現在最終調整中です。確定後、正式にご案内します。」 | 「ていきょう じき と じょうけん は、げんざい さいしゅう ちょうせいちゅう です。かくてい ご、せいしき に ごあんない します。」 |
| 已確定售價、授權或營收目標 | 目前只有未核准內部草稿 | 「価格と提供条件は、案件条件を確認した上でご案内します。」 | 「かかく と ていきょう じょうけん は、あんけん じょうけん を かくにん した うえ で ごあんない します。」 |

## 12. 現場不知道答案時

不要猜。先限定問題，再承諾書面回覆。

「対象のボード、接続方式、必要な性能条件を確認してから、正確に回答します。」

かな：

「たいしょう の ボード、せつぞく ほうしき、ひつよう な せいのう じょうけん を かくにん して から、せいかく に かいとう します。」

「この場では断定せず、確認結果を資料と一緒にお送りします。」

かな：

「この ば では だんてい せず、かくにん けっか を しりょう と いっしょ に おおくり します。」

## 13. 尚待正式核准的商務事項

以下只供內部準備，未取得公司核准前不要主動對外說：

- 正式上市月份、版本命名與 production-ready 定義。
- 是否隨特定 EDT LCM 免費提供、是否另售、通路折扣與區域權利。
- AI token 由客戶或 EDT 負擔的方案。
- 營收、轉換率、市場規模與 roadmap 百分比。
- 第三方 HMI／IC 廠商授權策略。
- Windows installer 中 STM32CubeProgrammer、ST-LINK driver 與 GPL source-offer 的最終法務處理。

若被問到，使用前節的「提供時期與條件仍在最終調整」句型，並記錄問題交由公司窗口正式回覆。

## 14. 上台前的事實檢查

- 簡報右下角標明版本或快照，不把開發快照講成 GA。
- 主 Demo 可使用追蹤的 EVK Coffee Bar；面向日本客戶也可使用追蹤的 Shizuku，但必須依對應腳本說清 build／Emulator／實機界線。
- 主 Demo 不依賴 live AI、CAN 或 Video。
- Emulator 若無 Emscripten 與 LVGL 設定，事前改走錄影或已確認畫面。
- Build 需先確認 STM32CubeCLT；Flash 只在相同板卡、probe 與已預演環境執行。
- 每個性能、相容性與量產問題都先問清板卡、介面、工具鏈與驗證條件。
- 所有商務數字與上市說法，都要有最新核准版 briefing。
