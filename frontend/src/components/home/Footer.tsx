/**
 * Footer (legacy wrapper).
 * - Qué hace: mantiene el export `Footer` para no romper imports existentes.
 * - Por qué: el footer ahora vive en `src/components/layout/SiteFooter.tsx` para reutilizarlo en otras páginas.
 * - Relacionado con: `src/components/layout/SiteFooter.tsx` (implementación real).
 */
import { SiteFooter } from '@/components/layout/SiteFooter'

export function Footer() {
  return <SiteFooter />
}

