# Contributing to MISA Website

Thank you for contributing to `misa-website` (MIT • MISA — Université d'Antananarivo).

## Branching Model

```
main  ← production / protected — PR only, no direct push
dev   ← integration / development — direct push allowed
feature/*, fix/*  ← short-lived branches from `dev`
```

### `main` — Protected

* **Default branch**, deployed to production.
* **No direct pushes** — all changes via Pull Request.
* **No force-push, no deletion** — `allow_force_pushes: false`, `allow_deletions: false`.
* **Enforced for everyone** including admins (`enforce_admins: true`).
* **PR requirements:**
  * At least **1 approving review** (`required_approving_review_count: 1`)
  * Conversation resolution required (`required_conversation_resolution: true`)
  * Status checks are currently **not required** (add CI later if needed)

> Attempting `git push origin main` will be rejected. Open a PR instead.

### `dev` — Development

* Integration branch for active work.
* **Direct `git push` allowed** — no PR required to push to `dev`.
* **Force-push is allowed by default** (no protection). Prefer `git push --force-with-lease` if you must rewrite history, and coordinate with collaborators.
* Recommended: use feature branches and PRs into `dev` for review, but not enforced.

```bash
git checkout dev
git pull origin dev
# option A: push directly (allowed)
git commit -m "feat: add section"
git push origin dev

# option B: feature branch (recommended for larger work)
git checkout -b feat/new-section
git push -u origin feat/new-section
# open PR feat/new-section → dev on GitHub
```

## Workflow

1.  **Sync `dev`:**
    ```bash
    git checkout dev
    git pull origin dev
    ```

2.  **Create a branch from `dev`:**
    ```bash
    git checkout -b feat/my-feature   # or fix/bug-name, docs/...
    ```

3.  **Develop locally:**
    ```bash
    npm install
    npm run dev      # http://localhost:5173
    npm run build    # check production build
    npm run lint
    ```

4.  **Commit:**
    * Use conventional commits: `feat:`, `fix:`, `docs:`, `refactor:`, `chore:`
    * Keep commits small and focused.

5.  **Push & open PR to `dev`:**
    ```bash
    git push -u origin feat/my-feature
    gh pr create --base dev --title "feat: my feature" --body "Description"
    ```

6.  **Release to `main`:**
    ```bash
    # after dev is stable
    gh pr create --base main --head dev --title "release: dev → main"
    # requires 1 approval, then squash/merge
    ```

## Pull Request Rules for `main`

* **Base must be `main`, head is `dev` or a hotfix branch.**
* Requires **1 approval** from a collaborator/owner.
* All conversations must be resolved before merge.
* Do not bypass with admin — protection is enforced for admins.
* Use **Squash and merge** for feature PRs to keep history clean.

Emergency hotfix directly to `main` is still via PR — create `hotfix/*` from `main`, PR to `main`, get review.

## Local Development

```bash
npm install
npm run dev
npm run lint
npm run build && npm run preview
```

## Questions?

Open an issue or contact the maintainers. For branch protection changes, ask `@sergiorandria`.
