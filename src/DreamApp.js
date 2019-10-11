import React from "react";
import App from './App';
import './App.css';
import DreamForm from './DreamForm';
import Dragula from 'react-dragula';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Button from '@material-ui/core/Button';

const About=()=>{
  return <h2>About</h2>;
}


class DreamApp extends React.Component {
  constructor(){
    super()
    this.state = {
      data:[]
    }
  }
  getDataFromAPI=()=>{
    fetch("https://tranquil-harbor-57348.herokuapp.com")
    .then((res) => res.json())
    .then((response)=>{
      this.setState({data:response});
    });
  }

  componentDidMount(){
    this.getDataFromAPI();
  }

  render() {
    return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link id="show_dreams" className="nav-item" to="/">All Dreams</Link>
            </li>
            <li>
              <Link id="create_dream" className="nav-item" to="/create">Add New Dream</Link>
            </li>
            
          </ul>
        </nav>
        <div id="content_body">
        <Switch>
          <Route path="/dream/:id" render={(props)=> (
                        <App {...props} getDataFromAPI={this.getDataFromAPI}/>
                      )}/>
                      <Route path="/dream/:id" render={(props)=> (
                        <DreamForm {...props} getDataFromAPI={this.getDataFromAPI} />
                      )} />

          
          <Route path="/create">
            <DreamForm getDataFromAPI={this.getDataFromAPI} />
          </Route>
          <Route exact path="/">
            <App getDataFromAPI={this.getDataFromAPI} data={this.state.data}/>
          </Route>
        </Switch>
        </div>
      </div>
    </Router>
  );
  }
}

export default DreamApp;