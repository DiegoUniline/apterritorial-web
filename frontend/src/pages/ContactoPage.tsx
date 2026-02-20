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
    'w-full rounded-md border border-neutral-300 bg-white px-4 py-3 text-neutral-900 outline-none focus:border-[var(--apt-accent)] focus:ring-2 focus:ring-[var(--apt-accent)]/20'

  const labelBase = 'mb-1 text-xs text-neutral-400'

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
        <h1 className="px-4 text-center text-3xl font-light tracking-[0.18em] text-[var(--apt-gray-title)] sm:text-4xl md:text-5xl">
          CONTACTO
        </h1>
      </header>

      {/* Formulario */}
      <section className="mx-auto w-full max-w-3xl px-4 pb-16">
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
              />
            </div>
            <div>
              <div className={labelBase}>Apellido</div>
              <input
                name="apellido"
                defaultValue={defaults.apellido}
                className={fieldBase}
                autoComplete="family-name"
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
              />
            </div>
            <div>
              <div className={labelBase}>Compañía</div>
              <input
                name="compania"
                defaultValue={defaults.compania}
                className={fieldBase}
                autoComplete="organization"
              />
            </div>

            <div className="sm:col-span-2">
              <div className={labelBase}>Tu mensaje</div>
              <textarea
                name="mensaje"
                defaultValue={defaults.mensaje}
                className={[fieldBase, 'min-h-[220px] resize-none'].join(' ')}
              />
            </div>

            <div className="sm:col-span-2">
              <div className={labelBase}>¿Cómo supiste de nosotros?</div>
              <input
                name="comoSupiste"
                defaultValue={defaults.comoSupiste}
                className={fieldBase}
              />
            </div>
          </div>

          <div className="mt-10 flex justify-center">
            <button
              type="submit"
              className="w-full max-w-[280px] rounded-md bg-[var(--apt-accent)] px-10 py-4 text-center text-xl font-semibold text-white shadow-sm hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--apt-accent)]/50"
            >
              Enviar
            </button>
          </div>
        </form>
      </section>

      {/* Barra de números (igual que Home) */}
      <ExperienceStatsBar />
    </div>
  )
}

