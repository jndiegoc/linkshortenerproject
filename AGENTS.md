# Agent Instructions Index

This repository uses dedicated agent instruction files under the `docs/` directory. Those files contain rules and standards that any automated assistant (LLM agent) must follow when reading, editing, or creating code in this project.

BEFORE generating nay code:


Files:

- [Agent Guidelines](docs/agent-guidelines.md) — LLM behavior, allowed actions, safety, and workflow rules.
- [Coding Standards](docs/coding-standards.md) — TypeScript / Next.js / Drizzle coding conventions and tests requirements.
- [Apply Patch Guidelines](docs/apply-patch-guidelines.md) — Practical instructions for using `apply_patch`, minimizing diffs, and verifying changes.
- [Clerk Auth](docs/clerk-auth.md) — Authentication rules: Clerk-only, protected `/dashboard`, modal sign-in/up.
 - [Shadcn UI](docs/shadcn-ui.md) — UI rules: use shadcn/ui components for all app UI; no custom components.

How to use:

- Read `docs/agent-guidelines.md` before making any edits.
- Create a short plan using the project's TODO tool before performing multi-step changes.
- Keep changes minimal, focused, and tested. Update these docs if the workflow or tools change.

If you are an automated agent, follow the documented tool preambles and apply_patch conventions in `docs/apply-patch-guidelines.md` exactly.
