import React, { Component } from 'react'

export default class Cr4 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             flag:true
        }
    }
    
    render() {
        return (
            <React.Fragment>
              {
                  this.state.flag && <div> Hello React cr4</div>
              }  
            </React.Fragment>
        )
    }
}
