import React from 'react';
import logo from '../assets/img/img2/logo_b2.png';
import testiLines from '../assets/img/testimonials/testi3_lines.png';
import contactGlobe from '../assets/img/img2/contact_globe.svg';

export default function Footer() {
  return (
    <div>
      <footer className="style-3">
        <div className="container">
          <div className="row gx-0 justify-content-between">
            <div className="col-lg-3 col-sm-6">
              <div className="items">
                <div className="title">Axatech - 1st Choice for IT Solutions</div>
                <small className="text">
                  Over 25 years working in IT services developing software applications and mobile apps for clients all over the world. For your very specific industry, we have highly-tailored IT solutions.
                </small>
                <div className="socail-icons">
                  <a href="#" className="icon-35 rounded-circle bg-gray overflow-hidden d-inline-flex align-items-center justify-content-center text-gray me-2">
                  <i className="bi bi-twitter"></i>
                  </a>
                  <a href="#" className="icon-35 rounded-circle bg-gray overflow-hidden d-inline-flex align-items-center justify-content-center text-gray me-2">
                  <i className="bi bi-facebook"></i>
                  </a>
                  <a href="#" className="icon-35 rounded-circle bg-gray overflow-hidden d-inline-flex align-items-center justify-content-center text-gray">
                  <i className="bi bi-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="items">
                <div className="title">Information</div>
                <small className="text mb-10 d-block">
                  Subham Complex 1st ‘A’ Main 2nd Floor Rear Wing, Mini Forest Road, 3rd Phase, J. P. Nagar, Bengaluru, Karnataka 560078, India
                </small>
                <small className="text mb-10 d-block">+91-7090054701</small>
                <small className="text d-block">admin@axatech.in</small>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="items">
                <div className="title">Useful Links</div>
                <ul>
                  <li><a href="home-software-company.html"> Home </a></li>
                  <li><a href="page-about-app.html"> About Axatech </a></li>
                  <li><a href="page-portfolio-5.html"> Projects </a></li>
                  <li><a href="page-about-app.html"> How It Works </a></li>
                  <li><a href="page-blog-5.html"> Blog </a></li>
                  <li><a href="page-contact-app.html"> Contact </a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="items">
                <div className="title">Services</div>
                <ul>
                  <li><a href="page-services-5.html"> IT Consultation </a></li>
                  <li><a href="page-services-5.html"> Software Development </a></li>
                  <li><a href="page-services-5.html"> AI Machine Learning </a></li>
                  <li><a href="page-services-5.html"> Data Security </a></li>
                  <li><a href="page-services-5.html"> Cloud Services </a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="foot">
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div className="logo">
                  <img src={logo} alt="Logo" />
                </div>
              </div>
              <div className="col-lg-6">
                <small className="small">
                  © 2023 Copyrights by <a href="#" className="fw-bold text-decoration-underline">Axatech</a> All Rights Reserved. Designed by <a href="#" className="fw-bold text-decoration-underline">ThemesCamp</a>
                </small>
              </div>
            </div>
            <img src={testiLines} alt="Testimonials" className="testi_lines w-100" />
          </div>
        </div>
        <img src={contactGlobe} alt="Contact Globe" className="contact_globe" />
      </footer>
    </div>
  );
}
