/**
 * Layout base del sitio (Header + Footer + Outlet).
 * - Qué hace: aplica un layout consistente a todas las páginas: header fijo, contenido con padding-top, y footer.
 * - Por qué: Home y "¿Quiénes somos?" deben ser páginas diferentes pero compartir el mismo menú y footer.
 * - Relacionado con: `src/App.tsx` (routing) y `src/components/layout/SiteHeader.tsx` / `SiteFooter.tsx`.
 */
import { Outlet } from 'react-router-dom'
import { SiteHeader } from '@/components/layout/SiteHeader'
import { SiteFooter } from '@/components/layout/SiteFooter'
import { ScrollToHash } from '@/components/layout/ScrollToHash'

export function SiteLayout() {
  return (
    <div className="flex min-h-dvh flex-col bg-white text-neutral-900 overflow-x-hidden">
      <SiteHeader />

      {/* Contenido principal: padding superior para compensar el header fijo */}
      <main className="flex-1 pt-[104px]">
        {/* 
          Scroll al hash:
          - Qué hace: permite que links tipo `/#trabajo` funcionen desde cualquier página.
          - Por qué: React Router SPA no siempre hace scroll nativo al hash.
          - Relacionado con: `src/components/layout/ScrollToHash.tsx`.
        */}
        <ScrollToHash />
        <Outlet />
      </main>

      <SiteFooter />
    </div>
  )
}

