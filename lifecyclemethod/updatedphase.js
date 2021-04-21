import React from 'react'

class Updated extends React.Component{
    constructor(){
        super()
      
        this.state={
            name:"Sreevidya"
        }
    
    }
   static getDerivedStateFromProps(){
       console.log("1. I am A getderivedfromprops")
   }

    shouldComponentUpdate(){
        console.log("2. I am a shouldcomponentupdate")
        return true
    }
    getSnapshotBeforeUpdate(){
        console.log("3.I am a getsnapshotbeforupdate")
    }
   render(){
       return (
           <div className="bg-danger text-white">
             
             <button className="btn btn-primary mt-4 mb-4" onClick={()=>{this.setState({
                 name:"manimedhamsh"
             })}}>Updated my state</button>
             <h4 className="mb-4">{this.state.name}</h4>
           </div>
        
       )
   }
   componentDidUpdate(){
       console.log("4. I am a componentdidupdate")
   }
}

export default Updated