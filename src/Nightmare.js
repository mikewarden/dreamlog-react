import React from "react";
import App from './App';
import Dream from './Dream';
import './App.css';
import DreamForm from './DreamForm';
import Dragula from 'react-dragula';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Button from '@material-ui/core/Button';

class Nightmare extends React.Component {
  

  render() {
    let nightmareArray = this.props.nightmares.map((dream) => {
      return (<Link to={"/dream/" + dream.id}  key={dream.id} className="list-container"><div className="item-container"><strong>Id:</strong> {dream.id} <br/><strong>Name:</strong> {dream.name} <br/><hr/><strong>Title:</strong> {dream.title} <br/> <hr/><strong>Description:</strong> {dream.body} <br/><hr/> <strong>Date:</strong> {dream.date} <br/></div><br/></Link>
        )
    })
     let messageIfEmpty="";
    if(nightmareArray.length===0){
      messageIfEmpty = "No dreams found";
    }
    

  return (
    
    
    <div className="App">
      <h1>DreamLog: Nightmares</h1>
    
        <div id="nightmare">
        {messageIfEmpty}
        <div className='container' ref={this.dragulaDecorator}>{nightmareArray}</div>
        </div>
        
    </div>
  );
  }
}


export default Nightmare;






 