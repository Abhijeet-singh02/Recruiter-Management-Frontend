import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';  

import './RecruiterDashboard.css'

function RecruiterDashboard() {
    return (
        <div>
            


       
        
        <body>
          
         
          <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
             <button class="navbar-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
        
            <div class="collapse navbar-collapse" id="navbarResponsive">
              <ul class="navbar-nav navbar-sidenav">
        
                  <a class="nav-link navlogo text-center" href="">

                  </a>
        
                <li class="nav-item">
                  <a class="nav-link sidefrst" href="">
                    <span class="textside">  Dashboard</span>
                  </a>
                </li>
        
                <li class="nav-item">
                  <a class="nav-link sidesecnd" href="">
                    <span class="textside">  Employee</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link sidesthrd" href="">
                    <span class="textside">  Clients</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link sidesforth" href="">
                    <span class="textside">  Jobs</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link sidesfifth" href="">
                    <span class="textside">  Quotation</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link sidesix" href="">
                    <span class="textside">  Services</span>
                  </a>
                </li>
              </ul>
              
              <ul class="navbar-nav2 ml-auto">
                <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown">Welcome WaLia</a>
                    <ul class="dropdown-menu">
                        <li class="resflset"><a href="profile.php"><i class="fa fa-fw fa-cog"></i> Edit profile</a></li>
                        <li class="divider"></li>
                        <li class="resflset"><a href="#"><i class="fa fa-fw fa-power-off"></i> Logout</a></li>
                    </ul>
                </li>
              </ul>
              
            </div>
          </nav>
        
          <div class="content-wrapper">
            <div class="container-fluid">
              <div class="row">
        
            
                <div class="col-lg-4 col-md-4 col-sm-6 col-12 mb-2 mt-4">
                    <div class="inforide">
                      <div class="row">
                        <div class="col-lg-3 col-md-4 col-sm-4 col-4 rideone">
                           
                        </div>
                        <div class="col-lg-9 col-md-8 col-sm-8 col-8 fontsty">
                            <h4>Employee</h4>
                            <h2>20</h2>
                        </div>
                      </div>
                    </div>
                </div>
        
                <div class="col-lg-4 col-md-4 col-sm-6 col-12 mb-2 mt-4">
                    <div class="inforide">
                      <div class="row">
                        <div class="col-lg-3 col-md-4 col-sm-4 col-4 ridetwo">
                           
                        </div>
                        <div class="col-lg-9 col-md-8 col-sm-8 col-8 fontsty">
                            <h4>Clients</h4>
                            <h2>120</h2>
                        </div>
                      </div>
                    </div>
                </div>
        
                <div class="col-lg-4 col-md-4 col-sm-6 col-12 mb-2 mt-4">
                    <div class="inforide">
                      <div class="row">
                        <div class="col-lg-3 col-md-4 col-sm-4 col-4 ridethree">
                           
                        </div>
                        <div class="col-lg-9 col-md-8 col-sm-8 col-8 fontsty">
                            <h4>Jobs</h4>
                            <h2>50</h2>
                        </div>
                      </div>
                    </div>
                </div>
        
            </div>
          </div>
        </div>
        
        </body>




        </div>
    )
}

export default RecruiterDashboard
