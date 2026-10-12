# 日文學習與實務教材

依當前任務選擇教材；每套教材都有自己的入口與學習順序。

| 目標 | 入口 | 內容 |
| --- | --- | --- |
| 重建初階口說、聽力，準備軟體業面試與生活溝通 | [口說與聽力衝刺](speaking-listening-sprint/README.md) | 7／14／30 天計畫、文法、面試、生活與工作會議 |
| 撰寫或查找日文商務信件 | [商務信件](business-email/README.md) | 按日期與主題保存的信件、讀音及用語說明 |
| 準備 EDT HMI Studio 的日文簡報、Demo 與客戶問答 | [產品簡報訓練包](edt-hmi-studio/README.md) | 84 天計畫、產品事實、講稿、題庫、餐敘與活動演練 |

## 目錄結構

```text
japanese/
├── README.md                       # 本總覽
├── speaking-listening-sprint/       # 通用口說、聽力與面試教材
│   ├── README.md
│   └── 01_…09_*.md                 # 按學習順序編號
├── business-email/                  # 商務信件實例
│   ├── README.md
│   └── YYYY-MM-DD-topic.md
└── edt-hmi-studio/                  # EDT HMI Studio 專用訓練包
    ├── README.md                   # 學習入口與教材地圖
    ├── docs/                       # 00–27 章教材，含 07B 選配 Demo
    ├── data/                       # 詞表、題庫、字卡與練習紀錄
    ├── assets/                     # 簡報、Demo JSON、圖像與截圖
    ├── audio/                      # 音訊清單、產生腳本與 WAV
    └── recordings/                 # 個人練習錄音與命名說明
```

## 新增內容的放置規則

- 根目錄只保留總覽；新教材依用途放進對應目錄，每套教材以 `README.md` 作為入口。
- 口說衝刺的章節編號只在該套教材內使用；EDT 教材保留原有 00–27／07B 編號，兩套編號互不連續。
- 商務信件使用 `YYYY-MM-DD-topic.md`，並更新信件索引。
- EDT 訓練包的文件放 `docs/`，CSV／TSV 放 `data/`；產品素材、離線音訊及個人錄音各放對應目錄。
- Markdown 連結使用相對路徑；給陪練工具的 workspace 路徑由儲存庫根目錄起算。

## 舊路徑對照

原本散落在根目錄的 EDT 教材已收進專用訓練包：

| 舊位置 | 新位置 |
| --- | --- |
| `japanese/00_PRODUCT_TRUTH.md` 等編號教材 | `japanese/edt-hmi-studio/docs/`，原檔名保留 |
| `japanese/*.csv`、`japanese/*.tsv` | `japanese/edt-hmi-studio/data/`，原檔名保留 |
| `japanese/assets/` | `japanese/edt-hmi-studio/assets/` |
| `japanese/audio/` | `japanese/edt-hmi-studio/audio/` |
| `japanese/recordings/` | `japanese/edt-hmi-studio/recordings/` |

原 EDT 訓練包首頁移至 [edt-hmi-studio/README.md](edt-hmi-studio/README.md)。口說衝刺與商務信件的既有檔案路徑保留。
