/**
 * Sección "Experiencia" (mapa + métricas).
 * - Qué hace: muestra el mapa (imagen) y un bloque inferior con 3 estadísticas.
 * - Por qué: reproduce la estructura visual del diseño (screenshot) y el HTML de referencia.
 * - Relacionado con: `Diseño actual/Home.txt` (mapa/contenedor) y `HOME APT – 1.jpg` (métricas).
 */
import { ExperienceMap } from "@/components/home/ExperienceMap";
import { ExperienceLogosCarousel } from "@/components/home/ExperienceLogosCarousel";
import { ExperienceStatsBar } from "@/components/shared/ExperienceStatsBar";

export function Experiencia() {
  return (
    <section className="bg-white">
      {/* Banda blanca con título */}
      <div className="py-10 sm:py-12">
        <h2 className="apt-title-main px-4 text-center">EXPERIENCIA</h2>
      </div>

      {/* Barra café con métricas */}
      {/*
        Barra de estadísticas (idéntica al screenshot):
        - Qué hace: ajusta colores (café + beige) y el icono (círculo blanco con check café).
        - Por qué: el usuario pidió replicarlo exactamente.
        - Relacionado con: `HOME APT – 1.jpg` (recorte de la barra).
      */}
      {/*
        Barra de estadísticas reutilizable:
        - Qué hace: misma paleta + mismo efecto de count-up en todas las páginas.
        - Por qué: el usuario pidió estandarización total (Home/Quienes/Nuestro trabajo).
        - Relacionado con: `src/components/shared/ExperienceStatsBar.tsx`.
      */}
      <ExperienceStatsBar />

      {/* Bloque gris + mapa */}
      {/*
        Espaciado ajustado:
        - Qué hace: reduce el padding vertical para evitar el “hueco” grande entre la barra café y el mapa.
        - Por qué: el usuario reporta demasiado espacio; en el screenshot el mapa comienza más pegado.
        - Relacionado con: sección Experiencia.
      */}
      <div className="bg-[#5f5f5f] py-6 sm:py-8">
        <div className="mx-auto max-w-6xl px-4">
          {/* 
            Mapa interactivo:
            - Qué hace: permite colorear estados y mostrar tooltip, replicando el componente del screenshot.
            - Por qué: una imagen estática no permite interacción ni cambios por estado.
            - Relacionado con: `src/components/home/ExperienceMap.tsx`.
          */}
          <div className="bg-white">
            <ExperienceMap />
          </div>
        </div>
      </div>

      <div className="bg-gray-600">
        <div className="bg-white py-10 sm:py-12 mb-8">
          <h2 className="apt-title-main px-4 text-center">
            COLABORADORES Y CLIENTES
          </h2>
        </div>

        {/* Carrusel de logos institucionales debajo del mapa (pedido del usuario). */}
        <ExperienceLogosCarousel />
      </div>
    </section>
  );
}
