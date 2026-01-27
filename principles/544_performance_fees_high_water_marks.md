# Performance Fees High Water Marks: Asymmetry

## I. Executive Summary

**Performance Fees** (Incentive Fees) align manager interests with investors, but differ structurally from symmetric payoffs. The standard **"2 and 20"** model ($2\%$ Management Fee, $20\%$ of Profits) features a **High Water Mark (HWM)**: losses must be recovered before new fees are paid. This structure acts as a **Call Option** on the portfolio value, incentivizing risk-taking (volatility) when the manager is below the HWM or deep in the money.

## II. Formal Definitions

### Definition 2.1 (The Payoff)
$$ Fee = \max(0, 0.20 \times (NAV_t - HWM)) $$
$HWM = \max(NAV_{0...t-1})$.
Manager gets 20% of the Upside.
Client bears 100% of the Downside (Manager fee is 0).
Convex payoff.

### Definition 2.2 (Hurdle Rate)
Preferred Return (e.g., 8% or Cash + 3%).
Manager only collects Carry after Investor receives Hurdle.
Hard Hurdle: Fee only on excess.
Soft Hurdle: Fee on everything once Hurdle breached (Catch-up clause).

## III. Theoretical Framework

### 3.1 Option Value
The fee is a Call Option on AUM.
Value of Call increase with Volatility.
Manager incentive: Increase Volatility.
Especially if fund is "Underwater" (Below HWM).
"Gambling for resurrection": High risk bets to get back to HWM.
If they fail, fund closes (Option expires worthless). Manager starts new fund.

### 3.2 Crystallization
Fees paid annually.
HWM resets annually? No, perpetual.
But realized cash is paid out.
If Manager makes 50% in Year 1 (Paid huge fee) and loses 50% in Year 2.
Client is down. Manager kept the fee.
**Clawback** provisions allow client to recover past fees.

## IV. Strategic Applications

### 4.1 First Loss Capital
Manager puts up 10% of capital.
Takes first 10% of losses.
In exchange for higher fee (50%?).
Symmetric alignment.
Reduces moral hazard.

### 4.2 Fulcrum Fees
Mutual Fund regulation.
Fee must sway up AND down.
Base 1%.
If beat benchmark +10%, Fee 1.5%.
If lag benchmark -10%, Fee 0.5%.
Symmetric. Rarely used in Hedge Funds.

## V. Exercises

**Exercise 1 (Pre-Tax):**
Hedge Fund returns are often reported Net of Fees but Gross of Tax.
Tax efficiency of the fee structure (Carried Interest vs Ordinary Income).
Managers fight to characterize fees as Capital Gains.

**Exercise 2 (Netting Risk):**
Multi-Strategy Fund.
PM A makes \$10M. PM B loses \$10M.
Fund is flat.
Founder pays PM A bonus?
Yes.
Founder takes the loss on PM B.
"Netting Risk" causes fund implosion.

## VI. References
-   Goetzmann, W. *High-Water Marks and Hedge Fund Management Contracts*.
-   CFA Institute. *Hedge Fund Fee Structures*.
