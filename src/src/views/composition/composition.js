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
			<div id="composition" className="compoContainer">
				<div className="titleBack">
						<Link to='/menu'><img src={'./assets/images/back_arrow.png'} alt="boohoo" className="arrow"/></Link>
						<h2 className="titleScreen"> COMPOSITIONS</h2>
				</div>
				<div className="search">
					<p >TRIER PAR</p>
					<div className="option">
						<p> Date </p>
						<p> Titre </p>
						<input type="text" name="search"  value="Rechercher"/>
					</div>
				</div>
				<ItemComp author = "Michel" compTitle = "des barres de lol" urlValue="/sonotheque/01"/>
				<ItemComp author = "Moules" compTitle = "j'aime les mouches" urlValue="/sonotheque/02"/>
				<ItemComp author = "Frites" compTitle = "dehors, il pleut" urlValue="/sonotheque/03"/>
		  </div>
		);
	}
}

class ItemComp extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div className="itemComp">
				<img src={'./assets/images'+ this.props.urlValue+'.png'} alt="boohoo" className="compImg"/>
				<div className="itemAtr">
					<p>{this.props.compTitle}</p>
				</div>
			</div>
		)
	}
}
