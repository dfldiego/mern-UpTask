import React from 'react';
import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';

const ProyectoState = props => {
    const initialState = {
        formulario: false
    }

    // Dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(proyectoReducer, initialState);

    //serie de funciones para el CRUD

    return (
        <proyectoContext.Provider
            value={{
                formulario: state.formulario
            }}
        >
            {props.children}
        </proyectoContext.Provider>
    )
}

export default ProyectoState;

/**
 *  proyectoState -> este va a ser el state inicial de la administracion del proyecto: CRUD
 * initialState -> cuando hagamos click en boton "nuevo proyecto" aparezca el formulario para agregar nuevo proyecto.
 *
 * useReducer(reducer, state inicial) -> reemplazo del reducer de redux.
 * es similar a useState retorna el state y la funcion de dispatch
 * dispatch -> para ejecutar las acciones
 *
 * prop.children -> los hijos del provider pasen los datos por los diferentes componentes.
 *
 * 1) creamos el context, el reducer
 * 2) agregamos un initialState
 * 3) extraemos de useReducer : el state y el dispatch
 * 4) dispatch va a ejecutar los diferentes types,
 * 5) los ejecutamos en proyectoReducer para modificar el state
 * 5) consumimos nuestro provider y lo importamos en App.js (componente principal)
 *
 *
 */