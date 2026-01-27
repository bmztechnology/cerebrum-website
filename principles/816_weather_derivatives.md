# Weather Derivatives HDD and CDD

## I. Executive Summary

**Weather Risk** affects 30% of global GDP (Energy, Ag, Tourism). **Weather Derivatives** (CME) allow hedging temperature, rainfall, and snowfall. The underlying indices are **Heating Degree Days (HDD)** and **Cooling Degree Days (CDD)**. Unlike other assets, Weather is **Mean Reverting** (Climate) but has trends (Climate Change). Pricing relies on **Actuarial Models** (Burn Analysis) rather than Black-Scholes.

## II. Formal Definitions

### Definition 2.1 (HDD / CDD)
Base Temp = $65^\circ F$ ($18^\circ C$).
If $T_{avg} < 65$: $HDD = 65 - T_{avg}$. (Cold day, Heating demand).
If $T_{avg} > 65$: $CDD = T_{avg} - 65$. (Hot day, AC demand).
Contract value = $\$20 \times \sum (HDD)$ over month.

### Definition 2.2 (Payout Structure)
Swap, Call, Put on HDD Index.
**Gas Utility:** Fears warm winter (Low sales). Buys HDD Put (Pays if HDD low).
**Electric Utility:** Fears cool summer (Low AC sales). Buys CDD Put.
**Ski Resort:** Buys "Snowfall Put" or "Temp Call" (Rain ruins snow).

## III. Theoretical Framework

### 3.1 Pricing Puzzle
Underlying (Temperature) is not tradable.
Cannot "Store" temperature. No "Cost of Carry."
No Arb-free pricing.
Market Price of Risk (MPR) determined by Supply/Demand imbalance.
Reinsurers (Swiss Re) sell protection to Utilities.

### 3.2 Climate Change Trend
HDD trend is down (Warmer winters).
CDD trend is up (Hotter summers).
Pricing must adjust historical averages (Detrending).
"Normal" is a moving target (10-year vs 30-year average).

## IV. Strategic Applications

### 4.1 "Quanto" Energy Trades
Power Plant Profit = $(Price - Cost) \times Volume$.
Volume depends on Weather. Price depends on Weather.
Double Exposure.
Hedge with "Weather-Triggered Power Option."
Pays only if Temp > 90 AND Power Price > \$100.
Cheaper than protecting both separately.

### 4.2 Catastrophe Bonds (Cat Bonds)
Hurricane risk.
Bond pays coupon.
If Hurricane hits Florida (Wind speed > X), Principal wiped out.
Uncorrelated yield for investors.
Pricing model: NHC Forecast tracks.

## V. Exercises

**Exercise 1 (The El Niño Bet):**
Forecast: Strong El Niño.
Impact: Mild Winter in North US (Bearish Gas). Wet South.
Trade: Short NG Futures. Short HDD contracts. Long Ags?
Macro-Weather strategy.

**Exercise 2 (Basis Risk):**
Contract at LaGuardia (LGA).
Utility in Westchester (20 miles away).
Temp correlation 0.99.
Good hedge.
Contract at Chicago (ORD).
Utility in Texas.
Correlation 0.2. Base hedge.

## VI. References
-   Jewson, S. *Weather Derivatives Valuation*.
-   Dischel, B. *Climate Risk and Weather Derivatives*.
