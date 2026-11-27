const mockQuestions = [
  {
    "id": "ma01",
    "mode": "L",
    "part": 2,
    "skill": "地點詢問",
    "material": "Where should the volunteers leave their coats?",
    "prompt": "Choose the best response.",
    "choices": [
      "Until five thirty.",
      "In the lockers downstairs.",
      "There are twelve volunteers."
    ],
    "right": 1,
    "why": "Where 問的是地點，應把外套放在樓下的置物櫃。"
  },
  {
    "id": "ma02",
    "mode": "L",
    "part": 2,
    "skill": "間接回應",
    "material": "Has the replacement scanner arrived yet?",
    "prompt": "Choose the best response.",
    "choices": [
      "It scans both sides.",
      "A replacement badge.",
      "The tracking page still says it is in transit."
    ],
    "right": 2,
    "why": "in transit 表示運送中，間接回答掃描器還沒到。"
  },
  {
    "id": "ma03",
    "mode": "L",
    "part": 3,
    "skill": "辨認原因",
    "material": "Could you put the samples on the back shelf?||I would, but the paint there is still wet. I can put them on the front table for now.",
    "prompt": "Why does the second speaker suggest a different location?",
    "choices": [
      "The shelf was recently painted.",
      "The samples are too heavy.",
      "The front table is wet.",
      "The shelf is already full."
    ],
    "right": 0,
    "why": "still wet 指架上的油漆還沒乾，因此暫時改放前桌。"
  },
  {
    "id": "ma04",
    "mode": "L",
    "part": 3,
    "skill": "下一步行動",
    "material": "Do you have the final guest list?||Almost. Two guests have not confirmed.||Then send me the names you have, and we can add the others later.",
    "prompt": "What is the second speaker asked to do first?",
    "choices": [
      "Cancel two invitations.",
      "Call every guest.",
      "Wait for both replies.",
      "Share the current list."
    ],
    "right": 3,
    "why": "send me the names you have 是先寄現有名單，剩下的名字之後再補。"
  },
  {
    "id": "ma05",
    "mode": "L",
    "part": 4,
    "skill": "公告細節",
    "material": "Attention, passengers. The train on platform seven is for Riverside. If you are traveling to West Hill, stay on platform five. Your train will arrive in ten minutes.",
    "prompt": "Where should West Hill passengers wait?",
    "choices": [
      "Platform ten.",
      "Platform five.",
      "Platform seven.",
      "At Riverside."
    ],
    "right": 1,
    "why": "seven 是往 Riverside 的月台，往 West Hill 的乘客要留在五號月台。"
  },
  {
    "id": "ma06",
    "mode": "L",
    "part": 4,
    "skill": "例外條件",
    "material": "During the library renovation, members can return books through the side gate. Please bring borrowed tablets to the service desk, however, so that staff can check the equipment.",
    "prompt": "Which items must go to the service desk?",
    "choices": [
      "All new books.",
      "Membership cards.",
      "Borrowed tablets.",
      "Renovation tools."
    ],
    "right": 2,
    "why": "however 引出例外。平板要交到服務櫃台，讓工作人員檢查。"
  },
  {
    "id": "ma07",
    "mode": "R",
    "part": 5,
    "skill": "主動詞時態",
    "material": "",
    "prompt": "The technician _____ the broken switch last Thursday.",
    "choices": [
      "replaced",
      "replacement",
      "replaces",
      "replacing"
    ],
    "right": 0,
    "why": "last Thursday 指過去的明確時間，動詞要用過去式 replaced。"
  },
  {
    "id": "ma08",
    "mode": "R",
    "part": 5,
    "skill": "詞性選擇",
    "material": "",
    "prompt": "Please read the instructions _____ before assembling the stand.",
    "choices": [
      "care",
      "careful",
      "carefulness",
      "carefully"
    ],
    "right": 3,
    "why": "修飾 read 這個動作要用副詞 carefully。"
  },
  {
    "id": "ma09",
    "mode": "R",
    "part": 6,
    "skill": "篇章銜接",
    "material": "The roof garden will be closed this weekend for repairs. _____. Normal access will resume on Monday.",
    "prompt": "Which sentence best fills the gap?",
    "choices": [
      "The plants arrived yesterday.",
      "Please use the ground-floor courtyard during this period.",
      "The garden opened ten years ago.",
      "The roof has a fine view."
    ],
    "right": 1,
    "why": "this period 指屋頂關閉的週末。提供替代空間，才與前後的通知相連。"
  },
  {
    "id": "ma10",
    "mode": "R",
    "part": 6,
    "skill": "邏輯關係",
    "material": "Thank you for requesting a booth. We have received your application. _____, we still need a copy of your insurance certificate before we can confirm the booking.",
    "prompt": "Which word best fills the gap?",
    "choices": [
      "Therefore",
      "Similarly",
      "However",
      "Otherwise"
    ],
    "right": 2,
    "why": "已收到申請，但確認前仍缺文件，兩句是轉折關係。"
  },
  {
    "id": "ma11",
    "mode": "R",
    "part": 7,
    "skill": "單篇細節",
    "material": "Workshop reminder • Please bring a laptop. Power cables will be provided. The optional printed workbook costs $8; a digital copy is included with registration.",
    "prompt": "What can registered participants get without an extra charge?",
    "choices": [
      "A printed workbook.",
      "A laptop.",
      "A parking pass.",
      "A digital workbook."
    ],
    "right": 3,
    "why": "included with registration 表示電子版已含在報名費中。紙本另付八元。"
  },
  {
    "id": "ma12",
    "mode": "R",
    "part": 7,
    "skill": "文件整合",
    "material": "Policy • Express delivery is available only for in-stock items ordered before 2 p.m.\nOrder record • Placed 1:15 p.m. Item: desk lamp. Stock status: awaiting next shipment.",
    "prompt": "Why is this order ineligible for express delivery?",
    "choices": [
      "The lamp is currently unavailable.",
      "The order was placed too late.",
      "The order is too small.",
      "The address is missing."
    ],
    "right": 0,
    "why": "下單時間符合要求，但庫存狀態是等待下一批到貨，未符合 in-stock 條件。"
  },
  {
    "id": "mb01",
    "mode": "L",
    "part": 2,
    "skill": "時間詢問",
    "material": "When are the new uniforms being delivered?",
    "prompt": "Choose the best response.",
    "choices": [
      "The blue jackets.",
      "At the loading dock.",
      "Early next Wednesday."
    ],
    "right": 2,
    "why": "When 問時間。Early next Wednesday 表示下週三一早。"
  },
  {
    "id": "mb02",
    "mode": "L",
    "part": 2,
    "skill": "回應建議",
    "material": "Why don’t we move the training session online?",
    "prompt": "Choose the best response.",
    "choices": [
      "Good idea. I will send everyone a link.",
      "The line ends here.",
      "It moved very slowly."
    ],
    "right": 0,
    "why": "Why don’t we 是提出建議，寄連結是接受線上授課的合理回應。"
  },
  {
    "id": "mb03",
    "mode": "L",
    "part": 3,
    "skill": "修正資訊",
    "material": "I see the tour begins at the museum entrance.||That was the original plan. The guide will meet us at the fountain instead.",
    "prompt": "Where will the group meet the guide?",
    "choices": [
      "At the museum entrance.",
      "At the station.",
      "Inside the gallery.",
      "At the fountain."
    ],
    "right": 3,
    "why": "instead 之後才是確定的集合處，入口是原先安排。"
  },
  {
    "id": "mb04",
    "mode": "L",
    "part": 3,
    "skill": "推論意圖",
    "material": "Should I buy six more tickets for the afternoon show?||Let me check how many colleagues are still coming before you do that.",
    "prompt": "What does the second speaker want the first speaker to do?",
    "choices": [
      "Choose the morning show.",
      "Wait before purchasing tickets.",
      "Contact the theater immediately.",
      "Buy six tickets now."
    ],
    "right": 1,
    "why": "before you do that 表示先確認出席人數，再決定購票。"
  },
  {
    "id": "mb05",
    "mode": "L",
    "part": 4,
    "skill": "辨認對象",
    "material": "Welcome to the community kitchen. New volunteers should attend a safety talk in Room Three before collecting an apron. Returning volunteers may go straight to the preparation area.",
    "prompt": "Who should go to Room Three?",
    "choices": [
      "All kitchen staff.",
      "Returning volunteers.",
      "First-time volunteers.",
      "Apron suppliers."
    ],
    "right": 2,
    "why": "只有首次服務者要先聽安全講解。Returning volunteers 可直接到備料區。"
  },
  {
    "id": "mb06",
    "mode": "L",
    "part": 4,
    "skill": "承諾與條件",
    "material": "This is a message about your bicycle repair. The brakes are ready, but we need your approval before replacing the worn tire. Please call us by noon if you want to collect the bicycle today.",
    "prompt": "What does the shop need from the customer?",
    "choices": [
      "Permission to replace a tire.",
      "Payment for a new bicycle.",
      "A different pickup address.",
      "A receipt for the brakes."
    ],
    "right": 0,
    "why": "need your approval before replacing 指的是換輪胎前要取得同意。"
  },
  {
    "id": "mb07",
    "mode": "R",
    "part": 5,
    "skill": "介系詞",
    "material": "",
    "prompt": "The temporary entrance will remain open _____ the renovation.",
    "choices": [
      "among",
      "during",
      "onto",
      "along"
    ],
    "right": 1,
    "why": "during 加名詞片語，表示在整修期間。"
  },
  {
    "id": "mb08",
    "mode": "R",
    "part": 5,
    "skill": "被動語態",
    "material": "",
    "prompt": "All travel receipts must _____ with the expense form.",
    "choices": [
      "submit",
      "submitting",
      "submission",
      "be submitted"
    ],
    "right": 3,
    "why": "收據是被提交的文件，must 後面接 be submitted。"
  },
  {
    "id": "mb09",
    "mode": "R",
    "part": 6,
    "skill": "指涉對象",
    "material": "We are offering five travel grants to student presenters. _____ will cover the cost of one return train ticket. Applications close on Friday.",
    "prompt": "Which phrase best fills the gap?",
    "choices": [
      "Each grant",
      "Every train",
      "The deadline",
      "Each presenter’s ticket"
    ],
    "right": 0,
    "why": "前一句引入補助金，接著說明每份補助能支付一張來回車票。"
  },
  {
    "id": "mb10",
    "mode": "R",
    "part": 6,
    "skill": "順序關係",
    "material": "Open the booking page and choose a time slot. _____, enter your contact details. A confirmation will appear after you press Submit.",
    "prompt": "Which word best fills the gap?",
    "choices": [
      "Previously",
      "Instead",
      "Next",
      "Nevertheless"
    ],
    "right": 2,
    "why": "操作步驟依序為選時段、填資料、按送出，Next 表示下一步。"
  },
  {
    "id": "mb11",
    "mode": "R",
    "part": 7,
    "skill": "辨認期限",
    "material": "Staff notice • Send dietary requests by May 4. The banquet is on May 14. Requests received after the deadline will be considered only if the kitchen has the ingredients.",
    "prompt": "What happens to a request received on May 6?",
    "choices": [
      "It is automatically accepted.",
      "It depends on ingredient availability.",
      "It changes the banquet date.",
      "It must be resubmitted on May 14."
    ],
    "right": 1,
    "why": "五月六日已超過四日的截止日，因此要看廚房是否有食材。"
  },
  {
    "id": "mb12",
    "mode": "R",
    "part": 7,
    "skill": "跨文件金額",
    "material": "Rate card • Half-day room rental: $120. Projector: $25. Screen: included with room.\nReservation • One half-day rental with a screen. The presenter is bringing her own projector.",
    "prompt": "How much should the organizer budget for this reservation?",
    "choices": [
      "$25.",
      "$95.",
      "$145.",
      "$120."
    ],
    "right": 3,
    "why": "螢幕已包含在租金中，投影機自行攜帶，因此只需支付半日場租 120 元。"
  },
  {
    "id": "mc01",
    "mode": "L",
    "part": 2,
    "skill": "確認數量",
    "material": "How many name tags should I set aside for visitors?",
    "prompt": "Choose the best response.",
    "choices": [
      "Put them on the chairs.",
      "Six, plus one spare.",
      "At the visitor entrance."
    ],
    "right": 1,
    "why": "How many 問數量。六張再加一張備用，共要留下七張名牌。"
  },
  {
    "id": "mc02",
    "mode": "L",
    "part": 2,
    "skill": "替代方案",
    "material": "Would you like a paper copy of the floor plan?",
    "prompt": "Choose the best response.",
    "choices": [
      "The floor was cleaned yesterday.",
      "A copy shop on Pine Street.",
      "A link to the digital version would be easier."
    ],
    "right": 2,
    "why": "對方問是否需要紙本。回答者表示電子版連結更方便，提出了另一種取得平面圖的方式。"
  },
  {
    "id": "mc03",
    "mode": "L",
    "part": 3,
    "skill": "找出延誤原因",
    "material": "Can we send the new menu to the printer this morning?||The prices are final, but the photographer is still editing the cover image. She promised to send it by noon.",
    "prompt": "What is the team waiting for?",
    "choices": [
      "A finished photograph.",
      "A revised price list.",
      "A printing estimate.",
      "A delivery address."
    ],
    "right": 0,
    "why": "價格已確定。but 之後才是阻礙送印的原因，封面照片仍在編修。"
  },
  {
    "id": "mc04",
    "mode": "L",
    "part": 3,
    "skill": "判讀下一步",
    "material": "My visitor pass expires at five, and the seminar runs until six.||The reception desk can extend it. Show them your registration email before the afternoon break.",
    "prompt": "What should the visitor do?",
    "choices": [
      "Leave the seminar at five.",
      "Request a different seminar.",
      "Print a new invitation at home.",
      "Take proof of registration to reception."
    ],
    "right": 3,
    "why": "櫃檯可以延長通行時間，訪客需要出示報名電郵。proof of registration 改寫了 registration email。"
  },
  {
    "id": "mc05",
    "mode": "L",
    "part": 4,
    "skill": "辨認替代服務",
    "material": "A message for guests at Harbor Lodge. The dining room will open an hour late tomorrow while we inspect the ovens. Guests leaving before seven may collect a packed breakfast from the front desk. Please place your order there tonight.",
    "prompt": "What should guests leaving early do tonight?",
    "choices": [
      "Inspect the dining room.",
      "Order breakfast at reception.",
      "Return their room keys.",
      "Pick up their packed meals."
    ],
    "right": 1,
    "why": "tonight 是預訂的時間，隔天提早離開時才領餐。front desk 與 reception 同義。"
  },
  {
    "id": "mc06",
    "mode": "L",
    "part": 4,
    "skill": "區分必要與選配",
    "material": "Thank you for joining our walking tour. A map is included in your ticket price. If you would like to borrow a headset, leave a ten-dollar deposit with your guide. You will get the money back when you return the headset.",
    "prompt": "Under what condition will a visitor get the deposit back?",
    "choices": [
      "By showing the map.",
      "By buying a second ticket.",
      "By handing back the headset.",
      "By reserving the next tour."
    ],
    "right": 2,
    "why": "押金只適用於借用耳機的人。when you return the headset 說明退還押金的條件。"
  },
  {
    "id": "mc07",
    "mode": "R",
    "part": 5,
    "skill": "比較級",
    "material": "",
    "prompt": "The revised checklist is _____ to follow than the previous version.",
    "choices": [
      "easiest",
      "easily",
      "ease",
      "easier"
    ],
    "right": 3,
    "why": "than 引出比較對象，easy 的比較級是 easier。整句表示修訂後的清單更容易照著做。"
  },
  {
    "id": "mc08",
    "mode": "R",
    "part": 5,
    "skill": "所有格限定詞",
    "material": "",
    "prompt": "Before entering the laboratory, visitors must place _____ bags in a locker.",
    "choices": [
      "their",
      "they",
      "them",
      "theirs"
    ],
    "right": 0,
    "why": "空格後已有名詞 bags，需要用所有格限定詞 their 來表示訪客的包袋。"
  },
  {
    "id": "mc09",
    "mode": "R",
    "part": 6,
    "skill": "對應指示",
    "material": "Please attach a label to each box before the movers arrive. _____. This will help the crew take each box directly to the right office.",
    "prompt": "Which sentence best fills the gap?",
    "choices": [
      "The elevators were installed last year.",
      "We have not chosen a moving company.",
      "Write the destination room number on the label.",
      "Most offices use the same size boxes."
    ],
    "right": 2,
    "why": "後句說搬運人員可以直接找到正確辦公室，因此標籤上要註明目的地房號。"
  },
  {
    "id": "mc10",
    "mode": "R",
    "part": 6,
    "skill": "動作先後",
    "material": "Thank you for sending the draft flyer. Our editor will check the event details this afternoon. _____ she finishes, we will send you the file for final approval.",
    "prompt": "Which word best fills the gap?",
    "choices": [
      "Despite",
      "Once",
      "During",
      "Unless"
    ],
    "right": 1,
    "why": "Once she finishes 表示編輯完成檢查後，就會寄出檔案請對方核准。During 和 despite 不能直接接這個完整子句。"
  },
  {
    "id": "mc11",
    "mode": "R",
    "part": 7,
    "skill": "重述時間要求",
    "material": "Garden Center pickup notice\nOnline orders are held for three days after the pickup email is sent. Need more time? Reply to that email before the hold expires and we can keep the order for two extra days.",
    "prompt": "How can customers extend the pickup period?",
    "choices": [
      "Place a second order.",
      "Pay a storage fee at the center.",
      "Wait for the order to expire.",
      "Reply to the pickup email before the deadline."
    ],
    "right": 3,
    "why": "通知要求在保留期限屆滿前回覆取貨電郵，才能多保留兩天。"
  },
  {
    "id": "mc12",
    "mode": "R",
    "part": 7,
    "skill": "比對數量與包裝",
    "material": "Supply catalog • Sketchbooks are sold in packs of eight. Packs cannot be split.\nInstructor’s note • We expect 27 students. Each needs one sketchbook. There are five unused sketchbooks in the cupboard.",
    "prompt": "What is the smallest number of packs the instructor should order?",
    "choices": [
      "Two.",
      "Three.",
      "Four.",
      "Five."
    ],
    "right": 1,
    "why": "27 人扣掉現有 5 本，還缺 22 本。每包 8 本，2 包不足，3 包共 24 本才夠。"
  },
  {
    "id": "md01",
    "mode": "L",
    "part": 2,
    "skill": "辨認負責人",
    "material": "Who should approve the changes to the lobby display?",
    "prompt": "Choose the best response.",
    "choices": [
      "On the ground floor.",
      "Before the lobby opens.",
      "The branch manager handles that."
    ],
    "right": 2,
    "why": "Who 問的是負責人。handles that 表示分行經理負責處理這件事。"
  },
  {
    "id": "md02",
    "mode": "L",
    "part": 2,
    "skill": "澄清選項",
    "material": "Are these folders for the new hires or for their supervisors?",
    "prompt": "Choose the best response.",
    "choices": [
      "The new hires get them at orientation.",
      "Yes, it was a new folder.",
      "She supervises the night shift."
    ],
    "right": 0,
    "why": "這是二選一的問句。回答說明資料夾要在職前說明會發給新進人員。"
  },
  {
    "id": "md03",
    "mode": "L",
    "part": 3,
    "skill": "數量修正",
    "material": "I ordered thirty mugs for the awards dinner. That should cover everyone, right?||We have thirty guests, but the two hosts need mugs as well. Could you add two to the order?",
    "prompt": "How many mugs are needed in total?",
    "choices": [
      "Two.",
      "Twenty-eight.",
      "Thirty.",
      "Thirty-two."
    ],
    "right": 3,
    "why": "原有三十位賓客，另有兩位主持人也需要杯子，合計三十二個。"
  },
  {
    "id": "md04",
    "mode": "L",
    "part": 3,
    "skill": "間接表達偏好",
    "material": "I found a cheaper flight for the conference, but it lands at midnight.||My presentation starts at eight the next morning. Is the earlier flight still available?",
    "prompt": "Why does the second speaker ask about the earlier flight?",
    "choices": [
      "It costs less.",
      "The speaker has an early commitment.",
      "The conference ends at midnight.",
      "The hotel has canceled the booking."
    ],
    "right": 1,
    "why": "對方提到隔天早上八點就要簡報，因此詢問能較早抵達的航班。"
  },
  {
    "id": "md05",
    "mode": "L",
    "part": 4,
    "skill": "分辨公告對象",
    "material": "This announcement is for exhibitors at the craft fair. You may unload your goods at the south gate until nine. After unloading, move your vehicle to the field behind the hall. The spaces beside the gate must stay clear for other deliveries.",
    "prompt": "Where should exhibitors park after unloading?",
    "choices": [
      "In the field behind the hall.",
      "Beside the south gate.",
      "Inside the exhibition hall.",
      "At the visitor entrance."
    ],
    "right": 0,
    "why": "南門只供卸貨。After unloading 引出下一步，要把車移到會場後方的空地。"
  },
  {
    "id": "md06",
    "mode": "L",
    "part": 4,
    "skill": "依條件採取行動",
    "material": "You have reached Meadow Clinic. If you already have an appointment and only need to change the time, press four. For a copy of a past invoice, press two. To book your first visit, please stay on the line.",
    "prompt": "What should a caller do to reschedule an existing visit?",
    "choices": [
      "Press two.",
      "Wait for an operator.",
      "Press four.",
      "Call back after the visit."
    ],
    "right": 2,
    "why": "reschedule 是重新安排時間，對應 change the time。已有預約且只需改時間的人要按四。"
  },
  {
    "id": "md07",
    "mode": "R",
    "part": 5,
    "skill": "不可數名詞的一致性",
    "material": "",
    "prompt": "The equipment for the outdoor screenings _____ stored in the basement between events.",
    "choices": [
      "are",
      "is",
      "have",
      "were"
    ],
    "right": 1,
    "why": "主詞 equipment 是不可數名詞，即使指多件器材也用單數 is。for the outdoor screenings 是修飾語。"
  },
  {
    "id": "md08",
    "mode": "R",
    "part": 5,
    "skill": "固定搭配",
    "material": "",
    "prompt": "The editor looks forward to _____ the final manuscript next week.",
    "choices": [
      "receive",
      "received",
      "receives",
      "receiving"
    ],
    "right": 3,
    "why": "look forward to 中的 to 是介系詞，後接動名詞 receiving，表示期待收到最終稿件。"
  },
  {
    "id": "md09",
    "mode": "R",
    "part": 6,
    "skill": "篇章對比",
    "material": "All four branches used to close at six. Starting next month, the downtown branch will stay open until eight on weekdays. _____. Please check your branch name before planning an evening visit.",
    "prompt": "Which sentence best fills the gap?",
    "choices": [
      "The other three will keep their current closing time.",
      "All branches will open two hours later.",
      "The downtown branch closed permanently.",
      "A new branch is under construction abroad."
    ],
    "right": 0,
    "why": "下一句提醒讀者確認分店，因為延長營業只適用於市中心分店，其餘三家仍於六點打烊。"
  },
  {
    "id": "md10",
    "mode": "R",
    "part": 6,
    "skill": "字義與語境",
    "material": "We appreciate your feedback on the prototype. Several testers found the handle difficult to grip. The design team will _____ the handle to make it easier to hold. A new sample will be ready in April.",
    "prompt": "Which word best fills the gap?",
    "choices": [
      "invoice",
      "attend",
      "reshape",
      "postpone"
    ],
    "right": 2,
    "why": "測試者反映握把不好握，設計團隊要改變其形狀。reshape 表示重新塑形。"
  },
  {
    "id": "md11",
    "mode": "R",
    "part": 7,
    "skill": "辨識合格對象",
    "material": "Recognition program • Staff may nominate a colleague who has worked here for at least one year. Managers may submit nominations but cannot be nominated. Each nomination must include a short example of the colleague’s work.",
    "prompt": "Who is eligible to receive the award?",
    "choices": [
      "A manager with five years of service.",
      "A technician who joined three years ago and has no management duties.",
      "A new assistant in her first month.",
      "A customer who visits the office every week."
    ],
    "right": 1,
    "why": "獲提名者必須是任職至少一年的非主管員工。服務三年的技術員符合這兩項條件。"
  },
  {
    "id": "md12",
    "mode": "R",
    "part": 7,
    "skill": "比對行程與票種",
    "material": "Ferry schedule • Island departures: 8:20, 10:20, 12:20. Boarding closes ten minutes before each departure.\nTicket email • Your ticket is valid for the 10:20 departure only. To change sailings, visit the ticket office before boarding closes.",
    "prompt": "When does boarding close for this passenger’s booked sailing?",
    "choices": [
      "8:10.",
      "10:20.",
      "12:10.",
      "10:10."
    ],
    "right": 3,
    "why": "票券指定搭乘 10:20 的船班，登船在十分鐘前的 10:10 截止，因此換班須在 10:10 之前辦理。"
  }
];
