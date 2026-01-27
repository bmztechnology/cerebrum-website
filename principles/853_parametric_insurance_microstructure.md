# Parametric Insurance Microstructure

## I. Executive Summary

**Parametric Insurance** pays out based on a pre-defined **Data Trigger** (e.g., "Wind Speed > 100mph" or "Rainfall < 5mm"), rather than assessed losses. This eliminates the **Claims Adjustment** process/friction and **Moral Hazard**. While it introduces **Basis Risk** (Loss without Trigger, or Trigger without Loss), its microstructure allows for instantaneous settlement and coverage of "Uninsurable" risks.

## II. Formal Definitions

### Definition 2.1 (The Oracle Trigger)
Contract relies on Third Party Oracle (USGS, NOAA).
Payout Function $f(x)$:
If $x < Threshold$, Pay 0.
If $x \ge Threshold$, Pay Limit.
(Or Linear stepped payout).
No dispute possible. Code is Law logic applied to Insurance.

### Definition 2.2 (Basis Risk)
**Negative Basis Risk:** You suffer loss, but trigger doesn't hit (Earthquake magnitude 6.9, Threshold 7.0).
**Positive Basis Risk:** Trigger hits, you suffer no loss (Windfall).
Parametric covers the *proxy* of risk, not the *reality*.

## III. Theoretical Framework

### 3.1 Inuring to Benefit
Commercial Property policy acts as primary.
Parametric acts as "Deductible Filler" or "Immediate Liquidity."
Hotel in Caribbean: Needs cash *day after* storm to fix generator.
Indemnity policy pays in 6 months.
Parametric pays in 48 hours.
Liquidity bridge.

### 3.2 Agricultural Microinsurance
Kenya/India.
Satellite measures soil moisture.
If Drought, auto-pay farmers via MPESA.
Transaction cost of human adjuster > Value of policy.
Parametric + Mobile Money makes microinsurance viable.

## IV. Strategic Applications

### 4.1 Flight Delay Insurance
Smart Contract (Etherisc).
Connected to FlightStats API.
If Delay > 2 hours, pay 0.1 ETH.
Instant.
Customer experience alpha.

### 4.2 Pandemic Triggers
Descartes Underwriting.
Foot traffic data?
Hotel occupancy drop?
Defining the trigger is the hard part for complex risks.
"Non-Physical Business Interruption" (NDBI).

## V. Exercises

**Exercise 1 (The Hail Paradox):**
Hail is hyper-local.
Weather station is at Airport (10 miles away).
Station records no hail. Your car is destroyed.
Solution: Grid of sensors? Or Radar proxy?
Basis risk high in localized perils.

**Exercise 2 (Strike Protection):**
Logistics firm fears Port Strike.
Parametric Trigger: "Official declaration of strike by Union."
Pay \$1M per day.
Covers extra cost of air freight.

## VI. References
-   World Bank. *Parametric Insurance for Sovereign Risk*.
-   Swiss Re. *Parametric Solutions*.
