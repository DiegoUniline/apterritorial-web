/**
 * Sección "Proyectos recientes" (grid con hover overlay).
 * - Qué hace: renderiza una grilla responsive 3→2→1 con imágenes y texto SIEMPRE visible (sin hover).
 * - Por qué: en el screenshot los nombres se ven directamente; no hay interacción de “aparecer/desaparecer”.
 * - Relacionado con: `Diseño actual/Home.txt` (estructura/hover) y `src/components/home/homeData.ts` (datos).
 */
import { proyectosRecientes } from '@/components/home/homeData'
import { useEffect, useState } from 'react'

export function ProyectosRecientes() {
  const [carouselIndexByTitle, setCarouselIndexByTitle] = useState<
    Record<string, number>
  >({})

  useEffect(() => {
    const hasAnyCarousel = proyectosRecientes.some(
      (p) => (p.carouselImageUrls?.length ?? 0) > 1,
    )

    if (!hasAnyCarousel) return

    const intervalId = window.setInterval(() => {
      setCarouselIndexByTitle((prev) => {
        const next: Record<string, number> = { ...prev }

        for (const proyecto of proyectosRecientes) {
          const images = proyecto.carouselImageUrls
          if (!images || images.length <= 1) continue

          const currentIndex = prev[proyecto.title] ?? 0
          next[proyecto.title] = (currentIndex + 1) % images.length
        }

        return next
      })
    }, 3500)

    return () => {
      window.clearInterval(intervalId)
    }
  }, [])

  return (
    <section id="trabajo" className="bg-white">
      {/* Banda blanca con título (como en el screenshot) */}
      <div className="py-10 sm:py-12">
        <h2 className="apt-title-main px-4 text-center">
          PROYECTOS RECIENTES
        </h2>
      </div>

      <div className="mx-auto grid max-w-none grid-cols-1 gap-0 md:grid-cols-2 lg:grid-cols-3">
        {proyectosRecientes.map((p) => (
          <article
            key={p.title}
            className="relative h-[260px] overflow-hidden md:h-[300px] lg:h-[320px]"
          >
            <img
              src={
                p.carouselImageUrls && p.carouselImageUrls.length > 0
                  ? p.carouselImageUrls[carouselIndexByTitle[p.title] ?? 0]
                  : p.imageUrl
              }
              alt={p.title}
              className="h-full w-full object-cover"
              loading="lazy"
              decoding="async"
            />

            {/* Overlay permanente (sin efectos): degradado inferior + texto + icono */}
            <div className="pointer-events-none absolute inset-0">
              {/*
                Efecto “café” del screenshot:
                - Qué hace: tiñe la parte inferior con un degradado café (no negro).
                - Por qué: en `HOME APT – 1.jpg` el overlay inferior tiene tono #653621.
                - Relacionado con: sección "PROYECTOS RECIENTES".
              */}
              <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#653621]/90 via-[#653621]/35 to-transparent" />

              <div className="absolute bottom-5 left-5 right-12 text-white">
                <h3 className="apt-fs-subtitle font-semibold uppercase tracking-wide text-white">
                  {p.title}
                </h3>
                <p className="apt-fs-info mt-1 text-white/90">{p.subtitle}</p>
              </div>

              {/* Ícono tipo “descarga” solo cuando el proyecto sí tiene descargable */}
              {p.href && (
                <div className="absolute bottom-5 right-5 text-white/90">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                    <path
                      fill="currentColor"
                      d="M12 15.5 7 10.5h3V4h4v6.5h3l-5 5Zm-7 4V17h14v2.5H5Z"
                    />
                  </svg>
                </div>
              )}
            </div>

            {/* Área de enfoque: solo se renderiza si existe descargable */}
            {p.href ? (
              <a
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="absolute inset-0"
                aria-label={`Abrir proyecto: ${p.title}`}
              />
            ) : null}
          </article>
        ))}
      </div>
    </section>
  )
}

