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
  carouselImageUrls?: string[]
  href?: string
}

export type ExperienciaStat = {
  value: string
  label: string
}

export const HOME_SUBTITLE =
  'CONSULTORÍA Y ASESORÍA PARA EL DESARROLLO URBANO Y REGIONAL'

export const HERO_VIDEO_URL =
  '/apt-video-banner.mp4'

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
    imageUrl: '/proyectos-recientes/san-felipe-imagen1.jpg',
    href: '/proyectos-recientes/san-felipe-descargable.pdf',
  },
  {
    title: 'ARIZPE',
    subtitle: 'Programa Municipal de Desarrollo Urbano de Arizpe',
    imageUrl: '/proyectos-recientes/arizpe-imagen.jpg',
    href: '/proyectos-recientes/arizpe-descargable.pdf',
  },
  {
    title: 'CABORCA',
    subtitle: 'Programa Municipal de Desarrollo Urbano de Caborca',
    imageUrl: '/proyectos-recientes/caborca-imagen-principal.png',
    carouselImageUrls: [
      '/proyectos-recientes/caborca-imagen-principal.png',
      '/proyectos-recientes/caborca-imagen.jpg',
    ],
    href: '/proyectos-recientes/caborca-descargable.pdf',
  },
  {
    title: 'G. PLUTARCO ELÍAS CALLES',
    subtitle:
      'Programa Municipal de Desarrollo Urbano de Gral. Plutarco Elías Calles',
    imageUrl: '/proyectos-recientes/plutarco-imagen.jpg',
    carouselImageUrls: [
      '/proyectos-recientes/plutarco-imagen.jpg',
      '/proyectos-recientes/plutarco-descargable.jpg',
    ],
  },
  {
    title: 'MOCTEZUMA',
    subtitle: 'Programa Municipal de Desarrollo Urbano de Moctezuma',
    imageUrl: '/proyectos-recientes/moctezuma-imagen.jpg',
  },
  {
    title: 'PUERTO PEÑASCO',
    subtitle:
      'Actualización del Programa Municipal de Desarrollo Urbano de Puerto Peñasco',
    imageUrl: '/proyectos-recientes/puerto-penasco-imagen.jpg',
    carouselImageUrls: [
      '/proyectos-recientes/puerto-penasco-imagen.jpg',
      '/proyectos-recientes/puerto-penasco-descargable.jpg',
    ],
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

