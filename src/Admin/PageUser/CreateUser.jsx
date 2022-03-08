import React, { Component } from 'react';
import AdminUserService from '../../services/AdminService/AdminUserService';

class CreateUser extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            prenom: "",
            nom: "",
            username: "",
            datenaissance:"",
            codepostal:"",
            telephone:"",
            ville:"",
            cin:"",
            email: "",
            password: ""
        }
        this.changeprenomHandler=this.changeprenomHandler.bind(this);
        this.changenomHandler=this.changenomHandler.bind(this);
        this.changecodepostalHandler=this.changecodepostalHandler.bind(this);
        this.changedatenaissanceHandler=this.changedatenaissanceHandler.bind(this);
        this.changeEmailHandler=this.changeEmailHandler.bind(this);
        this.changetelephoneHandler=this.changetelephoneHandler.bind(this);
        this.changeuserNameHandler=this.changeuserNameHandler.bind(this);
        this.changePasswordHandler=this.changePasswordHandler.bind(this);
        this.changecinHandler=this.changecinHandler.bind(this);
        
    }
    componentDidMount(){
        if (this.state.id== -1){
            return
        }
        else{
        AdminUserService.getuserById(this.state.id).then( (res) =>{
           let user = res.data;
           this.setState({prenom: user.prenom,
            nom: user.nom,
            username: user.username,
            datenaissance: user.datenaissance,
            codepostal: user.codepostal,
            telephone: user.telephone,
            ville : user.ville,
            cin:user.cin,
            email:user.email,
            password: user.password
           });
       });
   }}
    saveuser = (e) => {
        e.preventDefault();
        let user = {prenom: this.state.prenom,
            nom: this.state.nom,
            username:this.state.username,
            datenaissance:this.state.datenaissance,
            codepostal:this.state.codepostal,
            telephone:this.state.telephone,
            ville:this.state.ville,
            cin:this.state.cin,
            email:this.state.email,
            password:this.state.password};
        console.log('user => ' + JSON.stringify(user));
        if (this.state.id == -1){
            AdminUserService.createuser(user).then( res => {
                this.props.history.push('/ListUsers');      
            });
        }else{
            AdminUserService.updateUser(user,this.state.id).then( res => {
                this.props.history.push('/ListUsers');      
            });
              
        
        }
    }
        
        
    


    changeprenomHandler= (event) => {
        this.setState({prenom: event.target.value});
    }
    changenomHandler= (event) => {
        this.setState({nom: event.target.value});
    }
    changeEmailHandler= (event) => {
        this.setState({email: event.target.value});
    }
    changePasswordHandler= (event) => {
        this.setState({password: event.target.value});
    }
    changeuserNameHandler= (event) => {
        this.setState({username: event.target.value});
    }
    changedatenaissanceHandler= (event) => {
        this.setState({datenaissance: event.target.value});
    }
    changecodepostalHandler= (event) => {
        this.setState({codepostal: event.target.value});
    }
    changetelephoneHandler= (event) => {
        this.setState({telephone: event.target.value});
    }
    changevilleHandler= (event) => {
        this.setState({ville: event.target.value});
    }
    changecinHandler= (event) => {
        this.setState({cin: event.target.value});
    }
    cancel(){
        this.props.history.push('/ListUsers');
    }

    getTitle(){
        if(this.state.id === '-1'){
            return <h3 className="text-center">Ajout utulisateur</h3>
        }else{
            return <h3 className="text-center">Modifier utulisateur</h3>
        }
    }
    render() {
        return (
            <div>
            <h1>Formulaire d'utulisateur</h1>
            <div className="container">
               <div className="row">
                  <div className="card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                       <div className='card-body'>
                           <form>
                              
                                
                           <div className='form-group'>
                                   <label>Prenom:</label>
                                   <input placeholder="prenom" 
                                   name="prenom" 
                                   className="form-control"
                                   value={this.state.prenom} 
                                   onChange={this.changeprenomHandler} />

                               </div>
                               <div className = "form-group">
                                        <label> Nom: </label>
                                        <input placeholder="Nom" name="Nom" className="form-control" 
                                         value={this.state.nom} 
                                         onChange={this.changenomHandler}/>
                                </div>

                                <div className = "form-group">
                                        <label> Date Naissance: </label>
                                        <input placeholder="datenaissance" name="datenaissance" className="form-control" 
                                         value={this.state.datenaissance} 
                                         onChange={this.changedatenaissanceHandler}/>
                                </div>

                                <div className = "form-group">
                                        <label> Code postal: </label>
                                        <input placeholder="codepostal" name="codepostal" className="form-control" 
                                         value={this.state.codepostal} 
                                         onChange={this.changecodepostalHandler}/>
                                </div>
                                <div className = "form-group">
                                        <label> Telephone: </label>
                                        <input placeholder="telephone" name="telephone" className="form-control" 
                                         value={this.state.telephone} 
                                         onChange={this.changetelephoneHandler}/>
                                </div>
                                
                                <div className = "form-group">
                                        <label> Ville: </label>
                                        <input placeholder="ville" name="ville" className="form-control" 
                                         value={this.state.ville} 
                                         onChange={this.changevilleHandler}/>
                                </div>
                                <div className = "form-group">
                                        <label> UserName: </label>
                                        <input placeholder="User Name" name="username" className="form-control" 
                                         value={this.state.username} 
                                         onChange={this.changeuserNameHandler}/>
                                </div>
                                <div className = "form-group">
                                        <label> Cin: </label>
                                        <input placeholder="cin" name="cin" className="form-control" 
                                         value={this.state.cin} 
                                         onChange={this.changecinHandler}/>
                                </div>
                                <div className = "form-group">
                                        <label> Email Id: </label>
                                        <input placeholder="Email Address" name="email" className="form-control"
                                          value={this.state.email} 
                                          onChange={this.changeEmailHandler}/>
                                </div>
                                <div className = "form-group">
                                        <label> Password: </label>
                                        <input placeholder="Password" name="password" className="form-control" 
                                         value={this.state.password} 
                                         onChange={this.changePasswordHandler}/>
                                </div>
                                <button className="btn btn-success" onClick={this.saveuser}>Save</button>
                                <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                           </form>
                       </div>
                     
                 </div> 

               </div>
            </div>
        </div>
        );
    }
}

export default CreateUser;