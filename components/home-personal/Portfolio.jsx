'use client';
import React, { useEffect } from 'react';

function Portfolio() {
  function Playing() {
    gsap.registerPlugin(ScrollTrigger);

    const cards = document.querySelectorAll('.cards .card-item');
    let stickDistance = 0;

    const firstCardST = ScrollTrigger.create({
      trigger: cards[0],
      start: 'center center',
    });

    const lastCardST = ScrollTrigger.create({
      trigger: cards[cards.length - 1],
      start: 'bottom bottom',
    });

    cards.forEach((card, index) => {
      const scale = 1 - (cards.length - index) * 0.025;
      const scaleDown = gsap.to(card, {
        scale: scale,
        transformOrigin: '50% ' + (lastCardST.start + stickDistance),
      });

      ScrollTrigger.create({
        trigger: card,
        start: 'center center',
        end: () => lastCardST.start + stickDistance,
        pin: true,
        pinSpacing: false,
        ease: 'none',
        animation: scaleDown,
        toggleActions: 'restart none none reverse',
      });
    });
  }
  useEffect(() => {
    Playing();

    // Clean up function
    return () => {
      // Dispose GSAP ScrollTrigger instances
      ScrollTrigger.getAll().forEach((instance) => instance.kill());
    };
  }, []);
  const newLocal = <div className="card-item sub-bg">
    {/* <div className="row">
      <div className="col-lg-5">
        <div className="cont">
          <div>
            <div className="mb-15">
              <a href="/portfolio-grid" className="tag">
                Figma
              </a>
              <a href="/portfolio-grid" className="tag">
                Web Design
              </a>
            </div>
            <h4>Cutter mobile app</h4>
          </div>
          <div>
            <p>
              We’re a full stack firm that can help you from strategy to
              launch, and anywhere in between.
            </p>
            <a href="" className="underline mt-15">
              <span className="text main-color sub-title">
                View Details <i className="ti-arrow-top-right"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="col-lg-7">
        <div className="img">
          <img src="/assets/imgs/works/1/4.jpg" alt="" />
        </div>
      </div>
    </div> */}
  </div>;
  return (
    <section className="work-card section-padding pb-0">
      <div className="container">
        <div className="sec-head mb-80">
          <div className="d-flex align-items-center">
            <div>
              <span className="sub-title main-color mb-5">Our Portfolio</span>
              <h3 className="fw-600 fz-50 text-u d-rotate wow">
                <span className="rotate-text">
                  Selected <span className="fw-200">Works.</span>
                </span>
              </h3>
            </div>
            <div className="ml-auto vi-more">
              <a
                href="#"
                className="butn butn-sm butn-bord radius-30"
              >
                <span>View All</span>
              </a>
              <span className="icon ti-arrow-top-right"></span>
            </div>
          </div>
        </div>
        <div className="cards">
          <div className="card-item sub-bg">
            <div className="row">
              <div className="col-lg-5">
                <div className="cont">
                  <div>
                    <div className="mb-15">
                      <a href="#" className="tag">
                        Cloud
                      </a>
                      <a href="#" className="tag">
                        ERP Development
                      </a>
                    </div>
                    <h4>Vision Plus ERP</h4>
                  </div>
                  <div>
                    <p>
                      We’re the software solution provider for vision plus.This ERP software
                      is providing many features instead of a general POS or Order Managemnet system.
                    </p>
                    <a href="#" className="underline mt-15">
                      <span className="text main-color sub-title">
                        View Details <i className="ti-arrow-top-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="img">
                  <img src="/assets/imgs/works/1/1.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="card-item sub-bg">
            <div className="row">
              <div className="col-lg-5">
                <div className="cont">
                  <div>
                    <div className="mb-15">
                      <a href="#" className="tag">
                        Cloud
                      </a>
                      <a href="#" className="tag">
                        Inventory
                      </a>
                    </div>
                    <h4>Vision Plus Inventory</h4>
                  </div>
                  <div>
                    <p>
                      We’re the software solution provider for vision plus.This is the first software solution for manage their inventory systems.
                    </p>
                    <a href="" className="underline mt-15">
                      <span className="text main-color sub-title">
                        View Details <i className="ti-arrow-top-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="img">
                  <img src="/assets/imgs/works/1/2.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="card-item sub-bg">
            <div className="row">
              <div className="col-lg-5">
                <div className="cont">
                  <div>
                    <div className="mb-15">
                      <a href="#" className="tag">
                        Taxi
                      </a>
                      <a href="#" className="tag">
                        Taxi Web App
                      </a>
                    </div>
                    <h4>Go To Airport</h4>
                  </div>
                  <div>
                    <p>
                      This is a Vehicle Rentering Syetem.user can order a hire with a preferd vehicle.
                    </p>
                    <a href="#" className="underline mt-15">
                      <span className="text main-color sub-title">
                        View Details <i className="ti-arrow-top-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="img">
                  <img src="/assets/imgs/works/1/3.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="card-item sub-bg">
            <div className="row">
              <div className="col-lg-5">
                <div className="cont">
                  <div>
                    <div className="mb-15">
                      <a href="#" className="tag">
                        Ecommerce
                      </a>
                      <a href="#" className="tag">
                        Web Design
                      </a>
                    </div>
                    <h4>Multivendor Ecommerce Platform</h4>
                  </div>
                  <div>
                    <p>
                      We have developed a multi vendor ecommerce platform.this can be use for any person,business party.
                      mainly focusing for multi vendor facility.
                    </p>
                    <a href="#" className="underline mt-15">
                      <span className="text main-color sub-title">
                        View Details <i className="ti-arrow-top-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="img">
                  <img src="/assets/imgs/works/1/4.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sec-bottom mt-100">
        <div className="main-bg d-flex align-items-center">
          <h6 className="fz-14 fw-400">
            More than <span className="fw-600"> 25+ companies</span>
            trusted us worldwide
          </h6>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
