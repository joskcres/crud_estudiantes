import React from 'react';
import './ListaEstudiantes.css'
import { Estudiante } from '../Estudiante';
import Modal from '../Modal';
import Form from './Form';
import { useState } from 'react';
import { EstudianteCoxtext } from '../ContextoEstudiantes';

function ListaEstiantes() {
const{
    isModalOpen,
    estudianteEnEdicion,
    cerrarModal,
    abrirCrear,
    abrirEditar,
    guardarDesdeFormulario,
    estudiantes

}=React.useContext(EstudianteCoxtext)
    return (
        <section className='tabla-estudiantes' aria-labelledby='titulo-estudiante'>
            <Modal
                isOpen={isModalOpen}
                title={estudianteEnEdicion ? 'Editar alumno' : 'Nuevo alumno'}
                description="Aqui puede crear o editar los campos del alumno."
                onClose={cerrarModal}
                showActions={false}
            >
                <Form
                    key={estudianteEnEdicion?.id ?? 'nuevo'}
                    initialValues={estudianteEnEdicion}
                />
            </Modal>
            <header className='tabla-estudiantes_encabezado'>
                <h2 id='titulo-estudiantes'>Lista de estudiamtes</h2>
                <p>Control y visualizacion general del grupo</p>
                <button type="button" className="btn-nuevo" onClick={abrirCrear}>Nuevo alumno</button>
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
                                <Estudiante key={index} {...estudiante}  onEditar={abrirEditar}  />
                            ))}
                    </tbody>
                </table>

            </div>
        </section>
    )
}

export { ListaEstiantes }