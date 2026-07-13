
function Estudiante( {nombre, correo, telefono, curso, estado, activo,id, Oneliminar} ) {

    return (
        <tr>
            <td>{nombre}</td>
            <td>{correo}</td>
            <td>{telefono}</td>
            <td>{curso}</td>
            <td>{estado}</td>
            <td>{activo ? 'Si' : 'No'}</td>
            <td>
                <button className="btn-editar">Editar</button>
                <button className="btn-eliminar" id={id} onClick={(event)=>{
                    Oneliminar(event.target.id)
                }}>Eliminar</button>
            </td>
        </tr>
    )
}

export { Estudiante }