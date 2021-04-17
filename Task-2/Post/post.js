import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Axios from 'axios'

class Post extends React.Component{
    constructor(props){
        super(props)

        this.state ={
            userInformation :[]
        }
    }
    getDatafromserver=()=>{
        // alert("its working")
        Axios.get("https://jsonplaceholder.typicode.com/posts").then((response)=>{
            //   console.log(response)
                this.setState({
                userInformation:response.data
            })
        },(error)=>{
            alert("error while the response from server")
        })
    }
     render(){
         return <div className="container mt-3">
                <div className="row">
                    <button className="btn btn-danger btn-outline-warning text-white" onClick={this.getDatafromserver}>Click here</button>
                </div>
                <div className="row mt-3">
                    {
                        this.state.userInformation.length > 0 ? 
                        this.state.userInformation.map(function(element,index){
                            return <div className="col-sm-3">
                            <div className="card border-primary mb-5">
                             <div className="card-header bg-dark text-white">
                                <h4>user Information</h4> 
                                 </div> 
                              <div className="card-body bg-danger">
                                 <p><b>NAME:</b> {element.name}</p>
                                 <p><b>EMAIL:</b>{element.email}</p>
                                 <p><b>ID:</b>{element.id}</p>
                                 


                                  </div>     
                                </div>
                                </div>
                        })
                         : <h3 className="text-danger"></h3>
                    }
                </div>
         </div>
     }

}

export default Post



