import React from 'react';
import { Route } from 'react-router-dom';

import { Inicio } from '../Inicio/Inicio'
import { Login } from '../Login/Login';
import { Proyectos } from '../Proyectos/Proyectos';
import { Equipos } from '../Equipos/Equipos';
import { Ayuda } from '../Ayuda/Ayuda';
import { Perfil } from '../Perfil/Perfil';

export const Content = () => {
    return (
        <div className="container">
            <Route path="/" exact component={Inicio} />
            <Route path="/proyectos" exact component={Proyectos} />
            <Route path="/equipos" exact component={Equipos} />
            <Route path="/ayuda" exact component={Ayuda} />
            <Route path="/perfil" exact component={Perfil} />
            <Route path="/login" exact component={Login} />
        </div>
    )
}
