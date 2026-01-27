# Order Book Heatmaps: Visualizing Liquidity

## I. Executive Summary

Traditional Candle and DOM (Depth of Market) charts show price and current volume. **Heatmaps** (Bookmap) add the **Time Dimension** to the Limit Order Book. They color-code the history of limit orders—showing where liquidity sat, where it was pulled (spoofing), and how price reacted to these walls. It is the X-Ray of market intent.

## II. Formal Definitions

### Definition 2.1 (The Heatmap Projection)
-   X-Axis: Time.
-   Y-Axis: Price.
-   Z-Axis (Color): Size of Limit Orders at that price/time coordinate.
-   Structure: Bright Red/White = Massive Wall. Blue/Black = Vacuum.

### Definition 2.2 (Volume Dots)
Overlay actual trades (Market Orders) as bubbles.
Size of Bubble = Volume.
Color = Aggressor Side (Green Buy, Red Sell).

## III. Theoretical Framework

### 3.1 Pulling & Stacking
-   **Stacking:** Liquidity gets brighter. Market Maker is adding size. Support is hardening.
-   **Pulling:** Liquidity fades just before price hits it. (The "Rug Pull").
Heatmaps make this visible instantly.

### 3.2 The Vacuum Effect
Price moves rapidly through dark zones (Low Liquidity).
Price stops at bright zones (High Liquidity).
Analogy: Price is water; Liquidity is the terrain.
Price flows to the path of least resistance.

## IV. Strategic Applications

### 4.1 Absorption Detection
Price hits a Red Wall. Aggressive Buyers (Green Bubbles) attack it.
Price does NOT move up.
The Wall is "Absorbing" the buying.
**Signal:** Reversal imminent. The Buyers are trapped.

### 4.2 Fading the Breakout
Retail sees a "Breakout" above resistance.
Heatmap shows NO liquidity above the resistance (Vacuum).
Price shoots up, triggers stops, then finds no support and falls back.
Structure: "Stop Run."
Heatmap confirms if the move is supported by limit orders or just thin air.

## V. Exercises

**Exercise 1 (Interpretation):**
A Limit Buy order chases the price up (Moving support).
This is usually a single large player trying to force price up.
If price turns, this line will vanish (Spoof).
Do not trust moving lines. Trust stationary lines.

**Exercise 2 (Stop Fishing):**
A cluster of liquidity below recent lows.
These are Sell Stops (Liquidity for a Smart Buyer).
Price dips exactly into the cluster, triggers the stops, fills the Whale's Buy Limit, and rallies.
Heatmap shows the "Collision" clearly.

## VI. References
-   Bookmap Education / Documentation (Proprietary visual theory).
-   Top-Tier Prop Firm training manuals (Floors rely on this).
