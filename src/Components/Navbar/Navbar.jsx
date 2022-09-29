import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
<header className="header">
  <Link to="/" className="logo">SimpyText</Link>
  <input className="menu-btn" type="checkbox" id="menu-btn" />
  <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
  <ul className="menu">
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/contact">Contact</Link></li>
  </ul>
</header>
  )
}

export default Navbar