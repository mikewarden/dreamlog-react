import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import pencil1 from './pencil1.svg';
import thoughtbubble2 from './thoughtbubble2.svg';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class DreamForm extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      name: "",
      title: "",
      body: "",
      date: "",
      isLucid: false,
      isNightmare: false,
      isRecurring: false,
      isStrange: false,
      isVivid: false,
      password: "phantomBlueCrust",
      userAttempt: ""
    }
  }

  onNameInput = (event) => {
    this.setState({name: event.target.value})
    console.log("Name: " + event.target.value);
  }

  onTitleInput = (event) => {
    this.setState({title: event.target.value})
    console.log("Title: " + event.target.value);
  }

  onBodyInput = (event) => {
    this.setState({body: event.target.value})
    console.log("Body: " + event.target.value);
  }

  onDateInput = (event) => {
    this.setState({date: event.target.value})
    console.log("Date: " + event.target.value);
  }

  onPasswordInput = (event) => {
    this.setState({userAttempt: event.target.value})
  }

  onLucidChecked = (event) => {
    this.setState({isLucid: event.target.checked})
    console.log("Lucid: " + event.target.checked);
  }

  onNightmareChecked = (event) => {
    this.setState({isNightmare: event.target.checked})
    console.log("Nightmare: " + event.target.checked);
  }

  onRecurringChecked = (event) => {
    this.setState({isRecurring: event.target.checked})
    console.log("Recurring: " + event.target.checked);
  }

  onStrangeChecked = (event) => {
    this.setState({isStrange: event.target.checked})
    console.log("Strange: " + event.target.checked);
  }

  onVividChecked = (event) => {
    this.setState({isVivid: event.target.checked})
    console.log("Vivid: " + event.target.checked);
  }

  handleCreateClick = (event) => {
    if (this.state.userAttempt === this.state.password) {
      fetch('https://tranquil-harbor-57348.herokuapp.com/dream', {
        method: 'post',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: this.state.name,
          title: this.state.title, 
          body: this.state.body,
          date: this.state.date,
          isLucid: this.state.isLucid,
          isNightmare: this.state.isNightmare,
          isRecurring: this.state.isRecurring,
          isStrange: this.state.isStrange,
          isVivid: this.state.isVivid
        })
      }).then(() => {
        this.props.getDataFromAPI();
        this.setState({
        name: "",
        title: "",
        body: "",
        date: "",
        isLucid: false,
        isNightmare: false,
        isRecurring: false,
        isStrange: false,
        isVivid: false,
        })
      })
    } else {
      console.log("wrong password");
      alert("Wrong Password, try again.")
    }
    // window.location.reload();
  }

  handleUpdateClick = (event) => {

    this.setState({
        id: this.state.id,
        name: this.state.name,
        title: this.state.title, 
        body: this.state.body,
        date: this.state.date,
        isLucid: this.state.isLucid,
        isNightmare: this.state.isNightmare,
        isRecurring: this.state.isRecurring,
        isStrange: this.state.isStrange,
        isVivid: this.state.isVivid,
      });
    
    fetch('https://tranquil-harbor-57348.herokuapp.com/dream/' + this.state.id, {
      method: 'put',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: this.state.name,
        title: this.state.title, 
        body: this.state.body,
        date: this.state.date,
        isLucid: this.state.isLucid,
        isNightmare: this.state.isNightmare,
        isRecurring: this.state.isRecurring,
        isStrange: this.state.isStrange,
        isVivid: this.state.isVivid,
      })
    }).then(() => {
      this.props.getDataFromAPI();
    })
  }

  componentDidMount(){
    let id = this.props.match ? this.props.match.params.id : 0;
    this.setState({ id });
  }

  render() {
    let buttonAction;
    if( this.state.id ){
      buttonAction = <Button onClick={this.handleUpdateClick} className="submit-btn" variant="outlined" color="inherit">Update Dream</Button>
    } else {
      buttonAction = <Button className="submit-btn" onClick={this.handleCreateClick} variant="outlined" color="inherit">Create Dream</Button>
    }
    return (
     <div className="form">
      <div id="svg-container">
    <img id="thought-bubble" src={thoughtbubble2} alt={"Icon"} style={{width: "60px", height: "60px"}}/>
    <img id="pencil-icon" src={pencil1} alt={"Icon"} style={{width: "60px", height: "60px"}}/>
    </div>
        <TextField label="User Name" className="name-field" onInput={this.onNameInput} margin="normal" variant="outlined" />
        <br/>
        <TextField label="Dream Title" className="title-field" onInput={this.onTitleInput} margin="normal" variant="outlined" />
        <br/>
        <TextField label="Description" className="" onInput={this.onBodyInput} margin="normal" variant="outlined" />
        <br/>
        <TextField label="Password" className="" onInput={this.onPasswordInput} margin="normal" variant="outlined" type="password" />
        <br/>
        <TextField id="date" label="Date of Dream" type="date"
        defaultValue="2019-10-21" onInput={this.onDateInput}  InputLabelProps={{shrink: true,}} margin="normal" variant="outlined"/>

        <div className="radio-inputs">
          <Checkbox onInput={this.onLucidChecked} value="lucid" name="lucid"/> Lucid
      
          <Checkbox onInput={this.onNightmareChecked} value="nightmare" name="nightmare"/> Nightmare
        
          <Checkbox onInput={this.onRecurringChecked} value="recurring" name="recurring"/> Recurring<br/>
      
          <Checkbox onInput={this.onStrangeChecked} value="strange" name="strange"/> Strange

          <Checkbox onInput={this.onVividChecked} value="vivid" name="vivid"/> Vivid

        </div>
        <br/>
       
         <Link to="/" className="submit-btn">{ buttonAction }</Link>
         <br/>
         <br/>
         <footer>Developed by Mike Warden.<br/> <a id="footer-link" href="mailto:mikewarden@mikewarden.com">mikewarden@mikewarden.com</a></footer>     
      </div>
    )
  }
}

export default DreamForm;