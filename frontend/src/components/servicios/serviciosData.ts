/**
 * Datos de la página "Servicios".
 * - Qué hace: centraliza títulos y listas para renderizar la página sin hardcodear todo en el componente.
 * - Por qué: facilita mantenimiento y mantiene el patrón del proyecto (data separada).
 * - Relacionado con: `src/pages/ServiciosPage.tsx`.
 */

export type ServicioBloque = {
  title: string
  items: string[]
}

export const serviciosTitle = 'SERVICIOS'

export const serviciosBloques: ServicioBloque[] = [
  {
    title: 'PLANEACIÓN URBANA, ORDENAMIENTO\nTERRITORIAL, ORDENAMIENTO ECOLÓGICO',
    items: [
      'Programas de ordenamiento territorial',
      'Programas de ordenamiento ecológico',
      'Programas de desarrollo urbano metropolitanos, municipales, centro de población y parciales',
    ],
  },
  {
    title: 'CAPACITACIÓN Y ASESORÍA EN\nADMINISTRACIÓN URBANA Y NORMATIVIDAD\nMUNICIPAL',
    items: [
      'Planes municipales de desarrollo',
      'Reglamentación municipal',
      'Estrategias de catastro y predial',
      'Licencias de uso de suelo y construcción',
    ],
  },
  {
    title: 'SERVICIOS A PARTICULARES',
    items: [
      'Planes maestros (diseño urbano)',
      'Estudios de mercado y análisis de expansión empresarial territorial',
    ],
  },
]

