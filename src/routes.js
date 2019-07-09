import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

import Loadable from "react-loadable";
import Loading from "./components/Loading";
import App from "./pages/App";
import MenuMap from "./common/constants/menu";

const delay = 250;
const timeout = 10000;

const routeMap = [
  {
    path: "/",
    component: "./pages/Main",
    exact: true
  },
  {
    path: "/test",
    component: "./pages/Test",
    exact: true
  }
];

export default (
  <Router>
    <App>
      {MenuMap.map((item, index) => (
        <li key={index}>
          <NavLink to={item.path}>{`${item.name}`}</NavLink>
        </li>
      ))}
      <Switch>
        {routeMap.map((item, index) => (
          <Route
            key={index}
            path={item.path}
            exact={item.exact}
            component={Loadable({
              loader: () => import(`${item.component}`),
              loading: Loading,
              delay,
              timeout
            })}
          />
        ))}
      </Switch>
    </App>
  </Router>
);
