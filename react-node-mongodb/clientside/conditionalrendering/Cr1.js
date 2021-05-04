import React, { Component } from 'react'

export default class Cr1 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             loggedIn:false
        }
    }
    
    render() {
        if  (this.state.loggedIn){
        return <div> Hello Am LoggedIn</div>
        }else{
         return(
             <div> Hello am not LoggedIn </div>
         )
        }
    }
}
