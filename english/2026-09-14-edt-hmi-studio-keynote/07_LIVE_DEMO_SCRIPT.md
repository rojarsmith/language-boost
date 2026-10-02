# Coffee Machine 現場 Demo 腳本

## Demo 原則

高階簡報的 Demo 不是軟體教學。你只需要證明三件事：

1. AI 可以透過 editor 建立或修改正常、可編輯的 HMI project content。
2. 畫面、tag、protocol 與 Emulator 是連在一起的。
3. 專案可以往支援硬體的 build/deploy 前進。

不要臨場從空白專案開始畫。使用 `examples/h747-coffee-machine.json`。

## Demo 前 30 分鐘檢查

- 記下實際安裝 build 的版本與 commit；本稿按 2026-10-02 的 0.9.0-dev 更新，不假設公開 Alpha 具有所有新功能。
- 在 Examples 選 H747 Coffee Machine，以 Use Example 建立自己的 .ehsp；若已有檔案，使用 Windows 的 Load Project。
- 四個 screens 都能開：Home、Drinks、Brewing、Settings。
- 確認 800×480 landscape、STM32H747I-DISCO。
- Emulator toolchain 已 setup，且至少成功 run 過一次。
- 模擬 device/controller 有可操作的 values。
- Protocol Packet 已清空。
- AI provider 已登入或 local Ollama host 已啟動；測試 prompt 已成功三次。
- 已準備 AI 修改完成後的 project 與截圖，網路慢時立即切換。
- Deploy 頁能讀到 local service；不要在正式會議第一次 build。
- 關閉系統通知、聊天軟體與自動更新。
- 準備截圖備援：`assets/shot-design.png`、`shot-logic.png`、`shot-protocol.png`、`shot-preview.png`。
- 準備 AI 備援：`assets/latest/assistant-panel.png`、`assets/latest/ai-edit-in-place.png`。
- 把 7 分鐘版本練到 6 分鐘內，留給網路、視窗與提問。

## 7 分鐘標準 Demo

### 可選 75 秒 AI 開場

若 keynote 前段尚未做過 AI live edit，先插入這段，並省略後面的 Screens, text, and animation 段以守住總時間。

畫面：Assistant panel 與已準備好的 Coffee Machine project。

> The assistant uses the same editor controls that a person uses. I will ask for one visible, low-risk change: make the main action button green, while keeping the text and layout unchanged.

動作：送出已測試 prompt；等待時不要說話；等 editor 內的修改完成後檢查並展示，再 undo 一次。不另找不存在的 Apply 按鈕。

> The result remains normal project content. I can inspect it, refine it by hand, and undo the applied AI change as one step. The assistant does not flash or operate the target hardware.

如果超過演練的等待上限：

> I have the completed result ready. Let me show you the same change without making you wait.

### 0:00–0:35 — 專案全貌

畫面：Project / Design，Home screen。

> This is the Coffee Machine example for the STM32H747I Discovery Kit. It has four screens, 46 top-level components, 28 animations, 13 device tags, and three languages. These numbers show the structure of this example; they are not product limits.

動作：快速點 Home、Drinks、Brewing、Settings；不要停留。

> The important point is that the screens, behavior, text resources, device values, and target hardware all belong to one project.

### 0:35–1:30 — Design

畫面：Home；選一個 container 與一個 button；打開 hierarchy。

> In the Design view, users arrange components directly on the target resolution. Components can be nested, aligned, reordered, styled for different states, and managed through the hierarchy.

動作：只移動一個不重要元件 5–10 px，按 Undo；避免改壞 demo。

> Direct manipulation and undo make the workflow familiar to a designer. The target board also provides the display size, color format, and supported orientation.

### 1:30–2:20 — Screens, text, and animation

畫面：Text／Typography，再回 Design 或 Animation manager。

> The example includes English, Traditional Chinese, and Japanese. A text resource can be linked to several widgets, and a typography can select the right font for each language.

動作：若穩定，切換 canvas language；否則只展示 language columns。

> Animations are project assets. A screen event or a widget event can start an animation, and several property tracks can move and fade one component on the same clock.

### 2:20–3:10 — Logic

畫面：Logic tab。Coffee example 沒有現成 logic graph，因此正式 Demo 前應載入行銷截圖中使用的 F746 demo graph，或準備一個簡單 graph：Event Trigger → If/Else → Set Property / Write Tag。

> The Logic view lets the user describe behavior with connected nodes. The current palette includes triggers, flow control, screen actions, data operations, and device tag operations. Advanced custom C stays in Factory Dev Mode rather than in the normal no-code workflow.

如果沒有 graph，誠實說：

> This particular Coffee Machine example uses direct event bindings. I am showing the Logic workspace separately because it is another supported way to define behavior.

不要假裝 Coffee example 已有 logic graph；來源資料是 0 個。

### 3:10–4:30 — Protocol and tags

畫面：Protocol tab；選 H747 VCP、Modbus RTU、panel asks device；顯示 tags。

> The Protocol view starts with three plain questions: which plug, which language, and who starts talking. The choices are filtered by the selected board, so the user can see what is ready, what needs hardware, and what is not in the current build.

動作：指 BoilerTemp、BrewProgress、BrewStart、Strength。

> The Coffee Machine project has named values such as Boiler Temperature, Brew Progress, and Brew Start. Each tag carries its type, access, address, scale, offset, and update timing. Widgets and logic refer to the tag by name instead of copying the wire definition.

動作：指 link budget 或 Packet。

> The link budget warns when requested polling cannot fit on the serial link, and the Packet translates exchanges into the names used by the project.

### 4:30–5:45 — Emulator

畫面：Preview → Emulator；Start。

> This is the most important validation step. The Emulator compiles the generated C with real LVGL. It runs the events, logic, and the HMI communication runtime.

動作：在 simulated device 改一個可讀 tag，等畫面更新；再操作一個 bound control，指出 simulated device 端的 write 或 Packet row。

> I can change a value on the simulated device and see the generated HMI read it. I can also touch the HMI and see the write on the other side. This is not only a visual mock-up; it exercises the generated application before hardware is required.

動作：顯示 Packet 一列。

> The Packet shows the direction, bytes, tag name, and interpreted value, which makes a communication problem easier to explain and reproduce.

### 5:45–6:30 — Deploy

畫面：Deploy。正式會議不要真的 flash，除非事先演練且板卡在桌上。

> When the project is ready, the Deploy view builds the generated UI together with the selected board firmware. It can then flash the supported board over ST-LINK SWD and reset it.

> The product checks protocol support, display orientation, and hardware-dependent features before allowing the build. This prevents an unsupported project from failing only at the end of the process.

在時間允許時補一句 Customer Demo：

> The Emulator card can build a demo package. Its core interaction works offline without a board, cable, or toolchain on the recipient's PC. External videos and links still need the network. Hardware performance still needs the target board.

### 6:30–7:00 — 商業收尾

> This is the full story: one project connects the screen, behavior, device values, generated-code validation, and hardware deployment. For a joint evaluation, we would select one customer use case, one board, and one protocol, and prove the same path end to end.

## 3 分鐘高階主管 Demo

只展示四個畫面：Design、Protocol、Emulator、Deploy。

> This project shows a complete embedded HMI, not a static mock-up. In Design, the user builds the screens and resources. In Protocol, named values connect the UI to the device. In the Emulator, the generated C runs with real LVGL and a simulated device, so both reads and writes can be tested. In Deploy, the same project builds and flashes supported hardware. The business value is one continuous, repeatable workflow from evaluation to a working panel.

## Demo 失敗時的英文

### Emulator build 太久

> This build is taking longer than expected. Studio can reuse unchanged build work, but timing depends on the computer and project. I will continue with the prepared demo package.

### Emulator 起不來

> The local emulation toolchain is not available on this machine. The generated-code path is shown in the prepared recording, and we can still review the project and deployment flow live.

### AI provider 太慢或沒有網路

> The AI service is not responding on this network. The completed editor result is saved locally, so I will continue with the prepared project.

### 沒有板卡

> I am not flashing hardware in this session. The purpose of this demo is to show the complete project and generated-code validation. We can include the target board in the proof-of-concept session.

### 畫面不更新

> Let me separate the UI from the communication path. The interface is running; I will use the Packet to check whether this value was exchanged.

### 程式當掉

> The live session has stopped, so I will switch to the prepared screenshots and keep the discussion on the workflow. We will reproduce the failure after the meeting and send the result.

永遠不要說 `It worked yesterday.`

## 新功能替換 Demo

這些是替換段，不要全加進原本 7 分鐘或 30 分鐘 keynote。先說：

> Today, I am showing a development build. Some features are not in the public Alpha.

### Virtual Model 60 秒

用內建 `Virtual 1280×480 Smart Washer Voice Serial Command`，另開已保存的專案。替換 Screens, text, and animation 段與部分 Design 解說。

1. 展示 1280×480 畫面和 Virtual Model 規格。
2. 用已準備好的 Emulator 互動。
3. 展示 Deploy 的 Export specification 與事先匯出的 HTML／JSON。
4. 不點 Program；它不是實體板卡。

> This display does not need to exist yet. We can design it, test the interaction, and share a specification. The memory figures include estimates. A real board still needs engineering and hardware tests.

Voice washer 的狀態由外部 voice unit 合約／模擬值驅動；不要宣稱是 Studio 內建語音辨識。

### Checks 45 秒

用已排練的簡單錄製：Start → 操作 bound control → Save as Check → 檢查選定的 expectations → Run。可替換一部分手動 read／write 操作，不臨場製作長情境。

> I can save this test and run it again after a change. Checks compares the selected results in the Emulator. A passing Check does not replace testing the real machine.

如果失敗，先看是產品改變、期望過時還是環境問題；不要為了綠燈直接 Accept current。

### Pages 與 Words 45 秒

使用最新 washing-machine example，展示 category page 與跟 tag 改變的狀態字。只在已驗證的開發 build 展示，替換原 Logic 段。

> One value can choose the page, the selected look, and the words on screen. We can keep that behavior together instead of repeating it in several graphs.

Reading Distance 與新的 glass reminders 已提交至本次開發快照，但不是公開 Alpha 能力。未提交的 Scroll round 不安排為主舞台必成功步驟。

## 技術主管加問時才展示

- Prototype / Simulator / Emulator 三層差別。
- generated `ui.c`, `ui_events.c`, `ui_logic.c`。
- Command Composer bytes、locator ladder、real serial Try it。
- Modbus initiator vs responder。
- host interface CSV / header / printable page。
- board capability matrix。

這些不要塞進 7 分鐘主線。
