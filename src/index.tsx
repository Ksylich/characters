import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import * as serviceWorker from './serviceWorker';

import App from "./components/app";
import ErrorBoundry from "./components/error-boundry";

import store from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <Router>
        <App />
      </Router>
    </ErrorBoundry>
  </Provider>,
  document.getElementById("root"),
);



serviceWorker.unregister();
