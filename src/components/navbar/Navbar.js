import React from "react";
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
    { id: 8, name: "SignUp", link: "#signup", css: "signup-btn" },
  ];

  return (
    <header className="nav-links-section">
      
      <nav className="nav-links-container">
        <div className="logo-image-container">
          <a className="nav-link-anchor">
            <img className="logo-image" src={"./assets/img/logo.svg"} />
          </a>
        </div>
        <ul className="nav-links">
          {navdata.map((item) => {
            return (
              <li className="nav-link-li">
                <a href={item.link} className={`nav-link-anchor ${item.css}`}>
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
