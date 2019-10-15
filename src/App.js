import React from 'react';
import './App.css';
import Dream from './Dream';
import DreamForm from './DreamForm';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Dragula from 'react-dragula';
import Button from '@material-ui/core/Button';
import bedIcon from './bed.svg';

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
      return (<Link to={"/dream/" + dream.id}  key={dream.id} className="list-container"><div className="item-container">{/*<strong>Id:</strong> {dream.id} <br/>*/}<strong>Name:</strong> {dream.name} <br/><hr/><strong>Title:</strong> {dream.title} <br/> {/*<hr/><strong>Description:</strong> {dream.body} <br/><hr/> <strong>Date:</strong> {dream.date}<br/>*/}</div><br/></Link>
      	)
    })
     let messageIfEmpty="";
    if(dreamArray.length===0){
      messageIfEmpty = "No dreams found";
    }
    

  return (
    
  	
    <div className="App">
      <h1>DreamLog</h1>
    
        <div id="container">
        {messageIfEmpty}
        <div className='container' ref={this.dragulaDecorator}>{dreamArray}</div>
        </div>
        
    </div>
  );
  }
}




export default App;