/**
 * Página "Servicios".
 * - Qué hace: replica el diseño de `SERVICIOS.jpg` usando el header/footer estandarizados (`SiteLayout`).
 * - Por qué: el usuario pidió una página separada para "Servicios" con colores/tipografía/iconos consistentes.
 * - Relacionado con:
 *   - `src/components/servicios/serviciosData.ts` (contenido)
 *   - `src/components/shared/ExperienceStatsBar.tsx` (barra 8/74/37)
 *   - `src/pages/NuestroTrabajoPage.tsx` (patrón de fondo + overlay + imagen enmarcada)
 */
import { ExperienceStatsBar } from '@/components/shared/ExperienceStatsBar'
import {
  serviciosBloques,
  serviciosTitle,
} from '@/components/servicios/serviciosData'
import { trabajoImages } from '@/components/nuestro-trabajo/nuestroTrabajoData'

export function ServiciosPage() {
  return (
    <div className="bg-white">
      {/* Título principal grande (gris) */}
      <header className="py-10 sm:py-12">
        <h1 className="apt-title-main px-4 text-center">
          {serviciosTitle}
        </h1>
      </header>

      {/* Bloque con background + overlay + contenido */}
      <section className="relative overflow-hidden">
        <div
          className="relative min-h-[720px] bg-cover bg-center md:min-h-[860px]"
          style={{ backgroundImage: `url('${trabajoImages.background}')` }}
          aria-label="Servicios"
        >
          {/* Overlay oscuro para legibilidad */}
          <div className="absolute inset-0 bg-black/55" />

          <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 pb-16 pt-10 md:grid-cols-[1.1fr_0.9fr] md:gap-12 md:pt-16">
            {/* Columna izquierda (texto) */}
            <div className="text-white">
              {serviciosBloques.map((b) => (
                <div key={b.title} className="mb-10 last:mb-0">
                  <h2
                    className="apt-fs-subtitle whitespace-pre-line font-bold uppercase leading-tight tracking-[0.06em] text-white"
                    style={{ textShadow: '0 1px 5px rgba(0,0,0,0.9)' }}
                  >
                    {b.title}
                  </h2>
                  <ul
                    className="mt-4 list-disc pl-7 space-y-2 text-[15px] font-semibold leading-[1.7] text-white"
                    style={{ textShadow: '0 1px 4px rgba(0,0,0,0.85)' }}
                  >
                    {b.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Columna derecha (imagen) */}
            <div className="flex items-start justify-center md:justify-end">
              <img
                src={trabajoImages.framed6}
                alt="Ejemplo de entregable"
                className="h-[340px] w-full object-cover md:h-[420px]"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Barra de números (igual que Home) */}
      <ExperienceStatsBar />
    </div>
  )
}

