import { useState, useEffect, useCallback } from 'react'

type Props = {
  images: string[]
  /** Clases Tailwind para la etiqueta <img> */
  imgClassName?: string
}

export function PhotoCarousel({
  images,
  imgClassName = 'h-[320px] w-full object-contain md:h-[400px]',
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

  // Auto-avance cada 4.5 s
  // (el reset al slide 0 al cambiar de tab lo maneja el padre con key={activeIdx})
  useEffect(() => {
    if (images.length <= 1) return
    const id = setInterval(next, 4500)
    return () => clearInterval(id)
  }, [next, images.length])

  if (!images.length) return null

  return (
    <div className="relative w-full overflow-hidden bg-neutral-800">
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
          {/* Flecha izquierda */}
          <button
            type="button"
            onClick={prev}
            aria-label="Imagen anterior"
            className="absolute left-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center bg-black/40 text-2xl text-white transition-colors hover:bg-black/65"
          >
            ‹
          </button>

          {/* Flecha derecha */}
          <button
            type="button"
            onClick={next}
            aria-label="Siguiente imagen"
            className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center bg-black/40 text-2xl text-white transition-colors hover:bg-black/65"
          >
            ›
          </button>
        </>
      )}
    </div>
  )
}
