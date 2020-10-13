import React from 'react';
import { BrowserRouter, Switch , Route } from 'react-router-dom';

import Landing from './Pages/Landing';
import OrphanagesMap from './Pages/OrphanagesMap';

const Routes: React.FC = () => {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Landing} />
            <Route exact path="/app" component={OrphanagesMap} />
        </BrowserRouter>
    )
}

export default Routes;