---
title: NVDA 研究简报 · 试运行（截至 2026-11-06）
tags: [investment, nvda, research, brief]
---

# NVDA 研究简报 · 试运行（截至 2026-11-06）

> **这是什么**：应「先看成效、再做完整版」的要求，本文件是**一次自主收集 + 分析的试运行样本**，不是完整研究体系，也不是投资建议。
> **[[investment-knowledge-base#point-in-time|数据截点]]**：美股最近一个完整交易日为 **2026-11-05（周三）收盘**；撰稿时（北京时间 11-06 17:15 ≈ 美东 11-06 04:15 [[investment-knowledge-base#EST 与 EDT|EST]]）**11-06 常规交易尚未开盘**，文中"11-06"数据为亚洲时段/[[investment-knowledge-base#盘前盘后交易|盘前]]快照。
> **[[investment-knowledge-base#来源分级|来源分级]]**：`A` 官方一手（NVIDIA IR / SEC / Fed / NVIDIA 官网）；`B` 权威媒体与通讯社（新华社、中国金融新闻网、财联社、Reuters/AP 转述、China Daily、CGTN）；`C` 第三方数据站与自媒体（需交叉验证，已在文中标注）。
> **[[investment-knowledge-base#口径元数据|口径]]纪律**：凡多源数字冲突，一律并列展示并注明时点/口径，不做静默取舍。

---

## 0. 结论先行

1. **11-05 的 −9.26% 是系统性去风险，不是 NVDA 公司层面的利空**。同日[[investment-knowledge-base#费城半导体指数|费城半导体指数]] −12.25%（2020-03 以来最大单日跌幅）、AMD −17.26%、美光 −17.46%、纳指 −5.52%、[[investment-knowledge-base#VIX|VIX]] 升至 28.18。NVDA 无公司特定负面消息，跌幅小于多数半导体同业 → 这是「AI 基建因子」被整体重定价，而非个股基本面断裂。`B`
2. **现有笔记的归因方向正确，但需从"单一政治因果"升级为"四层结构"**：政治结果是**触发层**，通过[[investment-knowledge-base#数据中心|数据中心]]审批/电力传导到 GPU 交付节奏，再由[[investment-knowledge-base#拥挤交易|拥挤仓位]]、对冲基金去杠杆与[[investment-knowledge-base#负 Gamma|负 Gamma]] **放大**，最后落在早已脆弱的**估值/现金流叙事**上。仅写"民主党限制 AI → 失去信心"会漏掉可交易的变量。
3. **关键区分：目前是"政策预期"，不是"已落地政策"**。截至 11-06，强监管来自议员表态、候任州长呼吁与地方公投，**尚无联邦立法**；新国会 **2027-01-03** 才就职，且总统保留否决权与行政权。多位分析人士判断「调查与监督优先于立法」。`B`
4. **需求侧的一手证据仍强，且尚未被推翻**：[[investment-knowledge-base#CSP|四大 CSP]] 2026Q3 [[investment-knowledge-base#资本开支|资本开支]]合计约 $1,850–2,087 亿（口径不同），同比 +84%~90%；四家均给出 2027 年继续扩张的指引；NVDA Q2 [[investment-knowledge-base#财年|FY2027]] 营收 $962 亿（+106% YoY），Q3 指引 $1,080 亿。**当前定价的是"2027 年 capex 的可持续性[[investment-knowledge-base#贴现率|折现率]]上升"，不是"当期订单取消"**。`A` `B`
5. **未来 3 个月的两个硬节点**：**2026-11-17 [[investment-knowledge-base#财报|Q3 FY2027 财报]]**（官方确认）与 **2027-01-03 新国会就职**；中间夹着 **11-30~12-03 [[investment-knowledge-base#GTC|GTC Washington]] D.C.（政策主题）** 与 **12-08~09 [[investment-knowledge-base#FOMC|FOMC]] + [[investment-knowledge-base#点阵图|点阵图]]**。
6. **数据驱动的第一条纪律：不要直接引用媒体的"[[investment-knowledge-base#前瞻市盈率|前瞻市盈率]]"**。本次检索到 12.9x / 16.5x / 16.6x / 21.5x 四个互斥数字，差异源于财年口径、[[investment-knowledge-base#NTM|NTM]] 与单一财年、[[investment-knowledge-base#每股收益|EPS]] 来源与价格时点（详见 §4.3）。统一口径后自算结果为 **FY2027 约 19.5x、FY2028 约 11.4x**（按 11-05 收盘 $181.60）。

---

## 1. 事实核验：对现有笔记的校正

现有 `[[nvda-analysis]]` 末尾手写记录："*11.5变化 / NVDA大跌，原因是[[investment-knowledge-base#中期选举|美国中期选举]]民主党大获全胜，民主党可能会限制AI发展，故人们失去信心*"。核验结果：

| 原记录 | 核验结论 | 建议修正表述 |
|---|---|---|
| "即将发生的大选" | **已发生**。投票日 2026-11-03，民主党夺回参众两院。AP 计票（美东 11-04 22:28）：参议院 **54:44**、众议院 **240:147**；更早时点报道为众议院 224:133 + 78 席未定，属**计票时点差异**，非矛盾。`B` | "大选"应从**待发生事件**移入**已发生事件**；未来节点改为 2027-01-03 新国会就职与后续立法/听证 |
| "NVDA 大跌" | 准确但**不完整**。11-05 收 **$181.60，−9.26%**，成交额 **$566.87 亿**，单日[[investment-knowledge-base#市值\|市值]]蒸发约 **$4,466–4,470 亿**（史上第二大），较 10-06 [[investment-knowledge-base#最大回撤\|峰值回撤]] **−24.1%（最高收盘口径）/ −25.4%（盘中最高 $243.37 口径）**，正式进入技术性熊市。`B` | 补充"全板块"与"技术性熊市"两个限定 |
| "民主党可能会限制 AI 发展" | **方向对，层级需拆开**。可核实的是：亚利桑那州联邦众议员 Yassamin Ansari 称下届国会头号要务是暂停先进 AI 开发、实施监管并禁止"超级人工智能"；得州候任州长呼吁[[investment-knowledge-base#预测冻结\|冻结]]新建数据中心（得州约占美国计划数据中心容量 **27%**）；某 tracker 称 39 项已决地方数据中心议案中 38 项限制开发（**二手来源，待核**）。`B` `C` | "表态/呼吁/地方议案" ≠ "法律"；传导路径是**审批与电力 → 交付时点**，而非需求立即消失 |
| "故人们失去信心" | **遗漏了同等重要的三条**：① AI capex 与[[investment-knowledge-base#自由现金流\|自由现金流]]背离（谷歌/Meta/亚马逊 Q3 FCF 净流出）；② [[investment-knowledge-base#循环融资\|循环融资]]与 $2,790 亿[[investment-knowledge-base#供应承诺\|供应承诺]]带来的资产负债表疑虑；③ 高杠杆对冲基金去杠杆、负 Gamma 放大。`B` `C` | 用四层因果（§2）替代单一情绪解释 |

**另一个必须记录的口径陷阱**：同为 11-05，不同来源给出 −9.26%（收盘）、−9.18%（另一媒体收盘）、−7.3%（盘中）、−6.94%/ $186.24（盘中）、−9.06%/ $183.04（15:34 盘中）。**只有 $181.60 / −9.26% 是收盘值**，其余为盘中快照。做量化[[investment-knowledge-base#回测|回测]]时误用盘中价会污染事件收益。`B` `C`

---

## 2. 因果分层：为什么是 −9.26% 而不是 −3%

| 层级 | 内容 | 对 NVDA 的传导路径 | [[investment-knowledge-base#可证伪条件\|可证伪条件]] / 观察指标 |
|---|---|---|---|
| **L1 触发（政治事实）** | 民主党控制两院；得州州长与参议员翻蓝；强监管表态密集出现 | 无直接财务影响，改变的是**政策[[investment-knowledge-base#概率分布\|概率分布]]** | 新国会委员会主席人选、听证日程、是否出现正式法案文本 |
| **L2 传导（物理约束）** | 得州占计划数据中心容量约 27%；地方审批、电网接入、变压器/冷却交付周期长 | **GPU 交付与收入确认时点后移**，而非订单取消；NVDA 已在 [[investment-knowledge-base#10-Q 与 10-K\|10-Q]] 风险披露中提示"电力短缺、融资限制、监管障碍可能延迟客户部署"`A` | 四大 CSP 季度 capex 中"递延交付"表述、backlog 转化、DSX POD 交付节奏 |
| **L3 放大（市场结构）** | 拥挤的 AI [[investment-knowledge-base#多头与仓位\|多头]] + 高杠杆对冲基金风险限额 + 净 GEX 约 −95.3M（负 Gamma，[[investment-knowledge-base#做市商\|做市商]]跌时卖出涨时买入）+ 纳指跌破 [[investment-knowledge-base#简单移动平均线\|200 日均线]] | 强制去杠杆使跌幅远大于基本面冲击；VIX 28.18 | VIX 回落速度、GEX 转正、[[investment-knowledge-base#ETF\|ETF]] 资金流、板块[[investment-knowledge-base#超额收益\|相对强弱]]（NVDA vs SOX） |
| **L4 结构（估值叙事）** | 高预期 + AI 投资回报周期不确定：四家 CSP 2026Q3 FCF 分化（微软 +$186 亿，谷歌 −$91 亿、Meta −$21 亿、亚马逊 −$335 亿）；NVDA 长期供应承诺 **$2,790 亿**（上季 $1,190 亿）、存货 $320 亿、[[investment-knowledge-base#应收账款周转天数\|DSO]] 60 天、管理层指引[[investment-knowledge-base#毛利率\|毛利率]]将"稳定在 72–73%" | 折现率与终值假设被上调，估值压缩先于盈利下修 | 毛利率实际路径、存货/DSO 变化、FY2028 营收 +70% 目标是否重申、循环融资担保规模 |

> **核心判断**：L1 是新闻，L2 是可跟踪的经营变量，L3 是短期价格波动的主因，L4 决定中期估值中枢。把四层混为一谈，是"看新闻炒股"最常见的方法论错误。
>
> **反面证据需同等重视**：Google 的 Amin Vahdat 与 Epoch AI 的研究均支持 **Jevons 悖论**——单位算力成本下降（Epoch：达成同等性能所需算力每年约降 3 倍）历史上反而扩大总算力消耗；[[investment-knowledge-base#样本内与样本外|test]]-time compute / agentic 推理使单次任务 token 消耗成数量级上升。若效率提升转化为需求扩张，L4 的悲观叙事可能被证伪。`B` `C`

---

## 3. 未来事件日历（用户重点：不只记录已发生，还要编排将发生）

确定性标记：`✅ 官方确认` / `◐ 高确定性惯例（未官宣）` / `○ 条件性或待核`

| 日期 | 事件 | 确定性 | 影响路径 | 需跟踪的可验证指标 |
|---|---|---|---|---|
| 2026-11-06（美东） | 美股开盘；亚洲盘已延续跌势：三星 −12%、SK 海力士 −15%，标普期货 −0.6%、纳指100 期货 −0.8% | ○ 盘中 | 检验 L3 去杠杆是否结束 | [[investment-knowledge-base#开盘缺口\|开盘缺口]]、VIX、SOX 相对强弱、收盘[[investment-knowledge-base#量比\|量比]] |
| 2026-11-11 | FOMC 10 月会议纪要（汇通网日历口径）| ○ 口径存疑 | 利率路径预期 | — |
| **2026-11-17（二）盘后** | **Q3 FY2027 财报**（季度截至 10-25）；电话会 17:00 ET，CFO 书面评论约 13:20 PT 发布 | ✅ NVIDIA 官网 10-28 公告 `A` | 最硬的基本面验证 | 实际营收 vs **$1,080 亿 ±2%**；GAAP 毛利率 vs **74.0% ±50bp**；OpEx vs **~$92 亿**；**[[investment-knowledge-base#业绩指引\|Q4 指引]]**；中国数据中心收入假设；供应承诺/存货/DSO；FY2028 +70% 目标是否重申 |
| 2026-11-18 | FOMC 10/27–28 会议纪要 | ✅ Fed 官网 `A` | 加息路径措辞 | 委员对通胀与金融条件的分歧 |
| **2026-11-30 ~ 12-03** | **GTC Washington, D.C.**（官方主题："AI policy meets AI breakthroughs"）| ✅ NVIDIA 官网 `A` | **政治风险的政策信号窗口**，恰好在新国会就职前 | 监管/[[investment-knowledge-base#出口管制\|出口管制]]/能源相关表态、政府客户订单、游说信号 |
| 2026-12 上旬 | 11 月 [[investment-knowledge-base#CPI\|CPI]]（约 12-10）；RTX PRO 5500 对华样品交付（Reuters 10-20 报道） | ◐ / ○ | 通胀→利率→估值；中国区边际增量 | CPI、CME FedWatch、样品是否如期 |
| **2026-12-08 ~ 09** | **FOMC + SEP/点阵图**（2026 年最后一次） | ✅ Fed 官网日历 `A` | 折现率；沃什已明确"利率对 AI 基建投资有实际影响"，并拒绝前瞻指引 `B` | 是否加息 25bp 至 4.00–4.25%（J.P. Morgan 与预测市场倾向）；2027 中值是否维持 ~4.1%（即 2027 全年不降息） |
| **2027-01-03** | **新国会就职** | ✅ 法定 `B` | 委员会主席权、监督/听证、拨款与债务上限；总统否决权限制立法 | 首轮听证议题、AI/数据中心相关法案文本、出口管制行政规则 |
| 2027-01（Q1） | RTX PRO 5500 对华商业交付（工作站卡，非数据中心，边际影响）；DSX POD 开始交付（部署周期由 ~6 个月压缩至最快 14 天） | ○ 厂商计划 `B` | 交付能力取代预算成为瓶颈 | 实际[[investment-knowledge-base#派发\|出货]]量、产能爬坡、客户验收 |
| 2027-01-26 ~ 27 | FOMC 2027 首次会议 | ✅ Fed 日历 `A` | 利率路径 | 声明措辞 |
| 2027-02 下旬 | Q4 & 全年 FY2027 财报 | ◐ 惯例（前次 2026-02） | 下一财年指引 | Q1 FY2028 指引、毛利率 |
| **2027-03-15 ~ 18** | **GTC 2027**（San Jose；3-14 工作坊、3-15 主题演讲） | ✅ NVIDIA 官网 `A` | 产品路线图与需求能见度 | [[investment-knowledge-base#GPU 架构代号\|Rubin]] Ultra / NVL576（计划 2027H2 量产）、Feynman 路线、网络与软件、订单/产能披露 |
| 2027 H1 | 微软明确"2027 年 1–6 月 capex 进一步加速"；谷歌/亚马逊/Meta 均指引 2027 显著增长 | ◐ 公司指引 `B` | **最核心的多空分歧点** | 四家季度 capex 与 FCF、折旧增速、AI 收入变现速度（AWS 称推理已占 AI 收入一半以上） |
| 2027 H2 | Rubin Ultra（NVL576，144 GPU/柜、~600kW）计划量产 | ○ 产业链消息 `C` | 产品换代与单价 | 是否延期、800V 供电与液冷配套 |
| 2027 全年 | 预算/债务上限谈判；对华出口管制规则变化；甲骨文已指引 2028–2029 财年 capex 见顶回落 | ○ 条件性 `B` | 尾部风险与需求二阶导 | 立法进展、BIS 规则、CSP 长期 capex 曲线 |

> **编排原则**：每个事件必须配「影响路径 + 可验证指标」。只有日期没有指标的事件，无法转化为研究或信号。

---

## 4. 数据驱动：一次真实信号计算（试运行）

### 4.1 数据快照（截至 11-05 收盘）

| 指标 | 数值 | 来源/口径 |
|---|---|---|
| 收盘价 / 日涨跌 | **$181.60 / −9.26%** | 行情数据（收盘）`B` |
| 开/高/低 | $196.07 / $196.25 / $181.46 | 同上 |
| 成交量 / 成交额 | 306,127,783 股 / $566.87 亿 | 同上 |
| 前两日 | 11-04：$200.13（−3.17%，1.49 亿股）；11-03：$206.69（+2.29%，0.92 亿股） | 同上 |
| 两日累计 | **−12.14%** | 自算 |
| 2026 年内 | −2.93%（基准 2025-12-30 收 $187.09）；振幅 42.48% | 行情数据 `B` |
| 52 周区间 | $164.27 – $243.37；当前位于约 **21.9%** 分位 | 自算 / StockAnalysis `C` |
| 峰值回撤 | **−25.4%**（对 10-06 高点 $243.37）；−24.1%（最高收盘口径） | 自算 / 道琼斯市场数据 `B` |
| 市值 | 11-04 约 $4.83 万亿；11-05 单日蒸发约 $4,470 亿；峰值以来缩水约 $1.4 万亿 | `B` `C` |
| VIX | 28.18（3 月底以来最高） | `B` |
| [[investment-knowledge-base#RSI\|RSI(14)]] | 33.6（接近但未进入 <30 超卖区） | 11-05 15:34 盘中 `C` |
| 分析师 | 62 位、共识 Strong Buy；目标均价 **$327.14**，中位 $315，区间 **$180–$515** | 11-04 StockAnalysis `C` |
| [[investment-knowledge-base#期权\|期权]]（低可信度） | [[investment-knowledge-base#隐含波动率\|ATM IV]] 98.7%、隐含日波动 ±4.13%（$7.52）、P/C OI 0.72、Max Pain $207.5、Put Wall $185 / Call Wall $210、净 GEX −95.3M | 第三方自动化站，11-06 更新 `C` |

> **[[investment-knowledge-base#分析师目标价|目标价]]区间 $180–$515 相差 2.9 倍**，本身就是"分歧极大"的量化证据；均值 $327.14 相对 $181.60 隐含 +80.1%，不宜作为预测使用。

### 4.2 用站内已有框架判定 11-05（对接 `[[earnings-drift-strategy]]`）

现有策略的四条件与本次数据对照：

| 条件 | 阈值 | 11-05 实测 | 判定 |
|---|---|---|---|
| 大波动 | \|事件收益\| > 3% | −9.26% | ✅ |
| 巨量 | 量比 > 2x | 3.06 亿 / 1.49 亿 = **2.05**（对前一日） | ✅ *但口径不完整* |
| 改变原趋势 | 定性 | 跌破 200 日均线、进入技术性熊市 | ✅ |
| 站稳 | 后续 3–5 日维持有利一侧 | **11-06~11-12 数据尚不存在** | ❌ 未确认 |

**输出：3/4 满足，"站稳"未确认 → 按纪律，11-05 不构成建仓信号。** 需等待 11-06 起 3–5 个交易日确认，且按[[investment-knowledge-base#做空与空头|空头]]/回避方向处理，不抄底。

**两点必须诚实说明**：① 标准量比应为「当日量 / 前 [[investment-knowledge-base#ADV20|20 日均量]]」，此处仅有前一日数据，2.05 是**代理值**，完整版会用 `yfinance` 重算；② 11-05 并非财报事件，套用 [[investment-knowledge-base#PEAD|PEAD]] 框架只是**演示量价信号的工程化判定**，不构成策略适用性的证据。此前本仓库实测（2023-10~2026-10，8 次财报）显示该 naive 信号**一次未触发**，且多数财报后出现反转——这是对"跟随巨轮"叙事的重要反证，应保留。

### 4.3 估值口径冲突：本次最重要的"数据卫生"案例

| 来源 | 所称 forward [[investment-knowledge-base#市盈率\|P/E]] | 时点 | 推断口径 |
|---|---|---|---|
| Yahoo Finance AlphaSpace（转引） | **12.9x** | 2026-11 初 | 大概率 FY2028 预期 EPS |
| Jim Cramer（CNBC） | 16.5x | 11-05 | NTM / 混合口径 |
| StockAnalysis | 16.6x | 11-04（$200.13） | NTM |
| Investing.com / Finnhub | 21.5x | 11-05 15:34（$183.04） | 口径未披露 |
| 媒体另引 | [[investment-knowledge-base#TTM\|TTM]] 25.3x / 25.88x | 11-04~05 | 过去 12 个月 EPS $8.09 / $7.99 |

**统一口径自算（价格一律用 11-05 收盘 $181.60）**：

| EPS 口径 | EPS | P/E |
|---|---|---|
| TTM（$8.09 / $7.99） | 8.09 / 7.99 | **22.4x / 22.7x** |
| FY2027 市场共识（财年截至 2027-01） | 9.3124 | **19.5x** |
| FY2028 市场共识 | 15.9146 | **11.4x** |

> **结论**：NVDA 财年与自然年错位（FY2027 覆盖 2026-01 末~2027-01 末），叠加 NTM/单一财年/GAAP 与 non-GAAP EPS 混用，造成近 **2 倍** 的表观差异。任何"便宜/贵"的判断，必须先声明"用哪个财年、哪个 EPS、哪个价格时点"。这也是完整版程序必须把**口径元数据**写进数据结构的原因。PEG 0.20（7-31）与 0.27（11 月初）同理，依赖增长率假设，不宜单独引用。

### 4.4 建议长期跟踪的核心信号（分层，非交易建议）

| 类别 | 信号 | 为什么重要 | 数据源 |
|---|---|---|---|
| 趋势 | 200 日均线、[[investment-knowledge-base#52 周分位\|52 周分位]]、峰值回撤 | 11-05 跌破 200 日线是风控/CTA 触发条件 | 行情 |
| [[investment-knowledge-base#动量\|动量]] | 12–1 月动量、RSI(14) | Jegadeesh & Titman (1993) 中期动量；RSI 仅作极端度参考 | 行情 |
| 波动 | [[investment-knowledge-base#已实现波动率\|已实现波动率]]、VIX、ATM IV、IV 与 RV [[investment-knowledge-base#买卖价差\|价差]] | 高 IV 意味着财报/政策事件被高度定价；负 Gamma 放大日内波动 | CBOE / 期权链 |
| 量能 | 20 日量比、[[investment-knowledge-base#OBV\|OBV]]、ADV | 机构调仓痕迹（VPIN 框架）；ADV 过滤流动性 | 行情 |
| 事件 | 财报日事件收益、指引差（guidance surprise）、PEAD 漂移 | Ball & Brown (1968)、Bernard & Thomas (1989/1990) | SEC 8-K / IR |
| 基本面 | 数据中心营收环比、毛利率、存货、DSO、供应承诺、FCF | 越是"供给受限"叙事，越要盯交付与营运资本 | 10-Q / 10-K |
| 产业链 | 四大 CSP capex 与 FCF、云 backlog、电力/交付递延表述 | NVDA 收入 ≈ 客户 capex 的下游函数 | 各家财报 / 券商汇总 |
| 估值 | 统一口径 forward P/E 的历史分位、PEG（注明增长率来源） | 避免 §4.3 的口径污染 | 自建 |
| 政策 | 法案文本、听证日程、BIS 规则、得州审批数据 | 把"新闻"变成可跟踪[[investment-knowledge-base#政策状态机\|状态机]] | Fed / Congress / BIS / NVIDIA IR |

**方法与教程来源（可复现路径）**：
- 数据：`yfinance`（免费 [[investment-knowledge-base#OHLCV|OHLCV]]/财务）、SEC EDGAR（财报原文，避免二手转述）、FRED（利率/宏观）、CME FedWatch（利率概率）。
- 指标与回测：`pandas_ta` / `TA-Lib`（SMA/[[investment-knowledge-base#指数移动平均线|EMA]]、RSI、[[investment-knowledge-base#MACD|MACD]]、[[investment-knowledge-base#ATR|ATR]]、Bollinger）、`backtrader`（事件驱动）、`vectorbt`（向量化）、`alphalens`（因子分析）、`empyrical`（绩效指标）。教程入口：[Technical Analysis Library in Python 文档](https://technical-analysis-library-in-python.readthedocs.io/)、[Trading Strategies Academy: Python Indicators](https://trading-strategies.academy/archives/3523)、[GitHub 多策略回测示例](https://github.com/ishtufinquant/backtesting)。
- 学术与风控（**比"哪条均线好用"重要得多**）：Jegadeesh & Titman (1993, *JF*) 动量、Fama & French (1993/2015) 因子、Moreira & Muir (2017, *JF*) 波动率管理组合、Han/Zhou/Zhu 动量崩溃止损、López de Prado (2014) 回测[[investment-knowledge-base#过拟合|过拟合]]与 Deflated Sharpe (2014)、*Advances in Financial Machine Learning* (2018)、Kakushadze (2016) *101 Formulaic Alphas*。中文索引：[量化必读论文清单](https://waylandz.com/quant-book/ArXiv%20Papers/)、[Quant Wiki](https://quant-wiki.com/library/book/%E9%87%8F%E5%8C%96%E4%BA%A4%E6%98%93/101%20Formulaic%20Alphas%20-%20arXiv.org/)。
- **必须内置的回测纪律**：walk-forward 样本外验证、含[[investment-knowledge-base#交易成本|手续费]]与[[investment-knowledge-base#滑点|滑点]]、point-in-time 数据（财报用**公布日**而非报告期末，防[[investment-knowledge-base#前视偏差|前视偏差]]）、[[investment-knowledge-base#多重检验|多重检验]]校正、参数稳定性检验。本仓库 `strategy/earnings-drift-strategy.md` 已记录"未触发 + 多数反转"的负面实证，是很好的起点。

### 4.5 最小可运行示范

`code/nvda_snapshot_demo.py`（**纯 Python 标准库**，无需联网、无需安装依赖，位于已被忽略的 `code/` 目录）把本次收集的真实 OHLCV 与 EPS 作为输入，复算 §4.1–4.3 的全部数字并输出 §4.2 的四条件判定。试运行结果：

```
NVDA SNAPSHOT DEMO | as of 2026-11-05 close
[price]   close 181.60  daily -9.26%  2d cumulative -12.14%  YTD -2.93%
[volume]  306,127,783 sh  turnover $56.69B  ratio(vs prev day) 2.054
[range]   drawdown from 243.37 = -25.38%  52w position = 21.91%
[valuation]  TTM(8.09) 22.4x | FY2027(9.3124) 19.5x | FY2028(15.9146) 11.4x
[PEAD-like 4-condition check]  shock=PASS  volume=PASS  trend=PASS  hold=UNCONFIRMED
=> SIGNAL: WAIT (3/4; "hold" needs 2026-11-06..11-12 confirmation)
NOTE: volume ratio uses prev-day only; production version must use 20d ADV.
```

> 这只是**计算骨架的成效展示**。完整版程序（自动取数、事件日历、信号层、含成本的 walk-forward 回测、定期简报生成）待确认方向后再开发，见 §8。

---

## 5. 机构观点：多空并列（仅作信息整理，不构成建议）

| 机构 / 人物 | 观点 | 日期 | 来源级别 |
|---|---|---|---|
| BofA（Vivek Arya） | 维持 Buy | 11-03 | `C` 转述 |
| Barclays（T. O'Malley） / Bernstein（D. Zhu） | 目标价 $275 / $400 | 10-26 | `C` 转述 |
| 大和（Daiwa） | 维持"跑赢大市"，认为 AI 泡沫忧虑将随时间消散；确认 Vera Rubin 全面量产 | 10-26 | `B` |
| StockAnalysis 共识 | 62 位分析师 Strong Buy，均价 $327.14（$180–$515） | 11-04 | `C` |
| Jim Cramer（CNBC） | "约十年来最便宜估值"，16.5x | 11-05 | `C` |
| Founder ETFs（M. Monaghan） | 暴跌主因是对冲基金去杠杆，建设不会停，财报前视为机会 | 11-06 | `B` 转述 |
| Aptus Capital（D. Wagner） | 估值修复而非逻辑崩塌，护城河（芯片+[[investment-knowledge-base#CUDA\|CUDA]]+开发者）仍宽 | 11-06 | `B` 转述 |
| Miller Tabak（M. Maley） | 盈利担忧加剧，AI 叙事出现裂痕 | 11 月初 | `C` 转述 |
| George Noble（前 Peter Lynch 分析师） | 循环融资 ≈ 2000 年思科供应商融资；NVDA 标普权重约 8%，为思科峰值两倍，警告系统性脆弱；技术面跌破长期上升楔形 | 11-06 | `B` 转述 |
| J.P. Morgan | 12 月或再加息一次；2027 全年按兵不动（中值 ~4.1%） | 10 月 | `C` |
| 中信建投 / 中信证券 | 北美 CSP capex 维持高强度，2027 继续拉动硬件与能源基建 | 11-02/03 | `B`（卖方研报转述） |

> **读法**：分歧不在"当期业绩好不好"（Q2 是纪录、Q3 指引高于预期），而在 **① 2027 capex 能否持续、② 用哪个财年口径给估值、③ 循环融资是否构成资产负债表风险**。这三点恰好对应 §4.4 中的"产业链 / 估值 / 基本面"三组信号。

---

## 6. 情景框架与可证伪条件（不含价格预测）

| 情景 | 需要同时成立的条件 | 最先出现的观测证据 | 会使该情景失效的证据 |
|---|---|---|---|
| **偏多修复** | 11-17 财报营收 ≥ 指引上沿且 Q4 指引不降；毛利率守住 74%；新国会无实质限制立法；12 月 FOMC 不加息或措辞转中性 | 财报后首个交易日量价站稳、GEX 转正、VIX 回落、CSP 重申 2027 capex | Q4 指引低于季节性等比增长、存货/DSO 继续上升、正式法案文本出现 |
| **基准震荡** | 业绩达标但政策噪音持续；利率高位、估值口径重新锚定 | 高 IV 维持、区间内反复、板块内部分化 | 上述任一方向被强数据打破 |
| **偏空延续** | 2027 CSP capex 指引下修 / FCF 持续恶化 / 监管从表态转为审批限制 / 毛利率向 72% 以下滑动 | 四大 CSP 财报指引下调、供应承诺减值、电力项目延期公告、FY2028 +70% 目标被撤回 | capex 与 AI 收入变现同步加速、政策明确不限制数据中心 |

> 框架的价值在于**先写清"什么会证明我错"**，再谈观点。这也是完整版自动化要输出的字段。

---

## 7. 来源清单

**A · 官方一手**
- NVIDIA Newsroom — [Q3 FY2027 财报电话会公告（2026-10-28）](https://nvidianews.nvidia.com/news/nvidia-sets-conference-call-for-third-quarter-financial-results-6928873)
- NVIDIA IR — [Q2 FY2027 CFO Commentary (PDF)](https://investor.nvidia.com/files/doc_financials/2027/Q227/Q2FY27-CFO-Commentary.pdf)、[Q2 FY2027 电话会实录 (PDF)](https://investor.nvidia.com/files/content_files/TRANSCRIPT_-NVIDIA-Corp-NVDA-US-Q2-2027-Earnings-Call-26-August-2026-5_00-PM-ET.pdf)
- NVIDIA Newsroom — [Press Releases（Vera Rubin / Oracle 多吉瓦合作，10-28）](https://nvidianews.nvidia.com/cats/press_release.xml)
- NVIDIA GTC — [GTC 活动日历](https://nvidia.com/gtc/events)、[GTC 2027 FAQ（3/14–18）](https://www.nvidia.com/ja-jp/gtc/faq/)
- Federal Reserve — [FOMC 日历 2021–2027](https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm)、[2026 年 12 月日历](https://www.federalreserve.gov/newsevents/2026-december.htm)、[芝加哥联储日历](https://www.chicagofed.org/utilities/about-us/federal-reserve-calendars)
- SEC EDGAR — https://www.sec.gov/edgar （10-Q/10-K 原文，查 $2,790 亿供应承诺与风险披露）

**B · 权威媒体 / 通讯社 / 卖方研报转述**
- [中国金融新闻网：美股芯片股遭大规模抛售，纳指重挫逾 5.5%（11-06）](https://www.financialnews.com.cn/2026-11/06/content_460411.html)
- [新华财经：美国股市缘何暴跌？（11-06）](https://www.cnfin.com/yw-lb/detail/20261106/4492002_1.html)
- [中国日报：Democratic wave reshapes Washington（11-04/05）](https://ex.chinadaily.com.cn/exchange/partners/70/rss/channel/www/columns/y38633/stories/WS6aec09abe4b03ebf8519a7cb.html)、[Blue wave sweeps US midterms](https://ex.chinadaily.com.cn/exchange/partners/70/rss/channel/www/columns/y38633/stories/WS6aeae554e4b06d4aa05670bf.html)
- [CGTN：US midterms 2026 five key takeaways](https://news.cgtn.com/news/2026-11-04/US-midterms-2026-Five-key-takeaways-as-Democrats-sweep-Congress-1RNuNTtD5G8/p.html)
- [央视新闻：美民主党重掌国会两院](https://ysxw.cctv.cn/article.html?toc_style_id=feeds_default&item_id=9462918816660330298&channelId=1119)
- [财联社（经网易转载）：英伟达迈入技术性熊市（11-06）](https://www.163.com/dy/article/LB1UHPRE05198CJN.html)、[智通财经：循环融资警告](https://www.163.com/dy/article/LB1R7FPC05198UNI.html)
- [新浪财经/中信建投：北美 CSP 资本开支维持高强度（11-03）](https://finance.sina.cn/2026-11-03/detail-inixmhhi8790528.d.html)、[同花顺：三季报披露，AI 硬件行业怎么看](https://m.10jqka.com.cn/20261102/c681363412.shtml)、[腾讯网：2087 亿美元资本开支](https://new.qq.com/rain/a/20261103A08QE500)、[中时新闻网：四大 CSP 资本支出暴增 90%](https://www.chinatimes.com/cn/realtimenews/20261103002182-260410)
- [南方+：美股狂崩，算力账该重新算算了](https://www.nfnews.com/content/EynGgEzQ3Z.html)
- [新浪财经：亚市早盘美股期指延续跌势（11-06）](https://finance.sina.com.cn/stock/usstock/c/2026-11-06/doc-inixtxma5097492.shtml)
- [汇通网：美联储 10-28 决议与 12 月日程](https://bank.fx678.com/?show=big&show_shop=0)、[沃什发布会：利率对 AI 投资产生实际影响](https://fx678.com/C/20261029/202610290320588812.html)
- [大和：维持英伟达跑赢大市（财联社 10-26）](https://api3.cls.cn/b/2515182)
- [Aquanode：NVIDIA H20 export status timeline（基于 SEC 文件）](https://www.aquanode.io/blog/nvidia-h20-guide)、[上海交大 ATII：2026 国内合规算力卡](http://atii.edu-sjtu.cn/article/10116)、[三个皮匠报告：34% 中国份额与零收入指引](https://www.sgpjbg.com/searchtag/27338256.html)
- [icspec：谷歌解析 AI 基建与 Jevons 悖论](https://www.ictrade.cn/news/article-details/2562392)、[The Integrator：When power becomes the bottleneck（IEA 415→945 TWh）](https://integratormedia.com/?p=38799)

**C · 第三方数据站（仅作交叉参考，不单独作为依据）**
- [Capital Markets Elite：NVDA Q3 FY2027 财报日与指引](https://www.cmelitegroup.com/zh/knowledge-hub/nvidia-earnings-date)
- [StockAnalysis 转述（InsurSentry）：估值、目标价、52 周区间](https://insursentry.com/nvidia-nvda-stock-200-thursday-after-the-midterm-chip)
- [Finnhub / Investing.com：Mag7 估值对比与 RSI](https://finnhub.io/api/news?id=496eac2bb303ceb2a17a87dc0bb8ab068c59af155a51972a772f76d316dff50c)
- [读懂 AI 时代：前瞻市盈率降至 12.9 倍](https://www.readaitime.com/news/2026-11-02/kdg3yfaf)、[BitComme：Cramer 16.5x 与 EPS 共识](https://bitcomme.com/nvidia-stock-just-crashed-22-jim-cramer-says-its-the-cheapest-in-a-decade)
- [Sell The News：NVDA 期权 GEX / Max Pain](https://sellthenews.org/stocks/options/NVDA?lang=zh)
- [XTB：Fed 2026–2027 利率预测](https://www.xtb.com/en/education/the-fed)、[PrimeRates：FOMC 日程与市场概率](https://primerates.com/primerate/fed-meeting-schedule/)
- [Financial-News：Q2 FY2027 财报与 $279B 供应承诺](https://www.financial-news.co.uk/nvidia-quarterly-revenue-doubles-to-96-2bn-on-ai-infrastructure-surge/)、[InsiderFinance：供应承诺与 72–73% 毛利率指引](https://www.insiderfinance.io/news/nvidia-earnings-show-record-quarter-and-strong-guidance)
- [百度百科：Rubin Ultra 规格（待官方确认）](https://baike.baidu.com/item/Rubin%20Ultra/68625490)

---

## 8. 后续完整版规划（待确认后执行）

**信息管线（自然语言层）**
1. 分层采集：`事件日历（确定/待定）` → `已发生事实` → `市场是否已定价` → `待落地政策状态机`，每条带「来源级别 + 时间戳 + 影响路径 + 可证伪条件」。
2. 固定跟踪源：NVIDIA IR / SEC EDGAR、Fed、Congress.gov 与 BIS、四大 CSP 财报、IEA/Epoch AI、Reuters/AP/权威财经媒体。
3. 输出节奏：周度简报 + 财报/政策事件专项；每次更新保留历史版本，便于事后校验判断准确率（避免"事后合理化"）。

**程序层（全部置于 `code/`，不入库、不发布）**

| 模块 | 职责 | 依赖 |
|---|---|---|
| `data_ingest.py` | OHLCV、财报、事件日历、宏观数据落地为带口径元数据的本地数据集 | yfinance / SEC EDGAR / FRED |
| `signals.py` | 趋势、动量、波动、量能、事件、估值分位；统一 forward P/E 口径 | pandas / pandas_ta |
| `backtest.py` | walk-forward、含成本与滑点、Deflated Sharpe、参数稳定性 | vectorbt / backtrader / empyrical |
| `report.py` | 生成周度简报、异常告警、[[investment-knowledge-base#计划内事件\|事件倒计时]] | 标准库 |

**代码隔离（第 3 项要求）**
- 现状核验：`.gitignore` 第 15 行 `content/Investment/code/` 已生效；`git check-ignore -v` 确认脚本被忽略；且 Quartz 构建使用 `globby({ gitignore: true })`，实测当前配置下 `code/` 下 4 个文件**均不会被复制到 `public/`**（`public/` 中也未发现 .py）。
- 本次加固：`.gitignore` 增加通用目录与缓存规则；`quartz.config.ts` 的 `ignorePatterns` 增加 `**/code/**` 作为**发布层独立兜底**（即使将来 .gitignore 被误改，代码也不会被静态发布）。
- 建议的长期形态：把研究与代码彻底分离——`content/Investment/` 只放可发布的 Markdown；`code/` 只放脚本与本地数据；敏感草稿放 `private/`（已在 ignorePatterns 中）。

---

## 免责声明

本文件为个人学习与研究记录，**不构成任何投资建议、要约或价格预测**。所有数据均有强时效性，且部分来自二手转述或第三方自动化站点，请以官方来源（NVIDIA IR、SEC EDGAR、Fed、交易所行情）为准。历史规律不代表未来；美股投资涉及汇率、税务（如 [[investment-knowledge-base#W-8BEN|W-8BEN]]）与监管风险，决策需独立判断，必要时咨询持牌顾问。相关阅读：[[nvda-analysis]]、[[earnings-drift-strategy]]、[[risk-management]]、[[resources]]。
