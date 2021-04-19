import React, { Component } from 'react'
import ctx from './context'

export default class E extends Component{
    render(){
        return(
              <div>
               <h2>My name is:</h2>
               <ctx.consumer> 
            {
                   (name)=>{
                     return <span>{name}</span>
                   }
            }
               </ctx.consumer>
                  
              </div>

        )
    }
}

