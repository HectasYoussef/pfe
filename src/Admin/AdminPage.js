import React, { Component } from 'react';
import "../App.css"
import { AiFillHome } from "react-icons/ai"
import { BsFillPeopleFill } from "react-icons/bs";
import ListUsers from './PageUser/ListUsers';
import AdminUserService from '../services/AdminService/AdminUserService';

class AdminPage extends Component {
    
    render() {
        return (
   <div>
    
            





        <div>
          <h2 className='text-center'>Liste d'utulisateur</h2>
          <div className=''>
              <button className='btn btn-primary' onClick={this.addUser}>ajoutclient</button>
          </div>
          <br></br>
          <div class="col align-self-center">
                  <table className='table table-striped table-bordered'>
                      <thead>
                          <tr>
                              <th> Email </th>
                              <th> First Name</th>
                              <th> Last Name</th>
                              <th> Password</th>
                              <th> Username</th>
                              <th> action</th>

                          </tr>
                      </thead>
                      <tbody>
                          {
                          this.state.users.map(
                              user =>
                              <tr key={user.id}>
                              <td>{user.email}</td>
                              <td>{user.firstname}</td>
                              <td>{user.lastname}</td>
                              <td>{user.password}</td>
                              <td>{user.username}</td>
                              <td>
                              
                              </td>


                              </tr>

                          )
                          }
                      </tbody>

                  </table>

          </div>
      </div>
    
            </div>     
   
      
        );
    }
}

export default AdminPage;