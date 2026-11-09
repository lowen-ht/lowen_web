---
title: IBKR 实操：买卖 NVDA 与黄金
tags: [investment, broker, ibkr, nvda, gold]
---

# IBKR 实操：买卖 NVDA 与黄金

## 一、买 NVDA（美股个股）

1. 在 Client Portal / TWS 搜索 `NVDA`（NVIDIA Corp，NASDAQ）。
2. 点击"交易"，选择**[[investment-knowledge-base#限价单|限价单]]（Limit）**，输入你想买入的股数与限价。
3. 时效选 `DAY` 或 `GTC`；下单前复核币种为 USD、账户余额充足。
4. 新手建议小[[investment-knowledge-base#多头与仓位|仓位]]（如 1–5 股）实践，详见 [[risk-management]]。

## 二、买黄金：两种方式

**方式 A —— 黄金 [[investment-knowledge-base#ETF|ETF]]（在美股交易，最方便）**

- `GLD`（SPDR，费率 0.40%，流动性最佳）
- `IAU`（iShares，费率 0.25%，长期更省）
- `GLDM`（MiniShares，费率 0.10%，单价低，适合小账户）
- 下单方式同 NVDA，均为美股限价单。详见 [[gold-analysis]]。

**方式 B —— IBKR "US [[investment-knowledge-base#现货与期货|Spot]] Gold"（直接实物黄金敞口）**

- IBKR 提供以盎司计价的现货黄金产品，可直接在场外交易黄金，无需通过 ETF。
- 适合想"贴近金价本身"、且熟悉 IBKR 金属账户规则的进阶用户。

## 三、用代码跟踪（见 `code/`）

- `track_prices.py`：用 **yfinance** 拉 NVDA / GLD / 现货金价，无需券商账户。
- `ibrk_track.py`：用 **ib_insync** 连 TWS/Gateway 取实时报价（需先开 TWS/网关并启用 API）。

## 四、实操纪律

- 买卖前先想清楚：为什么买、打算持有多久、亏多少止损。
- 不要一次满仓；可结合 [[dollar-cost-averaging]] 分批建仓。
- 记录每笔交易的逻辑与结果，形成自己的复盘。

## 延伸阅读

- [[nvda-analysis]]、[[gold-analysis]]
- [[risk-management]]、[[portfolio-strategy]]
