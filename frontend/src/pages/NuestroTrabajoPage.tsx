/**
 * Página "Nuestro trabajo".
 * - Qué hace: renderiza el diseño de "PLANES, PROGRAMAS Y PROYECTOS" según `EXPERIENCIA – 1.jpg`.
 * - Por qué: el usuario solicitó que sea una página separada (sitio web) manteniendo header/footer iguales.
 * - Relacionado con: `Diseño actual/Nuestro trabajo.txt` (textos/URLs) y `src/components/shared/ExperienceStatsBar.tsx` (stats).
 */
import { useId, useState } from 'react'
import { ExperienceStatsBar } from '@/components/shared/ExperienceStatsBar'
import {
  trabajoImages,
  trabajoPanels,
} from '@/components/nuestro-trabajo/nuestroTrabajoData'

export function NuestroTrabajoPage() {
  /**
   * Tabs (botones) para cambiar el contenido.
   * - Qué hace: controla qué panel (texto + imagen) se muestra.
   * - Por qué: en las capturas `EXPERIENCIA – 5/6/7.jpg` los títulos superiores funcionan como botones.
   * - Relacionado con: `src/components/nuestro-trabajo/nuestroTrabajoData.ts` (trabajoPanels).
   */
  const [activeIdx, setActiveIdx] = useState(0)
  const tabsBaseId = useId()
  const active = trabajoPanels[activeIdx] ?? trabajoPanels[0]

  return (
    <div className="bg-white">
      {/* Título principal grande (gris) */}
      <header className="py-10 sm:py-12">
        <h1 className="px-4 text-center text-3xl font-light tracking-[0.18em] text-[var(--apt-gray-title)] sm:text-4xl md:text-5xl">
          PLANES, PROGRAMAS Y PROYECTOS
        </h1>
      </header>

      {/*
        Bloque principal con background + pestañas + contenido overlay.
        - Qué hace: replica la composición del screenshot (tabs arriba, contenido a la izquierda, imagen enmarcada a la derecha).
        - Por qué: es el diseño objetivo de `EXPERIENCIA – 1.jpg`.
        - Relacionado con: `Diseño actual/Nuestro trabajo.txt` (lista de proyectos).
      */}
      <section className="relative overflow-hidden">
        {/* Background */}
        <div
          className="relative min-h-[780px] bg-cover bg-center md:min-h-[980px]"
          style={{ backgroundImage: `url('${trabajoImages.background}')` }}
          aria-label="Sección principal: Nuestro trabajo"
        >
          {/* Overlay suave para legibilidad */}
          <div className="absolute inset-0 bg-black/20" />

          {/* Tabs superiores (4 columnas) */}
          <div className="relative z-10">
            <div
              className="mx-auto grid max-w-none grid-cols-2 bg-white/20 text-white/90 backdrop-blur-[1px] md:grid-cols-4"
              role="tablist"
              aria-label="Categorías de nuestro trabajo"
            >
              {trabajoPanels.map((p, idx) => {
                const selected = idx === activeIdx
                const tabId = `${tabsBaseId}-tab-${idx}`
                const panelId = `${tabsBaseId}-panel-${idx}`

                return (
                  <button
                    key={`${p.tab.title}-${idx}`}
                    id={tabId}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    aria-controls={panelId}
                    tabIndex={selected ? 0 : -1}
                    onClick={() => setActiveIdx(idx)}
                    className={[
                      'px-4 py-8 text-center text-xs font-semibold uppercase leading-snug tracking-[0.14em] md:text-[11px]',
                      'transition-colors',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70',
                      'border-white/15 md:border-l',
                      idx === 0 ? 'md:border-l-0' : '',
                      selected
                        ? 'bg-white/15 text-white'
                        : 'bg-white/5 text-white/75 hover:bg-white/10',
                    ]
                      .filter(Boolean)
                      .join(' ')}
                  >
                    <span className="whitespace-pre-line">{p.tab.title}</span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Contenido central: izquierda texto, derecha imagen */}
          <div
            id={`${tabsBaseId}-panel-${activeIdx}`}
            role="tabpanel"
            aria-labelledby={`${tabsBaseId}-tab-${activeIdx}`}
            className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 pb-16 pt-10 md:grid-cols-[1.1fr_0.9fr] md:gap-12 md:pt-16"
          >
            {/* Columna izquierda (texto) */}
            <div className="text-white">
              <h2 className="whitespace-pre-line text-lg font-bold uppercase tracking-wide md:text-xl">
                {active.heading}
              </h2>

              {active.content.type === 'sections' ? (
                active.content.sections.map((sec) => (
                  <div key={sec.title} className="mt-8">
                    <h3 className="text-[15px] font-bold uppercase tracking-[0.14em] text-white/95">
                      {sec.subtitle}
                    </h3>

                    <ul className="mt-4 space-y-4 text-[14px] leading-[1.65] text-white/90">
                      {sec.items.map((it) => (
                        <li key={`${sec.title}-${it.name}`} className="relative pl-4">
                          <span
                            className="absolute left-0 top-0 text-white/90"
                            aria-hidden="true"
                          >
                            •
                          </span>
                          <div>{it.name}</div>
                          {it.org ? (
                            <div className="mt-1 text-white/90">
                              {it.org}
                            </div>
                          ) : null}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))
              ) : (
                <div className="mt-6 space-y-4 text-[15px] leading-[1.7] text-white/90">
                  {active.content.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              )}
            </div>

            {/* Columna derecha (imagen enmarcada) */}
            <div className="flex items-start justify-center md:justify-end">
              <div className="w-full max-w-[520px] bg-white/80 p-4 shadow-[0_18px_50px_rgba(0,0,0,0.35)]">
                <img
                  src={active.framedImageUrl}
                  alt="Imagen representativa de proyectos"
                  className="h-[360px] w-full object-cover md:h-[420px]"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Barra de números (igual que Home) */}
      <ExperienceStatsBar />
    </div>
  )
}

