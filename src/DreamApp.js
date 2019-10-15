import React from "react";
import App from './App';
import Dream from './Dream';
import './App.css';
import Lucid from './Lucid';
import Nightmare from './Nightmare';
import Recurring from './Recurring';
import Strange from './Strange';
import Vivid from './Vivid';
import DreamForm from './DreamForm';
import SideMenu from './SideMenu';
import Dragula from 'react-dragula';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import bedIcon from './bed.svg';


const About=()=>{
  return (
    <div id="about-container">
    <h2>About DreamLog</h2>
    <p>Welcome to DreamLog!</p>
    </div>
    )
}


class DreamApp extends React.Component {
  constructor(){
    super()
    this.state = {
      dreams:[],
      lucid: [],
      nightmare: [],
      recurring: [],
      strange: [],
      vivid: []
    }
  }
  //GET ALL DREAMS:
  getDataFromAPI=()=>{
    fetch("https://tranquil-harbor-57348.herokuapp.com/dreams")
    .then((res) => res.json())
    .then((response)=>{
      this.setState({dreams:response});
    });
  }

  //GET LUCID DREAMS:
  getLucidFromAPI=()=>{
    fetch("https://tranquil-harbor-57348.herokuapp.com/dreams/islucid?isLucid=true")
    .then((res) => res.json())
    .then((response)=>{
      this.setState({lucid:response});
    });
  }

  //GET NIGHTMARES:
  getNightmareFromAPI=()=>{
    fetch("https://tranquil-harbor-57348.herokuapp.com/dreams/isnightmare?isNightmare=true")
    .then((res) => res.json())
    .then((response)=>{
      this.setState({nightmare:response});
    });
  }

   //GET RECURRING DREAMS:
  getRecurringFromAPI=()=>{
    fetch("https://tranquil-harbor-57348.herokuapp.com/dreams/isrecurring?isRecurring=true")
    .then((res) => res.json())
    .then((response)=>{
      this.setState({recurring:response});
    });
  }

   //GET STRANGE DREAMS:
  getStrangeFromAPI=()=>{
    fetch("https://tranquil-harbor-57348.herokuapp.com/dreams/isstrange?isStrange=true")
    .then((res) => res.json())
    .then((response)=>{
      this.setState({strange:response});
    });
  }

   //GET VIVID DREAMS:
  getVividFromAPI=()=>{
    fetch("https://tranquil-harbor-57348.herokuapp.com/dreams/isvivid?isVivid=true")
    .then((res) => res.json())
    .then((response)=>{
      this.setState({vivid:response});
    });
  }

  componentDidMount(){
    this.getDataFromAPI();
    this.getLucidFromAPI();
    this.getNightmareFromAPI();
    this.getRecurringFromAPI();
    this.getStrangeFromAPI();
    this.getVividFromAPI();
  }

  render() {
    return (
    <Router>
      <div>
        <nav>
          <ul>
            {/*<li> 
              <img id="bed-icon" src={bedIcon} alt={"Icon"} style={{width: "26px", height: "26px"}}/>
            </li>*/}
            <li>
            <SideMenu />
            </li>
            <li>
              <Link id="show_dreams" className="nav-item" to="/about">ABOUT</Link>
            </li>
            <li>
              <Link id="show_dreams" className="nav-item" to="/">ALL DREAMS</Link>
            </li>
            {/*<li>
                         <Link id="show_lucid" className="nav-item" to="/lucid">Lucid Dreams</Link>
                        </li>
                        <li>
                         <Link id="show_nightmare" className="nav-item" to="/nightmare">Nightmares</Link>
                        </li>
                        <li>
                         <Link id="show_recurring" className="nav-item" to="/recurring">Recurring Dreams</Link>
                        </li>
                        <li>
                        <Link id="show_strange" className="nav-item" to="/strange">Strange Dreams</Link>
                        </li>
                         <li>
                        <Link id="show_vivid" className="nav-item" to="/vivid">Vivid Dreams</Link>
                        </li>*/}
            <li>
              <Link id="create_dream" className="nav-item" to="/create">ADD NEW DREAM</Link>
            </li>
            <li></li>
          </ul>
        </nav>


        <div id="content_body">
        <Switch>
          <Route path="/dream/:id" render={(props)=> (
            <Dream {...props} getDataFromAPI={this.getDataFromAPI}/>
                      )}/>
          <Route path="/edit/dream/:id" render={(props)=> (
            <DreamForm {...props} getDataFromAPI={this.getDataFromAPI} />
                      )}/>
          <Route path="/create">
            <DreamForm getDataFromAPI={this.getDataFromAPI} />
          </Route>
          <Route exact path="/">
            <App getDataFromAPI={this.getDataFromAPI} dreams={this.state.dreams}/>
          </Route>
          <Route path="/lucid">
            <Lucid getDataFromAPI={this.getLucidFromAPI} lucidDreams={this.state.lucid}/>
          </Route>
          <Route path="/nightmare">
            <Nightmare getNightmareFromAPI={this.getNightmareFromAPI} nightmares={this.state.nightmare}/>
          </Route>
          <Route path="/recurring">
            <Recurring getRecurringFromAPI={this.getRecurringFromAPI} recurring={this.state.recurring}/>
          </Route>
          <Route path="/strange">
            <Strange getStrangeFromAPI={this.getStrangeFromAPI} strange={this.state.strange}/>
          </Route>
          <Route path="/vivid">
            <Vivid getVivdFromAPI={this.getVividFromAPI} vivid={this.state.vivid}/>
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
        </div>
      </div>
    </Router>
  );
  }
}

export default DreamApp;