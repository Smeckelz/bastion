# Copilot / AI agent instructions for this repository

Repository snapshot (scan time): 2025-09-16
- Workspace path: c:\Users\stabk\Desktop\website
- Scan result: no source files or agent docs were found at scan time.

If you (the agent) reach this file first, follow these minimal steps to get oriented:

1) Quickly enumerate the repository root to discover files the human may have omitted in the workspace snapshot.
   - PowerShell (Windows):

```powershell
Get-ChildItem -Force -Recurse -File
```

2) Look for these anchor files (if present) and prefer them as authoritative:
   - `README.md` — top-level project intent and install notes
   - `package.json` — npm scripts (look for `dev`, `start`, `build`, `test`)
   - `pyproject.toml` / `requirements.txt` — Python projects
   - `Dockerfile`, `.github/workflows/*`, `azure-pipelines.yml`, `netlify.toml` — CI/deploy hints
   - `src/`, `app/`, `public/`, `static/`, `pages/` — common web app layout

3) File → action mappings (concrete examples)
   - If `package.json` exists with `scripts`, run `npm ci` then inspect `scripts` and run the relevant one (example: `npm run build` to produce a production bundle).
   - If `next.config.js` or `pages/` exists, treat it as Next.js: use `npm run dev` for local dev and `npm run build` + `npm start` for production.
   - If `vite.config.js` or `index.html` at project root, run `npm run dev` (Vite) and `npm run build` for production.
   - If `pyproject.toml` is present, run `python -m venv .venv; .\.venv\Scripts\Activate.ps1; pip install -r requirements.txt` (or `pip install -e .`) and run tests with `pytest` if present.
   - If a `Dockerfile` is present, prefer using it as the canonical build step; for quick checks, run `docker build -t repo-test .` locally.

4) Tests and linting
   - Look for `jest`, `vitest`, `pytest`, `flake8`, `eslint` in `package.json` or config files. Run the project's test command if present and report failures with stack traces.

5) Patterns and conventions to surface (what to look for and copy into PRs)
   - Script-based workflow: many operations are driven by `npm`/`pnpm`/`yarn` scripts rather than ad-hoc commands — prefer scripts over guessing commands.
   - CI-driven deploys: if `.github/workflows` exists, mirror steps locally when reproducing CI failures.
   - Environment config: search for `.env`, `.env.example`, or `config/*.env.*` to understand runtime configuration.

6) When you can't discover anything (this repo snapshot):
   - Leave a short, precise request for the human to provide the missing artifacts (README, package.json, or a high-level description of the intended project type). Example:
     "I scanned the workspace and found no source files. Please add a `README.md` or `package.json`, or tell me whether this is a Next/Vite/static/Python site so I can produce tailored agent instructions."

7) When editing code or adding files:
   - Keep edits minimal and confined to the files referenced by the issue/PR.
   - If adding new build or CI files, include short justifying comments and a test step that can be run locally.

How to update this instruction file
- Edit `.github/copilot-instructions.md` with any observed project-specific patterns (scripts, frameworks, deploy targets). Keep entries short and include the file-example -> action mapping.

Contact / Next steps
- If you are the repository owner: either add a `README.md` or a `package.json` to make the project type discoverable, or tell the agent which stack to assume (Next.js, Vite, static HTML, or Python) and it will re-run discovery and expand these instructions.

