import "./Newcomp.css";
import React from "react";

function Form2() {
  return (
    <div className="newcomp">
      <h1 className="mb-4">New Register Form</h1>
        <p className="formgroup">
        <input onChange={(event)=>{this.upDateStatevalue(event)}} className="form-control" type="text" placeholder="Enter your name" ></input>
        </p>
        <p className="formgroup">
        <input onChange={(event)=>{this.upDateStatevalue(event)}}className="form-control" type="password" placeholder="Enter your password" ></input>
        </p>
        <p className="formgroup">
        <input onChange={(event)=>{this.upDateStatevalue(event)}} className="form-control" type="text" placeholder="Enter your email" ></input>
        </p>
        <p className="formgroup">
        <input onChange={(event)=>{this.setState({...this.state,location:event.target.value})}} className="form-control" type="text" placeholder="Enter your location" ></input>
        </p>
        <button className="btn btn-primary" onClick={this.Information}>submit</button>

    </div>
  );
};

export default Form2;
