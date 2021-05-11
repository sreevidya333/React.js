import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Axios from 'axios'

class Server extends React.Component{
    constructor(props){
        super(props)

        this.state ={
            username:"",
            password:""
        }
    }
    sendData=()=>{
        let loginData ={
            username:this.state.username,
            password:this.state.password
        
    }     
    Axios.post("http://localhost:4040/form2/getDatafromclient",loginData)
    .then((responce)=>{
        alert("succesfully submited")
        console.log(responce)
    },(error)=>{
        alert(" while submitting get error")
        console.log(error)
    })
}
     render(){
         return <div> 
             <div className="container">
                 <div className="row">
                 <div className="col-sm=4"></div>
                 <div className="col-sm-4"></div>
                     <div className="col-sm-4"> <h4> Login Form</h4></div>
                </div>
                
                <div className="row mt-3">
                   <div className="col-sm-4"></div>
                    <div className="col-sm-4">        
                    <input className="form-group" type="text" placeholder="Enter user name" 
                       onChange = {(e)=>{this.setState({
                         username:e.target.value
                          })}} ref="username"></input>        
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4"></div>
                    <div className="col-sm-4"> 
                    <input className="form-group" type="password" placeholder="Enter your password" 
                       onChange = {(e)=>{this.setState({
                           password:e.target.value
                               })}} ref="password"></input>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4"></div>
                    <div className="col-sm-4">
                        <button className="btn btn-dark text-white" onClick={this.sendData}>Submit</button>
                    </div>
                </div>
             
        </div>    
         </div>
     }

}

export default Server



