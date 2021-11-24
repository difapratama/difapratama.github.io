import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [show, setShow] = useState(false);

  const handleClick = () => setClick(!click);
  const handleShow = () => setShow(!show);
  return (
    <>
      <header id="header" className={show ? "header-top" : null}>
        <div className="container">
          <h1>
            <a href="index.html">Masfud Difa Pratama</a>
          </h1>
          <h2>
            I'm a passionate <span>Software Engineer</span> from Indonesia
          </h2>

          <nav
            id="navbar"
            className={click ? "navbar navbar-mobile" : "navbar"}
          >
            <ul>
              <li>
                <Link
                  to="/"
                  className={click ? "nav-link active" : "nav-link"}
                  onClick={handleShow}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className={click ? "nav-link active" : "nav-link"}
                  onClick={handleShow}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/resume"
                  className={click ? "nav-link active" : "nav-link"}
                  onClick={handleShow}
                >
                  Resume
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className={click ? "nav-link active" : "nav-link"}
                  onClick={handleShow}
                >
                  Services
                </Link>
              </li>
              <li>
                <a
                  className={click ? "nav-link active" : "nav-link"}
                  onClick={handleShow}
                  href="#portfolio"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  className={click ? "nav-link active" : "nav-link"}
                  onClick={handleShow}
                  href="#contact"
                >
                  Contact
                </a>
              </li>
            </ul>
            <div onClick={handleClick}>
              <i
                className={
                  click
                    ? "bi mobile-nav-toggle bi-x"
                    : "bi bi-list mobile-nav-toggle"
                }
              />
            </div>
          </nav>

          <div className="social-links">
            <Link to="/" className="twitter">
              <i className="bi bi-twitter"></i>
            </Link>
            <Link
              to="https://web.facebook.com/brandals.ephedrine/"
              className="facebook"
            >
              <i className="bi bi-facebook"></i>
            </Link>
            <Link
              to="https://www.instagram.com/octavarium__/"
              className="instagram"
            >
              <i className="bi bi-instagram"></i>
            </Link>
            <Link to="/" className="linkedin">
              <i className="bi bi-linkedin"></i>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
