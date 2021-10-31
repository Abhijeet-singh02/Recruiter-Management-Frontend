import React, { Component } from 'react'
import './LoginCard.css';
import {useHistory} from "react-router-dom";
/*import {connect} from 'react-redux';
import { render } from 'react-dom';

import{authenticateUser} from '../../index';
import { Alert } from 'react-bootstrap';
class LoginCard extends Component{
  constructor(props){
    super(props);

  this.state =this.initialstate;
  }
  initialstate = {
    email:'',password:'',error:''
  };
  resetLoginCard =() =>{
this.setState(() => this.initialstate);
  };
  credentialchange = event =>{
this.setState({[event.target.name] : event.target.value});
  };
  validateUser = () => {
this.props.authenticateUser(this.state.email , this.state.password)
 setTimeout(() =>
 {
   if(this.props.auth.isLoggedIn){
     return this.props.history.push("");

   }else{
     this.resetLoginCard();
     this.setState({"error":"Invalid User"});
   }
 })
};*/

function LoginCard ({authorized}){
 

  let history = useHistory();
  //const{email ,password,error} = this.state;
return (
 
    <>
    <body id="bdy">
    <h1 id="adl">Admin Login</h1>
    <form id="frm">
    <div>
    <label htmlFor="username">Username</label>
    <input type="email"name="email"id="email" placeholder="email"
   // value={email} onChange={this.credentialchange}
    required autoComplete="off"/>
    </div>

    <div>
    <label htmlFor="password">Password</label>
    <input type="password"name="password"id="psw"
    //value={password} onChange={this.credentialchange}
    placeholder="password" required autoComplete="off"/>
    </div>
    <button type="submit" id="btn" onClick={() =>{history.push("/DashboardAdmin")
  }}>Login</button>
    <button type="reset" id="btn" >
    
    Reset</button>
   
    
    </form>
    </body>
    </>
  
  )
}


/*const mapStateToProps = state => {
  return{   
     auth:state.auth
  }
};
const mapDispatchToProps = dispatch => {
  return{
    authenticateUser: (email,password) => dispatch(authenticateUser(email,password))
  };
};
 export default connect(mapStateToProps,mapDispatchToProps) (LoginCard);*/
 export default LoginCard;