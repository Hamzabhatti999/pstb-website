import React from "react";
import './navbar.css'
export default function navigation() {
  return (

    <>
      {/* Navigation Bar */}
      <div class="navbar fixed-top navbar-expand-lg ">
        <div class="container">
          <div class="navbar-header page-scroll">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
          <a class="navbar-brand" href="/home.js">PSTB Home</a>
          </div>
        <div class="collapse navbar-collapse" id="navbarNav">
          {/* Navbar Items */}
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="/#Certification">Certification</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/#News">News & Events</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/#Partner">Partner Program</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/#Accreditation">Accreditation</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/#Certified">Certified Testers</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/#Contact">Contact</a>
            </li>
          </ul>
        </div>
        </div>
      </div>
     
    </>
  )
}
