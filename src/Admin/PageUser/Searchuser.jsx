import React, { Component } from 'react';
import AdminUserService from '../../services/AdminService/AdminUserService';

class Searchuser extends Component {
    constructor(props) {
        super(props)

        this.state = {
              id: this.props.match.params.id,
              cin: this.props.match.params.cin,
              user: {}
        }
    }
    componentDidMount(){
        AdminUserService.getByCin(this.state.cin).then( res => {
            this.setState({user: res.data});
        })
    }


       
    render() {
        return (
 
            <div>
                 <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> Afficher les détails de l'utilisateur</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label>  Prenom: </label>
                            <div> { this.state.user.prenom }</div>
                        </div>
                        <div className = "row">
                            <label>  Nom: </label>
                            <div> { this.state.user.nom }</div>
                        </div>
                        <div className = "row">
                            <label>  Nom utilisateur : </label>
                            <div> { this.state.user.username }</div>
                        </div>
                        <div className = "row">
                            <label>  Date naissance: </label>
                            <div> { this.state.user.datenaissance }</div>
                        </div>
                        <div className = "row">
                            <label>  Code postal: </label>
                            <div> { this.state.user.codepostal }</div>
                        </div>
                        <div className = "row">
                            <label>  Telephone: </label>
                            <div> { this.state.user.telephone }</div>
                        </div>
                        <div className = "row">
                            <label>  Ville: </label>
                            <div> { this.state.user.ville }</div>
                        </div>
                        <div className = "row">
                            <label>  Date d'ajout: </label>
                            <div> { this.state.user.dateajout }</div>
                        </div>
                        <div className = "row">
                            <label>  Email: </label>
                            <div> { this.state.user.email }</div>
                        </div>
                        <div className = "row">
                            <label>  Mot de passe : </label>
                            <div> { this.state.user.password }</div>
                        </div>
                        
                    </div>

                </div>
            </div>
            </div>
        );
    }
}

export default Searchuser;