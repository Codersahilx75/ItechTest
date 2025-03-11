import React from "react";
import testiImg from "../../assets/img/testimonials/testi.jpg";
import user1Img from "../../assets/img/testimonials/user1.jpg";
import user2Img from "../../assets/img/testimonials/user2.jpg";
import testiLines from "../../assets/img/testimonials/testi3_lines.png";
import serviceIcon10 from "../../assets/img/icons/serv_icons/10.png";
import serviceIcon11 from "../../assets/img/icons/serv_icons/11.png";
import serviceIcon12 from "../../assets/img/icons/serv_icons/12.png";
import serviceIcon13 from "../../assets/img/icons/serv_icons/13.png";

export default function Clients() {
  return (
    <div>
      <section className="testimonials style-3">
        <div className="container">
          <div className="content section-padding">
            <div className="section-head style-3">
              <h3>
                Loved By Thousand <span>Clients</span>
              </h3>
            </div>
            <div className="testimonial-slider style-3">
              <div className="swiper-container">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="testimonial-card style-3">
                      <div className="text">
                        “We encountered a problem with processing big data and
                        after only 1 week, all fixed, professional, fast &
                        affordable price!”
                      </div>
                      <div className="user-img mt-30 d-flex align-items-center">
                        <div className="img icon-40 img-cover rounded-circle overflow-hidden me-3">
                          <img src={testiImg} alt="" />
                        </div>
                        <div className="inf">
                          <p className="fw-bold">Robert Downey Jr</p>
                          <small className="text-muted">
                            Technical Leader at Airbnb
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="testimonial-card style-3">
                      <div className="text">
                        “Axatech is 1st our choice for Software Services.
                        Extremely secure and fast support.”
                      </div>
                      <div className="user-img mt-30 d-flex align-items-center">
                        <div className="img icon-40 img-cover rounded-circle overflow-hidden me-3">
                          <img src={user1Img} alt="" />
                        </div>
                        <div className="inf">
                          <p className="fw-bold">Conor McGregor</p>
                          <small className="text-muted">CTO at IBM</small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="testimonial-card style-3">
                      <div className="text">
                        Axatech's Experts really is amazing! high speciality,
                        professional and friendly. Our profit increased so much.
                        Really very satisfied!
                      </div>
                      <div className="user-img mt-30 d-flex align-items-center">
                        <div className="img icon-40 img-cover rounded-circle overflow-hidden me-3">
                          <img src={user2Img} alt="" />
                        </div>
                        <div className="inf">
                          <p className="fw-bold">Lucas Digne</p>
                          <small className="text-muted">
                            Product Management at Invisionapp
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-button-next"></div>
              <div className="swiper-button-prev"></div>
            </div>
          </div>
          <img src={testiLines} alt="" className="testi_lines w-100" />
        </div>
      </section>

      <section className="services style-3 section-padding pb-70">
        <div className="container">
          <div className="section-head style-3 d-flex align-items-center">
            <h3>
              Our Main <span>Services</span>
            </h3>{" "}
            <a href="page-services-5.html" className="text-muted ms-5 ps-5 mt-2">
              See full services <i className="bi bi-chevron-right ms-1"></i>
            </a>
          </div>
          <div className="row">
            <div className="col-lg-3 col-sm-6 mb-30 mb-lg-0">
              <div className="service-card style-3">
                <div className="icon">
                  <img src={serviceIcon10} alt="" />
                </div>
                <div className="info">
                  <h5 className="title">IT Consultation</h5>
                  <div className="text">
                    We provide best IT solutions for any type of business as
                    strategy, management.
                  </div>
                  <a href="page-portfolio-5.html">
                    <span>see projects</span>{" "}
                    <i className="bi bi-chevron-right ms-1"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 mb-30 mb-lg-0">
              <div className="service-card style-3">
                <div className="icon">
                  <img src={serviceIcon11} alt="" />
                </div>
                <div className="info">
                  <h5 className="title">Software Development</h5>
                  <div className="text">
                    We bring methods for design and development as website,
                    mobile app, etc
                  </div>
                  <a href="page-portfolio-5.html">
                    <span>see projects</span>{" "}
                    <i className="bi bi-chevron-right ms-1"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 mb-30 mb-lg-0">
              <div className="service-card style-3">
                <div className="icon">
                  <img src={serviceIcon12} alt="" />
                </div>
                <div className="info">
                  <h5 className="title">Data Security</h5>
                  <div className="text">
                    Analysis & Management of Big Data is always a big issue for
                    companies.
                  </div>
                  <a href="page-portfolio-5.html">
                    <span>see projects</span>{" "}
                    <i className="bi bi-chevron-right ms-1"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 mb-30 mb-lg-0">
              <div className="service-card style-3">
                <div className="icon">
                  <img src={serviceIcon13} alt="" />
                </div>
                <div className="info">
                  <h5 className="title">AI Machine Learning</h5>
                  <div className="text">
                    Turn AI & Machine Learning into real-life solutions.
                    Enhance quality and efficiency.
                  </div>
                  <a href="page-portfolio-5.html">
                    <span>see projects</span>{" "}
                    <i className="bi bi-chevron-right ms-1"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
