/**
 * Página "Nuestro trabajo".
 * Layout: título → tabs + (texto izquierda | carrusel de fotos del tab derecha) sobre fondo de imagen.
 */
import { useCallback, useId, useState } from 'react'
import { ExperienceStatsBar } from '@/components/shared/ExperienceStatsBar'
import {
  trabajoImages,
  trabajoPanels,
} from '@/components/nuestro-trabajo/nuestroTrabajoData'
import { PhotoCarousel } from '@/components/nuestro-trabajo/PhotoCarousel'

export function NuestroTrabajoPage() {
  const [activeIdx, setActiveIdx] = useState(0)
  const tabsBaseId = useId()
  const active = trabajoPanels[activeIdx] ?? trabajoPanels[0]

  // Tracks which sections (by "tabIdx-sectionTitle") have been expanded with "ver más"
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set())
  const toggleSection = useCallback((key: string) => {
    setExpandedSections((prev) => {
      const next = new Set(prev)
      if (next.has(key)) next.delete(key)
      else next.add(key)
      return next
    })
  }, [])

  return (
    <div className="bg-white">
      {/* Título principal */}
      <header className="py-10 sm:py-12">
        <h1 className="apt-title-main px-4 text-center">
          PLANES, PROGRAMAS Y PROYECTOS
        </h1>
      </header>

      {/* Sección con imagen de fondo: tabs + contenido */}
      <section className="relative overflow-hidden">
        <div
          className="relative bg-cover bg-center"
          style={{ backgroundImage: `url('${trabajoImages.background}')` }}
          aria-label="Categorías de nuestro trabajo"
        >
          {/* Overlay oscuro para legibilidad */}
          <div className="absolute inset-0 bg-black/55" />

          {/* Tabs */}
          <div className="relative z-10">
            <div
              className="mx-auto grid max-w-none grid-cols-2 bg-white/15 text-white/90 backdrop-blur-[1px] md:grid-cols-4"
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
                        ? 'bg-white/20 text-white'
                        : 'bg-white/5 text-white/70 hover:bg-white/10',
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

          {/* Contenido: texto izquierda + carrusel del tab derecha */}
          <div
            id={`${tabsBaseId}-panel-${activeIdx}`}
            role="tabpanel"
            aria-labelledby={`${tabsBaseId}-tab-${activeIdx}`}
            className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 pb-16 pt-10 md:grid-cols-[1.1fr_0.9fr] md:gap-12"
          >
            {/* Columna izquierda: texto */}
            <div>
              <h2
                className="text-[17px] font-bold uppercase tracking-wide text-white"
                style={{ textShadow: '0 1px 6px rgba(0,0,0,0.9)' }}
              >
                {active.heading}
              </h2>

              {active.content.type === 'sections' ? (
                active.content.sections.map((sec) => {
                  const sectionKey = `${activeIdx}-${sec.title}`
                  const isExpanded = expandedSections.has(sectionKey)
                  const visibleItems =
                    sec.maxVisible && !isExpanded
                      ? sec.items.slice(0, sec.maxVisible)
                      : sec.items
                  const hiddenCount = sec.maxVisible
                    ? sec.items.length - sec.maxVisible
                    : 0

                  return (
                    <div key={sec.title} className="mt-6">
                      <h3
                        className="text-[14px] font-bold uppercase tracking-[0.14em] text-white/95"
                        style={{ textShadow: '0 1px 4px rgba(0,0,0,0.9)' }}
                      >
                        {sec.subtitle}
                      </h3>
                      <ul
                        className="mt-3 list-disc pl-6 space-y-2 text-[15px] font-semibold leading-[1.6] text-white"
                        style={{ textShadow: '0 1px 4px rgba(0,0,0,0.85)' }}
                      >
                        {visibleItems.map((it) => (
                          <li key={`${sec.title}-${it.name}`}>
                            <span>{it.name}</span>
                            {it.org ? (
                              <span className="block mt-0.5 text-[13px] font-normal text-white/80">
                                {it.org}
                              </span>
                            ) : null}
                          </li>
                        ))}
                      </ul>
                      {hiddenCount > 0 && (
                        <button
                          type="button"
                          onClick={() => toggleSection(sectionKey)}
                          className="mt-3 text-[13px] font-semibold uppercase tracking-[0.12em] text-white/80 underline underline-offset-4 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                        >
                          {isExpanded
                            ? 'VER MENOS'
                            : `VER MÁS (${hiddenCount} más)`}
                        </button>
                      )}
                    </div>
                  )
                })
              ) : (
                <div
                  className="mt-6 space-y-4 text-[15px] leading-[1.75] text-white"
                  style={{ textShadow: '0 1px 4px rgba(0,0,0,0.85)' }}
                >
                  {active.content.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              )}
            </div>

            {/* Columna derecha: carrusel con las fotos del tab activo */}
            <div className="flex items-start justify-center md:justify-end">
              <PhotoCarousel
                key={activeIdx}
                images={active.photos}
              />
            </div>
          </div>
        </div>
      </section>

      <ExperienceStatsBar />
    </div>
  )
}
