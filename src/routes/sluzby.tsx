import { createFileRoute, Link } from "@tanstack/react-router";
import { RuleDivider } from "../components/site/Ledger";

export const Route = createFileRoute("/sluzby")({
  head: () => ({
    meta: [
      { title: "Služby — účetnictví, daně a mzdy | Petra Straková" },
      {
        name: "description",
        content:
          "Podvojné účetnictví, daňová evidence, mzdy, daňová přiznání všech typů daní, zastupování na úřadech, obsluha datové schránky a konzultace.",
      },
      { property: "og:title", content: "Služby — Petra Straková, účetní" },
      {
        property: "og:description",
        content:
          "Šest služeb, které pokryjí celou účetní a daňovou agendu OSVČ i společnosti.",
      },
    ],
  }),
  component: Sluzby,
});

const sluzby = [
  {
    c: "01",
    t: "Vedení podvojného účetnictví",
    p: "Pro společnosti, které musí nebo chtějí vést účetnictví v plném rozsahu. Zpracuji doklady, vedu hlavní knihu a deník, sleduji pohledávky a závazky, připravím měsíční i roční výkazy a hlášení. Součástí je i mzdová agenda včetně přihlášek, odhlášek a hlášení na OSSZ a zdravotní pojišťovny.",
    b: ["Hlavní kniha, deník, saldokonto", "Rozvaha a výkaz zisku a ztráty", "Mzdy a související hlášení", "Podklady pro účetní audit"],
  },
  {
    c: "02",
    t: "Vedení daňové evidence",
    p: "Řešení pro OSVČ — plátce i neplátce DPH. Vedu peněžní deník, evidenci pohledávek a závazků, majetku i zásob a hlídám návaznost na přiznání k dani z příjmu. Stejně jako u účetnictví zpracuji i mzdy zaměstnanců a všechny výkazy a hlášení, které k tomu patří.",
    b: ["Peněžní deník a evidence majetku", "Evidence DPH u plátců", "Mzdy a odvody", "Roční přehledy pro OSSZ a pojišťovnu"],
  },
  {
    c: "03",
    t: "Zpracování daňových přiznání",
    p: "Přiznání ke všem typům daní pro fyzické osoby, právnické osoby i zaměstnance. Daň z příjmu, DPH s kontrolním a souhrnným hlášením, silniční daň, daň z nemovitých věcí i méně obvyklá přiznání. Přiznání zpracuji i tehdy, pokud u mě nemáte vedené účetnictví — stačí donést podklady.",
    b: ["Fyzické i právnické osoby", "Zaměstnanci", "DPH, kontrolní a souhrnné hlášení", "Silniční daň a daň z nemovitostí"],
  },
  {
    c: "04",
    t: "Zastupování na úřadech",
    p: "Na finanční úřad, OSSZ nebo zdravotní pojišťovnu za vás zajdu sama. Vyřídím podání, doplnění podkladů i dotazy, které přijdou po odeslání přiznání. Vím, co bývá potřeba doložit a v jaké podobě, takže se věc obvykle uzavře napoprvé.",
    b: ["Finanční úřad", "OSSZ a zdravotní pojišťovny", "Doplnění podkladů a výzvy"],
  },
  {
    c: "05",
    t: "Obsluha datové schránky",
    p: "Datová schránka doručuje i tehdy, když se do ní nikdo nepodívá — a lhůty běží. Pravidelně ji za vás kontroluji, zprávy zakládám a to podstatné vám hned oznámím, ať se termín nedozvíte až z penále.",
    b: ["Pravidelná kontrola", "Založení a archivace zpráv", "Upozornění na lhůty"],
  },
  {
    c: "06",
    t: "Konzultace k daním a účetnictví",
    p: "Hodina nad konkrétní situací dřív, než se z ní stane problém: rozvaha, jestli se vyplatí stát se plátcem DPH, jak zaúčtovat nestandardní případ, co s sebou nese přijetí prvního zaměstnance. Průběžně se vzdělávám na školeních ke změnám daňových a účetních zákonů, takže vycházím z aktuální úpravy.",
    b: ["Volba formy evidence", "Registrace k DPH", "Nestandardní účetní případy"],
  },
];

function Sluzby() {
  return (
    <>
      <header className="border-b border-rule">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:px-8 md:grid-cols-12 md:py-20">
          <div className="md:col-span-7">
            <p className="eyebrow">Služby</p>
            <h1 className="mt-5 text-4xl md:text-6xl">
              Celá agenda, jedna
              <br />
              odpovědná osoba.
            </h1>
          </div>
          <p className="text-muted-foreground md:col-span-4 md:col-start-9 md:self-end">
            Podklady předáváte jednou, o zbytek se postarám — od zaúčtování přes hlášení až po
            komunikaci s úřady.
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {sluzby.map((s, i) => (
          <section
            key={s.c}
            className={`grid gap-6 border-b border-rule py-12 md:grid-cols-12 md:gap-10 md:py-16 ${
              i % 2 === 1 ? "md:pl-[8%]" : ""
            }`}
          >
            <div className="md:col-span-4">
              <span className="tabular font-mono text-xs text-accent">{s.c}</span>
              <h2 className="mt-3 text-2xl md:text-[1.75rem]">{s.t}</h2>
            </div>
            <div className="md:col-span-5">
              <p className="text-muted-foreground">{s.p}</p>
            </div>
            <ul className="space-y-2 md:col-span-3">
              {s.b.map((b) => (
                <li key={b} className="flex gap-3 border-t border-rule pt-2 text-sm">
                  <span className="mt-2.5 h-px w-3 shrink-0 bg-accent" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <RuleDivider label="Další krok" />
        <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-lg text-3xl md:text-4xl">
            Nevíte, která varianta se vás týká? Napište mi pár vět o svém podnikání.
          </h2>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/cenik"
              className="border border-input px-6 py-3.5 text-sm transition-colors hover:border-accent hover:text-accent"
            >
              Podívat se na ceník
            </Link>
            <Link
              to="/kontakt"
              className="bg-accent px-6 py-3.5 text-sm font-medium text-accent-foreground transition-[letter-spacing] duration-300 hover:tracking-wide"
            >
              Poslat poptávku
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
