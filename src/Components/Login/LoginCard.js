import React from 'react'
import './LoginCard.css';

export const LoginCard = () => {
  return (
    <>
    <body id="bdy">
    <h1 id="adl">💖Admin Login💖</h1>
    <form action="Navbar.js " method="post" id="frm">
    <div>
    <label htmlFor="username">Username</label>
    <input type="email"name="email"id="email"autoComplete="off"/>
    </div>

    <div>
    <label htmlFor="password">Password</label>
    <input type="password"name="psw"id="psw" autoComplete="off"/>
    </div>
    <button type="submit" id="btn">Login</button>
    
    </form>
    </body>
    </>
  )
}
 export default LoginCard