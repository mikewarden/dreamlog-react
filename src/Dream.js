import React from 'react';
import App from './App';
import DreamApp from './DreamApp';
import './App.css';
import DreamForm from './DreamForm';
import Rating from './Rating';
import Dragula from 'react-dragula';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Dream extends React.Component {
  constructor(){
    super()
    this.state={
      dream:{}
    }
  }
  componentDidMount(){
    const { id } = this.props.match.params;
    fetch('https://tranquil-harbor-57348.herokuapp.com/dream/' + id)
      .then((res) => res.json())
      .then((response) =>{
        this.setState({dream:response});
    })
  }
  deleteHandleClick=(id)=>{
    fetch('https://tranquil-harbor-57348.herokuapp.com/dream/' + id, {
      method: 'delete',
    }).then(()=>{
      this.props.getDataFromAPI();
    })
  }

 render(){
    return(
      <div id="dream-profile">
      <h1>DreamLog</h1>
        <div id="dream-body">
          <div className="dream-profile-data"><strong>Id:</strong> {this.state.dream.id}</div>
          <hr/>
          <div className="dream-profile-data"><strong>Name:</strong> {this.state.dream.name}</div>
          <hr/>
          <div className="dream-profile-data"><strong>Title:</strong> {this.state.dream.title}</div>
          <hr/>
          <div className="dream-profile-data"><strong>Description:</strong> {this.state.dream.body}</div>
          <hr/>
          <div className="dream-profile-data"><strong>Date:</strong> {this.state.dream.date}</div>
          {/*<hr/>
                    <Rating />*/}
        </div>
        <Link to="/" className="delete-dream"><Button className="submit-btn" onClick={()=>this.deleteHandleClick(this.state.dream.id)} variant="outlined" color="inherit">Delete Dream</Button></Link>
        <Link to={"/edit/dream/" + this.state.dream.id} className="edit-dream"><Button className="submit-btn" variant="outlined" color="inherit">Edit</Button></Link>
      </div>
    )
  }
}

export default Dream;