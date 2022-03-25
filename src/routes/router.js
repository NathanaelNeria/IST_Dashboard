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
        <Route exact path="/dashboard/:token/:role">
          <Dashboard />
        </Route>
        <Route exact path="/webTheming/:token/:role">
          <WebTheming />
        </Route>
        <Route exact path="/operationalTime/:token/:role">
          <OperationalTime />
        </Route>
        <Route exact path="/roomVideoCall/:token/:role">
          <Rooms />
        </Route>
        <Route exact path="/pageLog/:token/:role">
          <PageLog />
        </Route>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/adminManagement/:token/:role">
          <AdminManagement />
        </Route>
      </Switch>
    </>
  );
}

export default Router;
