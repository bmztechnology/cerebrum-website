# ADRs and Cross Border Arbitrage

## I. Executive Summary

**American Depositary Receipts (ADRs)** allow US investors to buy foreign stocks (Alibaba, TSMC) on NYSE. The ADR represents a number of underlying shares held by a custodian bank. Arbitrage keeps the **ADR Price** aligned with the **Local Price** (adjusted for FX). When markets are closed (Time Zone gap), ADRs act as a **Price Discovery** vehicle for the local open.

## II. Formal Definitions

### Definition 2.1 (The ADR Ratio)
1 ADR = N Local Shares.
TSMC (TSM): 1 ADR = 5 Taiwan Shares (2330.TW).
$$ Price_{ADR} \approx Price_{Local} \times N \times FX_{Rate} $$
Spread = Deviation from this equation.
Fungibility: Can you convert ADR $\leftrightarrow$ Local?
If yes: Hard Arb.
If no (Indian IDRs): Soft Arb (Correlation trade).

### Definition 2.2 (Sidedness)
Who drives the price?
**Home Market Drive:** Samsung (Korea) drives the GDR.
**ADR Drive:** Alibaba (US) liquidity > HK liquidity?
The most liquid market discovers the price.

## III. Theoretical Framework

### 3.1 Time Zone Arbitrage
US Market closes 4pm ET.
News happens (Earnings).
Japanese market opens 8pm ET.
Sony ADR moves in after-hours?
Or waiting for Tokyo open?
HFTs model the "Fair Value" of the closed market based on correlated assets (ETFs/Futures) that are trading.

### 3.2 Dual Class Discount
GDR (Global Depositary Receipt in London) vs Local Share.
Russian GDRs (Gazprom) traded at massive discount to Moscow shares in 2022 (pre-delisting).
Reason: Fungibility broken. Sanctions prevented conversion.
"Trap risk."

## IV. Strategic Applications

### 4.1 The VIE (Variable Interest Entity) Risk
Chinese Tech ADRs (BABA).
Don't own Alibaba China.
Own a Cayman Islands shell company with a contract with Alibaba China.
China could annul the contract.
ADR value $\to$ 0.
Underlying value $\to$ Unchanged.
Regulatory Tail Risk.

### 4.2 Dividend Tax Arbitrage
Withholding tax rates differ.
UK: 0%. France 30%.
ADR holder receives Net Dividend.
Custodian handles tax reclamation.
"Cum-Ex" trading scares (European tax fraud scandal regarding dividend arb).

## V. Exercises

**Exercise 1 (Tata Motors Differential):**
Tata Motors (India) vs Tata Motors (ADR).
India has foreign ownership limits.
ADR trades at Premium (Scarcity).
Cannot Arb (Cannot buy local to convert to ADR if limit hit).
Premium persists.

**Exercise 2 (Delisting Threat):**
HFCAA (Holding Foreign Companies Accountable Act).
US threatens to delist Chinese ADRs if audit papers not shown.
Price discount expands.
Geopolitics driving the Microstructure spread.

## VI. References
-   Karolyi, G. *The Economics of Depositary Receipts*.
-   Bank of New York Mellon. *ADR Market Review*.
