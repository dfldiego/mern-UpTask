import React, { Fragment, useContext } from 'react';
import Tarea from './Tarea';
import proyectoContext from '../../context/proyectos/proyectoContext';

const ListadoTareas = () => {

    //Extraer proyectos del state inicial
    // obtener el state de proyecto desde el context
    const proyectosContext = useContext(proyectoContext);
    const {
        proyecto,
        eliminarProyecto,
    } = proyectosContext;

    // si no hay proyecto seleccionado
    if (!proyecto) return <h2>Selecciona un proyecto</h2>

    //Array destructuring para extraer el proyecto actual
    const [proyectoActual] = proyecto;

    const tareasProyecto = [
        { nombre: 'Elegir Plataforma', estado: true },
        { nombre: 'Elegir Colores', estado: false },
        { nombre: 'Elegir Plataformas de pago', estado: false },
        { nombre: 'Elegir Hosting', estado: true }
    ];

    //Elimina un proyecto
    const onClickEliminarProyecto = () => {
        eliminarProyecto(proyectoActual.id)
    }

    return (
        <Fragment>
            <h2>Proyecto: {proyectoActual.nombre}</h2>

            <ul className="listado-tareas">
                {tareasProyecto.length === 0
                    ? (<li className="tarea"><p>No hay tareas</p></li>)
                    : (
                        tareasProyecto.map(tarea => (
                            <Tarea
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
