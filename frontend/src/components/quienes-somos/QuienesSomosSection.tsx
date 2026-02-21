/**
 * Sección "¿Quiénes somos?" para el Home (anchor).
 * - Qué hace: renderiza el contenido completo (hero + descripción + coordinadores + stats) y expone `id="quienes-somos"`.
 * - Por qué: el menú del header enlaza a `#quienes-somos`; sin esta sección el link no “lleva” a ningún lado.
 * - Relacionado con: `src/components/layout/SiteHeader.tsx` (href `#quienes-somos`) y `Diseño actual/Quienes somos.txt` (maqueta HTML).
 */
import { useMemo } from 'react'
import { ExperienceStatsBar } from '@/components/shared/ExperienceStatsBar'

type Coordinador = {
  name: string
  imageUrl: string
  paragraphs: string[]
}

export function QuienesSomosSection() {
  const coordinadores: Coordinador[] = useMemo(
    () => [
      {
        name: 'Luis Fernando Puebla Gutiérrez',
        imageUrl:
          'https://res.cloudinary.com/dstcnsu6a/image/upload/v1763394924/LuisFernando_jws1oj.png',
        paragraphs: [
          'Es Diseñador de los Asentamientos Humanos egresado de la Universidad Autónoma Metropolitana con Maestría en Desarrollo Urbano por El Colegio de México.',
          'Ha dirigido la elaboración de más de 50 programas de desarrollo urbano. Asimismo, ha coordinado la elaboración de estrategias de desarrollo regional y de ordenamiento territorial para diversas entidades federativas.',
          'En el Gobierno Federal, fue Director General Adjunto de Desarrollo Regional de la Secretaría de Desarrollo Social (ahora SEDATU); y en el Gobierno del Estado de Sonora, fungió como Director General de Planeación Urbana y Ordenamiento Territorial de la Secretaría de Infraestructura y Desarrollo Urbano.',
          'Ha participado en distintas iniciativas y organizaciones como presidente de la Sociedad de Urbanismo de Sonora, integrante del equipo de consultores de la ONU-Hábitat para la Iniciativa de Ciudades Prósperas y como tesorero de la Fundación UAM.',
        ],
      },
      {
        name: 'Luis Fernando Puebla Corella',
        imageUrl:
          'https://res.cloudinary.com/dstcnsu6a/image/upload/v1763395122/LuisFernando_Dos_2_ky9zle.png',
        paragraphs: [
          'Es egresado con honores de la Licenciatura en Planeación Territorial de la Universidad Autónoma Metropolitana con Maestría en Ciencias Sociales por El Colegio de Sonora y próximamente doctorado por la misma institución.',
          'Dentro de su experiencia laboral se ha desempeñado como coordinador de una decena de programas de desarrollo urbano municipales y de centros de población; responsable de estudios y reportes sobre abandono de vivienda, estrategias de localización portuaria y de expansión empresarial; así como colaborador en programas de ordenamiento ecológico regionales y parciales de desarrollo urbano en distintas entidades del país.',
          'También, cuenta con publicaciones sobre temáticas relacionadas a la movilidad laboral, las políticas de desarrollo territorial y especulación inmobiliaria. Actualmente, se desenvuelve como profesor de las asignaturas relacionadas al urbanismo en la carrera de arquitectura de la Universidad de Sonora.',
        ],
      },
    ],
    [],
  )

  return (
    <section id="quienes-somos" className="bg-white">
      {/* HERO */}
      {/* 
        Hero de la sección:
        - Qué hace: replica el hero del diseño (imagen de fondo + overlay + texto a la derecha).
        - Por qué: debe verse como la captura `¿QUIÉNES SOMOS.jpg`.
        - Relacionado con: `Diseño actual/Quienes somos.txt` (.hero).
      */}
      <div
        className="relative mt-0 flex h-[420px] items-center justify-center bg-cover bg-center max-sm:h-[380px] sm:h-[460px] lg:h-[520px] sm:justify-end sm:pr-20"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dstcnsu6a/image/upload/v1763394687/wind-farms-fields_gholam.png')",
        }}
        aria-label="¿Quiénes somos?"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-white/80" />

        <div className="relative z-10 max-w-[450px] px-4 text-center sm:px-0 sm:text-right">
          <h2 className="text-[36px] font-bold text-[#653621] max-sm:text-[26px]">
            ¿QUIENES SOMOS?
          </h2>
          <p className="mt-3 text-[18px] font-semibold leading-snug text-neutral-600 max-sm:text-[15px]">
            Aliados estratégicos en la construcción de entornos urbanos y
            regionales más justos, inclusivos, asequibles y sostenibles.
          </p>
        </div>
      </div>

      {/* MAIN CONTENT */}
      {/*
        Bloque central con fondo:
        - Qué hace: gradiente café + imagen de fondo fija + texto blanco con sombra, como el diseño.
        - Por qué: replicar la sección del logo APT y párrafos.
        - Relacionado con: `Diseño actual/Quienes somos.txt` (.main-content).
      */}
      <div
        className="relative bg-cover bg-center bg-fixed px-4 py-16 text-white max-sm:bg-scroll max-sm:py-10"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(101, 54, 33, 0.75) 0%, rgba(120, 70, 50, 0.72) 50%, rgba(101, 54, 33, 0.75) 100%), url('https://res.cloudinary.com/dstcnsu6a/image/upload/v1763394730/DJI_0025_c8yxe7.jpg')",
        }}
      >
        <div className="relative mx-auto max-w-[900px] text-center">
          {/*
            Logo en recuadro blanco:
            - Qué hace: muestra el `logo.png` completo (a color) dentro de un rectángulo blanco centrado.
            - Por qué: el `logo.png` actual es a color; aplicarle `invert` lo degradaba y podía verse como “caja blanca” sin logo.
            - Relacionado con: referencia visual de la sección central (tu captura).
          */}
          <div className="mx-auto mb-10 w-fit bg-white px-7 py-4 max-sm:mb-8 max-sm:px-5 max-sm:py-3">
            <img
              src="/logo.png"
              alt="APT - Agencia de Planeación Territorial"
              className="h-auto w-[235px] max-sm:w-[200px]"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="space-y-5 text-[17px] font-light leading-[1.8] tracking-[0.3px] [text-shadow:1px_1px_2px_rgba(0,0,0,0.5)] max-sm:text-[16px] max-sm:text-center">
            <p className="text-justify max-sm:text-center">
              Somos una firma que representa a un conjunto de consultores
              especializados en desarrollo urbano y regional, con integrantes que
              suman más de 40 años de experiencia impulsando proyectos que
              transforman el territorio y mejoran la calidad de vida en México.
            </p>
            <p className="text-justify max-sm:text-center">
              Nuestro equipo multidisciplinario integra expertos en planificación
              y diseño urbano, desarrollo regional, políticas públicas y gestión
              de proyectos, comprometidos con ofrecer soluciones sostenibles,
              innovadoras y adaptadas a las necesidades de cada comunidad.
            </p>
            <p className="text-justify max-sm:text-center">
              A lo largo de nuestra trayectoria individual y conjunta, hemos
              colaborado con gobiernos, instituciones y organizaciones privadas
              en el diseño de estrategias que fomentan el crecimiento ordenado,
              la resiliencia y la competitividad regional, contribuyendo al
              desarrollo equilibrado del territorio.
            </p>
            <p className="text-justify max-sm:text-center">
              Somos aliados estratégicos en la construcción de entornos urbanos y
              regionales más justos, inclusivos, asequibles y sostenibles.
            </p>
          </div>
        </div>
      </div>

      {/* COORDINADORES */}
      {/*
        Grid de coordinadores:
        - Qué hace: 2 columnas con “cards” usando imagen de fondo, y contenido textual debajo.
        - Por qué: es lo que se ve en `¿QUIÉNES SOMOS.jpg` y la maqueta.
        - Relacionado con: `Diseño actual/Quienes somos.txt` (.coordinadores-grid).
      */}
      <div className="relative bg-white">
        <h3 className="pointer-events-none absolute left-1/2 top-[30%] z-20 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[32px] font-normal tracking-[3px] text-[#888] max-md:static max-md:translate-x-0 max-md:translate-y-0 max-md:py-10 max-md:text-center max-md:text-[24px]">
          COORDINADORES
        </h3>

        <div className="grid w-full grid-cols-1 bg-white md:grid-cols-2 md:min-h-[900px] md:gap-0">
          {coordinadores.map((c) => (
            <article
              key={c.name}
              className="relative flex min-h-[600px] flex-col bg-white bg-contain bg-top bg-no-repeat px-0 max-md:mx-auto max-md:w-full max-md:max-w-none max-md:bg-cover max-md:bg-top md:min-h-[900px]"
              style={{ backgroundImage: `url('${c.imageUrl}')` }}
              aria-label={c.name}
            >
              {/*
                Bloque de contenido (nombre + bio):
                - Qué hace: mantiene un offset fijo desde arriba (pt-*) para que los nombres queden alineados entre columnas.
                - Por qué: `mt-auto` empuja el contenido al fondo y, con bios de distinto largo, desalineaba los nombres.
                - Importante: NO toca el “efecto” de la foto (background-image / bg-contain/bg-cover); solo alinea el texto.
                - Relacionado con: sección "COORDINADORES" en `¿QUIÉNES SOMOS.jpg`.
              */}
              <div className="bg-transparent px-6 pb-10 pt-[520px] max-md:px-5 max-md:pb-8 max-md:pt-[430px] max-sm:pt-[340px] sm:px-10">
                <h4 className="mb-4 text-center text-[20px] font-semibold text-[#A0714A] max-sm:text-[18px]">
                  {c.name}
                </h4>
                <div className="space-y-3 text-center text-[15px] leading-[1.7] text-neutral-800 max-sm:text-[14px]">
                  {c.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* STATS */}
      {/*
        Barra de estadísticas estandarizada:
        - Qué hace: reutiliza la misma barra (tipografía/tamaños/colores) usada en Home, Servicios, Contacto y Nuestro Trabajo.
        - Por qué: el usuario pidió que sea la misma en TODAS las páginas.
        - Relacionado con: `src/components/shared/ExperienceStatsBar.tsx`.
      */}
      <ExperienceStatsBar />
    </section>
  )
}

