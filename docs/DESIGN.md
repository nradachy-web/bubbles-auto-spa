# Bubbles Auto Spa, design system v2: "Under the lights"

Rebuild of bubblesautospa.org, September 2026. This document is the single source of truth for
every visual decision. Anyone touching a component reads this first.

## 1. The idea

Bubbles Auto Spa works in two kinds of light. At the shop on Little Mack the cars sit under a
hexagonal LED ceiling in a black studio. On mobile jobs they sit in Macomb County driveways in
flat Michigan daylight. The site is built on that alternation:

- Studio sections are true black (#000). They hold the hero, the shop, the finished work, the
  spec sheet, the final call to action and the footer. Photos taken in the studio have a black
  background, so their edges melt into the page instead of sitting in a frame.
- Daylight sections are white (#fff) or concrete (#E9ECEF). They hold the mobile story, the
  services index, the process, the quote form and the questions.

Everything else is restraint. The photography is the decoration. One accent colour, one type
family, one page-load moment.

## 2. Tokens (globals.css @theme)

Colour
- black    #000000  studio ground
- graphite #1C1F23  raised panels and form fields on black
- white    #FFFFFF  daylight ground
- concrete #E9ECEF  alternate daylight panels; hairlines use rgba(17,20,23,0.12) on light and rgba(255,255,255,0.14) on black
- ink      #111417  primary text on light
- steel    #5F6B76  secondary text on light
- cloud    #AEB6BE  secondary text on black
- blue     #0064B0  the logo blue. CTAs, links, focus rings. White on blue is 7.3:1.
- bubble   #00A8E8  the logo's light bubble blue. ONLY as text/links on black backgrounds, never on white.

No gold, no gradients, no glows, no glass. No tinted near-blacks (#0B0B0B etc). Black is black.

Radius
- images 2px, buttons and fields 4px, panels 6px. Nothing rounder. No pills.

Type: Archivo (variable, wdth 62 to 125, wght 100 to 900), loaded once via next/font.
- Display (h1, h2, big numerals, wordmark): font-stretch 118%, weight 600, letter-spacing -0.02em, line-height 1.0 to 1.05.
- Headings h3/h4: font-stretch 108%, weight 600, letter-spacing -0.01em.
- Body: font-stretch 100%, weight 400, 17px / 1.55. Measure capped at 38rem (about 70 characters).
- Small: 14px, weight 500. Captions 13px, steel/cloud.
- Numerals in phone numbers: font-stretch 110%, weight 600, tabular figures.
Scale: 13, 14, 17, 21, 26, 33, 41, 52, 65, 82. h1 = clamp(2.6rem, 6.4vw, 5.1rem). h2 = clamp(2rem, 4.2vw, 3.25rem). h3 = 1.3rem.
Sentence case everywhere. No all-caps labels except the wordmark, which mirrors the client's own logo.

Layout
- Container max 1320px, padding 20px mobile, 40px from lg.
- 12-column grid. Editorial split for prose sections: heading in columns 1 to 4, body in 6 to 12.
- Section padding: 64px mobile, 112px desktop. Adjacent sections of the same colour share a hairline, never a gap.
- Left aligned. The only centred text is the 404 page.

Motion
- One orchestrated moment: the hero "rinse". On load a white foam sheet covers the hero and
  wipes downward with a soft irregular edge (SVG mask), revealing the black studio and the car.
  About 1.1s, ease-out, runs once. With prefers-reduced-motion the sheet is simply not rendered.
- Everything else answers an action: services index hover swaps the photo, before/after toggle
  crossfades, accordion opens, nav gains a background after scroll, buttons darken on hover.
- No scroll-triggered fades, no parallax, no marquee, no hover-lift on cards, no scale on hover.

Structure devices (only where they carry information)
- Hairline rows for tabular content: the spec sheet, the services index, FAQ rows, included-items lists.
- Numbering only in the process (an actual sequence).
- No eyebrow labels above headings. No middle-dot separators. No arrows appended to links.

## 3. Components

Button: 4px radius, 48px tall, padding 0 22px, weight 600 15px. Variants: `solid` (blue bg, white text; hover #00528F), `outline` (1px hairline, current colour; on black the line is white at 40%), `text` (underline on hover). Phone buttons show the number in tabular figures.

Photo: `<img>` with explicit width/height, `object-fit: cover`, 2px radius, background #1C1F23 while loading, always `loading="lazy"` except the hero. Alt text describes the vehicle and the setting, never invents the service performed.

Section heading: h2 in display style, optional lede paragraph in steel/cloud at 21px. No overline.

Spec sheet: a two-column definition list on black, hairline rows, label in cloud, value in white.

Services index: rows with h3 name, one line of body, and a "See <service>" text link. On lg+, a sticky photo column at right shows the active row's photo; hovering or focusing a row swaps it with a 300ms crossfade. On smaller screens each row shows its own photo above the text.

Before/after: a photo pair with a two-segment control (Before | After). The control state crossfades the photos. Default state is After.

Quote form: 4 steps (vehicle, services, contact, review). Fields are 4px radius, 1px hairline, 48px tall, white on light sections. Vehicle types use the custom line-icon set in `src/components/icons/vehicles.tsx`.

## 4. Copy rules

- No em dashes or en dashes anywhere. Use commas, periods or parentheses.
- No fabricated reviews, prices, years in business, counts, or guarantees. Everything factual comes from `constants.ts`.
- Phone is always (586) 217-0123. Address 23525 Little Mack Ave, St. Clair Shores, MI 48080.
- Footer credit reads exactly "Website & marketing by Modern Apex Strategies" linked to https://modernapexstrategies.com.
- Write from the customer's seat, plain verbs, sentence case. Buttons say what happens: "Get a custom quote", "Call (586) 217-0123", "Send quote request".

## 5. Photo library

All web photos live in `public/photos/*.webp`, exported from the owner's library at 1600px long side. Studio shots: `hero-foam` (GT3 in snow foam), `shop-gt3` (GT3 clean under the hex lights). Mobile rig: `van`, `trailer`, `rig-lot`. Real before/after pairs: `ba-cargo-*`, `ba-trunk-*`, `ba-seats-*`, `ba-cabin-*`. Everything else is named by vehicle. Use `asset()` from `src/lib/asset.ts` for every src so the GitHub Pages base path keeps working.
