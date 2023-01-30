import React from "react";
import { Link } from 'react-router-dom';

import './navbar.css'
export default function navigation() {
  return (

    <>
      {/* Navigation Bar */}
    
        <div className="navbar fixed-top navbar-expand-lg" id="navigation">
          <div className="container">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon">Menu</span>
            </button>
            <div className="navbar-header">
              <Link className="navbar-brand" to="/">PSTB Home</Link>
            </div>
            <div className="collapse navbar-collapse" id="navbarNav">
              {/* Navbar Items */}
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a className="nav-link" href='/#certification'>Certification</a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/#News">News & Events</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/#Partner">Partner Program</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/accredition">Accreditation</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/testers">Certified Testers</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/#Contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
     
    </>
  )
}
