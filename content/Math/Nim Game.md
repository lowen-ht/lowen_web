---
title: Nim Game
---

> [!abstract] 一句话概括
> Nim（尼姆游戏）是组合博弈论中最基础也最重要的模型。它的完整解法由 Charles L. Bouton 于 1901 年给出：**把所有堆的石子数按位异或（XOR），结果为零则先手必败，非零则先手必胜。** 这个"异或和为零"的判据，后来成为整个无偏博弈（impartial game）理论——Sprague–Grundy 定理——的起点。

---

# Part I · English

## 1. Definition and rules

**Nim** is played with several piles (heaps) of objects. Two players alternate moves. On each turn a player must:

1. choose **exactly one** pile, and
2. remove **at least one** object from it (possibly the entire pile).

The player who takes the **last object wins** (this is called **normal play**).

Formally, a position is a multiset $\{a_1, a_2, \dots, a_n\}$ of non-negative integers; a move replaces some $a_i$ by any smaller value $a_i' < a_i$. A player unable to move loses.

> [!note] Why the order of piles does not matter
> Because a move acts on one pile and piles are independent, a position is fully described by the multiset of pile sizes. Write $(3,4,5)$ and $(5,3,4)$ — they are the same position.

### Terminology / 术语对照

| English | 中文 | Meaning |
|---|---|---|
| impartial game | 无偏博弈 / 公正博弈 | Both players have the same available moves |
| normal play | 正常规则 / 通常规则 | Player taking the last object **wins** |
| misère play | 反规则 / 变态规则 | Player taking the last object **loses** |
| P-position | 必败态（后手必胜） | Player **to move loses** with best play |
| N-position | 必胜态（先手必胜） | Player **to move wins** with best play |
| nim-sum | 尼姆和 / 异或和 | Bitwise XOR of all pile sizes |
| Grundy number | Grundy 数 / SG 值 | The nim-value of a game component |
| mex | 最小排斥值 | Minimum excludant: smallest non-negative integer not in a set |

## 2. The core tool: nim-sum

The nim-sum of a position $(a_1,\dots,a_n)$ is

$$ S = a_1 \oplus a_2 \oplus \cdots \oplus a_n $$

where $\oplus$ is bitwise **XOR** (exclusive or). Recall:

- $x \oplus x = 0$ for every $x$
- XOR is associative and commutative
- $x \oplus 0 = x$

These three facts are used constantly: XOR-ing the same number twice cancels it out. In particular, **a move always changes the nim-sum**, because replacing $a_i$ by $a_i' \ne a_i$ changes $S$ by $a_i \oplus a_i' \ne 0$.

### How to compute a nim-sum by hand

Write the piles in binary and XOR column by column — in each bit position the result is 1 exactly when an **odd** number of piles have a 1 there.

**Example: $(3,4,5)$**

| pile | 4 | 2 | 1 |
|---|---|---|---|
| 3 | 0 | 1 | 1 |
| 4 | 1 | 0 | 0 |
| 5 | 1 | 0 | 1 |
| **XOR** | **0** | **1** | **0** |

The nim-sum is $010_2 = 2 \neq 0$, so $(3,4,5)$ is an **N-position** — the player to move wins.

## 3. Bouton's theorem

> [!important] Theorem (Bouton, 1901)
> A Nim position is a **P-position** (the player to move loses) **if and only if** its nim-sum is $0$.

The proof is short and worth knowing, because the same two-step pattern proves almost every impartial-game result.

**Step 1 — from nim-sum $0$, every move leaves nim-sum $\ne 0$.**
Suppose $S = 0$ and we replace $a_i$ by $a_i' < a_i$. The new nim-sum is
$$ S' = S \oplus a_i \oplus a_i' = a_i \oplus a_i' $$
and $a_i \ne a_i'$ implies $a_i \oplus a_i' \ne 0$. So $S' \ne 0$. ✔

**Step 2 — from nim-sum $\ne 0$, there is always a move to nim-sum $0$.**
Let $d$ be the **highest set bit** of $S$. Since $S = \bigoplus a_j$, some pile $a_k$ has a $1$ in that bit (an odd number of piles do). Define

$$ a_k' = a_k \oplus S $$

Then $a_k' < a_k$ (the highest differing bit is exactly bit $d$, where $a_k$ has 1 and $a_k'$ has 0), so this is a legal move. And

$$ S \oplus a_k \oplus a_k' = S \oplus a_k \oplus a_k \oplus S = 0 $$

so the new nim-sum is $0$. ✔

**Conclusion.** From a $0$ position every move hands the opponent a non-zero position; from a non-zero position you can always hand back a $0$ position. Since the all-zero position (nim-sum $0$) is a loss for the player to move, the zero positions are exactly the losing ones. ✔

> [!tip] How to find the winning move in practice
> 1. Compute $S$.
> 2. Take $d$ = the highest set bit of $S$.
> 3. Choose any pile whose value has bit $d$ set, and replace it with $a_k \oplus S$.
> This is the only method you ever need.

> [!note] A neat consequence: the number of winning moves is always odd
> Step 2 above says a pile can be improved exactly when its bit $d$ is set. Since bit $d$ of $S$ is 1, an **odd** number of piles have bit $d$ set — and for each of them $a_k \oplus S < a_k$ is a legal winning move. So in any N-position the count of winning moves is **odd** (never 0, never 2). Check it: $(4,5,6)$ has 3, $(5,5,5)$ has 3, while $(3,4,5)$, $(7,8,9)$ and $(6,7,8)$ each have exactly 1.

### Worked example: $(3,4,5)$

$S = 3 \oplus 4 \oplus 5 = 2 = 010_2$. The highest set bit of $S$ is bit $2$ (value 2). Which piles have bit 2 set? Only $3 = 011_2$. So we must modify the $3$-pile:

$$ a_k' = 3 \oplus 2 = 1 $$

The unique winning move is **$3 \to 1$**, giving $(1,4,5)$, and indeed $1 \oplus 4 \oplus 5 = 0$. Every other move leaves a non-zero nim-sum, i.e. a winning position for the opponent.

> [!warning] Common mistake
> Reducing the **largest** pile is not a strategy. In $(3,4,5)$ the intuitive move "5 → 2" gives $(2,3,4)$ with nim-sum $5 \ne 0$ — a losing move. Always compute the nim-sum; never eyeball the biggest pile.

### Small losing positions (P-positions)

All positions with nim-sum $0$. In particular:

- **Two piles:** $(a,a)$ — equal piles lose.
- **Three piles** with sizes in $1..7$, exactly these seven: $(1,2,3)$, $(1,4,5)$, $(1,6,7)$, $(2,4,6)$, $(2,5,7)$, $(3,4,7)$, $(3,5,6)$.
- More generally: any position that splits into equal pairs, plus $(1,1)$, $(2,2)$, $(1,4,5)$, $(2,3,4,5)$, etc.

## 4. Misère Nim: last to move loses

Now the player who takes the **last** object **loses**. Almost nothing changes:

> [!important] Theorem (misère Nim)
> If **every non-empty pile has size 1**, the player to move wins iff the number of such piles is **even**.
> **Otherwise** (at least one pile of size $\ge 2$), the normal-play rule still applies: the player to move wins iff the **nim-sum is non-zero**.

The intuition: misère play only differs from normal play in the endgame, when nothing is left but single objects. As long as a pile of size $\ge 2$ remains, a player always has a "spare" move available to control the parity, so the normal-play strategy remains optimal.

**Examples.** $(1,1)$ — mover wins. $(1,1,1)$ — mover loses. $(1,2)$ — at least one pile $\ge 2$, nim-sum $3 \ne 0$, mover wins. $(2,2)$ — nim-sum $0$, mover loses. $(1,2,3)$ — nim-sum $0$, mover loses. $(1)$ — all piles are 1, one pile, odd, mover loses.

## 5. Beyond Nim: the Sprague–Grundy theorem

Bouton's theorem is the base case of a much larger structure.

> [!important] Sprague–Grundy theorem
> Every **impartial** game under normal play is equivalent to a single Nim pile. Define the **Grundy number** (nim-value) of a position $G$ by
> $$ g(G) = \operatorname{mex}\{\, g(H) : H \text{ reachable from } G \,\}, \qquad \operatorname{mex}(A) = \min\{k \ge 0 : k \notin A\} $$
> with $g(\text{no moves}) = 0$. Then a position is a loss for the mover iff $g = 0$.
> Moreover the **disjunctive sum** (play in any one component) has Grundy number
> $$ g(G_1 + \cdots + G_n) = g(G_1) \oplus \cdots \oplus g(G_n) $$
> So the XOR rule is not special to Nim — it is the universal law for sums of impartial games.

A Nim pile of size $n$ has $g = n$, which is exactly why Bouton's nim-sum works.

**Tiny worked example.** Consider the subtraction game "take 1 or 2 objects from a single pile; last to take wins". Then $g(0)=0$, $g(1)=\operatorname{mex}\{0\}=1$, $g(2)=\operatorname{mex}\{0,1\}=2$, $g(3)=\operatorname{mex}\{g(2),g(1)\}=\operatorname{mex}\{2,1\}=0$, $g(4)=\operatorname{mex}\{g(3),g(2)\}=\operatorname{mex}\{0,2\}=1$. So the pattern is $0,1,2,0,1,2,\dots$: the mover loses exactly when $n \equiv 0 \pmod 3$.

## 6. Important variants

**Single-pile subtraction ("counting game").** One pile of $n$; take $1$ to $k$ objects; last to take wins. The mover wins iff $n \not\equiv 0 \pmod{k+1}$. For $k=3$ this is the classic *n mod 4 ≠ 0* result (the [LeetCode 292](https://leetcode.com/problems/nim-game/) "Nim Game" problem). Note that this is a **single-pile subtraction game, not mathematical Nim** — the name is misleading; there is no XOR involved. (Its misère version, where the last taker loses, flips to: mover loses iff $n \equiv 1 \pmod{k+1}$, i.e. $n \equiv 1 \pmod 4$ for $k=3$.)

**Wythoff's game.** Two piles; a move removes any positive number from one pile, **or** the same positive number from both. The losing positions are
$$ (\lfloor k\varphi \rfloor,\ \lfloor k\varphi^2 \rfloor) = (\lfloor k\varphi \rfloor,\ \lfloor k\varphi \rfloor + k), \qquad \varphi = \frac{1+\sqrt5}{2} \approx 1.618 $$
for $k = 0,1,2,\dots$ — giving $(0,0), (1,2), (3,5), (4,7), (6,10), (8,13), (9,15),\dots$ (the **cold positions** / P-positions).

**Moore's Nim$_k$.** With $n$ piles you may remove from **at most $k$** piles. A position is a **P-position** iff for **every** binary bit position, the *sum* of the bits of all pile sizes at that position is divisible by $k+1$:

$$ \sum_{i=1}^{n} \big( \text{bit } b \text{ of } a_i \big) \equiv 0 \pmod{k+1} \qquad \text{for every bit } b $$

> [!warning] This is **not** the XOR rule
> Only the case $k=1$ coincides with Bouton's nim-sum (then $k+1=2$, so "every column has an even number of 1s" is exactly "XOR = 0"). For $k\ge2$ the bit-*sum* is genuinely different from XOR. Example with $k=2$ (so mod 3): $(1,2,3)$ has XOR $=0$ but bit-column sums $2,2$ — not divisible by 3, so the mover **wins**; while $(1,1,1)$ has XOR $=1$ but column sum $3 \equiv 0$ — so the mover **loses**.

**Moore's "at most $k$" vs "exactly $k$".** Moore's game (at most $k$ piles) is solved by the rule above and is polynomial-time solvable. The superficially similar game where you must take from **exactly** $k$ piles (Exact $k$-Nim) is a **different and much harder** problem with its own research literature — do not conflate the two.

**All piles of size 1.** Covered by the misère rule above; in normal play it is just the XOR rule, i.e. mover wins iff the number of piles is odd.

## 7. Complexity and where it is used

- Computing the nim-sum takes time linear in the number of piles, $O(n)$, using $O(1)$ extra space; finding the winning move is a second linear pass. Nim is therefore in **P** — tractable, in fact trivial.
- This is in sharp contrast to **general** impartial games: deciding the winner of Generalized Geography is **PSPACE-complete** (Schaefer 1978; Lichtenstein–Sipser 1980). Note carefully — it is *not* true that "all impartial games are hard": Nim is a polynomial-time counterexample. A subtle bonus fact: for **Undirected** Geography the *winner* can be determined in polynomial time, yet computing its *Grundy value* is PSPACE-complete.
- **Where it shows up:**
  - **Algorithmic contests.** Nim and its variants are standard problems (e.g. Luogu P2197, AtCoder ABC 255 G "Constrained Nim", the [cp-algorithms](https://cp-algorithms.com/game_theory/sprague-grundy-nim.html) chapter).
  - **Combinatorial game theory.** Grundy values power the analysis of Go endgames, octal games, and the theory in *Winning Ways*.
  - **Foundational mathematics.** Nim is the canonical *cold* game; Conway's theory of surreal numbers builds on such games.
  - **Model thinking.** The P/N alternation is the prototype of "invariant + induction" reasoning that recurs throughout algorithm design: find a quantity (here the nim-sum) that the opponent cannot restore.

## 8. Exercises

Work them out before opening the answers.

> [!question]- Exercise 1 — Compute nim-sums and classify
> Decide win/lose for the player to move, in **normal play**:
> (a) $(2,5,7)$  (b) $(1,2,3)$  (c) $(7,8,9)$  (d) $(4,4)$  (e) $(2,2,2)$  (f) $(1,1,1,1,1)$
>
> > [!success]- Answer
> > (a) $2\oplus5\oplus7 = 0$ → **lose**. (b) $1\oplus2\oplus3=0$ → **lose**. (c) $7\oplus8\oplus9 = 6 \ne 0$ → **win**. (d) $4\oplus4=0$ → **lose**. (e) $2\oplus2\oplus2=2\ne0$ → **win**. (f) five $1$s, XOR $=1\ne0$ → **win**.

> [!question]- Exercise 2 — Find *all* winning moves
> Find every winning move in each position:
> (a) $(7,8,9)$  (b) $(4,5,6)$  (c) $(5,5,5)$  (d) $(6,7,8)$  (e) $(9,10,11)$
> Before computing, predict the **parity** of the number of winning moves in each.
>
> > [!success]- Answer
> > Recall the recipe: $d$ = highest set bit of $S$, and only piles with bit $d$ set can be reduced (to $a_k \oplus S$). The count is therefore always odd.
> >
> > **(a) $(7,8,9)$**: $S = 6 = 110_2$, $d$ = bit 2 (value 4). Piles with bit 2 set: $7$ and $9$ (not $8$).
> > - $7 \to 7\oplus6 = 1$ → $(1,8,9)$, check $1\oplus8\oplus9 = 0$ ✔
> > - $9 \to 9\oplus6 = 15 > 9$ ✗ illegal
> > **Unique winning move: $7 \to 1$.** (1 move)
> >
> > **(b) $(4,5,6)$**: $S = 7 = 111_2$, $d$ = bit 2. All three have bit 2 set.
> > - $4 \to 4\oplus7 = 3$ ✔  - $5 \to 5\oplus7 = 2$ ✔  - $6 \to 6\oplus7 = 1$ ✔
> > **Three moves: $4\to3$, $5\to2$, $6\to1$.** (3 moves)
> >
> > **(c) $(5,5,5)$**: $S = 5 = 101_2$, $d$ = bit 2. All three have bit 2 set.
> > - each $5 \to 5\oplus5 = 0$ ✔ (three different piles) → $(0,5,5)$
> > **Three moves: emptying any one pile.** (3 moves)
> >
> > **(d) $(6,7,8)$**: $S = 9 = 1001_2$, $d$ = bit 3 (value 8). Only $8$ has bit 3 set ($6=110_2$, $7=111_2$ do not).
> > - $8 \to 8\oplus9 = 1$ ✔
> > **Unique winning move: $8 \to 1$.** (1 move)
> >
> > **(e) $(9,10,11)$**: $S = 8 = 1000_2$, $d$ = bit 3. $9=1001_2$, $10=1010_2$, $11=1011_2$ all have bit 3 set.
> > - $9 \to 9\oplus8 = 1$ ✔  - $10 \to 10\oplus8 = 2$ ✔  - $11 \to 11\oplus8 = 3$ ✔
> > **Three moves: $9\to1$, $10\to2$, $11\to3$.** (3 moves)

> [!question]- Exercise 3 — Misère classification
> Same six positions from Exercise 1, but now the player taking the last object **loses**.
>
> > [!success]- Answer
> > The misère rule differs from normal play only on the region where all non-empty piles have size 1.
> > (a) $(2,5,7)$ not all ones, XOR $=0$ → **lose**. (b) $(1,2,3)$ not all ones, XOR $=0$ → **lose**. (c) $(7,8,9)$ XOR $=6\ne0$ → **win**. (d) $(4,4)$ XOR $=0$ → **lose**. (e) $(2,2,2)$ XOR $=2\ne0$ → **win**. (f) all piles are 1, count $=5$ is **odd** → **lose** (in normal play this same position was a win!).

> [!question]- Exercise 4 — Prove a structural fact
> Prove: if every pile size occurs an **even** number of times, the position is a P-position (in normal play). Is the converse true?
>
> > [!success]- Answer
> > Each value $v$ appears $2m_v$ times, so the nim-sum is $\bigoplus_v (v \oplus \cdots \oplus v)$ with an even number of terms per value, and $x \oplus x = 0$ cancels pairs. Hence $S = 0$ → P-position. ✔
> > **The converse is false**: $(1,2,3)$ is a P-position but each value occurs once (odd). So "paired piles" is sufficient, not necessary — the nim-sum is the true invariant.

> [!question]- Exercise 5 — Grundy values
> For the game "one pile, take 1, 2, or 3 objects, last to take wins", compute $g(n)$ for $n = 0..7$ and state the losing positions.
>
> > [!success]- Answer
> > $g(0)=\operatorname{mex}\varnothing=0$; $g(1)=\operatorname{mex}\{0\}=1$; $g(2)=\operatorname{mex}\{0,1\}=2$; $g(3)=\operatorname{mex}\{0,1,2\}=3$; $g(4)=\operatorname{mex}\{g(3),g(2),g(1)\}=\operatorname{mex}\{3,2,1\}=0$; $g(5)=\operatorname{mex}\{g(4),g(3),g(2)\}=\operatorname{mex}\{0,3,2\}=1$; $g(6)=\operatorname{mex}\{1,0,3\}=2$; $g(7)=\operatorname{mex}\{2,1,0\}=3$.
> > Pattern: $0,1,2,3,0,1,2,3,\dots$ — the mover **loses** iff $n \equiv 0 \pmod 4$.

> [!question]- Exercise 6 — Wythoff's game
> In Wythoff's game, is $(2,1)$ a cold position? (b) Is $(3,5)$? (c) What is the winning move from $(2,2)$, and (d) from $(4,7)$?
>
> > [!success]- Answer
> > Cold positions are $\big(\lfloor k\varphi\rfloor,\ \lfloor k\varphi\rfloor+k\big)$ with $\varphi=(1+\sqrt5)/2$: $(0,0),(1,2),(3,5),(4,7),(6,10),(8,13),(9,15),\dots$ (order within a pair is irrelevant).
> > **(a)** $(2,1)$ is $(1,2)$ → **yes, cold**: the mover loses.
> > **(b)** $(3,5)$ → **yes, cold**: the mover loses.
> > **(c)** $(2,2)$ is **not** cold (the cold list goes $(1,2), (3,5)$ — nothing in between), so the mover **wins**. There are three winning moves, verified by search:
> > - $(2,2) \to (1,2)$ — take 1 from one pile (reaches a cold position) ✔
> > - $(2,2) \to (0,0)$ — take **2 from both** piles (reaches the cold position $(0,0)$) ✔
> >
> > Note the trap: $(2,2) \to (1,1)$ looks natural but is **not** a winning move, because $(1,1)$ is not cold — the opponent replies $(1,1) \to (1,2)$ and you are lost.
> > **(d)** $(4,7)$ **is** cold, so the mover **loses** — there is no winning move. Every legal move hands the opponent a position from which they can return to some cold position. (This is the defining property: from a cold position every move leaves the cold set, and from every non-cold position some move returns to it.)

> [!question]- Exercise 7 — When does adding a pile not change the outcome?
> You are given a P-position. You may add one new pile of your choosing. Can the result be a P-position again? What if the given position is an N-position?
>
> > [!success]- Answer
> > Let the nim-sum be $S$.
> > - If $S = 0$ (P-position) and you add a pile of size $v$, the new nim-sum is $0 \oplus v = v$. This is $0$ only if $v = 0$ — i.e. adding an **empty** pile, which does not change the position at all. So **no non-trivial pile can be added** to keep it a P-position.
> > - If $S \ne 0$ (N-position), adding a pile of size $v = S$ gives nim-sum $S \oplus S = 0$, a P-position. So **yes**, for an N-position you can always add exactly the pile that neutralises it.

> [!question]- Exercise 8 — A counter-intuitive position
> Compare $(1,1,1,1,1,1,1)$ (seven piles of one) in normal play versus misère play.
>
> > [!success]- Answer
> > Normal play: XOR of seven 1s is $1 \ne 0$ → mover **wins** (take one object, leaving six; then mirror).
> > Misère play: all piles are 1 and the count is **odd** → mover **loses**. The mover must take an object, leaving six; the players alternate and the mover is forced to take the last one.
> > This is the cleanest demonstration that the misère all-ones exception flips the verdict.

## 9. References

- C. L. Bouton, "Nim, a game with a complete mathematical theory", *Annals of Mathematics*, 2nd series, **3**(1/4), 1901–1902, pp. 35–39. — [JSTOR 1967631](https://www.jstor.org/stable/1967631). *(The page range is the near-universal citation; the primary record is behind an access wall, so treat it as high-confidence but not directly confirmed.)*
- R. P. Sprague, "Über mathematische Kampfspiele", *Tôhoku Math. J.* **41**, 1935/36, pp. 438–444; P. M. Grundy, "Mathematics and games", *Eureka* **2**, 1939, pp. 6–8. *(Sources differ on whether Sprague's paper is dated 1935 or 1936; "1935/36" is the safest form.)*
- W. A. Wythoff, "A modification of the game of nim", *Nieuw Archief voor Wiskunde* **7**(2), 1907, pp. 199–202.
- E. H. Moore, "A generalization of the game called Nim", *Annals of Mathematics*, 2nd series, **11**(3), 1910, pp. 93–94.
- Wikipedia, [Nim](https://en.wikipedia.org/wiki/Nim) — Bouton's theorem, misère play, variants.
- Wikipedia, [Sprague–Grundy theorem](https://en.wikipedia.org/wiki/Sprague%E2%80%93Grundy_theorem)
- Wikipedia, [Wythoff's game](https://en.wikipedia.org/wiki/Wythoff%27s_game)
- cp-algorithms, [Sprague-Grundy theorem. Nim](https://cp-algorithms.com/game_theory/sprague-grundy-nim.html)
- J. H. Conway, *On Numbers and Games*, 2nd ed., A K Peters, 2001.
- E. R. Berlekamp, J. H. Conway, R. K. Guy, *Winning Ways for Your Mathematical Plays*, 2nd ed., A K Peters, 2001.
- [OEIS A000201](https://oeis.org/A000201) and [A001950](https://oeis.org/A001950) — the Beatty sequences $\lfloor k\varphi\rfloor$ and $\lfloor k\varphi^2\rfloor$ behind Wythoff's cold positions.

---

# Part II · 中文

## 1. 定义与规则

**Nim（尼姆游戏）** 由若干堆（heap / pile）物件组成，两人轮流行动。每一步必须：

1. 选择**恰好一堆**；
2. 从中取走**至少一个**物件（可以整堆取走）。

取走**最后一个**物件的人获胜——这称为**正常规则**（normal play）。

形式化地：一个局面是一个非负整数多重集 $\{a_1,a_2,\dots,a_n\}$，一步行动把某个 $a_i$ 换成更小的 $a_i' < a_i$；无路可走者输。

> [!note] 为什么堆的顺序无关紧要
> 因为一步只作用在一堆上，且各堆互相独立，所以局面完全由"各堆大小的多重集"决定。$(3,4,5)$ 与 $(5,3,4)$ 是同一个局面。

## 2. 核心工具：异或和（nim-sum）

局面 $(a_1,\dots,a_n)$ 的 **nim-sum** 为

$$ S = a_1 \oplus a_2 \oplus \cdots \oplus a_n $$

其中 $\oplus$ 是**按位异或**（XOR）。三条要用一辈子的性质：

- $x \oplus x = 0$（同一个数异或两次会抵消）
- 异或满足结合律与交换律
- $x \oplus 0 = x$

由第一条立刻得到：**任何一步都会改变 nim-sum**。因为把 $a_i$ 换成 $a_i' \ne a_i$，$S$ 的变化量是 $a_i \oplus a_i' \ne 0$。

### 手算 nim-sum

把各堆写成二进制，**按位列对齐后逐列异或**：某一列上 1 的个数为奇数，结果的这一位就是 1。

**例：$(3,4,5)$**

| 堆 | 4 | 2 | 1 |
|---|---|---|---|
| 3 | 0 | 1 | 1 |
| 4 | 1 | 0 | 0 |
| 5 | 1 | 0 | 1 |
| **异或** | **0** | **1** | **0** |

nim-sum $= 010_2 = 2 \ne 0$，所以 $(3,4,5)$ 是**必胜态**，轮到谁走谁赢。

## 3. Bouton 定理

> [!important] 定理（Bouton, 1901）
> Nim 局面是**必败态**（轮走者必败）**当且仅当**其 nim-sum 为 $0$。

证明只有两步，而且这个"两步模式"几乎可以用来证明所有无偏博弈的结论。

**第一步：nim-sum 为 $0$ 时，任何一步都会让它变成非 $0$。**
设 $S=0$，把 $a_i$ 换成 $a_i'<a_i$，则新 nim-sum 为
$$ S' = S \oplus a_i \oplus a_i' = a_i \oplus a_i' $$
因 $a_i \ne a_i'$，故 $a_i \oplus a_i' \ne 0$，即 $S' \ne 0$。✔

**第二步：nim-sum 非 $0$ 时，一定存在一步把它变回 $0$。**
设 $d$ 为 $S$ 的**最高有效位**。由于 $S = \bigoplus a_j$，必存在某堆 $a_k$ 在第 $d$ 位上为 1（因为该位上 1 的总数为奇数）。令

$$ a_k' = a_k \oplus S $$

则 $a_k' < a_k$（两者最高不同的位正是第 $d$ 位：$a_k$ 为 1、$a_k'$ 为 0），所以这是合法走法。并且

$$ S \oplus a_k \oplus a_k' = S \oplus a_k \oplus a_k \oplus S = 0 $$

新 nim-sum 为 $0$。✔

**结论。** 从 $0$ 局面出发，任何走法都把非 $0$ 局面交给对手；从非 $0$ 局面出发，总能交回一个 $0$ 局面。而全零局面（nim-sum 为 $0$）是轮走者必败，所以**nim-sum 为 $0$ 的局面恰好就是必败态**。✔

> [!tip] 实战中怎么找制胜一步
> 1. 先算 $S$；
> 2. 取 $S$ 的最高有效位 $d$；
> 3. 找一堆在第 $d$ 位上是 1 的，把它改成 $a_k \oplus S$。
> 这三步就是全部方法。

> [!note] 一个漂亮的推论：制胜一步的个数永远是奇数
> 上面第 2 步说明，"能被改进"的堆恰好是第 $d$ 位为 1 的那些堆。由于 $S$ 的第 $d$ 位是 1，第 $d$ 位为 1 的堆有**奇数**个，其中每一个都能通过 $a_k \oplus S < a_k$ 走出合法制胜一步。所以任何必胜态里，制胜一步的个数都是**奇数**（不可能是 0，也不可能是 2）。可以验证：$(4,5,6)$ 有 3 个，$(5,5,5)$ 有 3 个；而 $(3,4,5)$、$(7,8,9)$、$(6,7,8)$ 都恰好只有 1 个。

### 例题：$(3,4,5)$

$S = 3 \oplus 4 \oplus 5 = 2 = 010_2$。$S$ 的最高有效位是第 2 位（值为 2）。哪些堆的第 2 位是 1？只有 $3 = 011_2$。所以必须改动 3 这一堆：

$$ a_k' = 3 \oplus 2 = 1 $$

**唯一的制胜一步是 $3 \to 1$**，得到 $(1,4,5)$，而 $1 \oplus 4 \oplus 5 = 0$。其它任何走法都会留下非 $0$ 的 nim-sum，也就是把必胜局面送给对手。

> [!warning] 常见错误
> "取最大那堆"不是策略。在 $(3,4,5)$ 中，凭直觉走"$5 \to 2$"会得到 $(2,3,4)$，其 nim-sum 为 $5 \ne 0$——这是一步败着。永远老实算 nim-sum，不要目测最大堆。

### 小规模必败态（P-position）

所有 nim-sum 为 $0$ 的局面。例如：

- 两堆：$(a,a)$——两堆相等时必败。
- 三堆（各堆大小在 $1\sim7$ 之间）恰好是这 7 个：$(1,2,3)$、$(1,4,5)$、$(1,6,7)$、$(2,4,6)$、$(2,5,7)$、$(3,4,7)$、$(3,5,6)$。
- 更一般地：任何"成对出现且每对相等"的局面，以及 $(1,1)$、$(2,2)$、$(1,4,5)$、$(2,3,4,5)$ 等。

## 4. 反规则 Nim（misère）：取最后一个者输

现在改成**取走最后一个**物件的人**输**。结论几乎不变：

> [!important] 定理（反规则 Nim）
> 若**所有非空堆的大小都为 1**，则轮走者必胜当且仅当堆数为**偶数**。
> **否则**（至少存在一堆大小 $\ge 2$），正常规则仍然适用：轮走者必胜当且仅当 **nim-sum 非 $0$**。

直觉：反规则与正常规则的差别只出现在残局——当场上只剩单个物件的时候。只要还存在一堆大小 $\ge 2$，玩家手里始终有"调节步数奇偶"的余量，因此正常规则的策略依然最优。

**例子。** $(1,1)$ 轮走者胜；$(1,1,1)$ 轮走者败；$(1,2)$ 存在 $\ge 2$ 的堆，nim-sum $=3\ne0$，轮走者胜；$(2,2)$ nim-sum $=0$，轮走者败；$(1,2,3)$ nim-sum $=0$，轮走者败；$(1)$ 全为 1、共 1 堆为奇数，轮走者败。

## 5. 从 Nim 到 Sprague–Grundy 定理

Bouton 定理只是一个更大结构的起点。

> [!important] Sprague–Grundy 定理
> 正常规则下的每个**无偏博弈**都等价于一堆 Nim。定义局面 $G$ 的 **Grundy 数**（nim-value）：
> $$ g(G) = \operatorname{mex}\{\, g(H) : H \text{ 是 } G \text{ 的后继局面} \,\}, \qquad \operatorname{mex}(A) = \min\{k \ge 0 : k \notin A\} $$
> 并约定无路可走的局面 $g=0$。则轮走者必败当且仅当 $g=0$。
> 更重要的是，**不相交博弈之和**（每次只在一个子游戏里行动）满足
> $$ g(G_1 + \cdots + G_n) = g(G_1) \oplus \cdots \oplus g(G_n) $$
> 所以异或规则并不是 Nim 特有的——它是"无偏博弈之和"的普遍规律。

一堆大小为 $n$ 的 Nim 的 Grundy 数恰好是 $n$，这正是 Bouton 的 nim-sum 有效的根本原因。

**小例子。** 考虑"单堆、每次取 1 或 2 个、取最后一个者胜"的取子游戏：$g(0)=0$，$g(1)=\operatorname{mex}\{0\}=1$，$g(2)=\operatorname{mex}\{0,1\}=2$，$g(3)=\operatorname{mex}\{g(2),g(1)\}=\operatorname{mex}\{2,1\}=0$，$g(4)=\operatorname{mex}\{g(3),g(2)\}=\operatorname{mex}\{0,2\}=1$。于是序列是 $0,1,2,0,1,2,\dots$：轮走者在 $n \equiv 0 \pmod 3$ 时必败。

## 6. 重要变体

**单堆取子（counting game）。** 一堆 $n$ 个，每次取 $1 \sim k$ 个，取最后一个者胜。轮走者必胜当且仅当 $n \not\equiv 0 \pmod{k+1}$。取 $k=3$ 就是经典的 **$n \bmod 4 \ne 0$** 结论（即 [LeetCode 292](https://leetcode.com/problems/nim-game/) "Nim Game"）。注意：这是**单堆减法游戏，不是数学意义上的 Nim**——名字具有误导性，其中根本没有异或。（它的反规则版本——取最后一个者输——则反转为：轮走者必败当且仅当 $n \equiv 1 \pmod{k+1}$，$k=3$ 时为 $n \equiv 1 \pmod 4$。）

**Wythoff 游戏。** 两堆，一步可以：从其中一堆取走任意正数，**或**从两堆各取走相同的正数。必败态（cold positions）为
$$ (\lfloor k\varphi \rfloor,\ \lfloor k\varphi^2 \rfloor) = (\lfloor k\varphi \rfloor,\ \lfloor k\varphi \rfloor + k), \qquad \varphi = \frac{1+\sqrt5}{2} \approx 1.618 $$
取 $k=0,1,2,\dots$ 得到 $(0,0), (1,2), (3,5), (4,7), (6,10), (8,13), (9,15),\dots$

**Moore 的 Nim$_k$。** 共 $n$ 堆，一次最多可从 $k$ 堆中取子。该局面是**必败态**当且仅当：对**每一个**二进制位，所有堆在该位上的 1 的**个数之和**能被 $k+1$ 整除：

$$ \sum_{i=1}^{n} \big( a_i \text{ 的第 } b \text{ 位} \big) \equiv 0 \pmod{k+1} \qquad \text{对每一位 } b $$

> [!warning] 这**不是**异或规则
> 只有 $k=1$ 时才与 Bouton 的 nim-sum 重合（此时 $k+1=2$，"每列 1 的个数为偶数"正好等价于"异或为 0"）。当 $k\ge2$ 时，位**和**与异或本质不同。以 $k=2$（模 3）为例：$(1,2,3)$ 的异或为 $0$，但各列 1 的个数是 $2,2$，不能被 3 整除，所以轮走者**胜**；而 $(1,1,1)$ 的异或为 $1$，但某列 1 的个数是 $3 \equiv 0$，所以轮走者**败**。

**Moore 的"至多 $k$ 堆"与"恰好 $k$ 堆"。** Moore 游戏（至多 $k$ 堆）由上规则完全解决，是多项式时间可解的。而表面上相似的"必须从恰好 $k$ 堆中取子"（Exact $k$-Nim）是**另一个困难得多**的问题，有独立的研究文献——不要把两者混为一谈。

**全是大小为 1 的堆。** 见上面的反规则；在正常规则下就是异或规则，即堆数为奇数时轮走者胜。

## 7. 复杂度与实际用途

- 计算 nim-sum 只需 $O(n)$ 时间、$O(1)$ 额外空间；再扫一遍即可找到制胜一步。所以 Nim 属于 **P**，不仅可解，而且是平凡的。
- 这与**一般**无偏博弈形成鲜明对比：判断 Generalized Geography 的胜负是 **PSPACE-complete** 的（Schaefer 1978；Lichtenstein–Sipser 1980）。请注意——"所有无偏博弈都很难"是**错的**，Nim 就是多项式时间的反例。还有一个微妙的事实：**无向** Geography 的**胜负**可以在多项式时间内判定，但计算它的 **Grundy 数**却是 PSPACE-complete 的。
- **它出现在哪里：**
  - **算法竞赛。** Nim 及其变体是标准题型（如洛谷 P2197、AtCoder ABC 255 G "Constrained Nim"，以及 [cp-algorithms](https://cp-algorithms.com/game_theory/sprague-grundy-nim.html) 的专章）。
  - **组合博弈论。** Grundy 数支撑着围棋官子、octal games 以及《Winning Ways》中的整套理论。
  - **基础数学。** Nim 是"冷博弈"（cold game）的典范，Conway 的超现实数理论正建立在此类博弈之上。
  - **思维模型。** P/N 态的交替是"不变量 + 归纳"这一推理范式的原型——先找一个对手无法复原的量（这里就是 nim-sum）。这种思路在算法设计中反复出现。

## 8. 实战检验题

请先自己做一遍，再展开答案核对。

> [!question]- 题 1 — 算 nim-sum 并判定
> 判断下列局面在**正常规则**下轮走者是胜是败：
> (a) $(2,5,7)$　(b) $(1,2,3)$　(c) $(7,8,9)$　(d) $(4,4)$　(e) $(2,2,2)$　(f) $(1,1,1,1,1)$
>
> > [!success]- 答案
> > (a) $2\oplus5\oplus7 = 0$ → **败**。(b) $1\oplus2\oplus3=0$ → **败**。(c) $7\oplus8\oplus9 = 6 \ne 0$ → **胜**。(d) $4\oplus4=0$ → **败**。(e) $2\oplus2\oplus2=2\ne0$ → **胜**。(f) 五个 1，异或 $=1\ne0$ → **胜**。

> [!question]- 题 2 — 找出**全部**制胜一步
> 分别找出下列局面中的全部制胜走法：
> (a) $(7,8,9)$　(b) $(4,5,6)$　(c) $(5,5,5)$　(d) $(6,7,8)$　(e) $(9,10,11)$
> 动手算之前，先预判每一步里"制胜走法个数的**奇偶性**"。
>
> > [!success]- 答案
> > 口诀：$d$ 取 $S$ 的最高有效位，只有第 $d$ 位为 1 的堆才能被改动（改成 $a_k \oplus S$）。因此个数总是奇数。
> >
> > **(a) $(7,8,9)$**：$S = 6 = 110_2$，$d$ 为第 2 位（值 4）。第 2 位为 1 的是 $7$ 与 $9$（$8$ 不含）。
> > - $7 \to 7\oplus6 = 1$ → $(1,8,9)$，$1\oplus8\oplus9 = 0$ ✔
> > - $9 \to 9\oplus6 = 15 > 9$ ✗ 不合法
> > **唯一制胜一步：$7 \to 1$。**（1 个）
> >
> > **(b) $(4,5,6)$**：$S = 7 = 111_2$，$d$ 为第 2 位。三个数的第 2 位都是 1。
> > - $4 \to 4\oplus7 = 3$ ✔　- $5 \to 5\oplus7 = 2$ ✔　- $6 \to 6\oplus7 = 1$ ✔
> > **三个制胜走法：$4\to3$、$5\to2$、$6\to1$。**（3 个）
> >
> > **(c) $(5,5,5)$**：$S = 5 = 101_2$，$d$ 为第 2 位。三个数的第 2 位都是 1。
> > - 每个 $5 \to 5\oplus5 = 0$ ✔（三堆任选其一）→ $(0,5,5)$
> > **三个制胜走法：任选一堆取空。**（3 个）
> >
> > **(d) $(6,7,8)$**：$S = 9 = 1001_2$，$d$ 为第 3 位（值 8）。只有 $8$ 的第 3 位是 1（$6=110_2$、$7=111_2$ 都不是）。
> > - $8 \to 8\oplus9 = 1$ ✔
> > **唯一制胜一步：$8 \to 1$。**（1 个）
> >
> > **(e) $(9,10,11)$**：$S = 8 = 1000_2$，$d$ 为第 3 位。$9=1001_2$、$10=1010_2$、$11=1011_2$ 的第 3 位都是 1。
> > - $9 \to 9\oplus8 = 1$ ✔　- $10 \to 10\oplus8 = 2$ ✔　- $11 \to 11\oplus8 = 3$ ✔
> > **三个制胜走法：$9\to1$、$10\to2$、$11\to3$。**（3 个）

> [!question]- 题 3 — 反规则判定
> 还是题 1 的六个局面，但改为取走最后一个物件者**输**。
>
> > [!success]- 答案
> > 反规则与正常规则的差别只出现在"所有非空堆大小都为 1"这一区域；其余局面一律沿用正常规则。
> > (a) $(2,5,7)$ 非全 1，异或 $=0$ → **败**。(b) $(1,2,3)$ 非全 1，异或 $=0$ → **败**。(c) $(7,8,9)$ 异或 $=6\ne0$ → **胜**。(d) $(4,4)$ 异或 $=0$ → **败**。(e) $(2,2,2)$ 异或 $=2\ne0$ → **胜**。(f) 全为 1 且共 **5** 堆（奇数）→ **败**（注意同一局面在正常规则下是**胜**！）。

> [!question]- 题 4 — 证明一个结构性质
> 证明：若每个堆大小都出现**偶数**次，则该局面是必败态（正常规则）。反过来成立吗？
>
> > [!success]- 答案
> > 设数值 $v$ 出现 $2m_v$ 次，则 nim-sum 为对各 $v$ 的异或，而每个 $v$ 被异或偶数次；由 $x \oplus x = 0$ 两两抵消，故 $S=0$，是必败态。✔
> > **反过来不成立**：$(1,2,3)$ 是必败态，但每个数值都只出现一次（奇数）。所以"成对出现"只是充分条件而非必要条件——真正的不变量是 nim-sum。

> [!question]- 题 5 — Grundy 数
> 对"单堆、每次可取 1、2 或 3 个、取最后一个者胜"的游戏，计算 $n=0..7$ 的 $g(n)$，并写出必败态。
>
> > [!success]- 答案
> > $g(0)=\operatorname{mex}\varnothing=0$；$g(1)=\operatorname{mex}\{0\}=1$；$g(2)=\operatorname{mex}\{0,1\}=2$；$g(3)=\operatorname{mex}\{0,1,2\}=3$；$g(4)=\operatorname{mex}\{g(3),g(2),g(1)\}=\operatorname{mex}\{3,2,1\}=0$；$g(5)=\operatorname{mex}\{g(4),g(3),g(2)\}=\operatorname{mex}\{0,3,2\}=1$；$g(6)=\operatorname{mex}\{1,0,3\}=2$；$g(7)=\operatorname{mex}\{2,1,0\}=3$。
> > 规律：$0,1,2,3,0,1,2,3,\dots$ —— 轮走者在 $n \equiv 0 \pmod 4$ 时**必败**。

> [!question]- 题 6 — Wythoff 游戏
> (a) $(2,1)$ 是必败态吗？(b) $(3,5)$ 呢？(c) 从 $(2,2)$ 出发的制胜一步是什么？(d) 从 $(4,7)$ 出发呢？
>
> > [!success]- 答案
> > 必败态为 $\big(\lfloor k\varphi\rfloor,\ \lfloor k\varphi\rfloor+k\big)$，其中 $\varphi=(1+\sqrt5)/2$：$(0,0),(1,2),(3,5),(4,7),(6,10),(8,13),(9,15),\dots$（一对内两数顺序无关）。
> > **(a)** $(2,1)$ 就是 $(1,2)$ → **是必败态**，轮走者败。
> > **(b)** $(3,5)$ → **是必败态**，轮走者败。
> > **(c)** $(2,2)$ **不是**必败态（必败态从 $(1,2)$ 直接跳到 $(3,5)$），所以轮走者**胜**。经搜索验证，共有三个制胜走法：
> > - $(2,2) \to (1,2)$：从其中一堆取走 1 个（走到必败态）✔
> > - $(2,2) \to (0,0)$：从**两堆各取走 2 个**（走到必败态 $(0,0)$）✔
> >
> > 注意陷阱：$(2,2) \to (1,1)$ 看起来很自然，但**不是**制胜走法，因为 $(1,1)$ 不是必败态——对手会回以 $(1,1) \to (1,2)$，你就输了。
> > **(d)** $(4,7)$ **本身是必败态**，所以轮走者**必败**、不存在制胜一步；无论怎么走，对手都能把局面送回某个必败态。（这正是必败态的定义性质：从必败态出发的每一步都离开必败态集合，而从任何非必败态出发都存在一步回到其中。）

> [!question]- 题 7 — 加一堆石子能否不改变胜负
> 给定一个必败态，允许你再添加一堆（数量任意）。结果还能是必败态吗？如果给定的是必胜态呢？
>
> > [!success]- 答案
> > 设 nim-sum 为 $S$。
> > - 若 $S=0$（必败态），加入大小为 $v$ 的一堆后 nim-sum 变为 $0 \oplus v = v$；要它仍为 $0$ 只能 $v=0$，即加一个空堆，那等于没加。所以**无法**通过添加非平凡的一堆保持必败态。
> > - 若 $S\ne0$（必胜态），加入大小 $v=S$ 的一堆得到 nim-sum $S\oplus S=0$，成为必败态。所以**可以**，而且加的那堆大小唯一确定为 $S$。

> [!question]- 题 8 — 一个反直觉对比
> 比较七堆各一个石子的局面 $(1,1,1,1,1,1,1)$ 在正常规则与反规则下的结果。
>
> > [!success]- 答案
> > 正常规则：七个 1 异或为 $1\ne0$ → 轮走者**胜**（取走一个变六堆，之后模仿对手即可）。
> > 反规则：全为 1 且堆数为**奇数** → 轮走者**败**。轮走者必须取走一个变六堆，双方交替，轮走者最终被迫取走最后一个。
> > 这是"反规则的全 1 例外会直接翻转胜负"最干净的例子。

## 9. 参考文献

- C. L. Bouton, "Nim, a game with a complete mathematical theory", *Annals of Mathematics*, 第二辑 **3**(1/4), 1901–1902, pp. 35–39. — [JSTOR](https://www.jstor.org/stable/1967631)
- Wikipedia, [Nim](https://en.wikipedia.org/wiki/Nim)（含 Bouton 定理、反规则与各变体）
- Wikipedia, [Sprague–Grundy theorem](https://en.wikipedia.org/wiki/Sprague%E2%80%93Grundy_theorem)
- Wikipedia, [Wythoff's game](https://en.wikipedia.org/wiki/Wythoff%27s_game)
- cp-algorithms, [Sprague-Grundy / Nim](https://cp-algorithms.com/game_theory/sprague-grundy-nim.html)
- J. H. Conway, *On Numbers and Games*, 2nd ed., A K Peters, 2001.
- E. R. Berlekamp, J. H. Conway, R. K. Guy, *Winning Ways for Your Mathematical Plays*, 2nd ed., A K Peters, 2001.

---

## 附：延伸阅读（可选）

> [!note] 关于"要不要写代码"
> 本页刻意不使用程序代码——Nim 的价值在于**定理与不变量**本身。若日后想动手实现，核心只需三行逻辑：求异或和、找最高有效位、把对应堆改为 `a[k] ^ S`。相关在线练习可参考 [LeetCode 292. Nim Game](https://leetcode.com/problems/nim-game/)（单堆取 1–3 个的变体）。
