/**
 * Mapa de experiencia (México por estados).
 * - Qué hace: renderiza un SVG interactivo por estados, colorea según "nivel de experiencia"
 *   y muestra un tooltip (card) al hacer hover/focus.
 * - Por qué: una imagen estática no permite replicar el componente del screenshot (colores + tooltip por estado).
 * - Relacionado con:
 *   - `@svg-maps/mexico` (paths del mapa por estado)
 *   - `src/components/home/homeMapData.ts` (colores + niveles + detalles)
 *   - `src/components/home/Experiencia.tsx` (sección que lo contiene).
 */
import { useMemo, useState } from 'react'
import mexicoMap from '@svg-maps/mexico'
import {
  type ExperienceLevel,
  EXPERIENCE_LEVEL_TO_FILL,
  experienceByStateId,
  experienceDetailsByStateId,
  experienceStateNameOverrides,
} from '@/components/home/homeMapData'

type MexicoLocation = {
  id: string
  name: string
  path: string
}

type ActiveTooltip = {
  stateId: string
  stateName: string
  x: number
  y: number
}

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n))
}

function getFillForState(stateId: string): string {
  // Qué hace: decide el color exacto del estado según el nivel configurado.
  // Por qué: centraliza la lógica y facilita que el mapa sea "replicable".
  // Relacionado con: `src/components/home/homeMapData.ts`.
  /*
    Importante para el look del screenshot:
    - Qué hace: por defecto pinta los estados SIN experiencia con un tono "low" (café claro).
    - Por qué: así se ve el mapa en el diseño (base café claro) y los estados con experiencia se distinguen con café oscuro.
    - Relacionado con: `homeMapData.ts` (niveles) y feedback del usuario.
  */
  const level: ExperienceLevel = experienceByStateId[stateId] ?? 'low'
  return EXPERIENCE_LEVEL_TO_FILL[level]
}

export function ExperienceMap() {
  const [active, setActive] = useState<ActiveTooltip | null>(null)

  const locations = useMemo(() => mexicoMap.locations, [])

  return (
    <div className="relative w-full">
      {/* SVG */}
      <svg
        viewBox={mexicoMap.viewBox}
        role="img"
        aria-label="Mapa de México (estados de experiencia)"
        className="h-auto w-full"
      >
        {/* Fondo blanco como el screenshot */}
        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill="#ffffff"
          aria-hidden="true"
        />

        <g>
          {(locations as MexicoLocation[]).map((loc) => {
            const fill = getFillForState(loc.id)
            const isActive = active?.stateId === loc.id
            const displayName = experienceStateNameOverrides[loc.id] ?? loc.name

            return (
              <path
                key={loc.id}
                d={loc.path}
                fill={fill}
                stroke="#ffffff"
                strokeWidth={isActive ? 1.2 : 0.8}
                tabIndex={0}
                aria-label={loc.name}
                onMouseEnter={(e) => {
                  const x = clamp(e.clientX + 14, 12, window.innerWidth - 360)
                  const y = clamp(e.clientY + 14, 12, window.innerHeight - 260)
                  setActive({ stateId: loc.id, stateName: displayName, x, y })
                }}
                onMouseMove={(e) => {
                  // Qué hace: sigue el cursor para que el tooltip se "pegue" como un hover real.
                  // Por qué: imita el comportamiento del componente del screenshot.
                  if (!active || active.stateId !== loc.id) return
                  const x = clamp(e.clientX + 14, 12, window.innerWidth - 360)
                  const y = clamp(e.clientY + 14, 12, window.innerHeight - 260)
                  setActive((prev) =>
                    prev
                      ? { ...prev, x, y, stateId: loc.id, stateName: displayName }
                      : null,
                  )
                }}
                onMouseLeave={() => setActive(null)}
                onFocus={(e) => {
                  const rect = (e.target as SVGPathElement).getBoundingClientRect()
                  const x = clamp(rect.right + 14, 12, window.innerWidth - 360)
                  const y = clamp(rect.top + 14, 12, window.innerHeight - 260)
                  setActive({ stateId: loc.id, stateName: displayName, x, y })
                }}
                onBlur={() => setActive(null)}
                style={{ cursor: 'default', outline: 'none' }}
              />
            )
          })}
        </g>
      </svg>

      {/* Leyenda (como en el screenshot) */}
      <div className="absolute right-6 top-1/2 hidden -translate-y-1/2 items-center gap-3 text-xs font-semibold uppercase tracking-wider text-[#6b3f2b] md:flex">
        <span
          className="h-4 w-4"
          style={{ backgroundColor: EXPERIENCE_LEVEL_TO_FILL.high }}
          aria-hidden="true"
        />
        <span>ESTADOS DE EXPERIENCIA</span>
      </div>

      {/* Tooltip (card blanca) */}
      {active ? (
        <div
          className="pointer-events-none fixed z-[60] w-[340px] rounded-lg bg-white/95 p-4 shadow-xl ring-1 ring-black/10"
          style={{ left: active.x, top: active.y }}
          role="status"
          aria-live="polite"
        >
          <div className="text-sm font-bold uppercase tracking-wide text-[#6b3f2b]">
            {active.stateName}
          </div>

          {experienceDetailsByStateId[active.stateId]?.length ? (
            <ul className="mt-2 list-disc space-y-1 pl-4 text-[13px] leading-snug text-neutral-700">
              {experienceDetailsByStateId[active.stateId]!.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : (
            <div className="mt-2 text-[13px] text-neutral-600">
              Sin información detallada configurada para este estado.
            </div>
          )}
        </div>
      ) : null}
    </div>
  )
}

