# 技術主管與資深工程經理問答

技術問題不要假裝全懂。先給架構層級答案；只有確認過資料才往下鑽。

## 架構與輸出

### 1. What is the underlying graphics framework?

> The firmware and Emulator target LVGL 9.5. The lighter prebuilt Simulator artifacts are still based on LVGL 9.2, so we treat the Emulator and hardware paths as the primary generated-application validation paths.

### 2. What code does the tool generate?

> The main generated files are `ui.c` and `ui.h` for the interface, `ui_events.c` and `ui_events.h` for event handlers, and `ui_logic.c` and `ui_logic.h` for visual logic. The deployment path also generates communication bindings and board display configuration.

### 3. Is the output source code available?

> The product includes code preview and export in the current source. The Code tab is hidden in normal mode and available in Factory Dev Mode, while code generation still runs for the Emulator and Deploy. Legal usage rights must follow the approved license.

### 4. What is the difference between Prototype, Simulator, and Emulator?

> Prototype is an instant Canvas 2D approximation. Simulator uses real LVGL with a UI-description JSON but no generated application code. Emulator compiles the generated C with real LVGL and runs events, logic, and the HMI runtime. Normal users open the Emulator; the rung selector is mainly for Factory Dev Mode.

### 5. Does the Emulator guarantee hardware behavior?

> No. It validates generated code, LVGL behavior, events, logic, fonts, and simulated communication. It cannot prove MCU memory use, real-time performance, touch behavior, physical bus behavior, or board-specific peripheral timing. Hardware validation remains required.

## UI 能力

### 6. How many widgets are supported?

> The current design palette contains 25 components across basic controls, inputs, shapes, containers, displays, image, and video. Older README counts are stale, so we use the current component-definition table as the source.

### 7. Does it support multiple screens?

> Yes. Screens can be created, named, grouped, assigned backgrounds, and connected through event actions or logic nodes. Navigation supports None, Slide, Cover, Wipe, and Fade, with direction and duration where applicable.

### 8. What event model is available?

> Components can bind LVGL events such as click, long press, value change, and focus. Screens also expose load and unload lifecycle events. Built-in actions include navigation, property or value changes, show/hide, language switching, and animation control, with custom C available in Factory Dev Mode.

### 9. What can the visual logic graph do?

> The current palette includes event and timer triggers; If/Else, Switch, and Delay; screen actions such as Set Property, Navigate, Show/Hide, Set Text, and Set Value; data operations for variables, comparison, logic, math, strings, and properties; and device Read Tag and Write Tag nodes. Custom calls and C blocks are factory-only.

### 10. How are animations modeled?

> An animation is a project asset with a target component, one timing model, and one or more property tracks. Events can play or stop it, screens can use it as an entry animation, and completion can trigger another action or animation.

## Protocols and data

### 11. Which protocols are implemented today?

> The implemented serial paths in the current branch are Modbus RTU and configurable line-oriented serial commands. CAN is modeled but not a production runtime path, and Ethernet or additional USB stacks are not compiled in the current H747 build.

### 12. Can the panel be a Modbus master and slave?

> Yes, in the current model the device role can be panel asks or controller drives the panel. In the first role, the panel is the Modbus client and polls tags. In the second, the panel is the Modbus server and its tag table becomes the register map.

### 13. Which Modbus function codes are supported in responder mode?

> The current server implementation records support for function codes 1 through 6, 15, and 16, with standard exception handling for illegal function, address, and value. Exact production behavior should still be verified against the release build and target board.

### 14. How do serial command protocols work?

> The device stores read and write templates, such as `GET {address}` and `SET {address} {value}`. Each tag has a name on the device. A locator can take the whole reply, text between a prefix and suffix, or a numbered field in a separated record. Tags can also override the device-level command.

### 15. Can the panel respond to host commands?

> Yes, on the current command-responder path. The host can get or set a named tag, and the panel can emit a configured event line when a touch or logic write changes a value. This was verified in the source notes on the H747 VCP path.

### 16. Does it support binary custom protocols?

> Not as a general production feature today. The current command path is line-oriented. The locator notes explicitly leave a binary-bytes rung and pattern matching for later work.

### 17. Does it support CAN?

> The project model includes CAN signals and board connector descriptions, and an H747 loopback spike was measured. However, CAN is not a current production runtime path. We need the exact requirement—raw signals, CANopen, or J1939—before discussing scope.

### 18. Does it support Ethernet or Modbus TCP?

> Not in the current production build. The H747 hardware includes Ethernet, but the current board definition says no TCP/IP stack is compiled. The architecture plans for a transport and framer layer, but that is not a shipping claim.

### 19. What about RS-485?

> The EDT EVK has an RS-485 transceiver, and the changelog records a Modbus RTU RS-485 path. The current board connector definition still labels it fitted but unbound, so I would verify the exact release build before committing it to a customer.

### 20. What is a tag?

> A tag is a named value used across the UI, logic, communication runtime, and emulation. It contains the value type, access, source address or command name, scaling, offset, and timing. Widgets reference the tag rather than copying the wire definition.

### 21. Which data types are supported?

> The shared model uses boolean, unsigned integer, signed integer, float, and string. The wire source carries its width—for example one or two Modbus registers or a defined string block.

### 22. How are engineering units handled?

> A tag supports scale and offset, so the engineering value is raw multiplied by scale plus offset. The runtime owns that conversion, which keeps widgets and logic from implementing it independently.

### 23. How is polling controlled?

> Device tags can carry their own poll interval, with a device default. The link-budget view estimates whether the configured exchanges fit at the selected serial framing and baud rate. Panel-memory and write-only tags do not consume polling time.

### 24. Can several widgets share one tag?

> Yes. The generated runtime keeps one tag table and a separate binding table, so a tag is polled once and the value is fanned out to every bound widget.

### 25. What happens when a tag is deleted?

> Bindings are not silently repaired. The UI marks the missing reference, and generation omits the invalid descriptor with an explanatory comment. The design favors visible missing dependencies over guessing.

### 26. Can values exist only inside the HMI?

> Yes. Panel-memory tags have no external device address. Widgets and logic can read and write them, which is useful for local state, setpoints, or communication between screens.

### 27. How do you debug the protocol?

> The Monitor shows time, direction, bytes, device, tag meaning, engineering value, refusals, timeouts, and invalid frames. The Test action can open a serial link through Web Serial and exchange a real frame on supported paths. The Command Composer previews line endings and bytes before flashing.

### 28. Can the tool export the interface for the host developer?

> For the Modbus responder path, the source records CSV, a generated `hmi_map.h`, and a printable register-map page. The command-list export is still shown as pending in the progress notes, so it should not be promised until verified in the release build.

## Hardware, resources, and deployment

### 29. Which boards are currently modeled?

> STM32F746G-DISCO at 480 by 272 RGB565, STM32H747I-DISCO at 800 by 480 ARGB8888, and EDT EVK043027B at 480 by 272 ARGB8888.

### 30. Can we add our own board?

> The architecture is built around board definitions plus firmware templates and drivers, so a new board is possible. It is not only a JSON entry: display, touch, memory, build, programmer, connectors, and optional peripherals must be integrated and validated.

### 31. Does it support portrait orientation?

> H747 and the EDT EVK are modeled for landscape and portrait; F746 is currently landscape-only. The implementation cost differs by panel and driver, so orientation is a board capability rather than a universal switch.

### 32. How are images handled?

> Images are managed as project resources and converted for the target color format. On H747, large image data can be linked into external QSPI flash; other boards use their configured internal-memory path. The Deploy diagnostics can read actual placement from the linker map in Factory Dev Mode.

### 33. How are fonts and CJK handled?

> The repository bundles Noto Sans TC, SC, JP, and KR. The codegen path collects the characters used by the project and converts only the required glyphs per font and size, with explicit extra-character escape hatches for dynamic text. This keeps CJK fonts practical for embedded flash.

### 34. Does video work on every board?

> No. The current Video path requires a hardware JPEG decoder, SD storage, and enough external memory. The H747 demo board has that combination. F746 and the EDT EVK do not, so Deploy blocks those projects instead of providing a poor software fallback.

### 35. What video format is supported?

> The H747 path uses Motion JPEG in an AVI container from an SD card. It does not scale video, play audio, or allow LVGL content above the video layer. Exact encoding constraints are documented and should be validated for the target content.

### 36. What toolchain is required?

> Emulator setup uses Emscripten and a pinned LVGL checkout. Firmware deployment uses CMake, Ninja, an Arm GCC toolchain, STM32CubeProgrammer, and ST-LINK on the current targets. Some ST components cannot legally be bundled, so the desktop installer design detects and guides the user to install them.

### 37. Can it run offline?

> The current architecture stores projects locally and uses a local build service and local toolchains. However, the final distribution, update, telemetry, license-activation, and cloud policies are not documented in this source package, so I would not make an absolute offline claim yet.

### 38. How are projects stored?

> Projects can be saved and imported as JSON, with local persistence and autosave in the current application. Resources and project data are normalized when older shapes are opened to preserve backward compatibility.

### 39. How do you protect against flashing the wrong board?

> The flashing service checks the selected target against the connected ST-LINK board identity when available, or the MCU device ID for standalone probes, before writing. External-flash images also require the board's configured loader.

### 40. What tests exist?

> The repository includes unit and integration tests for UI models, code generation, protocol validation, tag bindings, command composition, Emulator toolchains, build services, flashing parsers, and board definitions. Changelog entries also record specific bench tests, especially on the H747 VCP path. This is engineering evidence, not a substitute for a formal release qualification report.

### 41. What are the main scalability limits today?

> The current product model intentionally caps a project at one active link and one device, even though they are stored as lists for future expansion. Hardware memory, polling bandwidth, font and image size, and board-specific capabilities also set real limits.

### 42. Is the firmware secure?

> The current serial protocols focus on local industrial communication and do not provide encryption or authentication by themselves. The source package does not define secure boot, signed updates, SBOM policy, vulnerability response, or network-hardening commitments. Those require a separate product-security answer.

### 43. How do you handle backward compatibility?

> The project loaders normalize older project shapes into the current model, including older protocol, tag, data-type, and logic-category formats. Migration tests cover these paths. A formal long-term compatibility policy still needs release management.

### 44. What happens if the build fails?

> Long-running operations appear in the Work pane with user-facing phases, progress when available, and cancellability for safe operations. Detailed build and flash logs remain in separate dock panes, and a build can be stopped while flashing cannot be cancelled from the UI.

## 技術問題答不深時

> At the product level, the answer is **[short answer]**. I do not want to invent the board-level detail. Let me confirm the exact source path and configuration with our engineering team and send you a precise answer.

