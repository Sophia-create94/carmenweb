# Deployment — All-Inkl via GitHub Actions (FTP)

The site is a **Next.js static export**. `npm run build` pre-renders every page
into the `out/` folder (plain HTML/CSS/JS), which is uploaded to All-Inkl's
shared webspace over FTPS.

Deployment is **automatic**: every push to `main` triggers
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds the
site and syncs `out/` to the server (only changed files are transferred).

You can also trigger it manually from the repo's **Actions** tab
("Deploy to All-Inkl (FTP)" → "Run workflow").

---

## One-time setup

### 1. (Recommended) Create a dedicated FTP user in All-Inkl

In the KAS panel: **FTP-Accounts → create a new account**, and restrict its home
directory to the website's document root. Using a dedicated, directory-scoped
account (instead of your main login) limits the damage if the credentials ever leak.

Note the **web root** — the folder that currently holds the live site's
`index.html`. If the new FTP user's home *is* that folder, you can leave
`FTP_SERVER_DIR` unset (see below).

### 2. Add the credentials as **Repository** secrets

Repo → **Settings → Secrets and variables → Actions → Secrets tab → New repository secret**.

Use **Repository secrets**, NOT Environment secrets — the workflow reads
`secrets.*` directly and declares no `environment:`, so Environment secrets would
be invisible to it and the deploy would silently skip.

Create these three:

| Secret | Value | Example |
| ------ | ----- | ------- |
| `FTP_SERVER` | FTP hostname | `w00XXXXX.kasserver.com` |
| `FTP_USERNAME` | FTP user | `f00XXXXX` (or your dedicated user) |
| `FTP_PASSWORD` | FTP password | (the password) |

> Secrets are encrypted and only exposed to workflow runs. They are **never**
> stored in the repository. Never commit credentials to git.

### 3. Target directory

The main All-Inkl FTP account lands at `/`, and the website lives in
**`/drcarmenmueller.de/`** — which is already the default `server-dir` in the
workflow, so **you don't need to set anything**.

Only if you use a **directory-scoped FTP user** whose home is already the web
root, override it with a repo **Variable** (Secrets and variables → Actions →
**Variables** tab):

| Variable | Value | Notes |
| -------- | ----- | ----- |
| `FTP_SERVER_DIR` | e.g. `./` | Must **end with a slash**. Only needed to override the `/drcarmenmueller.de/` default. |

### ⚠️ Do NOT wipe the web root — mail folders live there

`/drcarmenmueller.de/` also contains server-managed folders — **`admin/`,
`config/`, `webmail/`** — that belong to mail/other services and must **never**
be deleted. The deploy is safe by design: the action only ever touches files it
uploaded, so it leaves those folders alone. **Never** add
`dangerous-clean-slate: true` to the workflow here — it would delete everything
in the directory, including those folders.

---

## How to publish a change

Just commit and push to `main`:

```bash
git add -A
git commit -m "…"
git push
```

Watch progress in the **Actions** tab. When the run is green, the live site is updated.

---

## Notes & gotchas

- **Protocol:** the workflow uses **FTPS** (encrypted). If All-Inkl's FTPS ever
  fails the connection, change `protocol: ftps` to `protocol: ftp` in the workflow
  (unencrypted — less ideal, use only if necessary).
- **First run / leftover files:** the sync uploads/updates files but does not
  delete pre-existing files it didn't create. The new `index.html` overwrites the
  old Create-React-App entry point, so the site switches over immediately. Old CRA
  leftovers (e.g. the `static/` folder, `asset-manifest.json`) simply sit there
  unused — harmless, since the new pages reference `_next/` instead. If you want to
  tidy them up, **delete them manually in FileZilla**, and be careful to keep
  `admin/`, `config/`, `webmail/` (mail) and the newly uploaded files (`_next/`,
  `index.html`, the route folders, `img/`, etc.). Do **not** use
  `dangerous-clean-slate` to clean up — see the warning above.
- **Domain / SSL:** hosting stays on All-Inkl, so the domain already points there
  and **email is unaffected** (no DNS changes). SSL is managed in the KAS panel.
- **Custom domain URLs:** canonical tags, Open Graph URLs and the sitemap all use
  `https://www.drcarmenmueller.de` (see `SITE_URL` in
  [src/app/layout.tsx](src/app/layout.tsx)). Update those if the final domain changes.

## Building / previewing locally

```bash
npm run build         # generates ./out
npx serve out         # preview the exact static output at http://localhost:3000
```
