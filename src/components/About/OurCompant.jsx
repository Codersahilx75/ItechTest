import React from "react";
import intg1 from "../../assets/img/about/intg1.png";
import intg2 from "../../assets/img/about/intg2.png";
import intg3 from "../../assets/img/about/intg3.png";
import intg4 from "../../assets/img/about/intg4.png";
import intg5 from "../../assets/img/about/intg5.png";
import intgBack from "../../assets/img/about/intg_back.png";
import ipad from "../../assets/img/about/ipad.png";
import aboutLines from "../../assets/img/about/about_s4_lines.png";
import aboutBubble from "../../assets/img/about/about_s4_bubble.png";

export default function OurCompany() {
  return (
    <div>
      <section className="about section-padding style-4">
        <div className="integration">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-head text-center style-4">
                <small className="title_small">About Our Company</small>
                <h2 className="mb-20">
                  We are the perfect <br /> Integration and IT solutions{" "}
                  <span> Agency of Popular Apps </span>
                </h2>
                <p>
                  Notero integrates with popular apps. Helps you easily connect and collaborate.
                </p>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="content mb-100 pb-100 border-1 border-bottom brd-gray">
              <div className="img">
                <img src={intg1} alt="Integration 1" className="mt-30" />
              </div>
              <div className="img">
                <img src={intg5} alt="Integration 5" className="mt-60" />
              </div>
              <div className="img">
                <img src={intg4} alt="Integration 4" className="mt-20" />
              </div>
              <div className="img">
                <img src={intg3} alt="Integration 3" className="mt-80" />
              </div>
              <div className="img">
                <img src={intg2} alt="Integration 2" />
              </div>
            </div>
          </div>
          <img src={intgBack} alt="Integration Background" className="intg-back" />
        </div>
        <div className="content frs-content">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-lg-6">
                <div className="img mb-30 mb-lg-0">
                  <img src={ipad} alt="iPad Image" />
                </div>
              </div>
              <div className="col-lg-5">
                <div className="info">
                  <div className="section-head style-4">
                    <small className="title_small">Notero - Easy Notes App</small>
                    <h2 className="mb-30">
                      The Notero For <span> Creatives </span>
                    </h2>
                  </div>
                  <p className="text mb-40">
                    Stay focused and productive with a clean and clutter-free note <br /> space. The
                    flexible ways to organize your notes: hashtags, nested notebooks, pinning notes
                    to the top of the note list, etc.
                  </p>
                  <ul>
                    <li className="d-flex align-items-center mb-3">
                      <small className="icon-30 bg-gray rounded-circle color-blue4 d-inline-flex align-items-center justify-content-center me-3">
                        <i className="bi bi-tag-fill"></i>
                      </small>
                      <h6 className="fw-bold">Filtering notes using matched keywords</h6>
                    </li>
                    <li className="d-flex align-items-center mb-3">
                      <small className="icon-30 bg-gray rounded-circle color-blue4 d-inline-flex align-items-center justify-content-center me-3">
                      <i className="bi bi-arrow-repeat"></i>
                      </small>
                      <h6 className="fw-bold">Automatically sync in real time</h6>
                    </li>
                    <li className="d-flex align-items-center">
                      <small className="icon-30 bg-gray rounded-circle color-blue4 d-inline-flex align-items-center justify-content-center me-3">
                      <i className="bi bi-text-wrap"></i>
                      </small>
                      <h6 className="fw-bold">Complete note editor with rich text options</h6>
                    </li>
                  </ul>
                  <a href="page-contact-5.html" className="btn rounded-pill bg-blue4 fw-bold text-white mt-50">
                    <small> Free Register </small>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <img src={aboutLines} alt="Lines Background" className="lines" />
          <img src={aboutBubble} alt="Bubble Background" className="bubble" />
        </div>
      </section>
    </div>
  );
}
