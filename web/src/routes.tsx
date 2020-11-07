import React from 'react';
import { BrowserRouter, Switch , Route } from 'react-router-dom';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import DashboardPending from './pages/DashboardPending';
import DeleteOrphanagePage from './pages/DeleteOrphanagePage';
import SuccessfullySubmittedFormPage from './pages/SuccessfullySubmittedFormPage';
import EditOrphanagePage from './pages/EditOrphanagePage';
import AcceptOrDeclineOrphanagePage from './pages/AcceptOrDeclineOrphanagePage';
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

                <Route exact path="/login" component={Login} />
                <Route exact path="/" component={Landing} />
                <Route exact path="/orphanages/create" component={CreateOrphanage} />
                <Route exact path="/app" component={OrphanagesMap} />
                <Route exact path="/dashboard" component={Dashboard} />

                <Route exact path="/orphanages/:id" component={Orphanage} />

                <Route exact path="/orphanages/delete/:id" component={DeleteOrphanagePage} />
                <Route exact path="/orphanages/edit/:id" component={EditOrphanagePage} />
                
                <Route exact path="/successfully-submitted" component={SuccessfullySubmittedFormPage} />
                <Route exact path="/dashboard/accept-or-decline" component={AcceptOrDeclineOrphanagePage} />
                <Route exact path="/dashboard/pending-orphanages" component={DashboardPending} />
                
                <Route exact path="/forgot_password" component={ForgotPassword} />
                <Route exact path="/new_password" component={SetNewPassword} />
                
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;