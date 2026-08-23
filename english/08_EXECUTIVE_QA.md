# 總經理／副總／高階經理人問答

規則：先說第一段。只有對方追問才說第二段。`CONFIRM` 題不可自行填答案。

## 產品與市場

### 1. What exactly is EDT HMI Studio?

> It is a visual, no-code development environment for embedded touch interfaces. It brings screen design, logic, device communication, generated-code emulation, and deployment into one project.

追問時：

> The output is an LVGL-based embedded application for supported target boards, not only a desktop mock-up.

### 2. What problem does it solve?

> It reduces the fragmentation of embedded HMI development. Instead of moving between disconnected design, protocol, code, and hardware workflows, the team works from one project and validates the result earlier.

### 3. Who is the ideal customer?

> The best fit is a team building an embedded product or industrial machine with a touch display, especially when it needs repeatable screen development and serial device integration.

> Display manufacturers, system integrators, regional distributors, and application-engineering teams can also use it to make evaluation and customer support more repeatable.

提醒：這是能力推導的 segmentation，正式市場定義需公司核准。

### 4. Why would a customer pay for this?

> The value is engineering time and project risk. The product is designed to reduce manual handoffs, find integration issues before hardware, and make the path from evaluation to deployment easier to repeat.

不要補任何百分比，除非已有客戶數據。

### 5. What is the ROI?

> We have a clear ROI hypothesis, but we do not yet have an approved universal percentage. The measurable areas are time to first working screen, number of engineering handoffs, time spent on protocol debugging, and time from change request to validated firmware.

> For a pilot, we should measure those four items against the customer's current workflow.

### 6. What makes it different from other GUI tools?

> Many GUI tools focus mainly on layout and code export. Our differentiation is the continuity of the larger workflow: visual logic, named device values, protocol-aware testing, generated-code emulation, and deployment to supported hardware.

### 7. Is this just another LVGL editor?

> No. LVGL is the graphics engine, but the product value is the workflow around it. The same project connects screens, behavior, tags, communication, emulation, and firmware deployment.

### 8. Is it really no-code?

> For supported workflows, users can go from screen design to running firmware without writing the application from scratch in C. Advanced engineers can still use custom C in Factory Dev Mode when a requirement goes beyond the visual model.

### 9. Does this replace embedded engineers?

> No. It moves common HMI work into a visual, repeatable workflow. Embedded engineers still own special hardware, unusual protocols, performance limits, and product-level validation. Their time is used on the work that actually requires them.

### 10. Why is EDT in a good position to build this?

> The product connects display hardware knowledge with the software workflow customers need around that hardware. The strategic advantage is the ability to make a display platform easier to evaluate, integrate, and support.

提醒：若要談公司歷史、全球據點、客戶基礎或出貨量，必須使用另外核准的公司資料。

## 產品成熟度與風險

### 11. Is the product ready now?

> The software is in active pre-launch development. Core workflows are implemented, but the public release status, supported-platform matrix, and commercial terms must follow the approved launch statement.

不要同時說 `Production Ready` 與 `Coming Soon`。

### 12. When will it launch? `[CONFIRM]`

若公司已核准 November 2026：

> Our public launch is currently planned for November 2026. We are finalizing the release scope and commercial details now.

若未核准：

> The launch timing is being finalized. I do not want to give you an unofficial date, so I will confirm the approved schedule after the meeting.

### 13. Which operating systems will you support? `[QUALIFY]`

> The product is being prepared for Windows, macOS, and Linux. We will publish the final production-support levels with the release; the current technical notes still describe the macOS runtime as experimental upstream.

### 14. What is the biggest product risk?

> The biggest risk is overextending the hardware and protocol scope before the core workflow is repeatable. Our answer is explicit board profiles, visible capability limits, and staged validation of one connection path at a time.

### 15. What are the current limitations?

> The current product has explicit supported boards and implemented serial paths. CAN, Ethernet, some connector stacks, and multi-connection projects are not production paths today. Hardware-dependent features, such as video, also vary by board.

### 16. How do you avoid disappointing customers?

> We define the target board, protocol, role, and use case before the proof of concept. The product also shows unsupported combinations before build instead of failing silently at the end.

### 17. How reliable is the generated result?

> The generated application is compiled and exercised in the Emulator, and the repository includes automated compile tests and hardware-verification records for key H747 communication paths. Final product reliability still requires validation on the customer's exact hardware and configuration.

### 18. Do you have certifications or production customer references? `[CONFIRM]`

> I do not have an approved reference or certification claim to share today. I will confirm what we are authorized to disclose and follow up in writing.

## 商業模式

### 19. What is the pricing model? `[CONFIRM]`

> The commercial model is being finalized. I do not want to give you an unofficial price. We will provide the approved licensing and channel terms for the relevant region and customer type.

### 20. Is it free, subscription-based, or perpetual? `[CONFIRM]`

> A free trial is mentioned in the current launch material, but the duration, limits, and production license are not yet approved in the source package. I will confirm the official model.

### 21. How will this generate revenue? `[CONFIRM]`

> There are several possible models, including software licensing, hardware enablement, and engineering services, but I should not select one on behalf of the company. The approved business model needs to define product revenue, channel economics, and custom-board work separately.

### 22. What is the market size? `[CONFIRM]`

> We have not presented a validated market-size number in this product package. I would rather define the target segment and available customer base first, then use an approved market analysis instead of guessing.

### 23. Will you offer custom board support?

> Technically, the architecture is based on explicit board profiles and firmware integrations, so additional boards are possible. Commercial availability, NRE, schedule, ownership, and maintenance must be scoped and approved case by case.

### 24. What support will customers receive? `[CONFIRM]`

> The product includes diagnostics such as the Work pane, build logs, protocol Monitor, and board-aware checks. The human support model, SLA, escalation path, and regional responsibilities still need an approved commercial answer.

### 25. Who owns the generated code? `[CONFIRM]`

> The tool generates and exports C source, but legal ownership and license rights are commercial and legal questions. The README's license statement is not enough for me to promise terms, so I will provide the approved license document.

## 採用與執行

### 26. How long does implementation take?

> It depends on the board and protocol. A supported demo path can be evaluated quickly, while a new board or protocol is an engineering project. We should separate software evaluation, proof of concept, and production qualification instead of giving one date for all three.

### 27. What does a customer need to start?

> We need one target board, the display resolution and orientation, one device protocol specification, a small screen flow, and clear proof-of-concept acceptance criteria. For hardware deployment, the local STM32 toolchain and an ST-LINK connection are also required on the current paths.

### 28. How much training is required?

> A designer can learn the main five-step workflow through a guided example. Protocol setup and hardware deployment require more technical knowledge. We should package role-based training for designers, application engineers, and support teams rather than teach everyone the full engineering stack.

### 29. How do we run a pilot?

> Choose one real but bounded use case. Fix one supported board and one protocol, define three to five screens and a small set of tags, agree on acceptance tests, and measure the time from project start to validated firmware.

### 30. What would make a pilot successful?

> A successful pilot should prove five things: the screen can be built visually, device values are connected correctly, the generated application runs in the Emulator, the firmware builds, and the supported target passes the agreed hardware test.

### 31. Can this scale across a product family?

> The project model is designed around reusable boards, screens, resources, tags, and generated code. However, product-family reuse, template governance, and version-management policies should be tested in a pilot before we claim organization-wide scale.

### 32. What is the best next step?

> Select one regional customer or internal reference project with a supported board and serial protocol. We can then validate the workflow, document the gaps, and use real evidence to decide the commercial rollout.

## 高階問答的結尾句

每個答案都可用其中一句收尾：

- `Does that address the business concern behind your question?`
- `Which part matters more for your market: faster evaluation or lower support effort?`
- `We can make that an explicit item in the proof-of-concept plan.`
- `I will put the confirmed answer in writing after the meeting.`

