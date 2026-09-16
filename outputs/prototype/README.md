# Real World Evidence [RWE] Methods Repository prototype

Version 0.2. Local MVP, not an expert-validated educational product.

## Try it

[Open the running preview](http://127.0.0.1:5174/).

1. Choose **Interpreting a P value**.
2. Select the question about a P value above 0.05.
3. Read the stored answer and follow its source evidence.
4. Return to Explore and try the competency filter or search.

The preview is local to this computer and lasts while its service runs. To restart from this folder:

```sh
npm install
npm run dev -- --port 5174 --strictPort
```

`npm run build` produces the standalone site in `dist/`. Serve that folder over HTTP; opening index.html directly from the filesystem will not load the dataset correctly. No API keys or paid model calls are required.

## Included and deferred

- 30 selected articles; 55 unchanged competencies; 33 stored questions and answers.
- 22 summaries use abstracts; 8 use inspected full-text sections or scanned pages.
- Provisional mappings, clear source basis, reading details, guided question selection, and no-match states.
- Text search, not semantic retrieval. A similar question must be explicitly selected before any saved answer is shown. Search suggestions do not prove that an answer fits a learner’s intended question.
- No free-form generative chat backend, learner accounts, analytics, public hosting, remote MCP server, in this version. A downloadable learner skill is available from Use with your AI.
- The proposed 50-question benchmark is not complete. The 33 draft answers are not an independently validated test set.

## WebMCP

Nine read-only tools register through `document.modelContext` when available: `search_corpus`, `get_reading`, `list_competencies`, `find_questions`, `get_reference_answer`, `get_evidence_policy`, `check_evidence_labels`, `build_session_summary`, and `get_video_catalog`. The website remains usable when the API is absent. This is browser-native WebMCP, not a remotely hosted MCP endpoint that any model client can connect to.

The original five tools and all four added tools were invoked successfully from the Codex in-app browser during this session. Other browser and model-client combinations remain untested. The tools expose draft status and evidence limits; an external model could still ignore these, so tool access alone cannot guarantee grounded generated answers.

Implementation followed the [official WebMCP imperative API documentation](https://developer.chrome.com/docs/ai/webmcp/imperative-api). API support is experimental and should be rechecked before broader testing.

## Checks performed

- Production build passed.
- Dataset integrity: 30 unique article and record IDs, 55 competencies, 33 unique question IDs, valid evidence links and competency references.
- All 33 stored answers were checked for verbatim retrieval by ID; invalid IDs return not-found.
- Desktop and 390px narrow-screen views inspected in the actual browser.
- Guided question → answer → source record flow exercised.
- Missing-data competency filter, method search, empty competency filter, and unsupported question state exercised.
- P-value search initially matched unrelated words containing the letter P. Fixed to match words; retest returned the two relevant P-value questions.
- Browser console showed no errors or warnings in checked flows.
- Five native WebMCP calls succeeded, in addition to direct data/tool-contract checks.

These checks establish basic operation, not educational effectiveness or scientific validation.

## Visual review

The current interface uses plum and sage, Manrope headings, and Lato body text. The original concept is retained as design history; `about-concept.png` and `design-notes.md` document the refresh. A linked ISPE logo, development banner, collaboration page, and Black Swan Causal Labs footer credit are included. The logo retains its supplied colors.

## Data maintenance

`../pilot-dataset.json` is the master; `public/dataset.json` is its website copy. Update them together, then rebuild. Full source articles and extraction scratch files remain outside the served website. Dataset records preserve source URLs, evidence locations, provisional status, and correction follow-up.

## Evidence disclosure and recaps

The downloadable `repository-learning` skill requires claim-adjacent labels for repository content, inspected outside sources, unverified model background, and new interpretations/examples. The label checker validates source fields and evidence identifiers, not semantic support or honest provenance. A skill cannot guarantee another model obeys.

`build_session_summary` takes the caller’s actual discussion points, used article/question IDs, outside-information disclosures, and open questions. It returns provisional competency connections and up to three additional readings ranked by shared mappings. It neither observes the chat nor stores it, and cannot trigger itself after an abrupt session close. The skill instructs the AI to call it at a natural close or on request.

The ten-video catalog contains metadata and external links only; it is excluded from curated answer evidence. Video mappings, transcripts, and segments await actual source review.

## Using your AI with WebMCP

The website’s **Use with your AI** page explains downloading and loading the skill, checking tool availability, and starting a learning session. A setup banner links to it from the reading and browsing pages. Downloading alone does not install the skill; no installation or compliance is claimed by the website.
