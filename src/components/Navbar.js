import { Link } from "react-router-dom";
import React from "react";
import "../App.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary shadow">
        <div className="container">
          <img width={50} height={50} src="https://w7.pngwing.com/pngs/349/911/png-transparent-pharmacy-technician-pharmacist-bowl-of-hygieia-medical-prescription-symbol-miscellaneous-leaf-text-thumbnail.png" />
          <Link className="navbar-brand" to="/">
            <span className="navheader">ABC PHARMACY</span> 
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active navhover" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active navhover" to="/about">
                  About Us
                </Link>
              </li>
              <button type="button" className="btn btn-primary navbutton">
              <li className="nav-item">
                <Link className="nav-link navhover" style={{color:"#fff",padding:"0px 0px",}} to="/items">
                 Items
                </Link>
              </li>
              </button>
              <button type="button" className="btn btn-primary navbutton">
              <li className="nav-item">
                <Link className="nav-link" style={{color:"#fff",padding:"0px 0px"}} to="/invoices">
                 Invoices
                </Link>
              </li>
              </button>
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;