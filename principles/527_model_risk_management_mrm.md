# Model Risk Management MRM: Calibration

## I. Executive Summary

**Model Risk** is the potential for adverse consequences from decisions based on incorrect or misused model outputs. It arises from **Data problems**, **Conceptual errors** (Wrong assumptions), or **Implementation errors** (Coding bugs). Following the 2008 crisis (where Copula models failed), regulators (SR 11-7) mandated independent **Model Validation** groups to challenge, backtest, and stress-test all pricing and risk models.

## II. Formal Definitions

### Definition 2.1 (The Three Lines of Defense)
1.  **Developers (Quants/Traders):** Build and use the model. Own the risk.
2.  **Validators (MRM):** Independent challenge. Review math, code, and assumptions. Approve/Reject.
3.  **Audit:** Verify the process is followed.

### Definition 2.2 (Sources of Risk)
-   **Estimation Uncertainty:** Parameters (Vol, Corr) are estimates. Confidence intervals?
-   **Specification Error:** Assuming Normal distribution when Reality is Fat Tailed.
-   **Regime Change:** Model trained on 2010-2020 (Low Rate) fails in 2022 (High Rate).

## III. Theoretical Framework

### 3.1 Effective Challenge
Validators must replicate the model (Recode from scratch).
Compare results.
Sensitivity Analysis: "What if Vol is 500%?"
Benchmarking: Compare Black-Scholes to Local Volatility model.

### 3.2 Model Overlays
If model is known to be weak (e.g., ignores inflation), validators impose an **Overlay** (Add \$10M to VaR).
Temporary fix while model is redeveloped.
Accounting provisions.

## IV. Strategic Applications

### 4.1 AI/ML Model Risk
Black Box problem. Neural Nets.
Interpretability (SHAP values).
"Bias" in training data (Lending discrimination).
Regulators demand "Explainability."
Drift detection (Concept Drift).

### 4.2 Trading Models
Algo trading.
"Fat Finger" risk.
Knight Capital (\$440M loss in 45 mins).
Kill switches (Hard coded limits) are the ultimate MRM control.

## V. Exercises

**Exercise 1 (Calibration Risk):**
Model creates arbitrage?
Calibrate to market prices.
If market is wrong/illiquid, calibration force-fits the model to noise.
"Garbage In, Perfect Fit Out."

**Exercise 2 (Inventory of Models):**
Banks track thousands of models.
Spreadsheets count as models (EUC - End User Computing).
Excel errors are a massive source of operational risk (London Whale).

## VI. References
-   Federal Reserve. *SR 11-7: Guidance on Model Risk Management*.
-   Derman, E. *Models.Behaving.Badly*.
