# 產品訊息屋：你真正要傳達的五件事

## 最安全的一句話

> EDT HMI Studio is a no-code development environment that helps teams design, connect, test, and deploy embedded touch interfaces from one project.

中文：EDT HMI Studio 是一套無程式碼開發環境，讓團隊在同一個專案中完成嵌入式觸控介面的設計、連線、測試與部署。

這句話先背。被臨時要求介紹產品時，只要說對這句就不會失控。

## 產品故事

### 客戶原本的痛點

嵌入式 HMI 專案常被切成數個互相斷裂的工作：UI 設計、事件與邏輯、設備通訊、C 程式碼、韌體建置、硬體測試。設計師、應用工程師與韌體工程師必須來回交接，錯誤往往到上板後才出現。

簡單英文：

> Today, embedded HMI development is often split across several tools and several specialists. Integration problems appear late, usually on the hardware bench.

### 產品怎麼解決

> EDT HMI Studio brings the full workflow together. Users design the screens, connect named values, define logic visually, run the generated application in an emulator, and then build and flash supported hardware.

### 商業結果

不要亂講百分比。使用方向性語言：

> This is designed to shorten development cycles, reduce handoff errors, and make HMI projects easier to evaluate, support, and repeat.

## 三大價值支柱

### 1. Faster creation — 更快做出介面

- 25 個目前可見的 palette components。
- 拖拉、巢狀、多選、對齊、層級、undo/redo。
- 多畫面、事件、五種轉場、動畫。
- Text / language / typography / image / font 資源管理。

一句英文：

> Teams can build a polished multi-screen interface visually, without starting from C code.

### 2. Lower integration risk — 更早發現整合問題

- Emulator 使用真實 LVGL 加上產生的 C。
- 事件、logic graphs、tag runtime 與模擬設備可一起跑。
- Protocol Monitor、link budget、真實 serial test。
- 缺少 tag、硬體能力或 build prerequisite 時明確說明。

一句英文：

> The emulator tests the generated application, not just a picture of the screen, so teams can find integration problems before they reach hardware.

### 3. Hardware-aware delivery — 從設計到支援硬體

- 板卡決定解析度、色深、方向、記憶體與 connector 能力。
- 同一份專案產生 UI、event、logic 與 communication C。
- 可在產品內建置、下載 firmware、透過 SWD flash/reset。
- 不可建置的組合會在 Deploy 前被擋下並說明原因。

一句英文：

> The workflow understands the target board, so unsupported combinations are identified before a team wastes time on a failed build or a bad flash.

## 五步產品結構

這五個詞與現有行銷資料一致，適合所有簡報：

1. **Design** — Build the screens visually.
2. **Logic** — Define behavior with events and graphs.
3. **Connect** — Link screen values to a device protocol.
4. **Validate** — Run the generated application in the Emulator.
5. **Deploy** — Build the firmware and flash supported hardware.

現有簡報使用 `GUI Design / Logic Graph / Protocol / Preview / Deploy`。口說時建議把 `Preview` 說成 `Validate`，因為高階主管更在意它降低什麼風險；畫面標題仍照投影片念。

## 最適合的對象

這是依產品能力做的市場推論，不是 repo 裡的官方 segmentation。正式行銷前要核准。

| 對象 | 他在乎什麼 | 你要講的價值 |
|---|---|---|
| Display module / panel maker | 加速客戶導入、降低 FAEs 重複支援 | Reusable board profiles and a complete evaluation-to-deployment workflow |
| Industrial equipment maker | 專案時程、通訊、維護 | Visual development plus Modbus/serial integration |
| Embedded product team | 韌體人力、codegen 品質、硬體風險 | Generated C tested in a real-LVGL emulator |
| Distributor / subsidiary | 容易 Demo、容易教育、售前支援成本 | A visual story and repeatable demo projects |
| System integrator | 多機種、多語、快速客製 | Project assets, tags, multilingual text, reusable workflows |

## 差異化說法

不要點名攻擊競品，也不要講「唯一」或「第一」；沒有完整競品研究與法務審核。

安全版：

> Many GUI tools focus mainly on screen layout and code export. EDT HMI Studio is designed around the larger workflow: visual logic, device communication, generated-code emulation, and deployment to supported hardware.

更高階版：

> The differentiation is not one widget or one protocol. It is the continuity of the workflow. The same named value connects the screen, the logic, the protocol, the emulator, and the host interface.

## 一個強而安全的 Proof Point

> In the current H747 demo path, a user can change a simulated device value and see the generated HMI read it, or touch the HMI and see the write reach the simulated device. The same project can then be built for hardware.

這比列二十個功能更有說服力。

## 不要讓訊息歪掉

| 不要把產品講成 | 應該講成 |
|---|---|
| 另一套畫 UI 的軟體 | 一條完整的 embedded HMI workflow |
| 可以取代所有韌體工程師 | 讓更多工作不必從手寫 C 開始，工程師仍處理特殊整合 |
| 支援任何板卡／任何協定 | 支援明確 board profiles 與 protocol paths，並可擴充 |
| 一個漂亮 Preview | 會編譯並執行 generated C 的 Emulator |
| 功能很多 | 交接少、錯誤早發現、導入可重複 |

