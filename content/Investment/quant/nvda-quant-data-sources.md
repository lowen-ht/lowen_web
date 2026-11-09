---
title: 教程 · 数据源 · 研究 · 机构观点
tags: [investment, nvda, quant, resources, sources]
---

# 教程 · 数据源 · 研究 · 机构观点

> 配套 [[nvda-quant-signals]]。本页回答原始需求里的两件事：**「搜索相关教程」** 与 **「提供来源相关研究，或投资公司建议」**。
>
> [[investment-knowledge-base#来源分级|来源分级]]：`A` 官方一手 ｜ `B` 权威媒体 / 通讯社 / 卖方转述 ｜ `C` 第三方数据站 / 教程 / 自媒体（需交叉验证）。**C 级不单独作为依据。**
>
> 机构观点仅作信息整理，**不构成投资建议**，也不代表本板块采纳其结论。

---

## 1. 教程路径：从零依赖到可复现研究

本仓库的完整版程序刻意做到 **Python 标准库即可运行**（`urllib` 直连行情 JSON + 手写指标），以便任何人在不装包的情况下审计每个数字。升级路径如下：

| 阶段 | 学什么 | 具体教程 / 文档 |
|---|---|---|
| **0 · 数据基础** | [[investment-knowledge-base#OHLCV\|OHLCV]] 清洗、简单/[[investment-knowledge-base#简单收益与对数收益\|对数收益]]、滚动统计、[[investment-knowledge-base#年化\|年化]] | [Python Data Analysis for Trading: pandas & NumPy Guide](https://quantengines.com/blog/python-data-analysis-trading)（含 `pct_change` / `rolling` / `√252` 完整代码）`C` |
| **1 · 指标** | [[investment-knowledge-base#简单移动平均线\|SMA]]/[[investment-knowledge-base#指数移动平均线\|EMA]]、[[investment-knowledge-base#RSI\|RSI]]、[[investment-knowledge-base#MACD\|MACD]]、[[investment-knowledge-base#ATR\|ATR]]、[[investment-knowledge-base#布林带\|布林带]]的公式含义 | [Technical Analysis Library in Python 文档](https://technical-analysis-library-in-python.readthedocs.io/)；[Trading Strategies Academy: Python Indicators](https://trading-strategies.academy/archives/3523) `C` |
| **2 · 取数** | `yfinance` / Yahoo chart JSON、SEC EDGAR、FRED | [vectorbt Tutorial 2026](https://www.quantt.co.uk/resources/vectorbt-tutorial)（含 `YFData.download` 与 5 行均线交叉[[investment-knowledge-base#回测\|回测]]）`C` |
| **3 · 事件驱动回测** | Cerebro / Strategy / Data Feed / `next()` 的生命周期 | [PyQuant News: 如何读 backtrader 文档并写第一个策略](https://www.pyquantnews.com/free-python-resources/navigate-backtrader-documentation-build-first-strategy)；[Backtrader Python Tutorial](https://www.quantvps.com/blog/backtrader-tutorial) `C` |
| **4 · 统计纪律（最重要）** | walk-forward、purged/embargo、Deflated Sharpe、[[investment-knowledge-base#PBO\|PBO]]、[[investment-knowledge-base#CPCV\|CPCV]] | [OpenAlgo: Walk-Forward, Purged CV and Deflated Sharpe](https://www.openalgo.in/quant/walkforward-purged-cv)（含真实 NIFTY [[investment-knowledge-base#Walk-forward\|逐折]] Sharpe 摆动案例）；[Backtest Overfitting: How to Spot and Fix a Curve-Fit Strategy](https://www.nvestiq.com/blog/overfitting-in-trading-how-to-spot-a-curve-fit-strategy)；[Out-of-Sample Backtesting 概念库](https://www.signaltrace.wiki/markov-model/Concepts/Out-of-Sample-Backtesting) `C` |
| **5 · 概率预测评估** | Brier / [[investment-knowledge-base#RPS\|RPS]] / [[investment-knowledge-base#校准\|校准]] / [[investment-knowledge-base#分辨力\|分辨力]] | [Proper Scoring Rules: Why Honest Probabilities Win](http://brierscore.com/guides/proper-scoring-rules-why-honest-probabilities-win)；[Evaluating Probabilistic Classifiers: The Triptych (arXiv 2301.10803)](https://www.arxiv.org/pdf/2301.10803)；[Scoring Rules and Proper Incentives](https://datafield.dev/learning-prediction-markets/part-02/chapter-09/key-takeaways.html) `C`/学术 |

> 中文论文索引：[量化必读论文清单](https://waylandz.com/quant-book/ArXiv%20Papers/)、[Quant Wiki · 101 Formulaic Alphas](https://quant-wiki.com/library/book/%E9%87%8F%E5%8C%96%E4%BA%A4%E6%98%93/101%20Formulaic%20Alphas%20-%20arXiv.org/)。
>
> **建议顺序**：先把 [[nvda-backtest-discipline]] 的 5 条纪律读懂，再学指标库。反过来做，会非常熟练地生产[[investment-knowledge-base#过拟合|过拟合]]结果。

---

## 2. 数据源（本板块实际使用 / 建议核验）

| 数据 | 入口 | 级别 | 在本板块的用途 |
|---|---|---|---|
| 日线 OHLCV（NVDA / [[investment-knowledge-base#费城半导体指数\|^SOX]] / [[investment-knowledge-base#VIX\|^VIX]] / [[investment-knowledge-base#ETF\|QQQ]] / AMD / ^GSPC） | `https://query1.finance.yahoo.com/v8/finance/chart/{sym}?range=5y&interval=1d` | `C`（延时[[investment-knowledge-base#延时行情\|合并行情]]） | 全部量化信号、[[investment-knowledge-base#基准率\|基准率]]、回测、复盘归因 |
| [[investment-knowledge-base#财报\|财报]]原文、[[investment-knowledge-base#10-Q 与 10-K\|10-Q]]/10-K、风险披露 | [SEC EDGAR](https://www.sec.gov/edgar) | `A` | [[investment-knowledge-base#供应承诺\|供应承诺]] $2,790 亿、存货、[[investment-knowledge-base#应收账款周转天数\|DSO]]、电力/融资风险披露 |
| [[investment-knowledge-base#CFO Commentary\|CFO Commentary]]、电话会、财报日公告 | [NVIDIA Investor Relations](https://investor.nvidia.com/)、[NVIDIA Newsroom](https://nvidianews.nvidia.com/) | `A` | Q3 [[investment-knowledge-base#财年\|FY2027]] 日期（11-17）、$1,080 亿指引、[[investment-knowledge-base#毛利率\|毛利率]] 74% |
| [[investment-knowledge-base#FOMC\|FOMC]] 日历与[[investment-knowledge-base#点阵图\|点阵图]] | [Federal Reserve FOMC Calendar](https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm) | `A` | 12-08~09 FOMC、会议纪要、利率路径 |
| 利率与宏观序列 | [FRED](https://fred.stlouisfed.org/) | `A` | 10Y [[investment-knowledge-base#实际利率\|实际利率]]、信用利差（长久期成长股[[investment-knowledge-base#贴现率\|贴现率]]） |
| 加息概率 | [CME FedWatch](https://www.cmegroup.com/markets/interest-rates/cme-fedwatch-tool.html) | `B` | 12 月加息概率（当前约 80~82%） |
| [[investment-knowledge-base#隐含波动率\|期权隐含波动率]] / VIX 方法论 | [CBOE](https://www.cboe.com/)（*What Options Data May Indicate About Mag 7 Earnings*） | `A`/`B` | 事件[[investment-knowledge-base#隐含波幅\|隐含波幅]]、[[investment-knowledge-base#IV crush\|IV crush]]、幅度≠方向 |
| 交易日历与[[investment-knowledge-base#NYSE 交易日历\|半日市]] | [NYSE Holidays & Trading Hours](https://www.nyse.com/markets/hours-calendars) | `A` | 2026–2027 [[investment-knowledge-base#休市日\|休市]]表、开盘/收盘北京时间换算 |
| 立法 / [[investment-knowledge-base#出口管制\|出口管制]]状态 | [Congress.gov](https://www.congress.gov/)、[BIS](https://www.bis.gov/) | `A` | [[investment-knowledge-base#政策状态机\|政策状态机]]（表态 → 文本 → 执行） |
| [[investment-knowledge-base#非农就业报告\|非农]] / [[investment-knowledge-base#CPI\|CPI]] 发布时点与共识 | BLS / Reuters / FactSet 转述 | `A`/`B` | 11-06 08:30 ET 非农、12 月 CPI |

> **[[investment-knowledge-base#口径元数据|口径]]警告**：Yahoo 成交量与部分媒体不一致（11-05：303,158,900 vs 306,127,783 股）；[[investment-knowledge-base#指数|指数]]类符号 `^SOX / ^VIX / ^GSPC` 的 volume 为 0，不能用于[[investment-knowledge-base#量比|量能]]信号；`^VIX` 可能提前出现当日的未完成 bar，程序一律按「最后一个已完成的 NVDA 交易日」对齐截断。这些差异全部记录在 `code/data/manifest.json`。

---

## 3. 研究支撑（按用途分类，不是「哪条均线好用」）

### 3.1 动量 / 趋势
- **Jegadeesh & Titman (1993), *Journal of Finance***：买入赢家、卖出输家的中期[[investment-knowledge-base#动量|动量]]。→ 12-1 月动量信号。
- **Asness, Moskowitz & Pedersen (2013), *JF*, "Value and Momentum Everywhere"**：动量跨资产类别普遍存在。
- **Carhart (1997)** / **Fama & French (1993, 2015)**：动量因子与基准模型，用于区分 [[investment-knowledge-base#Alpha|alpha]] 与因子暴露。
- **Han, Zhou & Zhu**：动量崩溃与止损——在急跌后 V 型反转时动量策略最危险。

### 3.2 波动率
- **Moreira & Muir (2017), *JF*, "Volatility-Managed Portfolios"**：高波动时缩小暴露可提升 Sharpe。→ 本板块「高波动加宽分布、降低方向权重」的直接依据。
- **Ang, Hodrick, Xing & Zhang (2006)**：高特质波动率[[investment-knowledge-base#股票与股权|股票]]收益反而偏低（波动率谜题）。
- **Wilder (1978), *New Concepts in Technical Trading Systems***：RSI / ATR / [[investment-knowledge-base#Wilder 平滑|Wilder 平滑]]；**Bollinger (2001)**：布林带。二者仅作极端度度量，不作方向预测。

### 3.3 事件 / PEAD / 成交量
- **Ball & Brown (1968)**：盈余公告携带可被定价的信息。
- **Bernard & Thomas (1989/1990)**：[[investment-knowledge-base#PEAD|盈余公告后漂移]]（PEAD）可持续约 60 个交易日。→ [[earnings-drift-strategy]] 的学术内核；注意被发现后已明显衰减。
- **Easley, López de Prado & O'Hara (2012) VPIN**；**Lee & Ready (1991)**：异常成交量与知情交易 / 逐笔分类。→ 量比信号。
- **Cboe Insights, "What Options Data May Indicate About Mag 7 Earnings"**：用近月—远月 IV 差拆出事件跳跃[[investment-knowledge-base#标准差与方差|标准差]]，2/3 经验法则；**[[investment-knowledge-base#期权|期权]]隐含的是幅度不是方向**。
- **IV crush 实务综述**（[CrossVol](https://crossvol.com/en/glossary/iv-crush)、[straddle 研究汇总](https://www.edgechat.ai/straddle)）：财报前 [[investment-knowledge-base#跨式组合|ATM straddle]] 常高估实际波幅；方向猜对也可能因 vega 损失亏损。`C`

### 3.4 日内 / 隔夜（专门支撑「开盘后怎么走」）
- **Berkman, Koch, Tuttle & Zhang (2012)**：正的隔夜收益后，日内常出现反转，集中在受关注、难估值、套利成本高的股票。
- **Gao, Han, Li & Zhou (2018)**：**首个半小时收益对当日余下时段有预测力**（日内时间序列动量），在高量、高波动日更强。
- **Lou, Polk & Skouras (2019), *JFE*, ["A tug of war: Overnight versus intraday expected returns"](https://www.sciencedirect.com/science/article/abs/pii/S0304405X19300650)**：隔夜与日内存在持续的「客户群拉锯」——隔夜赢家组合次月隔夜继续赢、日内却输。→ [[investment-knowledge-base#Beta|板块 beta]] / [[investment-knowledge-base#开盘缺口|隔夜缺口]][[investment-knowledge-base#倾斜|倾斜]]的理论基础。
- 实务层面的缺口研究（[Gap and Go 综述](https://daytradingtoolkit.com/strategies/gap-and-go-day-trading-strategy)、[隔夜缺口风险汇总](https://research.mental-momentum.ai/r/overnight-weekend-gap-risk-across-asset-gk11qu)）：**不存在普适的「必[[investment-knowledge-base#缺口回补率|补缺口]]」**；大缺口伴随放量时回补率显著下降，且负缺口通常比正缺口更大（不对称）。本板块用真实 NVDA 数据自行验证：小缺口[[investment-knowledge-base#空头回补|回补]] 36.5%，大幅高开仅 14.9%，与文献方向一致。`C`

### 3.5 回测与预测评估
- **Bailey & López de Prado (2014), *JoPM*, "The [[investment-knowledge-base#DSR|Deflated Sharpe Ratio]]"**；**Bailey, Borwein, López de Prado & Zhu (2017), *JCF*, "The Probability of Backtest Overfitting"**；**López de Prado (2018), *AFML***（ch.7 [[investment-knowledge-base#Purge 与 Embargo|purged K-fold]]、ch.12 CPCV）。
- **Brier (1950)**；**Gneiting & Raftery (2007)** [[investment-knowledge-base#严格适当评分规则|严格适当评分规则]]；**Dimitriadis, Gneiting & Jordan (2021) CORP** 校准分解。→ [[00-Session-Lab]] 的 Brier / RPS 评分体系。

---

## 4. 投资公司 / 机构观点（多空并列，2026-10~11）

| 机构 / 人物 | 观点 | 日期 | 级别 |
|---|---|---|---|
| BofA（Vivek Arya） | 维持 Buy | 11-03 | `C` 转述 |
| Barclays（T. O'Malley） / Bernstein（D. Zhu） | [[investment-knowledge-base#分析师目标价\|目标价]] $275 / $400 | 10-26 | `C` 转述 |
| 大和（Daiwa） | 维持「跑赢大市」，认为 AI 泡沫忧虑将随时间消散；确认 [[investment-knowledge-base#GPU 架构代号\|Vera Rubin]] 全面量产 | 10-26 | `B` |
| StockAnalysis 共识 | 62 位分析师 Strong Buy，均价 $327.14（$180–$515） | 11-04 | `C` |
| Jim Cramer（CNBC） | 「约十年来最便宜估值」，16.5x | 11-05 | `C` |
| Founder ETFs（M. Monaghan） | 暴跌主因是对冲基金去杠杆，建设不会停，财报前视为机会 | 11-06 | `B` 转述 |
| Aptus Capital（D. Wagner） | 估值修复而非逻辑崩塌，芯片 + [[investment-knowledge-base#CUDA\|CUDA]] + 开发者护城河仍宽 | 11-06 | `B` 转述 |
| Miller Tabak（M. Maley） | 盈利担忧加剧，AI 叙事出现裂痕 | 11 月初 | `C` 转述 |
| George Noble（前 Peter Lynch 分析师） | [[investment-knowledge-base#循环融资\|循环融资]] ≈ 2000 年思科供应商融资；NVDA 标普权重约 8%、为思科峰值两倍，警告系统性脆弱 | 11-06 | `B` 转述 |
| J.P. Morgan | 12 月或再加息一次；2027 全年按兵不动（中值 ~4.1%） | 10 月 | `C` |
| 中信建投 / 中信证券 | 北美 [[investment-knowledge-base#资本开支\|CSP capex]] 维持高强度，2027 继续拉动硬件与能源基建 | 11-02/03 | `B` 卖方研报转述 |

**怎么读这张表（比结论更重要）**：

1. 分歧**不在**「当期业绩好不好」——Q2 FY2027 营收 $962 亿（+106% YoY）、Q3 指引 $1,080 亿都是纪录；分歧在三个可跟踪变量：**① 2027 年 CSP capex 能否持续；② 用哪个财年口径给估值；③ 循环融资与 $2,790 亿供应承诺是否构成资产负债表风险**。
2. 目标价区间 $180–$515 相差 **2.86 倍**，本身就是「分歧极大」的量化证据；均价隐含 +80% 不具备预测价值（见 [[nvda-signal-dictionary]] F 组）。
3. 「16.5x 最便宜」与「21.5x / 12.9x」可以同时出现在同一天，因为口径不同——**先问财年，再看结论**。
4. 卖方观点均有[[investment-knowledge-base#多头与仓位|持仓]]/业务背景，**只作为「需要哪些[[investment-knowledge-base#可证伪条件|可验证指标]]」的线索**，不作为信号输入。本板块的预测输入只有：真实行情 + [[investment-knowledge-base#预注册|预先注册]]规则 + [[lessons]] 经验。

---

## 5. 来源分级纪律

- `A` 用于**事实核验**（财报日期、指引、会议日历、法条）；`B` 用于**事件与市场描述**（需交叉两家）；`C` 只用于**提出假设**，且必须标注。
- 任何数字进 `code/data/*.json` 前，必须写 `source` / `source_level` / `basis` / `as_of`；无法确认的（如本次 ATM IV 98.7%）宁可留 `null`。
- 试运行简报 [[nvda-research-brief-2026-11-06]] 的 §7 有完整 URL 清单，本页是方法与机构部分的索引化整理。

---

> **免责声明**：本页为学习资源索引与信息整理，不构成投资建议、要约或对任何机构观点的背书。教程与第三方站点内容需自行判断时效性与准确性；数据请以官方一手来源为准。
