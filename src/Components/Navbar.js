import React, { useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section id="header">
      <div>
        <div className="header container-fluid">
          <div className="nav-bar">
            <div className="brand">
              <Link to="/">
                <h1>
                  <span> T</span>
                  umi
                  <span> M</span>
                  ashigo
                </h1>
              </Link>
            </div>

            <div
              className={`nav-list ${isOpen ? "open" : ""}`}
              onClick={toggleMenu}
            >
              <div className="hamburger">
                <div className="bar"></div>
              </div>

              <ul>
                <li>
                  <Link to="/services" data-after="Service">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/projects" data-after="Projects">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link to="/about" data-after="About">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/contact" data-after="Contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {isHomePage && (
        <section id="hero">
          <div className="hero container-fluid">
            <div>
              <h1>Hello,</h1>
              <h1>My Name is</h1>
              <h1>Tumi</h1>
              <Link to="/Projects" type="button" className="cta">
                Portfolio
              </Link>
            </div>
          </div>
        </section>
      )}
    </section>
  );
}

export default NavBar;
