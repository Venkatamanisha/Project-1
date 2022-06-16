import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Menu
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Booking">
                  About Us
                </NavLink>
              </li>
            </ul>
            <NavLink className="navbar-brand mx-auto fw-bold" to="/">
              Foody
            </NavLink>
            
            <NavLink className="nav-link" to="/Login">
            <button type="button" className="btn btn-outline-primary ms-auto " data-bs-toggle="modal" data-bs-target="#exampleModal">
  <span className="fa fa-sign-in me-1"></span>Login
</button>
                </NavLink>
                <NavLink className="nav-link" to="/Signin">
                <button type="button" className="btn btn-outline-primary ms-2 " data-bs-toggle="modal" data-bs-target="#exampleModal">
  <span className="fa fa-user-plus  me-1"></span>Register
</button>
                </NavLink>
                <NavLink to ="/Cart" className='btn btn-outline-primary ms-2'>
            <span className='fa fa-shopping-cart me-1'></span>(0)</NavLink> 
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
