# Volume Profiles and Auctions

## I. Executive Summary

**Volume Profiles** (Volume at Price) visualize the distribution of liquidity and acceptance. Unlike OHLC bars (Time based), Profiles show where value was agreed upon (**High Volume Nodes - HVN**) and where price was rejected (**Low Volume Nodes - LVN**). **Auctions** (Market Profile theory) treat the market as a mechanism searching for fair value, oscillating between Balance and Imbalance.

## II. Formal Definitions

### Definition 2.1 (POC - Point of Control)
The price level with the highest traded volume in the session.
Represents "Fair Value" for the day.
Magnet for price.
If price moves away from POC without volume ("Gateway"), it will usually revert to POC.

### Definition 2.2 (Value Area)
Range containing 70% (1 Std Dev) of the day's volume.
**VAH:** Value Area High.
**VAL:** Value Area Low.
Trading Rule: If price opens inside Value Area, expect chop (Range bound). If price opens outside (Initiative), expect Trend.

## III. Theoretical Framework

### 3.1 Steidlmayer's Market Profile
Chicago Board of Trade (CBOT) theory.
Auction Process:
1. **Test Up:** Any sellers?
2. **Test Down:** Any buyers?
3. **Find Balance:** High volume trade.
Trends occur when "Old Balance" is rejected and market seeks "New Balance."

### 3.2 Auction Market Theory (AMT)
Failed Auction: Price breaks a High, finds no buyers (Low volume), and reverses.
"Look above and fail."
Powerful reversal signal.
Success Auction: Price breaks High, Volume expands. Acceptance.

## IV. Strategic Applications

### 4.1 VWAP Anchoring
Anchoring VWAP to the HVN or Low/High of the profile.
"Who is in control?"
If Price > POC, Buyers in control.
If Price < POC, Sellers in control.

### 4.2 Composite Profiles
Merging 10 days of profiles.
Finding Long-Term HVNs.
"Support/Resistance" defined by Volume, not just Price pivots.
A "Thick" zone (HVN) is support. A "Thin" zone (LVN) is a vacuum (Price moves fast).

## V. Exercises

**Exercise 1 (The Gap Fill):**
Price gaps up past an LVN.
If it enters the LVN, it traverses it quickly to the next HVN.
"Repairing the structure."
Liquidity gaps must be filled.

**Exercise 2 (TPO Charts):**
Time Price Opportunity.
Representing profile with letters (A for first 30m, B for next...).
Old school method (pre-computer).
Still used by pit traders (and their algorithmic descendants) to visualize Auction progress.

## VI. References
-   Steidlmayer, P. *Steidlmayer on Markets*.
-   Dalton, J. *Mind Over Markets*.
