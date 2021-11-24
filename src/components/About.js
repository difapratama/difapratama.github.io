import React from "react";

const About = () => {
  return (
    <>
      <section id="about" class="shadow-blue white-bg padding mt-0">
        <h3 class="section-title">About Me</h3>
        <div class="spacer" style={{ height: "80px" }}></div>

        <div class="row">
          <div class="col-md-3">
            <img
              src="https://res.cloudinary.com/octavarium/image/upload/v1637652743/Portfolio%20File/images/about_orrhuz.png"
              alt="about"
            />
          </div>
          <div class="col-md-9">
            <h2 class="mt-4 mt-md-0 mb-4">Hello,</h2>
            <p class="mb-0">
              I am Difa Pratama, web developer from London, United Kingdom. I
              have rich experience in web site design and building and
              customization, also I am good at wordpress.
            </p>
            <div class="row my-4">
              <div class="col-md-6">
                <p class="mb-2">
                  Name: <span class="text-dark">Difa Pratama</span>
                </p>
                <p class="mb-0">
                  Birthday: <span class="text-dark">03 January 1992</span>
                </p>
              </div>
              <div class="col-md-6 mt-2 mt-md-0 mt-sm-2">
                <p class="mb-2">
                  Location: <span class="text-dark">Jakarta, Indonesia</span>
                </p>
                <p class="mb-0">
                  Email:{" "}
                  <span class="text-dark">masfuddifapratama@gmail.com</span>
                </p>
              </div>
            </div>
            <a href="#" class="btn btn-default mr-3">
              <i class="fa fa-cloud-download"></i>Download CV
            </a>
            <a href="#" class="btn btn-alt mt-2 mt-md-0 mt-xs-2">
              <i class="fa fa-envelope"></i>Hire me
            </a>
          </div>
        </div>
      </section>
      <section id="skills" class="shadow-blue white-bg padding">
        <h3 class="section-title">My skills</h3>
        <div class="spacer" style={{ height: "80px" }}></div>

        <p class="mb-0">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics
        </p>

        <div class="row mt-5">
          <div class="col-md-6">
            <div class="skill-item">
              <div class="skill-info clearfix">
                <h4 class="float-left mb-3 mt-0">WordPress</h4>
                <span class="float-right">85%</span>
              </div>
              <div class="progress">
                <div
                  class="progress-bar"
                  role="progressbar"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  aria-valuenow="85"
                ></div>
              </div>
              <div class="spacer" data-height="50"></div>
            </div>
          </div>

          <div class="col-md-6">
            <div class="skill-item">
              <div class="skill-info clearfix">
                <h4 class="float-left mb-3 mt-0">HTML & CSS</h4>
                <span class="float-right">90%</span>
              </div>
              <div class="progress">
                <div
                  class="progress-bar"
                  role="progressbar"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  aria-valuenow="90"
                ></div>
              </div>
              <div class="spacer" data-height="50"></div>
            </div>
          </div>

          <div class="col-md-6">
            <div class="skill-item">
              <div class="skill-info clearfix">
                <h4 class="float-left mb-3 mt-0">jQuery</h4>
                <span class="float-right">60%</span>
              </div>
              <div class="progress">
                <div
                  class="progress-bar"
                  role="progressbar"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  aria-valuenow="60"
                ></div>
              </div>
              <div class="spacer d-md-none d-lg-none" data-height="50"></div>
            </div>
          </div>

          <div class="col-md-6">
            <div class="skill-item">
              <div class="skill-info clearfix">
                <h4 class="float-left mb-3 mt-0">Sketch</h4>
                <span class="float-right">70%</span>
              </div>
              <div class="progress">
                <div
                  class="progress-bar"
                  role="progressbar"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  aria-valuenow="70"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
