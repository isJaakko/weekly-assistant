import React from 'react';
import {
  BrowserRouter as Router,
  // HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Loadable from 'react-loadable';
import Loading from './components/Loading';
import App from './pages/App';

const delay = 250;
const timeout = 10000;

const routeMap = [
  {
    path: '/',
    component: './pages/Home',
    exact: true
  },
  {
    // path: '/notMatch',
    component: './pages/NotMatch',
    exact: true
  },
];

export default (
  <Router>
    <App>
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
    </App>
  </Router>
);
