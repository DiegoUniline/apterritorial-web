/**
 * Datos de la página "Nuestro trabajo".
 * - Qué hace: centraliza textos e imágenes para renderizar la UI y los tabs (botones) sin hardcodear todo en el componente.
 * - Por qué: en las capturas `EXPERIENCIA – 5/6/7.jpg` los títulos superiores funcionan como botones.
 * - Relacionado con: `src/pages/NuestroTrabajoPage.tsx`.
 */

export type TrabajoTab = {
  title: string;
};

export type TrabajoItem = {
  name: string;
  /**
   * Organización / cliente / nota en color acento (si aplica).
   * - Qué hace: permite mostrar una segunda línea en color (como en el HTML de referencia).
   * - Por qué: algunas listas tienen “org” y otras son bullets simples.
   * - Relacionado con: `src/pages/NuestroTrabajoPage.tsx` (render condicional).
   */
  org?: string;
};

export type TrabajoSection = {
  title: string;
  subtitle: string;
  items: TrabajoItem[];
};

/**
 * Tabs (títulos superiores) del diseño.
 * - Qué hace: define los textos en mayúsculas con saltos de línea.
 * - Por qué: se renderizan como botones/tab.
 */
export const trabajoTabs: readonly TrabajoTab[] = [
  { title: "ESTATALES Y\nREGIONALES" },
  { title: "METROPOLITANOS,\nMUNICIPALES Y DE CENTROS" },
  {
    title:
      "PROGRAMAS PARCIALES DE\nDESARROLLO URBANO Y\nPLANES MAESTROS DE\nFRACCIONAMIENTOS",
  },
  { title: "ESTUDIOS DE MERCADO Y\nEXPANSIÓN TERRITORIAL\nEMPRESARIAL" },
] as const;

/**
 * Imágenes usadas en el diseño.
 * - Qué hace: usa URLs del set del HTML de referencia.
 * - Por qué: mantener consistencia visual con `Diseño actual/Nuestro trabajo.txt`.
 * - Nota: algunas capturas muestran una imagen tipo “mapa”; por ahora usamos el set disponible.
 */
export const trabajoImages = {
  background:
    "https://res.cloudinary.com/dstcnsu6a/image/upload/v1765473515/001_prxo2o.jpg",
  framed2:
    "https://res.cloudinary.com/dstcnsu6a/image/upload/v1765473513/002_l7yg3n.jpg",
  framed3:
    "https://res.cloudinary.com/dstcnsu6a/image/upload/v1765473515/003_mudyt7.jpg",
  framed5:
    "https://res.cloudinary.com/dstcnsu6a/image/upload/v1765473516/005_bq8qpd.jpg",
  framed6:
    "https://res.cloudinary.com/dstcnsu6a/image/upload/v1765473515/006_wk7tay.jpg",
} as const;

const estatalesYRegionalesSections: TrabajoSection[] = [
  {
    title: "ELABORACIÓN",
    subtitle: "ELABORACIÓN",
    items: [
      {
        name: "Talleres participativos del Diagnóstico Participativo del Programa de Ordenamiento Ecológico Regional Participativo del Territorio Yaqui.",
        org: "SEMARNAT, Gobierno de México / PUEM, Universidad Autónoma Metropolitana. (2023)",
      },
      {
        name: "Programa Regional de Ordenamiento Territorial de la Unidad Territorial Básica Cajeme.",
        org: "SIDUR. Gobierno del Estado de Sonora (2016)",
      },
      {
        name: "Programa Sectorial de Infraestructura y Desarrollo Urbano Sustentable del Estado de Sonora 2016-2021.",
        org: "SIDUR. Gobierno del Estado de Sonora.",
      },
    ],
  },
  {
    title: "COORDINACIÓN",
    subtitle: "COORDINACIÓN",
    items: [
      {
        name: "Programa de Ordenamiento Ecológico de la Región Norte de Jalisco. SEMADET.",
        org: "Gobierno del Estado de Jalisco / PUEM, Universidad Autónoma Metropolitana. (2015).",
      },
      {
        name: "Estrategia de Desarrollo Regional para el Estado de Sinaloa. CODESIN.",
        org: "Gobierno del Estado de Sinaloa / Centro EURE, en colaboración con el Dr. Alfonso Iracheta Cenecorta. (2014).",
      },
      {
        name: "Estrategia de Desarrollo de las Regiones Centro-País Y Centro-Occidente. Instituto de Investigaciones Económicas",
        org: "UNAM en el marco del Convenio SEDESOL-UNAM, en colaboración con Javier Delgadillo Macías. (2012).",
      },
      {
        name: "Instrumentos de Operación de la Planeación Regional en México.",
        org: "Instituto de Investigaciones Económicas UNAM en el marco del Convenio SEDESOL-UNAM, en colaboración con Javier Delgadillo Macías. (2011).",
      },
      {
        name: "Programa de Ordenamiento Territorial del Estado de Tabasco (PEOT Tabasco).",
        org: "En colaboración con el Arq. Lorenzo Aldana. (2004).",
      },
      {
        name: "Programa de Mediano Plazo de Vivienda para el Estado de Sonora 2004-2009.",
        org: "COPROVI, Gobierno del Estado de Sonora. En colaboración con Pablo Wong González. (2004).",
      },
    ],
  },
];

const metropolitanosMunicipalesYCentrOSSections: TrabajoSection[] = [
  {
    title: "ELABORACIÓN",
    subtitle: "ELABORACIÓN",
    items: [
      {
        name: "Programa Municipal de Desarrollo Urbano de Plutarco Elías Calles, Son.",
        org: "Contratado por el Ayuntamiento de Plutarco Elías Calles, Sonora. (2025).",
      },
      {
        name: "Actualización del Programa Municipal de Desarrollo Urbano de Puerto Peñasco, Son.",
        org: "Contratado por el Ayuntamiento de Puerto Peñasco, Sonora / Puebla Arquitectos. (2024).",
      },
      {
        name: "Programa Municipal de Desarrollo Urbano de Santa Ana, Son.",
        org: "Contratado por el Ayuntamiento de Santa Ana, Sonora. (2024).",
      },
      {
        name: "Programa Municipal de Desarrollo Urbano de Moctezuma, Son.",
        org: "Contratado por el Ayuntamiento de Moctezuma, Sonora. (2024).",
      },
      {
        name: "Programa Municipal de Desarrollo Urbano de Pitiquito, Son.",
        org: "Contratado por el Ayuntamiento de Pitiquito, Sonora. (2024).",
      },
      {
        name: "Programa Municipal de Desarrollo Urbano de Arizpe, Son.",
        org: "Contratado por el Ayuntamiento de Arizpe, Sonora. (2023).",
      },
      {
        name: "Programa Municipal de Desarrollo Urbano de Caborca, Son.",
        org: "Contratado por el Ayuntamiento de Caborca, Sonora. (2023).",
      },
      {
        name: "Programa Municipal de Desarrollo Urbano de Cucurpe, Son.",
        org: "Contratado por el Ayuntamiento de Cucurpe, Sonora. (2023).",
      },
    ],
  },
];

const programasParcialesYPlanesMaestrosSections: TrabajoSection[] = [
  {
    title: "PPDU",
    subtitle: "PROGRAMAS PARCIALES DE DESARROLLO URBANO (PPDU)",
    items: [
      {
        name: "Intervención integral del Río Grijalva en Villahermosa, Tabasco.",
      },
      { name: "Crecimiento Zona Norte Puerto Libertad, Sonora (2017)." },
      { name: "Crecimiento Hermosillo Oeste, Sonora (2015)." },
      { name: "Crecimiento Hermosillo Sureste, Sonora (2013)." },
      { name: "Crecimiento Hermosillo Norte, Sonora (2013)." },
      { name: "Centro-Malcón de La Paz, Baja California (2013)." },
      { name: "Crecimiento Zona Noroeste, Gómez Palacio, Durango (2013)." },
      { name: "Centro Histórico de Cholula de Rivadavia, Puebla (2012)." },
      { name: "Crecimiento Zona Suroriente, La Paz, Baja California (2010)." },
      {
        name: "Turístico Los Algodones-San Carlos, Bacochibampo, Sonora (1997).",
      },
      {
        name: "Turístico San Carlos Nuevo Guaymas (1994-2010), Sonora (1993).",
      },
    ],
  },
  {
    title: "PLANES MAESTROS",
    subtitle: "PLANES MAESTROS",
    items: [
      {
        name: "Plan Maestro de desarrollo campestre Rancho Montecristo, Hermosillo, Sonora (2023).",
      },
      {
        name: "Plan Maestro de desarrollo residencial Rancho San Ignacio (2da etapa), Hermosillo, Sonora (2008).",
      },
      {
        name: "Plan Maestro de Renovación del Campus de la Universidad de Sonora, ganador del Merit Award de la American Society of Landscape Architects (1994).",
      },
      {
        name: "Proyecto de Fundación y urbanización de centro de población de Puerto Libertad, Sonora (Secretaría de Programación y Presupuesto, Gobierno Federal).",
      },
    ],
  },
];

export type TrabajoPanel = {
  tab: TrabajoTab;
  heading: string;
  framedImageUrl: string;
  /**
   * Fotos locales del carrusel (carpeta public/Fotos Nuestro trabajo/).
   * - Qué hace: reemplaza la imagen enmarcada estática con un carrusel de fotos reales.
   * - Por qué: el usuario entregó fotos por carpeta y pidió mostrarlas en la pestaña correspondiente.
   */
  photos: string[];
  content:
    | { type: "sections"; sections: TrabajoSection[] }
    | { type: "paragraphs"; paragraphs: string[] };
};

/**
 * Construye la URL pública de una foto en /public/Fotos Nuestro trabajo/.
 * Usa encodeURI sobre la ruta completa: codifica espacios y caracteres no-ASCII
 * pero deja la coma (,) sin codificar, que es lo que espera el servidor estático de Vite.
 */
function p(folder: string, file: string): string {
  return encodeURI(`/Fotos Nuestro trabajo/${folder}/${file}`);
}

export const trabajoPanels: TrabajoPanel[] = [
  {
    tab: trabajoTabs[0],
    heading: "ESTATALES Y REGIONALES",
    framedImageUrl: trabajoImages.framed2,
    photos: [
      p("1. Estatales y regionales", "20221005_142129.jpg"),
      p("1. Estatales y regionales", "E 2 UTER POLITICA 1.BMP"),
      p("1. Estatales y regionales", "Imagen2.png"),
      p("1. Estatales y regionales", "Imagen3.png"),
      p("1. Estatales y regionales", "Imagen4.jpg"),
    ],
    content: { type: "sections", sections: estatalesYRegionalesSections },
  },
  {
    tab: trabajoTabs[1],
    heading: "PLANES, PROGRAMAS Y PROYECTOS",
    framedImageUrl: trabajoImages.framed3,
    photos: [
      p(
        "2. Metropolitanos, municipales y de centro de población",
        "20200331_080803.jpg",
      ),
      p(
        "2. Metropolitanos, municipales y de centro de población",
        "20200721_064253.jpg",
      ),
      p(
        "2. Metropolitanos, municipales y de centro de población",
        "20200817_090047.jpg",
      ),
      p(
        "2. Metropolitanos, municipales y de centro de población",
        "20211106_123419.jpg",
      ),
      // Archivos que el ls combinado asignó erróneamente a carpeta 3 — realmente están en carpeta 2
      p(
        "2. Metropolitanos, municipales y de centro de población",
        "D-9  USOS DEL SUELO.jpg",
      ),
      p(
        "2. Metropolitanos, municipales y de centro de población",
        "D-9 RIESGOS DESLIZAMIENTO E INUNDACIÓN.jpg",
      ),
      p(
        "2. Metropolitanos, municipales y de centro de población",
        "E-1 MODELO DE OCUPACION DEL TERRITORIO.jpg",
      ),
      p(
        "2. Metropolitanos, municipales y de centro de población",
        "E-4 ZONIFICACIÓN SECUNDARIA CP SANTA ANA.JPG",
      ),
      p(
        "2. Metropolitanos, municipales y de centro de población",
        "E-4a ZONIFICACION SECUNDARIA CP CABORCA.jpg",
      ),
      p(
        "2. Metropolitanos, municipales y de centro de población",
        "IMG_20171127_124632048_HDR.jpg",
      ),
      p(
        "2. Metropolitanos, municipales y de centro de población",
        "IMG_20190710_133938223.jpg",
      ),
      p(
        "2. Metropolitanos, municipales y de centro de población",
        "PXL_20240806_185244871.jpg",
      ),
    ],
    content: {
      type: "sections",
      sections: metropolitanosMunicipalesYCentrOSSections,
    },
  },
  {
    tab: trabajoTabs[2],
    heading:
      "PROGRAMAS PARCIALES DE DESARROLLO\nURBANO Y PLANES MAESTROS DE\nFRACCIONAMIENTOS",
    framedImageUrl: trabajoImages.framed5,
    photos: [
      p("3. Parciales y planes maestros", "E-2 ZONIFICACION SECUNDARIA.jpg"),
      p("3. Parciales y planes maestros", "Escáner_20250409.png"),
      p("3. Parciales y planes maestros", "Escáner_20250409 (2).png"),
      p("3. Parciales y planes maestros", "Escáner_20250409 (3).png"),
      p("3. Parciales y planes maestros", "IMG_8865.JPG"),
      p("3. Parciales y planes maestros", "IMG_8904.JPG"),
    ],
    content: {
      type: "sections",
      sections: programasParcialesYPlanesMaestrosSections,
    },
  },
  {
    tab: trabajoTabs[3],
    heading: "ESTUDIOS DE MERCADO Y EXPANSIÓN\nTERRITORIAL EMPRESARIAL",
    framedImageUrl: trabajoImages.framed6,
    photos: [
      p(
        "4. Estudios de mercado y expansión territorial empresarial",
        "Localización de puntos de distribución.jpg",
      ),
      p(
        "4. Estudios de mercado y expansión territorial empresarial",
        "SugerenciaUbicacion.jpg",
      ),
      p(
        "4. Estudios de mercado y expansión territorial empresarial",
        "UE y NSEViviendas.jpg",
      ),
      p(
        "4. Estudios de mercado y expansión territorial empresarial",
        "Área sugerida para ubicación.jpg",
      ),
    ],
    content: {
      type: "paragraphs",
      paragraphs: [
        "Se ha trabajado con 5 empresas locales e internacionales con el objetivo de identificar las ubicaciones óptimas para la expansión comercial, considerando variables clave como la demanda potencial, la competencia existente, los hábitos de consumo locales, las tendencias del mercado, las características del entorno urbano y rural, y las condiciones normativas y de infraestructura del territorio.",
        "Los estudios para expansión territorial comercial son herramientas estratégicas fundamentales para empresas que buscan crecer de manera sostenible y rentable en nuevos mercados o regiones. Estos servicios permiten identificar las zonas con mayor potencial para la instalación, ampliación o relocalización de unidades de negocio, basándose en análisis rigurosos de factores económicos, sociales, demográficos, logísticos y competitivos.",
      ],
    },
  },
];
