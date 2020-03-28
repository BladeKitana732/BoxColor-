import React, { Component } from 'react';
import './App.css';
import Toggle from './components/Toggle'


export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      color: 'purple',
      clickCounter: 0,
    }
  }
  
  onChange = () => {
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

        <p>Click me. I dare you</p>
        </div>

        <Toggle />
      </div>
    )
   }

}

