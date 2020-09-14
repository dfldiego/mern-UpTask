import React, { useContext, useEffect } from 'react';
import Proyecto from './Proyecto';
import proyectoContext from '../../context/proyectos/proyectoContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import AlertaContext from '../../context/alertas/alertaContext';

const ListadoProyectos = () => {

    //Extraer proyectos del state inicial
    // obtener el state de proyecto desde el context
    const proyectosContext = useContext(proyectoContext);
    const { mensaje, proyectos, obtenerProyectos } = proyectosContext;

    const alertaContext = useContext(AlertaContext);
    const {
        alerta,
        mostrarAlerta
    } = alertaContext;

    //obtener proyectos cuando carga el componente  
    useEffect(() => {

        // si hay un error
        if (mensaje) {
            mostrarAlerta(mensaje.msg, mensaje.categoria)
        }

        obtenerProyectos();
        // eslint-disable-next-line
    }, [mensaje])

    // revisar si proyecto tiene contenido
    if (proyectos.length === 0) return <p>No hay proyectos, comienza creando uno</p>;

    return (
        <div>
            {alerta ? (<div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>) : null}
            <ul className="listado-proyectos">
                <TransitionGroup>
                    {proyectos.map(proyecto => (
                        <CSSTransition
                            key={proyecto._id}
                            timeout={200}
                            classNames="proyecto"
                        >
                            <Proyecto
                                proyecto={proyecto}
                            />
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </ul>
        </div>
    )
}

export default ListadoProyectos
