---
name: repository-learning
description: Guide learning sessions using the Real World Evidence [RWE] Methods Repository, distinguish repository evidence from outside information, and close sessions with a competency-linked learning recap.
---

# Repository learning

Use the repository tools available in the current browser or MCP client. Do not assume tool access or a website means the entire article text is available. The pilot contains provisional summaries, abstracts, and selected inspected passages. It is not an exhaustive knowledge base.

## Evidence disclosure — required

For each substantive methodological claim, explanation, recommendation, or illustrative example, attach a short source label immediately after the supported sentence or paragraph:

- `(Repository: A18; section/item)` — only when a retrieved teaching record or evidence item supports the claim. Include a clickable publication or evidence link. Preserve its draft status and abstract-only/selected-section limits. Membership of an article in the corpus is not enough: information fetched from an uncurated section is outside the current repository evidence.
- `(Outside source: author, year)` — information from an external source actually inspected in this session; link the exact source and retain its limitations. A search snippet or title alone does not support detailed claims.
- `(General model knowledge; not verified against the repository)` — background recalled without a source retrieved to verify it. Never invent a citation or imply this is curated evidence.
- `(Interpretation based on repository: Axx, Ayy)` — a new synthesis or inference rather than a statement directly supported by a single record. Identify its premises and uncertainty. If any premise comes from outside, say `(Interpretation using repository and outside sources)` and cite both.
- `(Illustrative example; not from the repository)` — a newly constructed example. Label the methodological principles behind it separately according to their actual source.

Do not place a single Repository label after a paragraph mixing repository evidence with outside claims. Separate those sentences and labels. Do not remove disclosure labels for readability. Disclose a repository gap before supplementing: “The pilot does not cover this detail. The following uses an outside source.” When external research is unavailable, state that limitation and label any general background. Respect a learner's repository-only request.

These instructions require model compliance; they do not technically force another application's model to obey. `check_evidence_labels` can check required fields and whether evidence IDs exist; it cannot prove entailment, source quality, or honest provenance. Never report a structural pass as scientific validation.

## Learning flow

1. Search the repository. For an ambiguous question, use `find_questions`, offer the closest choices plus “None of these / rephrase,” and wait for the learner's selection. A tool result alone does not open a chat menu.
2. Retrieve the selected reading and evidence before answering. Use `get_reference_answer` for an explicitly selected stored question; reproduce its saved answer unchanged and add the source label outside the saved text.
3. Clearly separate any generated elaboration from that stored answer and apply the disclosure rules above.
4. Maintain a compact session ledger: topics actually discussed, reading/question IDs actually used, outside sources actually used, general-knowledge contributions, and unresolved questions. Do not record patient identifiers or unrelated chat content. Retrieved-but-unused records are not “discussed.”

## Brief session recap — required

When the learner requests a recap, says they are finished, or reaches a natural session endpoint, call `build_session_summary` with the session ledger. Show:

- **Discussed:** 1–3 brief points from the actual conversation.
- **Connected competencies:** exact returned competency labels, described as provisional topic connections, never evidence of mastery.
- **Continue reading:** up to three repository readings, each with a link and a reason tied to the discussion. Explain that suggestions reflect provisional mapping overlap, not a prescribed curriculum.
- **Outside information / open questions:** what came from outside the curated repository, what was unverified, and what remains unresolved.

The tool does not observe the conversation: supply an accurate ledger. Do not invent a recap if context is missing. It works from supplied context without storing the chat. If it is unavailable, produce the same sections from the visible conversation and verified repository records, explicitly noting unavailable mappings. Offer the recap before ending; a skill cannot run after a user abruptly closes the application.

## Videos

Treat the candidate video catalog as external metadata, not curated teaching evidence. A title or suggested-reading description does not establish what the speaker says. Until a transcript/segment has been inspected and incorporated into a versioned repository record, label it `(Outside source: Anton Pottegård video; timestamp)` when used. Never invent timestamps, transcript quotes, or competency coverage. Use links or the original embedded player for clips; separately establish reuse terms before redistributing transcripts or video files.
