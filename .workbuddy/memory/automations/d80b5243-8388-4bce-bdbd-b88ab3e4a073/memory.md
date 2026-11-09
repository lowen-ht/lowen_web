# 自动化执行记忆 · NVDA 每日盘前复盘与预测

> 只记高层结论与跨轮次注意事项，不放完整正文。启用日期 2026-11-06。

## 2026-11-06（首次有记录的执行）
- 交易日 = 是（周五，NYSE 休市表未命中）。**实际执行 18:35 北京时间**，早于预期窗口 19:00–21:30 与配置 20:30，已在 daily §9.4 记录并提醒用户确认自动化时间；若调度器按 UTC 解释 BYHOUR，应改为 12:30。
- `data_ingest.py` live 成功，最新已完成 NVDA bar 仍为 2026-11-05；`review.py` 输出 `no pending forecast with a completed session` → **0 条新复盘**，记分板 1/0，未补造分数。
- `predict.py --date 2026-11-06` 返回 `ALREADY FROZEN`（该日预测已于 10:01 UTC 冻结），按纪律未覆盖；已用 content_sha256 与 render_card 双重核验冻结 JSON 与卡片字节未变。
- 候选经验 3 条（来自 demo_backfill 非实盘演练）**全部维持 candidate**，逐条否决理由写入 lessons.md 归档区；ACTIVE 规则集 6 条经程序比对与冻结时完全一致（只追加归档文字，sha256 变化属预期）。
- 更新：premarket.json（保守值 +2.9% 保持不变、区间/板块/共识/来源刷新、atm_iv=null）、events.json（+6 条新事件、共 20 条，多源冲突并列）、lessons.md、review-notes.md、daily/2026-11-06.md §9、events/nvda-event-calendar.md。
- `report.py` 重建后追加 §9，顺序正确。code/ 隔离经 git check-ignore 复核有效。

### 下一轮注意
1. 11-06 收盘后（北京时间 11-07 05:00 之后）首个实盘复盘才产生，届时应自动生成分数、beta 残差归因与**新的**候选经验；再走「候选 → 确认 → ACTIVE」闸门。
2. 现有 3 条候选与 ACTIVE 的 L-001/L-003/L-006 语义重叠，未来升级必须写 `overrides=`，且 L-C20261105-2 需先实现「板块极端日分层基准率」功能改造。
3. 事件日历中 11-06 的两条 watching（非农、常规交易）outcome 为「⏳ 待补充」，下轮须用真实结果替换，不得把预期值当结果。
4. 目标交易日取「最近尚未收盘的美股交易日」；若执行落在美股收盘后（北京时间 05:00 之后至次日），应指向下一个交易日。

## 2026-11-06（第二轮 · 20:31 北京时间）
- 交易日=是；**执行落在预期 19:00–21:30 窗口内，18:35 的时区偏差已修正**，无需再提醒用户调整时间。目标交易日仍为 11-06（美东 07:31 未开盘）。
- 顺序全程走完：live 取数（11-05 为最新 bar）→ `review.py` 仍 `no pending forecast with a completed session`（0 复盘 / 0 新候选，记分板 1/0）→ 3 条候选第二轮**全部维持 candidate** → `predict.py` 返回 `ALREADY FROZEN`（未覆盖）→ `report.py` 重建 + 追加 §9 → `link_terms.py` 插入 111 链接、复跑 0（幂等）。
- **本轮最重要的发现（已修复）**：`link_terms.py` 受知识库别名 `status` 影响，把 L-001 的 `status=active` 改成 wikilink，导致 `predict.py` 只读到 5/6 条 ACTIVE。已在脚本加 `RULE_ROW_RE` 整行保护并还原语法；`read_lessons_or_die()` 复核 6 条与冻结记录一致，冻结 JSON sha256 与卡片字节未变。**未改知识库词条**。
- 信息层新增 A 级事件「11-18 国会三委员会闭门简报会（11-11 前确认）」、B 级「11 月非农预计 12-04」；events 22 条。11-06 非农/常规交易仍未发生，保持 watching，未预填结果。加息概率多源冲突并列（新增回落至 68.7% 读数）。
- 交付：daily/2026-11-06.md（§9 六条要点 + 三情景分支 + 证伪条件 + 轮次留痕）、events/nvda-event-calendar.md、lessons.md、review-notes.md、prediction-log.md、premarket.json、events.json、link_terms.py。

### 下一轮追加注意
5. **每轮必做验收**：调用 `predict.read_lessons_or_die()`，把 active_rules 的 (id, tilt, overrides) 与最新冻结记录比对，确认条数一致；这是防止链接脚本静默改变模型输入的唯一可靠检查。
6. 11-06 收盘后（11-07 05:00 之后）首次复盘时，除填真实 NFP / OHLCV / 量比 / 残差外，须核对 §9.2 三分支哪个被触发，并检验 `positive_overnight_gap`(down,0.14) 与 L-001 覆盖后的 follow_sox 是否成立。
