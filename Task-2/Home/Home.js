import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Home extends Component {
     render(){
        return(
            <div>
                <h1 className="text-primary ">A2N Academy</h1>
              <nav className="navbar navbar-dark bg-warning ">
                  <a href="#" className="navbar-brand text-right">
               
             
                  <div className="float:right">
                     <Link to="/" className="mx-4 text-dark ">Home</Link>
                     <Link to="/User"className="mx-4 text-dark">User </Link>
                     <Link to="/Post"className="mx-4 text-dark">Post</Link>
                     <Link to="/Comments"className="mx-4 text-dark">Comments</Link>
                      
                     </div>
                     </a>
                     </nav>
                     <h1 className="mt-5">{this.props.heading}</h1>  
                 
                    

            </div> 
    
        ) 
     }
}

export default Home