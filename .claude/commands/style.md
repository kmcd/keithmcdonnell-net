# Prose diagnostic

Apply this stack to any prose before marking it done. Work through the checks in order — the first three catch ~80% of problems. Fix each issue before moving to the next check.

Source: gauge_intelligence editorial style guide, synthesised from Orwell, Williams, Lanham, Zinsser, Klinkenborg, Strunk, McPhee.

---

## 1. Characters and actions (Williams)

For every sentence: who is doing what to whom?

If the actor is buried in a noun ("the evaluation of delivery outcomes") and the action is a weak verb ("was conducted", "takes place", "occurs"), rewrite. Put the actor in the subject slot. Put the action in the verb slot.

> Before: "An evaluation of AI adoption effects was conducted."  
> After: "I evaluated the AI adoption effects."

Ask: could I replace this verb with *is*, *has*, *was*, or *occurs* and lose almost nothing? If yes, the verb is weak and the action is hiding.

## 2. Nominalisation hunt (Williams + Lanham)

Scan for nouns ending in *-tion, -ment, -ence, -ance, -ity, -al*. These are almost always verbs in disguise. When you find one propped on a weak verb, restore the verb.

Common Assay nominalisations:
- "the implementation of" → "implementing" / "implement"
- "the adoption of" → "adopting"
- "the measurement of" → "measuring"
- "the assessment of" → "assessing"
- "give rise to" → the actual verb

Also check: does each sentence open with a recognisable character, or with a *-tion* noun? If the subject slot is empty of humans, the sentence is hiding something.

## 3. Paramedic Method (Lanham)

Run this on any paragraph that reads dense. Eight moves:

1. Circle every preposition
2. Circle every form of *to be* (is, are, was, were, has been)
3. Ask: where is the action? Who is doing what to whom?
4. Convert the action into a simple active verb
5. Move the doer into the subject position
6. Start fast — cut the wind-up
7. Cut redundancies
8. Read aloud with emphasis

If a sentence has more than four prepositions, it needs restructuring. Aim to halve preposition count.

## 4. Rhythm — sentence length variance (Klinkenborg)

Read every sentence aloud. Count the words. Look at the sequence of lengths.

Signs of AI prose:
- Three or more consecutive sentences in the same structural pattern ("X is Y. A is B. C is D.")
- Three or more consecutive sentences of similar length (all 10–15 words, or all 5–8 words)
- Lists where every item has the same grammatical form

Fix: vary sentence length deliberately. A 3-word sentence after two 20-word sentences creates emphasis. A long sentence after several short ones creates depth. The variation is the rhythm.

If you stumble aloud, fix the sentence before continuing. Don't note it and move on.

## 5. Old-new flow (Williams)

For each sentence pair: underline the last six words of sentence N and the first six words of sentence N+1. They should connect — by repetition, near-synonym, or pronoun pickup.

Where they don't connect, the reader will feel a jolt. Most of the time the fix is to flip the order of clauses in sentence N+1, not to bolt on a transition word.

## 6. Bracket the clutter (Zinsser)

Bracket — don't delete — every word or phrase that isn't doing work. Then re-read with the brackets ignored. Did the sentence lose information? If not, cut the bracketed material.

Common clutter:
- "It is worth noting that" → cut
- "In terms of" → replace with a preposition
- "At this point in time" → now
- "Due to the fact that" → because
- "Very", "really", "quite" → cut
- "In order to" → to
- Adjectives that repeat what the noun already says

## 7. AI-tell check

Scan for these specific patterns before finishing:

- **Symmetric framing**: "While X did A, Y did B" with false parallel. The data rarely divides evenly. Lead with the dominant finding.
- **The list of three** as a default cadence. Sometimes the right number is two, or five. Let the evidence choose.
- **Meta-sentences**: "This section presents...", "It is worth noting...", "What follows is..." — cut. State the thing.
- **The Goodhart hedge**: "appears to", "seems to", "may suggest" — commit or quantify.
- **Symmetric definition structure**: defining two concepts in identical grammatical structures back-to-back. Vary one of them.
- **"This is X:"** — remove the announcement, use the concept directly.
- **Slow endings**: the final sentence of each paragraph should land on the claim, not trail into a relative clause.

## 8. Footnote check

Every named author, study, or book cited in the prose gets a footnote — even well-known concepts. Goodhart's Law gets a footnote. Bergstrom and West get a footnote. DORA research gets a footnote.

The footnote format: *Author(s), Title (Year).* No URLs unless the source is only available online. One line per footnote.

Do not cite sources inline in the prose body. Name them, footnote them, move on.

---

After all eight checks pass, the prose is ready for Vale lint. The diagnostic stack catches what Vale cannot — rhythm, symmetric framing, old-new flow, AI tells.
