import React, { useReducer } from 'react';
import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer';

const TareaState = props => {
    // creamos state inicial
    const initialState = {
        tareas: [],
    }

    // creamos dispatch y state
    const [state, dispatch] = useReducer(TareaReducer, initialState);

    return (
        <TareaContext.Provider>
            {props.children}
        </TareaContext.Provider>
    )

}

export default TareaState;