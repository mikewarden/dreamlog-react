import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Rating extends React.Component {
	constructor() {
		super()
		this.state = {
			rating: 0
		}
	}

	handleIncrement = () =>{
		console.log("increment")
		this.setState({rating: this.state.rating +1})
	}

	handleDecrement = () =>{
		console.log("decrement");
		this.setState({rating: this.state.rating - 1})
	}

	render() {
		return(
			<div id="rating-container">
				<div id="rating-value"><strong>Rating: </strong>{this.state.rating}</div>
				<Button className="submit-btn" onClick={this.handleIncrement} variant="outlined" color="inherit">+</Button>
				<Button className="submit-btn" onClick={this.handleDecrement} variant="outlined" color="inherit">-</Button>
			</div>
		)
	}
}

export default Rating;