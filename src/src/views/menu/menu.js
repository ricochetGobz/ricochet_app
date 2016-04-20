import {Utils as Utils} from "../../utils";
import React from "react";
import { Router, Route, browserHistory, Link } from 'react-router';


// -----------------------------
// Core

export default class Menu extends React.Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		// Component appear
		
		console.info("[Menu] - starting");
	}

	componentWillUnmount() {
		// Before leaving

		console.info("[Menu] - closing");
	}

	render() {
		return (
			<div className="Menu" >
          <div id="menutTitle">
            <h2>Menu</h2>
          </div>
		  		<Composition title="Compositions" />
          <Scan title="Scan" />
          <Favoris title="Favoris" />
          <Sono title="Sonothèque" />
          <Profil  title="Profil"/>
		  </div>
		);
	}
}
class Composition extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div className="Composition menuLink" >
				<img src={''} alt="boohoo" className="Logo"/>
        <p>{this.props.title}</p>
			</div>
		)
	}
}
class Scan extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div className="Scan menuLink" >
				<img src={'http://placehold.it/400x20&text=slide1'} alt="boohoo" className="Logo"/>
        <p>{this.props.title}</p>
			</div>
		)
	}
}
class Favoris extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div className="Favoris menuLink" >
				<img src={'http://placehold.it/400x20&text=slide1'} alt="boohoo" className="Logo"/>
        <p>{this.props.title}</p>
			</div>
		)
	}
}
class Sono extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div className="Sono menuLink" >
				<img src={'http://placehold.it/400x20&text=slide1'} alt="boohoo" className="Logo"/>
        <p>{this.props.title}</p>
			</div>
		)
	}
}
class Profil extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div className="Profil menuLink" >
				<img src={'http://placehold.it/400x20&text=slide1'} alt="boohoo" className="Logo"/>
        <p>{this.props.title}</p>
			</div>
		)
	}
}
