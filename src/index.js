import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'mobx-react';
import stores from './common/stores';
import routes from './routes';

render(
  <Provider {...stores}>
    {routes}
  </Provider>,
  document.getElementById('root')
);
