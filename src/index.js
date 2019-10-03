import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'mobx-react';
import stores from './stores';
import routes from './routes';
import './less/style.less';

render(
  <Provider {...stores}>
    {routes}
  </Provider>,
  document.getElementById('root')
);
