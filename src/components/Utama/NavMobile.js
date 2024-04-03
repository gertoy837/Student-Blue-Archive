import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavMobile.css";

const NavbarHamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleHamburger = () => {
    setIsOpen(!isOpen);
    
  };

  return (
    <nav className={`nav ${isOpen ? "open" : ""}`}>
      <div className="hamburger-container" onClick={toggleHamburger}>
        <div className={`hamburger ${isOpen ? "open" : ""}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className={`navbar-menu ${isOpen ? "open" : ""}`}>
        <div class="card-nav">
          <div className="left">
            <h1>Student Blue Archive</h1>
          </div>
          <div className="right">
            <ul>
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/character"}>Character</NavLink>
              </li>
              <li>
                <NavLink to={"/student"}>Student</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarHamburger;
