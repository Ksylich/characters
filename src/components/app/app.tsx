import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import CreateCharacter from "../create-character-page/create-character";
import { MainPage } from "../pages";

const App = () => (
  <Fragment>
    <Switch>
      <Route path="/" component={MainPage} exact />
      <Route path="/character" component={CreateCharacter} />
    </Switch>
  </Fragment>
);

export default App;
