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
			<div id="favoris" className="favorisContainer">
				<div className="titleBack">
						<Link to='/menu'><img src={'./assets/images/back_arrow.png'} alt="boohoo" className="arrow"/></Link>
						<h2 className="titleScreen">FAVORIS</h2>
				</div>
				<div className="search">
					<p >TRIER PAR</p>
					<div className="option">
						<p> Date </p>
						<p> Titre </p>
						<input type="text" name="search"  placeholder="Rechercher"/>
					</div>
				</div>
				<ItemFav author = "Jérémie" compTitle = "La vie" urlValue="/sonotheque/fav01"/>
				<ItemFav author = "Ingrid" compTitle = "Hello world" urlValue="/sonotheque/viewed"/>
				<ItemFav author = "Alain" compTitle = "Deaf Metal" urlValue="/sonotheque/03"/>
			</div>
		);
	}
}
class ItemFav extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div className="itemComp">
				<img src={'./assets/images'+ this.props.urlValue+'.png'} alt="boohoo" className="compImg"/>
				<div className="itemAtr">
					<p>{this.props.compTitle}</p>
					<p>{this.props.author}</p>
				</div>
			</div>
		)
	}
}
