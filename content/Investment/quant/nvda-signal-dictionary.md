---
title: NVDA 信号字典（速查）
tags: [investment, nvda, quant, signals, reference]
---

# NVDA 信号字典（速查）

> 配套主文档 [[nvda-quant-signals]]。所有公式在 `code/signals.py` 中**从定义实现**（不依赖 TA-Lib），可逐行审计；「当前值」由真实[[investment-knowledge-base#OHLCV|日线]]计算，截点 **2026-11-05 收盘**。
>
> 阈值是**研究用的[[investment-knowledge-base#基准率|先验]]分界，不是交易规则**；单个信号不构成结论。

---

## A. 价格与结构

| 信号 | 定义 / 公式 | 窗口 | 当前值 | 读法 | 失效条件 |
|---|---|---|---|---|---|
| [[investment-knowledge-base#收盘对收盘收益\|收盘涨跌]] | `C_t / C_{t−1} − 1` | 1 | **−9.26%** | 事件收益只用收盘，不用盘中 | [[investment-knowledge-base#拆股\|拆股]]/[[investment-knowledge-base#股息\|分红]]未复权、盘中快照误用 |
| [[investment-knowledge-base#开盘缺口\|开盘缺口]] | `O_t / C_{t−1} − 1` | 1 | **−2.03%** | 隔夜信息冲击的代理 | [[investment-knowledge-base#盘前盘后交易\|盘前]]报价 ≠ 正式开盘价 |
| [[investment-knowledge-base#日内收益\|日内收益]] | `C_t / O_t − 1` | 1 | **−7.38%** | 「开盘后怎么走」的直接观测 | [[investment-knowledge-base#NYSE 交易日历\|半日市]]、开盘集合竞价异常 |
| [[investment-knowledge-base#缺口回补率\|缺口回补率]] | `P(隔夜缺口后当日收盘回到前收或反向)` | 5y | **30.2%**（全样本）<br>**14.9%**（大幅高开 ≥1.5%） | 大缺口很少当日[[investment-knowledge-base#空头回补\|回补]]；非「必补缺口」口诀 | 样本细分后可能 <30 例 |
| [[investment-knowledge-base#52 周分位\|52 周分位]] | `(C − min52) / (max52 − min52)` | 252 | **21.9%** | 处于区间偏低位置 | 趋势市中会长期贴边 |
| [[investment-knowledge-base#最大回撤\|峰值回撤]] | `C / max52 − 1` | 252 | **−25.38%** | 已进入技术性熊市 | 需标明用收盘高点还是盘中高点 |

> 缺口实证来自本标的 1044 个交易日：小缺口（abs<1.5%，n=729）回补率 36.5%；大幅高开（n=188）仅 14.9%；大幅低开（n=127）16.5%；**大幅高开且量比>2 只有 8 例**，任何据此得出的结论都只是待验证假设。

## B. 趋势与动量

| 信号 | 定义 / 公式 | 窗口 | 当前值 | 读法 | 来源 / 失效 |
|---|---|---|---|---|---|
| [[investment-knowledge-base#简单移动平均线\|SMA20]] / 50 / 200 | 简单算术均值 | 20/50/200 | **213.68 / 220.64 / 204.66** | 价格低于三线，[[investment-knowledge-base#做空与空头\|空头]]排列 | 均线在震荡市反复穿越 |
| 200 日线偏离 | `C / SMA200 − 1` | 200 | **−11.27%** | CTA / 风控触发区，机械卖压 | V 型反转时最易误判 |
| [[investment-knowledge-base#动量\|12-1 月动量]] | `C_t / C_{t−252} − 1` | 252 | **−8.60%** | 中期动量转负 | Jegadeesh & Titman (1993)；动量崩溃风险 |
| [[investment-knowledge-base#RSI\|RSI(14)]] | [[investment-knowledge-base#Wilder 平滑\|Wilder 平滑]]：`100 − 100/(1+AG/AL)` | 14 | **25.4** | <30 超卖；**超卖 ≠ 买入** | 强趋势中可长期钝化；盘中值 33.6 ≠ 收盘值 |
| [[investment-knowledge-base#MACD\|MACD 柱]] | `EMA12 − EMA26 − EMA9(线)` | 12/26/9 | **−2.980** | 动能向下且未收敛 | 滞后指标 |
| [[investment-knowledge-base#布林带\|布林带]] z | `(C − SMA20) / sd20` | 20 | **−2.92** | 超出 −2σ，统计极端 | 高波动期带宽放大，z 会「自愈」 |
| [[investment-knowledge-base#OBV\|OBV]] 斜率 | `(OBV_t − OBV_{t−20})/20` | 20 | 程序输出 | [[investment-knowledge-base#量比\|量能]]累积方向 | 只按收盘涨跌符号计，忽略幅度 |

## C. 波动（决定分布宽度，不决定方向）

| 信号 | 定义 / 公式 | 窗口 | 当前值 | 读法 | 来源 / 失效 |
|---|---|---|---|---|---|
| [[investment-knowledge-base#ATR\|ATR(14)]] | Wilder 真实波幅均值 | 14 | **4.04%** of price | 单日常态波幅；给区间宽度定标 | 跳空日 TR 会放大 |
| [[investment-knowledge-base#已实现波动率\|已实现波动率]] | `sd(log returns) × √252` | 20 | **45.7%** [[investment-knowledge-base#年化\|年化]] | 高波动 → 加宽尾部、降低方向权重 | Moreira & Muir (2017) 波动率管理 |
| [[investment-knowledge-base#VIX\|VIX]] | 外部[[investment-knowledge-base#指数\|指数]] | — | **28.18**（5 日 +10.98 点） | 市场层面恐慌溢价 | 非个股波动，需与个股 RV 区分 |
| [[investment-knowledge-base#隐含波动率\|IV]] / RV | `ATM IV / RV20` | — | **n/a**（IV 数据不可靠，留空） | >1 表示事件溢价被定价 | C 级第三方站点数据不入库 |
| 事件[[investment-knowledge-base#隐含波幅\|隐含波幅]] | `ATM straddle / 股价`（Cboe [[investment-knowledge-base#口径元数据\|口径]]） | 事件到期 | 待 11-17 [[investment-knowledge-base#财报\|财报]]前更新 | **隐含的是幅度不是方向** | Cboe Mag7 研究；[[investment-knowledge-base#IV crush\|IV crush]] 风险 |

## D. 量能与微观结构

| 信号 | 定义 / 公式 | 窗口 | 当前值 | 读法 | 失效 |
|---|---|---|---|---|---|
| 量比 | `Vol_t / ADV20` | 20 | **2.928x** | [[investment-knowledge-base#派发\|放量下跌]] = 分配；缩量反弹 = 空头回补 | **不可用前一日量作分母**（试运行 2.054 是代理值） |
| [[investment-knowledge-base#ADV20\|ADV20]] | `mean(Vol_{t−20..t−1})` | 20 | **1.035 亿股** | 流动性过滤、[[investment-knowledge-base#滑点\|滑点]]估计 | 拆股/指数调仓日 |
| 成交额 ADV | 美元口径 | 20 | 远超 $3 亿门槛 | 保证「机构真的在那儿」 | 见 [[earnings-drift-strategy]] |

## E. 相对强度与因子

| 信号 | 定义 / 公式 | 窗口 | 当前值 | 读法 |
|---|---|---|---|---|
| [[investment-knowledge-base#费城半导体指数\|费半]]当日 | SOX 收盘涨跌 | 1 | **−12.25%** | 2020-03 以来最大单日跌幅 |
| [[investment-knowledge-base#Beta\|beta vs SOX]] | `cov(r_NVDA, r_SOX) / var(r_SOX)` | 60 | **0.67** | 系统性暴露；用于拆[[investment-knowledge-base#残差\|残差]] |
| 20 日超额 | `r_NVDA,20 − r_SOX,20` | 20 | **+7.41%** | 暴跌前 NVDA 仍显著强于板块 → 拥挤度证据 |
| 个股残差 | `r_NVDA − beta × r_SOX` | 1 | 约 **−1.3%**（11-05） | \|残差\|<2% → 优先归因板块，不找公司利空 |

## F. 事件 / 基本面 / 估值 / 政策

| 信号 | 口径 | 当前状态 | [[investment-knowledge-base#可证伪条件\|可验证指标]] |
|---|---|---|---|
| [[investment-knowledge-base#PEAD\|PEAD 四条件]] | 大波动 >3% / 量比 >2x / 改变趋势 / 站稳 3–5 日 | **3 PASS + hold PENDING → `WAIT`** | 11-06~11-12 是否站稳 |
| Q3 [[investment-knowledge-base#财年\|FY2027]] 指引 | 官方 10-28 公告 | 营收 **$1,080 亿 ±2%**、GAAP [[investment-knowledge-base#毛利率\|毛利率]] **74.0% ±50bp** | 11-17 实际值 + [[investment-knowledge-base#业绩指引\|Q4 指引]] |
| 统一口径 [[investment-knowledge-base#市盈率\|P/E]] | 价 $181.60 / 声明财年 [[investment-knowledge-base#每股收益\|EPS]] | **[[investment-knowledge-base#TTM\|TTM]] 22.4x / FY2027 19.5x / FY2028 11.4x** | EPS 共识修正、财年切换时点 |
| 分析师离散度 | [[investment-knowledge-base#分析师目标价\|目标价]] 高 / 低 | **2.86x**（$515 / $180，62 位） | 上下调分布、覆盖数变化 |
| [[investment-knowledge-base#供应承诺\|供应承诺]] / 存货 / [[investment-knowledge-base#应收账款周转天数\|DSO]] | [[investment-knowledge-base#10-Q 与 10-K\|10-Q]] 一手 | **$2,790 亿 / $320 亿 / 60 天** | 环比变化、减值、毛利率路径 |
| [[investment-knowledge-base#资本开支\|CSP capex]] | 四大厂 Q3 财报 | 同比 **+84%~90%**，均指引 2027 继续增长 | 季度 capex、[[investment-knowledge-base#自由现金流\|FCF]]、折旧、递延交付表述 |
| [[investment-knowledge-base#政策状态机\|政策状态机]] | 表态 → 文本 → 执行 → 披露验证 | **仍停留在「表态」层**，无联邦立法 | 法案文本、委员会主席、听证日程、[[investment-knowledge-base#出口管制\|BIS]] 规则 |

---

## 使用规则

1. 先查 **L0 口径**：这个数来自哪、什么时点、什么分母？不确定就不用。
2. 再做 **E 组归因**：残差小 → 看板块与宏观；残差大 → 才去公司层面。
3. 用 **C 组定宽度**、**D 组定可信度**，最后才看 B 组方向。
4. 任何结论附「可证伪条件」，并写入 [[lessons]] 或 [[prediction-log]] 以便事后校验。

> 教程、数据源、论文与机构观点见 [[nvda-quant-data-sources]]；含成本[[investment-knowledge-base#回测|回测]]与[[investment-knowledge-base#统计显著性|统计显著性]]见 [[nvda-backtest-discipline]]。本页不构成投资建议。
