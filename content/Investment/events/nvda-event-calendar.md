---
title: NVDA 事件跟踪日历
tags: [investment, nvda, events, calendar]
---

# NVDA 事件跟踪日历

> **编排原则**：只有日期没有「影响路径 + [[investment-knowledge-base#可证伪条件|可验证指标]]」的事件，无法转化为研究或信号，因此不进入本表。
> 本页由 `report.py` 依据 `code/data/events.json` 每日自动重建；状态与结论由每日复盘更新。
> [[investment-knowledge-base#point-in-time|数据截点]]：**2026-11-05**；生成时间 2026-11-06T12:48:17+00:00。

确定性：`confirmed` 官方确认 / `custom` 高确定性惯例（未官宣）/ `conditional` 条件性待核。状态：`done` 已发生 / `watching` 进行中 / `pending` 未来。[[investment-knowledge-base#来源分级|来源级别]]：`A` 官方一手 / `B` 权威媒体与卖方转述 / `C` 第三方数据站（需交叉验证）。

## 未来节点（倒计时）

| 倒计时 | 日期 | 事件 | 确定性 | 影响路径 | 可验证指标 | 级别 |
|---|---|---|---|---|---|---|
| T- 11d | 2026-11-17 | **[[investment-knowledge-base#财报\|Q3 FY2027 财报]]（[[investment-knowledge-base#盘前盘后交易\|盘后]]）** | `confirmed` | 最硬的需求侧验证 + [[investment-knowledge-base#业绩指引\|Q4 指引]]；[[investment-knowledge-base#隐含波动率\|期权隐含波动率]]最高的单日 | 官方确认电话会 11-17 14:00 PT / 17:00 ET，[[investment-knowledge-base#CFO Commentary\|CFO Commentary]] 约 13:20 PT 书面发布，[[investment-knowledge-base#财年\|财季]]截至 2026-10-25；营收 vs 1080 亿 ±2%；GAAP [[investment-knowledge-base#毛利率\|毛利率]] vs 74.0% ±50bp（管理层已提示 Q4 毛利率因内存成本上升而下滑）；Q4 指引；中国区假设与 51% 新规影响；[[investment-knowledge-base#供应承诺\|供应承诺]]/存货/[[investment-knowledge-base#应收账款周转天数\|DSO]]；FY2028 +70% 目标是否重申；HBM/DRAM 涨价对 BOM 与毛利率的传导（Counterpoint / 摩根大通 11-05~11-06 研报） | `A` |
| T- 12d | 2026-11-18 | **[[investment-knowledge-base#FOMC\|FOMC]] 10/27-28 会议纪要** | `confirmed` | 委员对通胀与金融条件的分歧 | 要求加息的委员人数与措辞 | `A` |
| T- 12d | 2026-11-18 | **美众议院三委员会联合闭门简报会：要求黄仁勋说明出口合规与安全规程** | `confirmed` | 国会审查从公司业务层升级至高管个人关系网 → [[investment-knowledge-base#出口管制\|出口管制]]执法强度与 BIS 规则预期 → 中国区收入假设与合规成本 → 11-17 财报（前一日）中国区指引与 Q4 展望；时点紧邻财报，属计划外政策扰动的候选来源 | 众议院中共问题特别委员会官方新闻稿：Moolenaar（中共问题特别委员会）、Mast（外交事务委员会）、Crawford（情报委员会）三位主席 11-04 联名致函，要求 11-18 在 Rayburn House Office Building 2172 室闭门简报，须于 11-11 前确认出席或提出替代日期；焦点为与新加坡 Megaspeed 前高管 Alice Huang（被指为中方情报资产）的往来、防范外国对手渗透的安全协议、以及受管制 GPU 疑似经第三方转运；NVIDIA 已公开否认转运指控并称去年已核查；收盘后核对：黄仁勋是否确认出席、简报会是否如期、是否触发正式调查或 BIS 规则文本 | `A` |
| T- 17d | 2026-11-23 | **Anthropic IPO 窗口（感恩节前一周，日期为约数）** | `conditional` | AI 融资窗口 → 募资规模（传最高 1000 亿美元）→ 算力采购承诺与 [[investment-knowledge-base#CSP\|CSP]]/neocloud 订单 → NVDA 需求侧能见度；若大幅缩水则算力[[investment-knowledge-base#资本开支\|资本开支]]预期下修 | S-1/招股说明书与定价区间；实际募资额与估值（传 1.5 万亿美元）；是否于 11-23~11-27 当周定价；公司披露的算力采购承诺规模 | `B` |
| T- 24d | 2026-11-30 | **[[investment-knowledge-base#GTC\|GTC Washington]] D.C.（11-30 ~ 12-03）** | `confirmed` | 新国会就职前的政策信号窗口（官方主题：super intelligence 与美国经济增长/科学发现） | 官方议程确认黄仁勋主题演讲 12-01 14:00 ET，地点 Ronald Reagan Building；监管/出口管制/能源表态、政府客户订单、能源部/财政部官员议程 | `A` |
| T- 28d | 2026-12-04 | **美国 11 月[[investment-knowledge-base#非农就业报告\|非农就业报告]]（12-09 FOMC 前最后一份完整就业读数）** | `conditional` | 就业与薪资 → 12-09 FOMC 加息路径 → [[investment-knowledge-base#贴现率\|折现率]] → 长久期成长股估值；且为 10 月非农前值修正的第二次校验窗口 | BLS 官方发布日历核验日期；NFP、失业率、时薪 MoM/YoY；10 月数据修正幅度；CME FedWatch 12 月加息概率变化 | `B` |
| T- 32d | 2026-12-08 | **FOMC + SEP/[[investment-knowledge-base#点阵图\|点阵图]]（12-08 ~ 12-09）** | `confirmed` | 折现率；市场定价 12 月加息 25bp 概率多源 65%~82%（冲突并列） | 是否加息至 4.00-4.25%；2027 中值是否维持约 4.1%；CME FedWatch [[investment-knowledge-base#口径元数据\|口径]]差异需以官方工具为准；11 月非农预计 12-04 发布（B 级转述，早于 12-09 会议），为本轮会议前最后一份完整就业读数 | `A` |
| T- 34d | 2026-12-10 | **11 月 [[investment-knowledge-base#CPI\|CPI]]（约）** | `custom` | 通胀 → 利率路径 → 估值 | 核心 CPI 同比（9月口径约 3.7%）、CME FedWatch | `B` |
| T- 58d | 2027-01-03 | **新国会就职** | `confirmed` | 委员会主席权、监督/听证、拨款；总统否决权限制立法 | 首轮听证议题、AI/[[investment-knowledge-base#数据中心\|数据中心]]法案文本、BIS 规则、RASA 是否重启 | `B` |
| T- 81d | 2027-01-26 | **FOMC 2027 首次会议（1-26 ~ 1-27）** | `confirmed` | 利率路径 | 声明措辞 | `A` |
| T-111d | 2027-02-25 | **Q4 & 全年 FY2027 财报（约）** | `custom` | 下一财年指引 | Q1 FY2028 指引、毛利率、FY2028 增长目标 | `B` |
| T-129d | 2027-03-15 | **GTC 2027（3-15 ~ 3-18，San Jose）** | `confirmed` | 产品路线图与需求能见度 | [[investment-knowledge-base#GPU 架构代号\|Rubin]] Ultra / NVL576 量产时点、网络与软件、订单/产能披露 | `A` |
| T-236d | 2027-06-30 | **四大 CSP 2027 上半年 capex 兑现** | `conditional` | 最核心的多空分歧点：NVDA 收入是客户 capex 的下游函数 | 季度 capex 同比、[[investment-knowledge-base#自由现金流\|FCF]]、折旧增速、AI 收入变现、递延交付表述 | `B` |

## 进行中 / 已发生（含结论）

| 日期 | 事件 | 状态 | 结论 / 观察 | 级别 |
|---|---|---|---|---|
| 2026-11-03 | [[investment-knowledge-base#中期选举\|美国中期选举]]投票 | `done` | 民主党夺回参众两院（AP 计票 参54:44 / 众240:147）；得州、俄亥俄、佐治亚等关键数据中心州翻蓝，触发 AI 基建政策重估 | `B` |
| 2026-11-03 | 全美地方公投对数据中心设限：多源计数冲突待核 | `watching` | 进行中：各州计票与法案文本待核；41/45/46 项三种计数互斥，不作取舍。 | `B/C` |
| 2026-11-05 | AI 基建板块系统性去风险 | `done` | NVDA -9.26% 收 181.60；[[investment-knowledge-base#费城半导体指数\|费半]] -12.25%；[[investment-knowledge-base#VIX\|VIX]] 升至 28.18；单日[[investment-knowledge-base#市值\|市值]]蒸发约 4470 亿美元 | `B` |
| 2026-11-05 | 出口管制升级：NVIDIA 要求云伙伴非中国客户占比 ≥51%，美参院 RASA 法案待表决 | `watching` | 进行中：口头传达的新合约要求，RASA 尚未在参议院通过，BIS 无正式规则文本。 | `B` |
| 2026-11-06 | 10 月非农就业报告（美东 08:30，开盘前 60 分钟） | `watching` | ⏳ 待补充：21:30 北京时间公布后才写入实际值；本轮（20:31）尚未发布，不预填。 | `B` |
| 2026-11-06 | 美股常规交易（盘前 NVDA 反弹约 +2.4%~+3.85%） | `watching` | ⏳ 待补充：22:30 北京时间开盘，收盘 [[investment-knowledge-base#OHLCV\|OHLCV]] 产生后才写入实际涨跌与归因。 | `B` |
| 2026-11-06 | 得州候任州长数据中心政策口径澄清：不叫停已获许可/在建项目 | `watching` | 进行中：仅为投资人转述 + 选前访谈原话，尚无行政命令或法案文本；已驱动 11-06 盘前 AI 硬件反弹。 | `B` |
| 2026-11-06 | NVIDIA 拟改造 Brightspeed 电信旧楼，构建约 1GW 分布式『推理网络』 | `watching` | 进行中：已提交书面提案并请求实地考察，未签正式协议、未官宣。 | `B` |
| 2026-11-06 | 谷歌宣布 170 亿美元怀俄明数据中心（电费 100% 自担） | `done` | 路透 11-06 报道：Alphabet/谷歌将在怀俄明州建首个数据中心，投资 170 亿美元、电费自担、约 3700 个长期岗位；系中期选举后『CSP 把项目迁往政策友好州』的首个可核实例证，指向 capex 迁址（relocation）而非取消（cancellation） | `B` |

## 状态机：把「新闻」变成可跟踪对象

1. **表态 / 传闻** → 记录，但不进入估值假设；
2. **正式文本**（法案、BIS 规则、听证日程）→ 升级为 `confirmed`，标注影响路径；
3. **落地执行**（审批、电力接入、出口许可）→ 写入交付时点假设，触发 capex / 收入节奏重估；
4. **公司披露验证**（[[investment-knowledge-base#10-Q 与 10-K|10-Q]]、CFO Commentary、CSP 财报）→ 用一手数据判定第 3 步是否成立。

> 当前最重要的区分：截至 2026-11-06，强监管仍是**议员表态、候任州长呼吁与地方议案**，**尚无联邦立法**；新国会 2027-01-03 才就职，总统保留否决权。把「表态」直接当作「已落地政策」是最常见的归因错误。

数据来源见 [[nvda-quant-data-sources]]；事件驱动信号见 [[nvda-quant-signals]]。

> 本页为信息整理，不构成投资建议。
