# OSurvey website

A premium, responsive Next.js website for an individual land surveyor.

## Run locally

```bash
npm install
npm run dev
```

Run the quality checks with:

```bash
npm run typecheck
npm run lint
npm run build
```

## Deploy to Render

This project includes a [`render.yaml`](./render.yaml) Blueprint for a Node web service.

1. Push this folder to a GitHub, GitLab, or Bitbucket repository.
2. In Render, choose **New** → **Blueprint** and connect that repository.
3. Confirm the `osurvey` web service, then create it. Render will install dependencies, run the production build, and start the Next.js server. The build deliberately installs from `package.json` with `--package-lock=false`: the current lockfile contains platform-specific optional dependencies that npm rejects on Render's Linux hosts.
4. The Render Blueprint sets `NEXT_PUBLIC_SITE_URL` to `https://www.lutexspatial.com`, which is used for canonical URLs, structured data and the sitemap. Update the value in `render.yaml` if the canonical domain changes, then redeploy.

## Complete before launch

All owner-editable business and SEO placeholders live in [`app/lib/site.ts`](./app/lib/site.ts). Replace:

- surveyor/business name and short name;
- phone, email, WhatsApp number, service area and (if relevant) address;
- canonical public site URL via `NEXT_PUBLIC_SITE_URL` in `render.yaml`;
- professional biography, verified credentials, registrations, equipment and service offer;
- portfolio imagery and approved project descriptions;
- social links and any applicable legal notices.

## Enquiries

The Contact and Request a Plan forms post to `app/api/enquiries/route.ts`. The route forwards submissions server-to-server to a Google Apps Script web app; the shared token is never sent to the browser. The Apps Script receiver is in [`scripts/google-sheets-web-app.gs`](./scripts/google-sheets-web-app.gs).

### Configure Google Sheets delivery

1. Create a Google Sheet for enquiries and copy its spreadsheet ID from its URL (`/spreadsheets/d/<ID>/`).
2. Create a Google Apps Script project, paste in `scripts/google-sheets-web-app.gs`, and save it.
3. In Apps Script **Project Settings** → **Script Properties**, add:
   - `SPREADSHEET_ID`: the ID copied from the Google Sheet.
   - `WEBHOOK_TOKEN`: a newly generated, long random secret. Use the same value only in the server environment and Apps Script properties.
4. Deploy the Apps Script as a **Web app**, executing as your account and allowing access to **Anyone** so the website server can call it. The script checks the shared secret before writing anything. Copy the deployed `/exec` URL.
5. Add these server-only environment variables to Render (the Blueprint declares them as manually supplied secrets):
   - `GOOGLE_SHEETS_WEB_APP_URL`: the deployed Apps Script `/exec` URL.
   - `GOOGLE_SHEETS_WEB_APP_TOKEN`: the same secret as `WEBHOOK_TOKEN`.
6. If testing locally, add the same two variables to `.env.local`. Do not prefix them with `NEXT_PUBLIC_` or commit their values.
7. Redeploy the site and submit a test from both forms. The script creates column headings on the first submission and records the originating form.

The web app endpoint is publicly reachable by design; keep the token secret, do not log it, and redeploy the Apps Script if its access settings or code change. Avoid collecting sensitive documents or unnecessary personal information in the free-text field.

## Images

The current layout uses generic Unsplash photographs as illustrative placeholders. Replace them with licensed/approved imagery and use only verified project images in the project gallery.
