import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";

// import CreateCharacter from "../create-character-page/create-character";
import CreateCharacterContainer from "../create-character-page";
import { MainPage } from "../pages";

const App = () => (
  <Fragment>
    <Switch>
      <Route path="/" component={MainPage} exact />
      {/* <Route path="/character" component={CreateCharacter} /> */}
      <Route path="/character" component={CreateCharacterContainer} />
    </Switch>
  </Fragment>
);

export default App;
