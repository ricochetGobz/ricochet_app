// -----------------------------
// Imports

import {Utils as Utils} from "../../utils";
import React from "react";
import { Router, Route, browserHistory, Link } from 'react-router';


// -----------------------------
// Core

export default class Login extends React.Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		// Component appear
		console.info("[Login] - starting");
	}

	componentWillUnmount() {
		// Before leaving
		console.info("[Login] - closing");
	}

	render() {
		return (
			<div id="login">
		  		<h1>Connexion</h1>
        	<LogForm />
					<Link to='/menu'>Menu</Link>
		  	</div>
		);
	}
}
class LogForm extends React.Component {
	constructor(props){
		super(props);
		this.state = { sent :  false };
	}
	handleReq(){
		console.log("alhoa");

	}
	render(){
		return(
				<form method="post" className="LogForm">
					<p><input type="text" name="login" value="" placeholder="Username or Email" /></p>
					<p><input type="password" name="password" value="" placeholder="Password"/></p>
					<p><input type="submit" name="commit" value="Login" onclick={this.props.handleReq} /></p>
				</form>
		)
	}
}
