import React, { Component } from 'react'

export default class Toggle extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          color: 'purple',
          clickCounter: 0,
        }
      }


    render() {
        return (
         <div className="Toggle">
            <h1>Box toggles b/w color if you click</h1>
            <div className='colorToggle'
            style={{backgroundColor: this.state.color}}
            >

            <p>Toggle me. I dare you</p>
            </div>
         </div>
           
        )
    }
}
