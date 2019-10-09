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
    fetch("http://localhost:8080/dreams")
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
              <Link to="/">Show Dreams</Link>
            </li>
            <li>
              <Link to="/create">Create Dream</Link>
            </li>
            <li>
              <Link to="/update">Update Dream</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/update">
            <DreamForm action="update" getDataFromAPI={this.getDataFromAPI} />
          </Route>
          <Route path="/create">
            <DreamForm action="create" getDataFromAPI={this.getDataFromAPI} />
          </Route>
          <Route exact path="/">
            <App getDataFromAPI={this.getDataFromAPI} data={this.state.data}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
  }
}

export default DreamApp;