---
title: 回测纪律与真实实证结果
tags: [investment, nvda, quant, backtest, methodology]
---

# 回测纪律与真实实证结果

> 配套 [[nvda-quant-signals]]。**本页的目的不是证明某个策略能赚钱，而是演示「在相信任何[[investment-knowledge-base#回测|回测]]之前必须先做的检查」**。全部数值由 `code/backtest.py` 在真实 5 年[[investment-knowledge-base#OHLCV|日线]]（2021-11-08 ~ 2026-11-05，1254 根）上算出，纯标准库、可复现。
>
> 不构成投资建议，不含任何可执行策略。

---

## 1. 为什么 naive 回测几乎总是骗人

| 陷阱 | 具体表现 | 本项目的对策 |
|---|---|---|
| **[[investment-knowledge-base#前视偏差\|前视偏差]]** | 用[[investment-knowledge-base#财报\|财报]]「报告期末」而非「公布日」；用当日收盘算信号却在当日开盘成交 | `pos[i]` 只由 `≤ i−1` 的数据决定；财报用公告时点 |
| **标签泄漏** | 训练标签窗口跨进测试区间 | `purge` 间隔；窗口按时间顺序、绝不 shuffle |
| **自相关泄漏** | 测试块之后的训练样本仍带测试期信息 | `embargo` 间隔（本项目与 purge 合并为训练—测试缓冲） |
| **单路径运气** | 一次 [[investment-knowledge-base#样本内与样本外\|train]]/test 切分恰好覆盖一段好行情 | 3 折滚动 walk-forward，拼接全部样本外收益，并报告**[[investment-knowledge-base#Walk-forward\|逐折]] Sharpe 分布** |
| **[[investment-knowledge-base#多重检验\|多重检验]]** | 试 100 个参数选最好的，Sharpe 天然虚高 | 只声明 8 个**[[investment-knowledge-base#预注册\|预先注册]]**变体；Deflated Sharpe、[[investment-knowledge-base#PBO\|PBO-lite]] 校正 |
| **忽略成本** | 高换手策略的收益全被[[investment-knowledge-base#交易成本\|手续费]]吃掉 | 14bp 往返成本（佣金 2bp + [[investment-knowledge-base#滑点\|滑点]] 5bp / 边），按 \|[[investment-knowledge-base#多头与仓位\|仓位]]变化\| 收取 |
| **错基准** | 不与「什么都不做」比较 | 同时给出买入持有与空仓对照，并标明**区间不可比** |

> 文献：Bailey & López de Prado (2014, *JoPM*) Deflated Sharpe；Bailey/Borwein/López de Prado/Zhu (2017, *JCF*) PBO；López de Prado (2018) *Advances in Financial Machine Learning* ch.7 清除式 K 折、ch.12 [[investment-knowledge-base#CPCV|CPCV]]；OpenAlgo 的 walk-forward 实演显示「样本内几乎总选 [[investment-knowledge-base#简单移动平均线|SMA50]]，样本外逐折 Sharpe 在 −0.77 ~ +1.64 间摆动，拼接后仅 +0.06」。

---

## 2. 本次设定（全部预先注册）

```text
数据      NVDA 日线 1254 根（2021-11-08 .. 2026-11-05），Yahoo chart API
训练/测试  504 根 / 126 根，滚动向前，测试块互不重叠
缓冲      purge = 5，embargo = 5（取较大值作为训练—测试间隔）
warmup    210 根（SMA200 / 12-1 动量 / RV20 需要预热）
成本      14 bp 往返，按 |pos[i] − pos[i−1]| 收取
变体 8 个  hold, sma200_long, sma200_longshort, rsi_extreme,
          momentum_12_1, gap_fade, bb_extreme, vol_managed_trend
选择规则  每折在训练窗按净成本 Sharpe 选冠军，只把冠军用于该折样本外
```

**没有任何参数被针对近期结果调优**。这不是「找最优参数」，而是「检验选择过程本身能否泛化」。

---

## 3. 真实结果

| 折 | 训练窗结束 | 测试窗结束 | 样本内冠军 | IS Sharpe | OOS Sharpe | OOS 收益 | 该折 OOS 排名 |
|---|---|---|---|---|---|---|---|
| 1 | 2025-03-10 | 2025-09-16 | `vol_managed_trend` | 1.75 | **2.69** | +33.3% | 2/8 |
| 2 | 2025-09-09 | 2026-03-18 | `hold` | 1.49 | **0.35** | +3.2% | **8/8** |
| 3 | 2026-03-11 | 2026-09-17 | `hold` | 0.99 | **1.17** | +21.6% | 2/8 |

| 指标 | 拼接样本外（3 折 × 126 = 378 根） | 全样本买入持有（1043 根、无成本） |
|---|---|---|
| [[investment-knowledge-base#年化\|年化]] Sharpe | **1.19** | 0.95 |
| 总收益 | +67.2% | +489.5% |
| [[investment-knowledge-base#最大回撤\|最大回撤]] | **−20.2%** | **−66.4%** |
| 日[[investment-knowledge-base#方向命中率\|胜率]] | 47.1% | — |

> ⚠️ **两列区间长度不同，绝对收益不可直接比较**。这张表唯一想说明的是：买入持有的高收益来自承担 −66.4% 的回撤，而趋势/波动管理类规则用较低收益换较小回撤。这是风险—收益权衡，不是「策略跑赢/跑输」。

**[[investment-knowledge-base#统计显著性|统计显著性]]检验**

- **PBO-lite = 0.33**：3 折中只有 1 折的样本内冠军在样本外跌到中位数以下（低于 0.5 警戒线，但样本仅 3 折，**几乎无统计效力**）。
- **Deflated Sharpe = 0.566**：远低于常用的 0.95 置信门槛 → **在考虑「试了 8 个变体」与收益的偏度/峰度之后，不能认为真实 Sharpe 显著大于 0**。
- 试验次数只声明了 8 个显式变体；在此之前任何指标、窗口、阈值的探索**未计入**，所以 0.566 仍是**偏乐观**的估计。

### 结论

> **没有找到可执行策略。** 拼接样本外 Sharpe 1.19 看起来不错，但只有 3 折、逐折波动巨大（0.35 ~ 2.69）、[[investment-knowledge-base#DSR|DSR]] 0.566 不显著，且样本内冠军在第 2 折直接垫底（8/8）。这正是「回测是证据，不是开仓许可」的具体含义。本仓库 [[earnings-drift-strategy]] 的 8 次财报实测（naive 信号一次未触发、多数反转）是同一方向的独立反证。

---

## 4. 另一个更诚实的检验：概率预测的样本外复盘

回测检验的是「规则」，预测板块检验的是「[[investment-knowledge-base#校准|校准]]」。用 `code/demo_backfill.py` [[investment-knowledge-base#point-in-time|严格截断]]到 2026-11-04 收盘（point-in-time），重建 11-05 [[investment-knowledge-base#盘前盘后交易|盘前]]预测，再对照真实结果：

| 项目 | 结果 |
|---|---|
| 预测分布 | crash 9.7% / down 18.1% / **flat 41.0%** / up 24.7% / surge 6.5% |
| P(涨) / E[r] / 众数 | 51.7% / −0.03% / `flat` |
| 实际 | **−9.26%**（`crash`），日内 −7.38%，[[investment-knowledge-base#费城半导体指数\|费半]] −12.25% |
| 方向 / Brier / [[investment-knowledge-base#RPS\|RPS]] | MISS / **0.541** / **0.360** |
| [[investment-knowledge-base#预测区间\|80% 区间]] / E[r] 误差 | **未覆盖** / 9.23pp |
| 综合得分 | **44（D）** |
| 自动归因 | 费半 × beta 0.65 = −7.99%，[[investment-knowledge-base#残差\|个股残差]]仅 −1.26% → 板块系统性去风险，而非个股利空 |
| 自动生成的候选经验 | ① 高波动必须加宽两尾 ② 板块极端日切换条件分布 ③ Brier>0.40 时把遗漏的公开风险写成[[investment-knowledge-base#可证伪条件\|证伪条件]] |

> 这是最有价值的一次「失败」：模型方向不算离谱（略偏空），但**分布太窄**，把 9% 的尾部当成近乎不可能。复盘没有写「市场波动大」这种废话，而是产出了三条可证伪、可升级为 ACTIVE 规则的候选经验，并已写入 [[lessons]]。相关记录不计入实盘记分板。

---

## 5. 复现与升级路径

```bash
cd content/Investment/code
python data_ingest.py                    # 拉真实日线（零依赖）
python backtest.py                       # 输出 data/backtest_result.json
python demo_backfill.py                  # 打印 11-05 回测演练的完整归因
```

**若要做得更严谨（当前未做，明确列为待办）**：
1. 把折数从 3 提到 ≥10（需要更长历史或更短测试窗）；
2. 用 **CPCV（组合清除交叉验证）** 得到 Sharpe 的**分布**而非单一路径；
3. 计算完整 **PBO**（组合枚举），而不是本项目的 PBO-lite；
4. 加入 point-in-time 财务数据与**公布日**时间戳，防财务数据前视；
5. 计入[[investment-knowledge-base#做空与空头|做空]]借券成本、参与率滑点、财报跳空无法成交的情形；
6. 披露完整研究日志（试过多少指标/窗口/阈值），否则 DSR 的输入 N 不可信。

教程与工具入口见 [[nvda-quant-data-sources]]。

---

> **免责声明**：本页为方法论学习与自检记录，不构成投资建议。回测结果受数据源、成本假设与样本区间影响极大；历史规律不代表未来。
