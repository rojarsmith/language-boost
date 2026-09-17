# 產品事實、公開狀態與說法邊界

本文件是整套英文教材的最高優先級。若任何逐字稿、投影片或 Voice 回答與本文件衝突，以這裡為準。

## 快照

| 項目 | 本次查核結果 |
|---|---|
| 查核日期 | 2026-09-18，Asia/Taipei |
| 來源專案 | C:\my\build\github\edt-hmi-studio |
| Git 狀態 | main 與 origin/main 同步，工作目錄乾淨 |
| Commit | 80cf1e4080bb564c2736ede44be1c7cd71ea6d32 |
| Git describe | 0.8.7-1-g80cf1e4 |
| package version | 0.8.8-dev |
| 最近 release | 0.8.7，2026-09-14 |
| 公開頁面 | https://edthmistudio.bitdove.net/ |
| 公開頁面狀態 | EDT HMI Studio 0.8.5 — Alpha，released 2026-09-10 |

程式碼快照與公開下載頁的版號不同。技術能力以來源專案查核，公開版本狀態以公開頁面與公司最後核准文字為準。

## 標籤

- **SAFE**：目前程式、文件、範例或公開網站直接支持。
- **QUALIFY**：可以說，但必須同時說限制。
- **CONFIRM**：需要 Product、Finance、Investor Relations、Legal 或管理階層核准。
- **FUTURE**：roadmap 或研究工作，不能說成目前可交付。

## 對外可安全使用的產品核心

| 狀態 | 英文說法 | 邊界 |
|---|---|---|
| SAFE | EDT HMI Studio is a visual development environment for embedded touch interfaces. | 不把所有客製需求都說成完全 no-code。 |
| SAFE | It brings screen design, visual logic, device communication, emulation, firmware build, and flashing into one project. | Build 與 flash 需要本機工具鏈、支援板卡與正確連線。 |
| SAFE | The current source exposes 25 components in the design palette. | 這是目前 source snapshot，不是永久數字。 |
| SAFE | It generates C for LVGL-based embedded targets. | 目前 firmware 與 Emulator 路徑以 LVGL 9.5 為主；不要延伸成任意 GUI runtime。 |
| SAFE | The Emulator compiles the generated C with real LVGL and runs events, logic, and simulated communication before hardware is available. | Emulator 不等於真實 RAM、Flash、bus timing、touch 或 EMC 驗證。 |
| SAFE | The source includes profiles for STM32F746G-DISCO, STM32H747I-DISCO, and EDT EVK043027B. | 三塊板的 capability 不相同。 |
| SAFE | Modbus RTU and configurable line-oriented serial commands are implemented. | CAN、Ethernet、USB HS 與 RS-485 必須依 board 與 release scope 分開說。 |
| SAFE | Supported serial protocols can operate with the panel as an initiator or a responder. | 使用 current protocol model，不能概括成所有 protocol。 |
| SAFE | Projects support multiple screens, events, visual logic, animations, images, fonts, typography, and multilingual text. | 個別功能仍受 board memory、format 與 runtime 限制。 |
| SAFE | Customer Demo can package an interactive project for evaluation without a board, cable, toolchain, or network connection. | 這是展示與評估路徑，不是硬體性能證明。 |
| SAFE | Release 0.8.7 added diagnostics, a Problems pane, report dump files, video import and conversion, and F746 video sound. | 只能把 release note 已列出的能力說成目前完成。 |

## AI assistant

公開網站與 current source 支持以下說法：

> EDT HMI Studio lets the AI assistant operate the same editor controls that a person uses. It can create a project, turn a visual reference into screens, make focused edits, and answer questions about the project.

安全邊界：

| 狀態 | 可說 | 必須同時知道 |
|---|---|---|
| SAFE | The assistant can work with screens, widgets, styles, text, languages, assets, and project values. | 不保證每次產出都正確。 |
| SAFE | An AI change is applied through the editor and can be undone as one step. | 上台前仍要人工檢查結果。 |
| SAFE | The assistant does not flash or operate the target hardware. | 不要把 AI editor 說成 autonomous hardware agent。 |
| SAFE | Users can choose OpenRouter or Ollama. | Provider availability、model 與費用由實際設定決定。 |
| QUALIFY | Ollama can keep inference local when it points to a local Ollama host. | 不可只說 Ollama 就保證資料永不離開公司。 |
| QUALIFY | OpenRouter sends prompts and relevant project context to an external provider. | 隱私、資料處理、保留、region 與 model policy 必須另行核准。 |

不可以說：

- The AI always produces production-ready results.
- Your data never leaves your computer.
- The AI replaces the engineering team.
- The AI can deploy to any board automatically.

## 公開 Alpha 與可能的 Beta

本次查核時，公開網頁寫明：

- 0.8.5 Alpha
- Released 2026-09-10
- Windows 10/11 64-bit
- 594 MB self-contained download
- Evaluation by key stakeholders
- Do not pass the Alpha to downstream customers
- Expect rough edges
- The installer is not code-signed
- Roadmap on the page: Alpha in September 2026, Beta in October 2026, general release in December 2026

目前對外句：

> The 0.8.5 Alpha is available for evaluation by key stakeholders.

若活動前網站正式改成 Beta，且公司核准：

> The Beta is now available for evaluation.

若網站與內部版本不同：

> Our public evaluation build is the version shown on the official download page. The development branch is moving faster, so I will use the public page for availability and release status.

公開頁面的 October／December 2026 roadmap 是當前網站文字，不代表法律上不可變更的承諾。若 keynote 日期或 roadmap 已更新，必須使用新頁面。

## Board 與連線邊界

| Board / capability | Current evidence | 安全英文 |
|---|---|---|
| STM32F746G-DISCO serial | ST-LINK VCP；Modbus RTU 與 serial commands ready | The F746 path supports the current serial protocol workflow over the ST-LINK virtual COM port. |
| STM32F746G-DISCO video | Software JPEG up to 320 × 176 at 15 fps；PCM 44.1 kHz stereo sound | The F746 demo path supports software-decoded video at a constrained size and frame rate, with PCM sound. |
| STM32H747I-DISCO serial | ST-LINK VCP ready | The H747 path supports the current serial protocol workflow over the virtual COM port. |
| STM32H747I-DISCO video | Hardware JPEG up to 800 × 480 at 24 fps；no audio | The H747 demo path uses hardware JPEG decoding for higher-resolution video. Audio is not part of this path. |
| STM32H747I-DISCO USB HS | Connector fitted；device stack not compiled | The hardware is present, but this connection is outside the current build. |
| STM32H747I-DISCO Ethernet | PHY fitted；TCP/IP stack not compiled | Ethernet remains outside the current release path. |
| STM32H747I-DISCO CAN FD | Controller and loopback research；external transceiver required for a bus | CAN FD is research and roadmap work, not a current production path. |
| EDT EVK043027B USB-C | USB CDC；Modbus RTU and serial commands ready | The EDT EVK supports the current serial workflow over USB-C. |
| EDT EVK043027B RS-485 | Hardware fitted but binding/release status needs confirmation | The hardware is present. We will confirm the supported software path for the release. |
| EDT EVK043027B CAN | Transceiver fitted；stack not compiled | The transceiver is fitted, but software support is outside the current build. |

雖然資料模型已有 CAN 類型，current widget binding 與 runtime abstraction 仍有缺口。不能把 schema 存在說成 production CAN support。

## Demo 可證明與不可證明

### 可證明

- 從 description、sketch 或 image reference 建立／修改 project。
- 視覺化設計 screens 與 components。
- 建立 events、logic graph、tags 與 serial communication。
- 在 Emulator 執行 generated C 與 real LVGL。
- 使用 Customer Demo 分享可互動評估版本。
- 在支援設定下 build 與 flash board。

### 不可僅靠舞台 Demo 證明

- 任意客戶板卡可以直接量產。
- 所有 AI 輸出皆正確、安全且可維護。
- 真實裝置在所有 bus load 與 timing 下穩定。
- 認證、資安、SBOM、長期維護與 SLA 已核准。
- 一定能降低特定百分比的成本或時程。

## 商業與營收說法

### US$200M

只能說：

> Our North Star is a repeatable US$200 million annual revenue engine. This is a scenario model, not approved guidance. The model combines recurring hardware production, paid AI and support services, and a small number of strategic licensing agreements.

不能說：

- EDT will make US$200 million every year.
- We already have US$200 million in pipeline.
- This is US$200 million of software ARR.
- Finance has approved the target.

內部法說會草稿包含 2027 至 2030 的硬體營收情境，最高為 TWD2.0B。這與 US$200M North Star 不是同一個數字。兩者的範圍、匯率、年份與核准狀態必須由 Finance／IR 統一，不能在外部材料中混用。

### 免費軟體、AI token 與授權

來源草稿提到以下可能模式，但仍屬 **CONFIRM**：

- 客戶採用 EDT 製造的 compatible LCM hardware 時，Studio software free
- 客戶自行購買 OpenRouter usage，或由 EDT 代售／管理
- 對 HMI 或 IC vendors 提供授權

未核准前安全回答：

> We are evaluating several commercial models. I do not want to give you unofficial pricing or channel terms. We will confirm the approved model in writing.

## 必須由公司回答

- 定價、幣別、免費條件、訂閱或永久授權
- AI usage 的 reseller、markup、billing 與資料條款
- 通路折扣、MOQ、返利、價格保護與區域獨家
- 海外子公司、總公司、通路商的 deal ownership 與收入歸屬
- 客製 board profile、NRE、交期與維護費
- SLA、支援分工、保固、更新與 EOL
- 正式 GA、平台支援矩陣、code signing 與升級政策
- Security、privacy、SBOM、vulnerability response 與 telemetry
- 可公開客戶、design win、pipeline、轉換率與財務預測

統一安全答法：

> That is an important commercial point. I do not want to give you an unofficial answer. I will confirm the approved terms with our team and follow up by [date].

## 回答規則

1. **Current fact:** Today, the current build supports...
2. **Boundary:** For this board, provider, or release...
3. **Next proof:** The next step is to validate your exact use case together.

這三層規則適用於產品、AI、協定、board、價格與營收問題。
