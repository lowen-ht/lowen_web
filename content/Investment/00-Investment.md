---
title: Investment
tags: [investment, learning]
---

# Investment · 投资学习与实践

> 本项目是个人投资学习笔记 + 在 Interactive Brokers（IBKR）上的实盘/模拟实践记录。当前重点关注两类标的：**NVDA（英伟达）** 与 **黄金（Gold）**。

## 这个项目有什么

- **基础认知**：什么是投资、风险与收益、资产配置
- **如何买股票**：开户、下单、订单类型、交割与税务
- **IBKR 实操**：平台选择、账户与入金、买卖 NVDA 与黄金
- **标的分析**：NVDA 基本面、黄金投资逻辑
- **策略与风控**：组合构建、仓位管理、定投
- **术语表 & 资源**：权威书籍、网站、论文、数据工具

## 学习路线图（建议顺序）

1. [[what-is-investing]] — 先建立资产类别与复利的基本框架
2. [[risk-and-return]] → [[asset-allocation]] — 理解风险与配置
3. [[how-to-buy-stocks]] → [[order-types]] — 掌握交易机制
4. [[ibrk-overview]] → [[ibrk-account-funding]] → [[ibrk-practice-nvda-gold]] — 在 IBKR 落地
5. [[nvda-analysis]] → [[gold-analysis]] — 研究当前关注标的
6. [[portfolio-strategy]] → [[risk-management]] → [[dollar-cost-averaging]] — 形成自己的方法
7. [[earnings-drift-strategy]] — 财报突破跟随（聪明钱 / PEAD）策略与 NVDA 实操
8. [[nvda-quant-signals]] → [[nvda-signal-dictionary]] → [[nvda-backtest-discipline]] — 量化信号与回测纪律
9. [[00-Session-Lab]] → [[lessons]] → [[prediction-log]] — 盘前概率预测与复盘校准练习
10. 随时查 [[glossary]]、[[resources]] 与 [[nvda-quant-data-sources]]

## NVDA 研究板块（2026-11-06 起，每日更新）

> 重心是**量化信号**，同时保留**事件跟踪**；另设「开盘/收盘预测学习板块」，每个交易日盘前出概率预测、次日盘前自动复盘上一次的准确度与原因。**全部为学习记录，不构成投资建议。**

**核心文档**

1. [[nvda-quant-signals]] — 量化信号体系（主文档：七层信号栈、8 个核心信号、口径元数据规范）
2. [[nvda-signal-dictionary]] — 信号字典速查（公式 / 窗口 / 当前值 / 阈值 / 失效条件）
3. [[nvda-backtest-discipline]] — 含成本 walk-forward 回测与真实实证结果（DSR 0.566，不显著）
4. [[nvda-quant-data-sources]] — 教程路径、数据源、学术论文、机构观点多空并列
5. [[nvda-event-calendar]] — 未来事件日历 + 政策状态机（每日自动重建）
6. [[nvda-research-brief-2026-11-06]] — 试运行简报（历史快照，含完整来源清单）

**每日与预测板块**

- [[2026-11-06]] — 每日简报示例（19 行信号面板 + 历史基准率 + 事件倒计时），`daily/` 下按日期累积
- [[00-Session-Lab]] — 开盘/收盘学习板块首页（时间窗、四条铁律、闭环流程、评分方法）
- [[lessons]] — **经验库，每次预测前必读**（程序硬性强制）
- [[prediction-log]] — 预测台账、逐日准确度复盘与记分板（量化）
- [[review-notes]] — 复盘补充：新闻与事件层的定性归因
- [[2026-11-06-preopen]] — 首期盘前概率预测卡片

> 所有计算程序、缓存行情与预测状态都在 `content/Investment/code/`，已被 `.gitignore` 与 Quartz `ignorePatterns` **双重隔离**：不入库、也不会被静态发布。

## 重要免责声明

- 本仓库**仅为个人学习记录**，不构成任何投资建议或要约。
- 文中的所有财务数据（NVDA 财报、金价、IBKR 费率等）均有时间性，**请以来源链接中的最新数据为准**。
- 投资有风险，决策需独立判断，必要时咨询持牌顾问；跨境投资还涉及外汇、税务（如美国 W-8BEN、收藏品税）等复杂问题。
