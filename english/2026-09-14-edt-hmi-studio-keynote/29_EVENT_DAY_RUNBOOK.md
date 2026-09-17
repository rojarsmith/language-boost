# Event-day runbook

## Roles

Assign names before the event:

| Role | Responsibility | Name |
|---|---|---|
| Speaker | Delivers keynote and first answer |  |
| Demo operator | Runs Studio and switches to fallback |  |
| Technical responder | Handles board, protocol, build, and performance detail |  |
| Commercial responder | Handles pricing, channel, account, and support policy |  |
| Finance／IR responder | Handles every revenue, target, market, and disclosure question |  |
| Timekeeper | Gives 15, 25, and 29 minute signals |  |
| Question recorder | Captures owner and follow-up date |  |

One person may hold more than one role, but every responsibility must have an owner.

## T-minus 7 days

- Freeze the story and slide order.
- Complete the external-claim approval gate.
- Select Alpha or Beta wording from the official page.
- Test the Demo on the exact event computer.
- Save the approved installer, project, Customer Demo, screenshots, video fallback, fonts, and deck locally.
- Remove customer names, tokens, passwords, browser history, notifications, and unrelated files.
- Rehearse with the technical and Finance／IR responders.
- Run one complete 30-minute rehearsal with Q&A.

## T-minus 24 hours

### Public status

- Open https://edthmistudio.bitdove.net/
- Record page title, version, release date, audience restriction, roadmap, and download terms.
- Capture a fresh screenshot for Slide 12.
- If the page still says Alpha, keep the Alpha line.
- If the page says Beta, obtain final Product／QA／Legal approval before changing the deck.

### Source and Demo

- Confirm the exact source commit and package used for the Demo.
- Build and open the prepared project.
- Test the AI prompt three times with the selected provider.
- Measure normal and worst-case response time.
- Test one-step undo.
- Test Emulator or Customer Demo interaction.
- Disconnect the network and verify the fallback.

### Financial controls

- Confirm whether Slides 16 to 20 are approved for this audience.
- Confirm units, annual basis, currency, rounding, and scenario labels.
- Reconcile speaker notes with the approved model.
- Remove any unapproved year, forecast, customer count, margin, or pipeline claim.

## T-minus 3 hours

- Restart the event computer.
- Disable system and app notifications.
- Connect power and the presentation display.
- Set display scaling and resolution.
- Confirm audio output if the Demo uses sound.
- Open the deck, Studio project, Customer Demo, fallback video, and approved public-page screenshot.
- Keep only event applications visible.
- Test clicker, microphone, pointer, and confidence monitor.
- Check the stage clock.
- Put printed cue cards and the one-page claim sheet at the lectern.

## T-minus 30 minutes

- Run Slides 1, 3, 6, 11, 19, and 23.
- Speak the opening once.
- Speak the US$200M reveal and qualification once.
- Speak the closing once.
- Drink water.
- Stop editing slides.
- Confirm the Demo operator's failure signal and fallback key.
- Confirm the timekeeper's signals.

## Opening checklist

- [ ] Stand still before the first sentence
- [ ] Look at the audience
- [ ] Say “Good morning”
- [ ] Pause
- [ ] Do not explain the agenda before the opening image
- [ ] Qualify US$200M in the opening

## Live Demo sequence

1. Open the prepared project.
2. Show the current screen for five seconds.
3. Read the tested edit prompt.
4. Submit.
5. Stay silent while it processes.
6. Apply the change.
7. Show the result.
8. Undo once.
9. Move to Emulator or Customer Demo.
10. Change one simulated value and make one HMI write.

Maximum planned Demo time: four minutes.

## Demo failure ladder

### Level 1: slow response

After the rehearsed limit:

> I have the completed result ready. Let me show you the same change without making you wait.

Open the prepared after-state.

### Level 2: provider or network failure

> The AI service is not responding on this network. The editor result is saved locally, so I will continue with the prepared project.

Open the prepared project. Do not troubleshoot on stage.

### Level 3: Emulator failure

> I have a recorded run from this exact project. Let me show you the interaction.

Play the local fallback video or use the self-contained Customer Demo.

### Level 4: display or computer failure

Continue from cue cards:

> I will describe the proof in one sentence. The generated C runs with real LVGL, reads a simulated device value, and sends a write back through the same project model.

Move to the next business slide when the screen returns.

## Time recovery

| Time signal | Action |
|---|---|
| 15 minutes and still before Slide 12 | Finish the current sentence, use the scope summary, move to Chapter 2 |
| 25 minutes and before Slide 21 | Show the US$200M equation, qualification, and five gates; skip market detail |
| 29 minutes | Move directly to Slide 23 and use the 60-second closing |

Never cut:

- Public release boundary
- US$200M scenario qualification
- Final validation ask

## Q&A opening

> Thank you. I am ready for your questions. I will separate current product facts, validation assumptions, and items that still require company approval.

## Q&A control

### Product fact

> Today, the current build supports [fact]. For this board or release, [boundary]. The next proof is [validation].

### Financial assumption

> That number is an assumption in the scenario, not approved guidance. Finance and [owner] need [evidence] before we can use it as a plan.

### Unapproved commercial term

> I do not want to give you an unofficial answer. [Owner] will confirm the approved terms, and we will follow up by [date].

### Long or unclear question

> Let me make sure I understood. Are you asking about the product capability or the revenue model?

### Host needs a short answer

> The short answer is [yes / no / not yet / it depends]. The current boundary is [one sentence].

## Question log

| Question | Audience member | Verbal answer | Owner | Due date | Written follow-up sent |
|---|---|---|---|---|---|
|  |  |  |  |  |  |
|  |  |  |  |  |  |
|  |  |  |  |  |  |

## After the session

Within one hour:

- Save the question log.
- Mark every answer that may require correction.
- Tell Finance／IR／Legal immediately if an unapproved financial statement was spoken.
- Assign each follow-up to an owner and date.
- Save the final deck and script version used on stage.

Within one business day:

- Send approved answers and promised material.
- Correct any factual error directly and clearly.
- Record Demo failures, difficult questions, timing, and audience reactions.
- Update product, sales, and training backlogs with evidence.

## 60-second emergency closing

> EDT HMI Studio connects visual design, AI-assisted editing, device communication, generated-code validation, and supported EDT hardware. Our business North Star is a repeatable US$200 million annual revenue engine, presented today as a scenario, not approved guidance. The next step is to test the assumptions through controlled customer evaluations and measurable design-in conversion. EDT already knows how to build the display. Studio can help us win the work around it. Thank you.
