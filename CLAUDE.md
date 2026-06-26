# Project: Prasad Chavan — Portfolio

Personal portfolio for Prasad Chavan (mechanical design engineer), built on the
Once UI "Magic Portfolio" template (Next.js App Router).

## Production
- **Live domain: https://prasadcvn.vercel.app**
- Hosted on Vercel; pushes to `main` auto-deploy.
- `baseURL` in `src/resources/once-ui.config.ts` must match this domain — it drives SEO meta tags, schema, the sitemap and OG images.

## Where things live
- `src/resources/content.tsx` — all personal content (bio, experience, education, skills, social links).
- `src/resources/once-ui.config.ts` — site config: `baseURL`, enabled `routes`, theme `style`, fonts, effects.
- `src/app/work/projects/*.mdx` — project case studies (one file per project: frontmatter + body).
- `public/images/avatar.jpg` — profile photo (About page; toggled by `about.avatar.display`).
- `src/app/favicon.ico` — browser tab icon.
- `public/prasad-chavan-resume.pdf` — downloadable résumé (linked from the "Resume" social button).

## Build / dev
- `npm install`, then `npm run build` (production) or `npm run dev` (local).
