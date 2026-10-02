# 最新產品資料與教材來源對照

來源根目錄：`C:\my\build\github\edt-hmi-studio`。查核日期：2026-10-02，Asia/Taipei。

| 版本層 | 證據 |
|---|---|
| 公開網頁 | [EDT HMI Studio](https://edthmistudio.bitdove.net/) 於本次讀取得 HTTP 200；0.8.5 Alpha，released 2026-09-10 |
| 最近 release tag | 0.8.9；CHANGELOG 日期 2026-09-25 |
| 已提交開發快照 | branch display-input-phase-1；HEAD `2df2b5dccca9774c53b11c9a7d4a4321028c1b78`；describe `0.8.9-180-g2df2b5dc`；package `0.9.0-dev` |
| 本地 main | `a627b94a`；不是目前工作分支 |
| 未提交工作 | Label Scroll round 模式與相關提醒等；不能歸入本次固定 HEAD 或 release |

## 如何閱讀證據

程式實作、tests 與文件的最新完成段落用於查核功能；同一份設計文件可能保留早期計畫，不把舊的 pending 當作現況，也不把後續 proposal 當作完成。公開頁面只支持公開 availability。原始碼不是公司核准的財測、獨立測評或合規認證。

本次沒有執行整套產品 tests、build、AI request 或實體燒錄；只查閱實作、範例與工程記錄。本次未寫入來源專案。來源在查核期間由其他工作持續更新，本教材固定到 2026-10-02 18:46:45 的 2df2b5dc；Reading Distance 已納入該 commit，後續未提交 Scroll round 修改僅記錄為進行中。

## 產品與元件

以下相對路徑都位於來源根目錄。

| 教材事實 | 直接來源 | 範圍 |
|---|---|---|
| 視覺設計、logic、protocol、preview、deploy | `src/App.tsx`、`src/codegen/generator.ts` | 目前 source |
| 21 normal／27 Factory palette entries，28 definitions | `src/utils/componentDefinitions.ts` 的 `componentDefinitions`、`paletteOffers`；`src/components/ComponentPanel` | 6 factory-only，1 never-offered Page；不是舊 Alpha 數字 |
| Pages 及 page 子項 | `docs/components/pager.md`、component definitions、`docs/container-family.md` 完成記錄 | Unreleased development |
| Show when／Selected when | `src/codegen/showWhen.ts`、`src/codegen/selectedWhen.ts`、`docs/container-family.md` | Unreleased development |
| Words 由數值選擇翻譯文字 | `src/types/hmi.ts`、`src/components/PropertyEditor/WordsEditor.tsx`、`docs/components/label.md` §13 | 目前 Phase 1 已提交 |
| 約 9 mm 新 Input 與小於 7 mm 提醒 | `src/utils/componentDefinitions.ts`、`src/store/problems.ts`、`docs/display-input-family.md` I24 | 已提交；不自動改舊 widgets |
| 外觀風險提醒 | `src/store/lookProblems.ts`、`src/utils/colourArithmetic.ts` | 已提交基礎功能；工作目錄另有 Scroll round 相關修改 |
| Reading Distance、字體可讀性、16-bit banding | `src/utils/readingDistance.ts`、`src/store/glassProblems.ts`、`src/components/ProjectSettings/ProjectSettings.tsx`、`git show 2df2b5dc` | 已提交至 2df2b5dc；仍屬 Unreleased development |

## 測試與交付

| 教材事實 | 直接來源 | 範圍 |
|---|---|---|
| Generated C 在 real LVGL Emulator 執行 | `docs/preview-ladder.md`、`src/components/Emulator`、`server/emulator` | 不是物理板卡性能證明 |
| Firmware／Emulator／prebuilt Simulator 都為 LVGL 9.5 | `docs/lvgl-version.md` §1.2；Simulator 2026-09-29 重建記錄 | Simulator 仍不執行 generated application code |
| Checks 記錄與重播，screens／tags／variables 比對 | `src/emulator/checks.ts`、`checkRunner.ts`、`docs/logic-debug-graph.md` §18 | 0.8.8 release note；不是 screenshot comparison |
| Problems 與 Checks 不同 | `docs/bottom-dock-panel.md` §18、`src/store/problems.ts`、`checkStore.ts` | 前者檢查 project，後者重跑作者情境 |
| Logic trace、Tag Trigger、HMI memory 起始值 | `CHANGELOG.md` 0.8.8、`docs/logic-debug-graph.md`、`docs/hmi-memory-and-retention.md` | 0.8.8 release 記錄 |
| 增量 build 與預備工具鏈 | `docs/incremental-builds.md`、`CHANGELOG.md` 0.8.9 | 不把範例測速當 SLA |
| PC demo package 離線核心、外部 Links／Videos 例外 | `docs/demo-package.md` §2、§9.6、§9.7、§11；`src/standalone/demoPackage.ts` | 製作端仍需工具鏈；recipient 不需 |
| Video package 無影片音軌；遵守 board 限制 | `docs/demo-package.md` §11；`src/store/videoBlockers.ts` | 媒體 bytes 必須存在；一般音效與影片音軌不同 |

## Hardware 與 protocols

| 教材事實 | 直接來源 | 範圍 |
|---|---|---|
| 三個 physical board profiles | `src/types/hmi.ts` 的 `SUPPORTED_BOARDS` | F746／H747／EVK；各自能力不同 |
| Virtual Model、budget、規格 HTML／JSON | `src/types/boardOf.ts`、`src/budget`、`docs/virtual-model.md` §16 | 規格與估計；沒有 board firmware 可 Program |
| F746 VCP、16 MB QSPI、video／WAV sound | `src/types/hmi.ts`、`docs/images-external-flash.md` §7、`docs/video-playback.md`、0.8.8／0.8.9 notes | JPEG 320×176 @15fps；正確 NOR part／loader |
| H747 VCP／hardware JPEG | `src/types/hmi.ts`、`docs/video-playback.md` | 800×480 @24fps，video 無 audio |
| H747 USB HS／Ethernet 未編入、CAN 需 transceiver | `src/types/hmi.ts` connector status | Controller loopback 不等於完整 production CAN |
| EVK USB-C ready、RS-485 fitted-unbound、CAN not-compiled | `src/types/hmi.ts` connector status | 無 video／audio；不由硬體存在推論 software ready |
| 一條 active link 與一個 device | `src/types/connections.ts` cap | Virtual Model 多 ports 描述不解除 cap |
| Modbus RTU／Serial Commands、雙向 roles | `src/types/hmi.ts`、`src/types/connections.ts`、`docs/protocol-connections.md` | Line-oriented command；不是任意 binary protocol |
| Modbus 與 command host-interface 三種匯出 | `src/codegen/hostInterface.ts` 的 `HOST_INTERFACE_FILES`／`generateHostInterface` | Command CSV、hmi_commands.h、HTML 已有實作 |

## 專案與 AI

| 教材事實 | 直接來源 |
|---|---|
| Windows .ehsp、Load Project、Auto Save、Revert | `docs/ehsp-format.md` §10–11、0.8.9 CHANGELOG |
| Save As、Recent、Explorer open、crash recovery | `docs/ehsp-format.md` §11.12–11.24、Unreleased CHANGELOG |
| Assistant 使用 editor controls、一次 undo、不操作 hardware | `docs/ai-assistant.md` §2、§6；public page |
| OpenRouter／Ollama 與資料流 | `docs/ai-assistant.md`、`src/legal/legalText.ts` privacy notice、provider settings |
| Assistant 可處理 Pages、條件、Words | `docs/ai-assistant.md` §6.2；assistant tools／snapshot source |
| H747 Coffee 實際內容 | `examples/h747-coffee-machine.json`：4 screens、46 top-level components、28 animations、13 tags、3 languages、0 logic graphs |
| 1280×480 Virtual Smart Washer | `examples/virtual-1280x480-washing-machine-uc.json`、`docs/virtual-washer-1280x480.md` | 
| Voice washer 為外部 voice unit 合約示範 | 同上 §1；無麥克風可操作，不是內建 speech recognition |

## 授權與公司聲明

| 來源 | 可以支持 | 不能支持 |
|---|---|---|
| `src/legal/legalText.ts`，edition 1.0／2026-09-23；`docs/license-agreement.md` | 新版 source 有 proprietary、EDT hardware 範圍的免費授權文字，first-start acceptance 與 Help viewer | 不能由教材推定舊 installer 適用版本或個別 ST kit 商用權利 |
| README 的 MIT badge／段落 | README 尚有矛盾文字 | 不能據此稱產品為 MIT open source |
| In-app privacy／CRA notice | 廠商寫有資料流、telemetry、SBOM、vulnerability response 與 updates 聲明 | 不等於獨立合規稽核、客戶 SLA 或已交付完整 SBOM 的證據 |
| `docs/investor-conference-2026-09`，教材 assets 的來源草稿 | 歷史商業提案與 TWD0.3B／0.8B／1.4B／2.0B 情境 | 不是 US$200M 已核准預測；本次比對 baseline 至 HEAD 無檔案差異 |
| [US$200M scenario](24_USD_200M_REVENUE_MODEL.md) | 使用者指定的目標與教材示意算式 | 不是 repo 證明的 revenue、pipeline、ARR 或客戶付費意願 |

## 視覺與外部背景

`assets/latest/` 名稱保留，但內容仍是 0.8.5 landing 的歷史截圖，不是 0.9.0-dev UI capture。`assets/source-investor-conference/`、舊 PPTX、DOCX、WAV 皆保留作來源／備援，不自動成為最新版發布材料。

下列市場數字沿用 2026-09-18 教材查核，**本次未重新研究或更新**。它們不是產品 repo 的證據；正式再次上台前須確認日期、定義與相關性。

| 歷史背景 | 原來源 |
|---|---|
| HMI market US$11.60B in 2030，CAGR 10.4% 2023–2030 | [Grand View Research](https://www.grandviewresearch.com/industry-analysis/human-machine-interface-market) |
| AI manufacturing US$34.18B in 2025 至 US$155.04B in 2030 | [MarketsandMarkets](https://www.marketsandmarkets.com/Market-Reports/artificial-intelligence-manufacturing-market-72679105.html) |

US$200M ÷ US$11.60B 約為 1.7%，只作尺度示意；兩者範圍未必相同，不是 EDT market-share forecast。

## 這次修正的舊說法

- 25 個正常元件 → 21 normal／27 Factory，並說明計數方式。
- Simulator LVGL 9.2 → 目前 prebuilt 9.5，仍不等同 Emulator。
- Command-list export pending → CSV、C header、HTML 已有實作。
- Projects only JSON → Windows .ehsp 與新版 file workflow。
- Only H747 external image flash → F746 0.8.9 亦使用外部 QSPI。
- 全包 demo 永遠不需網路 → 核心 offline，外部 Videos／Links 例外。
- 沒有完整產品 license 文字 → 已有 in-app terms，但 README 衝突仍需釐清。
- 所有 commercial models 只是草稿 → source 已寫 EDT-display 免費使用條款；付費服務與 US$200M 仍是未驗證情境。
