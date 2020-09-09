import React, { useReducer } from 'react';
import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer';

import {
    TAREAS_PROYECTO,
} from '../../types';

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
        tareasproyecto: null,
    }

    // creamos dispatch y state
    const [state, dispatch] = useReducer(TareaReducer, initialState);

    // **********CREAMOS LAS FUNCIONES AQUI *********

    // Obtener las tareas de un proyecto
    const obtenerTareas = proyectoId => {
        dispatch({
            type: TAREAS_PROYECTO,
            payload: proyectoId
        })
    }

    return (
        <TareaContext.Provider
            value={{
                tareas: state.tareas,
                tareasproyecto: state.tareasproyecto,
                obtenerTareas,
            }}
        >
            {props.children}
        </TareaContext.Provider>
    )

}

export default TareaState;