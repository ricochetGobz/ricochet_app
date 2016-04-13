// -----------------------------
// Imports

import {Utils as Utils} from "../../utils";
import React from "react";
import { Router, Route, browserHistory, Link } from 'react-router';




// -----------------------------
// Core

export default class Home extends React.Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		// Component appear
		console.info("[Home] - starting");
	}

	componentWillUnmount() {
		// Before leaving
		console.info("[Home] - closing");
	}

	render() {
		return (
			<div id="home">
		  		<h1>Home</h1>
		  		<Link to='/users'>Users</Link>
		  	</div>
		);
	}
}