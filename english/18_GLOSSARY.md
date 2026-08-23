# 產品與商務詞彙表

## 產品核心

| English | 中文 | 最簡單的英文解釋 |
|---|---|---|
| embedded system | 嵌入式系統 | A computer built into a product. |
| HMI | 人機介面 | The screen and controls between a person and a machine. |
| touchscreen | 觸控螢幕 | A display the user controls by touch. |
| visual editor | 視覺化編輯器 | A tool for building by arranging things on screen. |
| no-code | 無程式碼 | A workflow that does not start from writing application code. |
| component / widget | 元件 | A button, label, slider, chart, or other UI element. |
| canvas | 畫布 | The area where the screen is designed. |
| screen | 畫面 | One page of the HMI application. |
| hierarchy | 階層 | The parent-and-child structure of components. |
| property | 屬性 | A setting such as text, size, color, or value. |
| event | 事件 | Something that happens, such as a click or value change. |
| action | 動作 | What the application does after an event. |
| animation | 動畫 | A timed change in position, size, or appearance. |
| transition | 轉場 | The visual change from one screen to another. |
| logic graph | 邏輯圖 | Connected nodes that describe application behavior. |
| code generation | 程式碼生成 | Creating source code from the visual project. |
| generated C | 產生的 C 程式碼 | C source created by the tool. |
| firmware | 韌體 | Software that runs on the target hardware. |
| build | 建置 | Compile and link the project into a firmware image. |
| flash | 燒錄 | Write the firmware image to the board. |
| deploy | 部署 | Prepare and install the application on supported hardware. |

## 驗證與除錯

| English | 中文 | 最簡單的英文解釋 |
|---|---|---|
| Prototype | 原型預覽 | An instant visual approximation made by the editor. |
| Simulator | 模擬器 | Real LVGL rendering without the generated application code. |
| Emulator | 仿真器 | Generated C running with real LVGL on the computer. |
| validation | 驗證 | Checking that the result meets the requirement. |
| integration | 整合 | Making several parts work together. |
| runtime | 執行期系統 | The software operating while the application runs. |
| log | 紀錄 | Text that explains what a process did. |
| Monitor | 通訊監看 | A view of device exchanges and their meaning. |
| proof of concept / POC | 概念驗證 | A small project that proves a defined use case. |
| acceptance criteria | 驗收條件 | The tests that decide whether the POC succeeded. |
| root cause | 根本原因 | The real reason a problem happened. |
| reproduce | 重現 | Make the same problem happen again. |
| workaround | 暫時替代方案 | A safe way to continue without the full fix. |

## 通訊

| English | 中文 | 最簡單的英文解釋 |
|---|---|---|
| protocol | 協定 | The rules and meaning of communication. |
| connector / plug | 接頭／插口 | Where the cable connects. |
| serial communication | 串列通訊 | Bytes sent in sequence over a connection. |
| Modbus RTU | Modbus RTU 協定 | A common industrial register protocol over a serial link. |
| serial command | 串列命令 | A text command such as GET or SET. |
| tag | 標籤／命名數值 | A named value shared by UI, logic, and communication. |
| address | 位址 | Where a value is found on a device. |
| register | 暫存器 | A Modbus storage location. |
| coil | 線圈位元 | A one-bit Modbus value. |
| initiator / client | 發起端／用戶端 | The side that starts a request. |
| responder / server | 回應端／伺服端 | The side that answers a request. |
| polling | 輪詢 | Asking for a value repeatedly. |
| baud rate | 鮑率 | The serial symbol rate used for timing. |
| timeout | 逾時 | How long to wait before treating a reply as missing. |
| retry | 重試 | Try an exchange again after a failure. |
| scale | 比例 | Multiply a raw value to get an engineering value. |
| offset | 偏移 | Add a fixed number after scaling. |
| link budget | 連線頻寬預算 | Whether requested exchanges fit on the wire. |
| host interface | 主機端介面文件 | The map or commands the controller developer uses. |
| CAN | 控制器區域網路 | A frame-based industrial and vehicle communication bus. |
| Ethernet | 乙太網路 | A packet network commonly used with TCP/IP. |

## 硬體與圖形

| English | 中文 | 最簡單的英文解釋 |
|---|---|---|
| target board | 目標板卡 | The hardware that will run the firmware. |
| board profile | 板卡設定檔 | The product's definition of one supported board. |
| MCU | 微控制器 | The main processor on the embedded board. |
| resolution | 解析度 | The number of pixels, such as 800 by 480. |
| color depth | 色深 | How many bits are used to store one pixel. |
| orientation | 畫面方向 | Landscape or portrait. |
| RAM | 隨機存取記憶體 | Working memory used while the product runs. |
| Flash | 快閃記憶體 | Non-volatile memory holding firmware and assets. |
| external flash | 外部快閃記憶體 | A separate memory chip for large assets. |
| font glyph | 字形 | The image used to draw one character. |
| CJK | 中日韓文字 | Chinese, Japanese, and Korean scripts. |
| hardware codec | 硬體編解碼器 | A peripheral that decodes media without the CPU doing all the work. |
| ST-LINK | ST 燒錄／除錯器 | A tool used to program and debug STM32 boards. |

## 商務與通路

| English | 中文 | 最簡單的英文解釋 |
|---|---|---|
| subsidiary | 子公司 | A company controlled by a parent company. |
| distributor | 通路商／經銷商 | A partner that sells and supports products in a market. |
| channel partner | 通路合作夥伴 | A company that helps bring a product to customers. |
| end customer | 最終客戶 | The organization that uses the product. |
| target segment | 目標市場區隔 | The customer group the product focuses on. |
| value proposition | 價值主張 | Why the customer should care and buy. |
| time to market | 上市時間 | How long it takes to launch a product. |
| ROI | 投資報酬 | The value received compared with the cost. |
| pricing model | 定價模式 | How the product is priced. |
| subscription | 訂閱制 | Payment for continued use over time. |
| perpetual license | 永久授權 | A license to use a version without an end date. |
| free trial | 免費試用 | Limited use before purchase. |
| margin | 毛利／通路利潤 | The difference between selling cost and selling price. |
| discount | 折扣 | A reduction from the list price. |
| exclusivity | 獨家權 | The right to be the only authorized partner in a scope. |
| territory | 區域 | The geographic market covered by an agreement. |
| deal registration | 商機報備 | A process for recording and protecting a partner opportunity. |
| MOQ | 最低訂購量 | The minimum quantity that can be ordered. |
| NRE | 一次性工程費 | A one-time fee for custom engineering. |
| SLA | 服務水準協議 | Written response and service commitments. |
| escalation | 升級處理 | Moving an issue to a higher support level. |
| roadmap | 產品路線圖 | Planned future product work. |
| GA | 正式上市 | General Availability for customers. |
| qualification | 資格確認 | Checking whether an opportunity fits the product. |
| quotation | 報價 | A formal price offer. |
| commercial terms | 商務條款 | Price, license, payment, territory, and related rules. |

