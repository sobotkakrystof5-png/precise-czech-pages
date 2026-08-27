import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/", label: "Domů" },
  { to: "/sluzby", label: "Služby" },
  { to: "/cenik", label: "Ceník" },
  { to: "/kontakt", label: "Kontakt" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-background/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-stretch justify-between px-5 sm:px-8">
        <Link
          to="/"
          className="flex flex-col justify-center py-4 leading-none"
          onClick={() => setOpen(false)}
        >
          <span className="font-display text-[1.05rem] font-bold tracking-tight">
            Petra Straková
          </span>
          <span className="eyebrow mt-1">Účetnictví &amp; daně</span>
        </Link>

        <nav className="hidden items-stretch md:flex" aria-label="Hlavní navigace">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="group/link relative flex items-center border-l border-rule px-6 text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{
                className: "!text-foreground",
                "data-active": "true",
              }}
            >
              {({ isActive }) => (
                <>
                  <span>{item.label}</span>
                  <span
                    className="absolute inset-x-0 bottom-0 h-px origin-left bg-accent transition-transform duration-300"
                    style={{ transform: isActive ? "scaleX(1)" : "scaleX(0)" }}
                  />
                  {!isActive && <span className="ruled-link-line !bottom-0 !bg-foreground/40" />}
                </>
              )}
            </Link>
          ))}
          <Link
            to="/kontakt"
            className="ml-6 my-3 flex items-center bg-accent px-5 text-sm font-medium text-accent-foreground transition-[letter-spacing] duration-300 hover:tracking-wide"
          >
            Nezávazná poptávka
          </Link>
        </nav>

        <button
          type="button"
          className="-mr-2 px-2 md:hidden"
          aria-label={open ? "Zavřít menu" : "Otevřít menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-rule md:hidden" aria-label="Mobilní navigace">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              onClick={() => setOpen(false)}
              className="block border-b border-rule px-5 py-4 text-sm text-muted-foreground"
              activeProps={{ className: "!text-foreground border-l-2 border-l-accent" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
