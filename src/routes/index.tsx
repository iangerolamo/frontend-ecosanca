import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from '../pages/Landing';
import RecyclesMap from '../pages/RecyclesMap';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Landing} />
    <Route path="/recyclesmap" component={RecyclesMap} />
  </Switch>
);

export default Routes;
