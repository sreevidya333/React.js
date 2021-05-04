import React, { Component } from 'react'

 class Textcompound extends Component {
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
                 <h3 onMouseOver={this.Inc}>Hovered me{this.state.count} times</h3>
            </div>
        )
    }
}    
export default Textcompound