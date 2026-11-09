# 项目长期约定 · lowen_web（Quartz 数字花园）

## NVDA 投资研究板块（2026-11-06 起）
- **更新节奏：每天**（盘前北京时间 20:30 自动化）。内容**重量化信号**，同时保留事件跟踪；新设「开盘/收盘预测学习板块」。
- 目录职责：`content/Investment/quant|events|daily|sessions|assets/` 只放**可发布 Markdown**；`content/Investment/code/` 放**全部程序与本地数据**（脚本、CSV、JSON、预测状态），不入库、不发布。
- 双重隔离：`.gitignore` 的 `content/**/code/` + `quartz.config.ts` 的 `ignorePatterns` 中 `**/code/**`（发布层独立兜底）。改构建配置后必须重新用 globby 验证。
- 本机 Python 3.13.12（managed 路径）**无 pandas/numpy/yfinance**；联网可用标准库 `urllib` 直连 Yahoo chart API。完整版程序一律保持**零第三方依赖**，保证任何环境可复现。
- 数据卫生铁律：口径元数据（财年、EPS 类型、价格时点、成交量分母、来源级别 A/B/C、采集时间）必须与数值一起存；收盘价与盘中快照不可混用；NVDA 财年 1 月底结束，FY2027 ≠ 自然年 2027；量比分母用 ADV20。
- 事件必须配「影响路径 + 可验证指标」；研究结论必须写「可证伪条件」；多源冲突并列展示，不静默取舍。

## 预测学习板块的硬约束
- 流程顺序不可变：**复盘 → 确认/升级经验 → 预测 → 报告**。
- `sessions/lessons.md` 是**每次预测前必读**的独立经验库，`predict.py` 读取失败即拒绝出预测，并把文件 sha256 写进预测记录。
- 预测冻结后**永不回改**，只在 `outcome/scores/attribution` 追加结果；评分用严格适当规则（多分类 Brier、有序 RPS、80% 区间、方向命中）。
- 三者分工：`prediction-log.md`（程序重建，量化台账）、`review-notes.md`（每日追加，新闻/事件定性归因）、`lessons.md`（可复用规则，ACTIVE 才生效）。
- ACTIVE 规则语法：`- [L-0xx] ... | tilt=方向:权重 | [overrides=倾斜名] | status=active`。**取代预注册倾斜时必须用 `overrides=`，不能叠加**（曾因此重复计权导致首期预测过度偏多）。
- 候选经验保持 `status=candidate`，须经确认才升级；样本 <30 的命中率不用于改规则。
- 自动化 id `d80b5243-8388-4bce-bdbd-b88ab3e4a073`（周一至周五 20:30 北京时间），分两步执行以便在复盘与预测之间插入经验确认。

## 方法论立场
- 回测是证据不是开仓许可：walk-forward + purge/embargo + 交易成本 + Deflated Sharpe / PBO；本次实测 DSR 0.566 不显著，**未找到可执行策略**。
- 站内 `strategy/earnings-drift-strategy.md` 的 8 次财报实测（naive 信号一次未触发、多数反转）是重要负面实证，任何「跟随巨轮」直觉先按反证处理。
- 板块 beta 残差归因优先于公司层面找理由；|残差| < 2% 时视为系统性波动。

## 术语知识库与链接约定（2026-11-06 起）
- `content/Investment/investment-knowledge-base.md` 是**全站唯一术语源**（10 类 153 条），必须发布；新增词条用 `### 词条名` + `**别名**：...` 两行，再 `python code/link_terms.py` 即可为全站补链接。
- 链接形式 `[[investment-knowledge-base#<标题原文>|<原文>]]`：**anchor 直接写标题原文**，Quartz 的 `splitAnchor()` 与 `rehype-slug` 都用 github-slugger，会自动对齐；不要手工算 slug。表格内 alias 分隔符用 `\|`（兼容 Obsidian 与 GitHub 源码阅读）。
- `code/link_terms.py` 幂等：默认每文件每术语仅首次出现加链接，作用域默认 `Investment/` + `Finance/`（不含 CS/Math/Ops，避免同名数学词误链）。`--unlink` 可整体撤销后重建；`--all` 改为每处；`--scope all` 扩到全站。
- **程序生成的文件会丢链接**：`report.py` / `review.py` / `predict.py` 重建 daily/events/sessions，因此 `run_daily.py` 末尾与每日自动化【4.5】都必须在所有写入完成后调用 `link_terms.py`。
- 别名必须避免过泛词（「波动」「分布」「融资」「风控」「配置」「分配」「收益率」曾造成误链）；新增别名后用 `--dry-run` 抽查短词匹配再正式写入。
- **机器可读行整行豁免（2026-11-06 修）**：`link_terms.py` 的 `RULE_ROW_RE` 跳过形如 `- [L-xxx]` 的规则行，禁止在其中插入任何链接。教训：知识库「政策状态机」别名 `status` 曾把 L-001 的 `status=active` 改写成 wikilink，使 `predict.py` 静默只读到 5/6 条 ACTIVE 规则（漏掉 `overrides=`）。**文档美化不得改变程序按字面解析的语法标记**；每轮用 `read_lessons_or_die()` 与冻结记录的 active_rules 做集合比对，这是必做的验收项。
