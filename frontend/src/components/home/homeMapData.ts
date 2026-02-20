/**
 * Configuración del mapa de experiencia (colores + datos por estado).
 * - Qué hace: centraliza la paleta y la data por estado (nivel + tooltip).
 * - Por qué: permite que `ExperienceMap` sea presentacional y que los tooltips se mantengan en un solo lugar.
 * - Relacionado con:
 *   - `src/components/home/ExperienceMap.tsx` (consume estos datos)
 *   - `Mapa.txt` (fuente de verdad de los tooltips provistos por el usuario).
 */

export type ExperienceLevel = 'none' | 'low' | 'mid' | 'high'

/**
 * Paleta basada en el diseño:
 * - none: blanco/gris muy claro
 * - low/mid/high: gamas café
 */
export const EXPERIENCE_LEVEL_TO_FILL: Record<ExperienceLevel, string> = {
  none: '#f3eee9',
  low: '#d9b8a1',
  mid: '#b27a5d',
  high: '#6b3f2b',
}

/**
 * Nivel por estado (id del paquete `@svg-maps/mexico`).
 * - Qué hace: decide qué estados se pintan y con qué intensidad.
 * - Por qué: los estados con experiencia deben ir en café oscuro; los demás quedan en café claro (como estaba antes).
 * - Relacionado con: `Mapa.txt` (8 estados con información).
 */
export const experienceByStateId: Partial<Record<string, ExperienceLevel>> = {
  // Estados con experiencia (según `Mapa.txt`)
  son: 'high', // Sonora
  sin: 'high', // Sinaloa
  jal: 'high', // Jalisco
  tab: 'high', // Tabasco
  bcn: 'high', // Baja California
  dur: 'high', // Durango
  pue: 'high', // Puebla
  cmx: 'high', // Ciudad de México (id `cmx` en el SVG; nombre base "Mexico City")
}

/**
 * Detalle por estado para tooltip (lista).
 * - Qué hace: define los bullets que se muestran al hacer hover/focus en un estado.
 * - Por qué: el usuario compartió `Mapa.txt` para que el mapa del index muestre esta información.
 * - Relacionado con: `src/components/home/ExperienceMap.tsx` (tooltip).
 */
export const experienceDetailsByStateId: Partial<Record<string, string[]>> = {
  son: [
    'Programa de Ordenamiento Ecológico Regional Participativo del Territorio Yaqui (Coordinación del diagnóstico participativo, SEMARNAT / PUEM, 2023)',
    'Programa Regional de Ordenamiento Territorial UTB Cajeme (SIDUR, 2016)',
    'Programa Sectorial de Infraestructura y Desarrollo Urbano Sustentable del Estado de Sonora (2016-2021)',
    'Estudios de Deterioro Habitacional en los Conjuntos INFONAVIT, casos de Hermosillo y Cd. Obregón (Centro EURE / INFONAVIT, 2014)',
    'Diagnóstico y Plan de Acción Cajeme, Iniciativa de Ciudades Prósperas, ONU-Hábitat (Centro EURE / ONU-Hábitat, 2014)',
    '4 Planes municipales de desarrollo (PMD)',
    '9 Programas municipales de desarrollo urbano (PMDU)',
    '20 Programas de desarrollo urbano de centro de población (PDUCP)',
    '8 Programas parciales de desarrollo urbano (PPDU)',
    '3 Planes maestros',
    '3 reglamentos municipales y estatales de ordenamiento territorial y desarrollo urbano',
  ],
  sin: [
    'Estrategia de Desarrollo Regional para el Estado de Sinaloa (Centro EURE / CODESIN, 2012)',
    'Estudios de Deterioro Habitacional en los Conjuntos INFONAVIT, casos de Culiacán y Los Mochis (Centro EURE / INFONAVIT, 2014)',
  ],
  jal: [
    'Programa de Ordenamiento Ecológico de la Región Norte de Jalisco (PUEM, UAM / SEMADET, 2015)',
  ],
  tab: [
    'Programa Parcial de Desarrollo Urbano Intervención Urbana Integral del Río Grijalva en Villahermosa, Tab. (2019)',
    '9 Programas de desarrollo urbano de centro de población (PDUCP)',
    'Programa de Ordenamiento Territorial del Estado de Tabasco (Coordinador del componente "subsistema natural", 2004)',
  ],
  bcn: [
    'Programa Parcial de Desarrollo Urbano Centro-Malecón de La Paz, B.C. (2013)',
    'Programa Parcial de Desarrollo Urbano Crecimiento Zona Sur-oriental, La Paz, B.C. (2011)',
  ],
  dur: [
    'Programa Parcial de Desarrollo Urbano Crecimiento Zona Noroeste, Gómez Palacio, Dur. (2013)',
  ],
  pue: [
    'Programa Parcial de Desarrollo Urbano Centro Histórico de Cholula de Rivadavia, Pue. (2012)',
  ],
  cmx: [
    'Estudio evaluatorio de alternativas para la localización del Nuevo Aeropuerto Internacional de la Ciudad de México, implicaciones en el desarrollo urbano (Asesoría a SEDESOL, 1999)',
  ],
}

/**
 * Overrides de nombre de estado para el tooltip.
 * - Qué hace: reemplaza nombres que vienen en inglés desde `@svg-maps/mexico`.
 * - Por qué: CDMX aparece como "Mexico City" en el paquete, pero debe mostrarse en español.
 * - Relacionado con: `src/components/home/ExperienceMap.tsx`.
 */
export const experienceStateNameOverrides: Partial<Record<string, string>> = {
  cmx: 'Ciudad de México',
}

