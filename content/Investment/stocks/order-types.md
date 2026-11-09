---
title: 订单类型
tags: [investment, stocks]
---

# 订单类型

## 基础订单

- **[[investment-knowledge-base#市价单|市价单]]（Market）**：立刻以最优可得价格成交。**优点**是成交快；**缺点**是价格不确定（[[investment-knowledge-base#滑点|滑点]]），波动大时不利。
- **[[investment-knowledge-base#限价单|限价单]]（Limit）**：指定最高买价 / 最低卖价，只有触及才成交。**优点**是价格可控；**缺点**可能不成交。
- **[[investment-knowledge-base#止损单|止损单]]（Stop / Stop-Loss）**：价格触达触发价后转为市价单，用于**截断亏损**。
- **止损限价单（Stop-Limit）**：触发后转为限价单，控制成交价但可能不成交。

## 进阶（IBKR 支持）

- **跟踪止损（Trailing Stop）**：止损价随价格上涨而上移，锁定利润。
- **括号单（Bracket）**：开仓同时挂止盈 + 止损，一键管理。
- **条件单（Conditional / Contingent）**：满足条件（如某价触发）才生效。

## 时效

- **DAY**：当日有效。
- **[[investment-knowledge-base#GTC|GTC]]（Good-Till-Cancelled）**：直到成交或撤销。

## 实操建议

- 新手优先用**限价单**买 NVDA / 黄金，避免市价单在波动时的滑点。
- 永远想好"亏到哪止损"，可用 Stop 或 Bracket 自动化执行纪律。
- [[investment-knowledge-base#盘前盘后交易|盘前]]/盘后（IBKR 支持 04:00–20:00 ET）流动性差、[[investment-knowledge-base#买卖价差|价差]]大，谨慎参与。

## 延伸阅读

- IBKR 订单类型说明：https://www.interactivebrokers.com/en/trading/orders.php
- 本项目的 [[risk-management]]
