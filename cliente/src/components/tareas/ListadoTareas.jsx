import React, { Fragment, useContext } from 'react';
import Tarea from './Tarea';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';

const ListadoTareas = () => {

    //Extraer proyectos del state inicial
    // obtener el state de proyecto desde el context
    const proyectosContext = useContext(proyectoContext);
    const {
        proyecto,
        eliminarProyecto,
    } = proyectosContext;

    // obtener las tareas del proyecto
    const tareasContext = useContext(tareaContext);
    const {
        tareasproyecto,
    } = tareasContext;

    // si no hay proyecto seleccionado
    if (!proyecto) return <h2>Selecciona un proyecto</h2>

    //Array destructuring para extraer el proyecto actual
    const [proyectoActual] = proyecto;

    //Elimina un proyecto
    const onClickEliminarProyecto = () => {
        eliminarProyecto(proyectoActual.id)
    }

    return (
        <Fragment>
            <h2>Proyecto: {proyectoActual.nombre}</h2>

            <ul className="listado-tareas">
                {tareasproyecto.length === 0
                    ? (<li className="tarea"><p>No hay tareas</p></li>)
                    : (
                        tareasproyecto.map(tarea => (
                            <Tarea
                                key={tarea.id}
                                tarea={tarea}
                            />
                        ))
                    )

                }
            </ul>
            <button
                type="button"
                className="btn btn-eliminar"
                onClick={onClickEliminarProyecto}
            >Eliminar Proyecto &times;</button>
        </Fragment>
    )
}

export default ListadoTareas
