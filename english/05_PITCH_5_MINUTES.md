# 5 分鐘高階主管版產品介紹

這個版本不靠功能清單，而是依「問題 → 解法 → 證據 → 商業價值 → 合作下一步」推進。

## 逐字稿

### 0:00–0:35 — 開場

> Good morning, everyone. Thank you for the opportunity to speak with you. I would like to introduce EDT HMI Studio and, more importantly, explain the business problem it is designed to solve.
>
> Our starting question was simple: why should an embedded touch-interface project require several disconnected tools and several rounds of engineering handoff before a customer can see a working result?

### 0:35–1:20 — 痛點

> In a typical project, the screen layout, application behavior, device protocol, generated code, firmware build, and hardware test are separate activities. A change in one area can create rework in another. A screen may look correct but fail when the generated code is compiled. A device value may be defined differently in the UI and in the host firmware. These issues are usually discovered late, when time is already limited.
>
> This is not only an engineering cost. It also affects sales evaluation, distributor support, customer confidence, and time to market.

### 1:20–2:15 — 產品解法

> EDT HMI Studio brings the workflow into one project. The user designs multiple screens with visual components, adds events and animations, builds behavior with node-based logic, and connects screen properties to named device values.
>
> Those named values are important. The same tag can be used by a widget, a logic graph, the communication runtime, the Emulator, and the host-interface export. The user does not have to retype the same definition in several places.
>
> For supported workflows, the user can move from screen design to generated embedded firmware without writing the application from scratch in C.

### 2:15–3:15 — 驗證與差異化

> The next step is not just a visual preview. The Emulator compiles the generated C with real LVGL. It runs the event handlers, logic graphs, and the HMI communication runtime. A simulated device or controller appears next to the screen, so the user can change a device value and see the HMI respond, or touch the HMI and see the write on the other side.
>
> This matters because it tests the product's actual output. It can reveal a code-generation problem, a missing binding, a protocol mismatch, or a missing font glyph before the team reaches the hardware bench.
>
> When the project is ready, the same workflow builds the target firmware and flashes supported hardware. The tool also checks board-specific limits, such as display orientation, protocol implementation, and video capability, before the build proceeds.

### 3:15–4:05 — 目前證據與範圍

> In the current source snapshot, the design palette contains 25 components. The product includes three board profiles: the STM32F746G Discovery Kit, the STM32H747I Discovery Kit, and the EDT EVK043027B Evaluation Kit.
>
> The implemented serial protocol paths include Modbus RTU and configurable serial commands. For supported roles, the panel can ask a device for values, or a host can drive the panel. The project also supports multiple screens, visual logic, animations, multilingual text, CJK fonts, images, and generated host-interface information for the implemented Modbus responder path.
>
> We are careful about scope. CAN, Ethernet, and some additional connector paths are roadmap or engineering work, not features we present as production-ready today.

### 4:05–4:45 — 對高階主管的商業意義

> For a product team, the value is fewer handoffs and earlier validation. For a display manufacturer, it can make the evaluation kit easier to turn into a customer project. For a distributor or subsidiary, it creates a clearer demonstration and a more repeatable support process. For the end customer, it creates a shorter path from an interface idea to working hardware.
>
> We do not need to prove every possible use case at once. The fastest way to create value is to select one target board, one device protocol, and one customer application, and validate the complete workflow end to end.

### 4:45–5:00 — 收尾

> That is EDT HMI Studio: design, logic, communication, validation, and deployment in one embedded HMI workflow. I would be happy to show the product and then discuss where it best fits your market.

## 對通路商替換段

把 4:05–4:45 換成：

> For a channel partner, the opportunity is not only software revenue. A visual, repeatable workflow can help your team demonstrate supported display platforms, qualify customer requirements earlier, and reduce repeated engineering explanations. The partner model, pricing, training, and support responsibilities must be agreed commercially, but the product gives us a concrete platform for a joint customer-development process.

## 對子公司總經理替換段

> For a regional subsidiary, the key question is local repeatability. Can the local team demonstrate the product, identify a qualified use case, collect the right board and protocol information, and move the opportunity to a validated proof of concept? EDT HMI Studio is designed to make that process more structured. We should define the commercial ownership and support path separately, with approved terms.

## 高階版不要做的事

- 不要逐一念 25 個元件。
- 不要解釋 CRC、MBAP、DMA2D 或 linker address，除非被問。
- 不要說「比所有競品好」。
- 不要使用未核准的上市、價格、免費或獨家說法。
- 不要在結尾說 `That's all.`；要提出下一步。

## 過關標準

- 5 分 30 秒內完成。
- 每分鐘約 95–120 字，寧可慢而清楚。
- 能把每段濃縮成一句話。
- 被打斷後能用 `Let me return to the key point.` 接回主線。
- 結尾一定包含 target board、protocol、use case 三個下一步條件。

