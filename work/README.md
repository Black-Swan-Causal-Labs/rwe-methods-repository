# Historical construction scripts

These scripts preserve the acquisition and drafting workflow; they are not a complete replayable build of the current corpus. Later edits to summaries, links, skills, collaboration metadata, and interface are represented in the committed outputs.

- `inventory.py`: initial selection and bibliography metadata acquisition.
- `extract_competencies.py`: extraction from locally prepared competency source text.
- `build_package.py`: initial teaching/data package; needs local source PDFs, metadata, and extraction files and overwrites output files.
- `acquire_corpus.py`: attempts source retrieval and records evidence acquisition; uses cached metadata.
- `expand.py`: expands the initial corpus using acquired materials and embedded draft teaching content; overwrites outputs.
- `validate-pilot.mjs`: safe read-only validation of the current committed dataset and tool contracts.

Raw publisher/source captures and working caches are retained locally outside Git. See `../docs/source-file-manifest.json` for names and hashes. File hashes establish identity, not permission to redistribute or scientific accuracy. Reacquire sources from the bibliography as access and permissions allow. These scripts have not been tested in a clean environment with missing raw inputs.
