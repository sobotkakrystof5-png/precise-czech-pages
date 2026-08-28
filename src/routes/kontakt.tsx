import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState, type FormEvent } from "react";
import { contactSchema, sendContact } from "../lib/contact.functions";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt — Petra Straková, účetní v Trnové u Plzně" },
      {
        name: "description",
        content:
          "Telefon +420 773 506 877, e-mail petra-k@volny.cz, Trnová u Plzně. Napište mi nezávaznou poptávku na vedení účetnictví nebo daňové přiznání.",
      },
      { property: "og:title", content: "Kontakt — Petra Straková, účetní" },
      {
        property: "og:description",
        content: "Trnová u Plzně, +420 773 506 877, petra-k@volny.cz.",
      },
    ],
  }),
  component: Kontakt,
});

type Errors = Partial<Record<"jmeno" | "email" | "telefon" | "zprava", string>>;

function Kontakt() {
  const odeslat = useServerFn(sendContact);
  const [stav, setStav] = useState<"idle" | "odesila" | "hotovo" | "chyba">("idle");
  const [errors, setErrors] = useState<Errors>({});

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const raw = {
      jmeno: String(fd.get("jmeno") ?? ""),
      email: String(fd.get("email") ?? ""),
      telefon: String(fd.get("telefon") ?? ""),
      zprava: String(fd.get("zprava") ?? ""),
      web: String(fd.get("web") ?? ""),
    };

    const parsed = contactSchema.safeParse(raw);
    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof Errors;
        if (key && !next[key]) next[key] = issue.message;
      }
      setErrors(next);
      setStav("idle");
      return;
    }

    setErrors({});
    setStav("odesila");
    try {
      await odeslat({ data: parsed.data });
      form.reset();
      setStav("hotovo");
    } catch (err) {
      console.error(err);
      setStav("chyba");
    }
  }


  const inputClass =
    "w-full border-0 border-b border-input bg-transparent py-2.5 text-sm outline-none transition-colors focus:border-accent";

  return (
    <>
      <header className="border-b border-rule">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:px-8 md:grid-cols-12 md:py-20">
          <div className="md:col-span-7">
            <p className="eyebrow">Kontakt</p>
            <h1 className="mt-5 text-4xl md:text-6xl">Ozvěte se. Odpovím osobně.</h1>
          </div>
          <p className="text-muted-foreground md:col-span-4 md:col-start-9 md:self-end">
            Napište pár vět o svém podnikání — obor, zda jste plátce DPH a přibližný počet dokladů
            za měsíc. Podle toho vám pošlu konkrétní cenu.
          </p>
        </div>
      </header>

      <div className="mx-auto grid max-w-6xl gap-14 px-5 py-14 sm:px-8 md:grid-cols-12 md:py-20">
        {/* Formulář */}
        <section className="md:col-span-7">
          <h2 className="text-2xl">Nezávazná poptávka</h2>

          <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-7">
            <div className="grid gap-7 sm:grid-cols-2">
              <div>
                <label htmlFor="jmeno" className="eyebrow block">
                  Jméno a příjmení *
                </label>
                <input
                  id="jmeno"
                  name="jmeno"
                  className={inputClass}
                  maxLength={100}
                  aria-invalid={!!errors.jmeno}
                  aria-describedby={errors.jmeno ? "err-jmeno" : undefined}
                />
                {errors.jmeno && (
                  <p id="err-jmeno" className="mt-1.5 text-xs text-destructive">
                    {errors.jmeno}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="telefon" className="eyebrow block">
                  Telefon
                </label>
                <input id="telefon" name="telefon" className={inputClass} maxLength={40} />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="eyebrow block">
                E-mail *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className={inputClass}
                maxLength={255}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "err-email" : undefined}
              />
              {errors.email && (
                <p id="err-email" className="mt-1.5 text-xs text-destructive">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="zprava" className="eyebrow block">
                Zpráva *
              </label>
              <textarea
                id="zprava"
                name="zprava"
                rows={5}
                maxLength={2000}
                className={`${inputClass} resize-y`}
                aria-invalid={!!errors.zprava}
                aria-describedby={errors.zprava ? "err-zprava" : undefined}
              />
              {errors.zprava && (
                <p id="err-zprava" className="mt-1.5 text-xs text-destructive">
                  {errors.zprava}
                </p>
              )}
            </div>

            {/* honeypot */}
            <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
              <label htmlFor="web">Nevyplňujte</label>
              <input id="web" name="web" tabIndex={-1} autoComplete="off" />
            </div>

            <div className="flex flex-wrap items-center gap-5 pt-2">
              <button
                type="submit"
                disabled={stav === "odesila"}
                className="bg-accent px-7 py-3.5 text-sm font-medium text-accent-foreground transition-[letter-spacing] duration-300 hover:tracking-wide disabled:opacity-60"
              >
                {stav === "odesila" ? "Odesílám…" : "Odeslat poptávku"}
              </button>
              <p className="text-xs text-muted-foreground">
                Údaje použiji jen pro odpověď na vaši poptávku.
              </p>
            </div>

            <div aria-live="polite">
              {stav === "hotovo" && (
                <p className="border-l-2 border-accent bg-secondary px-4 py-3 text-sm">
                  Děkuji, zprávu mám. Ozvu se obvykle do jednoho pracovního dne.
                </p>
              )}
              {stav === "chyba" && (
                <p className="border-l-2 border-destructive bg-secondary px-4 py-3 text-sm">
                  Zprávu se nepodařilo odeslat. Zkuste to prosím znovu, nebo mi zavolejte na
                  +420 773 506 877.
                </p>
              )}
            </div>
          </form>
        </section>

        {/* Údaje + mapa */}
        <aside className="md:col-span-4 md:col-start-9">
          <dl className="border-t border-rule">
            {[
              ["Telefon", <a key="t" className="ruled-link group/link" href="tel:+420773506877">+420 773 506 877<span className="ruled-link-line" /></a>],
              ["E-mail", <a key="e" className="ruled-link group/link" href="mailto:petra-k@volny.cz">petra-k@volny.cz<span className="ruled-link-line" /></a>],
              ["Sídlo", "Trnová u Plzně"],
              ["IČ", "08109672"],
              ["DPH", "Nejsem plátce DPH"],
            ].map(([k, v], i) => (
              <div key={i} className="flex items-baseline justify-between gap-4 border-b border-rule py-3.5">
                <dt className="eyebrow">{k as string}</dt>
                <dd className="tabular text-sm">{v as React.ReactNode}</dd>
              </div>
            ))}
          </dl>

          <figure className="mt-8">
            <iframe
              title="Mapa — Trnová u Plzně"
              src="https://www.openstreetmap.org/export/embed.html?bbox=13.3%2C49.79%2C13.42%2C49.85&layer=mapnik&marker=49.8215%2C13.3597"
              loading="lazy"
              className="h-64 w-full border border-rule grayscale-[35%] transition-[filter] duration-500 hover:grayscale-0"
            />
            <figcaption className="mt-2 text-xs text-muted-foreground">
              Trnová u Plzně, Plzeňský kraj. Schůzku si domluvíme předem telefonicky.
            </figcaption>
          </figure>
        </aside>
      </div>
    </>
  );
}
