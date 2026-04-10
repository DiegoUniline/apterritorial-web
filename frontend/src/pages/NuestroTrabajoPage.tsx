/**
 * Página "Nuestro trabajo".
 * Layout: carrusel héroe (todas las fotos, ancho completo) → título → tabs + texto con fondo de imagen.
 */
import { useId, useState } from "react";
import { ExperienceStatsBar } from "@/components/shared/ExperienceStatsBar";
import {
  trabajoImages,
  trabajoPanels,
} from "@/components/nuestro-trabajo/nuestroTrabajoData";
import { PhotoCarousel } from "@/components/nuestro-trabajo/PhotoCarousel";

/** Todas las fotos de las 4 carpetas juntas para el carrusel héroe */
const heroPhotos = trabajoPanels.flatMap((p) => p.photos);

export function NuestroTrabajoPage() {
  const [activeIdx, setActiveIdx] = useState(0);
  const tabsBaseId = useId();
  const active = trabajoPanels[activeIdx] ?? trabajoPanels[0];

  return (
    <div className="bg-white">
      {/* ── Carrusel héroe: ancho total, sin marco, ANTES del título ── */}
      <PhotoCarousel
        images={heroPhotos}
        imgClassName="h-64 w-full object-contain sm:h-80 md:h-[520px]"
      />

      {/* Título principal */}
      <header className="py-10 sm:py-12">
        <h1 className="apt-title-main px-4 text-center">
          PLANES, PROGRAMAS Y PROYECTOS
        </h1>
      </header>

      {/* ── Sección con imagen de fondo: tabs + contenido textual ── */}
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
                const selected = idx === activeIdx;
                const tabId = `${tabsBaseId}-tab-${idx}`;
                const panelId = `${tabsBaseId}-panel-${idx}`;

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
                      "px-4 py-8 text-center text-xs font-semibold uppercase leading-snug tracking-[0.14em] md:text-[11px]",
                      "transition-colors",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70",
                      "border-white/15 md:border-l",
                      idx === 0 ? "md:border-l-0" : "",
                      selected
                        ? "bg-white/20 text-white"
                        : "bg-white/5 text-white/70 hover:bg-white/10",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  >
                    <span className="whitespace-pre-line">{p.tab.title}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Contenido: texto izquierda + imagen enmarcada derecha */}
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
                style={{ textShadow: "0 1px 6px rgba(0,0,0,0.9)" }}
              >
                {active.heading}
              </h2>

              {active.content.type === "sections" ? (
                active.content.sections.map((sec) => (
                  <div key={sec.title} className="mt-6">
                    <h3
                      className="text-[14px] font-bold uppercase tracking-[0.14em] text-white/95"
                      style={{ textShadow: "0 1px 4px rgba(0,0,0,0.9)" }}
                    >
                      {sec.subtitle}
                    </h3>
                    <ul
                      className="mt-3 list-disc pl-6 space-y-2 text-[15px] font-serif leading-[1.6] text-white"
                      style={{ textShadow: "0 1px 4px rgba(0,0,0,0.85)" }}
                    >
                      {sec.items.map((it) => (
                        <li key={`${sec.title}-${it.name}`}>
                          <span>{it.name}</span>
                          {it.org ? (
                            <span className="block mt-0.5 text-[13px] font-sans text-white/80">
                              {it.org}
                            </span>
                          ) : null}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))
              ) : (
                <div
                  className="mt-6 space-y-4 text-[15px] font-serif leading-[1.75] text-white"
                  style={{ textShadow: "0 1px 4px rgba(0,0,0,0.85)" }}
                >
                  {active.content.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              )}
            </div>

            {/* Columna derecha: imagen enmarcada específica del tab */}
            <div className="flex items-start justify-center md:justify-end">
              <div className="w-full max-w-[480px] bg-white/80 p-4 shadow-[0_18px_50px_rgba(0,0,0,0.35)]">
                <img
                  src={active.framedImageUrl}
                  alt="Imagen representativa del área"
                  className="h-[320px] w-full object-cover md:h-[400px]"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ExperienceStatsBar />
    </div>
  );
}
