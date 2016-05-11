// -----------------------------
// Imports

import {Utils as Utils} from "../../utils";
import React from "react";
import { Router, Route, browserHistory, Link } from 'react-router';


// -----------------------------
// Core

export default class Profil extends React.Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		// Component appear
		console.info("[Profil] - starting");
	}

	componentWillUnmount() {
		// Before leaving
		console.info("[Profil] - closing");
	}

	render() {
		return (
			<div id="profil">
		  		<h1>Profil</h1>
					<Link to='/menu'>Menu</Link>
		  </div>
		);
	}
}
