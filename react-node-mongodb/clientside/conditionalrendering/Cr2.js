import React, { Component } from 'react'

export default class Cr2 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             loggedIn:true
        }
    }
    
    render() {
       let UI;
          if(this.state.loggedIn){
              UI=<div> <h3>this is conditionalrendering method2 </h3></div>
          }else{
              UI=<div>conditionalrendering false method 2 </div>
          }

        return (
            <div>
                {UI}
            </div>
        )
    }
}
