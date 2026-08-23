# 2 分鐘產品介紹

## 標準逐字稿

正常語速約 1 分 50 秒到 2 分 15 秒。每一段都是一張「訊息卡」，忘詞時可直接跳下一段。

### 1. 開場與痛點

> Good morning, and thank you for your time. Today I would like to introduce EDT HMI Studio, our visual development environment for embedded touch interfaces.
>
> Embedded HMI development is often split across several tools. One person designs the screen, another writes the application logic, and another connects the device protocol and builds the firmware. Integration problems often appear late, when the team finally tests on hardware.

中文提示：產品是什麼；傳統流程很碎；問題太晚才發現。

### 2. 解法

> EDT HMI Studio brings that work into one project. Users can design screens visually, define behavior with events and logic graphs, connect named values to a device, and generate the embedded application without starting from hand-written C.

中文提示：同一專案；畫面、邏輯、設備數值、產生應用。

### 3. 五步流程

> The workflow has five simple steps. First, design the screens. Second, define the logic. Third, connect the device protocol and tags. Fourth, run the generated application in the Emulator. Finally, build the firmware and flash supported hardware.

中文提示：Design, Logic, Connect, Validate, Deploy。

### 4. 為什麼不只是 Preview

> The Emulator is an important difference. It compiles the generated C with real LVGL and runs the events, logic, and simulated device communication. This lets the team find many integration issues before the target board is available.

中文提示：真 LVGL + generated C，不是只有畫面圖片。

### 5. 目前範圍

> The current source includes three board profiles and supports Modbus RTU and configurable serial command protocols on the implemented serial paths. It also includes multi-screen design, animations, multilingual text, images, fonts, and board-aware deployment checks.

中文提示：三板、兩種目前 serial protocol 路徑、多畫面／動畫／多語。

### 6. 商業價值與結尾

> The goal is straightforward: shorten the development cycle, reduce handoff errors, and make HMI projects easier to evaluate, deploy, and support. We would like to understand your target customers, boards, and protocols, and then validate the best first use case together.

## 停頓版

> Good morning, / and thank you for your time. //  
> Today I would like to introduce / **EDT HMI Studio**, / our visual development environment / for embedded touch interfaces. //
>
> Embedded HMI development / is often split across several tools. / One person designs the screen, / another writes the application logic, / and another connects the device protocol / and builds the firmware. //  
> Integration problems often appear **LATE**, / when the team finally tests on hardware. //
>
> EDT HMI Studio brings that work / into **ONE PROJECT**. //  
> Users can design screens visually, / define behavior with events and logic graphs, / connect named values to a device, / and generate the embedded application / without starting from hand-written C. //
>
> The workflow has **FIVE SIMPLE STEPS**. /  
> First, design the screens. /  
> Second, define the logic. /  
> Third, connect the device protocol and tags. /  
> Fourth, run the generated application in the Emulator. /  
> Finally, build the firmware / and flash supported hardware. //
>
> The Emulator is an important difference. / It compiles the generated C / with real L-V-G-L / and runs the events, logic, / and simulated device communication. //  
> This lets the team find many integration issues / before the target board is available. //
>
> The goal is straightforward: / shorter development cycles, / fewer handoff errors, / and easier evaluation, deployment, and support. //  
> We would like to understand your target customers, boards, and protocols, / and validate the best first use case together.

## 忘詞時的 60 秒備援版

> EDT HMI Studio is a no-code environment for embedded touch interfaces. It brings screen design, visual logic, device communication, emulation, and deployment into one project. The key difference is that the Emulator compiles and runs the generated C with real LVGL, including events, logic, and simulated device values. The current source supports three board profiles and implemented serial paths for Modbus RTU and configurable serial commands. The goal is to find integration problems earlier and make HMI projects easier to build and support. The next step is to validate one target board, one protocol, and one customer use case together.

## 常見追問的第一句

| 追問 | 先說這一句 |
|---|---|
| What makes it different? | The key difference is the continuity from design to generated-code emulation and hardware deployment. |
| Is it really no-code? | For supported workflows, yes; advanced teams can still extend the result when needed. |
| What hardware do you support? | The current source includes three explicit board profiles, with different capability levels. |
| Which protocols? | The current implemented serial paths are Modbus RTU and configurable serial commands. |
| Is it available now? | The public release status and commercial availability are being finalized; I will use our approved launch statement. |

## 過關標準

- 六張訊息卡順序正確，不要求逐字相同。
- 2 分 30 秒內完成。
- 每段第一句可以不看稿說出。
- 能在任何一段結束時安全收尾。
- 能回答上表五個追問的第一句。

