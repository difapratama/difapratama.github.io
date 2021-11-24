import React from "react";

const Services = () => {
  return (
    <>
      <section id="services" class="shadow-blue white-bg padding mt-0">
        <h3 class="section-title">Services</h3>
        <div class="spacer" style={{ height: "80px" }}></div>

        <div class="row">
          <div class="col-md-4 col-sm-6">
            <div class="service-item text-center">
              <i class="fa fa-globe"></i>
              <h4 class="my-3">Development</h4>
              <p class="mb-0">Lorem ipsum dolor sit amet consectetuer elit.</p>
            </div>
            <div class="spacer" data-height="20"></div>
          </div>

          <div class="col-md-4 col-sm-6">
            <div class="service-item text-center">
              <i class="fa fa-chemistry "></i>
              <h4 class="my-3">Design</h4>
              <p class="mb-0">Lorem ipsum dolor sit amet consectetuer elit.</p>
            </div>
            <div class="spacer" data-height="20"></div>
          </div>

          <div class="col-md-4 col-sm-6">
            <div class="service-item text-center">
              <i class="fa fa-map-signs "></i>
              <h4 class="my-3">Advertising</h4>
              <p class="mb-0">Lorem ipsum dolor sit amet consectetuer elit.</p>
            </div>
            <div class="spacer" data-height="20"></div>
          </div>

          <div class="col-md-4 col-sm-6">
            <div class="service-item text-center">
              <i class="fa fa-rocket "></i>
              <h4 class="my-3">SEO</h4>
              <p class="mb-0">Lorem ipsum dolor sit amet consectetuer elit.</p>
            </div>
            <div class="spacer d-md-none d-lg-none" data-height="20"></div>
          </div>

          <div class="col-md-4 col-sm-6">
            <div class="service-item text-center">
              <i class="fa fa-clone "></i>
              <h4 class="my-3">Copy Write</h4>
              <p class="mb-0">Lorem ipsum dolor sit amet consectetuer elit.</p>
            </div>
            <div class="spacer d-md-none d-lg-none" data-height="20"></div>
          </div>

          <div class="col-md-4 col-sm-6">
            <div class="service-item text-center">
              <i class="fa fa-comments "></i>
              <h4 class="my-3">Support</h4>
              <p class="mb-0">Lorem ipsum dolor sit amet consectetuer elit.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
