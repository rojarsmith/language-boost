# 語境 Context Lab · Vercel POC

第一階段以可直接部署的純前端驗證「聽 → 留意用法 → 說自己的內容 → 追問 → 陌生情境 → 反思與複習」。預設為台灣使用者、產品／專案／技術業務情境、每天 90 分鐘。英語與日語各 10 個原創情境，不依附任何公司產品或商業立場。

這一版沒有後端、正式帳號、API Key、付費模型或跨裝置同步。所有偏好、回答與練習紀錄存在目前瀏覽器的 localStorage；清除網站資料、更換網域／裝置／瀏覽器不會保留同一份紀錄。可在「設定」匯出 JSON 備份。錄音只在本次視窗回聽，關閉後釋放；語音辨識另需使用者勾選，同意音訊可能由瀏覽器送到供應商服務。

## 本機啟動

需要 Node.js 22 以上，不需安裝執行依賴。

```powershell
cd C:\my\build\github\language-boost\web-app
npm run dev
```

開啟 `http://localhost:8000`。麥克風需要 localhost 或 HTTPS。

```powershell
npm run check
npm run build
```

`dist/` 是可發布的網站檔案。正式網站不需要 Node.js 伺服器。

## Vercel 部署

從 Vercel 匯入此 Git 專案，設定：

| 設定 | 值 |
| --- | --- |
| Root Directory | `web-app` |
| Framework Preset | Other |
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Environment Variables | 不需要 |

`vercel.json` 已提供建置設定與安全回應標頭。雲端部署需先將這些檔案提交／推送到你要匯入的 Git 分支，再於 Vercel 匯入專案；Git 推送本身不代表已建立 Vercel 部署。

若使用 Vercel CLI，先在自己的終端登入，再從 `web-app` 執行：

```powershell
npx vercel login
npx vercel
```

先驗證預覽網址的音訊、錄音與保存，確認後可用 `npx vercel --prod` 發布。網址不同會有獨立的本機資料，不會自動從預覽遷移到正式網址。[Vercel Git 部署說明](https://vercel.com/docs/git)、[CLI 部署說明](https://vercel.com/docs/cli/deploy)。

## POC 包含什麼

- 情境：自介、困難經驗、需求訪談、產品價值、時程協調、客戶異議、澄清、租屋、閒聊、點餐。
- 每個情境：完整與初階合成語音、理解題、目標語言單字與文法解釋、文化／對方目的提示、錄音回聽、預設追問與換情境任務。
- 繁中支架可關閉，播放速度、日常投入目標、角色與時區可調整。
- 紀錄：練習時間、文字回答、最卡環節與自評；英日分開顯示。
- 複習：第一次 1 天，後續成功且已到期可延長為 3／7／14／30 天。未到期重練不會跳級；聽力答錯／未確認或自評不足會回到 1 天。這是 POC 排程規則，不是最佳間隔的科學認證。

追問是預先編寫的情境題，不是 AI 理解你的回答。合成语音和辨識能力取決於裝置與瀏覽器。沒有發音評分、CEFR 推估或錄取保證。需搭配真人音訊與真人對話檢查遷移效果，不能只憑熟悉合成語音就判斷能應付面試。

## 計畫與驗收

見 [階段升級計畫](docs/ROADMAP.md)、[學習設計與網路查核](docs/LEARNING_DESIGN.md)、[POC 驗收紀錄](docs/VALIDATION.md)。後端只在 POC 實際試練後進入第二階段，本版不保留未使用的後端框架。

## 檔案

| 路徑 | 用途 |
| --- | --- |
| `frontend/app.js` | 導覽、偏好、本機紀錄與儀表板 |
| `frontend/practice.js` | 六步練習、語音、錄音與保存 |
| `frontend/curriculum.json` | 原創英日情境內容 |
| `scripts/` | 零依賴建置、教材檢查與本機預覽 |
| `tests/poc.cjs` | 可選的 Playwright 瀏覽器驗收 |

瀏覽器驗收需另有 Playwright 與 Chromium；它們不是部署依賴。在已有環境可執行 `node tests/poc.cjs`，或用 `PLAYWRIGHT_PACKAGE`、`PLAYWRIGHT_EXECUTABLE` 指定既有安裝路徑。`POC_URL` 可指定驗收網址。測試寫入自己的全新瀏覽器環境，不操作日常瀏覽器資料。
