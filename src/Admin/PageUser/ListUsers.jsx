import React, { Component } from 'react';
import AdminUserService from '../../services/AdminService/AdminUserService';
import Pagination from '../Pagination';
import "../../App.css"
import { Button } from 'reactstrap';
import { AiFillRightSquare } from 'react-icons/ai';
class ListUsers extends Component {
    
    constructor(props){
      
        super(props);
        this.state = {
            cin: this.props.match.params.cin,
            users :[]
                     }
                     this.addUser=this.addUser.bind(this);
                     this.editUser=this.editUser.bind(this);
                     this.deleteUser=this.deleteUser.bind(this);
                     this.searchuser=this.searchuser.bind(this);
                     this.changecinHandler=this.changecinHandler.bind(this);

     }
  
  
     searchuser(cin){ 
        this.props.history.push('/search/'+ cin);
    }







    
     componentDidMount(){
        AdminUserService.getUsers().then((res)=>
        {this.setState({users : res.data});

        })
    }
    changecinHandler= (event) => {
        this.setState({cin: event.target.value});
    }
    editUser(id){
        this.props.history.push('/createUser/'+id);
    }
    addUser(){
        this.props.history.push('/createUser/-1')
    }
    deleteUser(id){
        AdminUserService.deleteUser(id).then( res => {
            this.setState({users: this.state.users.filter(user => user.id !== id)});
        });
    }
    viewUser(id){
        this.props.history.push('/viewUser/'+id);
    }
    
    render() {
        return (
            
        <div>
        <h2 className='text-center'>Liste d'utulisateur</h2>
        <div className=''>
            <button className='btn btn-primary' onClick={this.addUser}>ajoutclient</button>
        </div>
        <br></br>
        <div class="col align-self-center">
                 <div>
                 <input   value={this.state.cin}  onChange={this.changecinHandler}/>
                 <button onClick={ () => this.searchuser(this.state.cin)} className="btn btn-info">chercher </button>
                 </div>
                <table className='table table-striped table-bordered'>
                    <thead>                       
                        <tr>
                            <th> ID</th>
                            <th> Prenom </th>
                            <th> Nom</th>
                            <th> Username</th>
                            <th> Date naissance</th>
                            <th> Code postal </th>
                            <th> Telephone </th>
                            <th> Ville </th>
                            <th> Date d'ajout</th>
                            <th> CIN</th>
                            <th> Email</th>
                            <th> Password</th>
                            <th> action</th>
                       </tr>
                    </thead>
                    <tbody>
                        {
                        this.state.users.map(
                            user =>
                            <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.prenom}</td>
                            <td>{user.nom}</td>
                            <td>{user.username}</td>
                            <td>{user.datenaissance}</td>
                            <td>{user.codepostal}</td>
                            <td>{user.telephone}</td>
                            <td>{user.ville}</td>
                            <td>{user.dateajout}</td>
                            <td>{user.cin}</td>
                            <td>{user.email}</td>
                            <td>{user.password}</td>
                            <td>
                            <button onClick={ () => this.editUser(user.id)} className="btn btn-info">Modifier</button>
                            <button style={{marginLeft: "10px"}} onClick={ () => this.deleteUser(user.id)} className="btn btn-danger">Suprimer </button>
                            <button style={{marginLeft: "10px"}} onClick={ () => this.viewUser(user.id)} className="btn btn-info">View </button>
                            
                            </td>


                            </tr>

                        )
                        }
                    </tbody>

                </table>
         <Pagination/>
        </div>
    </div>
  
        );
    }
}

export default ListUsers;