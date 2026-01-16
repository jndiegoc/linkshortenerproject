# Shadcn UI

Purpose: enforce consistent UI by using the shadcn/ui component library across the app.

Rules:

- **Use shadcn only:** All UI elements must be implemented with shadcn/ui components. Do not create custom UI components.
- **No custom components:** Avoid adding new, standalone UI components. If a layout or pattern is missing, compose existing shadcn components or request approval.
- **Styling:** Follow the project's Tailwind + shadcn conventions. Prefer component props and composition over custom CSS when possible.
- **PR checklist:** Verify every PR updates UI only with shadcn components; remove or refactor any custom UI components; add a short note if composing non-trivial patterns.

Where to reference:

- shadcn/ui docs: https://ui.shadcn.com

If you need a new reusable pattern not covered by shadcn, open an issue and get approval before adding new component files.
