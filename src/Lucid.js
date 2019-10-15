import React from "react";
import App from './App';
import Dream from './Dream';
import './App.css';
import DreamForm from './DreamForm';
import Dragula from 'react-dragula';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Button from '@material-ui/core/Button';

class Lucid extends React.Component {
	

	render() {
    let lucidArray = this.props.lucidDreams.map((dream) => {
      return (<Link to={"/dream/" + dream.id}  key={dream.id} className="list-container"><div className="item-container">{/*<strong>Id:</strong> {dream.id} <br/>*/}<strong>Name:</strong> {dream.name} <br/><hr/><strong>Title:</strong> {dream.title} <br/> {/*<hr/><strong>Description:</strong> {dream.body} <br/><hr/> <strong>Date:</strong> {dream.date}<br/>*/}</div><br/></Link>
      	)
    })
     let messageIfEmpty="";
    if(lucidArray.length===0){
      messageIfEmpty = "No dreams found";
    }
    

  return (
    
  	
    <div className="App">
      <h1>DreamLog: Lucid Dreams</h1>
    
        <div id="lucid">
        {messageIfEmpty}
        <div className='container' ref={this.dragulaDecorator}>{lucidArray}</div>
        </div>
        
    </div>
  );
  }
}


export default Lucid;






 