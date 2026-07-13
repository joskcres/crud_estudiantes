import './App.css'
import { ListaEstiantes } from './ListaEstudiantes'
import React from 'react';

function App() {
  const [estudiantes, setEstudiantes] = React.useState([{
    nombre: 'Juan Macario',
    correo: 'JM@gmail.com',
    telefono: 12547889,
    curso: 'Desarrollo de software',
    estado: 'Solvente',
    activo: true,
    id: 1
  }, {
    nombre: 'Josue Caceres',
    correo: 'joskcres@gmail.com',
    telefono: 45872140,
    curso: 'React',
    estado: 'Moroso',
    activo: false,
    id: 2
  }])


  return (
    <>
      <ListaEstiantes estudiantes={estudiantes} setEstudiantes={setEstudiantes} />
    </>
  )
}

export default App
