import React from 'react';
import './App.css';
import DreamForm from './DreamForm';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Dragula from 'react-dragula';
import Button from '@material-ui/core/Button';

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


  handleDeleteClick = (id) => {
    fetch('https://tranquil-harbor-57348.herokuapp.com/dream' + id, {
      method: 'delete',
      }).then(() => {
      this.props.getDataFromAPI();
    })
  }



  render() {
    let dreamArray = this.props.data.map((item) => {
      return (<div  key={item.id} className="list-container"><div className="item-container"><strong>Name:</strong> {item.name} <br/><hr/><strong>Title:</strong> {item.title} <br/> <hr/><strong>Description:</strong> {item.body} <br/><hr/> <strong>Date:</strong> {item.date} <br/></div><br/></div>
      	)
    })

    

  return (
  	
    <div className="App">
      <h1>DreamLog</h1>
        <div id="container"><div className='container' ref={this.dragulaDecorator}>{dreamArray}</div>
        </div>
        
    </div>
  );
  }
}




export default App;