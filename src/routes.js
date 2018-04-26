import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomeContainer from './components/home/HomeContainer';
import LoginContainer from './components/login/LoginContainer'
import AdminContainer from './components/admin/AdminContainer'
import Dashboard from './components/dash/Dashboard';
import RuedaDetail from './components/dash/RuedaDetail';


export const Routes = () => (
    <Switch>

        <Route exact path="/" component={HomeContainer} />
        <Route path="/login" component={LoginContainer} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/admin" component={AdminContainer} />
        <Route path="/detalle" component={RuedaDetail} />
    </Switch>
);