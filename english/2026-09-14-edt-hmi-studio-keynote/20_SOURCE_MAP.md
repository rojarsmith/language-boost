# 產品、公開狀態與營收說法來源對照

來源根目錄：C:\my\build\github\edt-hmi-studio

查核時間：2026-09-18，Asia/Taipei  
HEAD：80cf1e4080bb564c2736ede44be1c7cd71ea6d32  
版本：0.8.8-dev，最近 release 為 0.8.7

## 來源優先順序

1. Current code、tests、board definitions 與 release notes：判斷技術現況。
2. 公開 Alpha／Beta 網頁：判斷可公開下載版本與外部 roadmap。
3. 公司核准的 Product、Finance、IR、Legal 文件：判斷商業條件與財務說法。
4. 法說會與行銷草稿：只作提案背景，不視為已核准事實。
5. 本教材：訓練用途，不能反過來成為產品證據。

## 版本與公開狀態

| 說法 | 主要來源 | 使用方式 |
|---|---|---|
| Source branch is 0.8.8-dev after release 0.8.7 | package.json、git describe、CHANGELOG.md | 內部技術快照 |
| Public evaluation page shows 0.8.5 Alpha | [EDT HMI Studio public page](https://edthmistudio.bitdove.net/) | 對外 availability 基準 |
| Alpha is for key stakeholders and should not be passed downstream | public page | 對外必須保留限制 |
| Public page roadmap shows Beta in Oct 2026 and general release in Dec 2026 | public page | 活動前重查；不是不可變更承諾 |

## 產品定位與 AI

| 說法 | 來源 |
|---|---|
| Visual embedded HMI editor、events、logic、C codegen | README.md、README.zh-TW.md、src/App.tsx |
| AI creates projects, converts visual references, edits in place, and answers questions | docs/landing/0.8.5-vercel/index.html、current AI assistant source |
| AI uses the editor path and groups an applied change into one undo step | public landing copy、assistant integration |
| OpenRouter and Ollama providers | public landing copy、AI settings source |
| OpenRouter is external; Ollama is local only when configured to a local host | provider configuration and public copy |
| AI never operates hardware directly | public landing copy and assistant action scope |

## UI、workflow 與 components

| 說法 | 來源 |
|---|---|
| Design、Image、Text、Logic、Protocol、Preview／Emulator、Deploy | src/App.tsx |
| 25 current palette components | src/utils/componentDefinitions.ts |
| Screens、events、animations、resources and multilingual text | src types、editors、codegen and examples |
| Logic node definitions and categories | src/components/LogicEditor/nodeDefinitions.ts |
| Board-aware project validation | Deploy panel、server/hmi/validation.ts |
| Customer Demo can be exported as a self-contained HTML／zip evaluation artifact | Customer Demo implementation and release notes |

## Emulator 與 generated code

| 說法 | 來源 |
|---|---|
| Emulator compiles generated C with real LVGL | docs/preview-ladder.md、src/components/Emulator、server/emulator |
| Firmware and Emulator paths target LVGL 9.5 | docs/lvgl-version.md、tools/bootstrap-emulator.mjs |
| Emulator runs events, logic, tags and simulated communication | Emulator runtime and protocol simulator source |
| Emulator does not replace hardware performance and bus validation | docs/preview-ladder.md and product limitations |
| Problems pane、diagnostics and report dump in 0.8.7 | CHANGELOG.md and diagnostics source |

## Protocols、tags 與 roles

| 說法 | 來源 |
|---|---|
| Link, device and tag model | src/types/connections.ts、docs/protocol-connections.md |
| Modbus RTU and configurable serial commands | src/types/hmi.ts、protocol runtime、examples |
| Initiator and responder roles | CHANGELOG.md、docs/protocol-connections.md |
| Tag types, access rules, scaling, offset and polling | connection types and Protocol UI |
| Modbus host interface CSV、C header and printable register map | src/codegen/hostInterface.ts and responder workflow |
| CAN types exist but current runtime and widget binding remain incomplete | current types、board definitions、CAN research notes |

## Board profiles

| 說法 | 來源 |
|---|---|
| STM32F746G-DISCO、STM32H747I-DISCO、EDT EVK043027B profiles | src/types/hmi.ts and board source |
| F746 VCP with current serial protocols | board definitions and example projects |
| F746 software JPEG up to 320 × 176 at 15 fps with PCM 44.1 kHz stereo | docs/video-playback.md、board capability model、0.8.7 notes |
| H747 hardware JPEG up to 800 × 480 at 24 fps without audio | docs/video-playback.md and board capability model |
| H747 USB HS and Ethernet hardware exist but stacks are outside current build | board definitions and hardware notes |
| H747 CAN FD has controller／loopback research and needs an external transceiver for a bus | CAN research and board notes |
| EDT EVK USB-C serial path is ready; RS-485 and CAN software status need qualification | board definition and EVK notes |

## Current examples and visual evidence

| Material | Source |
|---|---|
| EVK Coffee Bar | examples directory |
| H747 Coffee Machine | examples/h747-coffee-machine.json |
| Multiple washing-machine examples | examples directory |
| Responder and brightness examples | examples directory |
| Latest Design、Logic、Protocol、Preferences and AI screenshots | docs/landing/0.8.5-vercel/assets, copied to assets/latest |
| Investor-conference figures and deck | docs/investor-conference-2026-09, copied to assets/source-investor-conference |

## 商業與財務材料

| 說法 | 來源 | 狀態 |
|---|---|---|
| Software may be free with EDT-manufactured compatible LCM hardware | assets/source-investor-conference/research.md | Internal draft, approval required |
| Customer-funded OpenRouter usage or EDT-managed AI usage | same research file | Internal draft, approval required |
| Licensing to HMI／IC vendors | same research file | Future option, approval required |
| Draft LCM revenue scenarios of TWD0.3B, 0.8B, 1.4B and 2.0B for 2027–2030 | same research file and deck source | Internal draft, Finance／IR approval required |
| US$200M repeatable annual revenue engine | User-requested keynote objective and 24_USD_200M_REVENUE_MODEL.md | Scenario only, not company guidance |

## 外部市場背景

這些資料只能用來說明市場尺度，不能證明 EDT 會取得該營收。

| 外部說法 | 來源 | 使用限制 |
|---|---|---|
| Global HMI market projected at US$11.60B in 2030, CAGR 10.4% for 2023–2030 | [Grand View Research, Human Machine Interface Market](https://www.grandviewresearch.com/industry-analysis/human-machine-interface-market) | 第三方市場估計；活動前確認頁面日期與定義 |
| AI in manufacturing projected from US$34.18B in 2025 to US$155.04B in 2030, CAGR 35.3% | [MarketsandMarkets, AI in Manufacturing Market](https://www.marketsandmarkets.com/Market-Reports/artificial-intelligence-manufacturing-market-72679105.html) | 第三方市場估計；不要把整個市場視為 EDT addressable revenue |

US$200M 約等於 US$11.60B 的 1.7%。這只是算術尺度，不是 EDT 2030 market-share forecast。

## 已知衝突與處理

| 衝突 | 處理規則 |
|---|---|
| Source 0.8.8-dev，public page 0.8.5 Alpha | 技術現況與公開 availability 分開說 |
| 舊行銷材料寫 November 2026，public page 現寫 December 2026 general release | 使用活動前最後核准的公開文字 |
| 舊 README feature count 18，current palette count 25 | 目前教材使用 25，並說 current source |
| 舊教材寫 video only on H747，0.8.7 已增加 F746 software video and sound | 使用 board-specific 新表格 |
| Source 有 CAN schema／研究，runtime path 未完成 | 一律說 roadmap or research |
| EVK RS-485 的硬體與軟體描述不完全一致 | release build 實機確認前不承諾 |
| Internal draft 2030 hardware scenario is TWD2.0B，keynote North Star is US$200M | 不換算、不混用；Finance／IR 先統一 scope and timing |
| Public Alpha warns against downstream distribution | 不把 download link 當作一般客戶公開銷售版本 |

## 每次更新教材的流程

1. 檢查 source Git status、HEAD、package version、CHANGELOG 與 release tag。
2. 檢查公開頁面的 title、version、release date、audience、roadmap 與 download terms。
3. 重新驗證 board、protocol、AI provider、video 與 demo capability。
4. 先更新 00_PRODUCT_TRUTH.md。
5. 再更新 keynote、Q&A、Voice prompts、flashcards 與提示卡。
6. 所有商業與財務數字由 Product、Finance、IR、Legal 與管理階層簽核。
