import React from 'react';
import './App.css';
import Dream from './Dream';
import DreamForm from './DreamForm';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Dragula from 'react-dragula';
import Button from '@material-ui/core/Button';
import pencil1 from './pencil1.svg';
import thoughtbubble2 from './thoughtbubble2.svg';

class App extends React.Component {
 

  dragulaDecorator = (componentBackingInstance) => {
    if (componentBackingInstance) {
      let options = {
        revertOnSpill: false, 
        removeOnSpill: false,
        copy: false,
        copySortSource: false 
      };
      Dragula([componentBackingInstance], options)
    }
  };



  render() {
    let dreamArray = this.props.dreams.map((dream) => {
      return (<Link to={"/dream/" + dream.id}  key={dream.id} className="list-container"><div className="item-container">{/*<strong>Id:</strong> {dream.id} <br/>*/}<strong>Name:</strong> {dream.name}<span id="text-span"></span><strong>Title:</strong> {dream.title} <br/> {/*<hr/><strong>Description:</strong> {dream.body} <br/><hr/> <strong>Date:</strong> {dream.date}<br/>*/}</div></Link>
      	)
    })
     let messageIfEmpty="";
    if(dreamArray.length===0){
      messageIfEmpty = "No dreams found";
    }
    

  return (
    
  	
    <div className="App">
    <div id="svg-container">
    <img id="thought-bubble" src={thoughtbubble2} alt={"Icon"} style={{width: "60px", height: "60px"}}/>
    <img id="pencil-icon" src={pencil1} alt={"Icon"} style={{width: "60px", height: "60px"}}/>
    </div>
     <h1>DreamLog</h1>
    <div id="container">
        <h5>{messageIfEmpty}</h5>
        <div className='container'>{dreamArray}</div>
        </div>
        <footer>Developed by Mike Warden.<br/> <a id="footer-link" href="mailto:mikewarden@mikewarden.com">mikewarden@mikewarden.com</a></footer>
    </div>
  );
  }
}




export default App;