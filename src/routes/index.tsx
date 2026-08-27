import { createFileRoute, Link } from "@tanstack/react-router";
import { LedgerBackdrop, RuleDivider } from "../components/site/Ledger";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Petra Straková — účetnictví a daně, Trnová u Plzně" },
      {
        name: "description",
        content:
          "Podvojné účetnictví, daňová evidence, mzdy a daňová přiznání pro OSVČ i firmy. Dvacet let praxe, Trnová u Plzně. Napište si o nezávaznou nabídku.",
      },
      { property: "og:title", content: "Petra Straková — účetnictví a daně" },
      {
        property: "og:description",
        content:
          "Dvacet let vedu účetnictví a daňovou evidenci pro OSVČ i společnosti. Trnová u Plzně.",
      },
    ],
  }),
  component: Home,
});

const prehled = [
  {
    c: "01",
    t: "Podvojné účetnictví",
    d: "Kompletní vedení včetně mezd, výkazů a hlášení.",
  },
  { c: "02", t: "Daňová evidence", d: "Pro OSVČ, plátce i neplátce DPH, s mzdovou agendou." },
  { c: "03", t: "Daňová přiznání", d: "Všechny typy daní — fyzické i právnické osoby, zaměstnanci." },
  { c: "04", t: "Zastupování na úřadech", d: "Finanční úřad, OSSZ, zdravotní pojišťovny." },
  { c: "05", t: "Datová schránka", d: "Hlídám ji za vás a nic vám neuteče." },
  { c: "06", t: "Konzultace", d: "Rozvaha nad konkrétním případem, dřív než se stane problémem." },
];

function Home() {
  return (
    <>
      {/* HERO — asymetrická sazba, číslovaný sloupec vpravo */}
      <section className="relative overflow-hidden border-b border-rule">
        <LedgerBackdrop />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-5 pt-20 pb-24 sm:px-8 md:grid-cols-12 md:pt-28 md:pb-32">
          <div className="md:col-span-7">
            <p className="eyebrow">Účetní · IČ 08109672 · Trnová u Plzně</p>
            <h1 className="mt-6 text-[2.6rem] sm:text-6xl md:text-[4.4rem]">
              Účetnictví, které
              <br />
              <span className="text-accent">sedí na haléř</span>
              <br />
              už dvacátým rokem.
            </h1>
            <p className="mt-8 max-w-md text-[1.05rem] text-muted-foreground">
              Jmenuji se Petra Straková. Vedu podvojné účetnictví i daňovou evidenci malým i velkým
              firmám a OSVČ. Postarám se o uzávěrky, přiznání, hlášení i o to, aby vám nic neuteklo
              v datové schránce.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Link
                to="/kontakt"
                className="group/link relative bg-accent px-7 py-4 text-sm font-medium text-accent-foreground"
              >
                Napsat nezávaznou poptávku
                <span className="absolute inset-0 border border-accent transition-transform duration-300 group-hover/link:translate-x-1.5 group-hover/link:translate-y-1.5" />
              </Link>
              <a href="tel:+420773506877" className="ruled-link group/link tabular text-sm">
                nebo rovnou zavolejte — +420 773 506 877
                <span className="ruled-link-line" />
              </a>
            </div>
          </div>

          {/* pravý sloupec jako řádek účetní knihy */}
          <aside className="md:col-span-4 md:col-start-9 md:pt-4">
            <dl className="divide-y divide-rule border-y border-rule bg-background/70">
              {[
                ["Praxe", "20 let"],
                ["Klienti", "OSVČ i s. r. o."],
                ["Sídlo", "Trnová u Plzně"],
                ["DPH", "Nejsem plátce"],
              ].map(([k, v]) => (
                <div key={k} className="flex items-baseline justify-between py-3.5">
                  <dt className="eyebrow">{k}</dt>
                  <dd className="tabular font-display text-lg font-semibold">{v}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
              Průběžně se vzdělávám na školeních a kurzech ke změnám daňových a účetních zákonů —
              tak, aby se vás legislativní změny dotkly co nejméně.
            </p>
          </aside>
        </div>
      </section>

      {/* PŘEHLED SLUŽEB — účetní kniha, ne kartičky */}
      <section className="mx-auto max-w-6xl px-5 pt-20 sm:px-8 md:pt-28">
        <RuleDivider label="Co pro vás dělám" />
        <div className="mt-10 grid gap-10 md:grid-cols-12">
          <h2 className="text-3xl md:col-span-4 md:text-4xl">
            Šest položek, které pokryjí celou vaši agendu.
          </h2>
          <div className="md:col-span-8">
            <ul>
              {prehled.map((s) => (
                <li key={s.c} className="group border-t border-rule last:border-b">
                  <Link
                    to="/sluzby"
                    className="grid grid-cols-[3rem_1fr] items-baseline gap-x-5 py-5 transition-[padding] duration-300 group-hover:pl-3 sm:grid-cols-[3rem_1fr_minmax(0,20rem)]"
                  >
                    <span className="tabular font-mono text-xs text-accent">{s.c}</span>
                    <span className="font-display text-lg font-semibold tracking-tight">{s.t}</span>
                    <span className="col-start-2 text-sm text-muted-foreground sm:col-start-3">
                      {s.d}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <Link to="/sluzby" className="ruled-link group/link mt-6 inline-block text-sm">
              Podrobný popis služeb
              <span className="ruled-link-line" />
            </Link>
          </div>
        </div>
      </section>

      {/* O PRÁCI — jiná kompozice: široký citát */}
      <section className="mt-24 border-y border-rule bg-secondary/60">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-20">
          <div className="grid gap-10 md:grid-cols-12">
            <p className="eyebrow md:col-span-3">Jak pracuji</p>
            <div className="md:col-span-9">
              <p className="font-display text-2xl leading-[1.25] font-semibold tracking-tight md:text-[2rem]">
                „Účetnictví není o tom mít hezké tabulky. Je o tom, aby čísla souhlasila, termíny
                seděly a vy jste se k tomu nemuseli vracet.“
              </p>
              <div className="mt-8 grid gap-6 text-sm text-muted-foreground sm:grid-cols-3">
                <p>
                  Mám za sebou přípravu podkladů pro účetní audit i zastupování klientů na úřadech —
                  vím, co bývá potřeba doložit a v jaké podobě.
                </p>
                <p>
                  Podklady si předáváme tak, jak vám vyhovuje: osobně, e-mailem nebo datovou
                  schránkou. Termíny hlídám já.
                </p>
                <p>
                  Když si nebudete jistí, jestli něco dělat tak, nebo jinak, zavolejte dřív než po
                  uzávěrce. Konzultace bývá levnější než oprava.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CENÍK UPOUTÁVKA + CTA */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-24">
        <div className="grid items-end gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <h2 className="text-3xl md:text-4xl">Ceny znáte předem.</h2>
            <p className="mt-4 max-w-md text-muted-foreground">
              Měsíční paušál se odvíjí od počtu položek a od toho, zda jste plátce DPH. V paušálu je
              zahrnuto přiznání k dani z příjmu, silniční dani, u plátců DPH i kontrolní a souhrnné
              hlášení a u OSVČ roční přehledy pro OSSZ a zdravotní pojišťovnu.
            </p>
            <Link to="/cenik" className="ruled-link group/link mt-6 inline-block text-sm">
              Celý ceník
              <span className="ruled-link-line" />
            </Link>
          </div>
          <div className="md:col-span-5 md:col-start-8">
            <table className="w-full text-sm">
              <caption className="eyebrow mb-3 text-left">
                Daňová evidence, neplátce DPH — měsíčně
              </caption>
              <tbody className="tabular">
                {[
                  ["0–20 položek", "400 Kč"],
                  ["21–50 položek", "900 Kč"],
                  ["51–100 položek", "1 700 Kč"],
                ].map(([a, b]) => (
                  <tr key={a} className="border-t border-rule last:border-b">
                    <th scope="row" className="py-3 text-left font-normal text-muted-foreground">
                      {a}
                    </th>
                    <td className="py-3 text-right font-display font-semibold">{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-rule bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-16 sm:px-8 md:flex-row md:items-center md:justify-between">
          <h2 className="max-w-lg text-3xl md:text-4xl">
            Napište mi, co potřebujete. Ozvu se s konkrétní cenou.
          </h2>
          <Link
            to="/kontakt"
            className="self-start bg-accent px-7 py-4 text-sm font-medium text-accent-foreground transition-[letter-spacing] duration-300 hover:tracking-wide"
          >
            Poptat účetní služby
          </Link>
        </div>
      </section>
    </>
  );
}
