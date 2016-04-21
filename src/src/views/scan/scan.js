// -----------------------------
// Imports

import {Utils as Utils} from "../../utils";
import React from "react";
import { Router, Route, browserHistory, Link } from 'react-router';


// -----------------------------
// Core

export default class Scan extends React.Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		// Component appear
		console.info("[Scan] - starting");
	}

	componentWillUnmount() {
		// Before leaving
		console.info("[Scan] - closing");
	}

	render() {
		return (
			<div id="scan">
		  		<h1>Scan</h1>
					<Link to='/menu'>Menu</Link>
		  	</div>
		);
	}
}
