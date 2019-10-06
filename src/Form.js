import React from 'react';
import './App.css';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      body: "",
      date: "",
      isLucid: "",
      isNightmare: "",
      isRecurring: "",
      isStrange: "",
      isVivid: ""
    }
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
  }

  render() {
    return (
      <div className="form">
      <h2>Add a new Dream</h2>
        <input onInput={this.onTitleInput} className="text-field" type="text" placeholder="Title"></input>
        <br/>
        <input onInput={this.onBodyInput} className="text-field" type="text" placeholder="Description"></input>
        <br/>
        <input onInput={this.onDateInput} className="text-field" type="text" placeholder="Date"></input>
        <br/>
        <div className="radio-inputs">
        <input onInput={this.onLucidChecked} type="checkbox" name="lucid" value="lucid"/>  Lucid <br/>
        <input onInput={this.onNightmareChecked} type="checkbox" name="nightmare" value="nightmare"/>  Nightmare <br/>
        <input onInput={this.onRecurringChecked} type="checkbox" name="recurring" value="recurring"/>  Recurring <br/>
        <input onInput={this.onStrangeChecked} type="checkbox" name="strange" value="strange"/>  Strange <br/>
        <input onInput={this.onVividChecked} type="checkbox" name="vivid" value="vivid"/>  Vivid <br/>
        <br/>
        </div>
        <button onClick={this.handleCreateClick}className="submit-btn">Submit</button>
      </div>
    )
  }
}

export default Form;