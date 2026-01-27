# Game Theory Nash Equilibrium

## I. Executive Summary

Markets are strategic interactions, not physical systems. **Game Theory** models how agents maximize utility considering *what other agents will do*. The **Nash Equilibrium** is the state where no player can improve by deviating unilaterally. In Finance, this explains **Herding**, **Runs**, and **Predatory Trading**.

## II. Formal Definitions

### Definition 2.1 (Nash Equilibrium)
Players $P_1, \dots, P_n$. Strategies $S_1, \dots, S_n$.
Profile $(S_1^*, \dots, S_n^*)$ is NE if:
$U_i(S_i^*, S_{-i}^*) \ge U_i(S_i, S_{-i}^*)$ for all $i$.
"Given what everyone else is doing, I'm doing the best I can."
Market Efficiency is a Nash Equilibrium of informed traders.

### Definition 2.2 (The Keynes Beauty Contest)
Guess 2/3 of the average guess.
Level 0: Random (50).
Level 1: 2/3 * 50 = 33.
Level 2: 2/3 * 33 = 22.
...
Level Infinity: 0 (Nash Equilibrium).
Experimental result: 22 (People only do 2 steps of recursion).
Trading is guessing how many steps of recursion the market has done.

## III. Theoretical Framework

### 3.1 Prisoner's Dilemma in Oligopoly
OPEC.
Cooperate: Cut production -> High Price.
Defect: Pump max -> Grab market share.
Nash Equilibrium: All Defect -> Low Price.
Requires "Cartel Enforcement" (repeated game tit-for-tat) to sustain cooperation.

### 3.2 Global Games (Morris & Shin)
Coordination Games.
Bank Run.
If I think you will run, I must run.
Fundamental: Bank is solvent.
Strategic: Bank is illiquid.
Small noise in information prevents synchronization?
Or triggers cascades?

## IV. Strategic Applications

### 4.1 Predatory Trading
Trader A knows Trader B must liquidate (Margin Call).
Trader A sells *before* Trader B.
Pushing price down.
Trader B executes at worse price.
Trader A buys back.
"Front-running the distress."
Nash Equilibrium where predators enforce the kill.

### 4.2 High Frequency Arms Race
Exchange speed.
Prisoner's Dilemma.
If I get faster, I win.
If you get faster, we are back to even, but we both paid for expensive microwave towers.
Result: Arms race to zero latency.
Socially wasteful?

## V. Exercises

**Exercise 1 (The Centipede Game):**
Pot of money grows.
Players take turns to "Take" or "Pass."
Backward induction says "Take immediately."
Reality: People pass for a while (Trust/Greed).
Bubbles are Centipede Games.

**Exercise 2 (Auction Theory):**
Winner's Curse.
If you win the auction for a block of stock, you probably overpaid.
Optimal Strategy: Bid less than your valuation (Shading).
Review of Google's Dutch Auction IPO.

## VI. References
-   Von Neumann, J. *Theory of Games and Economic Behavior*.
-   Tirole, J. *The Theory of Industrial Organization*.
