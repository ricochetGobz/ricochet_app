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
import Composition from './views/composition/composition';
import Sono from './views/sono/sono';
import Scan from './views/scan/scan';
import Profil from './views/profil/profil';
import Favoris from './views/favoris/favoris';
import Player from './views/player/player';

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
                    <Route path="composition" component={Composition} />
                    <Route path="sono" component={Sono} />
                    <Route path="favoris" component={Favoris} />
                    <Route path="scan" component={Scan} />
                    <Route path="profil" component={Profil} />
                    <Route path="player" component={Player} />
                    <Route path="users" component={Users} />
                </Route>
            </Router>
        );
    }
}
