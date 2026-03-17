---
title: How I Think About Debugging Complex UI Bugs
description: A practical workflow for narrowing frontend bugs without wasting cycles on guesses.
publishedAt: 2026-03-10
tags:
  - Debugging
  - Frontend
  - Workflow
draft: false
---

Most hard UI bugs are not hard because the code is large. They are hard because the mental model is wrong.

## Problem

Teams often start with a shallow explanation:

- "React rendered twice."
- "The API was slow."
- "State got out of sync."

These labels are not diagnoses. They are symptoms.

## A better workflow

I usually reduce the search space in this order:

1. Confirm the exact user-visible failure.
2. Trace the data path that produces the failure.
3. Check which assumption in that path no longer holds.
4. Only then inspect implementation details.

This order matters. If you read code too early, you tend to rationalize instead of falsify.

## What to capture

- The smallest reproducible input
- The last known correct state
- The first incorrect state
- Timing conditions, if the bug is asynchronous

Once you have these, most "complex" bugs become ordinary.

## Conclusion

Debugging improves when the team stops naming frameworks and starts naming broken assumptions.
