import React, { Component } from 'react'
import B from './B'

export default class A extends Component{
      constructor(props){
          super(props)
           this.state={
               name:"Sreevidya"
           }
    }
       fn= ()=>{
             this.setState({
                   name:"shanmukha"
             })
       }
       
    render(){
        return(
              <div>
              <button class="btn btn-warning mt-4"onClick={this.fn}>click Here</button>
              <ctx.provider value={this.state.name}>
                    <B />
              </ctx.provider>
              </div>

        )}

}
