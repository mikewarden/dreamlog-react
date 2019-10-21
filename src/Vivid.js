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

class Vivid extends React.Component {
  

  render() {
    let vividArray = this.props.vivid.map((dream) => {
      return (<Link to={"/dream/" + dream.id}  key={dream.id} className="list-container"><div className="item-container">{/*<strong>Id:</strong> {dream.id} <br/>*/}<strong>Name:</strong> {dream.name}<span id="text-span"></span><strong>Title:</strong> {dream.title} <br/> {/*<hr/><strong>Description:</strong> {dream.body} <br/><hr/> <strong>Date:</strong> {dream.date}<br/>*/}</div></Link>
        )
    })
     let messageIfEmpty="";
    if(vividArray.length===0){
      messageIfEmpty = "No dreams found";
    }
    

  return (
    
    
    <div className="App">
    <div id="svg-container">
    <img id="thought-bubble" src={thoughtbubble2} alt={"Icon"} style={{width: "60px", height: "60px"}}/>
    <img id="pencil-icon" src={pencil1} alt={"Icon"} style={{width: "60px", height: "60px"}}/>
    </div>
      <h1>Vivid Dreams</h1>
    
        <div id="vivid">
        {messageIfEmpty}
        <div className='container' ref={this.dragulaDecorator}>{vividArray}</div>
        </div>
        <footer>Developed by Mike Warden.<br/> <a id="footer-link" href="mailto:mikewarden@mikewarden.com">mikewarden@mikewarden.com</a></footer>

    </div>
  );
  }
}


export default Vivid;






 