## Scope

Rebuild maiadellphysiotherapy.com.au on TanStack Start as a simple, modern, accessible site. Content copied verbatim from the existing site. No redesign beyond readability/elderly-friendly improvements.

## Pages (8)

- `/` — Home
- `/headaches-and-migraines`
- `/watson-headache-approach`
- `/treatments-available`
- `/pilates`
- `/your-physio`
- `/book-now`
- `/contact`

Each route gets its own `head()` with unique title, meta description, og/twitter tags, and canonical. JSON-LD `MedicalBusiness` (Physiotherapy) in `__root.tsx`. `public/robots.txt` and `public/sitemap.xml`.

## Layout

- Sticky header on every page: clinic name/logo, nav, primary **Book Now** + secondary **View Prices & Availability** (both link to main Cliniko URL).
- Mobile: hamburger menu, single-column, ≥48px tap targets.
- Footer: Bellerive + Lauderdale addresses, email, fax, Health Link, copyright.

## Booking (Cliniko)

- Main multi-type URL on all Book Now / View Prices buttons.
- 5 per-appointment-type URLs preserved verbatim (Headache Initial, Standard Initial, 30min Follow-ups, Standard 45min Follow-up, 1:1 Pilates) on the Book Now page cards.

## Contact form

- Recipient: **accounts@kingsdigital.com.au**
- `createServerFn` POST in `src/lib/contact.functions.ts` with Zod validation (name, email, phone, address, subject, message) + honeypot.
- Email delivery via **Resend HTTP API** (Vercel/edge-compatible, no Node native deps). Will request `RESEND_API_KEY` after plan approval.
- Inline success/error states.

## Assets

Download all Wix-hosted images and self-host via `lovable-assets` CDN. No Wix dependency.

## Design (readability / elderly-friendly)

Calm clinical palette (warm sand/cream, deep teal, terracotta accent), base 18px, generous line-height, max ~70ch line length, single readable sans, strong focus states, semantic HTML, descriptive alt text. Tokens in `src/styles.css`.

## Technical structure

```text
src/
  components/    header, footer, book-buttons, appointment-card, service-tile, contact-form, mobile-nav
  lib/           cliniko.ts, contact.functions.ts
  lib/email/     resend.server.ts
  routes/        __root.tsx + 8 page routes
  assets/        migrated images (via .asset.json pointers)
public/          robots.txt, sitemap.xml, favicon
```

## Out of scope

No redesign, no new copy, no booking system replacement, no CMS, no analytics beyond defaults.

## Next step after approval

Switch to build mode, then request the `RESEND_API_KEY` secret so the contact form can deliver to accounts@kingsdigital.com.au.