# Portfolio Insurance Put: The Floor

## I. Executive Summary

**Portfolio Insurance** aims to limit the downside of a portfolio to a fixed floor (e.g., 90% of value) while retaining upside. The most direct method is buying **Protective Puts**. To reduce the cost (which creates "drag"), investors often use **Collars** (Buy Put / Sell Call) or **Put Spreads**. The cost of insurance rises dramatically during crashes (Skew steepens), making it expensive exactly when needed.

## II. Formal Definitions

### Definition 2.1 (Protective Put)
Portfolio + Long Put.
Payoff profile $\approx$ Long Call.
Cost = Put Premium ($P$).
Drag = $P$ per year.
If Vol = 20%, 1Y ATM Put cost $\approx$ 8%.
Too expensive for most long-only funds.

### Definition 2.2 (The Collar)
Buy Put (Strike 90). Sell Call (Strike 110).
"Zero Cost Collar" if Prices match.
You give up upside > 110.
You are protected < 90.
You live in the 90-110 tunnel.
Standard strategy for hedging concentrated stock positions (Executives).

## III. Theoretical Framework

### 3.1 Skew Cost
Markets crash down $\implies$ Puts are expensive (High Vol).
Markets drift up $\implies$ Calls are cheap (Low Vol).
Financing a Put with a Call is often not truly "Zero Cost" in probability terms.
You give up "Cheap" probability (Upside) to buy "Expensive" probability (Downside).

### 3.2 Monetization
Executive has \$100M in Stock. Restricted sales.
Enters Collar with Investment Bank.
Bank borrows shares, shorts them to hedge the collar options.
Executive gets "Loan" against the hedged position (LTV 90%).
Monetization without triggering a tax sale (in some eras).

## IV. Strategic Applications

### 4.1 Put Spread Collar
Buy Put 90. Sell Put 80. (Protected from -10% to -20%).
Sell Call 110.
Cheaper structure.
Exposure to extreme tail risk (< 80).
"Buffer" protection.

### 4.2 Rolling Insurance
Buy 3M Puts. Roll every 3 months.
Costly if market stays flat.
"Bleed."
Some funds roll 1M puts (cheapter theta) but higher transaction maintenance.
Universa (Spitznagel) strategy: Buy deep OTM puts for pennies. Expect 10,000% return in crash.

## V. Exercises

**Exercise 1 (Path Dependency):**
If you use a Collar. Market goes to 120.
You are called away at 110.
You lose the shares.
Hedge works perfectly, but you regret the missing 10%.

**Exercise 2 (Implied Vol Crush):**
Buy Puts before event (Earnings).
Event happens. Stock drops 2%.
Implied Vol drops 10%.
Put value *drops* despite favorable direction.
"Vega crushed Delta."

## VI. References
-   Leland, H. *Who Should Buy Portfolio Insurance?*.
-   CBOE. *Option Settlement Mechanics*.
