import React, { Fragment, useContext, useEffect } from 'react';
import Sidebar from '../layout/Sidebar';
import Barra from '../layout/Barra';
import FormTarea from '../tareas/FormTarea';
import ListadoTareas from '../tareas/ListadoTareas';
import AuthContext from '../../context/autenticacion/authContext';

const Proyectos = () => {

    // extraer info de autenticacion
    const authContext = useContext(AuthContext);
    const {
        usuarioAutenticado,
    } = authContext;

    // cargar la info del usuario autenticado
    useEffect(() => {
        usuarioAutenticado();
        //eslint-disable-next-line
    }, [])

    return (
        <Fragment>
            <div className="contenedor-app">
                <Sidebar />
                <div className="seccion-principal">
                    <Barra />
                    <main>
                        <FormTarea />
                        <div className="contenedor-tareas">
                            <ListadoTareas />
                        </div>
                    </main>
                </div>
            </div>
        </Fragment>
    )
}

export default Proyectos
