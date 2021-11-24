import React from "react";

const Education = () => {
  return (
    <>
      <section id="resume" class="shadow-blue white-bg padding mt-0">
        <h3 class="section-title">Experience</h3>
        <div class="spacer" data-height="80"></div>

        <div class="timeline">
          <div class="entry">
            <div class="title">
              <span>2020 - 2021</span>
            </div>
            <div class="body">
              <h4 class="mt-0">Algoritma Data Science</h4>
              <h4>Data Processing</h4>
              <p>
                Data Science Academy for Everyone | Customized Training for
                Corporates | 4-Months Data Science Academy for Individuals.
              </p>
            </div>
          </div>
          <div class="entry">
            <div class="title">
              <span>2020 - 2020</span>
            </div>
            <div class="body">
              <h4 class="mt-0">Rubicamp Programming Bootcamp</h4>
              <h4>Fullstack Developer</h4>
              <p>
                Learning programming as fullstack developer with technology
                Node.js, Javascript, MongoDb, React Js and many more.
              </p>
            </div>
          </div>
          <div class="entry">
            <div class="title">
              <span>2007 - 2010</span>
            </div>
            <div class="body">
              <h4 class="mt-0">SMK Negeri 1 Wonosobo</h4>
              <p>Software Engineering</p>
            </div>
          </div>
          <span class="timeline-line"></span>
        </div>
      </section>
    </>
  );
};

export default Education;
