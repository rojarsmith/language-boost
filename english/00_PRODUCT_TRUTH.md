# 產品事實、說法邊界與上台前確認表

本文件是所有英文稿的最高優先級。若其他稿件與本文件衝突，以這裡為準。

## 標籤定義

- **SAFE**：目前程式、文件或範例可直接支持，仍要按照限定範圍講。
- **QUALIFY**：可以講，但必須連同限制一起講。
- **CONFIRM**：屬於公司商務決策，來源資料沒有核准答案；上台前要由負責人填入。
- **FUTURE**：規劃中，不可講成目前已上市功能。

## 可以安全對外說的核心事實

| 狀態 | 對外英文說法 | 中文邊界 |
|---|---|---|
| SAFE | EDT HMI Studio is a visual, no-code development environment for embedded HMI applications. | 支援範圍內有完整 no-code 路徑；不是保證任何需求都零程式碼。 |
| SAFE | It brings screen design, visual logic, device communication, emulation, firmware build, and flashing into one workflow. | 這些區域都存在；建置與燒錄仍需要本機工具鏈與支援板卡。 |
| SAFE | The current build exposes 25 components in the design palette. | 以 `componentDefinitions.ts` 現況計數；README 的 18 已過時。 |
| SAFE | It generates C for LVGL-based embedded targets. | 主要目標為 LVGL 9.5；Simulator 的預建元件仍是 9.2，不能混講。 |
| SAFE | The Emulator compiles the generated C with real LVGL and runs events, logic, and simulated device communication before hardware is available. | 不代表已驗證真實 RAM、Flash、時序、觸控或實體匯流排。 |
| SAFE | The current source contains profiles for three boards: STM32F746G-DISCO, STM32H747I-DISCO, and EDT EVK043027B. | 不等於所有功能在三塊板上都一樣。 |
| SAFE | Modbus RTU and configurable serial command protocols are implemented in the current branch. | CAN、Ethernet 與部分 USB 路徑不可說成已可出貨。 |
| SAFE | The panel can initiate communication or respond to a host for supported serial protocols. | 依目前 2026-08-23 分支；對外版本需再確認是否包含最新 commit。 |
| SAFE | The tag model supports named values, data types, access rules, scaling, offsets, polling, and panel-local memory. | 一個專案目前仍以一條連線、一個裝置為產品上限。 |
| SAFE | The tool can export a Modbus host interface as CSV, a C header, and a printable page. | Command-list export 在來源進度表仍標為下一個 commit，未確認前不可承諾。 |
| SAFE | Projects can include multiple screens, events, node-based logic, animations, images, fonts, typographies, and multilingual text. | 個別功能仍有硬體與預覽層級限制。 |
| SAFE | Noto Sans TC, SC, JP, and KR font files are bundled in the repository. | 字型授權文字與商業散布流程仍要法務確認。 |
| SAFE | The Coffee Machine example contains four screens, 46 top-level components, 28 animations, 13 tags, three languages, 16 typographies, and 55 text resources. | 這是示範專案資料，不是效能上限。 |

## 可以講，但必須加限制

### 「No code」

推薦說法：

> For supported workflows, users can go from screen design to running firmware without writing application code.

不要說：

> It can build anything with absolutely no code.

原因：產品仍保留 Factory Dev Mode、自訂 C、Code tab，也有尚未支援的協定與硬體功能。

### 「One click deploy」

推薦說法：

> After the local toolchain is set up, users can build the firmware and flash a supported board from the same project.

不要說：

> It works on any board with one click and no setup.

原因：需要本機建置服務、STM32 工具鏈、ST-LINK、支援的板卡與可建置的功能組合。

### 「跨平台」

推薦說法：

> The product is being prepared for Windows, macOS, and Linux. We will confirm the production support matrix for the release.

原因：行銷簡報寫 Win / OSX / Linux；README 的桌面建置也涵蓋三者，但 macOS 上游 runtime 被標為 experimental。正式支援層級尚未核准。

### 「Production Ready」與上市時間

推薦說法：

> The product is in active pre-launch development, with the public launch currently positioned for November 2026.

只有公司確認後才可使用。README 同時標示 v1.0.0 / Production Ready，行銷簡報則寫 Coming November 2026，且 Changelog 還有大量 Unreleased 功能。這可能表示「內部核心版本完成、公開產品尚未上市」，但不能自行推論成官方說法。

### 「免費試用」

行銷簡報寫 `Free to try on all three platforms.`，但沒有試用期間、功能限制、帳號條件或授權條款。只能在公司核准後說：

> We plan to offer a free trial. The final terms will be announced with the release.

## 目前的硬體與協定邊界

| 項目 | 現況 | 對外安全說法 |
|---|---|---|
| F746 VCP | Modbus RTU／Serial commands，標為 ready | Supported on the ST-LINK virtual COM port. |
| H747 VCP | Modbus RTU／Serial commands，標為 ready，已有實機驗證紀錄 | This is the primary verified research and demo path. |
| H747 USB HS | 硬體有，device stack 未編入 | The hardware is present, but this connection is not in the current build. |
| H747 Ethernet | PHY 有，TCP/IP stack 未編入 | Ethernet is a planned path, not a current shipping feature. |
| H747 CAN FD | 需要外接 transceiver；只有 loopback 研究數據 | CAN is on the roadmap and is not a current production path. |
| EDT EVK USB-C | USB CDC，標為 ready | A ready serial connection in the current board model. |
| EDT EVK RS-485 | Changelog 說 Modbus 可跑；板卡定義仍標 fitted-unbound | 必須由工程負責人確認 release build 後才對外承諾。 |
| EDT EVK CAN | transceiver 有，但 stack 未編入 | Hardware is fitted; software support is not in the current build. |
| Video | 只有 H747 有 JPEG codec、SD 與外部 RAM可完整支援 | Video is hardware-dependent and currently supported on the H747-class demo path. |

## 目前不可自行回答的商務問題

下列答案在 repo 裡不存在：

- 定價、幣別、訂閱或永久授權。
- 試用期間與試用限制。
- 商業授權條款、原始碼授權、MIT 說法是否有效。README 說 MIT，但 repo 根目錄沒有 `LICENSE` 檔。
- 通路折扣、MOQ、年度業績、返利、區域獨家權。
- 海外子公司與總公司的報價權、簽約主體與收入歸屬。
- 保固、SLA、回覆時間、L1/L2/L3 支援責任。
- 正式 GA 日期、各平台正式支援等級、升級政策。
- 客製板卡導入費、NRE、維護費與交期。
- 資安、SBOM、弱點修補、簽章、自動更新與遙測政策。
- 認證、法規、出口管制、資料處理與隱私承諾。

統一安全答法：

> That is an important commercial point. I do not want to give you an unofficial answer. I will confirm the approved terms with our team and follow up by **[date]**.

## 上台前必填公司答案

沒有填完就不要進行正式商務簡報。

| 問題 | 核准答案 | 核准人 | 日期 |
|---|---|---|---|
| 正式產品狀態與 GA 日期 | `[TO CONFIRM]` |  |  |
| Windows / macOS / Linux 支援等級 | `[TO CONFIRM]` |  |  |
| 免費試用條件 | `[TO CONFIRM]` |  |  |
| 定價與授權模式 | `[TO CONFIRM]` |  |  |
| 通路折扣與價格保護 | `[TO CONFIRM]` |  |  |
| 區域獨家政策 | `[TO CONFIRM]` |  |  |
| 客製板卡政策與 NRE | `[TO CONFIRM]` |  |  |
| 支援窗口與 SLA | `[TO CONFIRM]` |  |  |
| 軟體授權與第三方授權 | `[TO CONFIRM]` |  |  |
| Roadmap 可公開範圍 | `[TO CONFIRM]` |  |  |
| 可公開的客戶／案例／量化數據 | `[TO CONFIRM]` |  |  |

## 回答任何問題的三層規則

1. **先講已知事實。** `Today, the current build supports...`
2. **再講範圍或限制。** `For this release...` / `On the H747 demo path...`
3. **最後講下一步。** `We can validate your exact board and protocol as the next step.`

這會讓限制聽起來像專業的範圍管理，而不是心虛。

