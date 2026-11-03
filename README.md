# Muhammad Yousuf Rehan: Portfolio

Next.js 15 (App Router), TypeScript, Tailwind CSS 3, Lucide icons.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (verified: no type or lint errors)
```

Requires Node 20.9 or newer.

## Deploy to Vercel

Push to GitHub, then import the repo at vercel.com/new. No settings to change.

## Things to do before you go live

1. **Resume:** put your PDF at `public/Muhammad-Yousuf-Rehan-Resume.pdf` (or change `PROFILE.resume` in `lib/data.ts`). Until then the Download Resume button returns a 404.
2. **Contact form:** it is a simulation. `lib/contact.ts` waits 0.9 s and reports success, and nothing is delivered. Swap in Formspree, Resend or your own route handler (an example is in that file).
3. **Review wording** for repos whose GitHub description is empty (Mosam_ai, apricart-one-flowe-system--010, ICC-WebApp, yousuf-portfolio) in `lib/repos.ts`.
4. **Project links:** SmoothGrad, the compiler and the testing project have no repo link because none of the 20 public repos matches them. Add `repo: gh("name")` in `lib/data.ts` when they are public.

## Where things live

| To change | Edit |
| --- | --- |
| Name, contact, links, headline | `lib/data.ts` (`PROFILE`) |
| Experience, projects, skills, coursework | `lib/data.ts` |
| GitHub repo cards and categories | `lib/repos.ts` |
| Colors and fonts | `tailwind.config.ts`, `app/globals.css` |

Star and fork counts refresh from the GitHub API once an hour. If the API is unreachable, the static numbers in `lib/repos.ts` are used. Optionally set `GITHUB_TOKEN` in Vercel to avoid rate limits, and `NEXT_PUBLIC_SITE_URL` once you have a custom domain.
