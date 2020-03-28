import React, { Component } from 'react';
import './App.css';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      color: 'purple',
      clickCounter: 0,
    }
  }
  
  onChange = (e) => {
    this.setState({
      color: 'orange',
      clickCounter: this.state.clickCounter++
    })
    console.log("click counter ===> ", this.state.clickCounter)
  }

  
  render() {
    return (
      <div className='App'>
        <h1>Box changes color if you click</h1>
        <div className='colorBox'
        style={{backgroundColor: this.state.color}}
        onClick={this.onChange}>

        <p>click me. I dare you</p>
        </div>
      </div>
    )
  }


}

