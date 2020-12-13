import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from '../pages/Landing';
import EcorecyclesMap from '../pages/EcorecyclesMap';
import CreateEcorecycle from '../pages/CreateEcorecycle';
import Ecorecycle from '../pages/Ecorecycle';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Landing} />
    <Route path="/app" component={EcorecyclesMap} />
    <Route path="/ecorecycle/create" component={CreateEcorecycle} />
    <Route path="/ecorecycles/:id" component={Ecorecycle} />
  </Switch>
);

export default Routes;
