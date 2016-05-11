import {Utils as Utils} from "../../utils";
import React from "react";
import { Router, Route, browserHistory, Link } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

// -----------------------------
// Core

export default class Menu extends React.Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		// Component appear
		var test = this.refs.test.getDOMNode();
		var t = new TimelineMax();

		t.to(test, .1, {x:"00"});
		console.info("[Menu] - starting");
	}

	componentWillUnmount() {
		// Before leaving
		var test = this.refs.test.getDOMNode();
		var t = new TimelineMax();

		t.to(test, .2, {x:"0"});
		console.info("[Menu] - closing");
	}

	render() {
		return (
			<ReactCSSTransitionGroup
				transitionName="example"
				transitionAppear={true}
				transitionAppearTimeout={500}
				transitionEnterTimeout={500}
				transitionLeaveTimeout={500}
			>

			<div className="menuContainer">
				<img src={'./assets/images/00_Splash.jpg'} alt="boohoo" className="menuHeaderImg"/>
				<div ref="test" className="Menu" >
						<div className="item menuLink" >
								<img src={'./assets/images/menu/menu.png'} alt="boohoo" className="Logo"/>
						</div>
			  		<Item title="Compositions" url="composition" />
	          <Item title="Scan" url="scan"/>
	          <Item title="Favoris" url="favoris" />
	          <Item title="Sonothèque" url="sono"/>
	          <Item title="Profil" url ="profil"/>
			  </div>
			</div>
			</ReactCSSTransitionGroup>
		);
	}
}

class Item extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			url : this.props.url,
			imgUrl : this.props.url
		};
		 this.handleClickDown = this.handleClickDown.bind(this);
		 this.handleClickUp = this.handleClickUp.bind(this);
	}

	handleClickDown(event) {
	// this.setState({liked: !this.state.liked});

	 this.setState({imgUrl : this.props.url+'_bis' });
	 console.info(this.state.imgUrl)
		console.info(event.target)
 	}
	handleClickUp(event) {
	// this.setState({liked: !this.state.liked});

	 this.setState({imgUrl : this.props.url });
	 console.info(this.state.imgUrl)
		console.info(event.target)
 	}
	render(){
		return(
			<div className="item menuLink" onTouchStart={this.handleClickDown} onTouchEnd={this.handleClickUp}>
				<Link to={this.props.url}>

					<img src={'./assets/images/menu/' + this.state.imgUrl + '.png'} alt="boohoo" className={"Logo " +  this.props.url}/>
				</Link>

			</div>
		)
	}
}
