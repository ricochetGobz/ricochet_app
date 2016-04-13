// -----------------------------
// Imports

import {Utils as Utils} from "../../utils";
import React from "react";
import { Router, Route, browserHistory, Link } from 'react-router';




// -----------------------------
// Core

export default class Users extends React.Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		// Component appear
		console.info("[Users] - starting");
	}

	componentWillUnmount() {
		// Before leaving
		console.info("[Users] - closing");
	}

	render() {
		return (
			<div id="users">
		  		<h1>Users</h1>
		  		<Link to='/'>Home</Link>
		  	</div>
		);
	}
}