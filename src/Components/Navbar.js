import React, { useState } from "react";
import './NavBar.css';

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section id="header">
      <div>
        <div className="header container">
          <div className="nav-bar">
            <div className="brand">
              <a href="#hero">
                <h1>
                  <span> T</span>
                  umi 
                  <span> M</span>
                  ashigo
                </h1>
              </a>
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
                  <a href="#hero" data-after="Home">
                    Home
                  </a>
                </li>

                <li>
                  <a href="#services" data-after="Service">
                    Services
                  </a>
                </li>

                <li>
                  <a href="#projects" data-after="Projects">
                    Projects
                  </a>
                </li>

                <li>
                  <a href="#about" data-after="About">
                    About
                  </a>
                </li>

                <li>
                  <a href="#contact" data-after="Contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <section id="hero">
        <div className="hero container">
          <div>
            <h1 >Hello,</h1>
            <h1 >My Name is</h1>
            <h1 >Tumi</h1>

            <a href="#projects" type="button" className="cta">
              Portfolio
            </a>
          </div>
        </div>
      </section>
    </section>
  );
}

export default NavBar;


