// -----------------------------
// Imports

import {Utils as Utils} from "../../utils";
import React from "react";
import { Router, Route, browserHistory, Link } from 'react-router';


// -----------------------------
// Core

export default class Composition extends React.Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		// Component appear
		console.info("[Composition] - starting");
	}

	componentWillUnmount() {
		// Before leaving
		console.info("[Composition] - closing");
	}

	render() {
		return (
			<div id="composition">
		  		<h1>Composition</h1>
					<Link to='/menu'>Menu</Link>
		  	</div>
		);
	}
}
