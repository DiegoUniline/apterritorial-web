/**
 * ScrollToHash (helper de routing).
 * - Qué hace: cuando cambia la URL (ruta o hash), hace scroll al elemento con id igual al hash.
 * - Por qué: en un SPA con React Router, navegar a `/#trabajo` no siempre dispara el scroll nativo del navegador.
 * - Relacionado con: `src/components/layout/SiteLayout.tsx` (donde se usa) y `src/components/layout/SiteHeader.tsx` (links con hash).
 */
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function ScrollToHash() {
  const location = useLocation()

  useEffect(() => {
    /**
     * Estrategia simple y robusta:
     * - Si hay hash, intentamos encontrar el elemento y scrollear.
     * - Reintentamos algunos frames por si el DOM aún no está montado (cambio de ruta).
     * - Si no hay hash, subimos al top (UX típica en navegación entre páginas).
     */
    const { hash } = location

    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
      return
    }

    const id = decodeURIComponent(hash.replace('#', '')).trim()
    if (!id) return

    let raf = 0
    let attempts = 0
    const maxAttempts = 30 // ~0.5s a 60fps

    const tryScroll = () => {
      attempts += 1
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
      if (attempts < maxAttempts) raf = requestAnimationFrame(tryScroll)
    }

    raf = requestAnimationFrame(tryScroll)
    return () => cancelAnimationFrame(raf)
  }, [location])

  return null
}

