# Singh Lovepreet UI Garden: Coding Assignment 13

UI component library (React, TypeScript, styled-components, Storybook) with automated code quality checks:
Husky pre-commit hooks, GitHub Actions CI, and a Docker container serving the production build on **localhost:8018**.

- GitHub repo: https://github.com/lna2-ux/singh-lovepreet-ui-garden
- Container name: `Singh_Lovepreet_coding_assignment13`
- Working directory in the container: `/Singh_Lovepreet_ui_garden_build_checks`

## Prerequisites

- Git
- Node.js 22 and npm (only needed to run the checks locally)
- Docker Desktop (on Windows, with WSL integration enabled for your distro)

## 1. Run the app on localhost:8018 (Docker)

From the project root (where the `Dockerfile` is):

```bash
docker build -t singh_lovepreet_assignment13 .
docker run -d --name Singh_Lovepreet_coding_assignment13 -p 8018:80 singh_lovepreet_assignment13
docker ps
```

Then open http://localhost:8018 (or http://127.0.0.1:8018).

To stop and remove the container:

```bash
docker rm -f Singh_Lovepreet_coding_assignment13
```

### How the Dockerfile works

- **Build stage** (`node:22-alpine`): runs `npm ci` and `npm run build` to create the Create React App production build.
- **Serve stage** (`nginx:alpine`): copies the build into the working directory `/Singh_Lovepreet_ui_garden_build_checks`, and `nginx.conf` serves that folder on port 80.
- Port 80 inside the container is mapped to port **8018** on the host.
- `.dockerignore` excludes `node_modules`, `build`, and `.git`.

## 2. Code quality checks

Scripts in `package.json`:

| Script | Command | Purpose |
| --- | --- | --- |
| `format:check` | `prettier --check src` | Fails if code is not Prettier-formatted |
| `lint` | `eslint src --ext .ts,.tsx` | Fails on ESLint errors |
| `test:ci` | `react-scripts test --watchAll=false` | Runs all tests once |
| `check` | all three, in order | Used by the pre-commit hook and CI |

Run everything locally:

```bash
npm ci
npm run check
```

Configuration files: `.prettierrc`, `.prettierignore`, and the `eslintConfig` section of `package.json` (extends `react-app`, `react-app/jest`, `plugin:storybook/recommended`, and `prettier`).

## 3. Husky pre-commit hook

Setup steps:

```bash
npm i -D husky prettier eslint-config-prettier
npx husky init
echo "npm run check" > .husky/pre-commit
```

- The `prepare` script (`husky || true`) installs the hook automatically after `npm install`.
- On every `git commit`, Husky runs `npm run check` (Prettier, ESLint, tests). If any check fails, the commit is blocked.

### Demonstration

1. A badly formatted file was added (`const   a   =   1`) and committed. Husky stopped the commit with `husky - pre-commit script failed (code 1)` and **no commit was created**.
2. After removing the bad file, a normal commit passed all three checks and was created.

Screenshots: `docs/screenshots/husky-blocked.png`, `docs/screenshots/husky-passed.png`

## 4. GitHub Actions (CI)

Workflow file: `.github/workflows/ci.yml`

It runs on every push to `main` and on every pull request. Steps: checkout, set up Node 22, `npm ci`, Prettier check, ESLint check, tests, and a production build.

This covers the case where the local hook is bypassed (for example with `git commit --no-verify`). The same checks run on GitHub, the build fails, and GitHub notifies the repo owner.

### Demonstration

1. A badly formatted file was committed with `git commit --no-verify` and pushed.
2. The GitHub Actions run failed at the **Prettier check** step, and GitHub sent a failure notification.
3. The file was removed and pushed, and the run turned green again.

Screenshots: `docs/screenshots/actions-failed.png`, `docs/screenshots/actions-notification.png`, `docs/screenshots/actions-passed.png`

## 5. Requirements checklist

- [x] Dockerfile builds a production build of the Create React App and serves it on localhost:8018
- [x] Container name: `Singh_Lovepreet_coding_assignment13`
- [x] Working directory: `/Singh_Lovepreet_ui_garden_build_checks`
- [x] Husky pre-commit runs Prettier, ESLint, and tests
- [x] Commits are blocked when a check fails
- [x] GitHub Actions runs the same checks and reports failures
- [x] README with full instructions