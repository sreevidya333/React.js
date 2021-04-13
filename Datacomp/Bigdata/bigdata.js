import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Bigdata extends Component{

    render(){
        return(
           <div>
                <nav className="navbar navbar-dark bg-dark">
                  <a href="#" className="navbar-brand"> React Routing Application</a>
               </nav>
               <div className="text-right">
                     <Link to="/"className="mx-4 text-dark">Home</Link>
                     <Link to="/react"className="mx-4 text-dark">React js</Link>
                     <Link to="/angular"className="mx-4 text-dark">Angular</Link>
                     <Link to="/bigdata"className="mx-4 text-dark">Bigdata</Link>
                     </div>
              
               <h2 className="mt-5">Welcome to Bigdata</h2>
           </div>

        )
    }
}

export default Bigdata