import React from 'react'
import {Link, NavLink} from "react-router-dom";
import "./Navigavtion.css"
function Navigation() {
  return (
    <div>
      <nav className="navbar">
  <div calss="navbar-logo">
    <h2>XYZ Hospital</h2>
  </div>
  {/* <div className="navbar-search">
    <input type="text" placeholder="search anything...." />
    <button>Search</button>
  </div> */}
  <ul>
    <li>
      <NavLink to ="/">Home</NavLink>
    </li>
    <li>
      <NavLink to="/appointment">Appointment</NavLink>
    </li>
    <li>
      <NavLink to="depeartment">Depeartment</NavLink>
    </li>
    <li>
      <NavLink to="/about">About</NavLink>
    </li>
    <li>
      <NavLink to="/contact">Contact us</NavLink>
    </li>
  </ul>
  <div className="log-button">
  <NavLink to="/login"> <button>Login</button></NavLink>
  </div>
</nav>
    </div>
  )
}

export default Navigation
