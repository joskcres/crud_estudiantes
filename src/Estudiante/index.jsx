import { useContext } from "react"
import { EstudianteCoxtext } from "../ContextoEstudiantes"

function Estudiante({ nombre, correo, telefono, curso, estado, activo, id, onEditar}) {
    const { Ondelete, onChangeState } = useContext(EstudianteCoxtext)
    return (
        <tr>
            <td>{nombre}</td>
            <td>{correo}</td>
            <td>{telefono}</td>
            <td>{curso}</td>
            <td>{estado}</td>
            <td>{activo ? 'Si' : 'No'}</td>
            <td>
                <button className="btn-editar" onClick={() => onEditar({ id, nombre, correo, telefono, curso, estado, activo })}>Editar</button>
                <button className="btn-eliminar" onClick={() => {
                    Ondelete(id)
                }}
                >Eliminar</button>
                <button type="buttom" className={'btn-activo'} onClick={() => onChangeState(id)}>{activo ? 'Desactivar' : "Activar"}</button>
            </td>
        </tr>
    )
}

export { Estudiante }