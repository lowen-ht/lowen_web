---
title: NVDA 盘前预测台账与复盘
tags: [investment, nvda, session, prediction, review]
---

# NVDA 盘前预测台账与复盘

> **铁律**：预测在开[[investment-knowledge-base#盘前盘后交易|盘前]][[investment-knowledge-base#预测冻结|冻结]]，收盘后只追加结果，**永不回改**。
> 每次预测前必须阅读 [[lessons]]；本台账由 `review.py` 从 `code/state/predictions/*.json` 自动重建，请勿手工改动表格。
> 数字归本页，**新闻与事件层的定性归因**归 [[review-notes]]，可复用规则归 [[lessons]]。
> 评分：[[investment-knowledge-base#Brier 分数|多分类 Brier]]、`RPS`（有序）、方向命中、[[investment-knowledge-base#预测区间|80% 区间]]覆盖、[[investment-knowledge-base#期望值|期望收益]]绝对误差；均为[[investment-knowledge-base#严格适当评分规则|严格适当评分规则]]，0 分最差、100 分最好。

## 记分板

| 指标 | 数值 | 读法 |
|---|---|---|
| 累计预测 / 已复盘 | 1 / 0 | 样本 <30 时任何[[investment-knowledge-base#方向命中率\|胜率]]都不具统计意义 |
| 方向命中率 | n/a | 50% 是抛硬币基准 |
| 平均 Brier | n/a | 越低越好；0.25 为「永远五五开」参照 |
| 平均 [[investment-knowledge-base#RPS\|RPS]] | n/a | 越低越好；惩罚「错得远」 |
| 80% 区间覆盖率 | n/a | 长期应接近 80%，明显偏低=过度自信 |
| 「[[investment-knowledge-base#日内收益\|开盘后视角]]」命中率 | n/a | 隐含 open→close 方向是否对，检验缺口延续/反转判断 |
| 平均综合得分 | n/a | [[investment-knowledge-base#校准\|校准]] + [[investment-knowledge-base#分辨力\|分辨力]]，不是收益率 |

## 台账

| 交易日 | 状态 | 预测方向 | 最大桶 | 实际 | 方向 | Brier | RPS | 得分 | 归档卡片 |
|---|---|---|---|---|---|---|---|---|---|
| 2026-11-06 | pending | 涨 (70%) | surge | n/a | n/a | n/a | n/a | n/a | [[2026-11-06-preopen]] |

---

## 逐日复盘（由程序追加，含误差归因）

### 2026-11-06

**预测**（冻结于 2026-11-06T10:01:57+00:00，基准 2026-11-05 收盘 $181.60）：crash 8.4% / down 11.0% / flat 21.3% / up 27.0% / surge 32.4%

P(涨) 70.0%、E[r] +1.52%、80% 区间 [-3% ~ -1%] 至 [≥ +3%]；隐含 open→close -1.38%；[[investment-knowledge-base#条件频率|匹配样本]] n=143；已读 [[lessons]] sha256 `1339d614b6fa8f23…`。

[[investment-knowledge-base#倾斜|倾斜]]：`trend_below_200dma`(down,0.12)、`rsi_oversold`(up,0.08)、`positive_overnight_gap`(down,0.14)、`scheduled_macro_event`(widen,0.12)、`sector_beta_spillover`(up,0.16)、`lesson:L-004`(down,0.08)、`lesson:L-005`(flat,0.04)、`lesson:L-006`(widen,0.06)

**结果**：⏳ 等待该交易日收盘数据。下一轮盘前运行会自动补齐。

> 本页为概率校准练习记录，不构成投资建议、不含任何交易指令。
