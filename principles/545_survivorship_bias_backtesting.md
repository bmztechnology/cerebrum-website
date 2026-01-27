# Survivorship Bias Backtesting: The Graveyard

## I. Executive Summary

**Survivorship Bias** occurs when performance analysis excludes failed or defunct entities ("The Graveyard"), analyzing only those that "survived." This significantly inflates historical returns (since failed funds usually had poor returns). In backtesting, using a database that lacks delisted stocks or closed funds creates a **Look-Ahead Bias** that renders the strategy results unrealistically profitable.

## II. Formal Definitions

### Definition 2.1 (The Quantifier)
Hedge Fund Index Return (Reported) $\approx$ 10%.
True Return (including dead funds) $\approx$ 7%.
Bias Magnitude: 300bps per year.
Standard Mutual Fund Bias: 100bps per year.

### Definition 2.2 (Data Cleaning)
Clean Database: Includes "Dead" tickers.
Enron (ENE) is in the 2000 dataset.
Backtest buys Enron. Enron goes to 0.
Biased Database: Removes Enron.
Backtest does not buy Enron. Performance looks great.
"I would have avoided Enron." No, you wouldn't have.

## III. Theoretical Framework

### 3.1 Reverse Survivorship
Sometimes usually bad companies delist (Bankruptcy).
Sometimes GOOD companies delist (Merger/Acquisition at premium).
If database drops acquired companies, bias is *downward*?
Rare. Usually bankruptcy dominates.
Acquired companies stay in dataset until final price. bankruptcies disappear.

### 3.2 Incubation Bias
Fund family launches 100 funds with seed capital.
5 perform well (luck). 95 fail.
They close the 95. Open the 5 to public.
"Look at our amazing 5-year track record!"
Track record is real, but selected ex-post.
"Backfill Bias": Adding the incubation history to the database only after success.

## IV. Strategic Applications

### 4.1 Fund Selection danger
"Morningstar 5 Star Funds."
To be 5 stars, you must exist for 5 years.
You are selecting from survivors.
Mean reversion often implies 5-Star funds become 1-Star funds.

### 4.2 Stock Screens
"Buy stocks with P/E < 10."
Run on today's S&P 500 members.
Stocks that were cheap 10 years ago and went bankrupt are NOT in today's S&P 500.
Results will be spectacular. And fake.
Must use "Point-in-Time" constituents.

## V. Exercises

**Exercise 1 (The Hedge Fund Index):**
HFRI Index.
Self-reporting.
Funds stop reporting when they blow up.
Returns are smoothed.
Vol is understated.
Beta is understated.
Bias is massive.

**Exercise 2 (Long Term History):**
"Stocks for the Long Run."
US Data.
US is a survivor country.
Russia (1917), China (1949), Germany (1945) equity markets went to zero.
"Global Survivorship Bias."

## VI. References
-   Brown, S. *Survivorship Bias in Performance Studies*.
-   Malkiel, B. *Returns form Investing in Equity Mutual Funds*.
