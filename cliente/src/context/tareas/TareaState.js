import React, { useReducer } from 'react';
import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer';

const TareaState = props => {
    // creamos state inicial
    const initialState = {
        tareas: [
            { nombre: 'Elegir Plataforma', estado: true, proyectoId: 1 },
            { nombre: 'Elegir Colores', estado: false, proyectoId: 2 },
            { nombre: 'Elegir Plataformas de pago', estado: false, proyectoId: 3 },
            { nombre: 'Elegir Hosting', estado: true, proyectoId: 1 },
            { nombre: 'Elegir Plataforma', estado: true, proyectoId: 2 },
            { nombre: 'Elegir Colores', estado: false, proyectoId: 3 },
            { nombre: 'Elegir Plataformas de pago', estado: false, proyectoId: 1 },
            { nombre: 'Elegir Hosting', estado: true, proyectoId: 2 },
        ],
    }

    // creamos dispatch y state
    const [state, dispatch] = useReducer(TareaReducer, initialState);

    return (
        <TareaContext.Provider
            value={{
                tareas: state.tareas
            }}
        >
            {props.children}
        </TareaContext.Provider>
    )

}

export default TareaState;