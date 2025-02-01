import React from 'react';

function Services() {
  return (
    <section className="services-clas">
      <div className="container section-padding bord-bottom-grd pt-0">
        <div className="sec-head mb-80">
          <div className="d-flex align-items-center">
            <div>
              <span className="sub-title main-color mb-5">Our Specialize</span>
              <h3 className="fw-600 fz-50 text-u d-rotate wow">
                <span className="rotate-text">
                  Featured <span className="fw-200">Services.</span>
                </span>
              </h3>
            </div>
            <div className="ml-auto vi-more">
              <a
                href="/page-services"
                className="butn butn-sm butn-bord radius-30"
              >
                <span>View All</span>
              </a>
              <span className="icon ti-arrow-top-right"></span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="item sub-bg md-mb30">
              <div className="icon-img-60 opacity-5 mb-40">
                <img src="/assets/imgs/serv-icons/3.png" alt="" />
              </div>
              <h5>Web Design & Development</h5>
              <div className="text mt-40">
                <div className="mb-10">
                  <span className="tag">Web</span>
                  <span className="tag">Development</span>
                </div>
                <p>
                  We prioritize clean design, seamless UX, intuitive interaction, scalability, 
                  performance, accessibility, responsiveness, and user satisfaction.
                </p>
              </div>
              <a href="/page-services-details" className="mt-40">
                <span className="ti-arrow-top-right"></span>
              </a>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item sub-bg md-mb30">
              <div className="icon-img-60 opacity-5 mb-40">
                <img src="/assets/imgs/serv-icons/4.png" alt="" />
              </div>
              <h5>Saas Development</h5>
              <div className="text mt-40">
                <div className="mb-10">
                  <span className="tag">Saas</span>
                  <span className="tag">Development</span>
                </div>
                <p>
                  SaaS (Software as a Service) is a cloud-based software delivery
                  model where applications are hosted and maintained by a provider and accessed by users over the internet.
                </p>
              </div>
              <a href="/page-services-details" className="mt-40">
                <span className="ti-arrow-top-right"></span>
              </a>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item sub-bg">
              <div className="icon-img-60 opacity-5 mb-40">
                <img src="/assets/imgs/serv-icons/5.png" alt="" />
              </div>
              <h5>Software Design & Development</h5>
              <div className="text mt-40">
                <div className="mb-10">
                  <span className="tag">Mobile/Desktop</span>
                  <span className="tag">Development</span>
                </div>
                <p>
                  Software Design & Development is the process of building 
                  efficient, scalable, and user-friendly applications tailored to business needs.
                </p>
              </div>
              <a href="/page-services-details" className="mt-40">
                <span className="ti-arrow-top-right"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
