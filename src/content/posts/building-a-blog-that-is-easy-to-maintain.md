---
title: Training Recipes for Stable Vision-Language Models
description: A working summary of the training choices that most affect stability, convergence, and downstream transfer.
publishedAt: 2026-03-06
tags:
  - Training
draft: false
---

Training vision-language models is usually less constrained by raw ideas than by stability under scale.

## Where runs break

Most failures show up in one of these forms:

- loss spikes after visual-text fusion starts to dominate
- weak alignment between image features and instruction data
- poor transfer from synthetic pretraining to real downstream tasks
- instability introduced by mixed data quality across stages

These are training pipeline problems, not just optimizer problems.

## Recipe patterns that keep showing up

The papers I keep revisiting tend to share a few operational choices:

1. Stage alignment before broad instruction tuning.
2. Mix clean human data with carefully filtered synthetic pairs.
3. Control batch composition so text-only and vision-text examples do not fight each other.
4. Watch effective token balance, not only sample count.

The last point matters more than many reports admit. A dataset can look balanced by rows while still being skewed by sequence length and visual density.

## What I want from training reports

Good training writeups should expose:

- stage-by-stage data composition
- curriculum changes across training phases
- ablations on resolution and token budget
- failure cases after instruction tuning

Without these details, it is hard to know whether gains come from architecture, data, or simply more compute.

## Conclusion

The best training recipes are usually boring in the right way: disciplined staging, careful data mixing, and fewer hidden degrees of freedom.
