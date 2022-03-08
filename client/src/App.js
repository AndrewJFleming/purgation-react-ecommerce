import React from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";

import Home from "./pages/Home/Home";

const App = () => {

  return (
    <HashRouter>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
      </Switch>
    </HashRouter>
  );
};

export default App;

