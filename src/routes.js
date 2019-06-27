import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';

import Loadable from 'react-loadable';
import Loading from './components/Loading';
import App from './pages/App';

const routeMap = [{
  path: '/',
  component: './pages/Main',
  exact: true
}, {
  path: '/test',
  component: './pages/Test',
  exact: true
}];

export default (
  <Router>
    <App>
      {
        routeMap.map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.path}
            >
              {`${item.component.split('/').slice(-1)}`}
            </NavLink>
          </li>
        ))
      }
      <Switch>
        {
          routeMap.map((item, index) => (
            <Route
              key={index}
              path={item.path}
              exact={item.exact}
              component={
                Loadable({
                  loader: () => import(`${item.component}`),
                  loading: Loading,
                  delay: 200,
                  timeout: 2000
                })
              }
            />
          ))
        }
      </Switch>
    </App>
  </Router>
)