import React, { Component } from 'react'
import ctx from './createcontext-2'

export default class GetData extends Component{
 
    constructor(props){
      super(props) 
         
      this.state ={
           data:[]
      }
    }
   getDataFromServer =()=>{
            fetch("https://jsonplaceholder.typicode.com/users").then((data)=>{
            return data.json()
            }).then((response)=>{
                // console.log(response)
            },(error)=>{
                // console.log(error)
            })

   }


   render(){
       return (
                <div>
                    <button className="btn btn-warning mt-4"onClick={this.getDataFromServer}>Get Data</button>
                         <ctx.provider value={this.state.data}>

                         </ctx.provider>
                
                
                </div>

       )
   }






}
