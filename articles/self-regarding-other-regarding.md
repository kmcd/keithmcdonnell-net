---
title: "Self-regarding vs other-regarding signals"
slug: self-regarding-other-regarding
category: problems
stage: reframe
status: live
date: 2026-06-12
description: "Vendor dashboards measure the tool's own behaviour — acceptance rate, completion latency, AI-assisted commits. The verdict measures the system's behaviour. These are not the same instrument, and confusing them is the modal measurement error."
---

Your AI coding dashboard tells you the tool is working.

It shows acceptance rate, AI-assisted commit percentage, completions triggered per session. These numbers are real. The tool is generating suggestions. Developers are accepting them. The figures go up over time as adoption spreads.

None of this tells you whether your system is delivering more.

## The distinction

A self-regarding signal answers one question: what did the tool do? Acceptance rate, AI-assisted lines of code, completions per active user — these are all self-regarding. They live inside the vendor's product telemetry.

An other-regarding signal answers a different question: what happened to the system as a result? Deployment frequency is other-regarding. So are change failure rate, mean time to recovery, and review latency on AI-touched changes. These signals live in your version-control and CI history. The vendor has no access to them.

The question a board asks — is the AI spend paying off? — is an other-regarding question. The dashboard answers a different question entirely.

## Why vendors can only offer self-regarding signals

This is not a product gap. It is structural.

A vendor can instrument their own tool. They cannot instrument your production system. They cannot see your deployment pipeline, your incident log, your PR review history, or the rework that follows an AI-assisted merge. They have no way to construct a before-and-after picture bracketing your adoption inflection. They have no cross-organisation reference to tell you whether your numbers are normal.

So the vendor offers what they have: the tool's own behaviour, measured inside the tool. This data is accurate. The implied claim — that high acceptance rate indicates productivity improvement — does not follow from it.

Bergstrom and West[^2] call this paltering: a statement that is literally true but implies a conclusion the evidence does not support. The vendor is not lying. The instrument is measuring what it measures. The gap is between what the number says and what it is used to infer.

## Goodhart's Law in one slide

When acceptance rate becomes the metric your team is judged on, developers start accepting more suggestions. The number goes up. The productivity picture it was supposed to represent becomes less visible, not more.

Goodhart's Law[^1]: when a measure becomes a target, it ceases to be a good measure. AI dashboards accelerate the problem because the signals are visible in real time and easy to act on. Acceptance rate is optimisable within a sprint. Actual delivery outcomes take weeks to compound.

The dashboard trains the wrong inference — not through malice, but because it was built to measure what happened inside the tool, not what happened to the system.

## The rhythm mismatch

AI adoption effects — if they exist — operate on a four-to-twelve week rhythm. It takes that long for changed working patterns to show up in deployment cadence, rework rates, and review behaviour. Daily dashboards show noise at that frequency, not signal.

The CTO who reviews the weekly AI metrics report is looking at a lag indicator presented as a leading one. High acceptance rate this week tells you developers are using the tool this week. It tells you nothing about whether features are shipping faster, defects are declining, or the system is becoming easier to change.

The question that matters — is this working at the system level? — requires a different measurement window, a different set of signals, and a baseline that predates your adoption decision.

## What other-regarding measurement looks like

The signals that tell you whether AI tooling is moving the system are the ones your delivery history already holds. Deployment frequency, change failure rate, lead time for changes, and mean time to recovery — the four measures the DORA research[^3] established as reliable proxies for engineering performance. These change on a cycle that captures the compounding effects of AI adoption, not just the daily activity of the tool.

But DORA metrics alone are not sufficient.

Your team's DORA numbers tell you how you're performing against yourself. They do not tell you whether your trajectory changed after adoption, or whether that change is unusual relative to comparable engineering organisations. Both pieces of evidence are necessary. Neither comes from a vendor dashboard.

I characterise delivery outcomes against a behavioural baseline bracketing the adoption inflection, and interpret them with reference to cross-organisation data. The result is a reading of the system, not the tool. That is the only reading that answers the board's question.

## Independence is structurally other-regarding

A vendor has a product interest in the answer. High acceptance rate is good news for renewal. A dashboard that surfaced a flat rework rate alongside rising AI-assisted commits would be reporting on the vendor's own product's failure to move the system. No vendor builds that instrument.

Independence is not just a credential. It is what makes other-regarding measurement possible. The assessor who gains nothing from the direction of the verdict is the only one who can report that the tool is active and the system is not improving — and sign their name to it.

That is the gap I exist to close.

[^1]: Marilyn Strathern, "Improving Ratings: Audit in the British University System" (1997). The law is often attributed to economist Charles Goodhart, who observed the same phenomenon in monetary policy in 1975.
[^2]: Carl T. Bergstrom and Jevin D. West, *Calling Bullshit: The Art of Skepticism in a Data-Driven World*, Random House (2020).
[^3]: Nicole Forsgren, Jez Humble, and Gene Kim, *Accelerate: The Science of Lean Software and DevOps*, IT Revolution Press (2018).
