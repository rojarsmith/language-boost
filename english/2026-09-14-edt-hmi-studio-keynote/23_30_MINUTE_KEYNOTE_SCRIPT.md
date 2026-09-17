# 30-minute keynote script

## How to use this script

- Aim for an overall average near 95 words per minute. Slow down for reveal lines and use 100 to 105 for explanatory sections.
- A line in square brackets is a stage direction. Do not say it aloud.
- A slash marks a short pause. A double slash marks a full pause.
- Look up for every bold anchor line.
- Demo time and silence are part of the 30 minutes.
- Memorize the opening, the US$200M qualification, and the closing. Use cue cards for the rest.

## Release-status switch

Use exactly one version:

**Current Alpha line**

> The 0.8.5 Alpha is available for evaluation by key stakeholders.

**Beta replacement line, only after the public site changes and the company approves it**

> The Beta is now available for evaluation.

---

## 00:00–02:00 | Opening

### Slide 1: One screen

[Walk to the center. Stop. Look at the audience. Do not touch the clicker.]

Good morning. //

Every embedded product has a moment of truth.

The customer touches the screen.

In that moment, the customer does not see our panel specification.

The customer does not see the MCU.

The customer does not see the firmware architecture.

The customer sees one thing. /

Does the product feel clear, fast, and trustworthy? //

[Click. Show one polished HMI screen.]

This screen may look simple.

The work behind it is often very complicated.

A designer creates the visual layout.

An engineer writes the interaction.

Another engineer connects the protocol.

The team waits for hardware.

Then integration begins.

And when a problem appears late, every team pays for it. /

More time.

More handoffs.

More risk.

[Pause. Take one step forward.]

Today, I want to show you a different workflow.

Then I want to show you a larger business opportunity for EDT.

The first chapter is the product.

The second chapter is the path to a repeatable US$200 million annual revenue engine. //

That number is a North Star and a scenario.

It is not approved financial guidance.

I will show you every assumption behind it.

[Look up.]

Let us begin with the product.

---

# Chapter 1: EDT HMI Studio

## 02:00–05:00 | The old workflow

### Slide 2: A fragmented development process

[Show a simple sequence: design, code, protocol, hardware, rework.]

Imagine a customer building a new industrial machine.

They have a display.

They have a controller.

They have a product idea.

But the HMI work is spread across different tools and different people.

The designer makes a picture.

The firmware engineer rebuilds that picture in code.

The application engineer maps data from the machine.

The team receives hardware and finds a memory problem.

Then somebody changes the screen.

The cycle begins again. //

Each handoff creates a translation.

Each translation can create a mistake.

The biggest problems often appear at the end, when change is expensive.

This affects more than engineering.

Sales waits for a Demo.

The customer waits for an answer.

The FAE repeats the same setup for another account.

Management sees activity, but cannot see a repeatable path from evaluation to production.

[Pause.]

Now ask one simple question.

What if the screen, the behavior, the device values, and the target hardware could live in one project?

What if a customer could see a working HMI before the final board was ready?

What if AI could help create the interface through the same controls a person uses?

[Black slide. Hold for two seconds.]

We built that workflow.

## 05:00–07:00 | Product reveal

### Slide 3: EDT HMI Studio

[Reveal the product name and logo. Pause. Let the room read it.]

**This is EDT HMI Studio.** //

EDT HMI Studio is a visual development environment for embedded touch interfaces.

It brings screen design, visual logic, device communication, emulation, firmware build, and flashing into one project.

For supported workflows, a team can begin with an idea and reach running firmware without writing application code.

Experienced engineers still have control.

They can inspect the project.

They can use generated C.

They can handle the special integration that a visual tool should not pretend to solve.

The purpose is simple.

More people can create the HMI.

Engineers can focus on the difficult parts.

The whole team can validate earlier.

### Slide 4: One project

[Show the current Design view.]

Here is the project.

The team designs the screens here.

They create events and visual logic here.

They define named device values and communication here.

They run the generated application here.

When the target is ready, they build and flash supported hardware from the same project.

The current source has 25 components in the design palette.

It supports multiple screens, animation, images, fonts, typography, and multilingual text.

The number of components will change.

The important point is the continuity of the work.

One project connects the visual idea to the embedded target.

---

## 07:00–11:00 | AI-assisted creation

### Slide 5: Built for AI to operate

[Show the assistant panel. Keep the prompt ready.]

Now let us add a new collaborator.

The public Alpha page says, “Built for AI to operate.”

That sentence has a precise meaning.

The assistant uses the editor's own controls.

It can create a project.

It can turn a sketch, a photograph, or a whiteboard into screens.

It can make a focused change inside an existing design.

It can answer questions about the project.

[Point to the project tree.]

The result remains normal project content.

A person can select it.

A person can edit it.

A person can undo the AI change as one step.

The assistant does not flash or control the target hardware.

The engineer remains responsible for review and validation.

### Slide 6: Live edit

[Open the prepared project. Do not generate a full project live.]

Let me show you one small change.

[Read the tested prompt slowly.]

> Make the main action button green. Keep the text and the layout unchanged.

[Submit. Stop speaking while the model works. If latency exceeds the rehearsal limit, switch to the prepared after image.]

The request is small.

The result is visible.

And the rest of the project remains editable.

[Apply. Show the change. Pause.]

Now I can inspect it.

I can adjust it by hand.

And I can undo the whole AI change in one step.

[Undo once. Then redo or apply the prepared version.]

This matters because AI should fit the engineering workflow.

The team needs control, traceability, and a clear way back.

### Slide 7: Image to interface

[Show ai-draws-an-asset.png or a pre-recorded image-to-screen result.]

The larger possibility begins before the first widget.

A customer can bring a sentence.

A sketch.

A photograph.

A whiteboard drawing.

The assistant can help turn that visual intention into a working starting point.

This can change the first sales meeting.

Instead of discussing only specifications, the team can discuss the customer's product on an EDT display.

That is a stronger conversation.

The customer can react to something visible.

The FAE can capture the requirement.

The designer and engineer can continue from the same project.

[Pause.]

AI gives us speed.

The rest of Studio gives us an engineering path.

---

## 11:00–14:00 | From screen to embedded product

### Slide 8: Design

[Show design.png.]

First, Design.

The team builds the interface visually.

They arrange components, screens, text, images, and animation.

They can manage languages and typography inside the project.

### Slide 9: Logic

[Show logic.png.]

Next, Logic.

A screen needs behavior.

Events and visual graphs connect a user action to a project value or another screen.

The team can see the behavior instead of hiding every decision inside handwritten code.

### Slide 10: Protocol

[Show protocol.png.]

Next, Protocol.

The current implementation supports Modbus RTU and configurable line-oriented serial commands.

The panel can initiate communication or respond to a host on supported serial paths.

Named tags connect device data to the interface and the logic.

One value can travel through the whole project.

### Slide 11: Validate and deploy

[Switch to the prepared Emulator or Customer Demo.]

Now we validate.

The Emulator compiles the generated C with real LVGL.

It runs the screen, events, logic, tags, and simulated communication.

This is more than a static preview.

The team can test the generated application before final hardware is available.

[Change one simulated value. Show the UI respond.]

Here, the simulated device value changes.

The HMI reads it.

[Touch one control. Show the simulated device receive the write.]

Here, the user touches the HMI.

The simulated device receives the write.

The Customer Demo path can also package an interactive project for evaluation.

The recipient does not need a board, a cable, a toolchain, or a network connection.

When the target is ready, the same project can build firmware and flash a supported board.

[Pause.]

Design.

Behavior.

Communication.

Generated code.

One connected workflow.

---

## 14:00–15:30 | What is real today

### Slide 12: Current scope

[Show a restrained scope slide. No celebration graphics.]

Let me be precise about the current scope.

[Use the approved Alpha or Beta line.]

The public evaluation build is for key stakeholders.

The Alpha page tells users to expect rough edges and not to pass the build to downstream customers.

The current source includes profiles for three boards:

STM32F746G-DISCO.

STM32H747I-DISCO.

And EDT EVK043027B.

The capabilities are different on each board.

For example, the F746 has a constrained software-video path with sound.

The H747 uses hardware JPEG for higher-resolution video, without audio on that path.

CAN and Ethernet are not current production paths.

We will not hide those boundaries.

Clear scope creates trust.

It also tells us exactly what to validate next.

[Look at the audience.]

So, what have we built?

A customer can move from an idea to an interactive embedded HMI project.

AI can help create and edit it.

The team can connect behavior and device data.

The team can test generated C before final hardware.

And the project can continue toward supported EDT hardware.

[Pause.]

That completes Chapter One.

Now let us ask the business question.

# Chapter 2: A repeatable US$200M annual revenue engine

## 15:30–16:00 | Chapter transition

### Slide 13: Business system

[Use a black slide with one small EDT display image.]

EDT already knows how to build reliable display hardware.

Studio can change when EDT enters the customer conversation.

It can change what we help the customer complete.

And it can change how long that relationship continues.

[Pause.]

A product creates possibility.

A repeatable operating model creates revenue.

Here is the system we need to build.

---

## 16:00–19:00 | Why software can change the display business

### Slide 14: The design-in flywheel

[Show one circular flow: customer idea, Studio project, EDT board profile, production display, next product.]

Today, a customer may compare several displays through a specification table.

Price matters.

Resolution matters.

Availability matters.

But the customer still has to build the product.

Studio lets EDT enter one step earlier.

We can help the customer turn the product idea into a working interface.

The interface can use an EDT board profile.

The customer can validate the experience.

The engineering team can continue toward production.

If that product succeeds, the customer orders display modules.

Later, the customer needs another size.

Another language.

Another machine.

Another generation.

The project, knowledge, and support relationship can continue.

That is the flywheel.

Studio helps start the design.

The design can pull EDT hardware.

Production creates repeat orders.

The next product can begin from a trusted workflow.

[Pause.]

We must prove each step with real customer data.

But the strategic logic is clear.

We are connecting software adoption to hardware design-in.

### Slide 15: A common operating model

The flywheel also changes how EDT scales across regions.

A subsidiary can show the same product story.

A distributor can use a prepared Customer Demo.

An FAE can begin from a board profile and a known example.

Product teams can see the questions that appear again and again.

This gives EDT a common way to learn.

Which screens do customers ask for?

Which protocols block adoption?

Which boards reach production?

Which services customers will pay for?

The software becomes a working connection between the customer, the channel, the FAE, and the display business.

The value depends on disciplined execution.

We need clear ownership.

We need training.

We need measurable funnels.

And we need commercial terms that reward the right behavior.

---

## 19:00–23:30 | Three revenue engines

### Slide 16: Engine A, production display programs

The largest engine is familiar to EDT.

Production hardware.

Studio can help create more qualified evaluations.

It can help the customer reach a working concept earlier.

It can give the FAE a repeatable path from Demo to board validation.

The commercial goal is an EDT display nomination inside a real product.

When that product reaches production, EDT earns revenue from repeated module shipments.

When the customer creates a variant or another generation, the relationship can continue.

For the model, we use one clear assumption:

Eighty active production programs.

An average of two million US dollars in annual display revenue per program.

That equals one hundred sixty million US dollars each year. //

This assumption is unproven.

It requires a qualified pipeline, conversion data, supply capacity, acceptable margin, and long program life.

We must measure all of them.

### Slide 17: Engine B, AI and enterprise services

The second engine is paid software and service value.

The base Studio offer may support the hardware strategy.

Large teams may still pay for capabilities that reduce operational risk.

For example:

Managed AI usage.

Enterprise support.

Training.

Governance.

Approved private deployment.

The exact offer and price require Product, Security, Legal, Finance, and channel approval.

For the scenario, we use two thousand paid enterprise teams.

Each team produces an average of ten thousand US dollars in annual revenue.

That equals twenty million US dollars each year. //

The important test is willingness to pay.

We need to know which service solves a serious problem.

We need to know the AI cost, the support cost, and the renewal rate.

### Slide 18: Engine C, strategic agreements

The third engine is selective.

Strategic OEM and ecosystem agreements.

A large equipment maker may want a deeper platform relationship.

An MCU or SoC vendor may want a supported integration.

An HMI partner may want a defined licensing arrangement.

Each agreement needs clear IP rights, support obligations, and channel rules.

For the scenario, we use ten strategic agreements.

The average annual value is two million US dollars.

That adds another twenty million US dollars each year. //

Ten is a small number.

But each agreement is difficult.

We need executive sponsorship, strong technical fit, and contracts that protect EDT's hardware business.

---

## 23:30–26:00 | The US$200M reveal

### Slide 19: US$200M

[Screen goes black. Reveal only “US$200M”. Stay silent for three seconds.]

**Here is the North Star.** //

**A repeatable US$200 million annual revenue engine.** //

[Hold. Then reveal the qualification in smaller text.]

This is a scenario model.

It is not approved guidance.

It is not a promise to investors.

It is not two hundred million dollars of software ARR.

It is a transparent equation that tells us what must become true.

[Reveal the three lines one at a time.]

Eighty active production programs, at two million dollars per year.

One hundred sixty million dollars.

Two thousand paid enterprise teams, at ten thousand dollars per year.

Twenty million dollars.

Ten strategic agreements, at two million dollars per year.

Twenty million dollars.

[Reveal total.]

One hundred sixty.

Plus twenty.

Plus twenty.

Two hundred million US dollars in annual run-rate. //

Every line of the model can be tested.

That is its value.

If the average hardware program is smaller, we need more programs.

If service conversion is lower, we need a better offer or a different target.

If strategic agreements create channel conflict, we stop or redesign that engine.

The number gives us a destination.

The assumptions give us a management system.

### Slide 20: Market scale

Let us place the number in context.

Grand View Research projects a global HMI market of eleven point six billion US dollars in 2030.

Two hundred million dollars is about one point seven percent of that broad estimate.

MarketsandMarkets also projects rapid growth in AI for manufacturing.

These are third-party market estimates.

They show that the surrounding markets are large.

They do not prove EDT's market share.

They do not prove our timing.

Customer evidence must do that work.

---

## 26:00–28:30 | What we must prove

### Slide 21: Five validation gates

[Show five gates as a simple sequence. Keep the detailed numbers in speaker notes.]

First, demand.

We need target customers to commit to specific evaluations.

General interest is not enough.

Second, conversion.

We need to measure how many Studio evaluations become qualified design-ins and production programs.

Third, economics.

We need real hardware revenue, margin, AI cost, support cost, and sales-cycle data.

We must remove double counting between the three engines.

Fourth, repeatability.

We need repeat orders, renewals, variants, and later product generations.

Fifth, scale.

We need trained teams, secure operations, supply, quality, and support capacity across regions.

[Pause.]

Each gate needs an owner.

Each gate needs a metric.

Each gate needs a date.

### Slide 22: The next 90 days

Here is a practical first step.

Choose a focused group of target accounts across more than one region.

Document their current HMI workflow.

Give them a controlled Alpha or approved Beta evaluation.

Track the path from first Demo to technical validation.

Record the board, protocol, decision maker, next action, and commercial potential.

At the same time, define one paid enterprise offer and test willingness to pay.

Then select a small number of strategic partners for deeper discovery.

After ninety days, management should see evidence.

How many evaluations started?

How many reached board validation?

What blocked progress?

What did customers value?

What would they pay for?

Which programs can reach production?

That evidence will tell us whether to increase investment, change the model, or stop a weak assumption.

This is how ambition becomes an operating plan.

---

## 28:30–30:00 | Closing

### Slide 23: The opportunity

[Return to the opening HMI screen.]

Let us return to this screen.

At the beginning, it represented a difficult chain of handoffs.

Now it represents a different customer relationship.

The customer brings an idea.

EDT helps make the idea visible.

Studio connects the interface, behavior, device data, and supported hardware.

The customer can validate earlier.

EDT can compete for the production display program.

And the next product can begin from work the customer already trusts.

[Pause. Move to center.]

Chapter One showed what EDT HMI Studio can do today.

Chapter Two showed the business system we can test.

The North Star is a repeatable US$200 million annual revenue engine.

The number remains a scenario until customer evidence and company approval support it.

Our next step is concrete.

Choose the accounts.

Run the evaluations.

Measure the conversions.

Earn the right to scale.

[Look across the room. Slow down.]

EDT already knows how to build the display.

EDT HMI Studio helps us win the work around that display and carry it into the next product.

That is the opportunity.

Thank you. //

[Hold for two seconds. Then move to the Q&A position.]

---

## If the host immediately opens Q&A

> Thank you. I am ready for your questions. I will separate what the current product supports, what we are validating, and what still requires company approval.

## If time is cut to 20 minutes

Keep Slides 1, 3, 5, 6, 11, 12, 14, 16, 19, 21, and 23. Use only the first paragraph of each revenue engine. Never remove the US$200M qualification or the current-release boundary.

## If time is cut to 10 minutes

Use [05_PITCH_5_MINUTES.md](05_PITCH_5_MINUTES.md) for Chapter 1, then deliver the equation and validation gates from this script. End with the original closing.
