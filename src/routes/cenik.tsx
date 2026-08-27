import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/cenik")({
  head: () => ({
    meta: [
      { title: "Ceník účetních služeb | Petra Straková" },
      {
        name: "description",
        content:
          "Měsíční paušály za daňovou evidenci a podvojné účetnictví podle počtu položek, ceny za mzdy, daňová přiznání, datovou schránku a konzultace.",
      },
      { property: "og:title", content: "Ceník účetních služeb — Petra Straková" },
      {
        property: "og:description",
        content: "Paušály od 400 Kč měsíčně. Ceny bez skrytých položek, nejsem plátce DPH.",
      },
    ],
  }),
  component: Cenik,
});

const pausaly = [
  {
    t: "Daňová evidence",
    v: [
      { d: "Neplátce DPH", r: ["400 Kč", "900 Kč", "1 700 Kč"] },
      { d: "Plátce DPH", r: ["700 Kč", "1 200 Kč", "2 000 Kč"] },
    ],
  },
  {
    t: "Podvojné účetnictví",
    v: [
      { d: "Neplátce DPH", r: ["500 Kč", "1 100 Kč", "2 200 Kč"] },
      { d: "Plátce DPH", r: ["800 Kč", "1 400 Kč", "2 500 Kč"] },
    ],
  },
];

const ostatni = [
  ["Zpracování mezd", "500 Kč / zaměstnanec"],
  ["Přiznání daně z příjmu", "1 000 Kč / ks"],
  ["Přiznání daně z nemovitostí", "1 000 Kč / ks"],
  ["DPH, kontrolní a souhrnné hlášení", "300 Kč / ks"],
  ["Ostatní daňová přiznání", "500 Kč / ks"],
  ["Hlídání datové schránky", "150 Kč / měsíc"],
  ["Konzultace", "500 Kč / hodina"],
];

function Cenik() {
  return (
    <>
      <header className="border-b border-rule">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:px-8 md:grid-cols-12 md:py-20">
          <div className="md:col-span-7">
            <p className="eyebrow">Ceník</p>
            <h1 className="mt-5 text-4xl md:text-6xl">Ceny bez hvězdiček pod čarou.</h1>
          </div>
          <p className="tabular text-muted-foreground md:col-span-4 md:col-start-9 md:self-end">
            Měsíční paušál se řídí počtem položek a tím, zda jste plátce DPH. Uvedené ceny jsou
            konečné — nejsem plátce DPH.
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <h2 className="text-2xl md:text-3xl">Měsíční paušály</h2>

        <div className="mt-8 space-y-12">
          {pausaly.map((blok) => (
            <div key={blok.t}>
              <div className="flex items-baseline gap-4">
                <h3 className="font-display text-lg font-semibold">{blok.t}</h3>
                <span className="h-px flex-1 bg-rule" />
              </div>

              <div className="mt-4 overflow-x-auto">
                <table className="tabular w-full min-w-[34rem] border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-foreground/25">
                      <th scope="col" className="eyebrow py-3 text-left">
                        Rozsah
                      </th>
                      <th scope="col" className="eyebrow py-3 text-right">
                        0–20 položek
                      </th>
                      <th scope="col" className="eyebrow py-3 text-right">
                        21–50 položek
                      </th>
                      <th scope="col" className="eyebrow py-3 text-right">
                        51–100 položek
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {blok.v.map((radek) => (
                      <tr
                        key={radek.d}
                        className="border-b border-rule transition-colors hover:bg-secondary/70"
                      >
                        <th scope="row" className="py-4 text-left font-normal">
                          {radek.d}
                        </th>
                        {radek.r.map((cena, i) => (
                          <td
                            key={i}
                            className="py-4 text-right font-display text-base font-semibold"
                          >
                            {cena}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-8 border-t border-rule pt-8 md:grid-cols-2">
          <div>
            <p className="eyebrow">V paušálu je zahrnuto</p>
            <p className="mt-3 text-sm text-muted-foreground">
              Přiznání k dani z příjmu, přiznání k silniční dani, u plátců DPH přiznání k DPH,
              kontrolní a souhrnné hlášení, u OSVČ roční přehledy pro OSSZ a zdravotní pojišťovnu.
              Zpracování mezd v ceně paušálu není.
            </p>
          </div>
          <div>
            <p className="eyebrow">Nad 100 položek</p>
            <p className="tabular mt-3 text-sm text-muted-foreground">
              Individuální dohoda. Orientačně 15 Kč za položku u daňové evidence a 20 Kč za položku
              u podvojného účetnictví, plus cena za daňová přiznání.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-rule bg-secondary/60">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-12">
          <div className="md:col-span-4">
            <h2 className="text-2xl md:text-3xl">Jednotlivé úkony</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Účtuji i samostatně, bez měsíčního paušálu — třeba když potřebujete jen přiznání nebo
              jednorázovou konzultaci.
            </p>
          </div>
          <dl className="tabular md:col-span-7 md:col-start-6">
            {ostatni.map(([k, v]) => (
              <div
                key={k}
                className="group flex items-baseline justify-between gap-4 border-t border-rule py-3.5 last:border-b"
              >
                <dt className="text-sm text-muted-foreground transition-colors group-hover:text-foreground">
                  {k}
                </dt>
                <span className="h-px flex-1 translate-y-[-2px] bg-rule opacity-0 transition-opacity group-hover:opacity-100" />
                <dd className="font-display font-semibold whitespace-nowrap">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-16 sm:px-8 md:flex-row md:items-end md:justify-between">
        <h2 className="max-w-lg text-3xl md:text-4xl">
          Spočítám vám paušál na míru podle skutečného objemu dokladů.
        </h2>
        <Link
          to="/kontakt"
          className="self-start bg-accent px-7 py-4 text-sm font-medium text-accent-foreground transition-[letter-spacing] duration-300 hover:tracking-wide"
        >
          Vyžádat nabídku
        </Link>
      </section>
    </>
  );
}
