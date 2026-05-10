# Paulo Freire — Portfolio

Personal portfolio site. Single-page React app built with Vite.

## Tech stack

- React 19
- Vite 6
- Framer Motion (subtle entrance animations)
- EmailJS (contact form delivery, no backend needed)
- React Icons

## Local development

```bash
npm install
npm run dev
```

The dev server runs at <http://localhost:5173>.

## Required environment variables

Create a `.env.local` at the project root with your EmailJS credentials (get them at <https://dashboard.emailjs.com>):

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

The EmailJS template should expose three variables matching the form `name` attributes: `user_name`, `user_email`, `message`.

If any of the three vars are missing, the contact form will surface an "Email service is not configured." error instead of attempting to send.

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Vite dev server with HMR |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Serve the built `dist/` locally on port 4173 |
| `npm run lint` | ESLint over the project |

## Deployment

Deployed on Vercel. Production builds run on every push to `main`. Preview deployments run on every push to a non-`main` branch.

The three `VITE_EMAILJS_*` env vars are configured in the Vercel project settings (Production, Preview, and Development scopes).

### Optional polish after first deploy

Once a stable production URL is known, replace the relative `og:image` path in [index.html](index.html) with the absolute URL (e.g. `https://your-site.vercel.app/P.png`) so social link previews render the favicon image correctly across all platforms.
