import React from 'react'

class Bodycomp extends React.Component{
     constructor(props){
         super(props)
     }
     render(){
         return <div className="mt-3"> 
            <div className="card bg-dark text-white">
            <div className="card-header">{this.props.title}</div>
            <div className="card-body">is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</div>
             <div className="card-footer">{this.props.footer}</div>

            </div>
         </div>
     }
}

export default Bodycomp