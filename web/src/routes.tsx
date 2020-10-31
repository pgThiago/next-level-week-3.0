import React from 'react';
import { BrowserRouter, Switch , Route } from 'react-router-dom';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import DashboardPending from './pages/DashboardPending';
import DeleteOrphanagePage from './pages/DeleteOrphanagePage';
import ForgotPassword from './pages/ForgotPassword';
import SetNewPassword from './pages/SetNewPassword';

import Landing from './pages/Landing';
import OrphanagesMap from './pages/OrphanagesMap';
import CreateOrphanage from './pages/CreateOrphanage';
import Orphanage from './pages/Orphanage';

const Routes: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/delete-orphanage-page" component={DeleteOrphanagePage} />
                <Route exact path="/pending-orphanages" component={DashboardPending} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/forgot-password" component={ForgotPassword} />
                <Route exact path="/new-password" component={SetNewPassword} />
                <Route exact path="/" component={Login} />
                <Route exact path="/landing" component={Landing} />
                <Route exact path="/app" component={OrphanagesMap} />
                <Route exact path="/orphanages/create" component={CreateOrphanage} />
                <Route exact path="/orphanages/:id" component={Orphanage} />
                
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;