import React from 'react';
import { BrowserRouter, Switch , Route } from 'react-router-dom';

import Landing from './pages/Landing';
import OrphanagesMap from './pages/OrphanagesMap';
import CreateOrphanage from './pages/CreateOrphanage';
import Orphanage from './pages/Orphanage';

const Routes: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>

                <Route exact path="/" component={Landing} />
                <Route exact path="/app" component={OrphanagesMap} />
                
                <Route exact path="/orphanages/create" component={CreateOrphanage} />
                <Route exact path="/orphanages/:id" component={Orphanage} />
                
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;