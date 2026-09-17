# 現有兩頁行銷簡報逐字稿

來源簡報：`edt-hmi-studio-teaser.pptx`。兩頁都是 A4 橫式，第一頁是五步價值，第二頁是產品畫面與上市訊息。

## 使用前的紅色檢查

第二頁的 `November 2026` 與 `Free to try on all three platforms.` 已過時。公開頁面目前顯示 0.8.5 Alpha、Windows 10/11 64-bit，以及 December 2026 general-release roadmap。舊投影片只能用來練五步故事，不能照念上市資訊。

目前使用：

> The public 0.8.5 Alpha is available for evaluation by key stakeholders. It is evaluation software, and the final production-support and commercial terms still require approval.

## Slide 1 — Build the screen that runs your machine

### 0:00–0:25 — 標題

動作：看觀眾，不要看螢幕。

> Good morning. This is EDT HMI Studio. Our idea is simple: build the screen that runs your machine, without starting from application code.

### 0:25–0:55 — 一句定位

動作：手指向主標，不要逐字念投影片。

> It is a visual development environment for embedded touch interfaces. It brings screen design, behavior, device communication, validation, and deployment into one project.

### 0:55–2:15 — 五張卡

動作：由左到右，每張卡只說一個重點。

> First, **GUI Design**. Users drag components onto the screen, arrange them, style them, and build multiple pages visually.
>
> Second, **Logic Graph**. Events and node-based logic define what happens when a user touches the screen or when a device value changes.
>
> Third, **Protocol**. Named values connect the interface to the machine. The current implemented serial paths include Modbus RTU and configurable serial commands.
>
> Fourth, **Preview**. In normal use, this opens the Emulator. It compiles the generated C with real LVGL and runs the events, logic, and simulated device communication.
>
> Finally, **Deploy**. After the local toolchain is ready, the project can build firmware and flash supported hardware from the same workflow.

### 2:15–2:40 — 商業價值

> The value is not simply that each step exists. The value is that the same project connects all five steps. This is designed to reduce handoffs and find integration problems earlier.

### 2:40–2:50 — 換頁

> Let me show you what that looks like in the current product.

## Slide 2 — Product screens and launch message

### 2:50–3:15 — 主畫面

動作：指左上大畫面。

> The main area shows the running application. This is where the user can test the generated interface before moving to hardware.

### 3:15–4:05 — 四張截圖

動作：由左到右。

> Here is the **Design** view, where screens and components are arranged.  
> Here is the **Logic** view, where behavior is connected visually.  
> Here is the **Protocol** view, where the user selects the connection, language, role, and named values.  
> And here is the **Live Preview**, where the generated application can be exercised.

### 4:05–4:30 — 平台與時程

目前 Alpha：

> The public 0.8.5 Alpha is available for evaluation by key stakeholders on Windows 10 and 11. The official page currently shows a December 2026 general-release roadmap. We will use the final approved release and commercial terms.

只有公開網站正式改成 Beta 且公司核准後：

> The Beta is now available for evaluation. We will use the official page for the exact version, platform scope, and download terms.

### 4:30–5:00 — 收尾與轉 Demo

> The key message is one studio for the full HMI workflow: design it, connect it, test it, and deploy it. Rather than describe more features, I would like to show one complete project and then take your questions.

## 只有三分鐘時

省略每張卡的第二句，使用：

> EDT HMI Studio brings five steps into one project: visual screen design, node-based logic, device communication, generated-code emulation, and deployment to supported hardware. The key difference is continuity. The same named values and generated application move through the whole workflow. The public 0.8.5 Alpha is available for evaluation by key stakeholders. Let me show one practical example.

## 被中途打斷

> That is an important question. The short answer is **[answer]**. I will show the related part in the demo, and then we can go deeper in Q&A.
