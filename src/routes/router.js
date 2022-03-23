import React from "react";
import Login from "../pages/login/login";
import Dashboard from "../pages/dashboard/Dashboard";
import { Switch, Route } from "react-router-dom";
import WebTheming from "../pages/webTheming/webTheming";
import OperationalTime from "../pages/operational Time/OperationalTime";
import Rooms from "../pages/RoomVideoCall/Room";
import PageLog from "../pages/PageLog/PageLog";
import AdminManagement from "../pages/adminManagement/adminManagement";
function Router() {
  return (
    <>
      <Switch>
        <Route exact path="/dashboard/:role">
          <Dashboard />
        </Route>
        <Route exact path="/webTheming/:role">
          <WebTheming />
        </Route>
        <Route exact path="/operationalTime/:role">
          <OperationalTime />
        </Route>
        <Route exact path="/roomVideoCall/:role">
          <Rooms />
        </Route>
        <Route exact path="/pageLog/:role">
          <PageLog />
        </Route>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/adminManagement/:role">
          <AdminManagement />
        </Route>
      </Switch>
    </>
  );
}

export default Router;
