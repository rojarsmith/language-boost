# 產品事實與版本邊界

這是整套教材的事實基準。先辨識所說的是公開下載、已標記 release、開發分支，還是未提交修改，再回答功能問題。原始碼支持某項能力，不代表公開 Alpha 已包含它，也不等於完成量產驗證。

## 2026-10-02 查核快照

| 項目 | 結果 |
|---|---|
| 來源 | C:\my\build\github\edt-hmi-studio |
| 查核日期 | 2026-10-02，Asia/Taipei；採用當日 18:46:45 提交的固定快照 |
| 目前分支 | display-input-phase-1 |
| HEAD | 2df2b5dccca9774c53b11c9a7d4a4321028c1b78 |
| Git describe | 0.8.9-180-g2df2b5dc |
| package version | 0.9.0-dev |
| 本地 main | a627b94a；目前分支包含 main 之後的 Phase 1 工作 |
| 工作目錄 | 有已修改與未追蹤檔案；本次唯讀查閱，未修改產品專案 |
| 最近 release tag | 0.8.9；CHANGELOG 日期 2026-09-25 |
| 前一 release | 0.8.8；CHANGELOG 日期 2026-09-21 |
| 公開下載 | [EDT HMI Studio](https://edthmistudio.bitdove.net/)；本次取得 HTTP 200 |
| 網頁內容 | 0.8.5 Alpha，released 2026-09-10；尚未改成 Beta |

這是文件與程式碼查核，不是本次重新執行完整產品測試或上板驗證。來源文件記錄的測試結果是專案自身的工程證據，不是獨立認證。

## 先背這三句

> The public download is still the 0.8.5 Alpha.
>
> Today, I am showing a development build.
>
> Some features shown here are not in the public Alpha.

不要把 0.8.9 tag、0.9.0-dev、或尚未提交的功能統稱為「已公開發布」。原活動目錄日期 2026-09-14 保留作為歸檔識別；本次更新日期不是新的演說日期。

## 核心產品能力

| 已查核說法 | 必須保留的範圍 |
|---|---|
| A visual development environment for embedded touch interfaces. | Supported workflows 不必從手寫 application C 開始；特殊硬體仍需工程整合。 |
| Design, logic, communication, emulation, firmware build and programming in one project. | 實體 deployment 需要已整合的 board firmware、工具鏈與連線。 |
| The Emulator compiles generated C with real LVGL. | 會執行 events、logic、tags 與模擬通訊；不證明 MCU timing、實體 bus 或產品安全。 |
| Three physical board profiles, plus Virtual Model. | Virtual Model 是規格，不是第四塊能直接燒錄的板卡。 |
| Modbus RTU and configurable line-oriented serial commands. | 依 board、connector 與 initiator／responder role 驗證；仍是一條 active link、一個 device。 |
| Multi-screen design, text, languages, typography, images, animations and visual logic. | 資源與媒體仍有 board-specific 限制。 |
| The current normal palette offers 21 widgets. | 28 個定義中，6 個只在 Factory Mode，Page 是 Pages 的子項、不單獨出現在 palette；Factory Mode 可見 27 個。不是公開 0.8.5 的元件數。 |

正常 palette 分為 Display、Input、Shape、Container。Textarea、Table、Calendar、Tab View、Tile View、Window 目前只在 Factory Mode；不再說「目前一般使用者有 25 個元件」。既有專案內的這些元件不會因隱藏 palette 而自動刪除。

## 0.8.8 與 0.8.9 release 記錄新增

| 能力 | 初學者可說的英文 | 限制 |
|---|---|---|
| Virtual Model 與規格匯出 | We can design and test an HMI before the board exists. | 自訂 display、memory、ports，Emulator、demo package、HTML／JSON specification 可用；不能 Build for the HMI 或 Program。RAM／Flash budget 含估計，不是實測。 |
| Checks | We can save a test and run it again after a change. | 從 Emulator Start 記錄操作，再重播並比較選定的 screens、tag writes、variables；不是實機測試或畫面逐像素比對。 |
| Logic live trace 與 Tag Trigger | We can see which logic ran and what the values became. | 執行中 Emulator session 可跨分頁保持；Tag Trigger 可在數值改變時啟動 graph。 |
| HMI memory | We can keep a value inside the HMI, without a device address. | 支援起始值；不把所有 memory value 都說成斷電保存。 |
| Audio 與 Play Sound | The F746 can play a prepared WAV from the SD card. | 目前實體獨立音效路徑是 F746；H747／EVK 不具有同等 audio 支援。 |
| 圖像式 Button／Slider、Loop Strip | Controls can use pictures, and a Loop Strip can scroll an image. | 顯示用途不代表任意動態圖片或完整趨勢圖能力。 |
| Windows .ehsp 與 Auto Save | On Windows, we open a project file and save changes back to it. | 0.8.9 已有 Load Project、Auto Save／Revert；新建、Save As、Recent、恢復等後續流程在 unreleased 開發內容。Web／Linux 路徑不可一概套用。 |
| F746 外部 Flash | F746 images and converted fonts can use its 16 MB external flash. | 仍需正確 NOR part、loader 與硬體驗證；不是所有 firmware 都有 16 MB 可自由使用。 |
| Incremental builds | The build reuses work that has not changed. | 開發文件中的測速依賴主機、快取與專案；不保證每台電腦一秒完成。 |
| License Agreement | The app now includes a License Agreement and Legal Notices screen. | 說明見下方；有 notice 不等於已獨立驗證合規。 |

## 開發分支中已有的變更

以下是本次 0.9.0-dev 快照的程式能力，不是公開 Alpha 的發行聲明。

- **Pages**：同一個區域放多個 page，一次顯示一頁；可用 tabs、swipe、tag 或 action 切換。Screen 是整個畫面，不等同 Pages 裡的 page。
- **Show when／Selected when**：由 tag 條件控制顯示或選取外觀，減少重複邏輯。
- **Words**：Label 依數值挑選翻譯文字，例如狀態 1 顯示 Ready。第一個符合的 entry 生效，否則使用 Label 本身文字。已進入目前分支的 editor、preview、generator 與 assistant。
- **元件與預覽一致性**：Events／bindings 只提供元件能履行的選項；一般 Emulator 不接受 PC 鍵盤，觸控讀取週期按板卡設定模擬；不能拿 PC 上的鍵盤輸入當作實體 Textarea 可輸入的證據。
- **LVGL**：Firmware、Emulator 與 2026-09-29 重建的 prebuilt Simulator 都是 9.5；Simulator 仍沒有 generated application code，不能因版號相同就視為同等驗證。
- **Usability reminders**：新 Input 依 glass 尺寸使用約 9 mm 的短邊 touch target；Problems 提醒過小目標、難辨識的選取色、紅色 Start、文字閃爍等。這些提醒不是認證，既有設計也不會自動全部修正。
- **Windows project workflow**：目前分支新增 Save As、Recent、Explorer 開啟、其他 instance 開檔提示與 crash recovery 等；演練要以實際安裝 build 確認 UI。

### 已提交的可讀性提醒與進行中工作

本次採用的 2df2b5dc 已提交 **Reading Distance** 設定，以及依閱讀距離檢查小字／對比、16-bit gradient／shadow 條帶的提醒。來源包括 `src/store/glassProblems.ts` 與 `src/utils/readingDistance.ts`。這些是開發分支功能，仍不是公開 Alpha 或已發布 release 的能力。

> The development build can flag text that may be too small to read.

來源工作目錄同時正在修改 Label 的 **Scroll round** 長文字模式與相關提醒。本次只記錄這項未提交工作，不列為已完成的演說功能。後續若來源再變動，以本表固定 commit 為本教材基準。

## AI assistant

> The assistant uses the editor's own controls. Its result remains normal project content. We can inspect it, edit it, and undo an applied run as one step.

- 能處理 screens、widgets、styles、texts、languages、assets、tags；目前分支亦可設定 Pages、條件與 Words。
- 不操作、燒錄目標硬體；輸出仍需人工檢查。
- Provider 為 OpenRouter 或 Ollama；OpenRouter 將所需 context 送往外部服務。
- Ollama 只有連本機 host 時才能描述為本機推論；不能由 provider 名稱推導整個系統永不連網。
- 本教材的 ChatGPT Voice 是英文教練；Studio assistant 與洗衣機示範的外部 voice unit 是不同功能。

## Board 與資源

| 實體 board | 已查核路徑 | 不應延伸的能力 |
|---|---|---|
| STM32F746G-DISCO | 480×272 RGB565，landscape；ST-LINK VCP 的 Modbus／serial commands；16 MB QSPI 放圖片與轉換字型 | 影片為 software JPEG，最大 320×176、15 fps，含 PCM 44.1 kHz stereo；不是高畫質通用播放器 |
| STM32H747I-DISCO | 800×480 ARGB8888，landscape／portrait；ST-LINK VCP；hardware JPEG 最大 800×480、24 fps | 目前 video 無 audio；USB HS device stack 與 Ethernet TCP/IP 未編入 |
| EDT EVK043027B | 480×272 ARGB8888，landscape／portrait；USB-C CDC 的 Modbus／serial commands | RS-485 fitted-unbound；CAN not-compiled；目前無 video／audio 路徑 |

H747 的 CAN controller 已有 loopback／工程路徑，但實體 bus 需要外接 transceiver；整體 CAN widget binding／runtime 並非本教材可承諾的量產通訊路徑。Virtual Model 可描述 connector，不會因此實作 CAN、RS-485 或任意自訂硬體。

## Demo 與 host interface

- Deploy 的交付卡名稱是 **Emulator**，不是 Customer Demo；「demo package」是它產生的評估檔案。
- PC demo package 的核心互動可離線開啟，不需板卡、cable、toolchain 或安裝 Studio。製作該 package 的電腦仍需編譯工具。
- 外部 Links／Videos 需要網路；不要說整個含外部內容的 demo 全部 offline。
- 專案持有檔案的 HMI 影片可隨包提供；目前分支阻止不符合 board／video 限制的播放。影片 demo 不含影片聲音；獨立 Play Sound 是另一條路徑。
- Modbus responder 匯出：`register-map.csv`、`hmi_map.h`、`register-map.html`。
- Serial-command responder 匯出：`command-list.csv`、`hmi_commands.h`、`command-list.html`。舊教材「尚未完成」已過時。
- Virtual 1280×480 Smart Washer Voice Serial Command 是 UI 與外部 voice-unit 合約示範；可無麥克風操作，不代表 Studio 內建語音辨識。

## 公開版本

本次網頁仍標示 0.8.5 Alpha、Windows 10／11 64-bit、594 MB self-contained、key stakeholders evaluation、not for redistribution；installer 尚未 code-signed。網站 roadmap 仍寫 October 2026 Beta 與 December 2026 general release。

> The 0.8.5 Alpha is available for evaluation by key stakeholders.

只有網站真正發布 Beta 才替換 availability 台詞；進入十月不等於 Beta 已發布。Roadmap 不是完成證據。

## 授權與商業說法

最新 source 的 `src/legal/legalText.ts` 有 version 1.0、effective 2026-09-23 的廠商授權文字：產品為 proprietary／closed-source，無費用使用限定為 EDT 供應 display modules 的 UI 工作，創作內容歸使用者，置入的 runtime code／libraries 限 EDT hardware。這是**程式內的條款說明**，不是本教材授予權利或證明條款已適用於舊公開 installer。

README 仍有 MIT 標示，且實體技術 profiles 包含 ST kits；兩者不能用來推導非 EDT hardware 的商用授權。對外應交付對應 build 的正式條款並確認評估板用途。安全英文：

> The current in-app terms describe a proprietary tool, free to use for EDT-supplied displays. We will confirm the terms that apply to your build and hardware.

同一份 legal text 含 privacy、CRA、SBOM、security-update 等廠商聲明。本次沒有查驗完整交付清單、合規報告或客戶 SLA；有聲明不等於已獨立驗證。

US$200M 仍是使用者指定的 scenario，不是來源 repo 可證明的營收。來源法說會草稿最高 TWD2.0B 情境與此不同，不混用。付費 AI／services、OEM licensing、價格、通路經濟、ARR 分類與成功率仍未由新功能證明。

> Our North Star is a repeatable US$200 million annual revenue engine. It is a scenario model, not approved guidance.

## 回答順序

1. **Version:** In this development build...
2. **Fact:** We can save a Check and replay it.
3. **Boundary:** It tests the emulated application, not the physical machine.
4. **Next proof:** Let us validate your exact use case.

詳細來源見 [20_SOURCE_MAP.md](20_SOURCE_MAP.md)，新版口說練習見 [31_LATEST_UPDATE_AND_PRACTICE.md](31_LATEST_UPDATE_AND_PRACTICE.md)。
