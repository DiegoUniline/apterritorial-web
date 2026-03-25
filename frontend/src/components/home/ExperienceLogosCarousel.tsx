/**
 * Carrusel continuo de logos institucionales.
 * - Qué hace: muestra de forma automática todos los logos en una pista horizontal infinita.
 * - Por qué: el usuario pidió un carrusel debajo de la sección del mapa de experiencia.
 * - Relacionado con: `src/components/home/Experiencia.tsx` y `public/logos-carousel/*`.
 */
const LOGOS_CAROUSEL_IMAGES = Array.from(
  { length: 40 },
  (_, idx) => `/logos-carousel/logo-${String(idx + 1).padStart(2, '0')}.png`,
)

export function ExperienceLogosCarousel() {
  const loopedLogos = [...LOGOS_CAROUSEL_IMAGES, ...LOGOS_CAROUSEL_IMAGES]

  return (
    <div className="bg-white py-8 sm:py-10">
      <div className="mx-auto max-w-6xl px-4">
        <div className="logo-carousel-viewport overflow-hidden">
          <div className="logo-carousel-track flex w-max items-center gap-6 sm:gap-10">
            {loopedLogos.map((src, idx) => (
              <div
                key={`${src}-${idx}`}
                className="flex h-16 w-[140px] shrink-0 items-center justify-center sm:h-20 sm:w-[180px]"
              >
                <img
                  src={src}
                  alt="Logo institucional"
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

