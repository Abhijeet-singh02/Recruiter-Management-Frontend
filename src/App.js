import React from 'react';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import './App.css';
import Addrecruiter from './Components/navbar/Dash/Addrecruiter'
import Navbar from './Components/navbar/Navbar';
import Card from './Components/Card/Card';
import LoginCard from './Components/Login/LoginCard'
import  First  from './Components/firstEnterface/First';
import { Nav } from 'react-bootstrap';
import RecruiterLogin from './Components/Login/RecruiterLogin';
import RecruiterDashboard from './Components/navbar/Dash/RecruiterDashboard';
import Footer from './Components/firstEnterface/Footer';
import DashboardAdmin from './Components/Admin/DashboardAdmin';



function App() {
 
  return (
<First/>
  );
}

export default App;
