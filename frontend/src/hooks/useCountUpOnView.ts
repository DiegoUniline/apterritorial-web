/**
 * Hooks compartidos para animación de contadores al entrar en viewport.
 * - Qué hace: detecta visibilidad (IntersectionObserver) y anima números 0→N una sola vez.
 * - Por qué: estandarizar el “efecto” de números entre Home (Experiencia) y "¿Quiénes somos?".
 * - Relacionado con: `src/components/home/Experiencia.tsx` y `src/components/quienes-somos/QuienesSomosSection.tsx`.
 */
import { useEffect, useRef, useState } from 'react'

type InViewOptions = {
  threshold?: number
  rootMargin?: string
}

export function useInViewOnce<T extends Element>(
  ref: React.RefObject<T | null>,
  options: InViewOptions = { threshold: 0.5, rootMargin: '0px' },
) {
  /**
   * Detecta si un elemento entra en viewport (solo una vez).
   * - Qué hace: retorna `true` cuando `ref.current` se intersecta y no vuelve a `false`.
   * - Por qué: evita re-animaciones al hacer scroll arriba/abajo.
   * - Relacionado con: `useCountUp` y secciones de stats.
   */
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || inView) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInView(true)
            observer.disconnect()
            break
          }
        }
      },
      { threshold: options.threshold ?? 0.5, rootMargin: options.rootMargin ?? '0px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [inView, options.rootMargin, options.threshold, ref])

  return inView
}

export function useCountUp(target: number, start: boolean, durationMs = 2000) {
  /**
   * Anima un contador desde 0 hasta `target` cuando `start` es true (una sola vez).
   * - Qué hace: usa requestAnimationFrame para animación fluida sin timers.
   * - Por qué: mismo comportamiento en todas las páginas/sections.
   * - Relacionado con: `useInViewOnce`.
   */
  const [value, setValue] = useState(0)
  const startedRef = useRef(false)

  useEffect(() => {
    if (!start || startedRef.current) return
    startedRef.current = true

    const startTs = performance.now()
    const tick = (now: number) => {
      const t = Math.min(1, (now - startTs) / durationMs)
      setValue(Math.floor(target * t))
      if (t < 1) requestAnimationFrame(tick)
      else setValue(target)
    }

    const raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [durationMs, start, target])

  return value
}

