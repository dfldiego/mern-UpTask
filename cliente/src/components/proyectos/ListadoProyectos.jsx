import React, { useContext } from 'react';
import Proyecto from './Proyecto';
import proyectoContext from '../../context/proyectos/proyectoContext';

const ListadoProyectos = () => {

    //Extraer proyectos del state inicial
    // obtener el state de proyecto desde el context
    const proyectosContext = useContext(proyectoContext);
    const { proyectos } = proyectosContext;

    // revisar si proyecto tiene contenido
    if (proyectos.length === 0) return null;

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
