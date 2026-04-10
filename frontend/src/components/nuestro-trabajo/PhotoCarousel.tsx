import { useState, useEffect, useCallback } from 'react'

type Props = {
  images: string[]
  /** Clases Tailwind para controlar la altura de la imagen desde el padre */
  imgClassName?: string
}

export function PhotoCarousel({
  images,
  imgClassName = 'h-64 w-full object-contain sm:h-80 md:h-[500px]',
}: Props) {
  const [idx, setIdx] = useState(0)

  const prev = useCallback(
    () => setIdx(i => (i - 1 + images.length) % images.length),
    [images.length],
  )
  const next = useCallback(
    () => setIdx(i => (i + 1) % images.length),
    [images.length],
  )

  // Reinicia al primer slide cuando cambia el set de imágenes
  useEffect(() => {
    setIdx(0)
  }, [images])

  // Avance automático cada 4.5 s
  useEffect(() => {
    if (images.length <= 1) return
    const id = setInterval(next, 4500)
    return () => clearInterval(id)
  }, [next, images.length])

  if (!images.length) return null

  return (
    <div className="relative w-full overflow-hidden bg-neutral-900">
      {/* Imagen sin marco, ocupa el 100 % del ancho */}
      <img
        key={images[idx]}
        src={images[idx]}
        alt={`Imagen ${idx + 1} de ${images.length}`}
        className={imgClassName}
        loading="lazy"
        decoding="async"
      />

      {images.length > 1 && (
        <>
          {/* Botón anterior */}
          <button
            type="button"
            onClick={prev}
            aria-label="Imagen anterior"
            className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center bg-black/40 text-2xl text-white transition-colors hover:bg-black/65"
          >
            ‹
          </button>

          {/* Botón siguiente */}
          <button
            type="button"
            onClick={next}
            aria-label="Siguiente imagen"
            className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center bg-black/40 text-2xl text-white transition-colors hover:bg-black/65"
          >
            ›
          </button>

          {/* Puntos indicadores superpuestos en la parte inferior */}
          <div className="absolute bottom-3 left-0 right-0 flex flex-wrap justify-center gap-1.5 px-6">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIdx(i)}
                aria-label={`Ir a imagen ${i + 1}`}
                className={`h-2 w-2 rounded-full border border-white/70 transition-colors ${
                  i === idx ? 'bg-white' : 'bg-black/40'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
