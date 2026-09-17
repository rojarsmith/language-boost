# ChatGPT Voice keynote rehearsal

## What you need

You do **not** need an API key for ChatGPT Voice. ChatGPT subscriptions and API billing are separate products. Voice availability and limits depend on your plan, workspace settings, region, and app version.

Official references:

- [ChatGPT Voice](https://help.openai.com/en/articles/20001274)
- [ChatGPT Work and Codex](https://help.openai.com/en/articles/20001275/)
- [ChatGPT and API billing are separate](https://help.openai.com/en/articles/9039756-managing-billing-for-chatgpt-and-the-api-platform)

The current official instructions allow Voice inside a chat. You do not have to start a separate empty chat before every session. In the desktop app, choose Work or Codex, open this local folder when needed, select the Voice control, allow microphone access, and begin speaking. Voice uses the files, tools, and permissions available in the selected experience.

## Folder and source files

Open:

C:\my\build\github\language-boost

Ask Voice to use these files:

- english/2026-09-14-edt-hmi-studio-keynote/00_PRODUCT_TRUTH.md
- english/2026-09-14-edt-hmi-studio-keynote/23_30_MINUTE_KEYNOTE_SCRIPT.md
- english/2026-09-14-edt-hmi-studio-keynote/24_USD_200M_REVENUE_MODEL.md
- english/2026-09-14-edt-hmi-studio-keynote/27_REVENUE_AND_EXECUTIVE_QA.md
- english/2026-09-14-edt-hmi-studio-keynote/30_CUE_CARDS.md

If Voice cannot access local files, attach the one file needed for that session or paste only the section being practiced.

## Master coach prompt

Say this in Traditional Chinese:

> 請先讀取產品事實表、30 分鐘逐字稿、US$200M 模型和提示卡。把我當英文口說完全初學者。你是嚴格但有耐心的 keynote 教練。主要練習使用英文，糾正使用繁體中文。一次只示範一句、給一個動作，或問一題。說完一定等我。我說 “finished” 以前不要插話。每輪最多修正一個最影響理解的發音問題，以及一個內容或結構問題。不要替我加高級字。不要發明產品功能、客戶、價格或財務承諾。US$200M 一律說成 scenario model and North Star, not approved guidance。若答案不在教材中，教我安全地說要查證。每一輪都要讓我立刻重說一次。

Then say:

> Start with cue card one. Read the English once slowly and once at stage speed. Then wait for me.

## Daily 30-minute session

### 0–3 minutes: mouth warm-up

> Give me five words from today's section. Say each word, then the full sentence. Wait for me to repeat twice.

Focus on:

- embedded
- interface
- protocol
- emulator
- evaluation
- revenue
- annual
- assumption
- strategic
- repeatable

### 3–10 minutes: echo

> Read one sentence only. First slowly, then at stage speed. Wait for me to repeat. Correct only the biggest clarity problem. Make me repeat the same sentence again.

Do not move on until the sentence is understandable three times in a row.

### 10–17 minutes: recall

> Give me the slide title and the first three words. I will finish the section without seeing the script. Wait until I say “finished.”

If you stop for more than three seconds, ask for only one keyword:

> Give me one keyword. Do not show me the sentence.

### 17–24 minutes: stage run

> Time this section. Do not interrupt. Mark every pause longer than three seconds and every product claim that conflicts with the fact sheet. Give feedback only after I say “finished.”

Run standing up. Use the clicker or a pen. Look at a point above the screen at every bold anchor line.

### 24–28 minutes: one executive question

> Ask one skeptical executive question about the section. Wait for “finished.” Score directness and fact safety. Then make me answer again in no more than 25 seconds.

### 28–30 minutes: record

Ask:

> Give me one strength, one priority correction, and scores from zero to two for facts, clarity, pronunciation, pace, pauses, and directness. Use Traditional Chinese.

Write the result into practice_log.csv.

## Six rehearsal phases

### Phase 1: sound and control

Goal:

- Deliver the opening and product definition without reading.
- Use pauses instead of “uh” or “um.”
- Finish every sentence clearly.

Practice:

- Cue cards 1 to 3
- Opening through Slide 4
- Rescue phrases

Pass condition:

- Two clean runs with no stop longer than three seconds.

### Phase 2: Chapter 1

Goal:

- Explain the problem, product, AI, workflow, Demo, and current scope.
- Keep Alpha, current source, and roadmap separate.

Practice:

- Cue cards 1 to 7
- Slides 1 to 12
- One Demo failure drill each day

Pass condition:

- Chapter 1 in 14 to 16 minutes.
- No unsupported CAN, Ethernet, Beta, privacy, or quality claim.

### Phase 3: Chapter 2

Goal:

- Explain the flywheel and three engines.
- Say every number with the correct unit.
- Qualify US$200M immediately.

Practice:

- Cue cards 8 to 11
- Slides 13 to 22
- Equation from memory

Pass condition:

- Say the full equation correctly five times.
- Say “This is a scenario model, not approved guidance” immediately after the reveal.

### Phase 4: executive Q&A

Goal:

- Answer the first sentence directly.
- Keep each answer under 25 seconds.
- Ask one useful follow-up when needed.

Practice:

- Revenue and executive Q&A
- Distributor Q&A
- Technical Q&A
- Unknown-answer recovery

Pass condition:

- Ten mixed questions with no invented commitment.

### Phase 5: full runs

Goal:

- Complete 30 minutes with slides and Demo.
- Keep energy without rushing.
- Recover without restarting.

Schedule:

- Run A: script visible
- Run B: cue cards only
- Run C: recorded, with two interruptions
- Run D: in the actual room or a similar space

Pass condition:

- Two runs between 28:30 and 30:30.
- Opening, reveal, caveat, and closing delivered from memory.

### Phase 6: pressure and recovery

Goal:

- Stay calm when a slide, Demo, word, or question fails.

Drills:

- Skip one slide and continue.
- Lose the Demo network and switch to a screenshot.
- Receive a question before Chapter 2.
- Correct a wrong number out loud.
- Ask for a question to be repeated.
- Promise a verified follow-up with a date.

Pass condition:

- Recover within ten seconds and return to the next anchor.

## Section prompts

### Opening

> Coach Slides 1 and 2. Make me use silence and eye contact. Stop me if I rush the words “moment of truth” or “US$200 million.” Do not let me continue until the financial caveat is clear.

### Product reveal

> Coach Slides 3 and 4. I must pause for two seconds after “This is EDT HMI Studio.” Help me explain the product in simple words, not a feature list.

### AI Demo

> Coach Slides 5 to 7. Act as the stage manager. Give one click instruction at a time. If I speak while the AI is processing, stop the run and restart only that step. Then simulate a slow network and make me use the fallback line.

Fallback line:

> I have the completed result ready. Let me show you the same change without making you wait.

### Current scope

> Coach Slide 12. Ask me what is public, what is in the current source, and what remains roadmap work. Stop me if I announce Beta early or present CAN or Ethernet as production support.

### Revenue reveal

> Coach Slides 16 to 20. Make me say every number slowly. After the US$200M reveal, listen for the immediate scenario qualification. Ask me to explain the difference between repeatable annual revenue and software ARR.

### Closing

> Coach Slide 23. Remove the script. Give me only the words “screen, relationship, North Star, next step.” Make me finish in 90 seconds and hold eye contact on the final three sentences.

## Full-run prompt

> Host a complete 30-minute rehearsal using the script and storyboard. Announce each slide number but do not read my lines. Start a timer when I say “Good morning.” Do not interrupt unless I make an unsafe product or financial claim. At Slide 6, give me a Demo cue. At Slide 19, check the US$200M caveat. After Slide 23, ask five executive questions, one at a time. At the end, report total time, the longest unplanned pause, every factual risk, three sentences that were hard to understand, and only one priority for tomorrow.

## Executive-pressure prompt

> Act as a skeptical overseas subsidiary general manager. Ask one question at a time about customer value, product status, board support, AI privacy, channel conflict, pricing, the US$200M assumptions, and the first 90 days. Wait until I say “finished.” Require a direct first sentence. If the answer needs approval, make me say that clearly and give a follow-up date.

## Voice control phrases

Voice speaks too fast:

> Slower, please. One sentence only.

Voice interrupts:

> Wait until I say “finished.”

You need another example:

> Give me one simpler example. Then ask me again.

You want stage speed:

> Say the same sentence at 95 words per minute.

You need a Chinese correction:

> Explain the biggest problem in Traditional Chinese. Then let me try again in English.

You want no long explanation:

> Stop there. Give me only the corrected sentence.

## Scorecard

Score each item from 0 to 2:

| Item | 0 | 1 | 2 |
|---|---|---|---|
| Product facts | Unsafe or incorrect | Correct with prompting | Correct without prompting |
| Financial boundary | Sounds like guidance | Caveat comes late | Caveat is immediate and clear |
| Clarity | Often hard to understand | Mostly understandable | Clear on first hearing |
| Pronunciation | Key words change meaning | Some unclear words | Key words consistently clear |
| Pace | Rushed or many long stops | Uneven | Controlled stage pace |
| Pauses | Filled with sounds | Some intentional pauses | Pauses support the reveal |
| Directness | Background before answer | Answer appears late | First sentence answers |
| Recovery | Restarts or freezes | Recovers with help | Recovers within ten seconds |

Target before the event:

- No zero in any category
- At least 13 out of 16
- Product facts and financial boundary must both score 2

## Data and privacy reminder

Do not use confidential customer names, contract terms, unreleased financial results, API secrets, or personal data in a personal Voice rehearsal unless EDT policy permits it. The official Voice documentation explains transcript, clip-retention, and training controls. Review Settings → Data Controls and company policy before using sensitive material.

Voice transcripts may not be verbatim. Use your own stage recording when exact wording, timing, and pronunciation evidence matter.

## When Voice is unavailable

1. Use the WAV files in audio for echo practice.
2. Record the section on a phone.
3. Score it with the table above.
4. Mark one sentence for the next Voice session.
5. Continue the plan. Do not lose a practice day because a service is unavailable.
