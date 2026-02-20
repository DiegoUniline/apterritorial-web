/**
 * Hero con video a pantalla ancha.
 * - Qué hace: reproduce el video en loop con overlay oscuro leve.
 * - Por qué: coincide con el hero del diseño de Google Sites/screenshot.
 * - Relacionado con: `Diseño actual/Home.txt` (URL del video) y `src/components/home/homeData.ts`.
 */
import { HERO_VIDEO_URL } from '@/components/home/homeData'

export function HeroVideo() {
  return (
    <section
      id="inicio"
      className="relative h-[70vh] min-h-[420px] w-full overflow-hidden sm:h-[70vh] max-sm:h-[50vh]"
      aria-label="Sección principal"
    >
      <video
        className="h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={HERO_VIDEO_URL} type="video/mp4" />
      </video>

      {/* Overlay suave para legibilidad/estética como en el diseño */}
      <div className="pointer-events-none absolute inset-0 bg-black/20" />
    </section>
  )
}

