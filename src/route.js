import React from "react";
import {Switch, Route} from 'react-router-dom'
import App from "./App";
import Login from "./pages/Login";

function Router(){
    return(
        <>
        <Switch>
            <Route exact path='/login'>
                <Login/>
            </Route>
            <Route exact path='/home'>
                <App/>
            </Route>
        </Switch>
        </>
    )
}