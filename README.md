# Precision Ledger

# Prompt for Lovable.dev — Petra Straková Accounting Website

Copy the whole text below as your first message into Lovable.

---

Build me a multi-page website for a bookkeeping/accounting business. **The entire website content (all text visible to visitors — navigation, headings, body copy, form labels, buttons) must be written in Czech.** Before designing anything, read section 0 carefully — it is the single most important instruction in this brief and applies to every page and component you build.

## 0. This website must not look like a typical AI-generated website

The vast majority of AI-built websites look the same, and people recognize it instantly. I want the exact opposite — a site that looks like it was designed by an experienced designer specifically for this client, with real attention to detail.

**Avoid these typical AI patterns:**
- The generic hero layout of a big centered headline, a subheadline, and two buttons side by side — if you do use something like this, break it with asymmetry, an unusual text/space ratio, or an unconventional CTA placement.
- Excessive symmetry and centering everywhere — use an asymmetric grid, let elements spill over, create visual tension.
- Generic "feature card" grids with the same icon-on-top, heading, text pattern repeated 3–4 times identically — give every section its own composition.
- Overused purple-blue gradients, glassmorphism without purpose, generic 3D illustrations, unmodified stock icon sets.
- Predictable "fade-in + slide-up on everything on scroll" — use animation deliberately, not as a blanket effect.
- Generic marketing phrases like "We are a team of professionals" or "Quality is our priority" — every piece of copy must be concrete and grounded in the client's actual content (see section 1), and written in natural, professional Czech — not a stiff, literal-sounding translation.
- Identical spacing and alignment in every section — let sections breathe differently, vary density and rhythm.
- Default Tailwind/shadcn typography with no personality — use deliberate size contrast and tracking.

**Instead:**
- Design one concrete visual motif tied to the industry — accounting is about precision, order, and numbers that must line up exactly. Use a subtle motif of fine ledger lines or an aligned-column grid, echoed quietly across the site (in the hero background, as a section divider, in the pricing table detail) — a signature, not decoration on every corner.
- Give every page its own compositional logic, not a repeated component block.
- Use small, deliberate hover micro-interactions, not a generic scale-up.
- Write every piece of copy specifically, in the voice of a calm, experienced professional — not marketing clichés, and not a robotic-sounding translation.

If you're ever unsure whether something looks templated, choose the less obvious solution.

## 1. About the client (real content — do not invent anything, use as-is in Czech)

**Petra Straková** — freelance accountant/bookkeeper, 20 years of experience managing accounting for small and large companies and self-employed clients (OSVČ).

- IČ (business ID): 08109672
- Not VAT registered ("Nejsem plátce DPH")
- Location: Trnová u Plzně
- Phone: +420 773 506 877
- Email: petra-k@volny.cz

**About the business (source content, rephrase stylistically in Czech but keep every fact):** Vede podvojné účetnictví i daňovou evidenci, zpracovává daňová přiznání všech typů daní pro fyzické osoby, právnické osoby i zaměstnance. Má zkušenosti se zpracováním podkladů pro účetní audit a se zastupováním klientů na úřadech. Průběžně se vzdělává na školeních a kurzech ke změnám daňových a účetních zákonů. Nabízí i konzultace k účetnictví a daním.

**Services offered (list content, write natural Czech copy for each on the site):**
1. Vedení podvojného účetnictví (včetně mezd a všech výkazů a hlášení)
2. Vedení daňové evidence (včetně mezd a všech výkazů a hlášení)
3. Zpracování daňových přiznání všech typů daní
4. Zastupování na úřadech
5. Obsluha datové schránky
6. Konzultace k daním a účetnictví

**Pricing (display as a clear Czech-language pricing table, keep all figures exact):**

Měsíční paušál za daňovou evidenci — neplátce DPH: 0–20 položek 400 Kč, 21–50 položek 900 Kč, 51–100 položek 1 700 Kč.
Měsíční paušál za daňovou evidenci — plátce DPH: 0–20 položek 700 Kč, 21–50 položek 1 200 Kč, 51–100 položek 2 000 Kč.
Měsíční paušál za podvojné účetnictví — neplátce DPH: 0–20 položek 500 Kč, 21–50 položek 1 100 Kč, 51–100 položek 2 200 Kč.
Měsíční paušál za podvojné účetnictví — plátce DPH: 0–20 položek 800 Kč, 21–50 položek 1 400 Kč, 51–100 položek 2 500 Kč.

V paušálu je zahrnuto přiznání k dani z příjmu, k silniční dani, u plátců DPH přiznání DPH, kontrolní a souhrnné hlášení, u OSVČ roční přehledy pro OSSZ a zdravotní pojišťovnu. Zpracování mezd v ceně není.

Nad 100 položek individuální dohoda, orientačně 15 Kč/položka u daňové evidence a 20 Kč/položka u podvojného účetnictví, plus cena za daňová přiznání.

Ostatní ceny: zpracování mezd 500 Kč/zaměstnanec, přiznání daně z příjmu 1 000 Kč/ks, přiznání daně z nemovitostí 1 000 Kč/ks, DPH a kontrolní/souhrnné hlášení 300 Kč/ks, ostatní daňová přiznání 500 Kč/ks, hlídání datové schránky 150 Kč/měsíc, konzultace 500 Kč/hodina.

**Tone (in Czech copy):** calm, matter-of-fact, trustworthy. No exaggerated superlatives, no forced enthusiasm. It should read like the site of someone who does honest, careful work for a long time and doesn't need to shout about it.

## 2. Design system

- **Colors:** dark charcoal/deep navy as the primary text and accent color (trust, seriousness), white/very light gray as the dominant background, one restrained accent tone (e.g. muted green or copper) used sparingly only for CTA buttons and key highlights — never as a flat area.
- **Typography:** headings in a bold typeface with character (not a default system font), body copy in a readable sans-serif with good line-height. Clear hierarchy, a strong hero headline.
- **Visual language:** minimalist, precise, "everything lines up" — let this echo the accounting industry (precision, order, numbers).
- Text-to-background contrast at least WCAG AA.

## 3. Site structure (true multi-page site, not a single scrolling page)

Real routing — every nav item has its own URL.

1. **Domů (Home)** — hero with a clear statement (who Petra Straková is, 20 years of experience, what problem she solves), a short overview of the main services linking to the Services page, a strong CTA toward an inquiry/contact.
2. **Služby (Services)** — detailed breakdown of all six services, each with its own short explanation, not just a bare list.
3. **Ceník (Pricing)** — clearly structured pricing table (tax records / double-entry bookkeeping × VAT payer/non-payer), with additional per-task prices below. Must be scannable at a glance, not a wall of text.
4. **Kontakt (Contact)** — contact details, a map (Trnová u Plzně), a contact form with basic validation.

Shared header and footer, current page visually highlighted in the navigation.

## 4. Functional requirements

- Contact form: name, email, message, basic client-side and server-side validation, spam protection (a honeypot is enough), clear loading/success/error states. All labels and messages in Czech.
- Fully responsive, mobile-first.
- Fast loading, no unnecessary render-blocking scripts.
- Semantic HTML, correct heading hierarchy, alt text on images.
- No client photos available yet — if you need a visual element in the hero, use an abstract graphic motif per section 0, not a stock photo of people in an office.

## 5. Final impression

Within a few seconds, a visitor should feel this is run by an experienced professional who takes her business seriously — not that they went through a generic website generator. The site must be fast, clear, flawless on mobile, in natural professional Czech throughout, and must clearly guide the visitor toward one action: making an inquiry.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/61d3e617-5651-4879-a97e-95b9b0857e9d).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
