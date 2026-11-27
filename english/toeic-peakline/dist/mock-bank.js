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
  },
  {
    "id": "me01",
    "mode": "L",
    "part": 2,
    "skill": "頻率詢問",
    "material": "How often does the florist change the window display?",
    "prompt": "Choose the best response.",
    "choices": [
      "Just inside the window.",
      "About twice a month.",
      "Three bunches of roses."
    ],
    "right": 1,
    "why": "How often 問頻率。twice a month 表示每月兩次。"
  },
  {
    "id": "me02",
    "mode": "L",
    "part": 2,
    "skill": "辨認婉拒",
    "material": "Can you take the minutes at this afternoon’s committee meeting?",
    "prompt": "Choose the best response.",
    "choices": [
      "It lasted fifty minutes.",
      "They met in the cafeteria.",
      "I’ll be interviewing a candidate then."
    ],
    "right": 2,
    "why": "take the minutes 是做會議紀錄。回答者當時要面試應徵者，間接表示無法幫忙。"
  },
  {
    "id": "me03",
    "mode": "L",
    "part": 3,
    "skill": "推論場地需求",
    "material": "The studio upstairs is quieter. Should we record the piano there?||The piano won’t fit through the upstairs doorway. Let’s use the hall and record before the audience comes in.",
    "prompt": "Why do the speakers decide to use the hall?",
    "choices": [
      "The instrument cannot be moved into the studio.",
      "The audience asked for a recording.",
      "The hall has a smaller doorway.",
      "The upstairs room is too noisy."
    ],
    "right": 0,
    "why": "樓上的錄音室比較安靜，但鋼琴過不了門。選擇大廳是受到樂器尺寸限制。"
  },
  {
    "id": "me04",
    "mode": "L",
    "part": 3,
    "skill": "辨認修訂重點",
    "material": "I checked the proofs for the concert program. The performers’ names are all correct.||Good. The violinist just called, though. She’s playing after the choir, so we need to switch the order on page three.",
    "prompt": "What needs to be changed on page three?",
    "choices": [
      "The name of the choir.",
      "The date of the concert.",
      "The ticket price.",
      "The sequence of performances."
    ],
    "right": 3,
    "why": "人名已確認正確。switch the order 是調整順序，小提琴手改在合唱團之後演出。"
  },
  {
    "id": "me05",
    "mode": "L",
    "part": 4,
    "skill": "理解公告目的",
    "material": "Good morning, stallholders. Last week, several shoppers missed our market because the street signs were hard to see. We have printed larger signs. Please collect one at the information booth and display it at your entrance.",
    "prompt": "Why were larger signs printed?",
    "choices": [
      "To advertise new prices.",
      "To help visitors find the market.",
      "To identify the information staff.",
      "To list available stalls."
    ],
    "right": 1,
    "why": "路牌不夠醒目，導致顧客找不到市集。放大路牌是為了讓入口更容易被找到。"
  },
  {
    "id": "me06",
    "mode": "L",
    "part": 4,
    "skill": "判讀取件條件",
    "material": "This is Northside Framing calling about your photograph. The frame is ready. If someone else collects it for you, please email us their name before they arrive. They will need to show identification at the counter.",
    "prompt": "What must the customer do before a friend collects the photograph?",
    "choices": [
      "Pay for a second frame.",
      "Send the original photograph.",
      "Email the friend’s name to the shop.",
      "Leave identification at the shop."
    ],
    "right": 2,
    "why": "顧客要先把代領人的姓名寄給店家；到櫃檯出示證件的是代領人。"
  },
  {
    "id": "me07",
    "mode": "R",
    "part": 5,
    "skill": "關係代名詞",
    "material": "",
    "prompt": "The illustrator _____ designed our new logo will speak at the launch.",
    "choices": [
      "whose",
      "which",
      "who",
      "whom"
    ],
    "right": 2,
    "why": "先行詞 illustrator 指人，關係子句缺少 designed 的主詞，應使用 who。"
  },
  {
    "id": "me08",
    "mode": "R",
    "part": 5,
    "skill": "分詞形容詞",
    "material": "",
    "prompt": "Only _____ members may vote in the association’s election.",
    "choices": [
      "register",
      "registers",
      "registration",
      "registered"
    ],
    "right": 3,
    "why": "registered members 指已登記的會員。過去分詞 registered 在此修飾名詞 members。"
  },
  {
    "id": "me09",
    "mode": "R",
    "part": 6,
    "skill": "指示順序",
    "material": "Your exhibition badge is attached to this email. _____. Staff will scan the code on the printed page when you enter the hall.",
    "prompt": "Which sentence best fills the gap?",
    "choices": [
      "Please print it before you arrive.",
      "The exhibition was held last year.",
      "The hall will close for lunch.",
      "Staff badges are a different color."
    ],
    "right": 0,
    "why": "下一句提到工作人員會掃描紙上的代碼，因此前一步要先把電子識別證列印出來。"
  },
  {
    "id": "me10",
    "mode": "R",
    "part": 6,
    "skill": "動詞搭配",
    "material": "Dear Ms. Lin, thank you for lending us the sculpture. Our records list your old address. Could you _____ your current address so that we can arrange the return shipment?",
    "prompt": "Which word best fills the gap?",
    "choices": [
      "deliver",
      "confirm",
      "attend",
      "weigh"
    ],
    "right": 1,
    "why": "主辦單位只有舊地址，寄回雕塑前需要對方確認目前的地址。confirm your address 是確認地址。"
  },
  {
    "id": "me11",
    "mode": "R",
    "part": 7,
    "skill": "辨認歸還規則",
    "material": "Costume hire agreement\nReturn all items to the fittings desk by noon on Monday. Leave the cleaning to our staff. If a costume needs a repair, pin a note to its hanger so the wardrobe team can find the damage.",
    "prompt": "What should a customer do with a torn costume?",
    "choices": [
      "Wash it before returning it.",
      "Take it to a tailor on Monday.",
      "Attach a note to its hanger.",
      "Keep it until the next fitting."
    ],
    "right": 2,
    "why": "撕破的戲服需要修補。店家要求把說明別在衣架上，方便服裝人員找到破損處。"
  },
  {
    "id": "me12",
    "mode": "R",
    "part": 7,
    "skill": "跨文件折扣計算",
    "material": "Print shop offer • Posters cost $5 each. Orders of 20 or more posters receive 10% off the poster price. Delivery costs $8 per order and is excluded from the discount.\nOrder slip • 20 posters, delivery requested.",
    "prompt": "What total should appear on the invoice?",
    "choices": [
      "$90.",
      "$98.",
      "$100.",
      "$108."
    ],
    "right": 1,
    "why": "20 張海報原價 100 元，符合九折門檻，折後 90 元。運費 8 元另計，因此帳單共 98 元。"
  },
  {
    "id": "mf01",
    "mode": "L",
    "part": 2,
    "skill": "交通方式",
    "material": "How will the visiting engineers get from the station to our factory?",
    "prompt": "Choose the best response.",
    "choices": [
      "Our driver will pick them up.",
      "The factory opened last year.",
      "Their visit lasts two days."
    ],
    "right": 0,
    "why": "How ... get from ... to ... 問交通安排。司機去接他們，就是從車站到工廠的方式。"
  },
  {
    "id": "mf02",
    "mode": "L",
    "part": 2,
    "skill": "辨認查詢途徑",
    "material": "Do we still have enough envelopes for the mailing?",
    "prompt": "Choose the best response.",
    "choices": [
      "Yes, the email was brief.",
      "She addressed the audience.",
      "Let me check the supply cabinet."
    ],
    "right": 2,
    "why": "問句想確認信封存量。回答者提出查看用品櫃，可以直接查明數量。"
  },
  {
    "id": "mf03",
    "mode": "L",
    "part": 3,
    "skill": "辨認計價單位",
    "material": "The quote says eighty dollars for the translation. Is that for the whole brochure?||That’s the rate per page. We only need the two pages with safety instructions translated.",
    "prompt": "How much will the requested translation cost?",
    "choices": [
      "Forty dollars.",
      "Eighty dollars.",
      "Two hundred dollars.",
      "One hundred sixty dollars."
    ],
    "right": 3,
    "why": "報價是每頁 80 元，只翻譯兩頁，合計 160 元。"
  },
  {
    "id": "mf04",
    "mode": "L",
    "part": 3,
    "skill": "辨識先後順序",
    "material": "Should I send the new staff their building passes today?||Hold on. Two of them have the same surname. I’ll send you their employee numbers so you can match each pass to the right person.",
    "prompt": "What will the second speaker do next?",
    "choices": [
      "Print new building passes.",
      "Provide identification numbers.",
      "Change the employees’ surnames.",
      "Collect the old passes."
    ],
    "right": 1,
    "why": "兩人同姓，要先提供員工編號，才能把通行證交給正確的人。"
  },
  {
    "id": "mf05",
    "mode": "L",
    "part": 4,
    "skill": "篩選適用對象",
    "material": "A reminder for this week’s mentoring event. Mentors will receive their partners’ names by email on Monday. Participants seeking a mentor should check in at the blue table on arrival. Mentors can go straight to their assigned seats.",
    "prompt": "Who should check in at the blue table?",
    "choices": [
      "People looking for a mentor.",
      "The people sending the emails.",
      "All mentors with assigned seats.",
      "Everyone attending the event."
    ],
    "right": 0,
    "why": "seeking a mentor 指希望獲得指導的參加者。導師可以直接到指定座位。"
  },
  {
    "id": "mf06",
    "mode": "L",
    "part": 4,
    "skill": "辨認未來安排",
    "material": "Thank you for testing our reservation system. You may notice that the confirmation messages still show our old telephone number. We have corrected the number in the next version, which will be installed on Friday evening. Until then, please give callers the number printed on your desk card.",
    "prompt": "What should staff use as a reference until Friday evening?",
    "choices": [
      "The next software release.",
      "A recent confirmation message.",
      "A list of reservations.",
      "The card on their desk."
    ],
    "right": 3,
    "why": "新版安裝前，系統的確認訊息仍顯示舊號碼。工作人員應以桌上卡片印的號碼為準。"
  },
  {
    "id": "mf07",
    "mode": "R",
    "part": 5,
    "skill": "副詞修飾形容詞",
    "material": "",
    "prompt": "The two estimates are based on _____ different assumptions about demand.",
    "choices": [
      "complete",
      "completion",
      "completely",
      "completes"
    ],
    "right": 2,
    "why": "different 是形容詞，需要用副詞 completely 修飾，表示對需求的假設截然不同。"
  },
  {
    "id": "mf08",
    "mode": "R",
    "part": 5,
    "skill": "條件與例外",
    "material": "",
    "prompt": "Employees must attend the afternoon briefing _____ their supervisor has already excused them.",
    "choices": [
      "despite",
      "unless",
      "during",
      "whereas"
    ],
    "right": 1,
    "why": "unless 表示「除非」。員工原則上要出席，主管已准假的人例外。"
  },
  {
    "id": "mf09",
    "mode": "R",
    "part": 6,
    "skill": "代名詞指涉",
    "material": "We have placed comment boxes beside both exits. Please drop your suggestions into either box. A member of the training team will empty _____ every Friday.",
    "prompt": "Which word best fills the gap?",
    "choices": [
      "their",
      "they",
      "themselves",
      "them"
    ],
    "right": 3,
    "why": "empty 在這裡是「清空」，後面需要受格代名詞 them，代指前文的兩個意見箱。"
  },
  {
    "id": "mf10",
    "mode": "R",
    "part": 6,
    "skill": "說明試辦安排",
    "material": "We will try staggered lunch breaks in July to reduce queues in the cafeteria. _____. We will use their feedback to decide whether to continue the trial in August.",
    "prompt": "Which sentence best fills the gap?",
    "choices": [
      "We will ask employees how long they waited during the trial.",
      "The cafeteria serves soup every day.",
      "The old building has three floors.",
      "All employees must bring their own chairs."
    ],
    "right": 0,
    "why": "後句的 their feedback 需要有回饋者，詢問員工試辦期間等了多久，也切合縮短排隊時間的目的。"
  },
  {
    "id": "mf11",
    "mode": "R",
    "part": 7,
    "skill": "推論費用範圍",
    "material": "Repair service notice • A technician can inspect your appliance at home for $35. If you authorize the repair during that visit, the $35 counts toward the repair bill. If you decline, the inspection fee remains payable.",
    "prompt": "What happens if a customer declines the repair after the inspection?",
    "choices": [
      "The technician refunds $35.",
      "The repair is rescheduled automatically.",
      "The customer still owes the inspection fee.",
      "The fee is credited to a future visit."
    ],
    "right": 2,
    "why": "decline 指不接受這次維修。條款說此時 inspection fee remains payable，所以檢查費仍須支付。"
  },
  {
    "id": "mf12",
    "mode": "R",
    "part": 7,
    "skill": "整合預約與限制",
    "material": "Room guide • Birch seats 14 and has no video equipment. Cedar seats 12 and supports video calls. Maple seats 18 and supports video calls.\nMeeting request • Thirteen people will attend in person, and a colleague will join from abroad by video.",
    "prompt": "Which room meets both requirements?",
    "choices": [
      "Birch only.",
      "Cedar only.",
      "Maple only.",
      "Both Cedar and Maple."
    ],
    "right": 2,
    "why": "會議同時需要至少 13 個現場座位及視訊設備。Birch 缺設備，Cedar 只有 12 席，Maple 兩項都符合。"
  },
  {
    "id": "mg01",
    "mode": "L",
    "part": 2,
    "skill": "辨認地點",
    "material": "Where can I weigh this parcel before I buy postage?",
    "prompt": "Choose the best response.",
    "choices": [
      "Just under two kilograms.",
      "On the scale beside the counter.",
      "The parcel arrived yesterday."
    ],
    "right": 1,
    "why": "Where 問地點。the scale beside the counter 指櫃檯旁的秤，可以在那裡量包裹重量。"
  },
  {
    "id": "mg02",
    "mode": "L",
    "part": 2,
    "skill": "辨認替代人選",
    "material": "Could you lead the warehouse tour on Tuesday?",
    "prompt": "Choose the best response.",
    "choices": [
      "The tour lasted an hour.",
      "Through the loading bay.",
      "I’ll be away, but Nina knows the route."
    ],
    "right": 2,
    "why": "說話者當天不在，接著提到熟悉路線的 Nina，是在推薦其他可帶團的人。"
  },
  {
    "id": "mg03",
    "mode": "L",
    "part": 3,
    "skill": "判斷變更原因",
    "material": "Shall we use the glass jars for the first batch of jam?||The lids for those jars haven’t arrived. Let’s fill the sample cups today and save the jars for tomorrow.",
    "prompt": "Why does the second speaker suggest using sample cups?",
    "choices": [
      "The jar lids are missing.",
      "The jam needs another day to cool.",
      "The cups are cheaper.",
      "The glass jars are too small."
    ],
    "right": 0,
    "why": "玻璃罐本身已備妥，但蓋子還沒送到，因此先用試吃杯分裝。"
  },
  {
    "id": "mg04",
    "mode": "L",
    "part": 3,
    "skill": "辨認下一步",
    "material": "The driver has been waiting at our rear entrance for ten minutes.||That gate is for outgoing shipments. I’ll meet her there and walk her to the receiving desk.",
    "prompt": "What will the second speaker do next?",
    "choices": [
      "Send a parcel to the driver.",
      "Open the receiving desk tomorrow.",
      "Cancel an outgoing shipment.",
      "Guide the driver to the correct desk."
    ],
    "right": 3,
    "why": "walk her to 在此是「陪她走到」。第二位說話者會帶司機到負責收貨的櫃檯。"
  },
  {
    "id": "mg05",
    "mode": "L",
    "part": 4,
    "skill": "找出公告重點",
    "material": "A message for customers collecting bakery orders. Your receipt shows a shelf number. Please collect your bread from that shelf. Cakes are kept in the refrigerator, so show your receipt to a staff member if your order includes a cake.",
    "prompt": "What should a customer collecting a cake do?",
    "choices": [
      "Leave the receipt on a shelf.",
      "Show the receipt to an employee.",
      "Take a cake from the bread shelf.",
      "Call the bakery after pickup."
    ],
    "right": 1,
    "why": "蛋糕放在冰箱裡，領取時要向店員出示收據。架號是供客人自取麵包使用的。"
  },
  {
    "id": "mg06",
    "mode": "L",
    "part": 4,
    "skill": "區分舊安排與新安排",
    "material": "Welcome to the food photography workshop. Our outdoor session was planned for this morning. The courtyard is still in use, so we will photograph table settings indoors first. We can move outside once the lunch service ends.",
    "prompt": "When will the outdoor session take place?",
    "choices": [
      "Before the indoor session.",
      "During the morning delivery.",
      "After lunch service finishes.",
      "As soon as the tables are set."
    ],
    "right": 2,
    "why": "原訂上午的戶外拍攝改期。once the lunch service ends 表示午餐供應結束後才能移到戶外。"
  },
  {
    "id": "mg07",
    "mode": "R",
    "part": 5,
    "skill": "不定詞搭配",
    "material": "",
    "prompt": "The distributor agreed _____ the damaged cartons at no extra charge.",
    "choices": [
      "replace",
      "replacement",
      "replacing",
      "to replace"
    ],
    "right": 3,
    "why": "agree to do something 表示同意做某事。供應商同意免費更換受損紙箱。"
  },
  {
    "id": "mg08",
    "mode": "R",
    "part": 5,
    "skill": "名詞詞形",
    "material": "",
    "prompt": "The tasting panel praised the _____ of the new recipe.",
    "choices": [
      "simple",
      "simplicity",
      "simply",
      "simplify"
    ],
    "right": 1,
    "why": "the 與 of the new recipe 之間需要名詞。simplicity 指新配方的簡潔。"
  },
  {
    "id": "mg09",
    "mode": "R",
    "part": 6,
    "skill": "辨認通知中的因果",
    "material": "The labels on our small spice jars are difficult to read. Several customers have asked for larger lettering. _____, the next batch of labels will use a bigger typeface.",
    "prompt": "Which phrase best fills the gap?",
    "choices": [
      "Nevertheless",
      "By contrast",
      "For this reason",
      "Previously"
    ],
    "right": 2,
    "why": "前文說標籤難讀、有客人要求放大字體。採用較大字體是回應這項需求的結果。"
  },
  {
    "id": "mg10",
    "mode": "R",
    "part": 6,
    "skill": "篇章細節銜接",
    "material": "Dear tenants, the mailroom shelves will be replaced on Friday. _____. Any parcels still on the shelves that evening will be moved to the reception desk.",
    "prompt": "Which sentence best fills the gap?",
    "choices": [
      "Please collect your parcels before five that afternoon.",
      "Our rent payments are due next month.",
      "The new shelves were delivered last winter to another building.",
      "Reception sells envelopes in three sizes."
    ],
    "right": 0,
    "why": "後一句交代當晚仍未領取的包裹會移到櫃檯，因此空格應先提醒住戶在更換層架前取件。"
  },
  {
    "id": "mg11",
    "mode": "R",
    "part": 7,
    "skill": "分辨訂單狀態",
    "material": "Bulk order instructions • We send an automatic email as soon as your request reaches us. The email contains a reference number. Your pickup slot is reserved only when our dispatcher sends a second message with a time.",
    "prompt": "What does the first email confirm?",
    "choices": [
      "A pickup time has been set.",
      "The goods have been packed.",
      "The payment has cleared.",
      "The request has been received."
    ],
    "right": 3,
    "why": "第一封自動信只確認收到申請並提供編號。收到調度員寄來含時間的第二封信後，取貨時段才確定。"
  },
  {
    "id": "mg12",
    "mode": "R",
    "part": 7,
    "skill": "跨文件計算運費",
    "material": "Courier tariff • For parcels up to and including 3 kg, delivery costs $9. Each additional kilogram or part of a kilogram costs $2.\nDispatch note • One parcel. Packed weight: 4.2 kg.",
    "prompt": "What delivery charge applies to this parcel?",
    "choices": [
      "$11.",
      "$13.",
      "$9.",
      "$15."
    ],
    "right": 1,
    "why": "超過 3 公斤的部分為 1.2 公斤。費率規定不足一公斤也以一公斤計，因此加收兩次 2 元，總計 13 元。"
  },
  {
    "id": "mh01",
    "mode": "L",
    "part": 2,
    "skill": "選擇問句",
    "material": "Would you prefer a seat near the window or near the aisle?",
    "prompt": "Choose the best response.",
    "choices": [
      "The aisle, please. I’ll need to get up early.",
      "The windows were cleaned.",
      "Yes, the seats are reserved."
    ],
    "right": 0,
    "why": "問句要在兩個位置中擇一。回答者選走道座位，因為需要提早起身。"
  },
  {
    "id": "mh02",
    "mode": "L",
    "part": 2,
    "skill": "間接詢問進度",
    "material": "Did anyone record yesterday’s staff presentation?",
    "prompt": "Choose the best response.",
    "choices": [
      "I presented my badge.",
      "The staff room is upstairs.",
      "There’s a video of it on our team site."
    ],
    "right": 2,
    "why": "團隊網站上有那場簡報的影片，間接表示有人錄下了簡報。"
  },
  {
    "id": "mh03",
    "mode": "L",
    "part": 3,
    "skill": "推論物品用途",
    "material": "Why are you taking a roll of tape to the training room?||The floor arrows keep sliding when people walk on them. I want them to stay in place during the safety drill.",
    "prompt": "What will the second speaker use the tape for?",
    "choices": [
      "To mark attendance.",
      "To secure directions on the floor.",
      "To repair a training video.",
      "To close the room entrance."
    ],
    "right": 1,
    "why": "arrows keep sliding 表示地上的指示箭頭會滑動。拿膠帶是為了把它們固定好。"
  },
  {
    "id": "mh04",
    "mode": "L",
    "part": 3,
    "skill": "核對附加條件",
    "material": "Can we put my bicycle on the morning shuttle?||Bicycles are allowed, but each one needs its own reservation. Your seat booking covers only you.",
    "prompt": "What must the first speaker do to take the bicycle?",
    "choices": [
      "Buy a seat for another passenger.",
      "Choose an afternoon shuttle.",
      "Cancel the existing seat booking.",
      "Make a separate reservation for the bicycle."
    ],
    "right": 3,
    "why": "each one needs its own reservation 表示腳踏車要另外預約。原有的座位預約只適用於乘客本人。"
  },
  {
    "id": "mh05",
    "mode": "L",
    "part": 4,
    "skill": "確認來電者的請求",
    "material": "Hello, this is Omar at the town archive. Thank you for offering to donate the old maps. Before you bring them in, could you send me their measurements? I need to make sure our flat storage drawers are large enough.",
    "prompt": "What information does Omar request?",
    "choices": [
      "The dimensions of the maps.",
      "The price of the storage drawers.",
      "The donor’s home address.",
      "The dates printed on the maps."
    ],
    "right": 0,
    "why": "measurements 指尺寸。Omar 需要確認典藏用的平放式抽屜是否夠大。"
  },
  {
    "id": "mh06",
    "mode": "L",
    "part": 4,
    "skill": "掌握退款方式",
    "material": "Thank you for registering for the evening lecture. The speaker cannot travel today, so the event has been canceled. Card payments will be refunded automatically. If you paid cash at the box office, take your ticket there to receive your refund.",
    "prompt": "What should a customer who paid cash do?",
    "choices": [
      "Wait for a credit on a card.",
      "Contact the speaker directly.",
      "Present the ticket at the box office.",
      "Reserve a seat for another lecture."
    ],
    "right": 2,
    "why": "刷卡款項會自動退回，現金購票者則要持票到原售票處領取退款。"
  },
  {
    "id": "mh07",
    "mode": "R",
    "part": 5,
    "skill": "時間介系詞",
    "material": "",
    "prompt": "The campaign has attracted over 200 volunteers _____ its launch in March.",
    "choices": [
      "among",
      "since",
      "while",
      "during which"
    ],
    "right": 1,
    "why": "現在完成式搭配 since 加起始時間，表示從三月啟動以來累積了兩百多位志工。"
  },
  {
    "id": "mh08",
    "mode": "R",
    "part": 5,
    "skill": "平行動詞結構",
    "material": "",
    "prompt": "The coordinator is responsible for booking venues and _____ speakers.",
    "choices": [
      "invite",
      "invitation",
      "invited",
      "inviting"
    ],
    "right": 3,
    "why": "介系詞 for 後的兩個動作由 and 連接，booking 和 inviting 都用動名詞。"
  },
  {
    "id": "mh09",
    "mode": "R",
    "part": 6,
    "skill": "對照新舊流程",
    "material": "Under our old policy, travel claims had to include original boarding passes. _____, a scanned copy will be sufficient. This change takes effect on the first of next month.",
    "prompt": "Which expression best fills the gap?",
    "choices": [
      "In other words",
      "For example",
      "Under the revised policy",
      "At the same price"
    ],
    "right": 2,
    "why": "舊辦法要求登機證正本。新辦法下個月生效，屆時只需掃描件，因此用 Under the revised policy 引出新規定。"
  },
  {
    "id": "mh10",
    "mode": "R",
    "part": 6,
    "skill": "補足申請步驟",
    "material": "To join the language exchange, fill out the short form on our website. _____. We use that information to match you with a suitable conversation partner.",
    "prompt": "Which sentence best fills the gap?",
    "choices": [
      "Tell us which languages you speak and which one you want to practice.",
      "The library was built near a public park.",
      "The exchange ran for six weeks last year.",
      "Refreshments are served in the entrance hall."
    ],
    "right": 0,
    "why": "that information 指配對所需的資料。填寫自己會說和想練習的語言，主辦單位才能安排合適的語伴。"
  },
  {
    "id": "mh11",
    "mode": "R",
    "part": 7,
    "skill": "解讀候補規則",
    "material": "Course waiting list • When a place opens, the first person on the list receives an email offer. That person has 12 hours to accept. If we receive no reply, we offer the place to the next person. Joining the list is free.",
    "prompt": "What happens if the first person does not reply within 12 hours?",
    "choices": [
      "The course fee increases.",
      "The place is offered to someone else.",
      "The entire list is canceled.",
      "The place is held until the course begins."
    ],
    "right": 1,
    "why": "規則明訂超過 12 小時沒有回覆，名額會依序提供給下一位候補者。"
  },
  {
    "id": "mh12",
    "mode": "R",
    "part": 7,
    "skill": "核對時程與間隔",
    "material": "Assembly schedule • Room checks: 8:45, 9:15, 9:45, 10:15. Select one check for each presentation.\nPresenter’s email • I will arrive at 9:05. I need at least 20 minutes after I arrive to set up my equipment before the room check.",
    "prompt": "Which is the earliest room check the presenter can select?",
    "choices": [
      "8:45.",
      "9:15.",
      "9:45.",
      "10:15."
    ],
    "right": 2,
    "why": "9:05 抵達後至少需要 20 分鐘架設器材，最早 9:25 才準備好。符合條件的第一個檢查時段是 9:45。"
  },
  {
    "id": "mi01",
    "mode": "L",
    "part": 2,
    "skill": "辨認歸屬",
    "material": "Whose umbrella was left in the interview room?",
    "prompt": "Choose the best response.",
    "choices": [
      "Only when it rains.",
      "Next to the elevator.",
      "I think it belongs to the last applicant."
    ],
    "right": 2,
    "why": "Whose 問物品屬於誰。the last applicant 是最後一位面試者，回答指出可能的失主。"
  },
  {
    "id": "mi02",
    "mode": "L",
    "part": 2,
    "skill": "間接確認可用時間",
    "material": "Is the loading ramp free at three this afternoon?",
    "prompt": "Choose the best response.",
    "choices": [
      "Our furniture delivery is booked for that time.",
      "There’s no charge for the samples.",
      "Three boxes of lamps."
    ],
    "right": 0,
    "why": "free 在這裡指「有沒有空檔」。家具已約在三點送達，暗示當時有人要使用卸貨坡道。"
  },
  {
    "id": "mi03",
    "mode": "L",
    "part": 3,
    "skill": "辨別問題成因",
    "material": "Why did the total on the fabric invoice go up? Did we order more material?||No, the number of meters is the same. We asked for the rolls to be sent overnight, and that added a delivery charge.",
    "prompt": "What caused the increase on the invoice?",
    "choices": [
      "More fabric was ordered.",
      "The rolls were cut to a different width.",
      "The fabric price rose.",
      "The buyer chose a faster shipping service."
    ],
    "right": 3,
    "why": "布料長度沒變。overnight 表示要求隔夜送達，新增的運費才是總額上升的原因。"
  },
  {
    "id": "mi04",
    "mode": "L",
    "part": 3,
    "skill": "聽出承諾的行動",
    "material": "I’ve set the table for our product demonstration, but the back row might not see the smaller tools.||There’s a camera in my office. I’ll bring it down so we can project a close-up on the wall.",
    "prompt": "What does the second speaker offer to do?",
    "choices": [
      "Move the back row outdoors.",
      "Bring equipment to show a larger view.",
      "Replace the smaller tools.",
      "Postpone the demonstration."
    ],
    "right": 1,
    "why": "project a close-up 是把特寫畫面投影出來。說話者要取相機，讓後排也看得到細節。"
  },
  {
    "id": "mi05",
    "mode": "L",
    "part": 4,
    "skill": "分辨領取方式",
    "material": "Welcome to the upholstery class. You’ll find practice fabric at each workbench. The fabric you chose for your own chair is in the cupboard near the door. Each piece has a paper band with a student’s name on it. Please check that band before you cut anything.",
    "prompt": "How can students identify the fabric for their own chairs?",
    "choices": [
      "Look for their names on the paper bands.",
      "Choose the fabric already on their workbenches.",
      "Measure the width of the cupboard.",
      "Ask for a sample at the door."
    ],
    "right": 0,
    "why": "工作台上的是練習布。個人椅子用的布料放在櫃子裡，用紙帶上的學生姓名辨認。"
  },
  {
    "id": "mi06",
    "mode": "L",
    "part": 4,
    "skill": "掌握通話目的",
    "material": "Hello, this is Elena from the tile showroom. You asked whether our blue tiles would match the paint in your lobby. I’ve put two sample tiles aside for you. You can borrow them until Monday and compare them under the lights in your building.",
    "prompt": "Why has Elena set aside two tiles?",
    "choices": [
      "To repair a damaged display.",
      "To reserve the last items in a sale.",
      "To let a customer check the color on site.",
      "To teach a customer how to install them."
    ],
    "right": 2,
    "why": "顧客想知道磁磚與油漆是否相配。Elena 留下樣品，讓顧客在大廳實際的燈光下比色。"
  },
  {
    "id": "mi07",
    "mode": "R",
    "part": 5,
    "skill": "依主詞選動詞",
    "material": "",
    "prompt": "Each of the rental vans _____ a folding ramp for heavy boxes.",
    "choices": [
      "carry",
      "carries",
      "carrying",
      "to carry"
    ],
    "right": 1,
    "why": "主詞是單數的 Each。of the rental vans 說明範圍，因此動詞要用 carries。"
  },
  {
    "id": "mi08",
    "mode": "R",
    "part": 5,
    "skill": "分辨形容詞與副詞",
    "material": "",
    "prompt": "The revised sewing pattern is _____ enough for a beginner to follow.",
    "choices": [
      "clearly",
      "clarify",
      "clarity",
      "clear"
    ],
    "right": 3,
    "why": "is 後面用形容詞 clear 描述紙型說明的清楚程度。此處 enough 放在形容詞後面。"
  },
  {
    "id": "mi09",
    "mode": "R",
    "part": 6,
    "skill": "用上下文選動詞",
    "material": "Some items in our online catalog are made to order. Before you pay, please _____ the production time shown beside the item. It tells you how long we need to make it before shipping.",
    "prompt": "Which word best fills the gap?",
    "choices": [
      "check",
      "pack",
      "lend",
      "repair"
    ],
    "right": 0,
    "why": "下一句說明標出的時間是製作所需時間。付款前應查看（check）該時間，才知道多久後能出貨。"
  },
  {
    "id": "mi10",
    "mode": "R",
    "part": 6,
    "skill": "銜接例子與建議",
    "material": "The design team welcomes photographs showing how our desks are used. _____. A photo like that helps us see which cables and devices need more space.",
    "prompt": "Which sentence best fills the gap?",
    "choices": [
      "Our warehouse closes at six on Fridays.",
      "Every desk comes with written instructions.",
      "For example, show us your desk with your usual equipment connected.",
      "You can pay for your desk in two installments."
    ],
    "right": 2,
    "why": "A photo like that 指前一句的照片。拍下接上日常設備的桌面，才能看出線材和裝置佔了多少空間。"
  },
  {
    "id": "mi11",
    "mode": "R",
    "part": 7,
    "skill": "辨識寄售付款條件",
    "material": "Consignment terms • We display local artists’ work for up to six weeks. The gallery pays artists on the last weekday of the month for pieces sold that month. Unsold pieces may be collected at the end of the display period.",
    "prompt": "What triggers a payment to an artist?",
    "choices": [
      "Delivering a piece to the gallery.",
      "Having a piece purchased by a customer.",
      "Leaving a piece on display for six weeks.",
      "Collecting a piece at the end of the display."
    ],
    "right": 1,
    "why": "款項是針對 pieces sold，也就是已售出的作品。每月最後一個工作日是付款日，上架本身不會產生款項。"
  },
  {
    "id": "mi12",
    "mode": "R",
    "part": 7,
    "skill": "核對折抵金額",
    "material": "Tailoring receipt • Jacket alteration: $68. Deposit paid: $20. Balance due on collection.\nCustomer email • Please add the $7 garment bag to my order. I’ll pay for it when I collect the jacket.",
    "prompt": "How much should the customer pay at collection?",
    "choices": [
      "$48.",
      "$75.",
      "$88.",
      "$55."
    ],
    "right": 3,
    "why": "修改費 68 元先扣除已付訂金 20 元，尾款是 48 元。取件時另付衣袋費 7 元，合計 55 元。"
  },
  {
    "id": "mj01",
    "mode": "L",
    "part": 2,
    "skill": "確認截止時間",
    "material": "By when do you need my comments on the draft agenda?",
    "prompt": "Choose the best response.",
    "choices": [
      "On the second page.",
      "By noon on Thursday.",
      "The agenda is two pages long."
    ],
    "right": 1,
    "why": "By when 問最晚何時要完成。By noon on Thursday 表示最晚在星期四中午前交回意見。"
  },
  {
    "id": "mj02",
    "mode": "L",
    "part": 2,
    "skill": "辨認主動協助",
    "material": "These boxes are too wide for the cart, aren’t they?",
    "prompt": "Choose the best response.",
    "choices": [
      "I can fetch the larger cart from downstairs.",
      "Only the small boxes were empty.",
      "The store accepts credit cards."
    ],
    "right": 0,
    "why": "說話者指出箱子太寬，回應者提出去樓下拿大推車，直接解決搬運問題。"
  },
  {
    "id": "mj03",
    "mode": "L",
    "part": 3,
    "skill": "辨認選擇理由",
    "material": "The express train gets us there twenty minutes sooner. Shall I book it?||The local train stops right beside the exhibition center. On the express, we’d have to take a taxi back from the terminal. Let’s take the local.",
    "prompt": "Why does the second speaker prefer the local train?",
    "choices": [
      "It has reserved seats.",
      "It runs later in the evening.",
      "It stops closer to the destination.",
      "It arrives twenty minutes earlier."
    ],
    "right": 2,
    "why": "快車雖然較早到終點站，卻得再搭計程車折返。區間車就停在展覽中心旁，因此位置更方便。"
  },
  {
    "id": "mj04",
    "mode": "L",
    "part": 3,
    "skill": "聽懂交接安排",
    "material": "I’m about to hand over the front desk. Has anyone returned the locker key for number sixteen?||The guest is still using it. I’ve written the locker number in the shift log so the evening clerk knows to collect the key.",
    "prompt": "What has the second speaker already done?",
    "choices": [
      "Returned the locker key.",
      "Emptied the locker.",
      "Called the evening guest.",
      "Added a reminder to the shift log."
    ],
    "right": 3,
    "why": "鑰匙仍在客人手上。I’ve written 表示已完成的動作，即把置物櫃號碼記入交班簿，提醒晚班同事收回鑰匙。"
  },
  {
    "id": "mj05",
    "mode": "L",
    "part": 4,
    "skill": "區分兩個付款步驟",
    "material": "A reminder for sellers at our neighborhood book sale. Buyers choose books at your table, but all payments go through the central cashier. Write the price and your table number on a slip for each buyer. The table number lets us credit the sale to you.",
    "prompt": "Why should sellers write their table number on the slip?",
    "choices": [
      "To show buyers where the cashier sits.",
      "To ensure the correct seller receives the proceeds.",
      "To reserve a table for the next sale.",
      "To tell buyers how many books are left."
    ],
    "right": 1,
    "why": "款項統一由收銀台處理。credit the sale to you 表示依攤號把這筆銷售收入歸給正確的賣家。"
  },
  {
    "id": "mj06",
    "mode": "L",
    "part": 4,
    "skill": "從線索推論行動",
    "material": "This is a message from Willow Guesthouse. A street parade will pass our main entrance on Saturday afternoon. Guests arriving with luggage can still reach us by car. Ask your driver to use the lane behind the bakery, where a porter will meet you at our side door.",
    "prompt": "What should guests arriving by car on Saturday afternoon do?",
    "choices": [
      "Leave their luggage at the bakery.",
      "Wait for the parade to finish.",
      "Direct the driver to the lane behind the bakery.",
      "Meet the porter at the main entrance."
    ],
    "right": 2,
    "why": "遊行會經過正門。旅館請客人告訴司機改走麵包店後方的巷子，再由行李員於旅館側門接應。"
  },
  {
    "id": "mj07",
    "mode": "R",
    "part": 5,
    "skill": "區辨讓步連接詞",
    "material": "",
    "prompt": "_____ the hall was nearly full, the usher found two seats together.",
    "choices": [
      "Although",
      "Despite",
      "During",
      "Because of"
    ],
    "right": 0,
    "why": "空格後有完整子句 the hall was nearly full，需用連接詞 Although。整句表示儘管大廳幾乎滿座，帶位員仍找到相鄰座位。"
  },
  {
    "id": "mj08",
    "mode": "R",
    "part": 5,
    "skill": "辨認職務名詞",
    "material": "",
    "prompt": "One _____ from each branch will attend the planning session.",
    "choices": [
      "represent",
      "representing",
      "representative",
      "represents"
    ],
    "right": 2,
    "why": "One 後面需要可數單數名詞。representative 指代表，整句表示各分公司派一位代表參加規劃會議。"
  },
  {
    "id": "mj09",
    "mode": "R",
    "part": 6,
    "skill": "辨認步驟關係",
    "material": "To borrow a portable screen, first choose a date on the equipment calendar. _____, enter the meeting room number so our staff know where to deliver it. You will receive a confirmation after submitting the form.",
    "prompt": "Which word best fills the gap?",
    "choices": [
      "Otherwise",
      "Next",
      "Previously",
      "Nevertheless"
    ],
    "right": 1,
    "why": "first 引出填表的第一步，接著填入會議室號碼，因此用 Next 標示下一步。"
  },
  {
    "id": "mj10",
    "mode": "R",
    "part": 6,
    "skill": "連結問題與解決方法",
    "material": "Visitors sometimes confuse our two buildings because both entrances face King Street. _____. Please include the appropriate color in any directions you send to guests.",
    "prompt": "Which sentence best fills the gap?",
    "choices": [
      "The offices are closed on public holidays.",
      "The receptionists share a telephone directory.",
      "Both buildings were renovated last summer.",
      "We have marked the east entrance in blue and the west entrance in green."
    ],
    "right": 3,
    "why": "下一句要求指路時註明相應顏色，空格必須先解釋兩個入口各用哪種顏色標示。"
  },
  {
    "id": "mj11",
    "mode": "R",
    "part": 7,
    "skill": "解析訪客政策",
    "material": "Trial membership • A trial pass includes one free guest visit. The member must accompany the guest on arrival. After checking in together, the guest may attend a different activity from the member. Guest visits must be booked by phone.",
    "prompt": "Which arrangement is allowed under the trial pass?",
    "choices": [
      "The guest checks in alone before the member arrives.",
      "The member books two free visits for one guest.",
      "After booking by phone, both check in together and join separate classes.",
      "The guest books online and meets the member after class."
    ],
    "right": 2,
    "why": "規則要求電話預約，且會員與訪客一起報到。報到後可以各自參加不同活動。"
  },
  {
    "id": "mj12",
    "mode": "R",
    "part": 7,
    "skill": "比對班表與承諾",
    "material": "Volunteer rota • Morning shift: 8:00–12:00. Midday shift: 10:00–14:00. Afternoon shift: 13:00–17:00. Volunteers must cover a whole shift.\nMessage from Iris • I can arrive at 9:30 and need to leave by 15:00.",
    "prompt": "Which shift can Iris cover in full?",
    "choices": [
      "The morning shift only.",
      "The midday shift only.",
      "The afternoon shift only.",
      "Both the midday and afternoon shifts."
    ],
    "right": 1,
    "why": "Iris 最早 9:30 到、最晚 15:00 離開。早班開始時她還沒到，下午班結束時她已離開，只有 10:00 到 14:00 的班次能全程值勤。"
  }
];
