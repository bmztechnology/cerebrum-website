# The Winner's Curse Auctions

## I. Executive Summary

The **Winner's Curse** (Capen, Clapp, Campbell 1971) states that in common-value auctions (e.g., Oil rights, Spectrum auctions) with incomplete information, the winner tends to **Overpay**. The winner is the bidder with the most optimistic (and likely erroneous) estimate of value. Rational bidders must "shade" their bids downwards to account for this bias.

## II. Formal Definitions

### Definition 2.1 (Common Value Auction)
Object has same value $V$ to everyone (e.g., Barrels of oil underground).
Bidders have signal $x_i = V + \epsilon_i$.
Winner is $\max(x_i)$.
Since $\max(\epsilon_i)$ is positive, the winner likely overestimates $V$.
Winning conveys bad news: "Everyone else thinks it's worth less than I do."

### Definition 2.2 (Bid Shading)
Optimal Strategy: $Bid = E[V | x_i] - \text{Shade}$.
Shade increases with the number of bidders ($N$).
More bidders $\implies$ Higher chance that the highest signal is an outlier.
Curse worsens as competition heats up.

## III. Theoretical Framework

### 3.1 Oil Lease Auctions
Origin of the theory (1970s Gulf of Mexico).
Winning firms generated lower ROI than losing firms.
"We won the auction, but lost money."
Cognitive failure to condition on the event of winning.

### 3.2 M&A Battles
Corporate takeovers.
CEO hubris + Auction fever.
Acquirer stock price usually drops on announcement.
Target stock price rises.
Wealth transfer from Acquirer to Target. The Winner is Cursed.

## IV. Strategic Applications

### 4.1 IPO Allocations
Rock's Model (again).
If you get full allocation in an IPO, it's because nobody else wanted it.
You "Won" the auction for shares.
Winner's Curse implies you bought a Lemon.
Be wary of easy fills.

### 4.2 Sniping
eBay.
Bidding at the last second.
Prevents a "Bidding War" (escalation of commitment).
Avoids revealing information to other bidders.
Algorithmic solution to behavioral trap.

## V. Exercises

**Exercise 1 (The Jar of Coins):**
Auction off a jar of coins.
Value is fixed.
Average bid often accurate.
Winning bid is always too high.
Demonstrates the curse in real time.

**Exercise 2 (Spectrum Auctions):**
Govt auctions 5G spectrum.
Billions at stake.
Telecoms hire Game Theorists to help them bid effectively (and avoid the curse).
Design of auction (Open vs Sealed) impacts the curse magnitude.

## VI. References
-   Thaler, R. *The Winner's Curse*.
-   Milgrom, P. & Weber, R. *A Theory of Auctions and Competitive Bidding*.
