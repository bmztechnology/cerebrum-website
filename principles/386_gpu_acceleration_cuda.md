# GPU Acceleration CUDA: High Performance

## I. Executive Summary

Financial calculations (Monte Carlo, PDE solvers) are **Embarrassingly Parallel**. **Graphics Processing Units (GPUs)** with thousands of cores are ideally suited for these workloads. Using frameworks like **NVIDIA CUDA** or OpenCL, banks achieve speedups of 100x-1000x compared to CPUs, enabling real-time pricing of complex portfolios and intraday risk management.

## II. Formal Definitions

### Definition 2.1 (SIMT Architecture)
Single Instruction, Multiple Threads.
One instruction (e.g., "Multiply by drift") executed simultaneously on 10,000 data points (paths).
Ideal for Monte Carlo loop.
Avoids CPU overhead of thread Context Switching.

### Definition 2.2 (Memory Hierarchy)
-   **Global Memory:** Large, Slow.
-   **Shared Memory:** Small, Fast (User managed L1 cache).
-   Optimization requires minimizing Global Memory access (Coalesced access) and maximizing arithmetic density (Compute bound vs Memory bound).

## III. Theoretical Framework

### 3.1 RNG on GPU
Generating random numbers on parallel threads requires care.
Cannot share a stateful generator (Race condition).
Use "Skip-ahead" (Each thread takes spaced numbers 1, 1001, 2001...) or counter-based generators (Philox).
Curand library.

### 3.2 Latency vs Throughput
CPU: Low Latency (Fast single task).
GPU: High Throughput (Slow single task, but does 10,000 at once).
Pricing 1 option: CPU wins.
Pricing 10,000 options: GPU wins.
Batching requests is key.

## IV. Strategic Applications

### 4.1 XVA Engines
CVA/DVA/FVA requires simulating full bank portfolio into future.
Billions of valuations.
GPU farms are standard infrastructure for Tier 1 banks.
Replaces racks of CPU blades. Power efficiency.

### 4.2 HFT Backtesting
Replaying tick data.
Each stock/day is a thread.
Optimize parameters across million combinations in minutes.
Grid search on GPU.

## V. Exercises

**Exercise 1 (Branch Divergence):**
If `path > K` then `do X` else `do Y`.
GPU processes threads in warps (32 threads).
If half take `if` and half take `else`.
GPU executes `if` for all (masking half), then `else` for all (masking others).
Performance drops 50%.
Avoid branching in kernels.

**Exercise 2 (Precision):**
Single Float (FP32) is 2x faster than Double (FP64).
Is FP32 accurate enough for finance?
Usually yes for Monte Carlo (statistical error > precision error).
No for matrix inversion.

## VI. References
-   NVIDIA. *CUDA Programming Guide*.
-   Giles, M. *GPGPU in Computational Finance*.
