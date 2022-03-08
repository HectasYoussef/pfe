import React, { Component } from 'react';
import AppNavbar from './AppNavbar';
import { Container } from 'reactstrap';
import { Form, Alert, FormGroup, Input, Label, Row, Col } from "reactstrap";
import {Button} from 'react-bootstrap';
import AuthenticationService from '../services/AuthenticationService';
class ActivePage extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          
          mail: sessionStorage.getItem("emailactive"),
          code: ""
        };
      }
      changeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
      }
  
      doActive = async (event) => {
        event.preventDefault();
        
        AuthenticationService.activeAccount(this.state.mail,this.state.code).then(
          (response)=> {
            console.log(this.state.code);
              if(response.result==1){
                    this.props.history.push('/signin');           
              }else{
                alert("Invalid code");
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
             
              <Form onSubmit={this.doActive}>
                
  
                <FormGroup>
                  <Label for="code"><strong>Il faut activer votre compte <div>{this.state.mail}</div></strong></Label>
                  <Input type="code" 
                    name="code" id="code"
                    value={this.state.code}
                    placeholder="Enter code"
                    autoComplete="code"
                    onChange={this.changeHandler}
                  />
                </FormGroup>
  
                <Button  type="submit" variant="primary" size="lg">
                  Sign In
                </Button >
                  
              </Form>
              </Col>
            </Row>
          </Container>

            </div>
        );
    }
}

export default ActivePage;