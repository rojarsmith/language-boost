# 產品說法與原始資料對照

來源根目錄：`C:\my\build\github\edt-hmi-studio`

盤點時間：2026-08-23，Asia/Taipei。當時 HEAD 為 `cfe419c`，且 `src/codegen/hostInterface.ts`、`src/components/ProtocolPanel/ProtocolPanel.tsx` 有未提交修改。這份教材沒有修改來源專案。

## 核心定位與行銷

| 說法 | 來源 |
|---|---|
| visual editor、drag and drop、events、logic、C codegen | `README.md`, `README.zh-TW.md` |
| No code / five steps / November 2026 / Win-OSX-Linux | `docs/marketing/edt-hmi-studio-teaser.pptx`, `docs/marketing/edt-hmi-studio-teaser-a4*.docx` |
| launch assets purpose and grandma test | `docs/marketing/README.md` |
| screenshots and demo graph generation | `docs/marketing/generator/take_shots6.js` |

## UI 與工作流程

| 說法 | 來源 |
|---|---|
| 正常 tabs：Design, Image, Text, Logic, Protocol, Preview, Deploy | `src/App.tsx` |
| Icon / Code 為 Factory Dev Mode | `src/App.tsx`, `docs/factory-dev-mode.md` |
| 25 current palette components | `src/utils/componentDefinitions.ts` |
| logic nodes and six shelves | `src/components/LogicEditor/nodeDefinitions.ts`, `docs/logic-node-taxonomy.md` |
| animation model and triggers | `docs/animation-model.md` |
| five screen transitions | `docs/screen-transitions.md` |
| runtime language switching | `docs/language-switching.md` |

## Emulator 與 code generation

| 說法 | 來源 |
|---|---|
| Prototype / Simulator / Emulator / Deploy differences | `docs/preview-ladder.md` |
| Emulator compiles generated C with real LVGL | `docs/preview-ladder.md`, `src/components/Emulator/`, `server/emulator/` |
| firmware and Emulator target LVGL 9.5 | `docs/lvgl-version.md`, `tools/bootstrap-emulator.mjs` |
| Simulator artifacts remain 9.2 | `docs/lvgl-version.md` |
| generated UI/event/logic files | `README.md`, `src/codegen/generator.ts` |
| Work pane, logs, cancellation | `docs/work-progress.md`, `docs/streaming-build-log.md` |

## Protocol、tags 與 roles

| 說法 | 來源 |
|---|---|
| Link → Device → Tag model | `src/types/connections.ts`, `docs/protocol-connections.md` |
| Modbus RTU and Serial commands definitions | `src/types/hmi.ts` |
| Modbus client/server roles | `CHANGELOG.md`, `docs/protocol-connections.md` |
| serial command templates, Composer, locator, responder events | `CHANGELOG.md`, `docs/protocol-connections.md`, `docs/uart-command-protocol.md` |
| link budget, Monitor, Test | `CHANGELOG.md`, `src/components/ProtocolPanel/` |
| host interface CSV/header/printable | `CHANGELOG.md`, `src/codegen/hostInterface.ts` |
| current one-link/one-device cap | `src/types/connections.ts`, `docs/protocol-connections.md` |

## Boards 與 deployment

| 說法 | 來源 |
|---|---|
| 三個 board profiles、解析度、色深、connectors、video capability | `src/types/hmi.ts` |
| build, flash, hardware gating | `src/components/DeployPanel/DeployPanel.tsx` |
| firmware service and target checks | `server/hmi/service.ts`, `server/hmi/validation.ts` |
| desktop wrapping and OS build paths | `README.md`, `desktop/` |
| installer/toolchain licensing limits | `docs/desktop-installer-packaging.md` |
| orientation by board | `docs/display-orientation.md`, `src/types/hmi.ts` |
| EDT EVK details | `docs/edt-evk043027b.md` |

## Fonts、images、video

| 說法 | 來源 |
|---|---|
| Noto TC/SC/JP/KR bundled files | `public/fonts/`, `src/resources/bundledFonts.ts`, `CHANGELOG.md` |
| glyph collection and font requests in deploy path | `server/hmi/projectSource.ts`, `src/codegen/collectGlyphs.ts`, `src/codegen/fontRequests.ts` |
| charset trimming measurements/design history | `docs/charset-trimming-design.md` |
| external image/font placement | `docs/images-external-flash.md`, `src/components/DeployPanel/DeployPanel.tsx` |
| H747-only current video capability and limitations | `docs/video-playback.md`, `src/types/hmi.ts` |

## Demo facts

| 說法 | 來源 |
|---|---|
| Coffee example: four screens, 46 top-level components, 28 animations, 13 tags, 3 languages, 16 typographies, 55 texts | `examples/h747-coffee-machine.json` |
| Coffee example has zero logic graphs | 同上 |
| F746 Modbus example: one screen, 3 components, 3 tags | `examples/f746-modbus-hmi.json` |

## 已發現的資料衝突

| 衝突 | 處理方式 |
|---|---|
| README：v1.0.0 / Production Ready；marketing：Coming November 2026；Changelog：Unreleased | 對外一律等 product management 核准 release wording。 |
| README feature list：18 widgets；current component definitions：25 palette components | 教材用 25 current palette components，並標 snapshot。 |
| README 說 MIT 並引用 LICENSE；根目錄沒有 LICENSE | 不承諾法律授權，要求正式 license。 |
| Marketing 說 Win / OSX / Linux；README 說 macOS upstream experimental | 說「being prepared」，等正式 support matrix。 |
| `font-selection.md` 開頭說 nothing bundled yet；同文件後段與 current source 顯示四套 Noto 已 bundled | 以 current source 與 changelog 為準，視開頭 status 為過時。 |
| EDT EVK RS-485 changelog 說可跑 Modbus；current board definition 標 fitted-unbound | 需要 release build 實機確認後才對外承諾。 |
| `protocol-connections.md` 開頭說 planning only；後面 progress 與 changelog 顯示 P1–P7 多數已 landed | 以後段 progress、current source 與 commit history 為準。 |
| P7 progress 說 command-list export follows | 不把 command-list export 說成 current feature。 |

## 更新教材時的順序

1. 先讀 `git status`、HEAD 與 `CHANGELOG.md` 的 Unreleased。
2. 以 current code model 驗證 board、protocol、component、role。
3. 再更新 `00_PRODUCT_TRUTH.md`。
4. 所有 pitch、Q&A、flashcards 最後跟著更新。
5. 任何商務資訊都要來自核准文件，不從程式碼推論。

