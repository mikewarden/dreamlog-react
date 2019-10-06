import React from 'react';
import './App.css';
import Form from './Form.js';
import Dragula from 'react-dragula';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }

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

  getDataFromAPI = () => {
    fetch("http://localhost:8080/dreams")
    .then((res) => res.json()) 
    .then((response) => {
       this.setState({data: response});
    console.log(response);
    }); 
  }

  handleDeleteClick = (id) => {
    fetch('http://localhost:8080/dream/' + id, {
      method: 'delete',
      headers: {
        "Content-Type": "application/json"
      },
      }).then(() => {
      this.getDataFromAPI();
    })
  }

  componentDidMount() {
    this.getDataFromAPI();
  }

  render() {
    let dreamArray = this.state.data.map((item) => {
      return <div  key={item.id} className="list-container"><div className="item-container"><strong>Title:</strong> {item.title} <br/> <strong>Description:</strong> {item.body} <br/> <strong>Date:</strong> {item.date}  <br/><button onClick={(event) => this.handleDeleteClick(item.id)} className="delete-btn">Delete</button><button className="edit-btn">Edit</button> <br/></div><br/></div>
    });

  return (
    <div className="App">
      <h1>DreamLog</h1>
      
        <div id="container"><div className='container' ref={this.dragulaDecorator}>{dreamArray}</div>
        </div>
        <div><Form getDataFromAPI={this.getDataFromAPI} /></div>
    </div>
  );
  }
}


export default App;
