import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Axios from 'axios'

class Getdata extends React.Component{
    constructor(props){
        super(props)

        this.state ={
            data:[]
        }
    }
    componentDidMount(){
        Axios.get('http://localhost:4040/form2/get').then((response)=>{
            alert("success")
                console.log(response.data)
        })
    }
     render(){
         return <div className="container">
             <div className="row">
               <table className="table table-hover">
                   <tr>
                       <th>User name</th>
                       <th>password</th>
                   </tr>
                    {this.state.data && this.state.map((d,i)=>{
                        <tr>
                            <td>{d.username}</td>
                            <td>{d.password}</td>
                        </tr>
                    }

                    )}
               </table>
             </div>
            
         </div>
     }

}

export default Getdata



