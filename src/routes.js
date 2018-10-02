import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Shop from "./components/Shop/Shop";
export default (
  <Switch>
    <Route component={Home} exact path="/" />
    <Route component={Shop} exact path="/shop" />
  </Switch>
);
