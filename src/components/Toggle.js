import React, { Component } from 'react'

export default class Toggle extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          color: 'cyan',
          clickCounter: 0,
        }
      }

      toggleMe = () => {
        //needing and if/else or ternary operator to toggle b/w colors 
      }


    render() {
        return (
         <div className="Toggle">
            <h1>Box toggles b/w color if you click</h1>
            <div className='colorToggle'
            style={{backgroundColor: this.state.color}}
            // Setting event method 1st to make it above and make sure it is calling the proper functionalty
            onClick={this.toggleMe}
            >

            <p>Toggle me. I dare you</p>
            </div>
         </div>
           
        )
    }
}
