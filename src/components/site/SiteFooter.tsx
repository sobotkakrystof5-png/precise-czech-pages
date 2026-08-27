import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-rule bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-10 py-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-display text-2xl font-bold tracking-tight">Petra Straková</p>
            <p className="mt-3 max-w-sm text-sm text-primary-foreground/70">
              Účetnictví, daňová evidence a daňová přiznání pro OSVČ i firmy. Trnová u Plzně,
              dvacátý rok v praxi.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow !text-primary-foreground/50">Spojení</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a className="ruled-link group/link" href="tel:+420773506877">
                  +420 773 506 877
                  <span className="ruled-link-line" />
                </a>
              </li>
              <li>
                <a className="ruled-link group/link" href="mailto:petra-k@volny.cz">
                  petra-k@volny.cz
                  <span className="ruled-link-line" />
                </a>
              </li>
              <li className="text-primary-foreground/70">Trnová u Plzně</li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="eyebrow !text-primary-foreground/50">Stránky</p>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                { to: "/", label: "Domů" },
                { to: "/sluzby", label: "Služby" },
                { to: "/cenik", label: "Ceník" },
                { to: "/kontakt", label: "Kontakt" },
              ].map((i) => (
                <li key={i.to}>
                  <Link to={i.to} className="ruled-link group/link text-primary-foreground/80">
                    {i.label}
                    <span className="ruled-link-line" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="eyebrow !text-primary-foreground/50">Údaje</p>
            <ul className="tabular mt-4 space-y-2 text-sm text-primary-foreground/70">
              <li>IČ 08109672</li>
              <li>Nejsem plátce DPH</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-primary-foreground/15 py-6 text-xs text-primary-foreground/50 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Petra Straková</p>
          <p>Účetní a daňové služby, Plzeňský kraj</p>
        </div>
      </div>
    </footer>
  );
}
