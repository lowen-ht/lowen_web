---
title: Benford's Law
---

> [!abstract] 一句话概括
> 本福特定律（Benford's law）说：在大量**自然产生**的数据中，首位数字并不是均匀分布的，而是数字 1 出现约 **30.1%**、数字 9 只出现约 **4.6%**，概率为 $P(d)=\log_{10}\!\left(1+\frac1d\right)$。
> 它最反直觉的地方在于**普遍性**：河流长度、国家人口、发票金额、2 的幂……这些毫不相关的数据都服从同一个分布。而它最实用的地方在于**例外**：人为编造的数字常常违反它，于是它成了审计与反欺诈的筛查利器。
> 它最深的地方在于**尺度不变性**：由于"单位是任意的"，对数尺度上唯一站得住的分布就是均匀分布——而这就唯一地确定了本福特定律。

---

# Part I · English

## 1. Definition and the central formula

Write a positive number in scientific notation, $x = m \times 10^{k}$ with $1 \le m < 10$. The number $m$ is the **significand**; its leading digit is the **first significant digit** of $x$. Benford's law specifies the distribution of that digit:

$$ P(\text{first digit} = d) = \log_{10}\!\left(1 + \frac{1}{d}\right), \qquad d = 1, 2, \dots, 9 $$

**First-digit probabilities:**

| Digit $d$ | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
|---|---|---|---|---|---|---|---|---|---|
| $P(d)$ | 0.3010 | 0.1761 | 0.1249 | 0.0969 | 0.0792 | 0.0669 | 0.0580 | 0.0512 | 0.0458 |

So the leading digit 1 is about **6.6 times** as likely as 9. The nine probabilities sum to exactly $1$ by telescoping:

$$ \sum_{d=1}^{9}\log_{10}\!\left(1+\frac1d\right) = \log_{10}\prod_{d=1}^{9}\frac{d+1}{d} = \log_{10} 10 = 1 $$

**Second digit.** The second digit has **ten** classes ($0$–$9$) and is also non-uniform, just flatter. For $e = 0$:

$$ P(\text{2nd}=0) = \sum_{k=1}^{9}\log_{10}\!\left(1+\frac{1}{10k}\right) $$

and for $e = 1,\dots,9$:

$$ P(\text{2nd}=e) = \sum_{k=1}^{9}\log_{10}\!\left(1+\frac{1}{10k+e}\right) $$

| $e$ | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
|---|---|---|---|---|---|---|---|---|---|---|
| $P(e)$ | 0.1197 | 0.1139 | 0.1088 | 0.1043 | 0.1003 | 0.0967 | 0.0934 | 0.0904 | 0.0876 | 0.0850 |

These ten sum to exactly 1 (verified). Note the second digit is a *weaker* effect than the first (11.97% vs 8.50%), which is precisely why it is more sensitive to manipulation — see §7.

**General joint law.** For the first $m$ significant digits $d_1 d_2 \dots d_m$, writing $N = 10^{m-1}d_1 + \dots + d_m$ for the integer they form:

$$ P(\text{first } m \text{ digits} = N) = \log_{10}\!\left(1 + \frac{1}{N}\right) $$

So for the first **two** digits, $P(\text{first two} = N) = \log_{10}(1 + 1/N)$ for $N = 10,\dots,99$; e.g. $P(10) = \log_{10}(1.1) = 0.04139$, $P(25) = \log_{10}(26/25) = 0.01703$, $P(99) = \log_{10}(100/99) = 0.00436$. And $P(314) = \log_{10}(315/314) = 0.00138$ — the probability that a Benford number begins $3.14$.

> [!note] The one idea behind all of it
> **The leading digits of a number are log-uniform**: $\log_{10} m$ is uniformly distributed on $[0,1)$. Then $P(\text{first digit} = d)$ is just the length of the interval of $\log_{10} m$ that produces leading digit $d$, namely $\log_{10}(d+1) - \log_{10} d = \log_{10}(1+1/d)$. Every formula above follows from this.

### Terminology / 术语对照

| English | 中文 | Meaning |
|---|---|---|
| leading / first significant digit | 首位有效数字 | The first nonzero digit |
| significand, mantissa | 尾数 / 有效数字部分 | $m$ in $x = m\cdot10^k$, $1\le m<10$ |
| scale invariance | 尺度不变性 | Unchanged by $x \mapsto cx$ |
| base invariance | 进制不变性 | Unchanged when the base is changed |
| equidistribution mod 1 | 模 1 均匀分布 | Fractional parts fill $[0,1)$ evenly |
| goodness-of-fit test | 拟合优度检验 | Is the data compatible with the law? |
| conformity | 符合度 | Nigrini's agreement measure |
| MAD | 平均绝对偏差 | Mean absolute deviation |
| terminal digit | 末位数字 | Last digit — should be *uniform* |

## 2. Discovery: Newcomb and Benford

In **1881** the astronomer **Simon Newcomb** noticed that the early pages of logarithm tables — the ones holding numbers beginning with 1 — were far more worn than the later pages. Since log tables were ordered by leading digit, the wear was direct evidence of how often each leading digit was actually needed. He published "Note on the frequency of use of the different digits in natural numbers" (*American Journal of Mathematics* **4**, 1881, pp. 39–40) and proposed the logarithmic law — he even gave the second-digit distribution.

The finding was then forgotten for 57 years until the physicist **Frank Benford** re-derived it and tested it far more aggressively: "The Law of Anomalous Numbers", *Proceedings of the American Philosophical Society* **78**(4), 1938, pp. 551–572. His Table I header reads *"20,229 observations"* across **20** heterogeneous datasets (rivers, populations, physical constants, newspaper front pages, atomic weights, street addresses, death rates, and so on). He did not cite Newcomb — which is the standard explanation for the long lapse. The law is properly called the **Newcomb–Benford law**.

> [!tip] A nice historical detail worth knowing
> In the same paper Benford printed two tables that are **not** the modern law. His "First Order" table for single digits gives 0.393, 0.258, 0.133, … — and he says explicitly that single digits "have a specific natural frequency that varies sharply from the logarithmic ratios". His table for *single* digits describes the distribution of digits **1–9 as numbers in their own right**, not the leading digits of a large body of data. The familiar law appears as his "limiting order". Lesson: don't quote the original paper's tables as if they were the law.
>
> Also striking: his *worst* fits were the formal mathematical tables (atomic weights, physical constants) and his *best* was newspaper front-page numbers. "Numbers that individually are without relationship are, when considered in large groups, in good agreement with a distribution law."

## 3. Why it holds: scale invariance

This is the heart of the subject, and the reason the law is not a coincidence.

The key observation is that **units are arbitrary**. A river's length is the same quantity whether measured in kilometres or miles; an amount is the same whether in dollars or yen. A law claiming to describe "naturally occurring numbers" should therefore be invariant under a change of scale $x \mapsto ax$.

> [!important] Theorem (scale invariance)
> Let $X$ be a real random variable with $P(X=0)=0$, and let $S(x) = x/10^{\lfloor \log_{10} x\rfloor} \in [1,10)$ be its **significand**. Then $X$ is Benford — i.e. $P(S(X) \le t) = \log_{10} t$ for all $t \in [1,10)$ — **if and only if** $S(X)$ and $S(aX)$ are identically distributed for **every** $a > 0$.
> (Pinkham 1961; the modern rigorous statement is Berger–Hill, *An Introduction to Benford's Law*, Thm 5.3.)

**Why this forces exactly $\log_{10} t$.** Put $W = \log_{10} X \bmod 1 \in [0,1)$, so that $S(X) = 10^{W}$. Multiplying by $a$ **adds** $\log_{10} a$ in log space and wraps modulo 1. So scale invariance says precisely: *the distribution of $W$ is invariant under every rotation of the circle $\mathbb{R}/\mathbb{Z}$.* But the **only** probability measure on a circle invariant under all rotations is the uniform one. Hence $W \sim \mathrm{Uniform}[0,1)$, and therefore

$$ P(S(X) \le t) = P(10^{W} \le t) = P(W \le \log_{10} t) = \log_{10} t $$

Differentiating gives the Benford density $f(m) = \dfrac{1}{m \ln 10}$ on $[1,10)$, whose mass on $[d, d+1)$ is $\log_{10}(1+1/d)$. ∎

**The Haar-measure framing.** In the language of groups: the multiplicative group $(\mathbb{R}_{>0}, \times)$ has a unique (up to scale) translation-invariant measure, its **Haar measure** $\mathrm{d}x/x$ — equivalently Lebesgue measure in $\log x$. Benford's law **is** that Haar measure transported to the significand space $[1,10)$ and normalized. One subtlety worth stating: $\mathrm{d}x/x$ has *infinite* total mass (every decade contributes identically), so it is not itself a probability measure; Benford arises as the **normalized / conditional** Haar measure on significands. This is exactly why the theorem is stated for the significand rather than for $X$.

**Two strengthenings worth knowing.**

- **Invariance of a single digit suffices.** It is enough that $P(D_1(aX) = d) = P(D_1(X) = d)$ for **one** digit $d \in \{1,\dots,9\}$ and all $a$; the whole law follows (Berger–Hill, Thm 5.8). Scale invariance of even one digit's probability pins down the entire distribution.
- **Base invariance.** Benford's law is also the unique distribution whose significant digits look the same in **every base**. Hill (1995) proved base-invariance implies Benford's law. Weyl's equidistribution theorem and scale/base invariance are three equivalent faces of the same object (Berger–Hill characterisations (i)–(iii)).

**Hill's statistical derivation (1995).** Draw a sample size from some distribution, then draw the numbers from a *randomly chosen* distribution, and repeat. The combined empirical distribution converges to Benford's law almost surely. So Benford behaviour is the **typical** outcome when the data-generating process is itself random — no special mechanism is needed. This is why Benford's own 20 heterogeneous datasets fitted, and why "numbers on a newspaper front page" fit.

> [!warning] One honest caveat
> A minority view (Ryder 2009) argues that scale invariance is *necessary but not sufficient* for finite/rational datasets. The mainstream result is the iff above; treat the dissent as a contested footnote rather than settled fact.

## 4. The equidistribution view

> [!important] Theorem
> A sequence $(x_n)$ is Benford **if and only if** the sequence of fractional parts $\{\log_{10}|x_n|\}$ is **uniformly distributed** (equidistributed) in $[0,1)$.
> A random variable $X$ is Benford iff $\{\log_{10}|X|\}$ is uniform on $[0,1)$.

This is the computable version of the law, and it comes with a sharp condition (Weyl): the sequence $(na)$ is equidistributed mod 1 **if and only if $a$ is irrational**.

**Powers of 2.** $\log_{10} 2$ is irrational (if $\log_{10}2 = p/q$ then $10^p = 2^q$, i.e. $2^p5^p = 2^q$, forcing $p=0$), so $(n\log_{10}2)$ is equidistributed mod 1 and therefore $2^n$ is **Benford**. Leading digits: $2,4,8,1,3,6,1,2,5,1,2,4,8,1,3,6,1,2,5,\dots$ — 1 appears far more often than 9. Over $n = 1..2000$ the observed frequencies match Benford to within $0.0013$ per digit.

**The general rule:** $k^1, k^2, k^3, \dots$ is Benford **exactly when** $\log_{10} k$ is irrational. So $2^n, 3^n, 5^n, 7^n$ are Benford; $10^n$, $100^n$, $10^{n/2}$ are not.

> [!warning] Density is NOT enough — a classic trap
> A sequence can look spread out over $[0,1)$ and still fail equidistribution. Authoritative counterexample: $10^{n/2} = (\sqrt{10})^n$ has $\{\log_{10}10^{n/2}\} = \{n/2\} \in \{0, \tfrac12\}$ — only two values, so **not** Benford. Similarly $10^n$ has fractional part always $0$, so not Benford. And $10^{n/100}$ is *dense-looking and numerically very close* to Benford yet still not exactly Benford.
> So "this sequence is spread out / could hit any digit" does **not** imply Benford's law. The correct criterion is the full Weyl property: $\lim_{N\to\infty}\frac{1}{N}\#\{n \le N : \{\log_{10}x_n\} \le s\} = s$ for every $s \in [0,1)$. As Berger & Hill note, "exponential sequences are generally Benford" is a documented common error.

## 5. When it applies — and when it does not

> [!important] The law applies to data that
> 1. span **several orders of magnitude**, **or** (equivalently in effect) are produced by **multiplicative** processes — growth, compounding, division into sub-units; **or**
> 2. are a **random mixture** of many different distributions (Hill's theorem).

**It reliably fails for:**

- **Bounded ranges.** Adult heights, weights, IQs, ages — confined to a narrow band, and approximately normal, so they cannot span orders of magnitude. (Heights mostly begin with 1 or 2 and nothing else.)
- **Assigned or sequential numbers.** Phone numbers, postal codes, national IDs, check numbers, sequential invoice numbers. Their digits are decided by a numbering plan, not generated multiplicatively.
- **Numbers with a built-in minimum or maximum.** The classic cited case: US places with population $\ge 2{,}500$ in the 1960/1970 censuses, where only 19% began with 1 but 20% began with 2 — because truncation at 2,500 introduces bias.
- **Human-influenced numbers.** Psychological pricing (\$9.99) and rounded figures.
- **Uniform data.** A uniform random variable is never close to Benford, no matter how spread out (the sup-distance from Benford is bounded below by about 0.076).
- **Invented numbers.** People are poor random-number generators: when students were asked to invent 4- or 6-digit numbers, the leading digits came out close to **uniform**, not Benford. This is the empirical foundation of the fraud application.

> [!warning] Three documented "common errors" to avoid
> 1. **"Benford requires wide spread."** False in principle: $X = 10^{U}$ with $U \sim \mathrm{Uniform}[0,1]$ is *exactly* Benford although it lives entirely in $[1,10)$.
> 2. **"Exponential sequences are automatically Benford."** False — see $10^{n/2}$ above.
> 3. **"Wide + regular ⇒ close to Benford."** False: if $X \sim N(7,1)$ then $P(D_1(X)=1) \le 10^{-6}$. Spread alone tells you nothing.

A practical test: *if I multiplied every value by 1.7, would the data still look natural?* If multiplying pushes values outside the meaningful range (a 4.2 out of 5 rating becomes 7.1 out of 5), the data cannot be scale-invariant and Benford should not be expected.

## 6. Empirical fits

| Dataset | Character | Fits? |
|---|---|---|
| River lengths / areas | spans orders of magnitude | ✔ |
| Country / city populations | multiplicative growth, wide range | ✔ |
| Newspaper front-page numbers | mixed sources (Hill's mixture) | ✔ *Benford's best fit* |
| Street addresses | wide range | ✔ |
| Fibonacci numbers $F_n$ | exponential growth | ✔ |
| Powers of 2, factorials | exponential / irrational log | ✔ |
| Death rates, drainage areas | wide range | ✔ |
| **Physical constants, atomic weights** | formal tables, small $n$ | **✘ (Benford's *worst* fits!)** |
| Human heights / weights / ages | narrow bounded range | ✘ |
| Lottery numbers, dice | uniform by construction | ✘ |
| Phone numbers, ZIP codes | assigned | ✘ |
| Sequential invoice numbers | assigned counter | ✘ |

Note the counter-intuitive row: the datasets people most often cite as "obviously natural" — physical constants and atomic weights — were among **Benford's own worst fits**, partly because his samples there were tiny (104 and 91 observations). His best fits were the ones he described as "numbers that individually are without relationship".

## 7. Applications

**Forensic accounting and tax auditing.** The flagship application. **Frank Nigrini's** work (Nigrini & Mittermaier 1997; Drake & Nigrini 2000; and the monograph *Benford's Law: Applications for Forensic Accounting, Auditing, and Fraud Detection*, Wiley, 2012) turned the law into a practical audit procedure. The logic: a human inventing plausible numbers tends to spread leading digits **more evenly** than nature does. A digit-frequency test on expenses, invoices or tax returns therefore flags records for closer inspection. It is a **screening tool, not proof**: a deviation tells you *where to look*. There are documented successes (Nigrini's payroll-fraud detection, where the culprit's tell was *repeating* the same amounts) and documented failures (studies where fraud went undetected, and studies where nonconformity was universal and therefore diagnostically useless).

**Detecting fabricated scientific data.** **Diekmann (2007)**, "Not the First Digit! Using Benford's Law to Detect Fraudulent Scientific Data", *Journal of Applied Statistics* **34**(3), pp. 321–329. Real regression coefficients from published papers complied with Benford for first *and* higher digits, while coefficients fabricated by test subjects showed only **approximate** Benford behaviour in the first digit — **and clear deviation in the higher digits.** The lesson is the title: the first digit is the *wrong* place to look.

**Image forensics.** The quantised **DCT coefficients** of JPEG images follow a Benford-like distribution for singly-compressed images; a tampered or double-compressed region shows a local deviation, which lets investigators localise manipulated areas of a photograph (Fu, Shi & Su 2007; Jolion 2001).

**Earnings management in accounting.** Carslaw (1988) found that New Zealand firms' first digits conformed to Benford but their **second** digits did not — too many 0s, too few 9s, i.e. rounding earnings **up**. Thomas (1989) replicated this on ~80,000 US firm results and found the mirror pattern in *losses* (rounded *down*, understating losses). The manipulation lives in the fine structure, not the leading digit.

> [!warning] Election fraud claims — treat with real caution
> Benford's law has been applied to election returns, and this use is **genuinely contested**. The published critique is blunt — Deckert, Myagkov & Ordeshook (2011) argue that "Benford's Law is essentially useless as a forensic indicator of fraud", because deviations arise in free and fair elections too, and *fraud can move data toward conforming*. Mebane's reply agreed "there are many caveats". Reasons for the trouble:
> - **Range-boundedness.** Precinct vote counts sit in a narrow range (tens to a few thousand), violating the wide-range requirement. Mebane himself: *"It is widely understood that the first digits of precinct vote counts are not useful for trying to diagnose election frauds."*
> - **Mechanical linkage.** In a two-candidate race the two shares are constrained to sum to ~100%, so they cannot each independently be Benford.
> - **Test selection.** Post-hoc choice among second-digit, first-digit and last-digit tests inflates false positives.
>
> The scientific consensus is that applicability to elections is **not established**. Never treat a Benford deviation as evidence on its own.

## 8. First digits versus last digits

> [!important] The single most useful practical distinction
> - **Leading digits** of genuine, multiplicative data follow Benford's law.
> - **Trailing (last) digits** of genuine data should be **uniform** — nothing makes a real quantity end in 7 rather than 3.
>
> **Benford himself proved the trailing-digit part.** His 1938 paper shows the frequency of a digit in the $q$-th place "approaches equality for all the digits 0,1,…,9", i.e. $F_q = 0.1$, once all combinations of preceding digits are considered. So the law is emphatically a *leading*-digit law; it does **not** apply to terminal digits. (Numerically the approach is fast: the 4th significant digit already runs 10.0176% for 0 down to 9.9824% for 9.)

So a fraud detector checks **both**: leading digits for conformity to Benford, and last digits for **uniformity**. Terminal-digit anomalies are often the sharper signal, because a manipulator who "fixes" the leading digit still has to round the amount — leaving too many 0s and too few 5s and 9s. Conversely, a last-digit anomaly is evidence of *human rounding*, not automatically of fraud: genuine data can show terminal-digit preference too (documented in pathology reports).

## 9. Testing conformance

**Chi-square goodness of fit.** With $n$ observations and observed count $O_d$ for digit $d$:

$$ \chi^2 = \sum_{d=1}^{9}\frac{(O_d - E_d)^2}{E_d}, \qquad E_d = n\cdot P(d) $$

**Degrees of freedom** depend on which test you run, because the Benford probabilities are fully specified constants (no parameter is estimated from the data), so $\mathrm{df} = (\text{number of classes}) - 1$:

| Test | Classes | df | $\chi^2$ critical, $\alpha=0.05$ | $\alpha=0.01$ |
|---|---|---|---|---|
| First digit | 9 | **8** | **15.507** | 20.090 |
| Second digit | 10 | **9** | **16.919** | 21.666 |
| First two digits | 90 | **89** | **112.022** | 122.942 |

(Do not use df = 9 for the first-digit test; some sources do, and it is wrong.)

> [!warning] The big weakness of chi-square here
> With very large $n$, chi-square becomes hypersensitive: a deviation with no practical significance still returns "significant", because the statistic scales with $n$. Nigrini put it plainly: *"What is needed is a test that ignores the number of records."* This is exactly why MAD was introduced — it measures **effect size**, not statistical significance.

**Nigrini's Mean Absolute Deviation (MAD).** Average the absolute gap between observed and expected *proportions*:

$$ \mathrm{MAD} = \frac{1}{k}\sum_{i}\big|\,p_{\text{obs}} - p_{\text{exp}}\,\big|, \qquad k = \text{number of classes (9 for first digit)} $$

For the **first-digit** test the conformity bands are (Nigrini 2012):

| MAD | Interpretation |
|---|---|
| 0.000 – 0.006 | close conformity |
| 0.006 – 0.012 | acceptable conformity |
| 0.012 – 0.015 | marginally acceptable |
| above 0.015 | **nonconformity** |

For the **first-two-digit** test the bands are much smaller (roughly 0.0000–0.0012 / 0.0012–0.0018 / 0.0018–0.0022 / above 0.0022), because expected proportions are ~10× smaller. Be aware that MAD thresholds are rules of thumb from practice rather than exact sampling theory — rigorous asymptotic distributions for MAD were only worked out later (Cerqueti & Lupi 2022).

**Z-statistic for an individual digit.**

$$ Z = \frac{p_{\text{obs}} - p_{\text{exp}}}{\sqrt{p_{\text{exp}}(1 - p_{\text{exp}})/n}} $$

A common refinement applies a continuity correction, using $(|O - E| - \tfrac12)/\sqrt{E(1-p_{\text{exp}})}$ in count form. $|Z| > 1.96$ flags the digit at the 5% level.

> [!warning] Testing all nine digits at once needs a multiplicity correction
> Running nine separate Z-tests at 5% each inflates the family-wise error rate. Practice uses a **Bonferroni** adjustment: for 9 digits at family-wise $\alpha = 0.05$, use per-test $\alpha = 0.05/9 \approx 0.00556$, i.e. $|Z| \gtrsim 2.77$ instead of 1.96. This is not a technicality — as the worked example below shows, it can **flip an audit conclusion**. Always state which threshold you used.

**Other distance measures.** The **Kolmogorov–Smirnov** test compares the whole cumulative distribution against Benford and is more powerful for small samples (with the caveat that it can be unduly conservative for discrete distributions). **Leemis's $m$** is a scaled sup-norm, and **Cho & Gaines's $d$** a scaled Euclidean distance. Kullback–Leibler divergence appears in *explanations* of the law but has **no established conformance thresholds** in the forensic literature.

### Worked example: 1,000 invoice amounts

| $d$ | $O_d$ | $E_d = 1000\,P(d)$ | $O_d - E_d$ | $(O_d-E_d)^2/E_d$ |
|---|---|---|---|---|
| 1 | 400 | 301.03 | +98.97 | 32.5385 |
| 2 | 120 | 176.09 | −56.09 | 17.8670 |
| 3 | 110 | 124.94 | −14.94 | 1.7862 |
| 4 | 90 | 96.91 | −6.91 | 0.4927 |
| 5 | 80 | 79.18 | +0.82 | 0.0085 |
| 6 | 70 | 66.95 | +3.05 | 0.1392 |
| 7 | 50 | 57.99 | −7.99 | 1.1014 |
| 8 | 45 | 51.15 | −6.15 | 0.7400 |
| 9 | 35 | 45.76 | −10.76 | 2.5291 |

$$ \chi^2 = 32.5385 + 17.8670 + 1.7862 + 0.4927 + 0.0085 + 0.1392 + 1.1014 + 0.7400 + 2.5291 = \mathbf{57.20} $$

**Verdict.** $57.20 \gg 15.507$ (5% critical value, df = 8), so we **reject** conformity. MAD gives the same answer:

$$ \mathrm{MAD} = \frac{0.09897 + 0.05609 + 0.01494 + 0.00691 + 0.00082 + 0.00305 + 0.00799 + 0.00615 + 0.01076}{9} = \frac{0.20568}{9} = \mathbf{0.02285} $$

which is well past Nigrini's 0.015 nonconformity boundary.

**How to read the table.** The anomaly is concentrated in the **low digits**: 1 is massively over-represented (400 vs 301 expected, contributing 32.5 of the 57.2) and 2 is under-represented, while digits 5 and 6 look perfectly ordinary. The overall shape is "too many small leading digits, too few large ones". That is the kind of pattern worth investigating — but note carefully what it is *not*: it does **not** by itself identify a mechanism. Over-representation of 1 with under-representation of 9 is also exactly what you get from a **truncated** dataset (one with a hard floor), since truncation removes large values. So the correct professional conclusion is "nonconforming, investigate further", not "fabricated".

**A single-digit Z-test, and why multiplicity matters.** Suppose $n = 1000$ and digit 1 is observed 340 times. Then

$$ Z = \frac{0.3400 - 0.3010}{\sqrt{0.3010 \times 0.6990/1000}} = \frac{0.0390}{0.014506} = \mathbf{2.69} $$

which exceeds 1.96, so digit 1 looks significantly high. But with the Bonferroni threshold for nine digits ($|Z| \gtrsim 2.77$) it would **not** be declared significant. This is the pedagogical punchline: the multiplicity choice changes the conclusion, so it must be stated, not assumed.

## 10. Connection to Zipf's law and power laws

If the underlying values follow a scale-invariant power law $P(N) \sim N^{-\alpha}$, then the first-digit probability is obtained by integrating over a decade:

$$ P(n) = \int_n^{n+1} N^{-\alpha}\,\mathrm{d}N = \frac{(n+1)^{1-\alpha} - n^{1-\alpha}}{1-\alpha} \qquad (\alpha \ne 1) $$

At **$\alpha = 1$** this collapses to

$$ P(n) = \int_n^{n+1} \frac{\mathrm{d}N}{N} = \log\frac{n+1}{n} = \log\!\left(1 + \frac1n\right) $$

— exactly Benford's law. Solving for the rank $k$ gives Zipf's law $N(k) \sim k^{1/(1-\alpha)}$.

> [!note] Getting the Zipf relationship right
> It is common to read that "Benford's law is a special case of Zipf's law". The precise statement is different: **Benford corresponds to $\alpha = 1$ in the underlying value distribution, whereas the classical Zipf's law (word frequencies, city sizes) corresponds to $\alpha \approx 2$.** They are **two different points on the same one-parameter family**, not one nested inside the other.
> Two technical cautions: the $\alpha \ne 1$ formula is a *density over one decade* and is **not normalized** to sum to 1 over $n = 1..9$ (a pure power law cannot be normalized over an unbounded range), so say "up to normalization"; and a power law with $\alpha = 1$ is exactly the marginal case where the integral produces the logarithm.

## 11. Exercises

> [!question]- Exercise 1 — Compute probabilities
> (a) Give $P(d=7)$ exactly and to 4 decimals. (b) Show the nine first-digit probabilities sum to exactly 1. (c) What is $P(d \le 3)$, and what is $P(d \in \{1,2\})$?
>
> > [!success]- Answer
> > **(a)** $P(7) = \log_{10}(8/7) = 0.05799 = 5.7992\%$.
> > **(b)** $\prod_{d=1}^{9}\frac{d+1}{d} = \frac21\cdot\frac32\cdots\frac{10}{9} = 10$ (telescoping), so the sum is $\log_{10}10 = 1$. ✔
> > **(c)** $P(d\le3) = \log_{10}2 + \log_{10}\frac32 + \log_{10}\frac43 = \log_{10}4 = 0.6021$ — the three smallest digits cover over 60% of all leading digits. $P(d\in\{1,2\}) = \log_{10}3 = 0.4771$.

> [!question]- Exercise 2 — Full conformance test
> A dataset of $n = 2{,}000$ order values gives first-digit counts: 1→680, 2→350, 3→250, 4→190, 5→150, 6→130, 7→110, 8→80, 9→60. Compute $\chi^2$ and MAD and give a verdict.
>
> > [!success]- Answer
> > Expected counts $E_d = 2000 P(d)$: 602.06, 352.18, 249.88, 193.82, 158.36, 133.89, 115.98, 102.31, 91.51.
> > Deviations: $+77.94, -2.18, +0.12, -3.82, -8.36, -3.89, -5.98, -22.31, -31.51$.
> > Terms: $77.94^2/602.06 = 10.089$; $2.18^2/352.18 = 0.013$; $0.12^2/249.88 \approx 0.000$; $3.82^2/193.82 = 0.075$; $8.36^2/158.36 = 0.441$; $3.89^2/133.89 = 0.113$; $5.98^2/115.98 = 0.308$; $22.31^2/102.31 = 4.865$; $31.51^2/91.51 = 10.851$.
> > $\chi^2 = \mathbf{26.76}$. df = 8, critical 15.507 → **reject** at 5%; 26.76 also exceeds 20.090 → reject at 1%.
> > MAD: proportion deviations $0.03897, 0.00109, 0.00006, 0.00191, 0.00418, 0.00195, 0.00299, 0.01116, 0.01576$; sum $= 0.07807$; MAD $= 0.07807/9 = \mathbf{0.00867}$ → Nigrini's **acceptable** band (0.006–0.012).
> > **The lesson is the disagreement.** Large $n$ lets chi-square reject, while MAD shows the *overall* deviation is modest and concentrated in digits 1 and 9. Verdict: not a clean fit, worth targeting digits 1 and 9 — but far from the dramatic signature of the worked example.

> [!question]- Exercise 3 — Should Benford apply?
> (a) populations of all municipalities in a country; (b) the same but restricted to 5,000–20,000; (c) 500 consecutive invoice numbers; (d) 3,000 retail prices with .99 endings; (e) 2,000 four-digit numbers invented by students; (f) areas of all countries; (g) heights of 2,000 adult men in cm.
>
> > [!success]- Answer
> > **(a) Yes** — spans orders of magnitude, multiplicative growth.
> > **(b) No** — confined to well under one order of magnitude *and* has a hard minimum. (Verified analogue: US places with population $\ge 2{,}500$ deviated, with 19% starting with 1 but 20% with 2.)
> > **(c) No** — sequential assigned identifiers.
> > **(d) No** — human-influenced pricing; expect a massive spike at second digit 9.
> > **(e) No** — invented numbers come out near-**uniform** (students are bad random generators). This is exactly why the fraud application works.
> > **(f) Reasonable but weak** — spans ~7 orders of magnitude, but only ~200 values, so the test has low power and microstates complicate it.
> > **(g) No** — adult male heights span ~150–210 cm, about 0.15 orders of magnitude, with hard floor and ceiling and an approximately normal shape.

> [!question]- Exercise 4 — First-two-digit probabilities
> (a) $P(\text{first two digits} = 25)$? (b) $P(\text{first three digits} = 314)$?
>
> > [!success]- Answer
> > **(a)** $P = \log_{10}(1 + 1/25) = \log_{10}(26/25) = \mathbf{0.01703}$. Check: $\log_{10}26 - \log_{10}25 = 1.414973 - 1.397940 = 0.017033$ ✔
> > **(b)** $P = \log_{10}(1 + 1/314) = \log_{10}(315/314) = \mathbf{0.001381}$. (All 90 two-digit probabilities sum to 1.) Note $P(25) = 1.70\%$ is *above* the uniform value $1/90 = 1.11\%$, while $P(99) = 0.44\%$ is below it — as it must be.

> [!question]- Exercise 5 — Explain the proof, and why 30.1% exactly
> State the scale-invariance theorem and prove the substantive direction. Why does it force the specific number $0.30103$ for digit 1, not merely "small digits are common"?
>
> > [!success]- Answer
> > **Theorem.** $X$ (with $P(X=0)=0$) is Benford **iff** $S(X)$ and $S(aX)$ are identically distributed for all $a>0$.
> > **Proof (⇐).** Let $W = \log_{10}X \bmod 1$, so $S(X) = 10^W$. For $a = 10^s$, we have $\log_{10}(aX) = \log_{10}X + s$, so $S(aX) = 10^{\langle W+s\rangle}$. Thus scale invariance says the law of $W$ is invariant under every circle rotation $w \mapsto \langle w+s\rangle$. The **only** probability measure on $\mathbb{R}/\mathbb{Z}$ invariant under all rotations is normalized Lebesgue (Haar) measure, so $W \sim \mathrm{Uniform}[0,1)$. Hence $P(S(X)\le t) = P(W \le \log_{10}t) = \log_{10}t$. ∎
> > **(⇒)** If $W$ is uniform then $\langle W + s\rangle$ is uniform for every $s$, so $S(aX) \stackrel{d}{=} S(X)$. ∎
> > **Why exactly 30.1%.** Invariance under *all* rescalings leaves no freedom whatsoever: the log-scale must be perfectly flat. A flat log-scale means probability is proportional to *logarithmic length* — and the interval $[1,2)$ occupies a fraction $\log_{10}2 = 0.30103$ of the decade $[1,10)$ on a log scale. That specific irrational number is *forced*, with nothing fitted or chosen. Likewise $[2,3)$ gets $\log_{10}(3/2) = 0.17609$, and the pieces telescope to 1 automatically. The same argument yields the entire joint law for any number of leading digits.

> [!question]- Exercise 6 — Z-test and multiplicity
> An auditor examines $n = 1{,}000$ disbursements and finds 340 with leading digit 1. (a) Compute $Z$ and the two-sided $p$-value. (b) Is it significant at 5%? (c) Does it survive testing all nine digits with a Bonferroni adjustment?
>
> > [!success]- Answer
> > $p_{\text{exp}} = 0.30103$, $p_{\text{obs}} = 0.3400$.
> > $\mathrm{SE} = \sqrt{0.30103\times0.69897/1000} = \sqrt{0.0002104} = 0.014506$.
> > **(a)** $Z = 0.03897/0.014506 = \mathbf{2.687}$; two-sided $p = \mathbf{0.0072}$.
> > **(b) Yes** — $p = 0.0072 < 0.05$, so digit 1 is significantly over-represented.
> > **(c) No.** Bonferroni gives per-test $\alpha = 0.05/9 = 0.00556$, i.e. critical $|Z| = 2.773$. Since $2.687 < 2.773$, digit 1 is **not** significant after adjustment. The audit conclusion flips depending on the multiplicity choice — which is why the threshold must be declared in advance and reported.

> [!question]- Exercise 7 — Last digits
> (a) What does Benford's law predict for **last** digits of genuine data, and who proved it? (b) Last-digit counts (0–9) for 3,128 payroll amounts are 412, 355, 388, 374, 361, **90**, 342, 349, 336, **121**. Compute $\chi^2$ (df = 9) and interpret. (c) Why is a last-digit test often sharper than a first-digit test?
>
> > [!success]- Answer
> > **(a)** Last digits should be **uniform, ~10% each**. Benford himself proved this in the 1938 paper: the frequency of a digit in the $q$-th place "approaches equality for all the digits 0,1,…,9", i.e. $F_q = 0.1$. Benford's law is a *leading*-digit law and does not apply to terminal digits.
> > **(b)** Expected $= 3128/10 = 312.8$ per digit.
> > Terms: 0: $99.2^2/312.8 = 31.46$; 1: $42.2^2/312.8 = 5.69$; 2: $75.2^2/312.8 = 18.08$; 3: $61.2^2/312.8 = 11.97$; 4: $48.2^2/312.8 = 7.43$; 5: $222.8^2/312.8 = 158.70$; 6: $29.2^2/312.8 = 2.73$; 7: $36.2^2/312.8 = 4.19$; 8: $23.2^2/312.8 = 1.72$; 9: $191.8^2/312.8 = 117.61$.
> > $\chi^2 = \mathbf{359.57}$ with df = 9 (critical 16.919) → **decisively non-uniform**.
> > Interpretation: digit **0** is heavily over-represented (412 vs 313) while **5** (90) and **9** (121) are drastically under-represented — the classic **rounding / digit-preference** signature. Amounts are being rounded to end in 0, and genuine 5s and 9s are disappearing.
> > **(c)** Because adjusting an amount usually preserves its order of magnitude, hence its leading digit — so the first digit often still looks fine. The manipulation surfaces in the fine structure: rounding pushes terminal digits onto 0 and away from 5 and 9. This is exactly Diekmann's finding (first digits ≈ Benford even when fabricated; **higher digits** deviate). **Caveat:** genuine data can also show terminal-digit preference, so a last-digit anomaly indicates *human rounding*, not automatically fraud.

> [!question]- Exercise 8 — Equidistribution
> (a) Prove $2^n$ is Benford. (b) Show $10^{n/2}$ is not Benford, and explain what this teaches about density. (c) Is $10^n$ Benford? Is $10^{n/100}$?
>
> > [!success]- Answer
> > **(a)** A sequence is Benford iff $\{\log_{10}|x_n|\}$ is equidistributed mod 1. Here $\log_{10}2^n = n\log_{10}2$. Weyl's criterion: $(na)$ is equidistributed mod 1 **iff** $a$ is irrational. Now $\log_{10}2$ is irrational — if $\log_{10}2 = p/q$ then $10^p = 2^q$, i.e. $2^p5^p = 2^q$, forcing $p=0$, contradiction. Hence $2^n$ is Benford. ∎ (Over $n = 1..2000$ the frequencies match Benford within $0.0013$ per digit.)
> > **(b)** $\{\log_{10}10^{n/2}\} = \{n/2\} \in \{0, \tfrac12\}$ — only two values, so the sequence is not equidistributed mod 1 and $10^{n/2}$ is **not** Benford. **What it teaches:** the fractional parts do not densely fill $[0,1)$ here at all, and the sharper example is $10^{n/100}$, whose fractional parts *do* fill a 100-point grid (dense-looking, numerically very close to Benford) and yet it is still not exactly Benford, because equidistribution is strictly stronger than density / near-filling.
> > **(c)** $10^n$: $\{n\} = 0$ always → **not** Benford. $10^{n/100}$: also **not exactly** Benford (a rational power of 10), though very close. General rule: $k^n$ is Benford exactly when $\log_{10}k$ is irrational, so $2^n, 3^n, 5^n, 7^n$ qualify, while $10^n, 100^n, 10^{n/2}$ do not.

## 12. References

- S. Newcomb, "Note on the frequency of use of the different digits in natural numbers", *American Journal of Mathematics* **4**(1/4), 1881, pp. 39–40. DOI 10.2307/2369148.
- F. Benford, "The Law of Anomalous Numbers", *Proceedings of the American Philosophical Society* **78**(4), 1938, pp. 551–572. [JSTOR 984802](https://www.jstor.org/stable/984802)
- R. S. Pinkham, "On the distribution of first significant digits", *Annals of Mathematical Statistics* **32**(4), 1961, pp. 1223–1230. DOI 10.1214/aoms/1177704862.
- P. Diaconis, "The distribution of leading digits and uniform distribution mod 1", *Annals of Probability* **5**(1), 1977, pp. 72–81. DOI 10.1214/aop/1176995891.
- T. P. Hill, "A statistical derivation of the significant-digit law", *Statistical Science* **10**(4), 1995, pp. 354–363. DOI 10.1214/ss/1177009869.
- T. P. Hill, "Base-invariance implies Benford's law", *Proceedings of the AMS* **123**(3), 1995, pp. 887–895. DOI 10.2307/2160815.
- A. Berger & T. P. Hill, *An Introduction to Benford's Law*, Princeton University Press, 2015. ISBN 978-0-691-16306-2.
- A. Berger & T. P. Hill, "The mathematics of Benford's law: a primer", *Statistical Methods & Applications* **30**(3), 2020, pp. 779–795. [arXiv:1909.07527](https://arxiv.org/abs/1909.07527) — the best free source for exact theorem statements.
- A. Berger & T. P. Hill, "What is… Benford's law?", *Notices of the AMS* **64**(2), 2017, pp. 132–134. [PDF](https://www.ams.org/publications/journals/notices/201702/rnoti-p132.pdf)
- A. Diekmann, "Not the first digit! Using Benford's law to detect fraudulent scientific data", *Journal of Applied Statistics* **34**(3), 2007, pp. 321–329. DOI 10.1080/02664760601004940.
- M. Nigrini, *Benford's Law: Applications for Forensic Accounting, Auditing, and Fraud Detection*, Wiley, 2012.
- M. Nigrini & L. Mittermaier, "The use of Benford's law as an aid in analytical procedures", *Auditing: A Journal of Practice & Theory* **16**(2), 1997, pp. 52–67.
- P. Drake & M. Nigrini, "Computer assisted analytical procedures using Benford's law", *Journal of Accounting Education* **18**(2), 2000, pp. 127–146. DOI 10.1016/S0748-5751(00)00008-7.
- C. Carslaw, "Anomalies in income numbers: evidence of goal oriented behavior", *The Accounting Review* **63**(2), 1988, pp. 321–327.
- J. Thomas, "Unusual patterns in reported earnings", *The Accounting Review* **64**(4), 1989, pp. 737–787.
- L. Pietronero, E. Tosatti, V. Tosatti & A. Vespignani, "Explaining the uneven distribution of numbers in nature: the laws of Benford and Zipf", *Physica A* **293**(1–2), 2001, pp. 297–304. [arXiv:cond-mat/9808305](https://arxiv.org/abs/cond-mat/9808305)
- J. Deckert, M. Myagkov & P. Ordeshook, "Benford's Law and the detection of election fraud", *Political Analysis* **19**(3), 2011, pp. 245–268. DOI 10.1093/pan/mpr014.
- R. Cerqueti & C. Lupi, "Severe testing of Benford's law", [arXiv:2202.05237](https://arxiv.org/abs/2202.05237) — the excess-power problem and MAD asymptotics.
- W. K. T. Cho & B. J. Gaines, "Breaking the (Benford) law: statistical fraud detection in campaign finance", *The American Statistician* **61**(3), 2007, pp. 218–223.
- Wikipedia, [Benford's law](https://en.wikipedia.org/wiki/Benford%27s_law)

---

# Part II · 中文

## 1. 定义与核心公式

把正数写成科学记数法 $x = m \times 10^{k}$，其中 $1 \le m < 10$。$m$ 称为**尾数**（significand），其首位数字就是 $x$ 的**首位有效数字**。本福特定律给出了它的分布：

$$ P(\text{首位数字} = d) = \log_{10}\!\left(1 + \frac{1}{d}\right), \qquad d = 1, 2, \dots, 9 $$

**首位数字概率表：**

| 数字 $d$ | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
|---|---|---|---|---|---|---|---|---|---|
| $P(d)$ | 0.3010 | 0.1761 | 0.1249 | 0.0969 | 0.0792 | 0.0669 | 0.0580 | 0.0512 | 0.0458 |

也就是说，首位出现 1 的概率约为出现 9 的 **6.6 倍**。九个概率之和恰为 $1$（裂项相消）：

$$ \sum_{d=1}^{9}\log_{10}\!\left(1+\frac1d\right) = \log_{10}\prod_{d=1}^{9}\frac{d+1}{d} = \log_{10} 10 = 1 $$

**第二位数字。** 第二位共有**十**个取值（$0\sim9$），同样不均匀，只是平坦得多。当 $e = 0$ 时：

$$ P(\text{第二位}=0) = \sum_{k=1}^{9}\log_{10}\!\left(1+\frac{1}{10k}\right) $$

当 $e = 1,\dots,9$ 时：

$$ P(\text{第二位}=e) = \sum_{k=1}^{9}\log_{10}\!\left(1+\frac{1}{10k+e}\right) $$

| $e$ | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
|---|---|---|---|---|---|---|---|---|---|---|
| $P(e)$ | 0.1197 | 0.1139 | 0.1088 | 0.1043 | 0.1003 | 0.0967 | 0.0934 | 0.0904 | 0.0876 | 0.0850 |

这十个概率之和恰为 1（已验证）。注意第二位数字的效应比首位**弱**（11.97% 对 8.50%），而这恰恰是它对人为操纵更敏感的原因——见第 7 节。

**通用联合公式。** 若前 $m$ 位有效数字为 $d_1 d_2 \dots d_m$，令 $N = 10^{m-1}d_1 + \dots + d_m$ 为它们拼成的整数，则

$$ P(\text{前 } m \text{ 位} = N) = \log_{10}\!\left(1 + \frac{1}{N}\right) $$

于是前**两**位数字满足 $P(\text{前两位} = N) = \log_{10}(1 + 1/N)$，$N = 10,\dots,99$。例如 $P(10) = \log_{10}(1.1) = 0.04139$，$P(25) = \log_{10}(26/25) = 0.01703$，$P(99) = \log_{10}(100/99) = 0.00436$。而 $P(314) = \log_{10}(315/314) = 0.00138$——一个本福特数以前三位 $3.14$ 开头的概率。

> [!note] 一个想法推出全部公式
> **一个数的首位数字等价于"$\log_{10} m$ 在 $[0,1)$ 上均匀分布"**。于是 $P(\text{首位}=d)$ 就是"使首位等于 $d$ 的那段 $\log_{10}m$ 区间长度"，即 $\log_{10}(d+1) - \log_{10}d = \log_{10}(1+1/d)$。上面所有公式都由这一个想法推出。

### 术语对照

| English | 中文 | 含义 |
|---|---|---|
| leading / first significant digit | 首位有效数字 | 第一个非零数字 |
| significand, mantissa | 尾数 / 有效数字部分 | $x = m\cdot10^k$ 中的 $m$，$1\le m<10$ |
| scale invariance | 尺度不变性 | 乘以 $c$ 后分布不变 |
| base invariance | 进制不变性 | 换进制后分布不变 |
| equidistribution mod 1 | 模 1 均匀分布 | 小数部分均匀铺满 $[0,1)$ |
| goodness-of-fit test | 拟合优度检验 | 数据是否与该分布相容 |
| conformity | 符合度 | Nigrini 的一致性度量 |
| MAD | 平均绝对偏差 | Mean absolute deviation |
| terminal digit | 末位数字 | 末位应当**均匀** |

## 2. 发现史：Newcomb 与 Benford

**1881 年**，天文学家 **Simon Newcomb** 注意到对数表的前几页——即存放以 1 开头数字的页面——被翻得远比后面的页破旧。对数表按首位数字排序，因此磨损程度直接反映了各首位数字的实际使用频率。他在《American Journal of Mathematics》**4**（1881）pp. 39–40 发表 "Note on the frequency of use of the different digits in natural numbers"，提出了这条对数规律，并且**已经给出了第二位数字的分布**。

此后这个发现被遗忘了 57 年，直到物理学家 **Frank Benford** 独立重新推导并做了远为有力的实证检验："The Law of Anomalous Numbers"，*Proceedings of the American Philosophical Society* **78**(4), 1938, pp. 551–572。他论文表一的表头写着 *"20,229 observations"*，数据来自 **20** 组来源各异的数据集（河流、人口、物理常数、报纸头版、原子量、街道地址、死亡率等）。他在论文中**没有引用 Newcomb**——这正是这 57 年空档的通常解释。因此这条规律更准确的名字是 **Newcomb–Benford 定律**。

> [!tip] 一个值得知道的历史细节
> 在同一篇论文里，Benford 印出的两张表**并不是**现代意义上的本福特定律。他关于单个数字的 "First Order" 表给出 0.393、0.258、0.133……并明确写道，单个数字"有着一种特定的自然频率，与对数比值相去甚远"。他那张表描述的是**把 1–9 当作数字本身**时的分布，而不是大量数据的首位数字分布。我们熟悉的那条定律出现在他所说的 "limiting order"（极限阶）里。教训：不要把原始论文里的表直接当作定律来引用。
>
> 另一个耐人寻味的点：他拟合得**最差**的恰恰是那些正式的数学用表（原子量、物理常数），拟合得**最好**的是报纸头版上的数字。他自己的原话是："那些彼此之间本无关联的数字，在被大量集合起来考察时，却与一条分布规律吻合得很好。"

## 3. 为什么成立：尺度不变性

这是整件事的核心，也是这条定律并非巧合的原因。

关键观察是：**单位是任意的**。一条河的长度不论用公里还是英里度量都是同一个量；一笔金额不论用美元还是日元表示都是同一个量。因此，一条声称描述"自然产生的数字"的规律，理应在尺度变换 $x \mapsto ax$ 下保持不变。

> [!important] 定理（尺度不变性）
> 设 $X$ 为满足 $P(X=0)=0$ 的实随机变量，记其**尾数** $S(x) = x/10^{\lfloor \log_{10} x\rfloor} \in [1,10)$。则 $X$ 服从本福特定律（即对所有 $t \in [1,10)$ 有 $P(S(X) \le t) = \log_{10} t$）**当且仅当**对**每一个** $a > 0$，$S(X)$ 与 $S(aX)$ 同分布。
> （Pinkham 1961；现代严谨表述见 Berger–Hill《An Introduction to Benford's Law》定理 5.3。）

**为什么它必然给出 $\log_{10} t$。** 令 $W = \log_{10} X \bmod 1 \in [0,1)$，则 $S(X) = 10^{W}$。乘以 $a$ 在对数空间中相当于**加上** $\log_{10} a$ 再对 1 取模。于是尺度不变性说的正是：*$W$ 的分布对圆周 $\mathbb{R}/\mathbb{Z}$ 上的每一个旋转都不变*。而圆周上对所有旋转都不变的概率测度**只有**均匀分布。所以 $W \sim \mathrm{Uniform}[0,1)$，从而

$$ P(S(X) \le t) = P(10^{W} \le t) = P(W \le \log_{10} t) = \log_{10} t $$

求导即得本福特密度 $f(m) = \dfrac{1}{m \ln 10}$（$m \in [1,10)$），它在 $[d, d+1)$ 上的质量为 $\log_{10}(1+1/d)$。∎

**Haar 测度的说法。** 用群的语言：乘法群 $(\mathbb{R}_{>0}, \times)$ 有唯一的（相差常数倍）平移不变测度，即其 **Haar 测度** $\mathrm{d}x/x$——等价于 $\log x$ 上的 Lebesgue 测度。本福特定律**就是**这个 Haar 测度推前到尾数空间 $[1,10)$ 并归一化的结果。一个需要说明的细节：$\mathrm{d}x/x$ 的**总质量是无穷**（每个数量级贡献完全相同），所以它本身不是概率测度；本福特出现在**归一化 / 条件化**之后。这正是该定理要针对"尾数"而非针对 $X$ 本身来陈述的原因。

**两个加强结果。**

- **只管一个数字就足够。** 只要存在**某一个**数字 $d \in \{1,\dots,9\}$，使得对所有 $a$ 都有 $P(D_1(aX) = d) = P(D_1(X) = d)$，整条定律就被唯一确定（Berger–Hill 定理 5.8）。仅仅一个数字的概率具有尺度不变性，就足以锁定全部。
- **进制不变性。** 本福特定律还是唯一在**任意进制**下尾数分布都相同的分布。Hill（1995）证明"进制不变性蕴含本福特定律"。Weyl 等分布定理、尺度不变性、进制不变性，是同一个对象的三个等价侧面。

**Hill 的统计推导（1995）。** 先从某个分布抽取样本量，再从**随机选定**的分布中抽取数值，如此重复。合并后的经验分布几乎必然收敛到本福特定律。也就是说，当数据生成过程本身带有随机性时，本福特行为是**典型**结果——不需要任何特殊机制。这解释了为什么 Benford 自己那 20 组来源各异的数据都吻合，也解释了报纸头版数字为何吻合。

> [!warning] 一个应当如实说明的分歧
> 少数意见（Ryder 2009）主张：对有限/有理数据集而言，尺度不变性是**必要但非充分**条件。主流结论是上面的"当且仅当"；把这条异议当作一个有争议的脚注，而不是已定论的事实。

## 4. 等分布视角

> [!important] 定理
> 序列 $(x_n)$ 服从本福特定律**当且仅当**小数部分序列 $\{\log_{10}|x_n|\}$ 在 $[0,1)$ 上**均匀分布**（等分布）。
> 随机变量 $X$ 服从本福特定律当且仅当 $\{\log_{10}|X|\}$ 在 $[0,1)$ 上均匀。

这是定律的"可计算版本"，而且带有一个很严格的条件（Weyl）：序列 $(na)$ 模 1 等分布**当且仅当 $a$ 是无理数**。

**2 的幂。** $\log_{10}2$ 是无理数（若 $\log_{10}2 = p/q$，则 $10^p = 2^q$，即 $2^p5^p = 2^q$，迫使 $p=0$），所以 $(n\log_{10}2)$ 模 1 等分布，从而 $2^n$ 服从本福特定律。首位数字序列是 $2,4,8,1,3,6,1,2,5,1,2,4,8,1,3,6,1,2,5,\dots$——1 出现的次数远多于 9。在 $n = 1..2000$ 上，观测频率与理论值的偏差不超过每数字 $0.0013$。

**一般规律：** $k^1, k^2, k^3, \dots$ 服从本福特定律**当且仅当** $\log_{10} k$ 是无理数。所以 $2^n, 3^n, 5^n, 7^n$ 都符合；而 $10^n$、$100^n$、$10^{n/2}$ 不符合。

> [!warning] 仅有稠密性远远不够——一个经典陷阱
> 一个序列可以在 $[0,1)$ 上看起来铺得很开，却依然不满足等分布。权威反例：$10^{n/2} = (\sqrt{10})^n$ 有 $\{\log_{10}10^{n/2}\} = \{n/2\} \in \{0, \tfrac12\}$——只能取两个值，所以**不是**本福特。同理 $10^n$ 的小数部分恒为 $0$，也不是本福特。而 $10^{n/100}$ 虽然**看起来稠密、数值上非常接近**本福特，仍然不是精确的本福特。
> 所以"这个序列铺得很开 / 能取到每个数字"**并不能**推出本福特定律。正确的判据是完整的 Weyl 性质：对每个 $s \in [0,1)$ 都有 $\lim_{N\to\infty}\frac{1}{N}\#\{n \le N : \{\log_{10}x_n\} \le s\} = s$。正如 Berger & Hill 指出的，"指数型序列一般都是本福特"是一个被记录在案的常见错误。

## 5. 什么时候成立——什么时候不成立

> [!important] 适用的数据应满足
> 1. 跨越**若干数量级**，**或**（效果上等价地）由**乘法**过程产生——增长、复利、逐级细分；**或**
> 2. 是众多不同分布的**随机混合**（Hill 定理）。

**它在以下情形可靠地失效：**

- **有界范围。** 成人身高、体重、智商、年龄——局限在窄区间内，且近似正态，不可能跨越数量级。（身高基本只以 1 或 2 开头，别的不会出现。）
- **人为指定或顺序编号的数字。** 电话号码、邮政编码、身份证号、支票号、顺序发票号。它们的数字由编号规则决定，而非乘法过程产生。
- **带有硬性下限或上限的数字。** 被反复引用的经典案例：1960/1970 年美国人口普查中人口 $\ge 2{,}500$ 的居民点，只有 19% 以 1 开头，却有 20% 以 2 开头——因为在 2,500 处截断引入了偏差。
- **受人的心理影响的数字。** 心理定价（\$9.99）、凑整的数字。
- **均匀分布的数据。** 均匀随机变量永远不会接近本福特，无论铺得多开（与本福特的 sup 距离有约 0.076 的下界）。
- **凭空编造的数字。** 人是糟糕的随机数生成器：让受试者"编造"四位数或六位数时，首位数字会接近**均匀**而非本福特。这正是反欺诈应用得以成立的实证基础。

> [!warning] 三个被记录在案的"常见错误"
> 1. **"本福特要求分布很宽。"** 原则上错误：$X = 10^{U}$（$U \sim \mathrm{Uniform}[0,1]$）**精确地**服从本福特，尽管它全部取值都在 $[1,10)$ 内。
> 2. **"指数型序列自动就是本福特。"** 错误——见上面的 $10^{n/2}$。
> 3. **"分布宽 + 形状规则 ⇒ 接近本福特。"** 错误：若 $X \sim N(7,1)$，则 $P(D_1(X)=1) \le 10^{-6}$。仅凭"宽"什么都推不出来。

一个实用的心智检验：*如果我把这份数据里每个数都乘以 1.7，数据看起来还"自然"吗？* 如果乘以 1.7 就跑出了有意义的范围（5 分制里 4.2 分变成 7.1 分），那这份数据不可能具有尺度不变性，也不该期待本福特。

## 6. 现实中的拟合情况

| 数据集 | 特征 | 是否服从 |
|---|---|---|
| 河流长度 / 面积 | 跨越多个数量级 | ✔ |
| 国家 / 城市人口 | 乘法增长、范围宽 | ✔ |
| 报纸头版上的数字 | 混合来源（Hill 的混合机制） | ✔ *Benford 拟合最好* |
| 街道地址 | 范围宽 | ✔ |
| 斐波那契数 $F_n$ | 指数增长 | ✔ |
| 2 的幂、阶乘 | 指数增长 / 对数无理 | ✔ |
| 死亡率、流域面积 | 范围宽 | ✔ |
| **物理常数、原子量** | 正式表格、样本量小 | **✘（恰恰是 Benford 拟合*最差*的！）** |
| 人的身高 / 体重 / 年龄 | 窄区间有界 | ✘ |
| 彩票号码、骰子 | 构造上均匀 | ✘ |
| 电话号码、邮编 | 人为指定 | ✘ |
| 顺序发票号 | 人为计数器 | ✘ |

请注意那行反直觉的内容：人们最常当作"显然自然"的例子——物理常数与原子量——恰恰属于 **Benford 自己拟合最差**的数据集，部分原因是他那两组样本量极小（分别只有 104 和 91 个观测）。他拟合最好的是那些他形容为"彼此本无关联"的数字。

## 7. 应用

**法务会计与税务审计。** 这是最核心的应用。**Frank Nigrini** 的工作（Nigrini & Mittermaier 1997；Drake & Nigrini 2000；以及专著《Benford's Law: Applications for Forensic Accounting, Auditing, and Fraud Detection》，Wiley，2012）把这条定律变成可操作的审计程序。逻辑是：人在编造看似合理的数字时，倾向于把首位数字分布得**比自然情况更均匀**。因此对报销单、发票或纳税申报做数字频率检验，就能把可疑记录筛出来送交进一步核查。它是**筛查工具而非证明**：偏离只告诉你*该往哪里看*。既有成功案例（Nigrini 检出的工资舞弊，案犯的破绽是**重复**使用同样的金额），也有失败案例（有的研究中舞弊未被发现；也有的研究中不符合现象普遍存在，于是失去了诊断价值）。

**检测伪造的科研数据。** **Diekmann（2007）**，"Not the First Digit! Using Benford's Law to Detect Fraudulent Scientific Data"，*Journal of Applied Statistics* **34**(3)，pp. 321–329。已发表论文中的真实回归系数在首位**及更高位**上都符合本福特；而由受试者**编造**的系数只在首位上表现出**近似**本福特行为，在**更高位上则明显偏离**。教训就写在标题里：首位恰恰是*不该*看的地方。

**图像取证。** JPEG 图像的量化 **DCT 系数**在单次压缩图像中呈类本福特分布；被篡改或二次压缩的区域会出现局部偏离，这使调查人员能够定位照片中被修改的部分（Fu, Shi & Su 2007；Jolion 2001）。

**会计中的盈余管理。** Carslaw（1988）发现新西兰公司的**首位**数字符合本福特，但**第二位**数字不符合——0 太多、9 太少，即把利润**向上**凑整。Thomas（1989）在约 8 万条美国公司数据上复现了这一现象，并在**亏损**中发现镜像模式（向下凑整，从而少报亏损）。人为操纵藏在细结构中，而不在首位上。

> [!warning] 选举舞弊的指控——务必谨慎
> 本福特定律曾被用于选举计票数据，而这种用法**确实存在争议**。已发表的批评相当直白：Deckert、Myagkov 与 Ordeshook（2011）认为"本福特定律作为舞弊的取证指标基本上是无用的"，因为自由公正的选举同样会产生偏离，而*舞弊反而可能把数据推向符合该定律*。Mebane 的回应也承认"存在许多注意事项"。麻烦出在：
> - **范围受限。** 各投票站的票数落在很窄的区间（几十到几千），违反了"宽范围"要求。Mebane 本人说：*"人们普遍认识到，投票站层面的票数首位数字无助于诊断选举舞弊。"*
> - **机械性关联。** 两候选人对决中两个得票率之和被约束为约 100%，因此它们不可能各自独立地服从本福特。
> - **检验选择偏差。** 在第二位、首位、末位检验之间事后挑选，会抬高假阳性率。
>
> 学界共识是：本福特对选举数据的适用性**尚未确立**。绝不要把本福特偏离单独当作证据。

## 8. 首位数字与末位数字

> [!important] 最实用的一个区分
> - 真实、乘法性数据的**首位数字**服从本福特定律。
> - 真实数据的**末位数字**应当是**均匀**的——没有任何理由使真实的量以 7 结尾多于以 3 结尾。
>
> **末位这一点是 Benford 本人证明的。** 他 1938 年的论文指出：当把前面各位数字的所有组合都考虑进来后，某一位上某数字出现的频率"趋于对 0,1,…,9 各数字相等"，即 $F_q = 0.1$。所以这条定律明确是**首位**定律，**不**适用于末位。（数值上收敛很快：第四位有效数字已经从 0 的 10.0176% 到 9 的 9.9824%。）

所以欺诈检测要**两头都查**：查首位是否符合本福特，查末位是否**均匀**。末位异常往往是更锐利的信号，因为操纵者即使"修好"了首位，仍然必须把金额凑整——于是 0 过多、5 和 9 过少。反过来说，末位异常只能说明存在**人为凑整**，并不自动等于舞弊：真实数据本身也会出现末位偏好（病理报告中有记载）。

## 9. 如何检验符合度

**卡方拟合优度检验。** 设样本量为 $n$，数字 $d$ 的观测频数为 $O_d$：

$$ \chi^2 = \sum_{d=1}^{9}\frac{(O_d - E_d)^2}{E_d}, \qquad E_d = n\cdot P(d) $$

**自由度取决于你做哪一种检验**：由于本福特概率是完全指定的常数（没有从数据中估计任何参数），$\mathrm{df} = (\text{类别数}) - 1$：

| 检验 | 类别数 | df | $\chi^2$ 临界值，$\alpha=0.05$ | $\alpha=0.01$ |
|---|---|---|---|---|
| 首位数字 | 9 | **8** | **15.507** | 20.090 |
| 第二位数字 | 10 | **9** | **16.919** | 21.666 |
| 前两位数字 | 90 | **89** | **112.022** | 122.942 |

（首位数字检验**不要**用 df = 9；有些资料这样写，那是错的。）

> [!warning] 卡方在这里的最大缺陷
> 当 $n$ 非常大时，卡方会变得极度敏感：一个毫无实际意义的微小偏差也会给出"显著"的结论，因为这个统计量随 $n$ 成比例放大。Nigrini 说得很直白：*"我们需要的是一个不理会记录条数的检验。"* 这正是 MAD 被提出的原因——它衡量**效应大小**，而不是统计显著性。

**Nigrini 的平均绝对偏差（MAD）。** 对观测**比例**与期望**比例**之差的绝对值取平均：

$$ \mathrm{MAD} = \frac{1}{k}\sum_{i}\big|\,p_{\text{观测}} - p_{\text{期望}}\,\big|, \qquad k = \text{类别数（首位检验为 9）} $$

对**首位数字**检验，符合度区间为（Nigrini 2012）：

| MAD | 判定 |
|---|---|
| 0.000 – 0.006 | 高度符合 |
| 0.006 – 0.012 | 可接受 |
| 0.012 – 0.015 | 勉强可接受 |
| 大于 0.015 | **不符合** |

对**前两位数字**检验，区间要小得多（大致为 0.0000–0.0012 / 0.0012–0.0018 / 0.0018–0.0022 / 大于 0.0022），因为期望比例小了约 10 倍。需要知道的是：MAD 阈值是来自实务的经验法则，而非精确的抽样理论——MAD 的严格渐近分布是后来才被推导出来的（Cerqueti & Lupi 2022）。

**单个数字的 Z 统计量。**

$$ Z = \frac{p_{\text{观测}} - p_{\text{期望}}}{\sqrt{p_{\text{期望}}(1 - p_{\text{期望}})/n}} $$

实务中还常用带连续性校正的版本，用计数形式写作 $(|O - E| - \tfrac12)/\sqrt{E(1-p_{\text{期望}})}$。$|Z| > 1.96$ 即在该数字上于 5% 水平显著。

> [!warning] 同时检验九个数字需要多重比较校正
> 对九个数字各自以 5% 做 Z 检验，会显著抬高族错误率。实务上使用 **Bonferroni** 校正：九个数字、族错误率 $\alpha = 0.05$ 时，单次检验用 $\alpha = 0.05/9 \approx 0.00556$，即临界值 $|Z| \gtrsim 2.77$ 而非 1.96。这不是吹毛求疵——正如下面的例题所示，它**可能直接翻转审计结论**。务必说明你用的是哪个阈值。

**其他距离度量。** **Kolmogorov–Smirnov** 检验不分箱，直接比较整体累积分布与本福特分布，在小样本下更有功效（但需注意它用于离散分布时可能过于保守）。**Leemis 的 $m$** 是一个缩放后的 sup 范数，**Cho & Gaines 的 $d$** 是缩放后的欧氏距离。KL 散度出现在对定律的*解释*中，但在取证文献里**没有公认的符合度阈值**。

### 例题：1,000 笔发票金额

| $d$ | $O_d$ | $E_d = 1000\,P(d)$ | $O_d - E_d$ | $(O_d-E_d)^2/E_d$ |
|---|---|---|---|---|
| 1 | 400 | 301.03 | +98.97 | 32.5385 |
| 2 | 120 | 176.09 | −56.09 | 17.8670 |
| 3 | 110 | 124.94 | −14.94 | 1.7862 |
| 4 | 90 | 96.91 | −6.91 | 0.4927 |
| 5 | 80 | 79.18 | +0.82 | 0.0085 |
| 6 | 70 | 66.95 | +3.05 | 0.1392 |
| 7 | 50 | 57.99 | −7.99 | 1.1014 |
| 8 | 45 | 51.15 | −6.15 | 0.7400 |
| 9 | 35 | 45.76 | −10.76 | 2.5291 |

$$ \chi^2 = 32.5385 + 17.8670 + 1.7862 + 0.4927 + 0.0085 + 0.1392 + 1.1014 + 0.7400 + 2.5291 = \mathbf{57.20} $$

**结论。** $57.20 \gg 15.507$（df = 8 时 5% 临界值），所以**拒绝**符合性。MAD 给出同样答案：

$$ \mathrm{MAD} = \frac{0.09897 + 0.05609 + 0.01494 + 0.00691 + 0.00082 + 0.00305 + 0.00799 + 0.00615 + 0.01076}{9} = \frac{0.20568}{9} = \mathbf{0.02285} $$

已远超 Nigrini 的 0.015 不符合阈值。

**如何读这张表。** 异常集中在**小数字**上：1 严重超量（400 对期望 301，单独贡献了 57.2 中的 32.5），2 偏少，而数字 5 和 6 看起来完全正常。整体形态是"小首位数字偏多、大首位数字偏少"。这类模式值得调查——但必须清楚它**不**是什么：它本身**不能**指认任何机制。1 偏多、9 偏少也完全可能是**被截断**的数据（存在硬性下限）造成的，因为截断会去掉大数值。因此专业的结论是"不符合，需进一步调查"，而不是"数据是编造的"。

**单个数字的 Z 检验，以及为什么多重比较很重要。** 假设 $n = 1000$，数字 1 出现 340 次。则

$$ Z = \frac{0.3400 - 0.3010}{\sqrt{0.3010 \times 0.6990/1000}} = \frac{0.0390}{0.014506} = \mathbf{2.69} $$

超过 1.96，看起来数字 1 显著偏高。但若用九个数字的 Bonferroni 阈值（$|Z| \gtrsim 2.77$），它就**不能**被判为显著。这就是要点：多重比较的选择会改变结论，因此必须事先声明，而不能默认。

## 10. 与 Zipf 定律、幂律的关系

若底层数值服从尺度不变的幂律 $P(N) \sim N^{-\alpha}$，则首位数字的概率由对一个数量级积分得到：

$$ P(n) = \int_n^{n+1} N^{-\alpha}\,\mathrm{d}N = \frac{(n+1)^{1-\alpha} - n^{1-\alpha}}{1-\alpha} \qquad (\alpha \ne 1) $$

当 **$\alpha = 1$** 时退化为

$$ P(n) = \int_n^{n+1} \frac{\mathrm{d}N}{N} = \log\frac{n+1}{n} = \log\!\left(1 + \frac1n\right) $$

——正是本福特定律。再对秩 $k$ 求解，就得到 Zipf 定律 $N(k) \sim k^{1/(1-\alpha)}$。

> [!note] 把 Zipf 的关系说准确
> 常见说法是"本福特定律是 Zipf 定律的特例"。准确的说法不同：**本福特对应底层数值分布的 $\alpha = 1$，而经典 Zipf 定律（词频、城市规模）对应 $\alpha \approx 2$。** 两者是**同一参数族上的两个不同点**，并不是一个嵌套在另一个之中。
> 两个技术提醒：$\alpha \ne 1$ 的公式是"一个数量级上的密度"，在 $n = 1..9$ 上**并未归一化**（纯幂律在无界区间上无法归一化），所以要说"在归一化意义下"；而 $\alpha = 1$ 恰好是积分产生对数的临界情形。

## 11. 实战检验题

> [!question]- 题 1 — 计算概率
> (a) 精确写出并用 4 位小数给出 $P(d=7)$。(b) 证明九个首位概率之和恰为 1。(c) $P(d \le 3)$ 是多少？$P(d \in \{1,2\})$ 又是多少？
>
> > [!success]- 答案
> > **(a)** $P(7) = \log_{10}(8/7) = 0.05799 = 5.7992\%$。
> > **(b)** $\prod_{d=1}^{9}\frac{d+1}{d} = \frac21\cdot\frac32\cdots\frac{10}{9} = 10$（裂项相消），故总和为 $\log_{10}10 = 1$。✔
> > **(c)** $P(d\le3) = \log_{10}2 + \log_{10}\frac32 + \log_{10}\frac43 = \log_{10}4 = 0.6021$——最小的三个数字覆盖了全部首位数字的 60% 以上。$P(d\in\{1,2\}) = \log_{10}3 = 0.4771$。

> [!question]- 题 2 — 完整的符合度检验
> 某数据集 $n = 2{,}000$ 笔订单金额，首位数字频数为：1→680，2→350，3→250，4→190，5→150，6→130，7→110，8→80，9→60。计算 $\chi^2$ 与 MAD 并给出判定。
>
> > [!success]- 答案
> > 期望频数 $E_d = 2000 P(d)$：602.06、352.18、249.88、193.82、158.36、133.89、115.98、102.31、91.51。
> > 偏差：$+77.94, -2.18, +0.12, -3.82, -8.36, -3.89, -5.98, -22.31, -31.51$。
> > 各项：$77.94^2/602.06 = 10.089$；$2.18^2/352.18 = 0.013$；$0.12^2/249.88 \approx 0.000$；$3.82^2/193.82 = 0.075$；$8.36^2/158.36 = 0.441$；$3.89^2/133.89 = 0.113$；$5.98^2/115.98 = 0.308$；$22.31^2/102.31 = 4.865$；$31.51^2/91.51 = 10.851$。
> > $\chi^2 = \mathbf{26.76}$。df = 8，临界值 15.507 → 5% 水平**拒绝**；26.76 也超过 20.090 → 1% 水平同样拒绝。
> > MAD：比例偏差 $0.03897, 0.00109, 0.00006, 0.00191, 0.00418, 0.00195, 0.00299, 0.01116, 0.01576$；合计 $= 0.07807$；MAD $= 0.07807/9 = \mathbf{0.00867}$ → 落在 Nigrini 的**可接受**区间（0.006–0.012）。
> > **要点在于两个指标的分歧。** 大样本让卡方拒绝，而 MAD 显示*整体*偏差不大，且集中在数字 1 和 9 上。判定：不是一次干净的拟合，值得针对数字 1 和 9 调查——但远没有例题那种戏剧性的特征。

> [!question]- 题 3 — 该不该适用本福特？
> (a) 一国全部市镇的人口；(b) 同上但限定在 5,000–20,000 之间；(c) 500 个连续发票号；(d) 3,000 个以 .99 结尾的零售价；(e) 2,000 个由学生"编造"的四位数；(f) 所有国家的国土面积；(g) 2,000 名成年男性的身高（cm）。
>
> > [!success]- 答案
> > **(a) 应当**——跨越多个数量级，乘法增长。
> > **(b) 不应当**——落在远不到一个数量级的区间内，而且有硬性下限。（已验证的类似案例：美国人口 $\ge 2{,}500$ 的居民点出现偏离，只有 19% 以 1 开头，却有 20% 以 2 开头。）
> > **(c) 不应当**——顺序指定的编号。
> > **(d) 不应当**——受心理定价影响；预期第二位数字 9 会出现巨大尖峰。
> > **(e) 不应当**——编造出来的数字接近**均匀**（学生是糟糕的随机数生成器）。这正是反欺诈应用能成立的原因。
> > **(f) 合理但功效很弱**——跨度约 7 个数量级，但只有约 200 个取值，检验功效很低，且微型国家会带来干扰。
> > **(g) 不应当**——成年男性身高约 150–210 cm，即约 0.15 个数量级，兼具硬性上下限，且形状近似正态。

> [!question]- 题 4 — 前两位数字的概率
> (a) $P(\text{前两位} = 25)$？(b) $P(\text{前三位} = 314)$？
>
> > [!success]- 答案
> > **(a)** $P = \log_{10}(1 + 1/25) = \log_{10}(26/25) = \mathbf{0.01703}$。验算：$\log_{10}26 - \log_{10}25 = 1.414973 - 1.397940 = 0.017033$ ✔
> > **(b)** $P = \log_{10}(1 + 1/314) = \log_{10}(315/314) = \mathbf{0.001381}$。（全部 90 个两位数概率之和为 1。）注意 $P(25) = 1.70\%$ **高于**均匀值 $1/90 = 1.11\%$，而 $P(99) = 0.44\%$ 低于它——这是必然的。

> [!question]- 题 5 — 解释证明，以及为什么恰好是 30.1%
> 陈述尺度不变性定理并证明其实质性方向。为什么它会迫使数字 1 的概率取那个特定的 $0.30103$，而不只是"小数字更常见"？
>
> > [!success]- 答案
> > **定理。** 满足 $P(X=0)=0$ 的 $X$ 服从本福特，**当且仅当**对所有 $a>0$，$S(X)$ 与 $S(aX)$ 同分布。
> > **证明（⇐）** 令 $W = \log_{10}X \bmod 1$，则 $S(X) = 10^W$。取 $a = 10^s$，则 $\log_{10}(aX) = \log_{10}X + s$，故 $S(aX) = 10^{\langle W+s\rangle}$。于是尺度不变性等价于：$W$ 的分布对每一个圆周旋转 $w \mapsto \langle w+s\rangle$ 都不变。而 $\mathbb{R}/\mathbb{Z}$ 上对所有旋转都不变的概率测度**只有**归一化 Lebesgue（Haar）测度，故 $W \sim \mathrm{Uniform}[0,1)$。从而 $P(S(X)\le t) = P(W \le \log_{10}t) = \log_{10}t$。∎
> > **（⇒）** 若 $W$ 均匀，则对任意 $s$，$\langle W + s\rangle$ 仍均匀，故 $S(aX) \stackrel{d}{=} S(X)$。∎
> > **为什么恰好是 30.1%。** 对*所有*尺度变换都不变，意味着完全没有任何自由度：对数尺度必须是彻底平坦的。而对数尺度平坦，就意味着概率正比于**对数长度**——区间 $[1,2)$ 在对数尺度上占整个数量级 $[1,10)$ 的比例恰好是 $\log_{10}2 = 0.30103$。这个特定的无理数是被*迫使*出现的，没有任何拟合或选择的余地。同理 $[2,3)$ 得到 $\log_{10}(3/2) = 0.17609$，各段裂项相消后自动归一到 1。同样的论证也给出任意位数首位数字的完整联合分布。

> [!question]- 题 6 — Z 检验与多重比较
> 某审计员检查 $n = 1{,}000$ 笔支出，发现 340 笔的首位数字是 1。(a) 计算 $Z$ 与双侧 $p$ 值。(b) 在 5% 水平上显著吗？(c) 若同时对九个数字检验并做 Bonferroni 校正，它还显著吗？
>
> > [!success]- 答案
> > $p_{\text{期望}} = 0.30103$，$p_{\text{观测}} = 0.3400$。
> > $\mathrm{SE} = \sqrt{0.30103\times0.69897/1000} = \sqrt{0.0002104} = 0.014506$。
> > **(a)** $Z = 0.03897/0.014506 = \mathbf{2.687}$；双侧 $p = \mathbf{0.0072}$。
> > **(b) 显著**——$p = 0.0072 < 0.05$，数字 1 显著超量。
> > **(c) 不显著。** Bonferroni 给出单次检验 $\alpha = 0.05/9 = 0.00556$，即临界 $|Z| = 2.773$。由于 $2.687 < 2.773$，校正后数字 1 **不再**显著。审计结论会随多重比较的选择而翻转——所以阈值必须事先声明并如实报告。

> [!question]- 题 7 — 末位数字
> (a) 本福特定律对真实数据的**末位**数字预测什么？是谁证明的？(b) 某 3,128 笔工资数据的末位数字（0–9）频数为 412, 355, 388, 374, 361, **90**, 342, 349, 336, **121**。计算 $\chi^2$（df = 9）并解读。(c) 为什么末位检验往往比首位检验更锐利？
>
> > [!success]- 答案
> > **(a)** 末位应当**均匀，各约 10%**。这一点由 Benford 本人在 1938 年论文中证明：第 $q$ 位上某数字的频率"趋于对 0,1,…,9 各数字相等"，即 $F_q = 0.1$。本福特定律是**首位**定律，不适用于末位。
> > **(b)** 每个数字期望 $= 3128/10 = 312.8$。
> > 各项：0: $99.2^2/312.8 = 31.46$；1: $42.2^2/312.8 = 5.69$；2: $75.2^2/312.8 = 18.08$；3: $61.2^2/312.8 = 11.97$；4: $48.2^2/312.8 = 7.43$；5: $222.8^2/312.8 = 158.70$；6: $29.2^2/312.8 = 2.73$；7: $36.2^2/312.8 = 4.19$；8: $23.2^2/312.8 = 1.72$；9: $191.8^2/312.8 = 117.61$。
> > $\chi^2 = \mathbf{359.57}$，df = 9（临界 16.919）→ **决定性地非均匀**。
> > 解读：数字 **0** 严重超量（412 对 313），而 **5**（90）与 **9**（121）急剧偏少——这是典型的**凑整 / 数字偏好**特征。金额被凑整成以 0 结尾，真实的 5 和 9 则消失了。
> > **(c)** 因为调整一笔金额通常会保留其数量级，也就保留了首位数字——所以首位往往看起来仍然正常。而操纵会在细结构上暴露：凑整把末位数字挤向 0，并从 5 和 9 移开。这正是 Diekmann 的发现（即使是被编造的数据，首位也**近似**本福特，而**更高位**才偏离）。**注意：** 真实数据也会出现末位偏好，所以末位异常说明存在**人为凑整**，并不自动等于舞弊。

> [!question]- 题 8 — 等分布
> (a) 证明 $2^n$ 服从本福特定律。(b) 说明 $10^{n/2}$ 不服从，并解释这对"稠密性"的启示。(c) $10^n$ 呢？$10^{n/100}$ 呢？
>
> > [!success]- 答案
> > **(a)** 序列服从本福特当且仅当 $\{\log_{10}|x_n|\}$ 模 1 等分布。此处 $\log_{10}2^n = n\log_{10}2$。Weyl 判据：$(na)$ 模 1 等分布**当且仅当** $a$ 为无理数。而 $\log_{10}2$ 是无理数——若 $\log_{10}2 = p/q$，则 $10^p = 2^q$，即 $2^p5^p = 2^q$，迫使 $p=0$，矛盾。故 $2^n$ 服从本福特定律。∎（在 $n = 1..2000$ 上，各数字频率与理论值偏差不超过 $0.0013$。）
> > **(b)** $\{\log_{10}10^{n/2}\} = \{n/2\} \in \{0, \tfrac12\}$——只能取两个值，故不满足模 1 等分布，$10^{n/2}$ **不**服从本福特。**启示：** 这里小数部分根本没有铺满 $[0,1)$。更微妙的例子是 $10^{n/100}$：它的小数部分确实填满了一个 100 点的网格（看起来稠密，数值上非常接近本福特），但依然不是精确的本福特——因为等分布严格强于稠密性/近似填满。
> > **(c)** $10^n$：$\{n\} = 0$ 恒成立 → **不是**本福特。$10^{n/100}$：同样**不是精确**本福特（10 的有理次幂），但非常接近。一般规律：$k^n$ 服从本福特当且仅当 $\log_{10}k$ 为无理数，故 $2^n, 3^n, 5^n, 7^n$ 符合，而 $10^n, 100^n, 10^{n/2}$ 不符合。

## 12. 参考文献

- S. Newcomb, "Note on the frequency of use of the different digits in natural numbers", *American Journal of Mathematics* **4**(1/4), 1881, pp. 39–40. DOI 10.2307/2369148.
- F. Benford, "The Law of Anomalous Numbers", *Proceedings of the American Philosophical Society* **78**(4), 1938, pp. 551–572. [JSTOR 984802](https://www.jstor.org/stable/984802)
- R. S. Pinkham, "On the distribution of first significant digits", *Annals of Mathematical Statistics* **32**(4), 1961, pp. 1223–1230. DOI 10.1214/aoms/1177704862.
- P. Diaconis, "The distribution of leading digits and uniform distribution mod 1", *Annals of Probability* **5**(1), 1977, pp. 72–81. DOI 10.1214/aop/1176995891.
- T. P. Hill, "A statistical derivation of the significant-digit law", *Statistical Science* **10**(4), 1995, pp. 354–363. DOI 10.1214/ss/1177009869.
- T. P. Hill, "Base-invariance implies Benford's law", *Proceedings of the AMS* **123**(3), 1995, pp. 887–895. DOI 10.2307/2160815.
- A. Berger & T. P. Hill, *An Introduction to Benford's Law*, Princeton University Press, 2015. ISBN 978-0-691-16306-2.
- A. Berger & T. P. Hill, "The mathematics of Benford's law: a primer", *Statistical Methods & Applications* **30**(3), 2020, pp. 779–795. [arXiv:1909.07527](https://arxiv.org/abs/1909.07527) —— 获取精确定理表述的最佳免费资料。
- A. Diekmann, "Not the first digit! Using Benford's law to detect fraudulent scientific data", *Journal of Applied Statistics* **34**(3), 2007, pp. 321–329. DOI 10.1080/02664760601004940.
- M. Nigrini, *Benford's Law: Applications for Forensic Accounting, Auditing, and Fraud Detection*, Wiley, 2012.
- M. Nigrini & L. Mittermaier, "The use of Benford's law as an aid in analytical procedures", *Auditing: A Journal of Practice & Theory* **16**(2), 1997, pp. 52–67.
- P. Drake & M. Nigrini, "Computer assisted analytical procedures using Benford's law", *Journal of Accounting Education* **18**(2), 2000, pp. 127–146.
- C. Carslaw, "Anomalies in income numbers: evidence of goal oriented behavior", *The Accounting Review* **63**(2), 1988, pp. 321–327.
- J. Thomas, "Unusual patterns in reported earnings", *The Accounting Review* **64**(4), 1989, pp. 737–787.
- L. Pietronero, E. Tosatti, V. Tosatti & A. Vespignani, "Explaining the uneven distribution of numbers in nature: the laws of Benford and Zipf", *Physica A* **293**(1–2), 2001, pp. 297–304. [arXiv:cond-mat/9808305](https://arxiv.org/abs/cond-mat/9808305)
- J. Deckert, M. Myagkov & P. Ordeshook, "Benford's Law and the detection of election fraud", *Political Analysis* **19**(3), 2011, pp. 245–268.
- R. Cerqueti & C. Lupi, "Severe testing of Benford's law", [arXiv:2202.05237](https://arxiv.org/abs/2202.05237) —— 卡方"功效过大"问题与 MAD 的渐近理论。
- W. K. T. Cho & B. J. Gaines, "Breaking the (Benford) law: statistical fraud detection in campaign finance", *The American Statistician* **61**(3), 2007, pp. 218–223.
- Wikipedia, [Benford's law](https://en.wikipedia.org/wiki/Benford%27s_law)
