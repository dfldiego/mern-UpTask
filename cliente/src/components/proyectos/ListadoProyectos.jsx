import React, { useContext, useEffect } from 'react';
import Proyecto from './Proyecto';
import proyectoContext from '../../context/proyectos/proyectoContext';

const ListadoProyectos = () => {

    //Extraer proyectos del state inicial
    // obtener el state de proyecto desde el context
    const proyectosContext = useContext(proyectoContext);
    const { proyectos, obtenerProyectos } = proyectosContext;

    //obtener proyectos cuando carga el componente  
    useEffect(() => {
        obtenerProyectos();
    }, [])

    // revisar si proyecto tiene contenido
    if (proyectos.length === 0) return <p>No hay proyectos, comienza creando uno</p>;

    return (
        <div>
            <ul className="listado-proyectos">
                {proyectos.map(proyecto => (
                    <Proyecto
                        key={proyecto.id}
                        proyecto={proyecto}
                    />
                ))}
            </ul>
        </div>
    )
}

export default ListadoProyectos
