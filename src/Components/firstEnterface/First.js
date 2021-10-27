import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';  
import Navbar from "../navbar/Navbar";
import  Card from '../Card/Card'
import Footer from "./Footer";

import {col, Container, Row , Form, Button,img,Dropdown,ButtonGroup} from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './First.css'
import LoginCard from "../Login/LoginCard";
import RecruiterLogin from "../Login/RecruiterLogin";
import StudentLogin from "../Login/StudentLogin";
import RecruiterDashboard from "../navbar/Dash/RecruiterDashboard";
 
function First(){
    return(
      <Router>
        <div>  
        <div className="container">
        <div className="row">
        <div className="col-12">
        <nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">

     🎓 Centurion University🎓
    </a>
    <Dropdown as={ButtonGroup}>
  <Button variant="Secondary">Login</Button>

  <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

  <Dropdown.Menu>
    <Dropdown.Item href="/LoginCard">Admin Login</Dropdown.Item>
    <Dropdown.Item href="/RecruiterLogin">Recruiter Login</Dropdown.Item>
    <Dropdown.Item href="StudentLogin">Student Login</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
  </div>
</nav>
 </div>
  <br></br><br></br><br></br>
       
  <div class="card text-center">
  <div class="card-header">
    
  </div>
 
 <div className="row">
  <div className="col">
  <Switch>

<Route exact path='/LoginCard' component={LoginCard}></Route>
<Route exact path='/RecruiterLogin' component={RecruiterLogin}></Route>
<Route exact path='/StudentLogin' component={StudentLogin}></Route>
<Route  path="/Navbar" component={Navbar}></Route>
<Route path="/RecruiterDashboard" component={RecruiterDashboard}></Route>


    </Switch>
    </div>

  

  </div>
 
  </div>
  </div>
  <div class="card-footer text-muted">
   
  </div>
  </div>
</div>

<br></br><br></br>

<h1 className="heading_style">Contact Us☎</h1>

<div className="row">
<div className="col-4">
<Card
imgsrc="https://iisy.fi/wp-content/uploads/2018/08/user-profile-male-logo.jpg"
sname=" Prof. K V D Prakash"
title="(Head Training, Placement & Alliances)"
link=""
 />,
</div>
<div className="col-4">
<Card
imgsrc="https://iisy.fi/wp-content/uploads/2018/08/user-profile-male-logo.jpg"
sname=" Lokesh Ray"

title="(Manager Placement)"
link="#"
/>

</div>
<div className="col-4">
<Card
imgsrc="https://iisy.fi/wp-content/uploads/2018/08/user-profile-male-logo.jpg"
sname=" Somanath Pradhan"
title="(Training & Placement Officer)"
link="#"
/>

</div>












<h1 className="heading_style">List of our University Recruiter..!🎓</h1>

<div className="row">
<div className="col-4">
<Card
imgsrc="https://www.carlogos.org/logo/Tata-Group-logo-3840x2160.png"
sname=" Tata Motor"
title="This is our recruiter"
link="https://www.tata.com/"
 />,
</div>
<div className="col-4">
<Card
imgsrc="https://mocdn.gs1.org/sites/default/files/motherson_logo.jpg"
sname=" MotherSon"
title="This is our recruiter"
link="https://www.motherson.com/"
/>

</div>
<div className="col-4">
<Card
imgsrc="https://toppng.com/uploads/preview/indian-navy-logo-11562975550dcedrktvmp.png"
sname=" Indian Navy"
title="This is our recruiter"
link="https://www.joinindiannavy.gov.in/"
/>

</div>

</div>
 

 </div>

 <Footer/>
 </Router>

    )

}
export default First;