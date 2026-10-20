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
3. Confirm the `osurvey` web service, then create it. Render will install dependencies, run the production build, and start the Next.js server.
4. Once Render assigns the public `onrender.com` URL, open the service's **Environment** tab and set `NEXT_PUBLIC_SITE_URL` to that full HTTPS URL (or to the final custom domain). Redeploy after saving it.

`ENQUIRY_RECIPIENT_EMAIL` is deliberately not included in the Render configuration: the current API route does not send mail yet, so adding an email address would not make enquiries deliverable. Add a transactional-email or CRM integration before treating the contact forms as live.

## Complete before launch

All owner-editable business and SEO placeholders live in [`app/lib/site.ts`](./app/lib/site.ts). Replace:

- surveyor/business name and short name;
- phone, email, WhatsApp number, service area and (if relevant) address;
- canonical public site URL via `NEXT_PUBLIC_SITE_URL` (see `.env.example`);
- professional biography, verified credentials, registrations, equipment and service offer;
- portfolio imagery and approved project descriptions;
- social links and any legal/privacy details.

## Enquiries

The enquiry UI validates required data and posts to `app/api/enquiries/route.ts`. It intentionally returns a clear error until a secure email or CRM integration is implemented. This prevents the site from falsely claiming a visitor’s enquiry was delivered.

When connecting a provider, add server-only credentials to `.env.local`, implement the delivery call in that route, add rate limiting/spam protection as appropriate, and revise the privacy policy to reflect the final processing arrangements.

## Images

The current layout uses generic Unsplash photographs as illustrative placeholders. Replace them with licensed/approved imagery and use only verified project images in the project gallery.
