import React, { useContext, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../../context/autenticacion/authContext';

const RutaPrivada = ({ component: Component, ...props }) => {

    const authContext = useContext(AuthContext);
    const {
        autenticado,
    } = authContext;

    return (
        <Route {...props} render={props => !autenticado ?
            (
                <Redirect to="/" />
            ) : (
                <Component {...props} />
            )
        } />
    );
}

export default RutaPrivada

/**
 * Un componente de orden superior (HOC por las siglas en inglés de
 * higher-order component)
 * este componente de RutaPrivada va a tener otro componente dentro
 * vamos a tomar una copia de los props y lo vamos a pasar dentro del
 * componente este componente va a tener props pero donde lo
 * utilicemos xq no sabemos aun en cual y puede usarse en mas de uno
 *  vamos a tomar una copia de los props y se lo pasamos al componente
 * hijo
 */