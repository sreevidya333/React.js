import React, { Component } from 'react'
import HocComp from './HOCcompound'

 class TextHoc extends Component {
    
    render() {
        return (
            <div className="container mt-5">
                 <h3 onMouseOver={this.props.Inc}>Hovered me{this.props.count} times</h3>
            </div>
        )
    }
}    
export default HocComp(TextHoc,100)