# Counterparty Credit Risk CVA: Dealer Default

## I. Executive Summary

**Counterparty Credit Risk (CCR)** is the risk that the counterparty to a derivative transaction defaults before final settlement. Unlike a loan (where notional is at risk), in derivatives, the exposure varies with market moves (**Potential Future Exposure**). **Credit Valuation Adjustment (CVA)** is the market price of this risk, deducted from the trade value. Post-2008, mandatory **Central Clearing** (CCP) reduced bilateral CCR but concentrated it in Clearing Houses.

## II. Formal Definitions

### Definition 2.1 (CVA Formula)
$$ CVA \approx (1-R) \sum_{t=1}^T EPE(t) \times PD(t) $$
-   $R$: Recovery Rate (40%).
-   $EPE(t)$: Expected Positive Exposure at time $t$ (Option pricing problem).
-   $PD(t)$: Probability of Default (from CDS Spreads).
If I buy a Swap and Im the Money (\$10M). Dealer B defaults. I lose \$10M.
CVA prices this expected loss.

### Definition 2.2 (Wrong Way Risk - WWR)
Correlation between EPE and PD.
-   **Specific WWR:** Buying Put Option on Lehman Brothers *from* Lehman Brothers. If Option ITM (Exposure High), Lehman Default Prob is 100% (PD High). Exposure and Default are perfectly correlated.
-   **General WWR:** Emerging Market Swap. If Currency crashes $\implies$ Swap ITM for me $\implies$ Country defaults.

## III. Theoretical Framework

### 3.1 DVA (Debit Valuation Adjustment)
The flip side. My credit risk to the counterparty.
If *I* am risky, my liability is worth less.
Accounting Gain?
"I made profit because my credit spread widened."
Controversial but standard accounting (FAS 157).
$Price = RiskFreeValue - CVA + DVA$.

### 3.2 FVA (Funding Valuation Adjustment)
Cost of funding the uncollateralized margin.
Derivatives desks act as internal banks.

## IV. Strategic Applications

### 4.1 CSA (Credit Support Annex)
Legal agreement to post collateral daily.
Reduces EPE to almost zero (only overnight gap risk).
"Clean Price" (Zero CVA) applies to fully collateralized trades.

### 4.2 Novation
Moving trade to a CCP (LCH, ICE).
CCP is the counterparty.
CCP credit quality is "AAA."
Standardizes risk.
Transforms Counterparty Risk into Liquidity Risk (Margin Calls).

## V. Exercises

**Exercise 1 (Basel III CVA Charge):**
Capital requirement for CVA volatility.
Banks hedge CVA using CDS.
Buying CDS on Counterparty.

**Exercise 2 (Settlement Risk):**
Herstatt Risk.
FX settlement. I pay EUR, you pay USD.
I pay, you default before paying.
CLS (Continuous Linked Settlement) eliminates this PVP (Payment vs Payment).

## VI. References
-   Gregory, J. *The xVA Challenge*.
-   Brigo, D. *Counterparty Credit Risk, Collateral and Funding*.
