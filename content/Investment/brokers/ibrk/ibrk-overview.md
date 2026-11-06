---
title: IBKR 平台概述
tags: [investment, broker, ibkr]
---

# Interactive Brokers（IBKR）平台概述

## 它是谁

- 全球知名线上券商，母公司 **Nasdaq: IBKR**，标普 500 成分股。
- 截至 2026 年中：服务 **500 万+** 客户，客户资产 **$900B+**，日均成交超 400 万笔。
- 覆盖 **170+ 市场**、24 种货币，单一账户可交易股票、ETF、期权、期货、债券、外汇、黄金等。

## 账户计划：Lite vs Pro（关键！）

| 项目 | IBKR Lite | IBKR Pro |
|---|---|---|
| 适用人群 | 美国 / 新加坡居民零售 | **全球用户（含中国等非美居民）** |
| 美股/ETF 佣金 | 免佣金（含 PFOF 订单流付款） | 固定或阶梯，约 $0.005/股起，无 PFOF |
| 保证金利率 | 基准 + 2.5% | 基准 + 1.5% 起（随额度递减） |
| 现金利息 | 基准 − 1.5% | 基准 − 0.5% |
| 平台 | Client Portal / Mobile / Desktop | 同上 + **TWS** + API |

> ⚠️ **重要**：IBKR Lite **仅向美国和新加坡居民开放**。作为中国等非美居民，你只能用 **IBKR Pro**。Pro 的优势是无订单流付款（PFOF）、最优执行（IB SmartRouting）、可接 TWS 与 API，且同样**无账户最低余额、无维护费、无闲置费**。

## 交易平台

- **Client Portal**：网页端，适合新手，下单/看持仓足够。
- **IBKR Mobile**：手机 App。
- **IBKR Desktop**：新一代桌面端。
- **TWS（Trader Workstation）**：专业终端，功能最强，适合盯盘与算法单。
- **Paper Trading（模拟交易）**：先用模拟账户练手，再上实盘。

## API 与自动化（本项目相关）

- **IBKR API / Python（ib_insync）**：可程序化拉取行情、下单（见 `code/`）。
- **MCP 集成（2026 新）**：可把 Claude / ChatGPT / Grok 等 AI 直接连到 IBKR 账户，做组合分析、研究、生成交易指令。

## 安全与费用

- 资产受 SIPC 等保护（额度有限，详见官网披露）。
- 美股实时数据免费；无平台费、无 inactivity fee。

## 延伸阅读

- 官网对比：https://www.interactivebrokers.com/en/index.php?f=45500
- 股票交易页：https://www.interactivebrokers.com/en/trading/products-stocks.php
- 下一步：[[ibrk-account-funding]]、[[ibrk-practice-nvda-gold]]
