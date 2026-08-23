# 六種高階會議角色扮演

練法：請陪練者只問一題，等你回答後才看示範答案。每題最多 30 秒；超過就重來。

## Scenario 1 — 海外子公司總經理

### 情境

對方時間很少，只想知道是否值得投入區域資源。

**GM:** What is the business case for our region?

> The business case is faster customer evaluation and a more repeatable support process for embedded touch projects. We should not assume the whole region at once. I recommend one qualified customer, one supported board, and one serial protocol, then measure the proof-of-concept cycle and support effort.

**GM:** How much revenue can this generate?

> I do not have an approved revenue forecast to present. We first need the price model, target-account count, conversion assumptions, and partner responsibilities. I can help build that forecast from verified inputs rather than guess.

**GM:** What do you need from me?

> One executive sponsor, one regional sales owner, one pre-sales engineer, and approval to qualify a realistic pilot account. We also need a separate commercial decision on pricing and account ownership.

收尾：

> If you agree, we can name the pilot account and owners before we end this meeting.

## Scenario 2 — 全球業務副總

### 情境

對方想要一句全球銷售故事與可複製的 qualification。

**VP:** Give me the sales story in thirty seconds.

使用 [30 秒通路版](03_PITCH_30_SECONDS.md)。

**VP:** How do we qualify an opportunity?

> We need four answers first: the target board, the device protocol, who starts the communication, and what the proof of concept must demonstrate. Then we check the current capability matrix before promising a demo or schedule.

**VP:** What should sales never promise?

> Sales should not promise unsupported boards or protocols, release dates outside the approved statement, security or license terms, custom development dates, or channel exclusivity without written approval.

**VP:** What should be in the CRM?

> Customer entity, project location, target hardware, protocol and role, screen scope, languages, decision makers, proof-of-concept criteria, commercial owner, technical owner, next action, and open product gaps.

## Scenario 3 — 懷疑型通路商總經理

### 情境

他認為軟體會增加支援負擔，只願意在有獨家與高 margin 時投入。

**Distributor GM:** Why should I train my people for an unfinished product?

> You should invest only after we define a bounded launch scope and support model. The reason to evaluate now is to prove whether the workflow can make demos and customer qualification more repeatable in your market. A pilot gives us evidence before either side makes a larger commitment.

**Distributor GM:** I need exclusivity.

> I understand the need to protect your investment. Exclusivity must define territory, term, performance, support capability, and review conditions. I cannot approve it today, but I can document the proposal for the authorized commercial decision.

**Distributor GM:** Who pays for the first customer customization?

> That depends on whether it is product enablement, reusable roadmap work, or customer-specific engineering. We should classify the request, estimate it, and agree on NRE, ownership, and maintenance before work starts.

**Distributor GM:** Then what can we agree today?

> We can agree on the pilot account, qualification criteria, demo owner, technical owner, and the list of commercial decisions that need written approval.

## Scenario 4 — 技術副總／研發主管

### 情境

對方從架構、限制與驗證深挖。

**CTO:** Is the Emulator only a screenshot preview?

> No. It calls the same code generator used by deployment, compiles the generated C with real LVGL, and runs events, logic, fonts, and the HMI runtime. It still cannot replace hardware tests for memory, timing, touch, and physical communication.

**CTO:** What protocols are production-ready?

> The current implemented serial paths are Modbus RTU and configurable line-oriented serial commands. CAN and Ethernet are not current production paths. The exact production matrix should be verified against the release build.

**CTO:** Can I add my own board?

> Yes as an engineering project, not as a simple dropdown entry. We need the display and touch drivers, memory map, build and flash integration, connector capabilities, and validation on the physical board.

**CTO:** How do you handle codegen defects?

> The Emulator catches generated C that does not compile or run correctly before hardware. The repository also includes compile and integration tests. A release process should add target-board regression cases and formal qualification criteria.

反問：

> Which board and protocol would be the most representative technical test for your organization?

## Scenario 5 — 採購與商務壓價

### 情境

對方要你當場報價、折扣、免費 support。

**Procurement:** Give me your best price now.

> I do not want to give you an unofficial number. To quote correctly, I need the license model, quantity or user scope, region, support level, and partner status. I will coordinate an approved quotation after those points are confirmed.

**Procurement:** Your competitor is cheaper.

> Price matters, and we should compare the same scope. Please help me understand whether that offer includes device communication, generated-code emulation, board deployment, updates, and support. Then we can make a fair commercial comparison.

**Procurement:** Include customization and unlimited support.

> Those need separate scope. Product license, custom engineering, and support service have different cost and acceptance rules. Combining them without limits would create an unreliable commitment for both sides.

**Procurement:** I need an answer today.

> I can confirm the required inputs and approval path today. I cannot create binding commercial terms without authorization. Let us agree on the information and a response date now.

## Scenario 6 — Demo 失敗與壓力問答

### 情境

Emulator 沒起來，總經理直接問「產品是不是不穩」。

**GM:** The demo failed. Is the product unstable?

> The live session failed, and that deserves a precise root-cause answer. I will not claim the cause before checking the logs. I can continue with the prepared result, then reproduce the issue in the same environment and send you the cause, fix status, and verification evidence.

**GM:** Why did you not test it before the meeting?

> It was tested in preparation, but the current session still failed. Preparation reduces risk; it does not justify hiding a failure. I take responsibility for the follow-up and will document the exact environment and result.

**GM:** What can you prove right now?

> I can still prove the project structure, design, tags, protocol configuration, generated files, and deployment flow. The running-emulation proof will come from the prepared recording today and a reproduced live result in the follow-up.

**GM:** When will I get the answer?

> I will send the initial root-cause report by tomorrow at 3 p.m., including whether the issue is environment-specific, reproducible, and resolved.

## 每場角色扮演評分

每項 0–2 分，總分 12：

| 項目 | 0 | 1 | 2 |
|---|---|---|---|
| Direct answer | 沒回答 | 回答很晚 | 第一段直接回答 |
| Accuracy | 亂猜／過度承諾 | 有小錯 | 範圍正確 |
| Brevity | 超過 60 秒 | 30–60 秒 | 30 秒內 |
| Delivery | 長時間停住 | 可理解 | 穩定、有停頓 |
| Control | 被問題帶走 | 勉強回主線 | 有 next step / check question |
| Unknowns | 假裝知道 | 只說不知道 | owner + item + date |

連續三次 10 分以上才算過關。

