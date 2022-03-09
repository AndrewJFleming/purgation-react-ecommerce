import React from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";

import Home from "./pages/Home/Home";
import Footer from "./shared/components/Footer/Footer";
import TopNav from "./shared/components/TopNav/TopNav";
import bodyBG from "./images/bodyBG.png";

const App = () => {

  return (
    <div style={{
      background: `url(${bodyBG})`, backgroundAttachment: "fixed"}}>
      <HashRouter>
        <TopNav />
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
        </Switch>
        <Footer />
      </HashRouter>
      </div>
  );
};

export default App;

