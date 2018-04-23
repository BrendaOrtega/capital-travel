import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomeContainer from './components/home/HomeContainer';
import LoginContainer from './components/login/LoginContainer'
import PerfilContainer from './components/perfil/PerfilContainer';
import AdminContainer from './components/admin/AdminContainer'

export const Routes = () => (
    <Switch>

        <Route exact path="/" component={HomeContainer} />
        <Route path="/login" component={LoginContainer} />
        <Route path="/perfil" component={PerfilContainer} />
        <Route path="/admin" component={AdminContainer} />
    </Switch>
);