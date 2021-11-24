import { React, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClick = () => setClick(!click);
  const handleOpen = () => setOpen(!open);
  return (
    <>
      <div class="mobile-header py-2 px-3 mt-4">
        <button onClick={handleOpen} className="menu-icon mr-2">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <a href="/" class="logo">
          <img
            src="https://res.cloudinary.com/octavarium/image/upload/v1637755014/Portfolio%20File/images/difaicon_1_gc7jpq.png"
            alt="Bako Doe"
          />
        </a>
        <a href="index.html" class="site-title dot ml-2">
          Difa Pratama
        </a>
      </div>
      <header
        className={
          open
            ? "left float-left shadow-dark open"
            : "left float-left shadow-dark"
        }
        id="header"
      >
        <button type="button" class="close" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        <div class="header-inner d-flex align-items-start flex-column">
          <a href="index.html">
            <img
              src="https://res.cloudinary.com/octavarium/image/upload/v1637755014/Portfolio%20File/images/difaicon_1_gc7jpq.png"
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
                <Link to="/education">
                  <i class="fa fa-graduation-cap"></i>Education
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
