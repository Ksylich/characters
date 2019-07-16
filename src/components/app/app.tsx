import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import { MainPage } from "../pages";

const App = () => (
  <Fragment>
    <Switch>
      <Route path="/" component={MainPage} exact />
    </Switch>
  </Fragment>
);

export default App;
