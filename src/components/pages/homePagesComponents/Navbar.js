import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" id="main-home-navbar">
    <div className="collapse navbar-collapse " id="navbarNav">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <Link className="nav-link main-home-nav" to="/">Home <span className="sr-only">(current)</span></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link main-home-nav" to="/dashboard/doctors">Doctors</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link main-home-nav" to="/">Dental Service</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link main-home-nav text-white" to="/">Reviews</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link main-home-nav text-white" to="/">Blog</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link main-home-nav text-white" to="/">Contact Us</Link>
        </li>
      </ul>
    </div>
  </nav>
  );
};

export default Navbar;