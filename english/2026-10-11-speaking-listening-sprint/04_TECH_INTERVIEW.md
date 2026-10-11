# 軟體工程師與工程經理面試口說

面試回答先做到：答對題意、說明自己的行動、給理由、能處理追問。以下英文採短句方便初學者起步；所有經歷、責任與結果必須換成自己的事實。把答案背熟後，還要練改問法和改條件。

Microsoft 的官方技術面試指引要求先釐清問題、提出計畫，並注意程式與測試；Amazon 提供 coding、system design 與行為題準備資料。這支持把相關互動納入練習，但不代表所有美國科技公司都有相同題型。[Microsoft](https://careers.microsoft.com/v2/global/en/hiring-tips/technical-interviewing)、[Amazon](https://www.amazon.jobs/content/en/how-we-hire/interview-prep/software-development-topics)。

## 職位不同要證明的事情

| 軟體工程師 | 工程經理 |
| --- | --- |
| 我理解需求與限制 | 我理解團隊目標、影響與限制 |
| 我能提出並實作合理解法 | 我能作決策、處理風險並推動交付 |
| 我能解釋複雜度、測試與取捨 | 我能說明帶人、授權、回饋與協作 |
| 我能區分個人貢獻與團隊成果 | 我能區分管理行動與團隊成果 |

工程經理的實際考查依職缺而異，可能包含技術深入討論。不要因為投經理就跳過技術準備。沒有管理經驗時，以實際協調或 mentoring 經驗作答，並說明範圍。

## 三十秒到一分鐘自介

軟體工程師：

> I am a software engineer with experience in [area].
> I mainly use [language or tools].
> In my last project, I was responsible for [your part].
> I helped [true result].
> I am interested in this role because [reason tied to the job].

中文：我是有某領域經驗的工程師，主要用哪些工具，上個專案負責哪部分，協助達成什麼成果，為何對這個職位有興趣。

工程經理：

> I am an engineering manager working on [area].
> I lead [actual team size or scope].
> My main responsibility is [delivery, people development, or other real responsibility].
> Recently, I helped the team [true result].
> I am interested in this role because [reason tied to the job].

中文：我的管理領域、實際管理範圍、主要責任、近期團隊成果，以及職缺吸引我的原因。若不是現任經理，第一句改成實際身分。

**追問：** What was your exact role? / What are you working on now? / Why this team? 每一題都只回答該題，不要重新背整段自介。

## 真實專案的六個欄位

先用中文填，再改成簡單英文：

| 欄位 | 你要填的內容 | 英文起手句 |
| --- | --- | --- |
| 問題 | 使用者或團隊遇到什麼 | The main problem was… |
| 目標 | 想改善什麼 | Our goal was… |
| 我的責任 | 自己負責哪些事 | I was responsible for… |
| 行動 | 兩至三個具體動作 | First, I… Then, I… |
| 結果 | 可證明的變化 | As a result,… |
| 學習 | 下次怎麼改進 | Next time, I would… |

結果可用交付、缺陷、使用者回饋等真實證據，不一定要有漂亮百分比。不記得精確數字，可以說 **I don't remember the exact number. I can explain how we measured it.**。估計值需說是估計，不要把虛構數字當證據。

## 行為題用四步講故事

STAR 代表 Situation 情境、Task 任務、Action 行動、Result 結果。它只是組織答案的方法，不要對面試官念這四個標籤。初學者先練 60 至 90 秒，分配上把較多時間留給自己的行動。

**虛構工程師示範，只用來練句型：**

> The service was slow after a release.
> I needed to find the cause and fix it.
> I checked the logs and found a slow query.
> I tested a change in staging and asked a teammate to review it.
> After the change, the service became faster.
> Next time, I would add a performance test before the release.

中文：發布後服務變慢；我的任務是找原因；查紀錄找到慢查詢；先測試並請同事審查；變更後改善；下次加效能測試。

**虛構工程經理示範，只用來練句型：**

> We had a tight deadline, and the team could not finish the full scope.
> I needed to agree on a realistic plan with the product team.
> I asked the engineers to estimate the work and explain the risks.
> I proposed a smaller first release and explained what we would delay.
> We agreed on the priorities and delivered the first release on time.
> Next time, I would discuss the scope earlier.

中文：時程緊且範圍做不完；我需要協調可行計畫；請工程師評估工作和風險；提出縮小第一版並說明延後項目；共同定好優先順序並交付；下次提早討論範圍。

示範裡的「服務改善」「準時交付」都是虛構故事內容，只有自己確實做到才可用於面試。

### 七天先準備兩個故事

- 工程師：一次解決問題、一次協作或失敗。
- 工程經理：一次交付或重大決策、一次衝突或帶人。

延伸到 14 天加上失敗與跨團隊故事；30 天再加主動改善、不確定情境下的決策。每個故事最後只留三個提示詞，避免現場依賴全文。

### 每個故事都要能回答的追問

1. What did **you** do? 你本人做了什麼？
2. Why did you choose that approach? 為何用這個方法？
3. What other options did you consider? 你考慮過哪些替代方案？
4. How did you measure the result? 結果怎麼衡量？
5. What would you do differently? 如果重做會改什麼？
6. What happened when someone disagreed? 有人不同意時怎麼辦？

## 工程師 coding 的七個溝通步驟

| 步驟 | 可先用的英文 | 中文 |
| --- | --- | --- |
| 重述目標 | Let me confirm the goal. We need to find duplicate numbers, right? | 確認目標是找重複數字 |
| 釐清限制 | Can the input be empty? Can I change the input? | 輸入可空嗎？能改輸入嗎？ |
| 舉例 | For example, [1, 2, 1] should return true. | 用小例子確認輸出 |
| 解釋方法 | I will use a set to track the numbers I have seen. | 用集合記錄看過的數字 |
| 說出理由 | This lets me check whether I have seen a number before. | 解釋為何能解題 |
| 說明代價 | With a hash set, I expect linear time on average and linear extra space. | 說明常見雜湊集合假設下平均時間與額外空間 |
| 測試與修改 | I will test an empty list, no duplicates, and a duplicate at the end. | 測邊界與一般情況 |

英文方法與複雜度要配合實際實作、資料結構與假設。上面的例子是練習解題溝通，並沒有保證你會寫程式或涵蓋完整技術準備。

### 一段完整短回答

> I will use a set. I will check each number. If the number is already in the set, I will return true. Otherwise, I will add it to the set. If I finish the loop, I will return false. I will also test an empty list.

中文：用集合，每次檢查數字，出現過就回傳 true，否則加入；走完整個迴圈就回傳 false；也測空清單。

先請伙伴改成 **Return all duplicate values.**，再改成 **Do not use extra memory.**。這兩種變更可能需要不同解法，不能繼續照背原答案。先說：**That changes the requirements. Let me think about the new constraint.**（需求變了，我想一下新限制。）

### 卡住時仍能溝通

> I have a simple solution first. Then I will look for a better one.
>
> 我先提出簡單解法，再找更好的。

> I think this step is wrong. Let me check it with a small example.
>
> 我覺得這一步有問題，讓我用小例子檢查。

> I don't know the best solution yet. May I explain what I have tried?
>
> 我還不知道最佳解，可以先說我試過的方法嗎？

避免寫程式全程沉默，也不用逐字解說每個符號。每換一個步驟，說目標、理由或發現即可。

## 系統設計先會說五件事

工程師依職級和職缺練習；經理也可用來練技術決策的說明。

1. **需求：** What are the main features? 主要功能是什麼？
2. **規模與可靠性：** How many users do we expect? What availability do we need? 預期使用者多少？可用性要求是什麼？
3. **資料流程：** The client sends a request to the API. The service reads from the database. 客戶端到 API、服務再讀資料庫。
4. **瓶頸：** The database may become a bottleneck. 資料庫可能是瓶頸。
5. **取捨：** A cache can reduce database reads, but the data may be stale. 快取能減少讀取，但資料可能過期。

這五句是開始討論的骨架。面試深度可能涉及一致性、分區、可用性、容量估算等；若不熟悉，須另補技術內容。遇到不知道的需求就先問，不要假造數字來撐住答案。

## 工程經理的五組短回答

以下是「我會怎麼做」的情境回答。若題目問過去經歷，必須改成真實故事與過去式，不能只講理想做法。

### 專案延遲

**問題：** What would you do if your team missed a deadline?

> First, I would check the remaining work and the impact.
> I would discuss the options with the team.
> We could reduce the scope or change the date.
> I would explain the trade-off to the stakeholders and agree on a new plan.

中文：確認剩餘工作與影響，討論減範圍或延時程，說明取捨並定新計畫。

**追問：** What if the date cannot change?（日期不能改呢？）先問最低可接受範圍與風險，不能預設只要加班就能解決。

### 團隊衝突

**問題：** Tell me about a disagreement in your team.

> Two people disagreed about [real issue].
> I talked with each person to understand the reasons.
> I brought the discussion back to [shared goal].
> We compared [options or evidence] and agreed on [true decision].

中文：具體分歧、了解理由、回到共同目標、比較選項並作決定。

**追問：** What if they still disagreed?（仍不同意呢？）說明實際決策權、如何記錄取捨、何時重新檢視，不能只答「我會溝通」。

### 回饋與績效

**問題：** How would you help someone who is not meeting expectations?

> I would explain the gap with specific examples.
> I would ask what is making the work difficult.
> We would agree on clear goals, support, and a review date.
> I would follow up and give direct feedback.

中文：用具體例子說差距、了解困難、定目標與支援、安排追蹤。若問實際管理經驗，補自己做過的回饋與結果。

**追問：** What if there is no improvement?（沒有改善呢？）依實際公司制度與你的角色說明後續處理；不要編造已做過的處置。

### 優先順序

**問題：** How do you prioritize work with limited resources?

> I compare customer impact, risk, effort, and urgency.
> I ask the team to explain the dependencies.
> I make the trade-offs clear and agree on the priority with the relevant teams.
> I review the plan when the situation changes.

中文：比較客戶影響、風險、成本、急迫性與依賴，確認取捨並隨變更調整。

**追問：** What would you stop doing?（會停止做什麼？）必須說出具體減量項目，不能所有事情都稱優先。

### 重大事故

**問題：** How would you lead during a production incident?

> I would make sure we have a clear incident lead and owners.
> The team would focus on reducing customer impact first.
> I would keep stakeholders updated and remove blockers.
> After recovery, we would review the cause and agree on follow-up actions.

中文：確認事故主責與分工，先降低客戶影響，更新狀態並排除阻礙，恢復後檢討與追蹤。

**追問：** What did you personally decide?（你本人決定什麼？）用真實事件說明你的決策，別把所有排障動作都說成自己做。

## 常見問題的三種問法

| 想問的資訊 | 可能聽到的問法 |
| --- | --- |
| 自介 | Tell me about yourself. / Walk me through your background. / What do you do? |
| 個人貢獻 | What was your role? / What did you own? / What did you personally do? |
| 原因 | Why this approach? / What drove your decision? / Why not the other option? |
| 失敗 | Tell me about a failure. / What went wrong? / What did you learn? |
| 影響 | What changed? / How did you measure success? / What was the outcome? |
| 帶人 | How do you coach people? / How do you give feedback? / How did you help someone grow? |

伙伴每次從同列隨機選一句，不先提示中文。你要辨認意圖，而不是逐字翻譯完才開始想答案。

## 面試尾聲問對方

- **What would success look like in the first six months?** 前六個月怎樣算成功？
- **What are the biggest challenges for this team?** 團隊最大的挑戰是什麼？
- 工程師：**How does the team review and test code?** 如何審查與測試程式？
- 經理：**What is the scope of this manager role?** 管理範圍為何？
- **What are the next steps in the interview process?** 接下來的面試步驟？

聽完再用一句話確認：**So the main challenge is [what you heard], correct?**，練習有來有往。
