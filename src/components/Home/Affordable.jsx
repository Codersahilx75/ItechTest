import React from "react";

// Importing Images
import testiLines from "../../assets/img/testimonials/testi3_lines.png";
import team1 from "../../assets/img/team/1.jpg";
import team2 from "../../assets/img/team/2.jpg";
import team3 from "../../assets/img/team/3.jpg";
import team4 from "../../assets/img/team/4.jpg";
import team5 from "../../assets/img/team/5.jpg";

export default function Affordable() {
  return (
    <div>
      <section className="pricing style-3">
        <div className="container">
          <div className="content section-padding">
            <div className="row">
              <div className="col-lg-4">
                <div className="info">
                  <div className="section-head style-3 mb-40">
                    <h3>
                      {" "}
                      Affordable <span> Price </span>
                    </h3>
                  </div>
                  <small className="text text-gray mb-30">
                    Kick-start your project with our pricing plan. We handle all
                    the practical aspects related to hiring and hosting your
                    team at our premises, thus saving you half a cost and a lot
                    of efforts. Lorem ispum dolor sit amet
                  </small>
                  <small className="text text-gray d-block">
                    Not find your plan, need a tailored-plan? <br />
                    <a
                      href="#"
                      className="color-blue2 text-decoration-underline"
                    >
                      Contact
                    </a>{" "}
                    us now!
                  </small>
                  <a
                    href="page-services-5.html"
                    className="btn rounded-pill border-blue2 hover-blue2 mt-60 sm-butn"
                  >
                    <span>Our Services</span>
                  </a>
                </div>
              </div>
              <div className="col-lg-7 offset-lg-1">
                <div className="price-cards">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="pricing-card style-3 mb-30 mb-lg-0">
                        <div className="card-head">
                          <div className="title">
                            <h4>Standard</h4>
                            <small>Basic features</small>
                          </div>
                          <div className="price">
                            <h5>$29</h5>
                            <small>per month</small>
                          </div>
                        </div>
                        <div className="card-body">
                          <ul>
                            <li>
                              <i className="bi bi-check"></i>{" "}
                              <small>3 Projects</small>
                            </li>
                            <li>
                              <i className="bi bi-check"></i>{" "}
                              <small>6 Months Support & SEO</small>
                            </li>
                            <li>
                              <i className="bi bi-check"></i>{" "}
                              <small>Basic Dashboard</small>
                            </li>
                          </ul>
                        </div>
                        <a
                          href="page-contact-5.html"
                          className="btn rounded-pill bg-blue2 sm-butn w-100 text-white"
                        >
                          <span>Get Started Now</span>
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="pricing-card dark-card style-3">
                        <div className="card-head">
                          <div className="title">
                            <h4>
                              Pro <small>Recommended</small>
                            </h4>
                            <small>Premium features</small>
                          </div>
                          <div className="price">
                            <h5>$59</h5>
                            <small>per month</small>
                          </div>
                        </div>
                        <div className="card-body">
                          <ul>
                            <li>
                              <i className="bi bi-check"></i>{" "}
                              <small>Unlimited Projects</small>
                            </li>
                            <li>
                              <i className="bi bi-check"></i>{" "}
                              <small>
                                Lifetime Support & SEO Experts Consult
                              </small>
                            </li>
                            <li>
                              <i className="bi bi-check"></i>{" "}
                              <small>Advance Dashboard</small>
                            </li>
                            <li>
                              <i className="bi bi-check"></i>{" "}
                              <small>Data Security & Backup</small>
                            </li>
                            <li>
                              <i className="bi bi-check"></i>{" "}
                              <small>Cloud Hosting & Domain</small>
                            </li>
                          </ul>
                        </div>
                        <a
                          href="page-contact-5.html"
                          className="btn rounded-pill bg-blue2 sm-butn w-100 text-white"
                        >
                          <span>Get Started Now</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img src={testiLines} alt="" className="testi_lines w-100" />
          </div>
        </div>
      </section>

      {/* ====== Start Team Section ====== */}
      <section className="team section-padding style-1 team-blue2">
        <div className="container">
          <div className="section-head long-shape style-3 text-center mb-70">
            <h3>
              Meet Our <span>Amazing Team</span>
            </h3>
          </div>
          <div className="content">
            <div className="team_box">
              <div className="avatar">
                <img src={team1} alt="" />
              </div>
              <div className="info">
                <h6>
                  <a href="#">Michael Edwards</a>
                </h6>
                <small>CEO Founder</small>
                <div className="social_icons">
                  <a href="#">
                    <i className="bi bi-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-linkedin"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-github"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="team_box">
              <div className="avatar">
                <img src={team2} alt="" />
              </div>
              <div className="info">
                <h6>
                  <a href="#">Bobby Kane</a>
                </h6>
                <small>CTO</small>
                <div className="social_icons">
                  <a href="#">
                    <i className="bi bi-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-github"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="team_box">
              <div className="avatar">
                <img src={team3} alt="" />
              </div>
              <div className="info">
                <h6>
                  <a href="#">Robert Downey Jr</a>
                </h6>
                <small>Project Manager</small>
                <div className="social_icons">
                  <a href="#">
                    <i className="bi bi-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-linkedin"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-github"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="team_box">
              <div className="avatar">
                <img src={team4} alt="" />
              </div>
              <div className="info">
                <h6>
                  <a href="#">Andrew Robertson</a>
                </h6>
                <small>Marketing Leader</small>
                <div className="social_icons">
                  <a href="#">
                    <i className="bi bi-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="team_box">
              <div className="avatar">
                <img src={team5} alt="" />
              </div>
              <div className="info">
                <h6>
                  <a href="#">Alexander Avery</a>
                </h6>
                <small>Creative Director</small>
                <div className="social_icons">
                  <a href="#">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-linkedin"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="bttns mt-4 text-center mt-50">
            <a
              href="page-about-5.html"
              className="btn rounded-pill bg-blue2 sm-butn mx-1 text-white"
            >
              <span>See All Team</span>
            </a>
            <a
              href="page-contact-5.html"
              className="btn rounded-pill border-blue2 hover-blue2 sm-butn mx-1"
            >
              <span>Join Our Team</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
