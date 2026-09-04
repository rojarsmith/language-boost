# 產品、技術與商務日文詞彙表

不要把詞彙表從頭背到尾。先練當天講稿中的 5 個詞，放回完整句子，再於第 1、3、7、14、30 天複習。可匯入工具的版本見 [glossary.tsv](glossary.tsv)。

## 產品與流程

| 日本語 | よみ | 英文／原詞 | 中文 | 使用提醒 |
|---|---|---|---|---|
| 組み込み | くみこみ | embedded | 嵌入式 | `み` 不要拉長。 |
| HMI | エイチ・エム・アイ | HMI | 人機介面 | 三段分開念。 |
| ビジュアル開発環境 | ビジュアル かいはつ かんきょう | visual development environment | 視覺化開發環境 | 產品一句定位。 |
| 画面設計 | がめん せっけい | screen design | 畫面設計 | `せっ` 促音停一拍。 |
| 動作定義 | どうさ ていぎ | behavior definition | 動作定義 | `どう` 是長音。 |
| 機器通信 | きき つうしん | device communication | 機器通訊 | `つう`、`しん` 要完整。 |
| 検証 | けんしょう | validation | 驗證 | `しょう` 長音。 |
| 実機 | じっき | target hardware / real device | 實機 | 促音：じ・っ・き。 |
| 展開 | てんかい | deployment | 展開／部署 | 對硬體可說 `実機への展開`。 |
| 書き込み | かきこみ | flashing / writing | 燒錄／寫入 | 比直說「焼く」正式。 |
| 対応範囲 | たいおう はんい | supported scope | 支援範圍 | no-code 必帶的護欄。 |
| 一つのプロジェクト | ひとつ の プロジェクト | one project | 一個專案 | 核心訊息。 |
| 生成コード | せいせい コード | generated code | 產生的程式碼 | `せいせい` 兩個長音。 |
| ファームウェア | ファームウェア | firmware | 韌體 | `ファー` 拉長。 |
| ビルド | ビルド | build | 建置 | 與 `書き込み` 分開。 |
| エミュレーター | エミュレーター | Emulator | 生成程式模擬器 | 說產品分頁時大寫概念。 |
| シミュレーター | シミュレーター | Simulator | 輕量 LVGL 模擬 | 不等同 Emulator。 |
| プロトタイプ | プロトタイプ | Prototype | Canvas 近似預覽 | 四層預覽階梯的第一層。 |
| ツールチェーン | ツールチェーン | toolchain | 工具鏈 | `チェー` 長音。 |
| 統合 | とうごう | integration | 整合 | 兩個長音。 |
| 受け渡し | うけわたし | handoff | 工程交接 | 不要聲稱量化節省。 |
| 手戻り | てもどり | rework | 返工 | ROI 題可用。 |
| 現在のソース | げんざい の ソース | current source | 目前原始碼 | 表示快照，不是永久規格。 |
| 実装済み | じっそうずみ | implemented | 已實作 | 不等於 GA。 |
| 開発版 | かいはつばん | development build | 開發版 | AI、release 狀態常用。 |

## UI、資料與通訊

| 日本語 | よみ | 英文／原詞 | 中文 | 使用提醒 |
|---|---|---|---|---|
| コンポーネント | コンポーネント | component | 元件 | 長音在 `ポー`。 |
| ウィジェット | ウィジェット | widget | 控制項 | 促音要停。 |
| 複数画面 | ふくすう がめん | multiple screens | 多畫面 | `すう` 長音。 |
| 画面遷移 | がめん せんい | screen transition | 畫面切換 | `せんい` 三拍。 |
| イベント | イベント | event | 事件 | 片假名四拍。 |
| ビジュアルロジック | ビジュアル ロジック | visual logic | 視覺邏輯 | `ロジック` 有促音。 |
| 条件分岐 | じょうけん ぶんき | conditional branch | 條件分支 | `じょう` 長音。 |
| 名前付きタグ | なまえつき タグ | named tag | 具名標籤值 | pitch 建議說法。 |
| 読み書き | よみかき | read/write | 讀寫 | 技術答覆常用。 |
| 更新周期 | こうしん しゅうき | update interval | 更新週期 | 兩處長音。 |
| 倍率 | ばいりつ | scale | 倍率 | 與 offset 成對。 |
| オフセット | オフセット | offset | 偏移 | 促音一拍。 |
| 接続口 | せつぞくぐち | connector | 連接埠 | 比只說介面更直觀。 |
| 通信方式 | つうしん ほうしき | protocol / communication method | 通訊方式 | 探索問題用。 |
| 通信経路 | つうしん けいろ | communication path | 通訊路徑 | `けい` 長音。 |
| 問い合わせる側 | といあわせる がわ | client / initiator | 發起端 | 避免 master/slave 語意混亂。 |
| 応答する側 | おうとう する がわ | server / responder | 回應端 | `おうとう` 兩長音。 |
| レジスターマップ | レジスター マップ | register map | 暫存器對照表 | `マップ` 促音。 |
| ポーリング | ポーリング | polling | 輪詢 | 長音清楚。 |
| 帯域 | たいいき | bandwidth | 頻寬 | Link Budget 回答。 |
| 実フレーム | じつ フレーム | real frame | 真實訊框 | Web Serial 測試。 |
| 物理バス | ぶつり バス | physical bus | 實體匯流排 | Emulator 不保證。 |
| 縦向き／横向き | たてむき／よこむき | portrait / landscape | 直向／橫向 | board-specific。 |
| 解像度 | かいぞうど | resolution | 解析度 | 數字放慢。 |
| 繁体字中国語 | はんたいじ ちゅうごくご | Traditional Chinese | 繁體中文 | 不說 `台湾語`。 |
| 簡体字中国語 | かんたいじ ちゅうごくご | Simplified Chinese | 簡體中文 | 與上詞區分。 |

## 商務與會議

| 日本語 | よみ | 英文／原詞 | 中文 | 使用提醒 |
|---|---|---|---|---|
| 商務条件 | しょうむ じょうけん | commercial terms | 商務條件 | 價格、折扣、SLA 都在此。 |
| 正式回答 | せいしき かいとう | official answer | 正式答覆 | 未知題的目標。 |
| 未承認 | みしょうにん | unapproved | 未核准 | 不給數字。 |
| 担当部門 | たんとう ぶもん | responsible team | 負責部門 | owner 必說。 |
| 期限 | きげん | deadline | 期限 | 未知題必說 date。 |
| 評価 | ひょうか | evaluation | 評估 | pilot/PoC 的安全說法。 |
| 成功条件 | せいこう じょうけん | success criteria | 成功條件 | 下一步核心。 |
| 適合性 | てきごうせい | fit | 適用性 | 不先承諾。 |
| 対象構成 | たいしょう こうせい | target configuration | 目標配置 | hardware scope。 |
| 意思決定者 | いし けっていしゃ | decision maker | 決策者 | `けってい` 有促音。 |
| 契約主体 | けいやく しゅたい | contracting entity | 簽約主體 | 全球客戶題。 |
| 売上計上 | うりあげ けいじょう | revenue recognition/credit | 營收歸屬 | 需公司裁定。 |
| 地域独占 | ちいき どくせん | territory exclusivity | 區域獨家 | 永遠 `[CONFIRM]`。 |
| 値引き権限 | ねびき けんげん | discount authority | 折扣權限 | 不即席承諾。 |
| 一次切り分け | いちじ きりわけ | first-line triage | 第一線問題切分 | support model。 |
| 応答時間 | おうとう じかん | response time | 回覆時間 | 不等於解決時間。 |
| 脆弱性 | ぜいじゃくせい | vulnerability | 漏洞 | `ぜい` 長音。 |
| 量産 | りょうさん | mass production | 量產 | `りょう` 長音。 |
| 試作 | しさく | prototype build | 試作 | timeline discovery。 |
| 次のステップ | つぎ の ステップ | next step | 下一步 | `ステップ` 有促音。 |

## 字母與數字念法

| 寫法 | 建議日文念法 |
|---|---|
| EDT | イー・ディー・ティー |
| HMI | エイチ・エム・アイ |
| LVGL | エル・ブイ・ジー・エル |
| MCU | エム・シー・ユー |
| CAN | キャン |
| RTU | アール・ティー・ユー |
| RS-485 | アール・エス・よん・はち・ご |
| USB-C | ユー・エス・ビー・シー |
| TCP/IP | ティー・シー・ピー・アイ・ピー |
| SLA | エス・エル・エー |
| SBOM | エス・ビー・オー・エム |
| 480×272 | よんひゃく はちじゅう・かける・にひゃく ななじゅうに |
| 800×480 | はっぴゃく・かける・よんひゃく はちじゅう |
| 0.8.1 | ゼロ・てん・はち・てん・いち |
