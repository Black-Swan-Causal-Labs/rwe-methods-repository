# Real World Evidence [RWE] Methods Repository — working MVP

Version 0.2 • Audience: trainees with basic epidemiology knowledge.

## Open the prototype

[Open the local preview](http://127.0.0.1:5174/). It works while the local preview service is running on this computer.

Try **Interpreting a P value → select a question → view the answer and evidence**. Then search the collection or filter by competency.

## Included

- All 30 selected articles, each with a provisional teaching summary and competency links.
- The 55 existing Osborne 2024 competencies; none revised.
- 33 stored questions and draft reference answers.
- Search, competency filtering, reading details, clarification choices, source links, and a no-answer state.
- Nine experimental WebMCP tools, exercised in the Codex in-app browser.

The interface returns stored answers unchanged after explicit question selection. It does not generate free-form explanations. There is no model API, login, or external database to configure for this local prototype.

## Evidence depth

22 records currently use abstracts. Eight use inspected full-text sections or scanned pages. Access and summary depth are distinct: retrieving a full article does not mean every claim or section was reviewed. All summaries and mappings remain provisional. Five articles have indexed corrections pending assessment, noted on their records.

## Files

- [All teaching records](teaching-records.md)
- [Article inventory and evidence basis](article-inventory.md)
- [Unchanged competency framework](competencies.md)
- [Structured dataset](pilot-dataset.json)
- [Practical feedback and content follow-up](review-checklist.md)
- [Prototype instructions and test results](prototype/README.md)

## What this demonstrates

A small selected corpus can support an inspectable browsing and guided-answer workflow and expose tools inside a compatible browser. It does not yet establish educational effectiveness, expert agreement, reliable free-form AI answers, or compatibility with every learner’s model client. The proposed 50-question evaluation bank remains a next iteration; 33 draft questions are present now.

## Learning-session additions

[Download the reusable learning skill](prototype/public/repository-learning-skill.zip), also available on the prototype’s About page. It requires visible evidence labels and a closing learning recap. The new recap tool accepts the actual session context supplied by the AI and returns connected competencies and suggested readings. It cannot automatically observe or close an external chat.

[Video integration notes](video-integration.md) cover the ten cataloged episodes and the remaining transcript/segment work.

## Using your AI with WebMCP

The website’s **Use with your AI** page explains downloading and loading the skill, checking tool availability, and starting a learning session. A setup banner links to it from the reading and browsing pages. Downloading alone does not install the skill; no installation or compliance is claimed by the website.
