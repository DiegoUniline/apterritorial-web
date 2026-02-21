/**
 * Footer reutilizable del sitio.
 * - Qué hace: centraliza el footer (navegación + contacto + redes) para reutilizarlo en Home y futuras páginas.
 * - Por qué: estandarizar el footer y evitar duplicación de markup/estilos.
 * - Relacionado con: `src/components/home/Footer.tsx` (wrapper legacy) y `src/pages/HomePage.tsx`.
 */
import { Link } from 'react-router-dom'

export function SiteFooter() {
  /**
   * WhatsApp real (confirmado por el usuario).
   * - Qué hace: centraliza el link para reutilizarlo en el footer.
   * - Por qué: el footer tiene CTA "¡CONTÁCTANOS!" con ícono de WhatsApp y debe ser funcional.
   * - Relacionado con: `src/pages/ContactoPage.tsx` (envío por WhatsApp).
   */
  const whatsappHref = 'https://wa.me/5216622872990'

  return (
    <footer id="contacto" className="bg-black text-white">
      <div className="relative mx-auto max-w-6xl px-4 py-12 sm:py-16">
        {/* 
          Redes:
          - Qué hace: en mobile van en flujo (centradas) para evitar solapes; en desktop mantienen esquina superior derecha.
          - Por qué: footer responsive en todas las páginas.
          - Relacionado con: `src/components/layout/SiteFooter.tsx`.
        */}
        <div className="mb-8 flex items-center justify-center gap-2 sm:mb-0 sm:absolute sm:right-4 sm:top-6">
          <a
            href="https://www.facebook.com/share/1CWxXMY6RT/?mibextid=wwXIfr"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className="inline-flex h-6 w-6 items-center justify-center text-white/90 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
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
            className="inline-flex h-6 w-6 items-center justify-center text-white/90 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
              <path
                fill="currentColor"
                d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.6-2.3a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.3Z"
              />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-1 gap-10 text-center md:grid-cols-3 md:text-left">
          {/* Navegación izquierda */}
          <section>
            <ul className="space-y-2 text-xs uppercase tracking-wider text-white/90">
              <li>
                <Link className="hover:text-[#C87D4A]" to="/">
                  INICIO
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#C87D4A]" to="/quienes-somos">
                  ¿QUIÉNES SOMOS?
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#C87D4A]" to="/nuestro-trabajo">
                  NUESTRO TRABAJO
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#C87D4A]" to="/servicios">
                  SERVICIOS
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#C87D4A]" to="/contacto">
                  CONTACTO
                </Link>
              </li>
            </ul>
          </section>

          {/* Centro: WhatsApp + título */}
          <section className="flex flex-col items-center justify-start pt-2 text-center">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex flex-col items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
              aria-label="Abrir WhatsApp para contactar"
            >
              {/* Círculo blanco + ícono negro (como en el screenshot) */}
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white transition-transform group-hover:scale-[1.03]">
                <svg
                  viewBox="0 0 24 24"
                  className="h-7 w-7 text-black"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2Zm0 18.1a8.1 8.1 0 0 1-4.1-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8.1 8.1 0 1 1 12 20.1Zm4.7-6.1c-.3-.1-1.8-.9-2.1-1s-.5-.1-.7.1-.8 1-.9 1.2-.3.2-.6.1a6.6 6.6 0 0 1-1.9-1.1 7.2 7.2 0 0 1-1.3-1.6c-.1-.3 0-.5.1-.6l.5-.6c.1-.1.2-.3.3-.4.1-.2 0-.3 0-.5s-.7-1.7-1-2.3c-.3-.6-.6-.5-.7-.5h-.6c-.2 0-.5.1-.7.3s-1 1-1 2.4 1 2.8 1.1 3 .2.4.3.5c.1.2 1.1 1.7 2.7 2.7 2 1.2 2 1 2.3.9.3-.1 1.8-.7 2.1-1.4.3-.6.3-1.2.2-1.3-.1-.1-.3-.2-.6-.3Z"
                  />
                </svg>
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-white/90 group-hover:text-white">
                ¡CONTÁCTANOS!
              </div>
            </a>
          </section>

          {/* Derecha: datos como en el screenshot */}
          <section className="text-xs uppercase tracking-wider text-white/90">
            <div className="mb-3 text-[#C87D4A]">HERMOSILLO, SONORA.</div>
            <div className="space-y-3 normal-case tracking-normal text-white/90">
              <div className="flex flex-col items-center gap-1 md:flex-row md:items-start md:gap-2">
                {/* Ícono teléfono estilo “línea” (como en el screenshot) */}
                <span className="mt-0.5 inline-flex" aria-hidden="true">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
                    <path
                      d="M8.9 3.3h2.4c.5 0 .9.3 1 .8l.7 3c.1.4 0 .8-.3 1.1l-1.6 1.6c1 2 2.6 3.7 4.7 4.7l1.6-1.6c.3-.3.7-.4 1.1-.3l3 .7c.5.1.8.5.8 1V17c0 1.1-.9 2-2 2C11.4 19 5 12.6 5 4.9c0-1.1.9-2 2-2Z"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <div className="text-center md:text-left">
                  <a className="hover:text-white" href="tel:+526622872990">
                    (662) 287 29 90
                  </a>
                  <div>
                    <a className="hover:text-white" href="tel:+526621821022">
                      (662) 182 10 22
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center gap-1 md:flex-row md:items-start md:gap-2">
                {/* Ícono ubicación estilo “línea” (como en el screenshot) */}
                <span className="mt-0.5 inline-flex" aria-hidden="true">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
                    <path
                      d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 11.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <div className="text-center md:text-left">
                  <div>DR. NORIEGA 170, COL CENTENARIO</div>
                  <div>CP 83260</div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </footer>
  )
}

