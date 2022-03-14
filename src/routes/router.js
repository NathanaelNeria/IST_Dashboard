import React from "react";
import Login from "../pages/login/login";
import Dashboard from "../pages/dashboard/Dashboard";
import { Switch, Route } from "react-router-dom";
function Router() {
  return (
    <>
      <Switch>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/">
          <Login />
        </Route>
      </Switch>
    </>
  );
}

export default Router;
