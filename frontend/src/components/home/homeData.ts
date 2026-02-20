/**
 * Datos de la Home.
 * - Qué hace: centraliza URLs/textos para que los componentes sean presentacionales.
 * - Por qué: evita duplicación y facilita mantenimiento (cambiar un link/imagen en un solo lugar).
 * - Relacionado con: `Diseño actual/Home.txt` (URLs) y `src/components/home/*` (consumo).
 */

export type ProyectoReciente = {
  title: string
  subtitle: string
  imageUrl: string
  href: string
}

export type ExperienciaStat = {
  value: string
  label: string
}

export const HOME_SUBTITLE =
  'CONSULTORÍA Y ASESORÍA PARA EL DESARROLLO URBANO Y REGIONAL'

export const HERO_VIDEO_URL =
  'https://res.cloudinary.com/dstcnsu6a/video/upload/v1765474322/para_web_ejbj49.mp4'

export const proyectosRecientes: ProyectoReciente[] = [
  {
    /**
     * Texto según screenshot `HOME APT – 1.jpg`.
     * - Qué hace: usa el nombre corto como título y el descriptor exacto como subtítulo.
     * - Por qué: el usuario pidió que sea idéntico a la captura (sin “PMDU/PMD” visibles).
     * - Relacionado con: `src/components/home/ProyectosRecientes.tsx` (render de la tarjeta).
     */
    title: 'SAN FELIPE DE JESUS',
    subtitle:
      'Plan Municipal de desarrollo de San Felipe de Jesús, 2025-2027',
    imageUrl:
      'https://res.cloudinary.com/dstcnsu6a/image/upload/v1765474254/Imagen1_dlf3ld.jpg',
    href: 'https://drive.google.com/file/d/1duUMOOiBSLjC7EdZO2P8vIqCRpvV-0OP/view?usp=sharing',
  },
  {
    title: 'ARIZPE',
    subtitle: 'Programa Municipal de Desarrollo Urbano de Arizpe',
    imageUrl:
      'https://res.cloudinary.com/dstcnsu6a/image/upload/v1765474265/20221005_142125_lndjvc.jpg',
    href: 'https://drive.google.com/file/d/105P9NxHVHMzrjdTsNxDeIykd0URD63fW/view?usp=sharing',
  },
  {
    title: 'CABORCA',
    subtitle: 'Programa Municipal de Desarrollo Urbano de Caborca',
    imageUrl:
      'https://res.cloudinary.com/dstcnsu6a/image/upload/v1765474275/Captura_de_pantalla_2025-07-16_142428_kmsyyv.png',
    href: 'https://drive.google.com/drive/folders/1nJYZQBoeVDTAlgIQM2DGI6OZfiKBI1uA?usp=sharing',
  },
  {
    title: 'G. PLUTARCO ELÍAS CALLES',
    subtitle:
      'Programa Municipal de Desarrollo Urbano de Gral. Plutarco Elías Calles',
    imageUrl:
      'https://res.cloudinary.com/dstcnsu6a/image/upload/v1765474277/PXL_20250321_215817035.MP_pm0uyw.jpg',
    href: 'https://drive.google.com/file/d/10AiRVk16E565loPFeigzl22NMcQ8m3-R/view?usp=sharing',
  },
  {
    title: 'MOCTEZUMA',
    subtitle: 'Programa Municipal de Desarrollo Urbano de Moctezuma',
    imageUrl:
      'https://res.cloudinary.com/dstcnsu6a/image/upload/v1765474284/PXL_20231201_225148607_wrpce8.jpg',
    href: 'https://drive.google.com/file/d/1TNp1L5F28CXKdCApnAeBcsr6IQGiAu0_/view?usp=sharing',
  },
  {
    title: 'PUERTO PEÑASCO',
    subtitle:
      'Actualización del Programa Municipal de Desarrollo Urbano de Puerto Peñasco',
    imageUrl:
      'https://res.cloudinary.com/dstcnsu6a/image/upload/v1765474254/Imagen1_dlf3ld.jpg',
    href: 'https://drive.google.com/drive/folders/1kz3cqe3J8qnuTvxZeR44lLeDAhk1EkAT?usp=sharing',
  },
]

export const experienciaMapImageUrl =
  'https://res.cloudinary.com/dstcnsu6a/image/upload/v1765474275/Captura_de_pantalla_2025-07-16_142428_kmsyyv.png'

/**
 * Ojo: el HTML de referencia tenía números “15”; el screenshot objetivo muestra 8/74/37.
 * Usamos el screenshot como fuente de verdad visual para esta sección.
 */
export const experienciaStats: ExperienciaStat[] = [
  { value: '8', label: 'ESTADOS' },
  { value: '74', label: 'PLANES, PROGRAMAS Y PROYECTOS\nREALIZADOS EN EL PAÍS' },
  { value: '37', label: 'MUNICIPIOS' },
]

