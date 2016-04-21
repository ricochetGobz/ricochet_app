// -----------------------------
// Imports

import {Utils as Utils} from "../../utils";
import React from "react";
import { Router, Route, browserHistory, Link } from 'react-router';


// -----------------------------
// Core

export default class Sono extends React.Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		// Component appear
		console.info("[Sono] - starting");
	}

	componentWillUnmount() {
		// Before leaving
		console.info("[Sono] - closing");
	}

	render() {
		return (
			<div id="sono">
		  		<h1>Sonothèque</h1>
					<Link to='/menu'>Menu</Link>
		  	</div>
		);
	}
}
