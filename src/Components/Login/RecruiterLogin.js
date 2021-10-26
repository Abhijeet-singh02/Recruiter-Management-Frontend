import React, { Component } from 'react'
import './LoginCard.css';
import RecruiterDashboard from '../navbar/Dash/RecruiterDashboard'
import {useHistory} from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { render } from 'react-dom';
function RecruiterLogin (
  ){
    let history = useHistory();

return (
  <Router>
    <>
    <body id="bdy">
    <h1 id="adl">Recruiter Login</h1>
    <div id="frm">
    <div>
    <label htmlFor="username">Username</label>
    <input type="email"name="email"id="email" placeholder="email"
   
    required autoComplete="off"/>
    </div>

    <div>
    <label htmlFor="password">Password</label>
    <input type="password"name="password"id="psw"
    
    placeholder="password" required autoComplete="off"/>
    </div>
    <button type="submit" id="btn" onClick={() =>{history.push("/RecruiterDashboard")
  }}>Login</button>
    <button type="reset" id="btn" >
    
    Reset</button>
   
    
    </div>
    </body>
    </>
    </Router>
  )
}



 export default RecruiterLogin;