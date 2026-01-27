# Mortgage Servicing Rights MSR: Negative Duration

## I. Executive Summary

**Mortgage Servicing Rights (MSRs)** represent the contractual right to service a pool of mortgages (collect payments, handle taxes/insurance) in exchange for a fee (typically 25 bps of unpaid principal balance). MSRs are a unique asset class with **Negative Duration**: When rates rise, prepayments slow down, the servicing stream lasts longer, and the MSR increases in value. They are used to hedge origination pipelines.

## II. Formal Definitions

### Definition 2.1 (The Strip)
MSR is an **Interest Only (IO)** strip.
Value = PV(Servicing Fee) - PV(Cost to Service).
Key Variable: **CPR (Prepayment Speed)**.
-   Rates Down $\implies$ Refi Wave $\implies$ CPR Spikes $\implies$ MSR vanishes (Prepaid).
-   Rates Up $\implies$ Refi stops $\implies$ CPR drops $\implies$ MSR extends.

### Definition 2.2 (Hedging Ratio)
MSR hedges Mortgage Origination.
-   **Origination:** Long Duration (New loans created). Rates Up $\implies$ Volume drops (Bad).
-   **MSR:** Short Duration. Rates Up $\implies$ Value up (Good).
Combined: "Natural Hedge" for Banks/Non-banks (like Rocket Mortgage).

## III. Theoretical Framework

### 3.1 Valuation Multiples
Quoted as multiple of servicing fee. e.g., 4.0x.
Value / (Fee * UPB).
High Rates $\implies$ Multiple expands (5.0x).
Low Rates $\implies$ Multiple compresses (2.0x).

### 3.2 Convexity Profile
MSR has **Negative Convexity** extreme.
If rates drop, value crashes (Prepayment wall).
If rates rise, value caps out (CPR can't go below 0, Duration hits max).
Hedging MSR requires buying Receiver Swaptions (buying convexity).

## IV. Strategic Applications

### 4.1 The Non-Bank Shift
Banks (Basel III) faced high capital charges for holding MSRs.
Sold MSRs to Non-Banks (Mr. Cooper, Rithm).
Shadow banking concentration risk.

### 4.2 Recapture
Servicer has the first look at the borrower.
If borrower refinances, Servicer tries to "Recapture" the new loan.
Reduces the loss of the MSR asset (replaces old MSR with new MSR).
Recapture rate is a key valuation input.

## V. Exercises

**Exercise 1 (Floats):**
Servicer holds the P&I payment for a few days before remitting to MBS holder.
Earns interest on the "Float."
Rates Up $\implies$ Float Income Up.
Another source of positive correlation to rates.

**Exercise 2 (Servicing Advances):**
If borrower defaults, Servicer must advance P&I to bondholders.
Liquidity crunch.
"Advance Receivables" financing required.
Credit risk of the MSR.

## VI. References
-   NERA. *Valuation of Mortgage Servicing Rights*.
-   MBA. *Mortgage Finance Basics*.
