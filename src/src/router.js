// -----------------------------
// Imports

import {Utils as Utils} from "./utils";
import React from "react";
import { Router, Route, IndexRoute, browserHistory } from 'react-router';



// -----------------------------
// Layout

import Layout from "./layout/layout";



// -----------------------------
// Components

import Home from './views/home/home';
import Users from './views/users/users';
import Login from './views/login/login';
import Menu from './views/menu/menu';

// -----------------------------
// Core

export default class Root extends React.Component {

    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={Layout}>
                    <IndexRoute component={Home} />
                    <Route path="login" component={Login} />
                    <Route path="menu" component={Menu} />
                    <Route path="users" component={Users} />
                </Route>
            </Router>
        );
    }
}
