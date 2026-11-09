---
title: 经验库 · 每次预测前必读
tags: [investment, nvda, session, lessons, must-read]
---

# 经验库 · 每次预测前必读

> ⛔ **硬约束**：`predict.py` 在生成任何预测之前会读取本文件，**文件缺失或为空时直接拒绝出预测**。预测记录中写入本文件当时的 [[investment-knowledge-base#预测冻结|sha256]] 作为「已读」证据。
>
> **使用顺序**：① 通读下方 ACTIVE 规则 → ② 看最近 3 条归档经验的结论 → ③ 检查候选区是否有该升级的规则 → ④ 才允许生成新预测。
>
> 本文件**只记录可复用的经验与规则**，完整逐日复盘在 [[prediction-log]]。规则宁少勿滥：一天的结果不构成规律。

---

## 读前检查清单（每次预测前逐项确认）

- [ ] 上一次预测是否已复盘并打分？未复盘 → **停止**，先跑复盘。
- [ ] 今日是否为美股交易日？[[investment-knowledge-base#休市日|休市]] / [[investment-knowledge-base#NYSE 交易日历|半日市]] → 跳过或显著加宽分布。
- [ ] 开[[investment-knowledge-base#盘前盘后交易|盘前]]是否还有计划内数据发布（[[investment-knowledge-base#非农就业报告|非农]] / [[investment-knowledge-base#CPI|CPI]] / [[investment-knowledge-base#FOMC|FOMC]]）？有 → 只加宽尾部，不偷偷选方向。
- [ ] 盘前缺口代理与正式[[investment-knowledge-base#开盘缺口|开盘缺口]]是否可能大幅偏离？偏离风险高 → 降低该[[investment-knowledge-base#倾斜|倾斜]]权重。
- [ ] 本次是否想「因为昨天错了」而临时改规则？**不允许**——规则变更必须走候选 → 确认 → ACTIVE 流程。
- [ ] 匹配历史样本数是否 <30？是 → 以[[investment-knowledge-base#基准率|无条件基准率]]为主，弱化倾斜。
- [ ] 是否写下了「[[investment-knowledge-base#可证伪条件|什么会证明我错]]」？没写 → 预测不完整。

---

## ACTIVE 规则（程序会解析并作用于预测）

> 语法：`- [L-编号] 规则描述 | tilt=方向:权重 | [overrides=倾斜名] | status=active`
> 方向可选 `up` / `down` / `flat` / `widen` / `follow_sox`。权重上限由 `config.json` 的 `max_tilt_logodds` 截断。
> **`overrides=` 表示覆盖同名预注册倾斜，而不是叠加**——经验要取代默认值，不能与默认值重复计权。
> **只有 `status=active` 会被读取**；候选区里的 `status=candidate` 不生效。无 `tilt=` 的规则是叙事型纪律，只被阅读、不参与计算。

- [L-001] 当板块[[investment-knowledge-base#指数|指数]]单日波动 >5% 时，个股涨跌主要来自系统性因子，先按[[investment-knowledge-base#Beta|板块 beta]] 归因、再谈个股逻辑；预测方向跟随[[investment-knowledge-base#费城半导体指数|费半]]而非个股技术信号 | tilt=follow_sox:0.16 | overrides=sector_beta_spillover | status=active
- [L-002] 媒体给出的[[investment-knowledge-base#前瞻市盈率|前瞻市盈率]]出现互斥[[investment-knowledge-base#口径元数据|口径]]（本次见到 12.9x/16.5x/16.6x/21.5x）时，禁止用「便宜/贵」判断方向；估值只作幅度与风险背景 | status=active
- [L-003] [[investment-knowledge-base#财报|财报]]、非农、FOMC 等[[investment-knowledge-base#计划内事件|计划内事件]]当日，[[investment-knowledge-base#隐含波动率|期权隐含波动率]]定价的是**幅度**而非方向；强制加宽两尾，不允许借事件选边 | tilt=widen:0.12 | overrides=scheduled_macro_event | status=active
- [L-004] 跌破 [[investment-knowledge-base#简单移动平均线|200 日均线]]且 [[investment-knowledge-base#PEAD|PEAD]]「站稳」条件未确认时，不抄底；保持轻微下偏，等待 3–5 个交易日确认 | tilt=down:0.08 | status=active
- [L-005] 样本 <30 的[[investment-knowledge-base#方向命中率|命中率]]、胜率、Sharpe 不得用于调整规则；只用于提出待验证假设 | tilt=flat:0.04 | status=active
- [L-006] 预测必须报[[investment-knowledge-base#概率分布|概率分布]]而非点位；最大桶概率 >45% 视为过度自信信号，需主动检查是否漏了计划外风险 | tilt=widen:0.06 | status=active

**规则来源**：L-001 来自 2026-11-05 全板块去风险（费半 −12.25%、纳指 −5.52%，NVDA 跌幅反而小于多数同业）；L-002 来自口径冲突核验；L-003 来自 Cboe 对 Mag7 财报隐含波动率的说明；L-004 来自 [[earnings-drift-strategy]] 的四条件纪律；L-005/L-006 来自[[investment-knowledge-base#严格适当评分规则|严格适当评分规则]]与[[investment-knowledge-base#多重检验|多重检验]]纪律（Bailey & López de Prado 2014）。

---

## 已归档经验（复盘自动追加，人工确认后在此写结论）

> `review.py` 会在候选区追加带日期的候选规则。每日复盘时把**成立且可复用**的升级为 ACTIVE（赋予 L-0xx 编号），把不成立的在此写明「为何不成立」，形成可追溯的修订史。

### 2026-11-06 建库说明（尚未有实盘复盘样本）

- 首个预测之前的**已知负面实证**：本仓库 `[[earnings-drift-strategy]]` 在 2023-10~2026-10 的 8 次财报中，naive「巨量+大波动+站稳」信号**一次未触发**，且多数财报后出现反转。因此任何「跟随巨轮」的直觉在 NVDA 上都先按**反证**处理。
- **已知数据卫生教训**：同为 2026-11-05，媒体出现 −9.26%（收盘）/ −9.18% / −7.3% / −6.94% 等多个数字，只有 **$181.60 / −9.26%** 是收盘值；误用盘中快照会污染事件收益。[[investment-knowledge-base#量比|量比]]必须用 [[investment-knowledge-base#ADV20|ADV20]]，不能用前一日作代理。
- **已知归因教训**：把「民主党赢得[[investment-knowledge-base#中期选举|中期选举]]」直接写成「NVDA 大跌的原因」漏掉了传导层（审批/电力→交付时点）与放大层（[[investment-knowledge-base#拥挤交易|拥挤仓位]]、去杠杆、[[investment-knowledge-base#负 Gamma|负 Gamma]]、跌破 200 日线）。因果要分层，复盘归因同样要分层。
- **口径铁律**：NVDA [[investment-knowledge-base#财年|财年]] 1 月底结束，FY2027 覆盖 2026-02~2027-01；讨论估值必须同时声明「哪个财年 / 哪个 [[investment-knowledge-base#每股收益|EPS]] / 哪个价格时点」。
- **建库期修正（开盘前完成，此后不再回改）**：首版代码把 ACTIVE 规则与预注册倾斜**重复计权**（L-001 与 `sector_beta_spillover`、L-003 与 `scheduled_macro_event` 各加了两遍），使首期预测过度偏多。已实现 `overrides=` 语义并重建首期预测。**教训：规则库与默认参数之间必须显式声明「覆盖」还是「叠加」，否则经验会悄悄放大而非修正模型。**

### 2026-11-05 回测演练复盘（**非实盘预测**，仅用于验证闭环）

> 用 `code/demo_backfill.py` [[investment-knowledge-base#point-in-time|严格截断]]到 2026-11-04 收盘的信息，重建「若当日盘前做预测会说什么」，再与真实 11-05 [[investment-knowledge-base#OHLCV|OHLCV]] 对照。此记录**不计入**实盘记分板。

- **预测**：`crash 9.7% / down 18.1% / flat 41.0% / up 24.7% / surge 6.5%`，P(涨) 51.7%，E[r] −0.03%，众数 `flat`。
- **实际**：收 $181.60，**−9.26%**（`crash`）；开盘缺口 −2.03%、日内 −7.38%；费半 −12.25%。
- **评分**：方向 MISS ｜ Brier **0.541** ｜ [[investment-knowledge-base#RPS|RPS]] **0.360** ｜ [[investment-knowledge-base#预测区间|80% 区间]] **未覆盖** ｜ E[r] 误差 9.23pp ｜ 综合 **44 分（D）**。
- **归因**：费半 × beta 0.65 = **−7.99%**，[[investment-knowledge-base#残差|个股残差]]仅 **−1.26%** → 这是**板块系统性去风险**，不是个股基本面；但模型用的是「小缺口 + 低波动」匹配条件（n=179），完全没把板块极端日纳入条件，因此尾部被严重低估。
- **结论（可复用）**：当板块指数单日 >5% 时，个股预测先验必须切换到「板块极端日条件分布」；无条件基准率在这类日子系统性低估尾部。这与 L-001 的方向一致，但**强度不够**——方向对了、幅度错了，同样算失准。

### 2026-11-06 盘前候选裁决（结论：3 条全部维持 `status=candidate`，本轮不升级）

**程序事实**：本轮 `data_ingest.py` 联网成功（live），`review.py` 输出 `no pending forecast with a completed session yet -> nothing to score`；最新已完成 NVDA bar 仍为 **2026-11-05**，唯一 pending 预测（2026-11-06）在 18:35 北京时间尚未开盘（22:30 开盘）。因此本轮**没有任何新的实盘复盘样本**，记分板仍为 `1 预测 / 0 复盘`。

**三条共同的否决依据**：
1. 三条候选全部来自 `demo_backfill.py` 的 2026-11-05 **[[investment-knowledge-base#回测|回测]]演练**，该文件明确标注「非实盘预测，仅用于验证闭环，不计入实盘记分板」；本质是**单日、单样本（n=1）**的观察，不是实盘证据。
2. 本文件读前检查清单与 L-005 规定：样本 <30 的命中率／胜率／得分**不得用于调整规则**，只用于提出待验证假设；且明令「不允许因为昨天错了而临时改规则」。
3. 本轮零新增实盘复盘。此时升级等于把一次演练的噪音固化为永久规则，违反「候选 → 确认 → ACTIVE」闸门；`[[review-notes]]` 11-05 段亦已写明「保持 candidate，待实盘复盘确认后才生效」。

**逐条具体裁决**（禁止「市场波动大」这类空话）：

- **L-C20261105-1（widen:0.15，尾部加宽）— 不升级**。与已 ACTIVE 的 L-003（widen:0.12，`overrides=scheduled_macro_event`）和 L-006（widen:0.06）**语义重叠**；若作为无 `overrides=` 的加法规则升级，会重复计权——这正是建库期修正过的缺陷。且 11-05 是板块单日 -12.25% 的极端日，单日击穿 80% 区间不足以证明「无条件基准率在所有高波动日都系统性过窄」。待累计 ≥30 个实盘样本、且确认存在系统性过度自信后，再以 `overrides=` 或新规则形式提交。
- **L-C20261105-2（follow_sox:0.22，板块极端日条件分布）— 不升级**。方向与已 ACTIVE 的 L-001（follow_sox:0.16，`overrides=sector_beta_spillover`）一致，差别只在**强度**；单日个股残差 -1.26% 不足以支撑把权重从 0.16 抬到 0.22。若未来升级**必须**写 `overrides=sector_beta_spillover`，否则叠加计权会重现「首期预测过度偏多」。另外「板块极端日条件分布」要求按 |SOX 日收益| > 5% 分层重新估计基准率，当前 `signals.py` 无此分层能力，属于**功能改造**而非权重调整，应另立工程任务，不塞进规则库。
- **L-C20261105-3（widen:0.10，Brier >0.40 时写显式证伪条件）— 不升级为计算规则**。其内核「遗漏的已公开风险要写成显式证伪条件」是**叙事型纪律**，已由预测卡片「## 会证明我错的是什么」与每日简报 §9 承担，无需 tilt；而 `widen:0.10` 又与 L-003／L-006 重叠。保留候选；待实盘出现 Brier >0.40 且确有未纳入的公开风险时，再决定升级为**无 tilt** 的叙事型 ACTIVE 规则。

**本轮动作**：候选区三行**原样保留**、`status=candidate` 不变、不删除任何候选行；ACTIVE 规则集与 `config.json` 预注册倾斜均不变。冻结记录里保存的 lessons sha256 是当时读到的版本，不因本轮追加归档说明而回改——本轮只追加裁决文字，不改变任何生效规则。

### 2026-11-06 盘前第二轮的候选裁决（20:31 北京时间 · 结论：3 条仍全部维持 `status=candidate`）

**程序事实**：本轮 `data_ingest.py` live 成功（最新已完成 NVDA bar 仍为 **2026-11-05**）；`review.py` 再次输出 `no pending forecast with a completed session yet -> nothing to score`。执行时刻 20:31 早于非农发布（21:30）与美股开盘（22:30），唯一 pending 预测（2026-11-06）无已收盘 OHLCV。因此**本轮仍为零新增实盘复盘样本、零新增候选经验**，记分板保持 `1 预测 / 0 复盘`。`[[prediction-log]]` 由程序重建，内容未变。

**逐条复核结论（与 18:35 轮次一致，理由不重复展开）**：

- **L-C20261105-1（widen:0.15）— 不升级**。仍与 ACTIVE 的 L-003（widen:0.12，`overrides=scheduled_macro_event`）、L-006（widen:0.06）语义重叠，无 `overrides=` 升级会重复计权；且本轮无任何新的区间覆盖观测可支撑「系统性过度自信」。
- **L-C20261105-2（follow_sox:0.22）— 不升级**。方向与 L-001（follow_sox:0.16，`overrides=sector_beta_spillover`）一致，差别只在强度；本轮无新残差观测。且「板块极端日条件分布」需 `signals.py` 增加 |SOX 日收益| >5% 分层基准率，属功能改造，不塞进规则库。若未来升级**必须**写 `overrides=sector_beta_spillover`。
- **L-C20261105-3（widen:0.10）— 不升级为计算规则**。内核「遗漏的已公开风险写成显式证伪条件」已由预测卡片与每日简报 §9 承担；`widen:0.10` 又与 L-003/L-006 重叠。本轮新发现的 A 级国会简报会（11-18）已按该纪律写入简报 §9.3 的「计划外消息」证伪条件，属于**叙事型纪律已被执行**，不构成升级为 tilt 的证据。

**共同否决依据**：三条候选均来自 `demo_backfill.py` 的非实盘演练（n=1）；L-005 规定样本 <30 不得调规则；读前检查清单明令「不允许因为昨天错了而临时改规则」。本轮零新增实盘样本，此时升级等于把一次演练的噪音固化为永久规则。

**本轮额外修复（数据卫生，非规则升级）**：发现 `link_terms.py` 因知识库「政策状态机」词条含过泛别名 `status`，把 **L-001 的 `status=active` 改写为 `[[investment-knowledge-base#政策状态机|status]]=active`**，使 `predict.py` 的真实解析器只读到 **5 条** ACTIVE 规则（冻结记录为 6 条），L-001 及其 `overrides=sector_beta_spillover` 会被静默漏读。已在 `link_terms.py` 对形如 `- [L-xxx]` 的机器可读规则行做整行保护，并还原 L-001 字面语法；经 `read_lessons_or_die()` 复核，6 条规则与冻结记录**完全一致**。此修复只保护语法标记，**不改变任何规则内容、权重或预注册倾斜**，冻结预测未被回改。教训：术语链接的作用域必须排除一切由程序按字面解析的行，否则文档美化会静默改变模型输入。

---

## 候选经验（自动追加，待确认）

> 由 `review.py` 自动生成。每条需经每日复盘确认后，才把 `status=candidate` 改为 `status=active` 并赋予正式编号；`predict.py` 只读取 ACTIVE。
> **未确认的候选不生效**——这是防止把一天噪音固化成永久规则的闸门。

### 2026-11-05 回测演练（44 分 / D，来源：demo_backfill.py，非实盘）

- [L-C20261105-1] 80% 区间被 >3% 的实际波动击穿：高波动状态下必须显著加宽两尾，不能用「以 flat 为众数」的窄分布表达不确定性 | tilt=widen:0.15 | status=candidate
- [L-C20261105-2] 板块指数单日 >5% 且个股残差 <2% 时，个股分布应切换为「板块极端日条件分布」；无条件基准率在此类日子系统性低估尾部 | tilt=follow_sox:0.22 | status=candidate
- [L-C20261105-3] Brier >0.40 属严重失准：检查是否有未纳入的已公开风险（政策/听证/监管表态），并在下一次预测前把该风险写成显式证伪条件 | tilt=widen:0.10 | status=candidate
