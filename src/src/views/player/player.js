import {Utils as Utils} from "../../utils";
import React from "react";
import { Router, Route, browserHistory, Link } from 'react-router';


// -----------------------------
// Core

export default class Player extends React.Component {

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
      <div id="player" className="playerScreen">
				<div className="titleBack">
						<Link to="/menu" ><img src={'./assets/images/back_arrow.png'} alt="boohoo" className="arrow" onClick={this.handleBackClick} /></Link>
						<h2 className="titleScreen">PLAYER</h2>
				</div>
				<div>
					<img src={'./assets/images/player/player.png'} alt="boohoo" className="playerImg" />
					<img src={'./assets/images/player/bottom.png'} alt="boohoo" className="playerBot" />
				</div>
		  </div>
		);
	}
}
