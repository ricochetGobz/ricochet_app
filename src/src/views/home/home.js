// -----------------------------
// Imports

import {Utils as Utils} from "../../utils";
import React from "react";
import { Router, Route, browserHistory, Link } from 'react-router';




// -----------------------------
// Core

export default class Home extends React.Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		// Component appear
		console.info("[Home] - starting");
		var video = document.getElementById("video1");
		video.play();
		video.addEventListener('ended',myHandler,false);
    function myHandler(e) {
     	document.location.href += "/login";
    }

	}

	componentWillUnmount() {
		// Before leaving
		console.info("[Home] - closing");
	}

	render() {
		return (

			<div id="home">
					<LogoVid />
		  	</div>
		);
	}
}

class LogoVid extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div className="LogoVid" >
				<video src={'./assets/video/ricochet.mp4'} className="intro" id="video1"></video>
			</div>
		)
	}
}
