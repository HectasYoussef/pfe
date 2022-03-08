import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AdminPage from './Admin/AdminPage';
import CreateUser from './Admin/PageUser/CreateUser';
import ListUsers from './Admin/PageUser/ListUsers';
import Searchuser from './Admin/PageUser/Searchuser';
import UpdateUser from './Admin/PageUser/UpdateUser';
import ViewUser from './Admin/PageUser/ViewUser';

import './App.css';
import ActivePage from './components/ActivePage';
import Home from './components/Home';
import Login from './components/Login';
import Profile from './components/Profile';
import ProjectManagerPage from './components/ProjectManagerPage';
import RezetPassword1 from './components/RezetPassword1';

import RezetPassword2 from './components/RezetPassword2';
import SignUp from './components/SignUp';
import UserPage from './components/UserPage';

function App() {
  return (
  
       <Router>
        <Switch>
          <Route path='/' exact={true} component={Home}/>
          <Route path='/home' exact={true} component={Home}/>
          <Route path='/signin' exact={true} component={Login} />
          <Route path='/signup' exact={true} component={SignUp}/>
          <Route path='/user' exact={true} component={UserPage}/>
          <Route path='/admin' exact={true} component={AdminPage}/>
          <Route path='/profile' exact={true} component={Profile}/>
          <Route path='/pm' exact={true} component={ProjectManagerPage}/>
          <Route path='/ListUsers' exact={true} component={ListUsers}/>
          <Route path='/createUser/:id' exact={true} component={CreateUser}/>
          <Route path='/createUser/:id' exact={true} component={UpdateUser}/>
          <Route path ="/viewUser/:id" component = {ViewUser}></Route>
          <Route path ="/search/:cin" component = {Searchuser}></Route>
          <Route path ="/active" exact={true} component = {ActivePage}></Route>
          <Route path ="/rezetPasswordSendEamil" exact={true} component = {RezetPassword1}></Route>
          <Route path ="/rezetPasswordSendCode" exact={true} component = {RezetPassword2}></Route>
        </Switch>
       </Router>
       
     
  );
}

export default App;
