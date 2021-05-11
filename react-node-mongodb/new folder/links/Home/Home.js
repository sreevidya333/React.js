import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Home extends Component {
     render(){
        return(
            <div>
            
              <nav className="navbar navbar-dark bg-dark">
                  <a href="#" className="navbar-brand ">
               
             
                  <div className="text-right">
                     <Link to="/" className="mx-4 text-white ml-5">Home</Link>
                     <Link to="/server"className="mx-4 text-white  ">server </Link>
                     <Link to="/getdata"className="mx-4 text-white">getdata</Link>
                     <Link to="/login"className="mx-4 text-white">login</Link>
                      
                     </div>
                     </a>
                     </nav>
                     <h1 className="mt-5"></h1>  
                 
                    

            </div> 
    
        ) 
     }
}

export default Home