import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';



class DreamForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      title: "",
      body: "",
      date: "",
      isLucid: false,
      isNightmare: false,
      isRecurring: false,
      isStrange: false,
      isVivid: false
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
    
    fetch('http://localhost:8080/dream', {
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
    })
    window.location.reload();
  }

  

  render() {

  
    return (

      <div className="form">
      {/*{ idInput }*/}
      <h3>Log a new Dream</h3>
        <TextField id="outlined-name" label="Name" className="name-field" onInput={this.onNameInput} margin="normal" variant="outlined" />
        <br/>
        <TextField id="outlined-name" label="Title" className="title-field" onInput={this.onTitleInput} margin="normal" variant="outlined" />
        <br/>
        <TextField id="outlined-name" label="Description" className="" onInput={this.onBodyInput} margin="normal" variant="outlined" />
        <br/>
        <TextField id="outlined-name" label="Date" className="" onInput={this.onDateInput} margin="normal" variant="outlined" />
        <div className="radio-inputs">
        {/*<input onInput={this.onLucidChecked} type="checkbox" name="lucid" value="lucid"/>  Lucid <br/>*/}
        <Checkbox onInput={this.onLucidChecked} value="lucid" name="lucid"/> Lucid
        {/*<input onInput={this.onNightmareChecked} type="checkbox" name="nightmare" value="nightmare"/>  Nightmare <br/>*/}
        <Checkbox onInput={this.onNightmareChecked} value="nightmare" name="nightmare"/> Nightmare
        {/*<input onInput={this.onRecurringChecked} type="checkbox" name="recurring" value="recurring"/>  Recurring <br/>*/}
        <Checkbox onInput={this.onRecurringChecked} value="recurring" name="recurring"/> Recurring<br/>
        {/*<input onInput={this.onStrangeChecked} type="checkbox" name="strange" value="strange"/>  Strange <br/>*/}
        <Checkbox onInput={this.onStrangeChecked} value="strange" name="strange"/> Strange
        {/*<input onInput={this.onVividChecked} type="checkbox" name="vivid" value="vivid"/>  Vivid <br/>*/}

        <Checkbox onInput={this.onVividChecked} value="vivid" name="vivid"/> Vivid

        </div>
        <br/>
        {/*<button onClick={this.handleCreateClick}className="submit-btn">Submit</button>*/}
        <Button onClick={this.handleCreateClick}variant="outlined" color="inherit">Submit</Button>
         {/* <Link to="/">{ buttonAction }</Link>*/}       
      </div>
    )
  }
}

export default DreamForm;