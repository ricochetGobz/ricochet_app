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
		  		<Item title="Compositions" url="composition" />
          <Item title="Scan" url="scan"/>
          <Item title="Favoris" url="favoris" />
          <Item title="Sonothèque" url="sono"/>
          <Item title="Profil" url ="profil"/>
		  </div>
		);
	}
}

class Item extends React.Component {
	constructor(props){
		super(props);
	}

	handleClick(event) {
	// this.setState({liked: !this.state.liked});
	 console.info(event)
 	}
	render(){
		var urlImg = " lol";
		return(
			<div className="Item menuLink" onClick={this.handleClick}>
				<Link to={this.props.url}>
					{this.props.title}
					{urlImg}
					<img src={'./assets/images/menu/' + this.props.url + '.png'} alt="boohoo" className={"Logo " +  this.props.url}/>
				</Link>
			</div>
		)
	}
}
