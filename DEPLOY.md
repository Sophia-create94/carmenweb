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

### 2. Add the credentials as GitHub Secrets

Repo → **Settings → Secrets and variables → Actions → Secrets → New repository secret**.
Create these three:

| Secret | Value | Example |
| ------ | ----- | ------- |
| `FTP_SERVER` | FTP hostname | `w00XXXXX.kasserver.com` or `ftp.drcarmenmueller.de` |
| `FTP_USERNAME` | FTP user | `f00XXXXX` (or your dedicated user) |
| `FTP_PASSWORD` | FTP password | (the password) |

> Secrets are encrypted and only exposed to workflow runs. They are **never**
> stored in the repository. Never commit credentials to git.

### 3. (Only if needed) Set the target directory

If the FTP user does **not** land directly in the web root, set a repo
**Variable** (not a secret):

Repo → **Settings → Secrets and variables → Actions → Variables → New variable**

| Variable | Value | Notes |
| -------- | ----- | ----- |
| `FTP_SERVER_DIR` | e.g. `/drcarmenmueller.de/` | Must **end with a slash**. Defaults to `./` (the FTP home). |

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
- **First run / leftover files:** the sync uploads and updates files but does not
  delete pre-existing unrelated files (e.g. the old Create-React-App build) on the
  first run. The new `index.html` overwrites the entry point, so the site works;
  old files are harmless clutter. To wipe the target directory clean on a run, add
  `dangerous-clean-slate: true` to the deploy step **once** — ⚠️ this **deletes
  everything** in `FTP_SERVER_DIR` first, so be 100% sure the directory is correct.
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
