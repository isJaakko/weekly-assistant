import React from "react";
import { render } from "react-dom";
import { Provider } from "mobx-react";
import stores from "./stores";
import routes from "./routes";
import '_src/less/styles.less';

render(
  <Provider {...stores}>
    {routes}
  </Provider>,
  document.getElementById("root")
);
