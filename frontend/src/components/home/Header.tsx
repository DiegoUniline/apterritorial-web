/**
 * Header fijo (legacy wrapper).
 * - Qué hace: mantiene el export `Header` para no romper imports existentes.
 * - Por qué: el header ahora vive en `src/components/layout/SiteHeader.tsx` para reutilizarlo en otras páginas.
 * - Relacionado con: `src/components/layout/SiteHeader.tsx` (implementación real).
 */
import { SiteHeader } from '@/components/layout/SiteHeader'

export function Header() {
  return <SiteHeader />
}

