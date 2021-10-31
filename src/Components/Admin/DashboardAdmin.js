import React from 'react'
import { Link } from 'react-router-dom';
import './DashboardAdmin.css';


const DashboardAdmin = () => {
    return (
       <nav className="navbar">
       <h3 className="logo">Admin</h3>
       <ul className ="nav-link">
       <Link to ="/Home" className="home">
       <li>Home</li>
       </Link>
       <Link to ="/Student" className="student">
       <li>Student</li>
       </Link>
       <Link to ="/Recruiter" className="recruiter">
       <li>Recruiter</li>
       </Link>
       <Link to ="/Logout" className="logout">
       <li>Logout</li>
       </Link>
       
       </ul>
       
       </nav>
    )
}

export default DashboardAdmin;
