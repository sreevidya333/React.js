import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Axios from 'axios'

class Comments extends React.Component{
    constructor(props){
        super(props)

        this.state ={
            userInformation :[]
        }
    }
    getDatafromserver=()=>{
        // alert("its working")
        Axios.get("https://jsonplaceholder.typicode.com/comments").then((response)=>{
            //   console.log(response)
                this.setState({
                userInformation:response.data
            })
        },(error)=>{
            alert("error while the response from server")
        })
    }
     render(){
         return <div className="container mt-3">
                <div className="row">
                    <button className="btn btn-info btn-outline-dark text-white" onClick={this.getDatafromserver}>Click Here</button>
                </div>
                <div className="row mt-3">
                    {
                        this.state.userInformation.length > 0 ? 
                        <table border="1 " class="table table-dark">
                            <tr>
                                <th> post id </th>
                                <th>  id </th>
                                <th> name </th>
                                <th> email </th>  
                            </tr>
                            {
                        this.state.userInformation.map(function(data,index){
                        return <tr>
                        <td>{data.postid}</td>
                        <td>{data.id}</td>
                        <td>{data.name}</td>
                        <td>{data.email}</td>
                         
                        </tr>
                        
                        })
                    }
                        </table>
                         : <h3 className="text-danger"></h3>
                    }
                </div>
         </div>
     }

}

export default Comments




