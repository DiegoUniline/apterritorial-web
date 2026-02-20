/**
 * Página de inicio (Home).
 * - Qué hace: replica el layout del HTML de Google Sites en React + Tailwind.
 * - Por qué: migrar el sitio de Google Sites a un Frontend moderno (Vite/React/TS).
 * - Relacionado con: `Diseño actual/Home.txt` (fuente de verdad de textos/URLs) y `HOME APT – 1.jpg` (diseño objetivo).
 */
import { HeroVideo } from '@/components/home/HeroVideo'
import { ProyectosRecientes } from '@/components/home/ProyectosRecientes'
import { Experiencia } from '@/components/home/Experiencia'

export function HomePage() {
  return (
    <>
      {/* 
        Nota importante:
        - Qué hace: Home solo renderiza el contenido de la ruta `/`.
        - Por qué: el header/footer ahora viven en `src/components/layout/SiteLayout.tsx` para todas las páginas.
        - Relacionado con: `src/App.tsx` (routing) y `src/components/layout/SiteLayout.tsx`.
      */}
      <HeroVideo />
      <ProyectosRecientes />
      <Experiencia />
    </>
  )
}

