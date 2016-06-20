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
        	<LogForm />
		  	</div>
		);
	}
}
class LogForm extends React.Component {
	constructor(props){
		super(props);
		this.state = { sent :  false };
		this.handleReq = this.handleReq.bind(this);
	}
	handleReq(e){
		console.log("alhoa");
	}
	render(){

		return(
				<div className="formContainer">
				  <div>
							<img src={'./assets/images/00_splash.jpg'} alt="boohoo" className="Logo logLogo"/>
					</div>
					<form method="post" className="LogForm">
						<div className="inputForm">
							<img src={'./assets/images/login/form1.png'} alt="boohoo" className="picto"/>
							<p className="inputP" ><input type="text" name="login"  defaultValue="arthur.robert@gmail.com" placeholder="email" /></p>
							<img src={'./assets/images/login/check.png'} alt="boohoo" className="picto"/>
						</div>
						<div className="inputForm">
							<img src={'./assets/images/login/form2.png'} alt="boohoo" className="picto"/>
							<p className="inputP"><input type="password" name="password"  placeholder="Password" defaultValue="password"/></p>
							<img src={'./assets/images/login/cross.png'} alt="boohoo" className="picto"/>
						</div>
						<Link to='/menu'>
							<input type="button" className="buttonLog" name="commit" value="OK" onClick={this.handleReq} />
						</Link>
					</form>
				</div>
		)
	}
}
