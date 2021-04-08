import React from 'react';
import { Route } from 'react-router-dom';

import { Inicio } from '../../pages/Inicio/Inicio';
import { Login } from '../../pages/Login/Login';
import { Proyectos } from '../../pages/Proyectos/Proyectos';
import { Equipos } from '../../pages/Equipos/Equipos';
import { Ayuda } from '../../pages/Ayuda/Ayuda';
import { Perfil } from '../../pages/Perfil/Perfil';

import './Content.css';

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
