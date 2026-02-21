/**
 * Barra reutilizable de estadísticas de experiencia (8/74/37) con count-up.
 * - Qué hace: renderiza la barra café con los números en crema y el check en círculo blanco, animando al entrar en viewport.
 * - Por qué: el usuario pidió que los números (colores + efecto) sean iguales en Home, "¿Quiénes somos?" y "Nuestro trabajo".
 * - Relacionado con: `src/components/home/Experiencia.tsx` y `src/pages/NuestroTrabajoPage.tsx`.
 */
import { useMemo, useRef } from 'react'
import { experienciaStats } from '@/components/home/homeData'
import { useCountUp, useInViewOnce } from '@/hooks/useCountUpOnView'

type Props = {
  /**
   * `id` opcional para anclas/scroll (si en el futuro se usa).
   * - Relacionado con: `src/components/layout/ScrollToHash.tsx`.
   */
  id?: string
  className?: string
}

export function ExperienceStatsBar({ id, className }: Props) {
  const statsRef = useRef<HTMLDivElement | null>(null)
  const statsInView = useInViewOnce(statsRef, { threshold: 0.5, rootMargin: '0px' })

  const numericTargets = useMemo(
    () => experienciaStats.map((s) => Number.parseInt(s.value, 10) || 0),
    [],
  )

  const counted0 = useCountUp(numericTargets[0] ?? 0, statsInView)
  const counted1 = useCountUp(numericTargets[1] ?? 0, statsInView)
  const counted2 = useCountUp(numericTargets[2] ?? 0, statsInView)
  const countedValues = [counted0, counted1, counted2]

  return (
    <div
      id={id}
      ref={statsRef}
      className={[
        'bg-[var(--apt-brown)] py-6 sm:py-7',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-5 px-4 md:grid-cols-3">
        {experienciaStats.map((s, idx) => (
          <div key={s.label} className="text-center text-white">
            {/* 
              Números KPI:
              - Qué hace: usa la escala tipográfica global (18/16/14).
              - Por qué: el usuario pidió que ESTA sección (reutilizada en todas las páginas) no se vea “super grande”.
              - Relacionado con: `src/components/home/Experiencia.tsx` (barra) y pedido de tipografía global en `.cursorrules`.
            */}
            <div className="apt-kpi font-bold text-[var(--apt-cream)]">
              {countedValues[idx] ?? 0}
            </div>
            {/* Labels estandarizados (Info = 14px) */}
            <div className="apt-fs-info mt-3 whitespace-pre-line font-semibold uppercase tracking-[0.14em] text-white/95">
              {s.label}
            </div>

            {/* Check en círculo blanco (igual que Home) */}
            <div className="mt-4 flex justify-center" aria-hidden="true">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white">
                <svg viewBox="0 0 24 24" className="h-4 w-4 text-[var(--apt-brown)]">
                  <path
                    fill="currentColor"
                    d="M9.2 16.6 4.9 12.3l1.4-1.4 2.9 2.9 8.5-8.5 1.4 1.4-9.9 9.9Z"
                  />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

