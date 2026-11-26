const questions = [
  {
    "id": "d1",
    "mode": "R",
    "part": 5,
    "skill": "職場單字",
    "material": "",
    "prompt": "Please sign your _____ at the bottom of the form.",
    "choices": [
      "desk",
      "name",
      "door",
      "train"
    ],
    "right": 1,
    "why": "sign your name 是「簽名」。at the bottom of the form 表示在表格底部。"
  },
  {
    "id": "d2",
    "mode": "L",
    "part": 2,
    "skill": "疑問詞",
    "material": "Where is the staff meeting?",
    "prompt": "哪個回答最合適？",
    "choices": [
      "At ten o'clock.",
      "Every Monday.",
      "In Room Two."
    ],
    "right": 2,
    "why": "Where 問地點。In Room Two 是「在二號會議室」。"
  },
  {
    "id": "d3",
    "mode": "R",
    "part": 5,
    "skill": "詞性辨識",
    "material": "",
    "prompt": "The team completed the inspection _____.",
    "choices": [
      "careful",
      "care",
      "carefully",
      "carefulness"
    ],
    "right": 2,
    "why": "修飾動詞 completed 要用副詞 carefully，表示「仔細地完成檢查」。"
  },
  {
    "id": "d4",
    "mode": "L",
    "part": 4,
    "skill": "資訊更正",
    "material": "The shuttle usually leaves from Gate Four. Today, because of construction, please board at Gate Six instead.",
    "prompt": "Where should passengers wait today?",
    "choices": [
      "Gate Four.",
      "Gate Six.",
      "At the construction office.",
      "At the train station."
    ],
    "right": 1,
    "why": "usually 說的是平常。today 和 instead 引出本次要搭車的六號門。"
  },
  {
    "id": "d5",
    "mode": "L",
    "part": 3,
    "skill": "間接意圖",
    "material": "Do you have a minute to check this invoice?||My train leaves in ten minutes. Could you email it to me?",
    "prompt": "What does the second speaker imply?",
    "choices": [
      "The amount is incorrect.",
      "The invoice was already sent.",
      "The train has been delayed.",
      "There is little time to check it now."
    ],
    "right": 3,
    "why": "第二位說話者提到火車即將開走，並請對方改寄電郵，暗示現在來不及檢查。"
  },
  {
    "id": "d6",
    "mode": "R",
    "part": 7,
    "skill": "跨文件推論",
    "material": "Policy • Orders received before noon qualify for same-day dispatch, except on public holidays.\nOrder record • Received Friday, 11:40 a.m. Friday is a public holiday.",
    "prompt": "Which statement is supported?",
    "choices": [
      "Dispatch on Friday is guaranteed.",
      "The order misses the noon cutoff.",
      "The holiday exception applies.",
      "The order will arrive on Saturday."
    ],
    "right": 2,
    "why": "11:40 趕上中午截止時間，但 except on public holidays 排除了假日。文件沒有承諾抵達日期。"
  },
  {
    "id": "a1",
    "mode": "R",
    "part": 5,
    "skill": "主詞與動詞",
    "material": "",
    "prompt": "The office _____ at nine every morning.",
    "choices": [
      "open",
      "opening",
      "opens",
      "to open"
    ],
    "right": 2,
    "why": "The office 是單數主詞，固定作息用現在簡單式 opens。整句是「辦公室每天早上九點開門」。"
  },
  {
    "id": "a2",
    "mode": "R",
    "part": 5,
    "skill": "地點介系詞",
    "material": "",
    "prompt": "Your keys are _____ the desk, next to the lamp.",
    "choices": [
      "on",
      "from",
      "by Monday",
      "during"
    ],
    "right": 0,
    "why": "on the desk 表示在桌面上。next to the lamp 表示在燈旁邊。"
  },
  {
    "id": "a3",
    "mode": "R",
    "part": 7,
    "skill": "時間辨識",
    "material": "Library hours\nMonday–Friday: 9 a.m.–6 p.m.\nSaturday: 10 a.m.–2 p.m.\nSunday: Closed.",
    "prompt": "When does the library open on Saturday?",
    "choices": [
      "At nine.",
      "At two.",
      "At six.",
      "At ten."
    ],
    "right": 3,
    "why": "先找 Saturday，再看時段的第一個時間。10 a.m. 是上午十點。"
  },
  {
    "id": "a4",
    "mode": "R",
    "part": 5,
    "skill": "常用動作",
    "material": "",
    "prompt": "Please _____ the door when you leave.",
    "choices": [
      "chair",
      "close",
      "floor",
      "room"
    ],
    "right": 1,
    "why": "Please 後面接原形動詞。close the door 是「關門」。其他選項都是名詞。"
  },
  {
    "id": "a5",
    "mode": "L",
    "part": 2,
    "skill": "時間疑問詞",
    "material": "When does the shop close?",
    "prompt": "選出最合適的回答。",
    "choices": [
      "Next to the bank.",
      "At six this evening.",
      "The blue one."
    ],
    "right": 1,
    "why": "When 問時間。At six this evening 表示今晚六點。"
  },
  {
    "id": "a6",
    "mode": "L",
    "part": 2,
    "skill": "人物疑問詞",
    "material": "Who has the office key?",
    "prompt": "選出最合適的回答。",
    "choices": [
      "At the office.",
      "It's new.",
      "Maria does."
    ],
    "right": 2,
    "why": "Who 問人。Maria does 是 Maria has the key 的簡短說法。"
  },
  {
    "id": "a7",
    "mode": "L",
    "part": 4,
    "skill": "數字與地點",
    "material": "Welcome to Hill Hotel. Breakfast is on the second floor. It starts at seven.",
    "prompt": "Where is breakfast served?",
    "choices": [
      "On the second floor.",
      "At seven o'clock.",
      "In the garden.",
      "On the first floor."
    ],
    "right": 0,
    "why": "Where 要找地點。the second floor 是二樓，seven 是早餐開始的時間。"
  },
  {
    "id": "a8",
    "mode": "L",
    "part": 3,
    "skill": "物品辨識",
    "material": "Could I borrow a pen?||Of course. Here is a blue one.",
    "prompt": "What does the first speaker need?",
    "choices": [
      "A phone.",
      "A bag.",
      "A key.",
      "A pen."
    ],
    "right": 3,
    "why": "borrow 是「借用」，a pen 是一支筆。a blue one 指一支藍色的筆。"
  },
  {
    "id": "b1",
    "mode": "R",
    "part": 5,
    "skill": "過去時間",
    "material": "",
    "prompt": "The courier _____ the parcel yesterday.",
    "choices": [
      "delivers",
      "delivery",
      "delivered",
      "delivering"
    ],
    "right": 2,
    "why": "yesterday 是明確的過去時間，動詞用過去式 delivered。"
  },
  {
    "id": "b2",
    "mode": "R",
    "part": 6,
    "skill": "連接詞",
    "material": "Dear guests,\nThe west entrance is closed for repairs. _____, please use the east entrance until Monday.\nBuilding Services",
    "prompt": "Which word best completes the notice?",
    "choices": [
      "However",
      "Therefore",
      "Previously",
      "Similarly"
    ],
    "right": 1,
    "why": "西門維修是原因，改走東門是結果。Therefore 表示「因此」。"
  },
  {
    "id": "b3",
    "mode": "R",
    "part": 7,
    "skill": "通知重點",
    "material": "Team lunch\nPlease reply to Mei by Tuesday with your meal preference. Lunch will be served on Friday at noon.",
    "prompt": "What should employees do by Tuesday?",
    "choices": [
      "Pay for lunch.",
      "Meet the chef.",
      "Serve the meal.",
      "Send their meal choice."
    ],
    "right": 3,
    "why": "reply ... with your meal preference 是「回覆想吃的餐點」。星期五才用餐。"
  },
  {
    "id": "b4",
    "mode": "R",
    "part": 5,
    "skill": "詞性辨識",
    "material": "",
    "prompt": "All visitors must show valid _____ at reception.",
    "choices": [
      "identify",
      "identification",
      "identifiable",
      "identifies"
    ],
    "right": 1,
    "why": "形容詞 valid 後需要名詞。show valid identification 表示出示有效身分證明。"
  },
  {
    "id": "b5",
    "mode": "L",
    "part": 2,
    "skill": "請求與回應",
    "material": "Could you print two copies of the agenda?",
    "prompt": "Which response fits best?",
    "choices": [
      "Sure, I'll bring them in a minute.",
      "It meets on Thursdays.",
      "Yes, the coffee is ready."
    ],
    "right": 0,
    "why": "Could you 開頭通常是在請人幫忙。them 指兩份議程。"
  },
  {
    "id": "b6",
    "mode": "L",
    "part": 4,
    "skill": "時間更正",
    "material": "The morning workshop was scheduled for nine fifteen. It will now start at nine fifty. The room stays the same.",
    "prompt": "When will the workshop begin?",
    "choices": [
      "9:05.",
      "9:15.",
      "9:50.",
      "10:15."
    ],
    "right": 2,
    "why": "聽 now 後面的新時間。fifty 是五十，fifteen 是十五。"
  },
  {
    "id": "b7",
    "mode": "L",
    "part": 3,
    "skill": "下一步行動",
    "material": "The copier is out of paper again.||There's a spare box in the supply room. I'll get it.",
    "prompt": "What will the second speaker do?",
    "choices": [
      "Call a repair shop.",
      "Bring more paper.",
      "Print a report.",
      "Order a copier."
    ],
    "right": 1,
    "why": "out of paper 表示紙用完了。I'll get it 指去拿備用的紙。"
  },
  {
    "id": "b8",
    "mode": "L",
    "part": 4,
    "skill": "地點與動線",
    "material": "Passengers for the airport bus should exit through the glass doors and wait beside the taxi stand. Tickets are sold on board.",
    "prompt": "Where should passengers wait?",
    "choices": [
      "At the ticket counter.",
      "Inside the glass doors.",
      "On the bus.",
      "Beside the taxi stand."
    ],
    "right": 3,
    "why": "wait beside the taxi stand 就是「在計程車招呼站旁等」。on board 說的是買票地點。"
  },
  {
    "id": "c1",
    "mode": "R",
    "part": 5,
    "skill": "被動語態",
    "material": "",
    "prompt": "Requests received after five will _____ the following morning.",
    "choices": [
      "process",
      "be processed",
      "processing",
      "have processing"
    ],
    "right": 1,
    "why": "申請是「被處理」的對象，will 後接 be 加過去分詞 processed。"
  },
  {
    "id": "c2",
    "mode": "R",
    "part": 6,
    "skill": "篇章銜接",
    "material": "Our pilot program lets staff reserve a desk online. _____. For this reason, we have added a waiting list for Tuesdays and Thursdays.",
    "prompt": "Which sentence fits the gap?",
    "choices": [
      "Several desks need new lamps.",
      "The office closed last year.",
      "Reservations often exceed the number of desks on those days.",
      "The website also lists lunch menus."
    ],
    "right": 2,
    "why": "下一句說因此加開候補名單。空格要解釋為何這兩天需要候補，即預約數超過座位數。"
  },
  {
    "id": "c3",
    "mode": "R",
    "part": 7,
    "skill": "交叉比對",
    "material": "Receipt • Workshop fee: $80. Materials: $15. Parking: $8.\nReimbursement note • The company covers the workshop fee and materials only.",
    "prompt": "How much can the attendee claim?",
    "choices": [
      "$80.",
      "$88.",
      "$103.",
      "$95."
    ],
    "right": 3,
    "why": "比對政策與收據，只納入報名費 80 元和材料費 15 元，共 95 元。"
  },
  {
    "id": "c4",
    "mode": "R",
    "part": 5,
    "skill": "條件子句",
    "material": "",
    "prompt": "The shipment will leave today provided that the customs office _____ the documents by noon.",
    "choices": [
      "approves",
      "approved",
      "approving",
      "approval"
    ],
    "right": 0,
    "why": "provided that 表示「只要」。真實的未來條件在子句中用現在式，主詞是單數。"
  },
  {
    "id": "c5",
    "mode": "L",
    "part": 2,
    "skill": "間接回應",
    "material": "Haven't we already sent the revised estimate?",
    "prompt": "Which response fits best?",
    "choices": [
      "The estimate is affordable.",
      "Yes, the train has left.",
      "Check the outgoing mail folder."
    ],
    "right": 2,
    "why": "問的是是否已經寄出。查看寄件匣是可以解決問題的間接回應。"
  },
  {
    "id": "c6",
    "mode": "L",
    "part": 3,
    "skill": "條件判讀",
    "material": "The large conference room isn't free until two.||That's fine if the client can stay. Otherwise, let's use the small room at one.",
    "prompt": "When would they use the small room?",
    "choices": [
      "If the client cannot stay until two.",
      "If the large room is free at one.",
      "If the client brings guests.",
      "If the meeting is canceled."
    ],
    "right": 0,
    "why": "otherwise 引出另一個條件。如果客戶無法待到兩點，就改用一點的小會議室。"
  },
  {
    "id": "c7",
    "mode": "L",
    "part": 4,
    "skill": "同義改寫",
    "material": "Your order has been packed. However, a bridge closure has forced our drivers to take a longer route. Please allow an extra day for delivery.",
    "prompt": "Why may the delivery arrive late?",
    "choices": [
      "An item is missing.",
      "The packing team is understaffed.",
      "The customer changed the address.",
      "Drivers must take a detour."
    ],
    "right": 3,
    "why": "take a longer route 和 take a detour 都指繞道。貨品已經裝箱。"
  },
  {
    "id": "c8",
    "mode": "L",
    "part": 3,
    "skill": "言外之意",
    "material": "Could we display the banner above the entrance?||People usually come in through the courtyard these days.",
    "prompt": "What does the second speaker suggest indirectly?",
    "choices": [
      "The sign is too expensive.",
      "Another location might get more attention.",
      "The courtyard is closed.",
      "The banner has been delivered."
    ],
    "right": 1,
    "why": "對方指出現在多數人從中庭進來，暗示應考慮更容易被看見的位置。"
  },
  {
    "id": "e1",
    "mode": "R",
    "part": 7,
    "skill": "多文件條件",
    "material": "Offer • A 12% discount applies to orders of at least 40 chairs, provided all chairs ship to one address.\nOrder • Forty-five chairs: 30 to Taipei and 15 to Tainan.\nEmail • Please keep the two delivery locations as requested.",
    "prompt": "Why does the order fail to qualify?",
    "choices": [
      "The order was placed late.",
      "The quantity is too small.",
      "The delivery is split between addresses.",
      "The offer applies only to Taipei."
    ],
    "right": 2,
    "why": "數量已超過門檻。provided 引出的第二個必要條件是送同一地址，訂單要求分送兩處。"
  },
  {
    "id": "e2",
    "mode": "R",
    "part": 6,
    "skill": "語意轉折",
    "material": "Early figures suggest that the new ordering system reduced waiting times. _____, these figures come from one store during a quiet week. We will review data from all branches before expanding.",
    "prompt": "Which transition best fits?",
    "choices": [
      "Consequently",
      "Nevertheless",
      "Similarly",
      "For instance"
    ],
    "right": 1,
    "why": "先報告初步改善，接著指出樣本侷限，兩句是讓步轉折。Nevertheless 表示「不過」。"
  },
  {
    "id": "e3",
    "mode": "R",
    "part": 7,
    "skill": "期限推論",
    "material": "Contract • Requests for adjustments must arrive at least two business days before installation. Business days are Monday to Friday.\nSchedule • Installation is on Tuesday, May 12. No holidays occur in the preceding week.",
    "prompt": "What is the latest day to request an adjustment?",
    "choices": [
      "Thursday, May 7.",
      "Monday, May 11.",
      "Saturday, May 9.",
      "Friday, May 8."
    ],
    "right": 3,
    "why": "從週二向前數工作日，週一是第一天，前一週五是第二天。"
  },
  {
    "id": "e4",
    "mode": "R",
    "part": 5,
    "skill": "假設語氣",
    "material": "",
    "prompt": "Had the venue confirmed earlier, the organizers _____ the additional hall.",
    "choices": [
      "could have reserved",
      "are reserving",
      "will reserve",
      "reserve"
    ],
    "right": 0,
    "why": "Had the venue confirmed 是 If the venue had confirmed 的倒裝，主句用 could have 加過去分詞表達過去未實現的可能。"
  },
  {
    "id": "e5",
    "mode": "L",
    "part": 3,
    "skill": "修正假設",
    "material": "I thought the printer upgrade had been approved.||The budget was approved, yes. But procurement still needs two quotes before it can issue the purchase order.",
    "prompt": "What is still required?",
    "choices": [
      "Approval of the annual budget.",
      "A test of the old printer.",
      "A signed delivery receipt.",
      "Price proposals from suppliers."
    ],
    "right": 3,
    "why": "預算已准，但下單前仍需要 two quotes。price proposals 是 quotes 的改寫。"
  },
  {
    "id": "e6",
    "mode": "L",
    "part": 4,
    "skill": "例外與期限",
    "material": "Members may transfer tickets up to an hour before the show. For discounted preview performances, however, transfers close the previous evening. Tonight's event is a discounted preview.",
    "prompt": "Which deadline applies to tonight's event?",
    "choices": [
      "When the doors open.",
      "The previous evening.",
      "An hour before the show.",
      "The following morning."
    ],
    "right": 1,
    "why": "however 之後是優惠預演的例外條款。今晚就是這類場次。"
  },
  {
    "id": "e7",
    "mode": "L",
    "part": 3,
    "skill": "指涉與意圖",
    "material": "Shall we add another cashier for the weekend?||That's what we tried last month. The queue only moved faster once we shifted gift wrapping away from the till.",
    "prompt": "What most likely helped shorten the queue?",
    "choices": [
      "Moving a service away from checkout.",
      "Hiring another cashier.",
      "Closing the gift department.",
      "Reducing weekend hours."
    ],
    "right": 0,
    "why": "only ... once 點出真正生效的變動，即把禮品包裝移離收銀處。"
  },
  {
    "id": "e8",
    "mode": "L",
    "part": 4,
    "skill": "保留語氣",
    "material": "Our supplier expects to restore the regular schedule in June. Until we receive written confirmation, though, please continue quoting the longer lead time on new orders.",
    "prompt": "What should staff do for now?",
    "choices": [
      "Promise June delivery.",
      "Cancel unconfirmed orders.",
      "Give customers the longer estimate.",
      "Request payment in writing."
    ],
    "right": 2,
    "why": "expects 表示預期。until ... confirmation 設定改回原交期的前提，現階段仍應報較長的交貨時間。"
  }
];
