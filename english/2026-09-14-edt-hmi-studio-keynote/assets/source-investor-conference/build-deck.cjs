// EDT (3038) 2026-09 法說會簡報產生器
// 頁面結構:1–3 頁對外法說講稿,4–6 頁講者參考附錄 A/B/C(不對外投影)
// 重建方式:npm install pptxgenjs 後執行 node build-deck.cjs(輸出於本目錄)
const path = require("path");
const pptxgen = require("pptxgenjs");

const NAVY = "1E2761";
const ICE = "CADCFC";
const WHITE = "FFFFFF";
const ACCENT = "35C4DC";
const GRAY = "6B7280";
const INK = "333B4F";
const TINT = "F2F6FE"; // 白底上的淺色卡片
const MAT = "E4E9F2"; // 截圖襯底
const FONT = "Microsoft JhengHei";

const pres = new pptxgen();
pres.layout = "LAYOUT_WIDE"; // 13.33 x 7.5

const KICKER = "全台晶像 EDT(3038) | 2026 年 9 月法人說明會";

// ---------------------------------------------------------------- Slide 1
const s1 = pres.addSlide();
s1.background = { color: NAVY };

s1.addText(KICKER, {
  x: 0.6, y: 0.42, w: 12.1, h: 0.35, margin: 0, isTextBox: true,
  fontFace: FONT, fontSize: 14, color: ICE,
});
s1.addText("EDT HMI Studio 全新發表", {
  x: 0.6, y: 0.8, w: 8.3, h: 0.75, margin: 0, isTextBox: true,
  fontFace: FONT, fontSize: 40, bold: true, color: WHITE,
});
// 右上角:上市時程狀態
s1.addShape(pres.shapes.ROUNDED_RECTANGLE, {
  x: 9.13, y: 0.84, w: 3.6, h: 0.74, rectRadius: 0.08,
  fill: { color: WHITE, transparency: 94 }, line: { color: ACCENT, width: 1 },
});
s1.addText(
  [
    { text: "2026 年 12 月正式推出", options: { fontSize: 14, bold: true, color: ACCENT, breakLine: true } },
    { text: "內部測試版已完成 80%", options: { fontSize: 12, color: ICE } },
  ],
  {
    x: 9.13, y: 0.84, w: 3.6, h: 0.74, margin: 0, isTextBox: true,
    fontFace: FONT, align: "center", valign: "middle", lineSpacingMultiple: 1.1,
  }
);
s1.addText("軟體免費、硬體訂做 —— 以 AI 軟體平台帶動硬體業務的新商業模式", {
  x: 0.6, y: 1.58, w: 12.1, h: 0.4, margin: 0, isTextBox: true,
  fontFace: FONT, fontSize: 18, color: ICE,
});

// 左欄:三大改變
s1.addText("對業務發展的三大改變", {
  x: 0.6, y: 2.3, w: 6.0, h: 0.4, margin: 0, isTextBox: true,
  fontFace: FONT, fontSize: 21, bold: true, color: ACCENT,
});

const changes = [
  {
    n: "1", t: "軟體免費,帶動硬體訂單",
    d: "EDT HMI Studio 不直接銷售;客戶將相容的\nLCM 硬體交由 EDT 訂做製造,軟體即可免費\n使用,讓軟體成為硬體業務最強的成長引擎。",
  },
  {
    n: "2", t: "EDT 賣鏟子,切進新市場",
    d: "EDT 是賣鏟子的人:高度整合的軟體鏟子,切進\n過去因缺乏軟體工具而無法觸及的 HMI 市場;\n每一位拿鏟子的客戶,都是硬體的潛在訂單。",
  },
  {
    n: "3", t: "新增 AI 加值服務收入",
    d: "AI 使用量(Token)可由客戶自行向 OpenRouter\n購買,亦可由 EDT 代購;代購與加值服務形成\n新的經常性收入來源。",
  },
];
changes.forEach((c, i) => {
  const y = 2.88 + i * 1.32;
  s1.addShape(pres.shapes.OVAL, {
    x: 0.6, y: y + 0.02, w: 0.55, h: 0.55, fill: { color: ACCENT },
  });
  s1.addText(c.n, {
    x: 0.6, y: y + 0.02, w: 0.55, h: 0.55, margin: 0, isTextBox: true,
    fontFace: FONT, fontSize: 19, bold: true, color: NAVY,
    align: "center", valign: "middle",
  });
  s1.addText(
    [
      { text: c.t, options: { fontSize: 17, bold: true, color: WHITE, breakLine: true } },
      { text: c.d, options: { fontSize: 13.5, color: ICE } },
    ],
    {
      x: 1.38, y: y - 0.05, w: 5.35, h: 1.3, margin: 0, isTextBox: true,
      fontFace: FONT, valign: "top", lineSpacingMultiple: 1.1,
    }
  );
});

// 右欄:競爭優勢卡片
s1.addShape(pres.shapes.ROUNDED_RECTANGLE, {
  x: 7.0, y: 2.3, w: 5.73, h: 4.42, rectRadius: 0.1,
  fill: { color: WHITE, transparency: 92 }, line: { color: ICE, width: 0.75, transparency: 60 },
});
s1.addText("為何優於同業", {
  x: 7.4, y: 2.52, w: 5.0, h: 0.4, margin: 0, isTextBox: true,
  fontFace: FONT, fontSize: 21, bold: true, color: WHITE,
});

const edges = [
  {
    t: "真正的 AI 原生、客戶零程式碼",
    d: "不寫一行程式碼,一天完成媲美智慧型手機體驗的 HMI。",
  },
  {
    t: "垂直 × 水平的交叉點",
    d: "三十年工業 HMI 的垂直深度,乘上跨產業的水平擴張力。",
  },
  {
    t: "軟體免費,同業收費",
    d: "同業設計工具多需授權費;免費軟體讓客戶總成本更低。",
  },
  {
    t: "產品力足以獨立授權",
    d: "對其他 HMI 廠商、甚至 IC 廠商賣授權亦毫不遜色。",
  },
];
edges.forEach((e, i) => {
  const y = 3.02 + i * 0.92;
  s1.addText(
    [
      { text: "◆ ", options: { fontSize: 15, bold: true, color: ACCENT } },
      { text: e.t, options: { fontSize: 16, bold: true, color: WHITE, breakLine: true } },
      { text: e.d, options: { fontSize: 13.5, color: ICE } },
    ],
    {
      x: 7.4, y: y, w: 4.95, h: 0.9, margin: 0, isTextBox: true,
      fontFace: FONT, valign: "top", lineSpacingMultiple: 1.1,
    }
  );
});

s1.addText("「HMI 淘金潮裡,EDT 賣的是鏟子 —— 免費的 AI 軟體,是硬體訂單最好的業務員。」", {
  x: 0.6, y: 6.92, w: 12.1, h: 0.38, margin: 0, isTextBox: true,
  fontFace: FONT, fontSize: 14, italic: true, color: ACCENT,
});

s1.addNotes(
  "重點:EDT HMI Studio 不直接銷售。商業模式是「軟體免費、硬體訂做」— 客戶把相容 LCM 硬體交由 EDT 製造,軟體即免費,軟體因此成為硬體訂單的成長引擎。定位是「賣鏟子」的生意:高度整合的軟體鏟子讓 EDT 切進過去缺乏軟體工具而無法觸及的 HMI 市場。客戶價值:完全不用寫一行程式碼,AI 代勞大量重複性工作(輔助正式產品開發、高速產出原型),一天完成媲美智慧型手機體驗的 HMI。時程:內部測試版已完成 80%,2026 年 12 月正式推出。AI 用量(Token)由客戶自行向 OpenRouter 購買或由 EDT 代購,代購形成經常性收入。產品力達獨立軟體公司水準,對其他 HMI 廠商、甚至 IC 廠商賣授權也毫不遜色 — 保留未來變現選擇權。不談技術細節,聚焦商業模式。"
);

// ---------------------------------------------------------------- Slide 2
const s2 = pres.addSlide();
s2.background = { color: WHITE };

s2.addText(KICKER, {
  x: 0.6, y: 0.38, w: 12.1, h: 0.32, margin: 0, isTextBox: true,
  fontFace: FONT, fontSize: 13, color: GRAY,
});
s2.addText("市場規模與營收展望", {
  x: 0.6, y: 0.72, w: 12.1, h: 0.65, margin: 0, isTextBox: true,
  fontFace: FONT, fontSize: 34, bold: true, color: NAVY,
});

// 左欄:兩張市場規模卡片
const stats = [
  {
    big: "116 億美元",
    label: "全球 HMI 市場規模(2030 年預估)",
    sub: "年複合成長率 10.4%(2023–2030)|Grand View Research",
    y: 1.65,
  },
  {
    big: "1,550 億美元",
    label: "全球製造業 AI 市場規模(2030 年預估)",
    sub: "年複合成長率 35.3%(2025–2030)|MarketsandMarkets",
    y: 3.72,
  },
];
stats.forEach((st) => {
  s2.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.6, y: st.y, w: 5.5, h: 1.92, rectRadius: 0.1, fill: { color: TINT },
  });
  s2.addText(
    [
      { text: st.big, options: { fontSize: 38, bold: true, color: NAVY, breakLine: true } },
      { text: st.label, options: { fontSize: 15, bold: true, color: NAVY, breakLine: true } },
      { text: st.sub, options: { fontSize: 11.5, color: GRAY } },
    ],
    {
      x: 0.95, y: st.y + 0.16, w: 4.85, h: 1.66, margin: 0, isTextBox: true,
      fontFace: FONT, valign: "top", lineSpacingMultiple: 1.1,
    }
  );
});

// 右欄:帶動硬體營收目標長條圖
s2.addText(
  [
    { text: "EDT HMI Studio 帶動之 LCM 硬體營收目標", options: { fontSize: 16.5, bold: true, color: NAVY, breakLine: true } },
    { text: "單位:新台幣億元(公司內部規劃目標)・2027 年為推出後首個完整年度", options: { fontSize: 11.5, color: GRAY } },
  ],
  {
    x: 6.55, y: 1.62, w: 6.15, h: 0.66, margin: 0, isTextBox: true,
    fontFace: FONT, valign: "top",
  }
);
s2.addChart(pres.charts.BAR, [
  {
    name: "帶動之硬體營收目標",
    labels: ["2027", "2028", "2029", "2030"],
    values: [3, 8, 14, 20],
  },
], {
  x: 6.55, y: 2.32, w: 6.15, h: 3.3,
  barDir: "col",
  chartColors: [NAVY],
  showLegend: false,
  showTitle: false,
  showValue: true,
  dataLabelPosition: "outEnd",
  dataLabelColor: NAVY,
  dataLabelFontFace: FONT,
  dataLabelFontSize: 15,
  dataLabelFormatCode: "General",
  catAxisLabelColor: INK,
  catAxisLabelFontFace: FONT,
  catAxisLabelFontSize: 14,
  valAxisLabelColor: GRAY,
  valAxisLabelFontFace: FONT,
  valAxisLabelFontSize: 12,
  valAxisMinVal: 0,
  valAxisMaxVal: 25,
  valAxisMajorUnit: 5,
  valGridLine: { color: MAT, size: 0.75 },
  catGridLine: { style: "none" },
  barGapWidthPct: 60,
});

// 底部:三項投資重點
s2.addShape(pres.shapes.ROUNDED_RECTANGLE, {
  x: 0.6, y: 5.8, w: 12.1, h: 1.05, rectRadius: 0.08, fill: { color: NAVY },
});
const kpis = [
  { big: "20 億元", label: "2030 年帶動之硬體營收目標" },
  { big: "35% 以上", label: "2030 年佔整體營收比重" },
  { big: "訂製硬體 + AI 代購", label: "高毛利訂單與經常性收入雙引擎" },
];
kpis.forEach((k, i) => {
  s2.addText(
    [
      { text: k.big, options: { fontSize: 20, bold: true, color: ACCENT, breakLine: true } },
      { text: k.label, options: { fontSize: 13, color: ICE } },
    ],
    {
      x: 0.75 + i * 4.03, y: 5.9, w: 3.85, h: 0.85, margin: 0, isTextBox: true,
      fontFace: FONT, align: "center", valign: "middle", lineSpacingMultiple: 1.1,
    }
  );
});

s2.addText(
  "資料來源:Grand View Research、MarketsandMarkets。本頁營收目標為公司內部長期規劃,屬前瞻性陳述,實際結果可能因市場與營運狀況而異,不構成財務預測或投資建議。",
  {
    x: 0.6, y: 7.02, w: 12.1, h: 0.35, margin: 0, isTextBox: true,
    fontFace: FONT, fontSize: 10, color: GRAY,
  }
);

s2.addNotes(
  "重點:市場數字引用第三方研究 — HMI 市場 2030 年 116 億美元(CAGR 10.4%)、製造業 AI 市場 2030 年 1,550 億美元(CAGR 35.3%)。因軟體免費,營收貢獻反映在「帶動的訂製 LCM 硬體訂單」:內部目標 2027 年 3 億、2028 年 8 億、2029 年 14 億、2030 年 20 億元,屆時佔整體營收 35% 以上;另有 AI Token 代購之經常性收入。目標經同業營收交叉檢核(見附錄 C):20 億元約當 Beijer Electronics 三成、Qt Group 四分之一體量,僅佔 2030 年全球 HMI 市場約 0.6%,並不激進。時程口徑:2026 年 12 月正式推出,故 2027 年為首個完整貢獻年度。務必強調前瞻性陳述聲明,數字須經財務核定。"
);

// ---------------------------------------------------------------- Slide 3
const s3 = pres.addSlide();
s3.background = { color: WHITE };

s3.addText(KICKER, {
  x: 0.6, y: 0.38, w: 12.1, h: 0.32, margin: 0, isTextBox: true,
  fontFace: FONT, fontSize: 13, color: GRAY,
});
s3.addText("傳統 GUI 編輯器做不到的事", {
  x: 0.6, y: 0.72, w: 12.1, h: 0.6, margin: 0, isTextBox: true,
  fontFace: FONT, fontSize: 34, bold: true, color: NAVY,
});

// 對比帶:傳統 vs EDT
s3.addShape(pres.shapes.ROUNDED_RECTANGLE, {
  x: 0.6, y: 1.38, w: 5.87, h: 1.34, rectRadius: 0.08, fill: { color: TINT },
});
s3.addText(
  [
    { text: "傳統 GUI 編輯器", options: { fontSize: 19, bold: true, color: INK, breakLine: true, paraSpaceAfter: 4 } },
    { text: "逐一拖曳元件、手動對位,沒有 AI", options: { fontSize: 14.5, color: INK, breakLine: true } },
    { text: "通訊協議、驅動程式全部手寫", options: { fontSize: 14.5, color: INK, breakLine: true } },
    { text: "沒有模擬器,得等硬體到位才看得到", options: { fontSize: 14.5, color: INK } },
  ],
  {
    x: 0.95, y: 1.50, w: 5.2, h: 1.12, margin: 0, isTextBox: true,
    fontFace: FONT, valign: "top", lineSpacingMultiple: 1.08,
  }
);

s3.addShape(pres.shapes.ROUNDED_RECTANGLE, {
  x: 6.83, y: 1.38, w: 5.87, h: 1.34, rectRadius: 0.08, fill: { color: NAVY },
});
s3.addText(
  [
    { text: "EDT HMI Studio ・ 內建 AI", options: { fontSize: 19, bold: true, color: WHITE, breakLine: true, paraSpaceAfter: 4 } },
    { text: "一句話生成素材,自動放到正確位置", options: { fontSize: 14.5, color: ICE, breakLine: true } },
    { text: "通訊協議免寫程式;內建模擬器即時預覽", options: { fontSize: 14.5, color: ICE, breakLine: true } },
    { text: "整套畫面規劃、多平台部署,AI 一次到位", options: { fontSize: 14.5, color: ICE } },
  ],
  {
    x: 7.18, y: 1.50, w: 5.2, h: 1.12, margin: 0, isTextBox: true,
    fontFace: FONT, valign: "top", lineSpacingMultiple: 1.08,
  }
);

// 兩張實機圖與說明
s3.addText(
  [
    { text: "圖一|一句話,素材自動生成並就位", options: { fontSize: 16.5, bold: true, color: NAVY, breakLine: true } },
    { text: "對 AI 說出需求,即產生圖形素材、建立元件並精準定位。", options: { fontSize: 13.5, color: INK } },
  ],
  {
    x: 0.6, y: 2.82, w: 5.87, h: 0.6, margin: 0, isTextBox: true,
    fontFace: FONT, valign: "top", lineSpacingMultiple: 1.1,
  }
);
s3.addText(
  [
    { text: "圖二|一次規劃,產出整套產品級畫面", options: { fontSize: 16.5, bold: true, color: NAVY, breakLine: true } },
    { text: "AI 產出的日本洗衣機 HMI:多畫面、多語系、動畫全到位。", options: { fontSize: 13.5, color: INK } },
  ],
  {
    x: 6.83, y: 2.82, w: 5.87, h: 0.6, margin: 0, isTextBox: true,
    fontFace: FONT, valign: "top", lineSpacingMultiple: 1.1,
  }
);

// 截圖襯底 + 截圖(等高排列,底部對齊)
s3.addShape(pres.shapes.RECTANGLE, {
  x: 0.96, y: 3.42, w: 5.15, h: 3.10, fill: { color: MAT },
});
s3.addImage({
  path: path.join(__dirname, "assets", "fig1-ai-asset-placement.png"),
  x: 1.02, y: 3.48, w: 5.03, h: 2.98,
});
s3.addShape(pres.shapes.RECTANGLE, {
  x: 6.77, y: 3.42, w: 5.99, h: 3.00, fill: { color: MAT },
});
s3.addImage({
  path: path.join(__dirname, "assets", "fig2-ai-full-hmi.png"),
  x: 6.83, y: 3.48, w: 5.87, h: 2.88,
});

s3.addText(
  "圖一、圖二皆為 EDT HMI Studio 內部測試版實際產出畫面(2026 年 9 月),非模擬示意。",
  {
    x: 0.6, y: 6.62, w: 12.1, h: 0.35, margin: 0, isTextBox: true,
    fontFace: FONT, fontSize: 11, color: GRAY,
  }
);
s3.addText("「同業賣的是編輯器;EDT 賣的,是會自己動手的 AI 夥伴。」", {
  x: 0.6, y: 6.98, w: 12.1, h: 0.38, margin: 0, isTextBox: true,
  fontFace: FONT, fontSize: 15, italic: true, bold: true, color: NAVY,
});

s3.addNotes(
  "對外頁。核心對比:傳統 GUI 編輯器沒有 AI,素材、排版、規劃都靠人力逐一拖曳對位,通訊協議與驅動程式全部手寫,又沒有模擬器,必須等硬體到位才看得到結果。EDT HMI Studio 內建 AI 並串接 API Token,三大關鍵能力:(1) 通訊協議免寫程式,設定即完成;(2) 內建模擬器,不必等硬體就能即時預覽與修改;(3) 多平台部署,不綁單一晶片生態。圖一:對 AI 說「產生充電樁 ICON 放在 Welcome 左上方」,AI 直接產生圖形素材、建立元件並精準定位,全程零程式碼、零手工對位。圖二:由 AI 產出的日本先進洗衣機 HMI 完整方案,多畫面、多國語系、動畫與狀態全部到位。兩張皆為內部測試版實際產出,非模擬示意 — 這是「真正的 AI 產品」最有力的證據。傳統流程的風險量化,見附錄 A。"
);

// ------------------------------------------------- Slide 4(附錄 A,講者參考)
function addSpeakerBadge(slide) {
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 10.05, y: 0.42, w: 2.68, h: 0.42, rectRadius: 0.06, fill: { color: NAVY },
  });
  slide.addText("講者參考 ・ 不對外投影", {
    x: 10.05, y: 0.42, w: 2.68, h: 0.42, margin: 0, isTextBox: true,
    fontFace: FONT, fontSize: 12, bold: true, color: WHITE,
    align: "center", valign: "middle",
  });
}

const sA = pres.addSlide();
sA.background = { color: WHITE };
addSpeakerBadge(sA);
sA.addText("附錄 A | 2026 年 9 月法人說明會", {
  x: 0.6, y: 0.38, w: 9.0, h: 0.32, margin: 0, isTextBox: true,
  fontFace: FONT, fontSize: 13, color: GRAY,
});
sA.addText("傳統研發流程的時程與風險", {
  x: 0.6, y: 0.72, w: 9.0, h: 0.6, margin: 0, isTextBox: true,
  fontFace: FONT, fontSize: 30, bold: true, color: NAVY,
});

// 左欄:傳統工具鏈流程示意
sA.addText(
  [
    { text: "傳統做法:程式語言 + 純 GUI 編輯器", options: { fontSize: 16.5, bold: true, color: INK, breakLine: true } },
    { text: "以 STM32CubeIDE 搭配 TouchGFX Designer 為例", options: { fontSize: 12, color: GRAY } },
  ],
  {
    x: 0.6, y: 1.5, w: 5.9, h: 0.6, margin: 0, isTextBox: true,
    fontFace: FONT, valign: "top", lineSpacingMultiple: 1.1,
  }
);

const steps = [
  { t: "TouchGFX Designer 拉畫面、產生 C++ 骨架", r: "設計一改,程式碼重新生成與合併" },
  { t: "CubeMX / CubeIDE 設定時脈、記憶體、週邊", r: "設定錯誤難以排查,拖慢整體進度" },
  { t: "手寫通訊協議與驅動(UART / CAN / Modbus)", r: "協議解析最常出錯,整合期延誤主因" },
  { t: "交叉編譯、燒錄、上機除錯", r: "須等硬體到位,韌體人力全程綁死" },
  { t: "每改一次畫面 → 重編譯、重燒錄、重測", r: "迭代緩慢,時程與成本不可控" },
];
steps.forEach((s, i) => {
  const y = 2.18 + i * 0.79;
  sA.addShape(pres.shapes.OVAL, {
    x: 0.6, y: y + 0.04, w: 0.42, h: 0.42, fill: { color: NAVY },
  });
  sA.addText(String(i + 1), {
    x: 0.6, y: y + 0.04, w: 0.42, h: 0.42, margin: 0, isTextBox: true,
    fontFace: FONT, fontSize: 14, bold: true, color: WHITE,
    align: "center", valign: "middle",
  });
  sA.addText(
    [
      { text: s.t, options: { fontSize: 13.5, bold: true, color: INK, breakLine: true } },
      { text: "風險:" + s.r, options: { fontSize: 12, color: "9A3B34" } },
    ],
    {
      x: 1.15, y: y, w: 5.35, h: 0.74, margin: 0, isTextBox: true,
      fontFace: FONT, valign: "top", lineSpacingMultiple: 1.08,
    }
  );
});

// 右欄:逐項對照表
sA.addText(
  [
    { text: "EDT HMI Studio:一條龍、免寫程式", options: { fontSize: 16.5, bold: true, color: NAVY, breakLine: true } },
    { text: "同一件事,兩種代價", options: { fontSize: 12, color: GRAY } },
  ],
  {
    x: 6.83, y: 1.5, w: 5.87, h: 0.6, margin: 0, isTextBox: true,
    fontFace: FONT, valign: "top", lineSpacingMultiple: 1.1,
  }
);

const cth = (t) => ({ text: t, options: { fill: { color: NAVY }, color: WHITE, bold: true, fontSize: 12 } });
const ctd = (t, opts) => ({ text: t, options: Object.assign({ color: INK, fontSize: 11.5 }, opts || {}) });

sA.addTable(
  [
    [cth("項目"), cth("傳統工具鏈"), cth("EDT HMI Studio")],
    [ctd("所需技能", { bold: true }), ctd("嵌入式 C/C++ 韌體工程師"), ctd("不需寫任何程式", { bold: true, color: NAVY })],
    [ctd("通訊協議", { bold: true }), ctd("手寫解析與驅動,易錯"), ctd("免寫程式,設定即完成", { bold: true, color: NAVY })],
    [ctd("驗證方式", { bold: true }), ctd("須等硬體到位才看得到"), ctd("內建模擬器即時預覽", { bold: true, color: NAVY })],
    [ctd("平台選擇", { bold: true }), ctd("綁定單一晶片生態"), ctd("多平台,硬體選擇自由", { bold: true, color: NAVY })],
    [ctd("原型時程", { bold: true }), ctd("數週至數月"), ctd("一天完成", { bold: true, color: NAVY })],
    [ctd("專案風險", { bold: true }), ctd("時程、人力、整合風險高"), ctd("趨近於零", { bold: true, color: NAVY })],
  ],
  {
    x: 6.83, y: 2.18, w: 5.87, colW: [1.35, 2.32, 2.2],
    border: { type: "solid", color: "D8DEE9", pt: 0.5 },
    fontFace: FONT, valign: "middle", margin: 0.07, rowH: 0.53,
  }
);

// 底部:三項結論
sA.addShape(pres.shapes.ROUNDED_RECTANGLE, {
  x: 0.6, y: 6.2, w: 12.1, h: 0.92, rectRadius: 0.08, fill: { color: NAVY },
});
const gains = [
  { big: "原型速度", label: "數週至數月 → 一天,風險趨近於零" },
  { big: "研發成本", label: "省去韌體團隊與反覆燒錄除錯的工時" },
  { big: "上市速度", label: "更早試錯、更早量產,搶下時間差" },
];
gains.forEach((g, i) => {
  sA.addText(
    [
      { text: g.big, options: { fontSize: 17, bold: true, color: ACCENT, breakLine: true } },
      { text: g.label, options: { fontSize: 12.5, color: ICE } },
    ],
    {
      x: 0.75 + i * 4.03, y: 6.3, w: 3.85, h: 0.72, margin: 0, isTextBox: true,
      fontFace: FONT, align: "center", valign: "middle", lineSpacingMultiple: 1.1,
    }
  );
});

sA.addText(
  "流程示意為 EDT 自繪,非任何廠商之產品畫面;STM32CubeIDE、TouchGFX Designer 為 STMicroelectronics 之產品名稱,僅作為傳統工具鏈的代表性例示。本頁為講者內部參考,不對外投影。",
  {
    x: 0.6, y: 7.18, w: 12.1, h: 0.3, margin: 0, isTextBox: true,
    fontFace: FONT, fontSize: 9.5, color: GRAY,
  }
);
sA.addNotes(
  "講者參考頁,不對外投影。用途:回答「這樣的軟體到底替客戶省下什麼」。傳統做法要用程式語言搭配只有 GUI 的編輯器 — 以 STM32CubeIDE + TouchGFX Designer 為例,五個步驟每一步都有風險:設計一改就要重新生成與合併程式碼、週邊設定錯誤難排查、手寫通訊協議是整合期延誤主因、必須等硬體到位才能上機除錯、每改一次畫面就要重編譯重燒錄重測。EDT HMI Studio 把這五步收斂成一條龍:免寫程式的通訊協議、內建模擬器不必等硬體、多平台不綁晶片生態、AI 自動排版與規劃。結論三句:原型速度數週至數月變一天且風險趨近於零、研發成本省去韌體團隊與反覆燒錄工時、上市速度更早試錯更早量產。注意:流程圖為自繪示意,未使用他人產品截圖,避免著作權爭議。"
);

// ------------------------------------------------- Slide 5(附錄 A 續,講者參考)
const sA2 = pres.addSlide();
sA2.background = { color: WHITE };
addSpeakerBadge(sA2);
sA2.addText("附錄 A(續) | 2026 年 9 月法人說明會", {
  x: 0.6, y: 0.38, w: 9.0, h: 0.32, margin: 0, isTextBox: true,
  fontFace: FONT, fontSize: 13, color: GRAY,
});
sA2.addText("傳統工具鏈的實機畫面", {
  x: 0.6, y: 0.72, w: 9.0, h: 0.6, margin: 0, isTextBox: true,
  fontFace: FONT, fontSize: 30, bold: true, color: NAVY,
});
sA2.addText(
  "同一件事,在傳統工具鏈裡被拆成兩套工具、兩種專業:一邊是寫程式與設定晶片的 IDE,一邊是只管畫面的 GUI 編輯器 —— 兩邊還得反覆來回。",
  {
    x: 0.6, y: 1.4, w: 12.1, h: 0.4, margin: 0, isTextBox: true,
    fontFace: FONT, fontSize: 13.5, color: INK, lineSpacingMultiple: 1.15,
  }
);

sA2.addText(
  [
    { text: "① 寫程式的世界:STM32CubeIDE", options: { fontSize: 16.5, bold: true, color: NAVY, breakLine: true } },
    { text: "專案樹、main.c、HAL 驅動與晶片腳位設定,全部要工程師逐項處理。", options: { fontSize: 13, color: INK } },
  ],
  {
    x: 0.6, y: 1.92, w: 5.87, h: 0.6, margin: 0, isTextBox: true,
    fontFace: FONT, valign: "top", lineSpacingMultiple: 1.1,
  }
);
sA2.addText(
  [
    { text: "② 只管畫面的世界:TouchGFX Designer", options: { fontSize: 16.5, bold: true, color: NAVY, breakLine: true } },
    { text: "畫面拉完之後,程式碼、通訊與整合仍得回到 IDE 手工完成。", options: { fontSize: 13, color: INK } },
  ],
  {
    x: 6.83, y: 1.92, w: 5.87, h: 0.6, margin: 0, isTextBox: true,
    fontFace: FONT, valign: "top", lineSpacingMultiple: 1.1,
  }
);

sA2.addShape(pres.shapes.RECTANGLE, {
  x: 1.02, y: 2.58, w: 5.03, h: 3.24, fill: { color: MAT },
});
sA2.addImage({
  path: path.join(__dirname, "assets", "fig4-stm32cubeide.png"),
  x: 1.08, y: 2.64, w: 4.91, h: 3.12,
});
sA2.addShape(pres.shapes.RECTANGLE, {
  x: 6.77, y: 2.73, w: 5.99, h: 3.27, fill: { color: MAT },
});
sA2.addImage({
  path: path.join(__dirname, "assets", "fig3-touchgfx-designer.png"),
  x: 6.83, y: 2.79, w: 5.87, h: 3.15,
});

sA2.addShape(pres.shapes.ROUNDED_RECTANGLE, {
  x: 0.6, y: 6.28, w: 12.1, h: 0.82, rectRadius: 0.08, fill: { color: NAVY },
});
sA2.addText(
  [
    { text: "傳統:兩套工具、兩種專業、反覆切換與重編譯", options: { fontSize: 16, bold: true, color: ACCENT, breakLine: true } },
    { text: "EDT HMI Studio:一個工具、免寫程式、內建模擬器 —— 原型一天完成,專案風險趨近於零", options: { fontSize: 13, color: ICE } },
  ],
  {
    x: 0.9, y: 6.38, w: 11.5, h: 0.64, margin: 0, isTextBox: true,
    fontFace: FONT, align: "center", valign: "middle", lineSpacingMultiple: 1.1,
  }
);

sA2.addText(
  "圖為 STM32CubeIDE(來源:STMicroelectronics 官方 Flathub 應用頁)與 TouchGFX Designer 4.25.0(本機實際操作擷取)之畫面;兩者均為 STMicroelectronics 產品,商標與畫面著作權屬各該權利人所有,此處僅作傳統工具鏈之例示比較。本頁為講者內部參考,不對外投影。",
  {
    x: 0.6, y: 7.14, w: 12.1, h: 0.3, margin: 0, isTextBox: true,
    fontFace: FONT, fontSize: 9, color: GRAY,
  }
);
sA2.addNotes(
  "講者參考頁,不對外投影。附錄 A 的實機佐證:左圖 STM32CubeIDE — 專案樹裡是 main.c、HAL 驅動、.ioc 設定檔與晶片腳位設定,全部要嵌入式工程師逐項處理;右圖 TouchGFX Designer — 只負責畫面,拉完之後程式碼、通訊協議與整合仍要回到 IDE 手工完成。重點:傳統做法是兩套工具、兩種專業、反覆切換與重編譯;EDT HMI Studio 收斂成一個工具、免寫程式、內建模擬器,原型一天完成、風險趨近於零。著作權:兩張圖屬 ST,已於頁尾標註來源與權利歸屬,且本頁不對外投影。"
);

// ------------------------------------------------- Slide 6(附錄 B,講者參考)
const s4 = pres.addSlide();
s4.background = { color: WHITE };
addSpeakerBadge(s4);
s4.addText("附錄 B | 2026 年 9 月法人說明會", {
  x: 0.6, y: 0.38, w: 9.0, h: 0.32, margin: 0, isTextBox: true,
  fontFace: FONT, fontSize: 13, color: GRAY,
});
s4.addText("LVGL 支援硬體清單", {
  x: 0.6, y: 0.72, w: 9.0, h: 0.6, margin: 0, isTextBox: true,
  fontFace: FONT, fontSize: 30, bold: true, color: NAVY,
});
s4.addText(
  "EDT HMI Studio 以開源 LVGL 圖形引擎為基礎。LVGL 幾乎覆蓋所有主流 MCU/MPU 平台,客戶手上的既有硬體大多可直接使用 —— 這是鏟子適用面極廣、能切進過去觸及不到的 HMI 市場的底氣。",
  {
    x: 0.6, y: 1.42, w: 12.1, h: 0.55, margin: 0, isTextBox: true,
    fontFace: FONT, fontSize: 13.5, color: INK, lineSpacingMultiple: 1.15,
  }
);

const th = (t) => ({ text: t, options: { fill: { color: NAVY }, color: WHITE, bold: true, fontSize: 12.5 } });
const td = (t, bold) => ({ text: t, options: { color: INK, bold: !!bold, fontSize: 12 } });

s4.addTable(
  [
    [th("晶片廠商"), th("代表平台"), th("合作深度與備註")],
    [td("NXP", true), td("i.MX RT 跨界 MCU、LPC、Kinetis"), td("官方合作夥伴;MCUXpresso 一鍵整合,支援硬體加速")],
    [td("Renesas", true), td("RA、RX、RZ 家族"), td("官方合作夥伴;內建 Dave2D GPU 支援與現成專案")],
    [td("Espressif(樂鑫)", true), td("ESP32 全系列"), td("官方合作夥伴;元件管理器無縫整合顯示驅動")],
    [td("STMicroelectronics", true), td("STM32 F4/F7/H7/U5、STM32MP1"), td("官方支援板卡與現成範例專案")],
    [td("Microchip"), td("PIC32、SAM 系列"), td("成熟社群移植")],
    [td("Infineon"), td("PSoC、Traveo 系列"), td("成熟社群移植")],
    [td("Texas Instruments"), td("Sitara AM 系列"), td("成熟社群移植")],
    [td("Nuvoton(新唐)"), td("MA35、M46x/M48x"), td("成熟社群移植;台系供應鏈選項")],
    [td("Raspberry Pi / RISC-V"), td("RP2040、Pi 系列、各式 RISC-V"), td("泛用移植;入門與原型開發常用")],
  ],
  {
    x: 0.6, y: 2.12, w: 12.1, colW: [2.5, 3.9, 5.7],
    border: { type: "solid", color: "D8DEE9", pt: 0.5 },
    fontFace: FONT, valign: "middle", margin: 0.07, rowH: 0.4,
  }
);
s4.addText(
  "LVGL 以 C 語言撰寫、資源需求極低(數十 KB RAM 等級的 MCU 即可運行),幾乎不設硬體門檻。表列 IC 廠商既是生態系夥伴,也是 EDT HMI Studio 未來軟體授權的潛在客戶。完整且持續更新的清單見 lvgl.io/boards 與 lvgl.io/partners。",
  {
    x: 0.6, y: 6.85, w: 12.1, h: 0.45, margin: 0, isTextBox: true,
    fontFace: FONT, fontSize: 11, color: GRAY, lineSpacingMultiple: 1.15,
  }
);
s4.addNotes(
  "講者參考頁,不對外投影。用途:被問到「哪些硬體能用」時的底氣 — LVGL 覆蓋 NXP/Renesas/Espressif(官方夥伴)、ST 等所有主流平台,客戶既有硬體大多可直接支援。加分點:表列 IC 廠商同時是未來軟體授權的潛在對象,呼應第 1 頁「產品力足以獨立授權」。"
);

// ------------------------------------------------- Slide 7(附錄 C,講者參考)
const s5 = pres.addSlide();
s5.background = { color: WHITE };
addSpeakerBadge(s5);
s5.addText("附錄 C | 2026 年 9 月法人說明會", {
  x: 0.6, y: 0.38, w: 9.0, h: 0.32, margin: 0, isTextBox: true,
  fontFace: FONT, fontSize: 13, color: GRAY,
});
s5.addText("同業營收交叉比對與目標檢核", {
  x: 0.6, y: 0.72, w: 9.0, h: 0.6, margin: 0, isTextBox: true,
  fontFace: FONT, fontSize: 30, bold: true, color: NAVY,
});

s5.addTable(
  [
    [th("公司(市場)"), th("商業模式"), th("最新年營收"), th("對照意涵")],
    [
      td("Qt Group(芬蘭上市)", true), td("嵌入式 GUI 軟體授權與訂閱"),
      td("2025 年 €2.163 億\n≈ 2.3 億美元"), td("純軟體授權就是 2.3 億美元等級的生意;EDT 以免費鏟子瞄準其後方更大的硬體市場"),
    ],
    [
      td("Beijer Electronics(瑞典 Ependion 旗下)", true), td("HMI 操作面板硬體為主"),
      td("2024 年 SEK 22.6 億\n≈ 2.2 億美元"), td("中型 HMI 專業廠的體量;EDT 2030 年目標僅約其三成"),
    ],
    [
      td("Weintek 威綸科技(台灣)", true), td("HMI 專業品牌"),
      td("未上市,營收未公開"), td("台灣 HMI 品牌走向全球的成功前例"),
    ],
    [
      td("全台晶像 EDT(3038)", true), td("訂製顯示/觸控模組 + 免費軟體鏟子"),
      td("2025 年新台幣 30.1 億元\n(依慣例以台幣表述)"), td("現有基礎;帶動目標另計於既有營收之上"),
    ],
  ],
  {
    x: 0.6, y: 1.5, w: 12.1, colW: [2.9, 2.6, 2.4, 4.2],
    border: { type: "solid", color: "D8DEE9", pt: 0.5 },
    fontFace: FONT, valign: "middle", margin: 0.07, fontSize: 12,
  }
);

s5.addShape(pres.shapes.ROUNDED_RECTANGLE, {
  x: 0.6, y: 4.62, w: 12.1, h: 2.0, rectRadius: 0.1, fill: { color: TINT },
});
s5.addText(
  [
    { text: "三角檢核 → 原目標 14 億元偏保守,上修至 20 億元", options: { fontSize: 15.5, bold: true, color: NAVY, breakLine: true, paraSpaceAfter: 6 } },
    { text: "① 市場規模法:2030 年全球 HMI 市場約 93–116 億美元,20 億元(≈ 6,500 萬美元)僅佔 0.5–0.7%。", options: { fontSize: 13, color: INK, breakLine: true, paraSpaceAfter: 4 } },
    { text: "② 同業體量法:6,500 萬美元約當 Beijer 與 Qt 年營收的三成上下,仍屬中型專業廠的零頭。", options: { fontSize: 13, color: INK, breakLine: true, paraSpaceAfter: 4 } },
    { text: "③ 自身基礎法:約當 2025 年營收的 66%,分五年達成,自低基期起算並不激進。", options: { fontSize: 13, color: INK, breakLine: true, paraSpaceAfter: 4 } },
    { text: "結論:2030 年帶動硬體營收目標由 14 億元上修至 20 億元,路徑 3 → 8 → 14 → 20 億元(第 2 頁已同步更新)。", options: { fontSize: 13, bold: true, color: NAVY } },
  ],
  {
    x: 0.95, y: 4.8, w: 11.4, h: 1.7, margin: 0, isTextBox: true,
    fontFace: FONT, valign: "top", lineSpacingMultiple: 1.1,
  }
);

s5.addText(
  "資料來源:Qt Group 2025 年報(net sales €216.3M)、Ependion/Beijer Electronics(2024 年營收 SEK 22.6 億)、公開資訊觀測站。金額以美元計價,惟 EDT 自身營收依慣例以新台幣表述;匯率假設:1 歐元 ≈ 1.08 美元、1 瑞典克朗 ≈ 0.095 美元、1 美元 ≈ 新台幣 30 元,約當值僅供量級參考。本頁為講者內部參考,不對外投影。",
  {
    x: 0.6, y: 6.9, w: 12.1, h: 0.45, margin: 0, isTextBox: true,
    fontFace: FONT, fontSize: 10, color: GRAY, lineSpacingMultiple: 1.15,
  }
);
s5.addNotes(
  "講者參考頁,不對外投影。用途:回答「20 億元目標怎麼來的」— 用三角檢核(佔全球市場 0.5–0.7%、同業體量約 Beijer 與 Qt 三成上下、自身基礎 66% 分五年)說明目標務實且偏保守的一側。幣別口徑:同業與市場規模以美元計價,EDT 自身營收(現況與目標)以新台幣表述,換算約 6,500 萬美元。"
);

pres
  .writeFile({ fileName: path.join(__dirname, "EDT_HMI_Studio_2026-09_法說會.pptx") })
  .then((f) => console.log("written:", f));
