import React from 'react'
class Testcomp  extends React.Component{
    constructor(props){
        super(props)
    }
    Information =()=>{
         this.nameRef= this.refs.uname
         this.passwordRef= this.refs.upassword
         this.emailRef= this.refs.uemail
         this.locationRef= this.refs.ulocation

         console.log(this.nameRef.value)
         console.log(this.passwordRef.value)
         console.log(this.emailRef.value)
         console.log(this.locationRef.value)
       
        //  store the values in localstorage
         localStorage.setItem('uname',this.nameRef.value)
         localStorage.setItem('upassword',this.passwordRef.value)
         localStorage.setItem('uemail',this.emailRef.value)
         localStorage.setItem('ulocation',this.locationRef.value)
        }
        render(){
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
            <button className="btn btn-primary" onClick={this.Information}>submit</button>
    
    
            </div>
        }
    }  
    
    export default Testcomp
