// -----------------------------
// Imports

import {Utils as Utils} from "../../utils";
import React from "react";
import { Router, Route, browserHistory, Link } from 'react-router';


// -----------------------------
// Core

export default class Favoris extends React.Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		// Component appear
		console.info("[Favoris] - starting");
	}

	componentWillUnmount() {
		// Before leaving
		console.info("[Favoris] - closing");
	}

	render() {
		return (
			<div id="favoris">
				<div className="titleBack">
						<Link to='/menu'><img src={'./assets/images/back_arrow.png'} alt="boohoo" className="arrow"/></Link>
						<h2 className="titleScreen">FAVORIS</h2>
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
				<img src="./assets/images/favoris/fav.png" alt="boohoo" className="fav"/>
				<img src={'./assets/images'+ this.props.urlValue+'.png'} alt="boohoo" className="compImg"/>
				<div className="itemAtr">
					<p>{this.props.compTitle}</p>
					<p>{this.props.author}</p>
				</div>
			</div>
		)
	}
}
