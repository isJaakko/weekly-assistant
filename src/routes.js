import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import Loading from './components/Loading';

const routerPrefix = '/weekly-assistant';
const delay = 250;
const timeout = 10000;

const routeMap = [
  {
    path: '/',
    component: './App',
    exact: true
  },
  {
    path: `${routerPrefix}/`,
    component: './App',
    exact: true
  }
];

export default (
  <Router>
    <Switch>
      {routeMap.map((item, index) => (
        <Route
          key={index}
          path={item.path}
          exact={item.exact}
          component={
            Loadable({
              loader: () => import(`${item.component}`),
              loading: Loading,
              delay,
              timeout
            })
          }
        />
      ))}
    </Switch>
  </Router>
);
