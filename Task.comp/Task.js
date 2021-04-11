import React from 'react'
import Axios from 'axios'
import './Task.css'


class Taskcomp extends React.Component{
    constructor(props){
        super(props)
    
    this.state ={
      userInformation :[]
    }
 }
    
     getDatafromserver=()=>{
        this.nameRef= this.refs.uname
        this.passwordRef= this.refs.upassword
        this.emailRef= this.refs.uemail
        this.locationRef= this.refs.ulocation

        console.log(this.nameRef.value)
        console.log(this.passwordRef.value)
        console.log(this.emailRef.value)
        console.log(this.locationRef.value)
    
    Axios.get("https://jsonplaceholder.typicode.com/posts").then((response)=>{
        //   console.log(response)
            this.setState({
            userInformation:response.data
        })
    },(error)=>{
        alert("error while the response from server")
    })
    
     }
    

    render() {
        return <div>
            <h1 className="mb-4">Registration Form</h1>
        <p className="formgroup">
        <input ref="uname" className="form-control" type="text" placeholder="Enter your name" ></input>
        </p>
        <p className="formgroup">
        <input ref="upassword"className="form-control" type="password" placeholder="Enter your password" ></input>
        </p>
        <p className="formgroup">
        <input ref="uemail"className="form-control" type="text" placeholder="Enter your email" ></input>
        </p>
        <p className="formgroup">
        <input ref="ulocation"className="form-control" type="text" placeholder="Enter your location" ></input>
        </p>
        <button className="btn btn-warning" onClick={this.getDatafromserver}>submit</button>
          
         <div className="row mt-3">
            {
                this.state.userInformation.length > 0 ? 
                this.state.userInformation.map(function(element,index){
                    return <div className="col-sm-12">
                        
                         <p><b>ID</b> {element.id}</p>
                         <p><b>Title</b>{element.title}</p>
                         <p><b>Body</b>{element.body}</p>
                          </div>           

                }): <h3 className="text-danger">Data is not Available</h3>       
    
                    }        </div>
        </div>
    }
 
 
}
export default Taskcomp


