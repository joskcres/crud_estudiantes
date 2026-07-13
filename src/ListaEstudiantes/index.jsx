import React from 'react';
import './ListaEstudiantes.css'
import { Estudiante } from '../Estudiante';

function ListaEstiantes({ estudiantes, setEstudiantes }) {

    const eliminarEstudiantes = (id) => {
        let estudiantesLimpiar = estudiantes.filter((estudiante)=> estudiante.id != id)
        setEstudiantes(estudiantesLimpiar)
    }
    return (
        <section className='tabla-estudiantes' aria-labelledby='titulo-estudiante'>
            <header className='tabla-estudiantes_encabezado'>
                <h2 id='titulo-estudiantes'>Lista de estudiamtes</h2>
                <p>Control y visualizacion general del grupo</p>
            </header>

            <div className='tabla-estudiantes_contenedor'>
                <table>
                    <thead>
                        <tr>
                            <th scope='col'>Nombre</th>
                            <th scope='col'>Correo</th>
                            <th scope='col'>Telefono</th>
                            <th scope='col'>Curso</th>
                            <th scope='col'>Estado</th>
                            <th scope='col'>Activo</th>
                            <th scope='col'>Acciones</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            estudiantes.map((estudiante, index) => (
                                <Estudiante key={index} {...estudiante} Oneliminar={eliminarEstudiantes} />
                            ))}
                    </tbody>
                </table>

            </div>
        </section>
    )
}

export { ListaEstiantes }