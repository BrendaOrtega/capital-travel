import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomeContainer from './components/home/HomeContainer';
<<<<<<< HEAD
import AdminContainer from './components/admin/AdminContainer'

export const Routes = () => (
    <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route path="/admin" component={AdminContainer} />
=======
import LoginContainer from './components/login/LoginContainer'
import PerfilContainer from './components/perfil/PerfilContainer';

export const Routes = () => (
    <Switch>

        <Route exact path="/" component={HomeContainer}/>
        <Route path="/login" component={LoginContainer} />
        <Route path="/perfil" component={PerfilContainer} />
>>>>>>> c7984dcc5d7f8f964df07718d32bccf43eefcbfe
    </Switch>
);