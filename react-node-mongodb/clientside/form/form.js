import React from 'react'
import Axios from 'axios'


class Mongoformcomp extends React.Component{
    constructor(props){
        super(props)
    
    this.state ={
      username:'',
      password:''
    }
 }
  sendData=()=>{
    //    this is Json Object the data is 'uname'similar to their name.
      let loginData ={
          username:this.state.username,
          password:this.state.password
      }
    //   alert(this.state.password)
    //   alert(this.state.username)

    Axios.post("http://localhost:4040/form/getDatafromclinet",loginData)
    .then((responce)=>{
        alert("succesfully submited")
        console.log(responce)
    },(error)=>{
        alert(" while submitting get error")
        console.log(error)
    })
  }
    
    

    render() {
        return <div class="container mt-5">
            <div className="row" >
        <div className="col-sm-4"></div>
        <div className="col-sm-4">
           <h3> Loginform </h3>
        </div>
        </div>
            <div className="row mt-3">
                <div className="col-sm-4"></div>
                <div className="col-sm-4">
        <input className="form-group" type="text" placeholder="Enter your name" 
        onChange = {(e)=>{this.setState({
            username:e.target.value
        })}}></input>
        </div>
        </div>
        <div className="row mt-3">
                <div className="col-sm-4"></div>
                <div className="col-sm-4">
        <div className="formgroup">
        <input className="form-control" type="password" placeholder="Enter your password" 
        onChange = {(e)=>{this.setState({
            password:e.target.value
        })}}
        ></input>
        </div>
        </div>
        <div className="row mt-3">
                <div className="col-sm-4"></div>
                <div className="col-sm-4">       
        <button className="btn btn-warning " onClick={this.sendData}>submit</button>
     </div>
    </div>
    </div>                 
   </div>
                       
   }
 
 
}
export default Mongoformcomp