# EDT HMI Studio 證據索引

本文件是內部查核用。它把教材中的產品說法連回 a7cc2a8 追蹤版的程式碼、範例與技術紀錄。對外簡報不需要顯示全部路徑，但任何重要承諾都應能追到本表。

## 1. 稽核範圍

| 項目 | 值 |
|---|---|
| Repository | C:\my\build\github\edt-hmi-studio |
| Branch | main |
| HEAD | a7cc2a88204b71a3480042b267b8d3cfa816c2ef |
| HEAD subject | fix: a Set Property value may come from a wire, and the node works from the editor at all |
| HEAD date | 2026-09-03T11:07:54+08:00 |
| Describe | 0.8.1-130-ga7cc2a8 |
| README 宣告版本 | 0.8.2；HEAD 本身沒有對應 release tag，不據此宣稱 GA |

### 以 commit 固定證據，不追隨後續工作樹

稽核開始時為乾淨的 `main@a7cc2a8`。本文件完成前來源工作樹曾被外部流程切換到其他分支並產生無關異動，因此所有證據一律以 `git show a7cc2a8:<path>`、該 commit 的 tracked JSON 與測試為準，不混入之後的工作樹狀態。

Shizuku 的英文／繁中說明、兩個 washing-machine example JSON、gallery entries 與 `washingMachine.test.ts` 已屬於 a7cc2a8 的 tracked 內容，不再當作 untracked 排除。

處理規則：

- 產品功能、Demo 與客戶承諾只能引用 pinned HEAD 或清楚標示版本的正式證據。
- 文件說法若與 tracked JSON 或測試內容衝突，以可重現資料為準；Shizuku 的「完全 byte-for-byte 相同」就是已知不可沿用的概括說法。
- 若未來要更新教材，先以 git status、git ls-files 與 git rev-parse 重新建立快照。

## 2. 證據等級

| 等級 | 說明 |
|---|---|
| A | 追蹤版的實作、型別、產生器、範例 JSON 或可重現計數 |
| B | 追蹤版技術文件中的測試／實機紀錄 |
| C | README、行銷、投資人或 roadmap 敘述；只能作背景，不可凌駕 A/B |
| X | Untracked、未驗證環境、未核准數字或未完成規劃 |

## 3. 產品定位與工作流程

| Claim ID | 可使用的事實 | 來源 | 等級／備註 |
|---|---|---|---|
| P-01 | EDT HMI Studio 是 LVGL UI 視覺化編輯器，具拖放、事件、node logic 與 C code generation | C:\my\build\github\edt-hmi-studio\README.md:13 | C；高層定位可用，但細節需由下列 A 證據支持 |
| P-02 | 主流程涵蓋畫面、events、logic 與產生 C | C:\my\build\github\edt-hmi-studio\README.md:19-76 | C |
| P-03 | 產生 ui.h／ui.c、ui_events.h／ui_events.c、ui_logic.h／ui_logic.c | C:\my\build\github\edt-hmi-studio\README.md:69-76 | C；generator 實作另見 P-04 |
| P-04 | Board project source 使用共同 generator，先 normalize／migrate／expand project，再生成 UI 與 bindings | C:\my\build\github\edt-hmi-studio\server\hmi\projectSource.ts:5-23；C:\my\build\github\edt-hmi-studio\server\hmi\projectSource.ts:187-259 | A |
| P-05 | Project source 同時處理 image、font 與其他專案來源 | C:\my\build\github\edt-hmi-studio\server\hmi\projectSource.ts:267-327 | A |
| P-06 | 前端技術為 React 19、TypeScript、Vite 7、Zustand 5、dnd-kit、xyflow、Monaco、JSZip | C:\my\build\github\edt-hmi-studio\README.md:209-217 | C；實作依賴可再由 package lock 核對 |
| P-07 | Vite 與 standalone 使用相同 local bridge middleware | C:\my\build\github\edt-hmi-studio\server\standalone.ts:6-19；C:\my\build\github\edt-hmi-studio\server\standalone.ts:31-33；C:\my\build\github\edt-hmi-studio\server\standalone.ts:201-244 | A |
| P-08 | Desktop host 採 .NET 10 NativeWebHost；Windows 使用 WebView2，Linux／macOS 有對應 host 路徑 | C:\my\build\github\edt-hmi-studio\README.md:155-173；C:\my\build\github\edt-hmi-studio\desktop\EdtHmiStudio.Desktop.csproj:5；C:\my\build\github\edt-hmi-studio\desktop\EdtHmiStudio.Desktop.csproj:34-40 | A/C |
| P-09 | Set Property 優先使用 wired Value，否則使用固定 params.value；兩者皆無則產生安全 skip comment。新節點預設 0，接線後隱藏固定值欄 | src\codegen\templates\ui_logic.c.ts:1144-1166；src\components\LogicEditor\NodeEditDialog.tsx:357-416；src\components\LogicEditor\nodeDefinitions.ts:141-155；src\codegen\__tests__\ui_logic.c.test.ts:247-337 | A；只代表此節點路徑，不擴大為全部 logic 實機驗證 |

## 4. 元件與設計能力

| Claim ID | 可使用的事實 | 來源 | 等級／備註 |
|---|---|---|---|
| W-01 | 當前 palette 實作共有 25 種 component types | C:\my\build\github\edt-hmi-studio\src\utils\componentDefinitions.ts:35-709 | A；以 definitions 計數 |
| W-02 | Button、Label、Image、Image Button | componentDefinitions.ts:38-133 | A |
| W-03 | Dropdown、Checkbox、Switch、Slider | componentDefinitions.ts:152-217 | A |
| W-04 | Rectangle、Line、Circle、Polygon、Container | componentDefinitions.ts:238-379 | A |
| W-05 | Tab View、Tile View、Window、Progress Bar、Dial | componentDefinitions.ts:402-519 | A |
| W-06 | Spinner、Chart、Table、Calendar、QR Code、Video | componentDefinitions.ts:549-709 | A |
| W-07 | AI 文件亦將目前 component count 記為 25 | C:\my\build\github\edt-hmi-studio\docs\ai-assistant.md:284 | B；與 W-01 交叉核對 |
| W-08 | README 的 18 widgets 為舊數字 | C:\my\build\github\edt-hmi-studio\README.md:18；C:\my\build\github\edt-hmi-studio\README.md:253-262 | C；不得沿用為目前數量 |

## 5. Preview 與 LVGL

| Claim ID | 可使用的事實 | 來源 | 等級／備註 |
|---|---|---|---|
| V-01 | 產品定義 Prototype、Simulator、Emulator、Deploy 四層 | C:\my\build\github\edt-hmi-studio\docs\preview-ladder.md:28-46 | B |
| V-02 | Prototype 是 Canvas2D imitation，適合快速幾何、流程、動畫，不是真 LVGL／產生 C | C:\my\build\github\edt-hmi-studio\docs\preview-ladder.md:63-94 | B |
| V-03 | Simulator 使用預建真實 LVGL rendering，但不執行完整 events、logic 與本次 generated C | C:\my\build\github\edt-hmi-studio\docs\preview-ladder.md:95-128 | B |
| V-04 | Emulator 使用相同 generateCode，經 emcc 編譯 generated C＋LVGL，可跑 events、logic 與 simulated Modbus | C:\my\build\github\edt-hmi-studio\docs\preview-ladder.md:129-188 | B |
| V-05 | Emulator 不能證明 flash／RAM／timing／panel／bus；Deploy 才是實機層級 | C:\my\build\github\edt-hmi-studio\docs\preview-ladder.md:173-188；C:\my\build\github\edt-hmi-studio\docs\preview-ladder.md:189-234 | B |
| V-06 | Firmware 與 Emulator 的主要 LVGL 目標是 9.5.0，並固定／重用同一 checkout | C:\my\build\github\edt-hmi-studio\docs\lvgl-version.md:7-13；C:\my\build\github\edt-hmi-studio\docs\lvgl-version.md:19-59 | B |
| V-07 | 預建 Simulator artifact 仍為 LVGL 9.2 | C:\my\build\github\edt-hmi-studio\docs\lvgl-version.md:61-70 | B；不可宣稱所有預覽層完全同版 |
| V-08 | Project LvglConfig 的 version field 目前不控制實際版本 | C:\my\build\github\edt-hmi-studio\docs\lvgl-version.md:80-88 | B |
| V-09 | 9.5 firmware build 已驗證，但該文件記錄時未完成 image flash、rendering、touch、Modbus 的 9.5 實機測試 | C:\my\build\github\edt-hmi-studio\docs\lvgl-version.md:143-162 | B；重要限制 |

## 6. Board profiles

| Claim ID | 可使用的事實 | 來源 | 等級／備註 |
|---|---|---|---|
| B-01 | Board profile interface、顯示、connector 與限制模型 | C:\my\build\github\edt-hmi-studio\src\types\hmi.ts:242-411 | A |
| B-02 | F746：4.3 吋、480×272、RGB565、landscape、1 MB flash、VCP serial、無 Video、4 MB SDRAM heap | C:\my\build\github\edt-hmi-studio\src\types\hmi.ts:418-467 | A |
| B-03 | H747：4.3 吋、800×480、ARGB8888、landscape／portrait、1 MB flash、external asset flash、VCP serial | C:\my\build\github\edt-hmi-studio\src\types\hmi.ts:469-560 | A |
| B-04 | H747 USB HS stack 尚未編入；Ethernet 無 TCP/IP stack | C:\my\build\github\edt-hmi-studio\src\types\hmi.ts:514-531 | A |
| B-05 | H747 CAN FD 無 transceiver，目前是 loopback；Video 限 MJPEG AVI、SD、JPEG HW | C:\my\build\github\edt-hmi-studio\src\types\hmi.ts:534-552 | A |
| B-06 | EVK043027B／U599：480×272、ARGB8888、雙方向、dimmable backlight、2 MB flash、1 MB heap | C:\my\build\github\edt-hmi-studio\src\types\hmi.ts:562-659 | A |
| B-07 | EVK USB-C VCP 可走 Modbus／serial commands；RS485 fitted but unbound；CAN transceiver fitted but stack not compiled；無 JPEG／Video | C:\my\build\github\edt-hmi-studio\src\types\hmi.ts:615-650 | A |
| B-08 | Helpers 依 board 限制 connector、orientation、video | C:\my\build\github\edt-hmi-studio\src\types\hmi.ts:1295-1420 | A |

注意：EVK board 區塊的部分 CAN 註解與全域 protocol catalogue 的 implemented flag 存在時間差。客戶說法應採兩者交集：目前不提供 production CAN tag/widget data binding。

## 7. Protocol、tags 與 host interface

| Claim ID | 可使用的事實 | 來源 | 等級／備註 |
|---|---|---|---|
| C-01 | Protocol catalogue 有 Modbus RTU、serial commands、CAN bus | C:\my\build\github\edt-hmi-studio\src\types\hmi.ts:144-176 | A；implemented flag 不代表每個 data path 都完成 |
| C-02 | CAN 說明明載 loopback 已 bring-up，但 signals 尚未到 widgets | C:\my\build\github\edt-hmi-studio\src\types\hmi.ts:174 | A |
| C-03 | Tags 與 per-tag command source；locator 目前是 whole／affix／field | C:\my\build\github\edt-hmi-studio\src\types\hmi.ts:817-890 | A；bytes／pattern 不在完成範圍 |
| C-04 | Command templates 支援 GET／SET | C:\my\build\github\edt-hmi-studio\src\types\hmi.ts:897-915 | A |
| C-05 | Serial command panel roles 涵蓋 asks／answers | C:\my\build\github\edt-hmi-studio\src\types\hmi.ts:940-964 | A |
| C-06 | H747 COM3 實機記錄涵蓋 Modbus responder／client、serial responder 的 read、write、event | C:\my\build\github\edt-hmi-studio\docs\protocol-connections.md:320-358 | B；只代表該測試環境 |
| C-07 | Host interface 可匯出 CSV、header、HTML | C:\my\build\github\edt-hmi-studio\docs\protocol-connections.md:360-370 | B |
| C-08 | Connection UI 已落地 | C:\my\build\github\edt-hmi-studio\docs\protocol-connections.md:381-403 | B |
| C-09 | Serial protocol switch proposal 已落地 | C:\my\build\github\edt-hmi-studio\docs\protocol-connections.md:440-452 | B |
| C-10 | Serial command Composer／simulator 與真實 COM 測試 | C:\my\build\github\edt-hmi-studio\docs\uart-command-protocol.md:301-321 | B |
| C-11 | Serial Monitor 與 Web Serial real-link 測試 | C:\my\build\github\edt-hmi-studio\docs\uart-command-protocol.md:329-345；C:\my\build\github\edt-hmi-studio\docs\uart-command-protocol.md:370-381 | B |
| C-12 | CAN header 明載 link ops／runtime loopback，protocol tags-in-frames 為 future | C:\my\build\github\edt-hmi-studio\firmware\common\include\hmi_can.h:4-11；C:\my\build\github\edt-hmi-studio\firmware\common\include\hmi_can.h:21-71 | A |
| C-13 | Generator 目前產生 CAN settings／probe 路徑 | C:\my\build\github\edt-hmi-studio\src\codegen\hmiBindingGenerator.ts:314-336 | A；不能推論 tag frames |
| C-14 | CAN loopback spike 被提升，但 P5 仍 partial | C:\my\build\github\edt-hmi-studio\docs\protocol-connections.md:558-584；C:\my\build\github\edt-hmi-studio\docs\protocol-connections.md:701-702 | B |
| C-15 | Runtime header 明載尚無 protocol 把 tags 放進 CAN frames | C:\my\build\github\edt-hmi-studio\firmware\common\include\hmi_runtime.h:145-150 | A |

## 8. Build、Flash 與桌面包裝

| Claim ID | 可使用的事實 | 來源 | 等級／備註 |
|---|---|---|---|
| D-01 | Build service 的工具能力與 STM32CubeCLT 預設需求 | C:\my\build\github\edt-hmi-studio\server\hmi\service.ts:149-192；C:\my\build\github\edt-hmi-studio\server\hmi\service.ts:308-358 | A |
| D-02 | Build 產生 C、呼叫 board script 並建立 artifacts | C:\my\build\github\edt-hmi-studio\server\hmi\service.ts:431-567 | A |
| D-03 | Flash 前檢查 build status、artifact 必須在 build dir、exact probe、board name／MCU device ID，並先處理 external images | C:\my\build\github\edt-hmi-studio\server\hmi\service.ts:729-937 | A |
| D-04 | Windows installer 已建置並在 clean Windows 完成 install／firmware compile；Ubuntu 為 editor-only；套件未簽署 | C:\my\build\github\edt-hmi-studio\docs\desktop-installer-packaging.md:13-37 | B |
| D-05 | Clean VM 有 build／serial roundtrip 記錄 | C:\my\build\github\edt-hmi-studio\docs\desktop-installer-packaging.md:39-54 | B |
| D-06 | Emulator toolchain 未隨 installer 打包；signing、Linux deploy、installed-app flash end-to-end 仍有缺口 | C:\my\build\github\edt-hmi-studio\docs\desktop-installer-packaging.md:81-100 | B |
| D-07 | STM32CubeProgrammer／ST-LINK driver 再散布與 GPL source-offer 有待法務處理 | C:\my\build\github\edt-hmi-studio\docs\desktop-installer-packaging.md:102-159 | B；內部風險，不做外部承諾 |

## 9. AI assistant

| Claim ID | 可使用的事實 | 來源 | 等級／備註 |
|---|---|---|---|
| A-01 | a7cc2a8 具有 OpenRouter／Ollama provider 選擇；fresh install 預設 OpenRouter | docs\ai-assistant.md:686-741；server\assistant\keyStore.ts:13-54 | A/B |
| A-02 | OpenRouter key 存本機 AppData，不進 page／project／log；按 Send 後 prompt、attachments、project snapshot 送往 OpenRouter | docs\ai-assistant.md:518-529；server\assistant\keyStore.ts | A/B |
| A-03 | Ollama 使用設定的 host，預設 `http://127.0.0.1:11434`；也允許其他有效 http(s) host | server\assistant\ollama.ts:24,42-68 | A；只有本機／loopback host 才可說資料留在本機 |
| A-04 | OpenRouter 與 Ollama 共用 OpenAI-shaped request；Ollama 不送真實 key | server\assistant\ollama.ts:164-200；docs\ai-assistant.md:693-724 | A/B |
| A-05 | Ollama model gate 需要 vision＋tools capability | server\assistant\ollama.ts:91-94；docs\ai-assistant.md:699-704 | A/B；capability 不等於 quality |
| A-06 | AI UI 由使用者送出才呼叫；Page loop 帶 project snapshot 與 taxonomy | docs\ai-assistant.md:211-253 | B |
| A-07 | Tool surface 有 17 個驗證工具，不含 project／resource delete、Deploy、ports、Preferences | docs\ai-assistant.md:255-393,651-659 | B |
| A-08 | Tool validation 與 one-run undo；history 移動後拒絕整次 undo | docs\ai-assistant.md:280-322,666-669 | B |
| A-09 | 支援 whole-project、languages、fonts、SVG-derived PNG；獨立的 Ollama image generation 尚未建置 | docs\ai-assistant.md:324-393,743-758 | B；不宣稱可靠照片生成 |
| A-10 | Attached reference image 不會自動匯入 project asset | docs\ai-assistant.md:395-402 | B |
| A-11 | 無 hardware／Deploy／autonomous 操作，最終成果需工程師確認 | docs\ai-assistant.md:518-575 | B |
| A-12 | Ollama 0.33.2 的一個 gated model 完成 streaming、兩次 tool calls 與 Undo，但曾誤解一行需求 | docs\ai-assistant.md:760-772 | B；是 plumbing 證據，不是品質保證 |
| A-13 | OpenRouter 有 real-key 連線驗證；R2 one-shot quality benchmark 與 packaged desktop leg 仍 open | docs\ai-assistant.md:679-690 | B；不可再說「從未使用真 key」，也不可稱已完成整體 benchmark |

## 10. EVK Coffee Bar 主 Demo

來源檔：C:\my\build\github\edt-hmi-studio\examples\evk043027b-coffee-bar.json

| Claim ID | 已核對資料 | 來源位置／方法 | 等級 |
|---|---|---|---|
| E-01 | Sample 名稱與主專案資料 | examples\evk043027b-coffee-bar.json:3 | A |
| E-02 | 5 screens：Home、Drinks、Pay、Brewing、Settings | screens 由 examples\evk043027b-coffee-bar.json:11 開始；Home :14；Drinks :971；Pay :1653；其餘接續於同一 tracked array | A；解析 JSON 計數 |
| E-03 | 51 top-level placements | 各 screen.components 第一層陣列長度總和 | A；解析 JSON 計數 |
| E-04 | 106 stored widget nodes | 遞迴計算 screen widget children | A；解析 JSON 計數 |
| E-05 | 200 generated／rendered widgets | 依 reusable container instance 展開後遞迴計數 | A；需與 E-03、E-04 分開解釋 |
| E-06 | 3 reusable container definitions：NavRail、DrinkCard、StatRow | examples\evk043027b-coffee-bar.json 約 :4028 起的 container definitions | A |
| E-07 | 3 languages：en、zh-TW、ja | examples\evk043027b-coffee-bar.json:5096-5107 | A |
| E-08 | 41 text resources | examples\evk043027b-coffee-bar.json:5110 起；解析 object keys | A |
| E-09 | 22 animations | examples\evk043027b-coffee-bar.json:5523 起；解析 array | A |
| E-10 | 1 logic graph：pay countdown | examples\evk043027b-coffee-bar.json:6055 起 | A |
| E-11 | Board profile 為 EVK043027B | examples\evk043027b-coffee-bar.json:6454 | A |
| E-12 | 1 Modbus RTU link、1 device | examples\evk043027b-coffee-bar.json:6455；device :6472 | A |
| E-13 | 23 tags | examples\evk043027b-coffee-bar.json:6488-6777；解析 array | A |
| E-14 | 16 typographies | 解析 tracked JSON 的 typographies | A |
| E-15 | 0 images、0 font payloads、0 video／media payloads | 解析 tracked JSON 的 asset／media collections | A；bundled fonts 不算 JSON payload |
| E-16 | 展開後各 screen widgets：Home 39、Drinks 62、Pay 29、Brewing 32、Settings 38 | 依 reusable instance 展開後分 screen 遞迴計數；合計 200 | A |

### 互動路徑證據

Tracked JSON 內已核對：

- NavRail：Home／Drinks／Pay／Settings navigation。
- Home：hero 與 button 可到 Pay。
- Drinks：Hot／Iced／Milk 設定 segmented pill x；六張 drink cards 可到 Pay。
- Pay：Cancel 到 Drinks；Paid 到 Brewing。
- Brewing：Back／Stop 到 Home。
- Settings：language button 以 __next__ 循環。

### Binding 與 tag 例子

- Home 有 4 個 bindings、Pay 4、Brewing 2、Settings 7。
- Drinks 的 reusable card prices 經 slots 綁定。
- Tags 包含 BoilerTemp、GroupPressure、FlowRate、WaterLevel、BeanLevel、BrewProgress、六個 price tags、OrderTotal、Strength、TargetTemp、CupSize、OrderStart、AutoRinse、CupWarmer、EcoMode、DescaleDue、OrderDrink、PayUrl。

## 10B. Shizuku washing-machine Demo

來源檔：`examples/f746-washing-machine.json`、`examples/evk043027b-washing-machine.json`；說明與測試：`docs/f746-washing-machine.md`、`src/demos/__tests__/washingMachine.test.ts`。

| Claim ID | 已核對資料 | 來源位置／方法 | 等級 |
|---|---|---|---|
| S-01 | 兩個 tracked gallery projects；F746 與 EDT EVK043027B，皆 480×272 landscape | docs\f746-washing-machine.md:7-27；src\demos\index.ts:60-73 | A/B |
| S-02 | 8 screens；日文優先，加 English、zh-TW；102 texts；43 Modbus RTU tags、1 device；17 logic graphs | docs\f746-washing-machine.md:27-45,114-145；兩個 JSON 解析計數 | A |
| S-03 | F746：334 widgets、75 animations、695 nodes、657 connections、27 timers | washingMachine.test.ts:71-100,126-170；F746 JSON 解析 | A |
| S-04 | EVK：325 widgets、72 animations、693 nodes、655 connections、27 timers | washingMachine.test.ts:71-100,126-170；EVK JSON 解析 | A |
| S-05 | 兩版完成 firmware build；只有 F746 跑過 Emulator touch wake 與 `Phase = 8` 完成畫面；兩版未 flash 實機 | docs\f746-washing-machine.md:7-19,184-218 | B；不可推論硬體性能、記憶體、觸控或 bus 已驗證 |
| S-06 | Set Property wired-value 修正讓每版精簡 30 nodes、29 connections、1 timer | a7cc2a8 與父版本 JSON 差分；docs\f746-washing-machine.md:151-171；CHANGELOG.md:25 | A/B；不要使用 taxonomy 中衝突的 36／35 概括數字 |

重要衝突：來源 CHANGELOG／說明曾說 layouts、texts、tags、logic byte-for-byte 相同，但 JSON 明確有不同 node／connection 數，測試也沒有比較完整 layout 或 logicGraphs。對外只說「同一產品概念、文字／tag map／typography 與 17-graph 架構，另有板卡專屬 UI／logic 差異」。

## 11. 替代 Demo 範例

| 範例 | 已核對內容 | 正確用途 | 不可推論 |
|---|---|---|---|
| examples\h747-coffee-machine.json | 4 screens、46 top-level、162 stored／expanded widgets、3 languages、13 tags、28 animations、55 texts、0 media payloads、Modbus RTU、無 logic graph | 800×480 H747 UI 與 polished visual | 不能因 profile 有 Video 就稱此範例示範影片；不能稱有 logic graph 或 CAN |
| examples\h747-serial-commands-responder.json | 1 screen、14 widgets、1 language、4 tags、1 logic graph、UART command、panel-answers | Host／controller command Q&A | 不是完整產品視覺 Demo，也不代表所有 serial protocols |
| examples\f746-modbus-hmi.json | Legacy pages shape；1 Main page、3 widgets、3 tags、Modbus RTU、無 logic／animations | 最小 F746 binding 與 migration proof | 不代表 polished、多語、Video 或複雜 logic |

F746 主要位置：examples\f746-modbus-hmi.json:10 起為 pages，約 :15-100 為 widgets，board :125，links :126，devices :141，tags :156。

## 12. 商務與行銷資料的使用限制

| Claim ID | 文件內容 | 來源 | 處理 |
|---|---|---|---|
| M-01 | EDT 市場／客戶背景與區域比例 | C:\my\build\github\edt-hmi-studio\docs\investor-conference-2026-09\research.md:5-17 | C；區域比例與外部事實需在正式使用前重新核准 |
| M-02 | 市場規模估計來自 2026-08-31 的外部研究 | research.md:19-51 | C；不可當成永久最新數字 |
| M-03 | Studio 不直接出售、隨 compatible custom EDT LCM、AI token 方案、80% complete、December 2026 launch、future licensing 等 | research.md:81-93 | C；文件自己註明尚未 finance-approved，不得對外承諾 |
| M-04 | 行銷 deck 使用 Build the screen. No code. | C:\my\build\github\edt-hmi-studio\docs\marketing\generator\make_pptx.js:37-45 | C；必須補「對應板卡與標準功能範圍」 |
| M-05 | 行銷 deck 使用 Design／Logic／Protocol／Preview／Deploy 五段 | make_pptx.js:81-85 | C；與 A/B 證據一致時可作敘事架構 |
| M-06 | 行銷 deck 寫 November 2026 與 no code anywhere | make_pptx.js:143；make_pptx.js:147 | C；與 M-03 的 December 衝突，且 no-code 過度絕對，不使用 |

安全結論：上市月份、價格、授權、通路條件、營收與 roadmap 百分比，在取得最新正式核准 briefing 前一律回答「仍在最終調整，確定後正式通知」。

## 13. 矛盾與陳舊資訊登錄

| 編號 | 衝突 | 本教材採用 |
|---|---|---|
| R-01 | README 說 18 widgets；componentDefinitions 有 25 | 25，並附 a7cc2a8 範圍 |
| R-02 | README badge 為 Production Ready；內部研究寫 80% complete／未上市 | 不宣稱 GA 或 production-ready；等待正式 release brief |
| R-03 | 行銷寫 November 2026；內部研究寫 December 2026 | 不說月份 |
| R-04 | 行銷寫 no code anywhere；實作有 Custom C 且新板卡需 port | 改為「對應板卡與標準功能範圍內，不必手寫 application code」 |
| R-05 | Protocol catalogue 將 CAN 標為 implemented；runtime 與文件明載只有 loopback／無 tag-to-frame／widget path | 對外說 connection-layer evaluation，不稱產品資料綁定 |
| R-06 | 主要 Emulator／firmware 目標 LVGL 9.5；預建 Simulator 為 9.2 | 分別說明，不混稱 |
| R-07 | Palette 有 Video；F746 與 EVK profiles 不支援，H747 也只有特定 MJPEG AVI 路徑 | 只在 H747 限定條件下說明 |
| R-08 | Installer 目前可能含 proprietary STM32 工具；文件又標示再散布待法務確認 | 不向客戶保證 bundle／授權，交由法務與正式 release 決定 |

## 14. 更新教材時的重驗清單

1. 記錄 git rev-parse HEAD、git describe、branch 與 git status。
2. 以 git ls-files 確認每個 Demo、文件與測試是否已納入 tracked HEAD。
3. 重算 componentDefinitions 的實際 palette entries，不沿用 README 數字。
4. 重讀 hmi.ts 的 protocol catalogue、三個 board profiles 與 capability helpers。
5. 重讀 CAN runtime header 與 binding generator，確認 tags 是否真的已進 frames。
6. 重讀 preview-ladder.md 與 lvgl-version.md，核對四層能力及 LVGL 版本。
7. 重讀 ai-assistant.md 的 provider、privacy、quality 與 open items；分別說明 OpenRouter、設定的 Ollama host、capability gate 與整體 benchmark。
8. 解析 EVK Coffee Bar JSON，重算 screens、三種 widget counts、languages、tags、links、devices、logic、animations、texts、typographies、media。
9. 解析兩個 Shizuku JSON，分別重算 widgets、animations、logic nodes／connections／timers，並核對 build、Emulator 與 hardware 三層證據。
10. 在乾淨環境預演 Demo；分別記錄 Prototype、Simulator、Emulator、Build、Flash 的結果。
11. 上市、價格、授權、通路、法務與市場數字一律取得有日期與核准人的最新版。

## 15. 本套教材使用關係

- 00_PRODUCT_TRUTH.md：從本證據表抽取對外可說與不可說的邊界。
- 01_MESSAGE_HOUSE.md：把證據組成高階主管能理解的價值主張。
- 07_LIVE_DEMO_SCRIPT.md：以 tracked Coffee Bar 展示能由當天環境證明的能力。
- 07B_SHIZUKU_WASHER_DEMO_SCRIPT.md：以 pinned Shizuku 版本展示日本洗衣機情境，並保留 build／Emulator／實機界線。
- 若 Demo 畫面與本文件不一致，先停止使用數字，重新建立快照與計數，再更新教材。
