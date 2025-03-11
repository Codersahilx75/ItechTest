import React from 'react';
import logo from '../../assets/img/img2/logo_lgr.png';
import langIcon from '../../assets/img/img2/lang.png';

export default function AboutFooter() {
  return (
    <div>
      <footer className="style-4 mt-0 pt-100">
        <div className="container">
          <div className="section-head text-center style-4">
            <h2 className="mb-10"> Ready To <span> Download </span> </h2>
            <p>
              Discover your new favorite spaces, from Sao Paulo to Seoul. Download from App Store or Google Play.
            </p>
            <div className="d-flex align-items-center justify-content-center mt-50">
              <a
                href="https://www.apple.com/app-store/"
                className="btn rounded-pill bg-blue4 fw-bold text-white me-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                <small>
                  <i className="bi bi-apple me-2 pe-2 border-end"></i> Download On App Store
                </small>
              </a>
              <a
                href="https://play.google.com/store/apps"
                className="btn rounded-pill hover-blue4 fw-bold border-blue4"
                target="_blank"
                rel="noopener noreferrer"
              >
                <small>
                  <i className="bi bi-google-play me-2 pe-2 border-end"></i> Download On Google Play
                </small>
              </a>
            </div>
          </div>
          <div className="foot mt-80">
            <div className="row align-items-center">
              <div className="col-lg-2">
                <div className="logo">
                  <img src={logo} alt="Logo" />
                </div>
              </div>
              <div className="col-lg-8">
                <ul className="links">
                  <li><a href="home-software-company.html" className="active">Home</a></li>
                  <li><a href="page-about-app.html">About</a></li>
                  <li><a href="page-product-app.html">Product</a></li>
                  <li><a href="page-portfolio-5.html">Portfolio</a></li>
                  <li><a href="page-services-5.html">Services</a></li>
                  <li><a href="page-shop-5.html">Shop</a></li>
                  <li><a href="page-blog-5.html">Blog</a></li>
                  <li><a href="page-contact-app.html">Contact</a></li>
                </ul>
              </div>
              <div className="col-lg-2">
                <div className="dropdown">
                  <button
                    className="icon-25 dropdown-toggle p-0 border-0 bg-transparent rounded-circle img-cover"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img src={langIcon} alt="Language Icon" className="me-2" />
                    <small>English</small>
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a className="dropdown-item" href="#">English</a></li>
                    <li><a className="dropdown-item" href="#">Arabic</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="copywrite text-center">
            <small className="small">
              © 2023 Copyrights by 
              <a href="#" className="fw-bold text-decoration-underline"> Axatech </a> 
              All Rights Reserved. Designed by 
              <a href="https://themeforest.net/user/themescamp" className="fw-bold text-decoration-underline"> Axatech </a>
            </small>
          </div>
        </div>
      </footer>
    </div>
  );
}
