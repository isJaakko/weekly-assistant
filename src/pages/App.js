import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import RouterMap from '../common/constants/routes';

export default class App extends Component {

  renderRoutes() {
    return RouterMap.map(route => {
      return (<Route
        key={route.path}
        path={route.path}
        component={route.component}
      />);
    });
  }

  render() {
    return (<Switch>
      {this.renderRoutes()}
    </Switch>);
  }
}