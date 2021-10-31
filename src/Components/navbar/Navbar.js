import React,{Component} from "react";

import { NavItem } from "react-bootstrap";
import{ Menuitems} from "./Menuiteams"
import { Button } from "../Button";
import'./navbar.css'
import LoginCard from '../Login/LoginCard'
class Navbar extends React.Component{
  
  state ={clicked:false}
  handleClick = () => {
      this.setState({clicked: !this.state.clicked})
  }

    render(){
        return(
            <div>
            
            <nav className="NavbarItems">
          
            <h1 className="navbar-logo">Recruiter</h1>
            <div className="menu-icon" onClick={this.handleClick}>
            <i className={this.state.clicked ? 'fa fa-times': 'fa fa-bars'}></i>
            </div>
            <ul className={this.state.clicked ? 'nav-menu active' :
        'nav-menu'}>
            {Menuitems.map((Item,index) =>{
                return(
                    <li key={index}>
                    <a className={Item.cName} href={Item.url}>
                    {Item.title}
                    </a>
                    </li>
             ) }
             )}
           </ul>
            <Button>Logout</Button>
            
            </nav>
        
            </div>
        )
        
    }
}

export default Navbar;