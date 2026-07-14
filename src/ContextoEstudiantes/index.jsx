import { children } from 'react';
import { useState } from 'react';
import React from 'react';
const EstudianteCoxtext = React.createContext()

const EstudianteProvider = ({ children }) => {
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

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [estudianteEnEdicion, setEstudianteEnEdicion] = useState(null)


    const guardarEstudiante = (estudianteForm) => {
        if (estudianteForm.id) {
            const estudiantesActualizados = estudiantes.map((estudiante) => (
                estudiante.id === estudianteForm.id ? { ...estudiante, ...estudianteForm } : estudiante
            ))

            setEstudiantes(estudiantesActualizados)
            return
        }

        const ultimoId = estudiantes.length > 0 ? Math.max(...estudiantes.map((estudiante) => estudiante.id)) : 0
        const nuevoEstudiante = {
            ...estudianteForm,
            id: ultimoId + 1,
        }

        setEstudiantes((prev) => [...prev, nuevoEstudiante])
    }
    const editarEstado = (id) => {
        let newEstudiantes = estudiantes.map((estudiante) => (
            estudiante.id === id ? { ...estudiante, activo: !estudiante.activo } : estudiante
        ))
        setEstudiantes(newEstudiantes)
        return
    }

    const eliminarEstudiantes = (id) => {
        let estudiantesLimpiar = estudiantes.filter((estudiante) => estudiante.id != id)
        setEstudiantes(estudiantesLimpiar)
    }


//Modal context

    const abrirCrear = () => {
        setEstudianteEnEdicion(null)
        setIsModalOpen(true)
    }

    const abrirEditar = (estudiante) => {
        setEstudianteEnEdicion(estudiante)
        setIsModalOpen(true)
    }

    const cerrarModal = () => {
        setIsModalOpen(false)
        setEstudianteEnEdicion(null)
    }

    const guardarDesdeFormulario = (estudianteForm) => {
        guardarEstudiante(estudianteForm)
        cerrarModal()
    }

               

    return (
        <>
            <EstudianteCoxtext.Provider value={{
                estudiantes,
                setEstudiantes,
                onChangeState: editarEstado,
                Ondelete: eliminarEstudiantes,
                guardarDesdeFormulario,
                cerrarModal,
                isModalOpen,
                estudianteEnEdicion,
                abrirCrear,
                abrirEditar
            }}>
                {children}
            </EstudianteCoxtext.Provider>
        </>
    )
}

export { EstudianteProvider, EstudianteCoxtext }