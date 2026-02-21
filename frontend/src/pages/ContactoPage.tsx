/**
 * Página "Contacto".
 * - Qué hace: replica el diseño de `CONTACTO.jpg` con un formulario centrado y un CTA "Enviar".
 * - Por qué: el usuario pidió una página separada para contacto con todo lo estandarizado (header/footer, colores, tipografía).
 * - Relacionado con:
 *   - `src/components/shared/ExperienceStatsBar.tsx` (barra 8/74/37)
 *   - `src/components/layout/SiteHeader.tsx` / `SiteFooter.tsx` (navegación)
 */
import { useMemo } from 'react'
import { ExperienceStatsBar } from '@/components/shared/ExperienceStatsBar'

type FormValues = {
  nombre: string
  apellido: string
  email: string
  telefono: string
  compania: string
  mensaje: string
  comoSupiste: string
}

function buildWhatsappUrl(values: FormValues) {
  /**
   * Envío sin backend: WhatsApp prellenado.
   * - Qué hace: arma una URL `wa.me` con el mensaje del formulario.
   * - Por qué: evita dejar el botón "Enviar" sin funcionalidad.
   * - Relacionado con: Footer (números de contacto) y esta página.
   */
  const phone = '5216622872990' // MX +52 + número (662) 287 29 90

  const lines = [
    'Contacto desde el sitio APT',
    '',
    `Nombre: ${values.nombre} ${values.apellido}`.trim(),
    `Correo: ${values.email}`,
    values.telefono ? `Teléfono: ${values.telefono}` : '',
    values.compania ? `Compañía: ${values.compania}` : '',
    '',
    'Mensaje:',
    values.mensaje,
    '',
    values.comoSupiste ? `¿Cómo supiste de nosotros?: ${values.comoSupiste}` : '',
  ].filter(Boolean)

  const text = encodeURIComponent(lines.join('\n'))
  return `https://wa.me/${phone}?text=${text}`
}

export function ContactoPage() {
  const fieldBase =
    // Tipografía estandarizada:
    // - Qué hace: fuerza tamaño 14px y un placeholder más legible (no “clarito”).
    // - Por qué: el usuario pidió Info = 14 y notó Contacto demasiado claro.
    // - Relacionado con: tokens en `src/index.css` (clases `apt-fs-info`).
    'apt-fs-info w-full rounded-md border border-neutral-300 bg-white px-4 py-3 text-neutral-900 placeholder:text-neutral-500 outline-none focus:border-[var(--apt-accent)] focus:ring-2 focus:ring-[var(--apt-accent)]/20'

  const labelBase =
    // Labels estandarizados:
    // - Qué hace: usa 14px y el gris corporativo de subtítulo.
    // - Por qué: `text-neutral-400` se veía demasiado pálido.
    // - Relacionado con: `--apt-gray-subtitle` en `src/index.css`.
    'mb-1 apt-fs-info text-[var(--apt-gray-subtitle)]'

  const defaults = useMemo<FormValues>(
    () => ({
      nombre: '',
      apellido: '',
      email: '',
      telefono: '',
      compania: '',
      mensaje: '',
      comoSupiste: '',
    }),
    [],
  )

  return (
    <div className="bg-white">
      {/* Título principal */}
      <header className="py-10 sm:py-12">
        <h1 className="apt-title-main px-4 text-center">
          CONTACTO
        </h1>
        {/*
          Subtítulo (micro-UX):
          - Qué hace: da contexto rápido sin recargar.
          - Por qué: el usuario pidió “más estilo” y esta pieza mejora jerarquía/forma.
          - Relacionado con: escala 18/16/14 definida en `src/index.css`.
        */}
        <p className="apt-fs-subtitle mt-3 px-4 text-center text-[var(--apt-gray-subtitle)]">
          Escríbenos y te respondemos a la brevedad.
        </p>
      </header>

      {/* 
        Contenido principal (más estilo):
        - Qué hace: agrega un fondo sutil y “cards” para elevar el look sin cambiar la estructura base.
        - Por qué: el usuario pidió que Contacto no se vea tan simple.
        - Relacionado con: `SiteFooter` (íconos/estilo de contacto) y tipografía global.
      */}
      <section className="bg-gradient-to-b from-[var(--apt-cream)]/18 to-white">
        <div className="mx-auto w-full max-w-3xl px-4 pb-16">
          {/* Card del formulario */}
          <div className="rounded-2xl bg-white p-6 shadow-[0_18px_50px_rgba(0,0,0,0.10)] ring-1 ring-black/5 sm:p-8">
              <form
                className="mx-auto"
                onSubmit={(e) => {
                  e.preventDefault()
                  const fd = new FormData(e.currentTarget)

                  const values: FormValues = {
                    nombre: String(fd.get('nombre') ?? ''),
                    apellido: String(fd.get('apellido') ?? ''),
                    email: String(fd.get('email') ?? ''),
                    telefono: String(fd.get('telefono') ?? ''),
                    compania: String(fd.get('compania') ?? ''),
                    mensaje: String(fd.get('mensaje') ?? ''),
                    comoSupiste: String(fd.get('comoSupiste') ?? ''),
                  }

                  const url = buildWhatsappUrl(values)
                  window.open(url, '_blank', 'noopener,noreferrer')
                  e.currentTarget.reset()
                }}
              >
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <div className={labelBase}>Nombre</div>
              <input
                name="nombre"
                defaultValue={defaults.nombre}
                className={fieldBase}
                autoComplete="given-name"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <div className={labelBase}>Apellido</div>
              <input
                name="apellido"
                defaultValue={defaults.apellido}
                className={fieldBase}
                autoComplete="family-name"
                placeholder="Tu apellido"
              />
            </div>

            <div className="sm:col-span-2">
              <div className={labelBase}>Correo electrónico</div>
              <input
                name="email"
                type="email"
                defaultValue={defaults.email}
                className={fieldBase}
                autoComplete="email"
                placeholder="correo@ejemplo.com"
              />
            </div>

            <div>
              <div className={labelBase}>Número de teléfono</div>
              <input
                name="telefono"
                inputMode="tel"
                defaultValue={defaults.telefono}
                className={fieldBase}
                autoComplete="tel"
                placeholder="(662) 000 00 00"
              />
            </div>
            <div>
              <div className={labelBase}>Compañía</div>
              <input
                name="compania"
                defaultValue={defaults.compania}
                className={fieldBase}
                autoComplete="organization"
                placeholder="Empresa (opcional)"
              />
            </div>

            <div className="sm:col-span-2">
              <div className={labelBase}>Tu mensaje</div>
              <textarea
                name="mensaje"
                defaultValue={defaults.mensaje}
                className={[fieldBase, 'min-h-[220px] resize-none'].join(' ')}
                placeholder="Cuéntanos en qué podemos ayudarte…"
              />
            </div>

            <div className="sm:col-span-2">
              <div className={labelBase}>¿Cómo supiste de nosotros?</div>
              <input
                name="comoSupiste"
                defaultValue={defaults.comoSupiste}
                className={fieldBase}
                placeholder="Recomendación, redes, etc. (opcional)"
              />
            </div>
          </div>

                <div className="mt-10 flex justify-center">
                  <button
                    type="submit"
                    className="apt-fs-subtitle w-full max-w-[280px] rounded-md bg-[var(--apt-accent)] px-10 py-4 text-center font-semibold text-white shadow-sm hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--apt-accent)]/50"
                  >
                    Enviar
                  </button>
                </div>

                <p className="apt-fs-info mt-4 text-center text-neutral-600">
                  Al enviar, se abrirá WhatsApp con tu mensaje prellenado.
                </p>
              </form>
          </div>
        </div>
      </section>

      {/* Barra de números (igual que Home) */}
      <ExperienceStatsBar />
    </div>
  )
}

