/**
 * App root.
 * - Qué hace: define el router del sitio (páginas).
 * - Por qué: Home y "¿Quiénes somos?" son páginas distintas pero comparten Header/Footer.
 * - Relacionado con: `src/components/layout/SiteLayout.tsx` y `src/pages/*`.
 */
import { HomePage } from '@/pages/HomePage'
import { QuienesSomosPage } from '@/pages/QuienesSomosPage'
import { NuestroTrabajoPage } from '@/pages/NuestroTrabajoPage'
import { ServiciosPage } from '@/pages/ServiciosPage'
import { ContactoPage } from '@/pages/ContactoPage'
import { SiteLayout } from '@/components/layout/SiteLayout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/quienes-somos" element={<QuienesSomosPage />} />
          <Route path="/nuestro-trabajo" element={<NuestroTrabajoPage />} />
          <Route path="/servicios" element={<ServiciosPage />} />
          <Route path="/contacto" element={<ContactoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
