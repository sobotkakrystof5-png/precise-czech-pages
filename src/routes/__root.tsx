import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { Toaster } from "sonner";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteHeader } from "../components/site/SiteHeader";
import { SiteFooter } from "../components/site/SiteFooter";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-background px-5">
      <div className="max-w-md">
        <p className="eyebrow">Chyba 404</p>
        <h1 className="mt-4 text-4xl font-bold">Tahle stránka tu není</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Odkaz zřejmě vedl jinam, než měl. Zkuste přejít na úvodní stránku nebo mi napište.
        </p>
        <div className="mt-6 flex gap-3">
          <Link to="/" className="bg-primary px-5 py-3 text-sm text-primary-foreground">
            Na úvodní stránku
          </Link>
          <Link to="/kontakt" className="border border-input px-5 py-3 text-sm">
            Kontakt
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-background px-5">
      <div className="max-w-md">
        <p className="eyebrow">Něco se nepovedlo</p>
        <h1 className="mt-4 text-3xl font-bold">Stránku se nepodařilo načíst</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Zkuste to prosím znovu. Pokud potíž potrvá, ozvěte se na +420 773 506 877.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="bg-primary px-5 py-3 text-sm text-primary-foreground"
          >
            Zkusit znovu
          </button>
          <a href="/" className="border border-input px-5 py-3 text-sm">
            Na úvodní stránku
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Petra Straková — účetnictví a daně, Trnová u Plzně" },
      {
        name: "description",
        content:
          "Vedení účetnictví, daňové evidence a zpracování daňových přiznání. 20 let praxe, Trnová u Plzně.",
      },
      { name: "author", content: "Petra Straková" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "cs_CZ" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Archivo:wght@600;700;800&family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@400;500;600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="cs">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1">
          {/* Required: nested routes render here. */}
          <Outlet />
        </main>
        <SiteFooter />
      </div>
      <Toaster position="bottom-right" />
    </QueryClientProvider>
  );
}
