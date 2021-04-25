import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom'

export default function Header() {
  return (
    <div>
      <nav id="navbar">
        <div className="logo"><img src="/static/logo.jpg" alt="" />ALPHA</div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/">About </Link></li>
          <li><Link to="/">Services</Link></li>
          <li><Link aria-current="page" to="/contact">Contact Us</Link></li>
        </ul>
      </nav>
    </div>
  )
}
