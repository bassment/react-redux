import React from 'react';
import { Route } from 'react-router';
import App from './containers/App';
import Home from './containers/Home';
import Count from './containers/Count';

const routes = (
  <Route component={App}>
    <Route path="/" component={Home} />
    <Route path="/count" component={Count} />
  </Route>
);

export default routes;
