# Real World Evidence [RWE] Methods Repository

An educational proof of concept for trainees with basic epidemiology knowledge: explore foundational pharmacoepidemiology readings, connect them to existing competencies, and ask focused methods questions.

**Status: in development.** Summaries, answers, and competency mappings are provisional and await independent expert review. This pilot does not establish educational effectiveness or claim ISPE endorsement.

## Collaboration

A collaboration among the **ISPE DTAI SIG**, **RWE Collaborative SIG**, and **ISPE Academic Council**. Current members: Anton Pottegård, John D. Diaz-Decaro, Nivantha Naidoo, and Fatemehsadat Ghanadi Ladani. Additional collaborators will be added as the initiative develops.

Developed by [Black Swan Causal Labs](https://blackswancausallabs.com). © 2026.

## Purpose and scope

The pilot tests whether a small, inspectable corpus can support competency-based browsing and guided learning, with experimental browser tools for an external AI assistant. It includes:

- 30 selected publications and 30 provisional teaching records.
- 55 existing Osborne 2024 competencies, unchanged; 75 provisional article–competency mappings.
- 33 stored questions and draft reference answers, with evidence identifiers and source locations.
- 57 highlighted connections between central ideas.
- A downloadable learning skill for source disclosure, question clarification, and session recaps.
- A catalog of ten external videos; no transcripts or clips are included.

The website returns stored answers after the learner selects a question. It has no generative chat backend, learner accounts, model API keys, or external database. An external AI can use compatible browser tools, but skill instructions cannot guarantee its compliance.

## Methods used to create the pilot

1. **Fix the corpus.** Use [Anton Pottegård’s 30 must-reads](https://www.linkedin.com/pulse/30-pharmacoepidemiology-must-reads-anton-potteg%C3%A5rd/) as the initial selection. This is a selected teaching corpus, not a systematic literature review.
2. **Verify bibliography.** Match titles and DOIs against Europe PMC metadata; preserve source URLs and indexed correction relationships. Five correction notices remain to be assessed (A06, A07, A10, A21, A24). Index checks do not replace publisher review.
3. **Extract the framework.** Transcribe the 55 competencies from Table 1 of [Osborne et al. (2024)](https://doi.org/10.1002/pds.5789), with local C01–C55 identifiers. Normalize line wrapping, retain source wording, and record discrepancies rather than revising competencies. [Goodin et al. (2026)](https://doi.org/10.1002/pds.70351) supplies educational context, not a replacement framework.
4. **Acquire and inspect available evidence.** Use abstracts and accessible full text. Currently 22 records are abstract-based and eight use inspected full-text sections or scanned pages. Successful retrieval does not imply comprehensive review. Each record identifies its evidence basis, source location, and limitations.
5. **Draft structured teaching records with AI assistance.** Codex assisted with acquisition scripts, teaching paraphrases, draft reference answers, mappings, interface code, and checks. Records contain a central idea, learning questions, evidence links, limitations, and competency connections. These are working drafts, not independent expert validation. Model/prompt provenance was not captured as a complete replayable log.
6. **Crosswalk provisionally.** Connect each reading's teaching focus to existing competencies, with a rationale. A link indicates relevance, not complete competency coverage or learner mastery. Add selected cross-links between central ideas.
7. **Build guided retrieval.** Use text search and competency filters. Show candidate questions for explicit selection before returning a saved answer unchanged. This is not semantic retrieval; no-match results are supported. The planned 50-question benchmark is incomplete, and the 33 draft answers are not an independent evaluation set.
8. **Add evidence disclosure and learning recaps.** The skill distinguishes repository evidence, inspected outside sources, unverified model knowledge, and synthesis/examples. The structural checker validates fields and identifiers, not scientific support. The recap accepts actual session context supplied by the caller and suggests readings through provisional competency overlap; it cannot observe another chat or automatically close a session.
9. **Check implementation.** Validate counts, unique IDs, evidence and competency references, verbatim answer retrieval, search/no-match behavior, and nine tool contracts. Browser checks cover selected learning flows and desktop/mobile layouts. These checks establish basic operation, not scientific or educational validity.

## Run locally

Requires Node.js compatible with Vite 7 (20.19+ or 22.12+).

```sh
cd outputs/prototype
npm ci
npm run dev -- --port 5174 --strictPort
```

Open http://127.0.0.1:5174/. For a production build, run `npm run build`; serve `dist/` over HTTP. The publicly accessible Cloudflare pilot is available at https://rwe-methods-repository.pages.dev. See [hosting and access](docs/cloudflare-hosting.md).

From the repository root:

```sh
node work/validate-pilot.mjs
```

## Files

| Path | Contents |
| --- | --- |
| `outputs/pilot-dataset.json` | Current master dataset: bibliography, competencies, teaching records, evidence, questions, video metadata |
| `outputs/teaching-records.md` | Readable summaries and draft answers |
| `outputs/article-inventory.md` | Article inventory and evidence basis |
| `outputs/competencies.md` | Existing competency framework |
| `outputs/extraction-template.md` | Record fields and extraction guidance |
| `outputs/review-checklist.md` | Content review and follow-up |
| `outputs/repository-learning-skill/SKILL.md` | Canonical portable learner skill |
| `outputs/prototype/` | React/Vite website, public dataset, skill downloads, logo, design notes |
| `outputs/video-integration.md` | Video catalog and proposed transcript/segment workflow |
| `outputs/session-recap-example.json` | Illustrative recap example, not a real learner transcript |
| `work/*.py` | Historical acquisition/extraction/build scripts; see `work/README.md` before use |
| `work/validate-pilot.mjs` | Current dataset and tool-contract checks |
| `docs/source-file-manifest.json` | Names and SHA-256 hashes of local source/scratch files retained outside Git |

## WebMCP and skills

Nine read-only tools register through experimental `document.modelContext` when supported: `search_corpus`, `get_reading`, `list_competencies`, `find_questions`, `get_reference_answer`, `get_evidence_policy`, `check_evidence_labels`, `build_session_summary`, and `get_video_catalog`.

This is browser-native WebMCP, not a remote MCP server URL. The site works without it. Tools were exercised in the Codex in-app browser; other clients need compatibility testing. `find_questions` returns options for the calling AI to present—it does not independently open a chat menu.

The **Use with your AI** page provides a ZIP and standalone skill instructions. Downloading does not install or activate the skill. Users must load it in their AI application and verify tool access. See the [prototype guide](outputs/prototype/README.md).

## Maintenance and reproducibility

The committed dataset is the current working snapshot, not an expert-reviewed release. Edit `outputs/pilot-dataset.json`, synchronize `outputs/prototype/public/dataset.json`, and run validation and build. Keep the canonical skill, downloadable Markdown, and ZIP synchronized when changing instructions.

Historical scripts capture portions of the original workflow, but do not reproduce every subsequent manual/AI-assisted edit. They may need local source files and network access and can overwrite outputs. Do not run them as a one-command rebuild of the current dataset.

## Source materials and reuse

Original publisher PDFs, full-text captures, page images, and raw extraction caches remain local and are listed in the source manifest instead of being uploaded wholesale. Source citations and evidence pointers are retained in the dataset. The supplied ISPE logo links to [ISPE](https://pharmacoepi.org); it remains third-party branding. Article text, competency wording, logos, and bundled dependencies retain their respective rights and license terms. See the license scope below.

## License

The project's original software, construction and validation scripts, learning-skill instructions, and software documentation are licensed under the **[MIT License](LICENSE)**. Copyright © 2026 Black Swan Causal Labs. The standard license text is also available from the [Open Source Initiative](https://opensource.org/license/mit).

### Scope and exclusions

- **Included:** original application code, Cloudflare authentication code, scripts, skill instructions, and documentation explaining how to run and maintain the software.
- **Educational content:** the corpus datasets, teaching summaries, reference answers, competency mappings, and source extracts are **not covered by the MIT license**. No additional reuse license is granted for these materials in this pilot; source-specific terms and any applicable permissions continue to apply. Their scientific review status remains provisional.
- **Third-party material:** publications, competency wording, the ISPE logo, other third-party branding, fonts, and dependencies retain their respective owners' rights and license terms. This software license grants no rights to third-party trademarks and does not imply ISPE endorsement.

The GitHub repository remains private. The hosted website and its downloads are publicly accessible without a login. Recipients of the software receive the permissions described in the MIT license, including redistribution and commercial use subject to its notice requirement.

## Next iteration

Expert review of summaries and mappings; assess indexed corrections; expand full-text coverage where available; complete and independently review the evaluation question bank; test learner clarification and disclosure behavior; obtain and review video transcripts before adding claims or segments; evaluate compatibility with additional AI clients.
