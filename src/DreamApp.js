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
import pencil1 from './pencil1.svg';
import thoughtbubble2 from './thoughtbubble2.svg';


const About=()=>{
  return (
    <div id="about-container">
     <div id="svg-container">
    <img id="thought-bubble" src={thoughtbubble2} alt={"Icon"} style={{width: "60px", height: "60px"}}/>
    <img id="pencil-icon" src={pencil1} alt={"Icon"} style={{width: "60px", height: "60px"}}/>
    </div>
    <h1>About DreamLog</h1>
    <p>Dreams- we all have them. While deep in the abyss of the minds eye, we encounter the strangest things. These things are often so weird that they challenge our perceptions well into the waking state. However as we burst into this reality, the memory of these strange events become foggy. One feels compelled to write down such events, but might be comprimised by a phenomenon known as 'morning hands', where its difficult to make a fist, let alone hold a pen. That's where DreamLog comes in. After battling the creatures of the abyss or confronting the unknown, one can simply type out the recollection of a dream into that trusty device within meer inches of reach. One can also look at the dreams of others, and filter through different types of dreams, like nightmares, or recurring dreams and see what's going on in the collective ether facilitated in dream-sleep. Had a crazy dream? Log it to DreamLog and share your dreams with the world! </p>
    <br/>
      <footer>Developed by Mike Warden.<br/> <a id="footer-link" href="mailto:mikewarden@mikewarden.com">mikewarden@mikewarden.com</a></footer>
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
          <li>
              <Link id="show_dreams" className="nav-item" to="/">ALL DREAMS</Link>
            </li>
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
              <Link id="create_dream" className="nav-item" to="/create">ADD NEW DREAM</Link>
            </li>         
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