import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <p className="text-8xl font-thin tracking-widest text-[#c87d4a]">404</p>
      <h1 className="mt-4 text-lg font-light tracking-[0.2em] text-neutral-500 uppercase">
        Página no encontrada
      </h1>
      <p className="mt-3 max-w-sm text-sm text-neutral-400">
        La dirección que ingresaste no corresponde a ninguna sección del sitio.
      </p>
      <Link
        to="/"
        className="mt-8 inline-block bg-[#c87d4a] px-8 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white transition-opacity hover:opacity-80"
      >
        Volver al inicio
      </Link>
    </div>
  )
}
