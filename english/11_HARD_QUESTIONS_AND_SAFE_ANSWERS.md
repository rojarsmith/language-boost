# 尖銳問題、未知答案與救命句

## 一個專業的「我不知道」有四步

1. 承認問題重要。
2. 說明你不會提供未核准答案。
3. 指定由誰確認、確認什麼。
4. 給一個明確回覆日期。

> That is an important point. I do not want to give you an unofficial answer. I will confirm the **pricing and license scope** with **our product and commercial teams** and send you a written answer by **Tuesday**.

不能只說 `I don't know.`；也不能說 `Maybe` 然後亂猜。

## 十五個尖銳問題

### 1. “No-code” is just marketing. Where is the hidden code?

> For supported workflows, the user does not start by writing the application in C. The product generates the code and tests it in the Emulator. We also keep an advanced Factory Dev Mode because special hardware and custom behavior sometimes require engineering. We define the boundary openly rather than pretending every possible requirement is no-code.

### 2. Why should we trust generated code?

> Trust should come from verification, not from the word “generated.” The Emulator compiles and runs the generated application with real LVGL, and the deployment path compiles it again for the target MCU. The final proof is still the agreed test on the customer's hardware.

### 3. This looks unfinished. Why are you showing it now?

> We are showing it to validate the product and partner fit before the public launch, not to pretend every roadmap item is complete. The core workflow can be demonstrated today, and the limitations are explicit. Early feedback is useful only when the scope is honest.

### 4. Your README says Production Ready, but the deck says Coming Soon. Which is true?

> Those two source statements need one approved external interpretation. My current product-level description is active pre-launch development with implemented core workflows. I will not use a release-status claim until product management confirms the official wording.

### 5. You say MIT, but where is the license?

> The README contains an MIT statement, but the repository snapshot does not contain the referenced root license file. I will not treat that as a complete legal grant. We need the approved product license and third-party notices before commercial release.

### 6. Why not use TouchGFX, SquareLine Studio, or another existing tool?

> The right comparison depends on the customer's target. Our intended differentiation is the continuous workflow across visual design, logic, device tags, protocol testing, generated-code emulation, and deployment to supported hardware. We should compare an agreed use case and acceptance test rather than trade broad feature claims.

不要說競品缺什麼，除非有更新過且可引用的競品研究。

### 7. You do not support CAN or Ethernet. How can this be an industrial product?

> The current release focus is the implemented serial path, including Modbus RTU and configurable serial commands. CAN and Ethernet are important industrial paths, but they are not production claims today. We prefer a verified narrow scope to an unverified protocol list. Which protocol and role does your first target customer actually require?

### 8. Why is macOS listed if it is experimental?

> The product is being prepared across three desktop platforms, while the current technical note still marks the upstream macOS runtime as experimental. The final release matrix must distinguish build availability from production support. We will publish that distinction clearly.

### 9. What happens if your company stops supporting the tool?

> That is a valid continuity question. The generated-source export, project format, license rights, release maintenance, and support lifecycle all need to be covered by the final commercial policy. I will provide the approved answer rather than infer it from the current repository.

### 10. Where is your customer proof?

> The current package provides engineering examples, tests, and bench-verification records, but I do not have an approved production-customer reference to present. A bounded joint pilot is the right way to create evidence for this market without making an unsupported claim.

### 11. How much money will this save us?

> I cannot responsibly give one percentage without a baseline. We should measure time to first working screen, handoff count, protocol-debug time, and time to validated firmware on one representative project. Then the saving belongs to your data, not our guess.

### 12. Give us exclusivity now or we will not invest.

> I understand why you need protection for your investment. Exclusivity requires a written territory, term, performance commitment, support capability, and review mechanism. I cannot approve it verbally, but I can document your proposal and bring it to the authorized decision makers.

### 13. Tell me the price now.

> I do not want to anchor the discussion with an unofficial number. The approved price depends on the license model, region, customer type, and partner terms. I will send the correct commercial proposal after we confirm those four points.

### 14. Is the product secure?

> The current architecture is local-first, but the source package does not define a complete product-security program. The serial protocols themselves do not add encryption or authentication. Secure boot, signed updates, SBOM, telemetry, vulnerability response, and network hardening need a separate approved security statement.

### 15. Your live demo just failed. Why should we trust the product?

> The live session failed, and I will not hide that. I will use the prepared result to continue the workflow discussion, capture the exact logs and environment, reproduce the issue, and send you the root cause and verification result. One failed session should create an engineering action, not an improvised excuse.

## 對方一直逼問時

第一次：

> I understand that you need a clear answer.

第二次：

> I am not authorized to commit that term in this meeting.

第三次：

> Let us record the exact decision required, the decision owner, and the date. That is the fastest way to give you an answer you can rely on.

不要因為對方職位高就把 `[CONFIRM]` 題變成猜測題。

## 答錯後如何修正

### 當場發現

> I need to correct what I just said. The current build supports **X**, not **Y**. Thank you for giving me the chance to clarify that.

### 會後發現

> I would like to correct one point from today's discussion. I said **X**; the verified answer is **Y**, with the following limitation: **Z**. I apologize for the confusion.

快速、明確修正會增加可信度；偷偷不提才會破壞可信度。

## 回覆承諾紀錄

會議中使用：

| Question | What must be confirmed | Owner | Reply by |
|---|---|---|---|
|  |  |  |  |
|  |  |  |  |
|  |  |  |  |

結尾念出：

> I have three follow-up items: pricing, the macOS support level, and the RS-485 release status. I will coordinate the owners and send one consolidated answer by Tuesday.

