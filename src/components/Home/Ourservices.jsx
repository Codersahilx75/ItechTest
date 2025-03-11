import React from 'react';
import aboutImg1 from '../../assets/img/about/style_3_1.png';
import aboutImg2 from '../../assets/img/about/style_3_2.png';

export default function Ourservices() {
  return (
    <div>
      <section className="about section-padding style-3">
        <div className="top-content">
          <div className="img img-left">
            <img src={aboutImg1} alt="" />
            <div className="info-circle">
              <div className="cont">
                <h2>1,2k</h2>
                <small>Projects done</small>
              </div>
            </div>
            <div className="info-circle">
              <div className="cont">
                <h2>165</h2>
                <small>satisfied clients</small>
              </div>
            </div>
            <div className="info-circle">
              <div className="cont">
                <h2>26</h2>
                <small>awards winner</small>
              </div>
            </div>
            <div className="info-circle">
              <div className="cont">
                <h2>15</h2>
                <small>years of experience</small>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row gx-0 justify-content-end">
              <div className="col-lg-5">
                <div className="info">
                  <div className="section-head long-shape mb-40 style-3">
                    <h3>Axatech’s <span>Mission & Vision</span></h3>
                  </div>
                  <h5 className="h5">
                    “It is only when they go wrong that machines remind you how powerful they are.”
                  </h5>
                  <div className="text mb-20">
                    Axatech Co is the partner of choice for many of the world’s leading enterprises, SMEs
                    and technology challengers. We help businesses elevate their value through custom
                    software development, product design, Tally Customizations, QA and consultancy services.
                  </div>
                  <div className="text mb-70">
                    Axatech specializes in technological and IT-related services such as product
                    engineering, warranty management, Tally cloud, etc.
                  </div>
                  <a href="page-about-5.html" className="btn rounded-pill bg-blue2 sm-butn text-white">
                    <span>More About Us</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="btm-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <div className="info pe-lg-5">
                  <div className="section-head mb-40 style-3">
                    <h3>Axatech's <span>Technology</span></h3>
                  </div>
                  <div className="text mb-30">
                    Our team can assist you in transforming your business through latest tech
                    capabilities to stay ahead of the curve.
                  </div>
                  <ul>
                    <li> <i className="bi bi-star-fill me-3"></i> Latest IT Solutions & Integration With
                      Blockchain</li>
                    <li> <i className="bi bi-star-fill me-3"></i> Over 100+ Payment Gateways Support</li>
                    <li> <i className="bi bi-star-fill me-3"></i> AI Machine & Deep Learning</li>
                    <li> <i className="bi bi-star-fill me-3"></i> Dedicated Support 24/7</li>
                  </ul>
                  <a href="page-about-5.html" className="btn rounded-pill border-blue2 hover-blue2 mt-60 sm-butn">
                    <span>How We Works</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="img img-right">
            <img src={aboutImg2} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
}
