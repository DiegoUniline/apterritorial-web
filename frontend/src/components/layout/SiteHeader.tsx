/**
 * Header reutilizable del sitio.
 * - Qué hace: centraliza el header fijo (logo + subtítulo + barra café con navegación y redes).
 * - Por qué: estandarizar el menú entre Home y futuras páginas (ej: "¿Quiénes somos?") sin duplicar código.
 * - Relacionado con: `src/components/home/Header.tsx` (wrapper legacy) y `src/pages/HomePage.tsx` (uso actual).
 */
import { HOME_SUBTITLE } from "@/components/home/homeData";
import { Link, useLocation } from "react-router-dom";
import { useId, useState } from "react";

export type SiteNavItem = {
  label: string;
  to: string;
};

type SiteHeaderProps = {
  /**
   * Items de navegación.
   * - Qué hace: permite reutilizar el header en páginas futuras sin hardcodear anchors.
   * - Por qué: hoy usamos anchors (#inicio, #quienes-somos, etc.), pero mañana puede ser routing real.
   * - Relacionado con: `src/components/layout/SiteHeader.tsx` (este archivo).
   */
  navItems?: readonly SiteNavItem[];
};

const defaultNavItems = [
  { label: "INICIO", to: "/" },
  { label: "¿QUIÉNES SOMOS?", to: "/quienes-somos" },
  { label: "NUESTRO TRABAJO", to: "/nuestro-trabajo" },
  { label: "SERVICIOS", to: "/servicios" },
  { label: "CONTACTO", to: "/contacto" },
] as const satisfies readonly SiteNavItem[];

export function SiteHeader({ navItems = defaultNavItems }: SiteHeaderProps) {
  /**
   * Menú mobile (hamburguesa).
   * - Qué hace: habilita navegación en pantallas pequeñas sin que el menú horizontal se desborde.
   * - Por qué: el usuario pidió que el menú sea responsive en todas las páginas.
   * - Relacionado con: `src/components/layout/SiteHeader.tsx` (este archivo) y `src/components/layout/SiteLayout.tsx`.
   */
  const [mobileOpen, setMobileOpen] = useState(false);
  const mobileMenuId = useId();
  const location = useLocation();

  // Cierra el menú al navegar — patrón de estado derivado (React docs):
  // setState durante el render evita el antipatrón useEffect → setState.
  const [prevPathname, setPrevPathname] = useState(location.pathname);
  if (prevPathname !== location.pathname) {
    setPrevPathname(location.pathname);
    setMobileOpen(false);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white shadow-sm">
      {/* Fila blanca: logo + título */}
      <div className="bg-white">
        <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3">
          <a href="#inicio" className="shrink-0">
            <img
              src="/logo.png"
              alt="APT - Agencia de Planeación Territorial"
              className="h-10 w-auto sm:h-12"
              decoding="async"
            />
          </a>

          <div className="flex-1 text-center text-sm font-bold tracking-wide text-neutral-900 sm:text-base">
            {HOME_SUBTITLE}
          </div>

          {/* Spacer para mantener el título centrado (las redes van en la barra café) */}
          <div className="h-1 w-14 shrink-0 max-sm:hidden" aria-hidden="true" />
        </div>
      </div>

      {/* Fila café: menú + redes */}
      <div className="bg-[#C87D4A]">
        <div className="relative mx-auto max-w-6xl px-4 py-4 md:py-2">
          {/* Botón hamburguesa (solo mobile) */}
          <button
            type="button"
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileOpen}
            aria-controls={mobileMenuId}
            onClick={() => setMobileOpen((v) => !v)}
            className="absolute left-4 top-1/2 inline-flex -translate-y-1/2 items-center justify-center rounded-sm px-3 py-3 text-white/95 hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 md:hidden"
          >
            <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
              {mobileOpen ? (
                <path
                  fill="currentColor"
                  d="M18.3 5.7 12 12l6.3 6.3-1.4 1.4L10.6 13.4 4.3 19.7 2.9 18.3 9.2 12 2.9 5.7 4.3 4.3l6.3 6.3 6.3-6.3 1.4 1.4Z"
                />
              ) : (
                <path
                  fill="currentColor"
                  d="M4 6.5h16v2H4v-2Zm0 5h16v2H4v-2Zm0 5h16v2H4v-2Z"
                />
              )}
            </svg>
          </button>

          <nav
            aria-label="Navegación principal"
            className="hidden items-center justify-center gap-8 text-[11px] font-semibold uppercase tracking-[0.22em] text-white md:flex"
          >
            {navItems.map((item) => {
              const active = location.pathname === item.to;
              return (
                <Link
                  key={`${item.to}-${item.label}`}
                  to={item.to}
                  aria-current={active ? "page" : undefined}
                  className={[
                    "rounded-sm px-2 py-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70",
                    active
                      ? "bg-white/25 font-extrabold text-white underline-offset-4 decoration-white/70"
                      : "hover:bg-white/15",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Redes a la derecha */}
          {/* 
            Redes (solo desktop):
            - Qué hace: evita duplicación en mobile (ya se muestran dentro del menú desplegable).
            - Por qué: el usuario pidió que SOLO aparezcan al abrir el menú en responsive.
            - Relacionado con: menú mobile en este mismo archivo.
          */}
          <div className="absolute right-4 top-1/2 hidden -translate-y-1/2 items-center gap-2 text-white md:flex">
            <a
              href="https://www.facebook.com/share/1CWxXMY6RT/?mibextid=wwXIfr"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="inline-flex h-7 w-7 items-center justify-center rounded-sm hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 md:h-6 md:w-6"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.2-1.5 1.5-1.5H16.7V5c-.3 0-1.4-.1-2.6-.1-2.6 0-4.4 1.6-4.4 4.6V11H7v3h2.7v8h3.8Z"
                />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/apterritorial?igsh=NnYzM2Q3cjJ2OHVu"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="inline-flex h-7 w-7 items-center justify-center rounded-sm hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 md:h-6 md:w-6"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.6-2.3a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4Z"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Menú desplegable mobile (debajo de la barra café) */}
        <div
          id={mobileMenuId}
          className={["md:hidden", mobileOpen ? "block" : "hidden"].join(" ")}
        >
          <nav
            aria-label="Navegación principal (móvil)"
            className="border-t border-white/20 bg-[#C87D4A] px-4 py-3"
          >
            <ul className="flex flex-col gap-2">
              {navItems.map((item) => {
                const active = location.pathname === item.to;
                return (
                  <li key={`m-${item.to}-${item.label}`}>
                    <Link
                      to={item.to}
                      onClick={() => setMobileOpen(false)}
                      aria-current={active ? "page" : undefined}
                      className={[
                        "block rounded-sm px-3 py-2 text-sm uppercase tracking-[0.18em] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70",
                        active
                          ? "bg-white/25 font-extrabold text-white underline-offset-4 decoration-white/70"
                          : "font-semibold text-white/95 hover:bg-white/15",
                      ].join(" ")}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Redes en mobile (en flujo, para evitar solapes) */}
            <div className="mt-3 flex items-center justify-center gap-2">
              <a
                href="https://www.facebook.com/share/1CWxXMY6RT/?mibextid=wwXIfr"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="inline-flex h-8 w-8 items-center justify-center rounded-sm text-white/95 hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.2-1.5 1.5-1.5H16.7V5c-.3 0-1.4-.1-2.6-.1-2.6 0-4.4 1.6-4.4 4.6V11H7v3h2.7v8h3.8Z"
                  />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/apterritorial?igsh=NnYzM2Q3cjJ2OHVu"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="inline-flex h-8 w-8 items-center justify-center rounded-sm text-white/95 hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.6-2.3a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4Z"
                  />
                </svg>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
