import {Utils as Utils} from "../../utils";
import React from "react";
import { Router, Route, browserHistory, Link } from 'react-router';


// -----------------------------
// Core

export default class Player extends React.Component {

	constructor(props) {
		super(props);
    this.handleBackClick = this.handleBackClick.bind(this);
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
      <div id="composition" className="compoContainer">
				<div className="titleBack">
						<Link to="/menu" ><img src={'./assets/images/back_arrow.png'} alt="boohoo" className="arrow" onClick={this.handleBackClick} /></Link>
						<h2 className="titleScreen">Player</h2>
				</div>
		  </div>
		);
	}
}
