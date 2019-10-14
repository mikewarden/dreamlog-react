import React from 'react';
import App from './App';
import DreamApp from './DreamApp';
import './App.css';
import DreamForm from './DreamForm';
import Dragula from 'react-dragula';
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
      <div>
        <div>Id: {this.state.dream.id}</div>
        <div>Name: {this.state.dream.name}</div>
        <div>Title: {this.state.dream.title}</div>
        <div>Description: {this.state.dream.body}</div>
        <div>Date: {this.state.dream.date}</div>
        <Link to="/"><button onClick={()=>this.deleteHandleClick(this.state.dream.id)}>Delete Dream</button></Link>
        <Link to={"/edit/dream/" + this.state.dream.id}><button>Edit</button></Link>
      </div>
    )
  }
}

export default Dream;