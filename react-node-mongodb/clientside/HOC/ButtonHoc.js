import React, { Component } from 'react'
import HocComp from './HOCcompound'

 class ButtonHoc extends Component {
    render() {
        return (
            <div className="container mt-5">
                <button className="btn btn-warning"onClick={this.props.Inc}>clicked me {this.props.count}  times</button>   
            </div>
        )
    }
}
export default HocComp( ButtonHoc,5)
