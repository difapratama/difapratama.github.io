import React, { Fragment } from "react";

export const Home = () => {
  return (
    <Fragment>
      <section
        id="hero"
        class="d-flex flex-column justify-content-center align-items-center"
      >
        <div class="hero-container" data-aos="fade-in">
          <h1>Masfud Difa Pratama</h1>
          <p>
            I'm{" "}
            <span
              class="typed"
              data-typed-items="Cyclist, Programmer, Funny"
            ></span>
          </p>
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
