import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { EstudianteProvider } from './ContextoEstudiantes/index.jsx'
import { ListaEstiantes } from './ListaEstudiantes/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EstudianteProvider>
          <ListaEstiantes/>
    </EstudianteProvider>
  </StrictMode>,
)
