import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Navbar = () => {
  return (
    <>
      <header class="left float-left shadow-dark" id="header">
        <button type="button" class="close" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        <div class="header-inner d-flex align-items-start flex-column">
          <a href="index.html">
            <img
              src="https://res.cloudinary.com/octavarium/image/upload/v1637633903/Portfolio%20File/images/logo_tbsv9v.png"
              alt="Difa Pratama"
            />
          </a>
          <a href="index.html" class="site-title dot mt-3">
            Difa Pratama
          </a>
          <span class="site-slogan">Web Developer</span>

          <nav>
            <ul class="vertical-menu scrollspy">
              <li>
                <Link to="/" class="active">
                  <i class="fa fa-home"></i>Home
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <i class="fa fa-user"></i>About
                </Link>
              </li>
              <li>
                <Link to="/services">
                  <i class="fa fa-server"></i>Services
                </Link>
              </li>
              <li>
                <Link to="/resume">
                  <i class="fa fa-graduation-cap"></i>Resume
                </Link>
              </li>
              <li>
                <Link to="#works">
                  <i class="fa fa-th"></i>Works
                </Link>
              </li>
              <li>
                <Link to="#blog">
                  <i class="fa fa-pencil"></i>Blog
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  <i class="fa fa-phone"></i>Contact
                </Link>
              </li>
            </ul>
          </nav>
          <Footer />
        </div>
      </header>
    </>
  );
};

export default Navbar;
