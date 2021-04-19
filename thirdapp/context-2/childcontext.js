import React, { Component } from 'react'
import ctx from './createcontext-2'


export default class Childcontext extends Component{
    render(){
        return (
              <div>
                  <ctx.consumer>
                      {
                        (data)=>{
                            return <table>
                                <tr>
                                    <th>ID</th>
                                    <th>NAME</th>
                                    <th>EMAIL</th>
                                </tr>
                                {
                                    data.map((userdata,index)=>{
                                        return <tr>
                                            <td>{userdata.id}</td>
                                            <td>{userdata.name}</td>
                                            <td>{userdata.email}</td>
                                        </tr>
                                    })
                                }
                            </table>
                        }
                      }
                  </ctx.consumer>
              </div>

        )
    }
}