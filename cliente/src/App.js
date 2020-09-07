import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import NuevaCuenta from './components/auth/NuevaCuenta';
import Proyectos from './components/proyectos/Proyectos';
import ProyectoState from './context/proyectos/ProyectoState';

function App() {
  return (
    <ProyectoState>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/nueva-cuenta" component={NuevaCuenta} />
          <Route exact path="/proyectos" component={Proyectos} />
        </Switch>
      </Router>
    </ProyectoState>
  );
}

export default App;
/**
 * Lo que esta en Switch son las diferentes paginas del proyecto.
 * Lo que esta afuera del Switch se verá en todas las paginas.
 * proyectos --> el usuario debe estar autenticado y va a ver unicamente sus proyectos.
 * ProyectoState -> para pasar los state por todos los componentes.
 *
 */