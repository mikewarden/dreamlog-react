import React from "react";
import App from './App';
import Dream from '../Dream';
import '../App.css';
import DreamForm from '../DreamForm';
import Dragula from 'react-dragula';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Button from '@material-ui/core/Button';

class Lucid extends React.Component {
	constructor() {
		super();
		this.state = {
			lucidDreams: []
		}


	}

	render() {
		return(
			<div></div>
		)
	}
}

export default Lucid;






 