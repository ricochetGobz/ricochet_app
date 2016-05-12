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
			<div id="sono" className="sonoContainer">
				<div className="titleBack">
						<Link to='/menu'><img src={'./assets/images/back_arrow.png'} alt="boohoo" className="arrow"/></Link>
						<h2 className="titleScreen">SONOTHEQUE</h2>
				</div>
				<div className="search">
					<p >TRIER PAR</p>
					<div className="option">
						<p> Date </p>
						<p> Titre </p>
						<input type="text" name="search"  placeholder="Rechercher"/>
					</div>
				</div>
				<ItemSono author = "Michel" compTitle = "des barres de lol" urlValue="/sonotheque/01"/>
				<ItemSono author = "Moules" compTitle = "j'aime les mouches" urlValue="/sonotheque/02"/>
				<ItemSono author = "Frites" compTitle = "dehors, il pleut" urlValue="/sonotheque/03"/>
		  </div>
		);
	}
}

class ItemSono extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div className="itemComp">
				<img src={'./assets/images'+ this.props.urlValue +'.png'} alt="boohoo" className="compImg"/>
				<div className="itemAtr">
					<p>{this.props.compTitle}</p>
				</div>
			</div>
		)
	}
}
