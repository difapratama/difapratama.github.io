import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section
        class="hero background parallax shadow-dark d-flex align-items-center"
        id="home"
        data-image-src="https://via.placeholder.com/900x600"
      >
        <div class="cta mx-auto mt-2">
          <h1 class="mt-0 mb-4">
            I’m Difa Pratama<span class="dot"></span>
          </h1>
          <p class="mb-4">
            Halo, saya Difa! Saya mempunyai passion di dunia dunia pemrograman.
            Saya suka belajar banyak hal-hal baru, apalagi tentang teknologi
            informasi.
          </p>
          <Link to="/" className="btn btn-default btn-lg mr-3">
            <i class="fa fa-th"></i>View Portfolio
          </Link>
          <div
            class="spacer d-md-none d-lg-none d-sm-none"
            style={{ height: "10px" }}
          ></div>
          <Link to="/" class="btn btn-border-light btn-lg">
            <i class="fa fa-envelope"></i>Hire me
          </Link>
        </div>
        <div class="overlay"></div>
      </section>
    </>
  );
};

export default Home;
