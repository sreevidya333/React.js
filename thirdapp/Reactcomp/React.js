import React from 'react'


class Third extends React.Component{
    constructor(props){
        super(props)
      this.state={
          count:0
      }
    }
      upDateCountValue=()=>{
          this.setState({count:this.state.count+1})
      }


      
    
    render() {
       return  ( <div>
        
        <button className="btn btn-primary mt-4"onclick={this.upDateCountValue}>click on me{this.state.count}</button>

       </div>
    )}
    
}

export default Third