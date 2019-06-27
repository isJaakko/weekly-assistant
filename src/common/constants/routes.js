import React, { Component } from 'react';

class Test extends Component {
  render() {
    return (<h1> Test Component!</h1 >);
  }
};

const RouteMap = [{
  path: '/test',
  component: Test,
}];

export default RouteMap;