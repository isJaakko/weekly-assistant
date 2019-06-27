import { BrowserRouter, Switch, Route } from 'react-router-dom';

const routeMap = [{
  path: '/',
  component: './pages/'
}, {
  path: '/test',
  component: './page/'
}]

export default (<Switch>
  {
    routeMap.map((item, index) => (
      <Route
        key={index}
        path={item.path}
        component={item.component}
      />
    ))
  }
</Switch>)