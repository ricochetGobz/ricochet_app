// -----------------------------
// Imports

import {Utils as Utils} from "../../utils";
import React from "react";
import { Router, Route, browserHistory, Link } from 'react-router';


// -----------------------------
// Core

export default class Favoris extends React.Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		// Component appear
		console.info("[Favoris] - starting");
	}

	componentWillUnmount() {
		// Before leaving
		console.info("[Favoris] - closing");
	}

	render() {
		return (
			<div id="favoris">
		  		<h1>Favoris</h1>
					<Link to='/menu'>Menu</Link>
		  	</div>
		);
	}
}
