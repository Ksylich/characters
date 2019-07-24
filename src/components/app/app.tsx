import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import NoMatch from "../no-match";

import { CreateCharecterPage, LastPage, MainPage } from "../pages";

const App = () => (
  <Fragment>
    <Switch>
      <Route path="/" component={MainPage} exact />
      <Route path="/character" component={CreateCharecterPage} />
      <Route path="/last-page" component={LastPage} />
      <Route component={NoMatch} />
    </Switch>
  </Fragment>
);

export default App;
