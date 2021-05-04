import React, { Component } from 'react'

 class Buttoncompound extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    Inc =()=>{
        this.setState({
            count:this.state.count +1
        })
    }
    
    render() {
        return (
            <div className="container mt-5">
                <button className="btn btn-warning"onClick={this.Inc}>clicked me {this.state.count}  times</button>   
            </div>
        )
    }
}
export default Buttoncompound
