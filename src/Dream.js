import React from 'react';
import { Link } from "react-router-dom";

class Dream extends React.Component {
  constructor(){
    super()
    this.state={
      dream:{}
    }
  }
  componentDidMount(){
    const { id } = this.props.match.params;
    fetch("https://tranquil-harbor-57348.herokuapp.com/dream/" + id)
      .then((res) => res.json())
      .then((dreamRes) =>{
        this.setState({dream:dreamRes});
    })
  }
  // dreamHandleClick=(id)=>{
  //   fetch('http://localhost:8080/dream/' + id, {
  //     method: 'delete',
  //   }).then(()=>{
  //     this.props.getDataFromAPI();
  //   })
  // }

  render(){
    return(
      <div>
        <div>Id: {this.state.dream.id}</div>
        <div>Name: {this.state.dream.name}</div>
        <div>Breed: {this.state.dream.breed}</div>
        <div>Age: {this.state.dream.age}</div>
        <Link to="/"><button onClick={()=>this.dreamHandleClick(this.state.dog.id)}>Delete Dog</button></Link>
        <Link to={"/edit/dream/" + this.state.dream.id}><button>Edit</button></Link>
      </div>
    )
  }
}

export default ShowDog;