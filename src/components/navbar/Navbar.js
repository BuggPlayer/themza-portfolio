import React, { useState } from "react";
import "./navbar.css";
function Navbar() {
  const navdata = [
    { id: 1, name: "Home", link: "#home" },
    { id: 2, name: "Services", link: "#services" },
    { id: 3, name: "Pricing", link: "#pricing" },
    { id: 4, name: "Team", link: "#team" },
    { id: 5, name: "Clients", link: "#clients" },
    { id: 6, name: "Contact", link: "#contact" },
    { id: 7, name: "Login", link: "#login" },
    // { id: 8, name: "SignUp", link: "#signup", css: "signup-btn" },
  ];

  const [showHeader, setShowHeader] = useState(false);

  return (
    <header
      className={
        showHeader ? "fit-window-height nav-links-section" : "nav-links-section"
      }
    >
      <nav className="nav-links-container">
        <div className="logo-image-container">
          <a
            onClick={() => setShowHeader(false)}
            href="#home"
            className="nav-link-anchor"
          >
            <img
              className="logo-image"
              src={"./assets/img/logo.png"}
              alt="logo"
            />
          </a>
          <span
            className={
              showHeader
                ? "nav-link-anchor close show-class"
                : "nav-link-anchor close"
            }
          >
            <img
              onClick={() => setShowHeader(false)}
              className="menu-icon"
              src={"./assets/img/close.svg"}
              alt="close"
            />
          </span>
          <span
            className={
              showHeader
                ? "nav-link-anchor hamburger"
                : "nav-link-anchor hamburger show-class"
            }
          >
            <img
              onClick={() => setShowHeader(true)}
              className="menu-icon"
              src={"./assets/img/hamburger.svg"}
              alt="close"
            />
          </span>
        </div>
        <ul className={showHeader ? "flex-display nav-links" : "nav-links"}>
          {navdata.map((item, index) => {
            return (
              <li key={index} className="nav-link-li">
                <a
                  onClick={() => setShowHeader(false)}
                  href={item.link}
                  className={`nav-link-anchor ${item.css}`}
                >
                  {item.name}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
