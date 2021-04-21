import React from 'react'

class Mounting extends React.Component{
      constructor(){
        super()      
        console.log("1. I am a constructor")
      }
      static getDerivedStateFromProps(){
            console.log("2. I am a Getderivedstatefromprops")
      } 
      render(){
          console.log("3. I am a rendermethod")
          return <div>
              <h2>Welcome to lifecycle method</h2>
          </div>
      }
      componentDidMount(){
          console.log("4. I am a componentdid mount")
      }

}

export default Mounting