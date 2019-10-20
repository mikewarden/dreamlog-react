import React from "react";
import App from './App';
import Dream from './Dream';
import './App.css';
import DreamForm from './DreamForm';
import Dragula from 'react-dragula';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import pencil1 from './pencil1.svg';
import thoughtbubble2 from './thoughtbubble2.svg';

class Recurring extends React.Component {
  

  render() {
    let recurringArray = this.props.recurring.map((dream) => {
      return (
      <Link to={"/dream/" + dream.id}  key={dream.id} className="list-container"><div className="item-container">{/*<strong>Id:</strong> {dream.id} <br/>*/}<strong>Name:</strong> {dream.name}<span className="vl"></span><span></span> <strong>Title:</strong> {dream.title} <br/> {/*<hr/><strong>Description:</strong> {dream.body} <br/><hr/> <strong>Date:</strong> {dream.date}<br/>*/}</div></Link>
        )
    })
     let messageIfEmpty="";
    if(recurringArray.length===0){
      messageIfEmpty = "No dreams found";
    }
    

  return (
    
    
    <div className="App">
    <div id="svg-container">
    <img id="thought-bubble" src={thoughtbubble2} alt={"Icon"} style={{width: "60px", height: "60px"}}/>
    <img id="pencil-icon" src={pencil1} alt={"Icon"} style={{width: "60px", height: "60px"}}/>
    </div>
      <h1>Recurring Dreams</h1>
    
        <div id="recurring">
        {messageIfEmpty}
        <div className='container' ref={this.dragulaDecorator}>{recurringArray}</div>
        </div>
        <footer>Developed by Mike Warden.</footer>
    </div>
  );
  }
}


export default Recurring;






 