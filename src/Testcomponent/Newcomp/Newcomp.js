import React    from "react";
import Form2 from "./Newcomp.jsx";

class Newcomp extends React.Component {
  constructor(props){
    super(props)
    this.state={
      name:'',
      password:'',
      email:'',
      location:''
    }
  }
  upDateStatevalue=(event)=>{
    this.setState({
      name:event.target.value,
      password:event.target.value,
      email:event.target.value,
      // location:event.target.value
    })
  }

  render() {
    return Form2.call(this);
  }
}

export default Newcomp;
