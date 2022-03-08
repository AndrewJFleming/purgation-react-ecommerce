import React from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";

import Home from "./pages/Home/Home";
import Footer from "./shared/components/Footer/Footer";
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
      <Footer />
    </HashRouter>
  );
};

export default App;

