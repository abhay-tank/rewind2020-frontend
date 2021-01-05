import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "../pages/home/Home";
import Profile from "../pages/profile/Profile";
import NotFound from "../pages/notFound/NotFound";
function Routers() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/profile/:id" exact component={Profile}></Route>
          <Route exact component={NotFound}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Routers;
