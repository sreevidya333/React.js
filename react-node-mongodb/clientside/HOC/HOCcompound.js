import React from 'react'

const HocComp =(Wrappedcompound,Incvalue) =>{
    class HocComp extends React.Component{
        constructor(props) {
            super(props)
        
            this.state = {
                 count:0
            }
        }
        Inc =()=>{
            this.setState({
                count:this.state.count + Incvalue
            })
        }
      render(){
          return <Wrappedcompound Inc={this.Inc} count={this.state.count} />
      }

    }

    return HocComp
}



export default HocComp