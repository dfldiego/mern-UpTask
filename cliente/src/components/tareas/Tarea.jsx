import React, { Fragment, useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';

const Tarea = ({ tarea }) => {

    //Extraer si un proyecto esta activo
    // obtener el state de proyecto desde el context
    const proyectosContext = useContext(proyectoContext);
    const {
        proyecto
    } = proyectosContext;
    // arrayDestructuring
    const [proyectoActual] = proyecto;

    // obtener la funcion del context de tarea
    const tareasContext = useContext(tareaContext);
    const {
        obtenerTareas,
        eliminarTarea,
        actualizarTarea,
        guardarTareaActual,
    } = tareasContext;

    // funcion que se ejecuta al presionar boton "eliminar tarea"
    const tareaEliminar = id => {
        eliminarTarea(id, proyectoActual._id);
        obtenerTareas(proyectoActual.id);
    }

    // funcion que modifica el estado de las tareas
    const cambiarEstado = tarea => {
        if (tarea.estado) {
            tarea.estado = false;
        } else {
            tarea.estado = true;
        }
        actualizarTarea(tarea);
    }

    // Agrega una tarea actual cuando el usuario desea editarla
    const seleccionarTarea = tarea => {
        guardarTareaActual(tarea);
    }

    return (
        <Fragment>
            <li className="tarea sombra">
                <p>{tarea.nombre}</p>
                <div className="estado">
                    {tarea.estado
                        ?
                        (
                            <button
                                type="button"
                                className="completo"
                                onClick={() => cambiarEstado(tarea)}
                            >Completo</button>
                        )
                        :
                        (
                            <button
                                type="button"
                                className="incompleto"
                                onClick={() => cambiarEstado(tarea)}
                            >Incompleto</button>
                        )
                    }
                </div>
                <div className="acciones">
                    <button
                        type="button"
                        className="btn btn-primario"
                        onClick={() => seleccionarTarea(tarea)}
                    >Editar</button>
                    <button
                        type="button"
                        className="btn btn-secundario"
                        onClick={() => tareaEliminar(tarea._id)}
                    >Eliminar</button>
                </div>
            </li>
        </Fragment>
    )
}

export default Tarea
