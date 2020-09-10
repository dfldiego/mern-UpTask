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
    } = tareasContext;

    // funcion que se ejecuta al presionar boton "eliminar tarea"
    const tareaEliminar = id => {
        eliminarTarea(id);
        obtenerTareas(proyectoActual.id);
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
                            >Completo</button>
                        )
                        :
                        (
                            <button
                                type="button"
                                className="incompleto"
                            >Incompleto</button>
                        )
                    }
                </div>
                <div className="acciones">
                    <button
                        type="button"
                        className="btn btn-primario"
                    >Editar</button>
                    <button
                        type="button"
                        className="btn btn-secundario"
                        onClick={() => tareaEliminar(tarea.id)}
                    >Eliminar</button>
                </div>
            </li>
        </Fragment>
    )
}

export default Tarea
