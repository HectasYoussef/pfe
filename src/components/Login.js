import React, { Component } from 'react';
import AppNavbar from './AppNavbar';
import { Container } from 'reactstrap';
import { Form, Alert, FormGroup, Input, Label, Row, Col } from "reactstrap";
import {Button} from 'react-bootstrap';
import AuthenticationService from "../services/AuthenticationService";
import avatar from "../image/avatar.png"
import { Link } from 'react-router-dom';




class Login extends Component {

    constructor(props) {
      super(props);
  
      this.state = {
        
        email: "",
        password: "",
        
        error: ""
      };
    }
  
    changeHandler = (event) => {
      let nam = event.target.name;
      let val = event.target.value;
      this.setState({[nam]: val});
    }
   
  
    doLogin = async (event) => {
      event.preventDefault();
      
      AuthenticationService.useractive(this.state.email,this.state.password).then(
        (response)=> {
          let ac=response.active;
          console.log(this.ac);
            if(ac==1){
              AuthenticationService.signin(this.state.email,this.state.password).then(
                ()=>{
                  this.props.history.push('/profile');
                }
                
              )
            }else if(ac===0){
              sessionStorage.setItem("emailactive",this.state.email);
              this.props.history.push('/active');
            }else{
              alert("ereur");
            }       
        },
         
       );
    }
  
    render() {
      return ( 
      
        <div>
           
          <AppNavbar/>
          <Container fluid>
            <Row style={{marginTop:"20px"}}>
            <Col sm="12" md={{ size: 3, offset: 4 }}>
              <div style={{marginBottom: "10px"}}>
                  
                <img src={avatar} alt="Avatar" className="avatar center" 
                  style={{width: "50%", height: "auto"}}/>
              </div>
              <Form  onSubmit={this.doLogin}>
                <FormGroup>
                  <Label for="email"><strong>Username</strong></Label>
                  <Input autoFocus 
                    type="text"
                    name="email" id="email"
                    value={this.state.email}
                    placeholder="Enter email"
                    autoComplete="email"
                    onChange={this.changeHandler}
                  />
                </FormGroup>
  
                <FormGroup>
                  <Label for="password"><strong>Password</strong></Label>
                  <Input type="password" 
                    name="password" id="password"
                    value={this.state.password}
                    placeholder="Enter Password"
                    autoComplete="password"
                    onChange={this.changeHandler}
                  />
                </FormGroup>
  
                <Button  type="submit" variant="primary" size="lg">
                  Sign In
                </Button >
                <Link to="/rezetPasswordSendEamil">motde passe oublier</Link>

                  
              </Form>
              </Col>
            </Row>
          </Container>
        </div>);
    }
  }
  
  export default Login;