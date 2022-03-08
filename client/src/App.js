import React from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";

import Home from "./pages/Home/Home";
import TopNav from "./shared/components/TopNav/TopNav";

const App = () => {

  return (
    <HashRouter>
      <TopNav />
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
      </Switch>
    </HashRouter>
  );
};

export default App;

