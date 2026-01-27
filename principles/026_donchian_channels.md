# Donchian Channels: Breakout Trading

## I. Introduction

Donchian Channels, developed by Richard Donchian, are one of the oldest and simplest trend-following systems. They form the basis of the famous Turtle Trading system.

## II. Mathematical Definition

### Definition 2.1 (Upper Channel)
$$Upper_n(t) = \max_{i=1}^{n} H_{t-i}$$

Highest high over past n periods.

### Definition 2.2 (Lower Channel)
$$Lower_n(t) = \min_{i=1}^{n} L_{t-i}$$

Lowest low over past n periods.

### Definition 2.3 (Middle Line)
$$Middle_n(t) = \frac{Upper_n(t) + Lower_n(t)}{2}$$

### Definition 2.4 (Channel Width)
$$Width_n(t) = Upper_n(t) - Lower_n(t)$$

## III. Trading Signals

### 3.1 Basic Breakout Strategy
**Buy signal:** Price breaks above Upper_n
$$C_t > Upper_n(t-1)$$

**Sell signal:** Price breaks below Lower_n
$$C_t < Lower_n(t-1)$$

### 3.2 Exit Strategy
**Exit long:** Price touches Lower_n (or shorter period Lower_m)
**Exit short:** Price touches Upper_n (or shorter period Upper_m)

### 3.3 Turtle Trading Parameters
- Entry: 20-day breakout (n=20)
- Exit: 10-day opposite breakout (m=10)

## IV. Properties

### Theorem 4.1 (Channel Behavior in Trends)
In strong uptrend: Price hugs Upper channel
In strong downtrend: Price hugs Lower channel

### 4.2 Volatility Expansion
$$\frac{dWidth}{dt} > 0 \Rightarrow Volatility\ Increasing$$

Expanding channels indicate trend acceleration.

## V. Comparison with Bollinger Bands

| Feature | Donchian | Bollinger |
|---------|----------|-----------|
| Construction | Max/Min | Mean ± σ |
| Sensitivity | Extreme-based | Volatility-based |
| Breakout signal | Stronger | Weaker |

## VI. Exercises

**Exercise 1:** Calculate Upper(10) and Lower(10) for the last 10 highs/lows.

**Exercise 2:** Design a Donchian breakout strategy with 1:1 risk-reward.

**Exercise 3:** Why might shorter exit periods (10) be used vs entry periods (20)?

## VII. References
- Donchian, R. (1960). High Finance in Copper
- Faith, C. (2007). Way of the Turtle
