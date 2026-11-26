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
  }
];
