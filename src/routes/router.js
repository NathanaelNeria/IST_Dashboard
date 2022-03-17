import React from "react";
import Login from "../pages/login/login";
import Dashboard from "../pages/dashboard/Dashboard";
import { Switch, Route } from "react-router-dom";
import WebTheming from "../pages/webTheming/webTheming";
import OperationalTime from "../pages/operational Time/OperationalTime";
import Rooms from "../pages/RoomVideoCall/Room";
function Router() {
  return (
    <>
      <Switch>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/webTheming">
          <WebTheming />
        </Route>
        <Route exact path="/operationalTime">
          <OperationalTime />
        </Route>
        <Route exact path="/roomVideoCall">
          <Rooms />
        </Route>
        <Route exact path="/">
          <Login />
        </Route>
      </Switch>
    </>
  );
}

export default Router;
