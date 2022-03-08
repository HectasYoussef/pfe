import React, { Component } from 'react';
import { Form, Alert, FormGroup, Input, Label, Row, Col } from "reactstrap";
import {Button} from 'react-bootstrap';
import { Container } from 'reactstrap';
import AuthenticationService from '../services/AuthenticationService';
class RezetPassword2 extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          
          email: sessionStorage.getItem("emailrezetpassword"),
          code:"",
          password: "",
          error: ""
        };
      }
      changeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
      }
      doRezetPassword = async (event) => {
        event.preventDefault();
        
        AuthenticationService.rezetpassword(this.state.email,this.state.code,this.state.password).then(
          (response)=> {
              if(response.result==1){
               
                    this.props.history.push('/signin');
                  alert("le mot mot de passe est changer averc succes")
              }else{
                  alert("erur")
              }  
          },
           
         );
      }
    render() {
        return (
            <div>
                 <Form onSubmit={this.doRezetPassword} >
              <Container fluid>
               <Row style={{marginTop:"20px"}}>
                <Col sm="12" md={{ size: 3, offset: 4 }}>
                <FormGroup>
                  <Label for="code"><strong>Code</strong></Label>
                  <Input autoFocus 
                    type="text"
                    name="code" id="code"
                    value={this.state.code}
                    placeholder="Enter code"
                    autoComplete="code"
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
                </Col>
                  </Row>
                 </Container>
              </Form>
            </div>
        );
    }
}

export default RezetPassword2;