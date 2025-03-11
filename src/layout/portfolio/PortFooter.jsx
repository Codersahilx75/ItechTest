import React from 'react';
import logoFoot from '../../assets/img/img2/logo_foot_home5.png'; // Import your image

function PortFooter() {
  return (
    <div>
      <footer className="style-5 border-top brd-gray">
        <div className="container">
          <div className="row gx-0 justify-content-between">
            <div className="col-lg-3 col-sm-6">
              <div className="items">
                <div className="title">Axatech - 1st eCommerce Dashboard</div>
                <small className="text">
                  Over 10 years working in IT services developing software applications and mobile apps for clients all over the world. For your very specific industry, we have highly-tailored IT solutions.
                </small>
                <div className="social-icons">
                  <a href="https://twitter.com/" className="icon-35 rounded-circle bg-gray overflow-hidden d-inline-flex align-items-center justify-content-center text-gray me-2" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-twitter"></i>
                  </a>
                  <a href="https://facebook.com/" className="icon-35 rounded-circle bg-gray overflow-hidden d-inline-flex align-items-center justify-content-center text-gray me-2" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-facebook"></i>
                  </a>
                  <a href="https://instagram.com/" className="icon-35 rounded-circle bg-gray overflow-hidden d-inline-flex align-items-center justify-content-center text-gray" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="items">
                <div className="title">Information</div>
                <small className="text mb-10 d-block">
                  Subham Complex 1st ‘A’ Main 2nd Floor <br /> Rear Wing, Mini Forest Road, 3rd Phase, <br /> J. P. Nagar, Bengaluru, Karnataka 560078, India
                </small>
                <small className="text mb-10 d-block">+91-7090054701</small>
                <small className="text d-block">admin@axatech.in</small>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="items">
                <div className="title">Useful Links</div>
                <ul>
                  <li><a href="home-software-company.html">Home</a></li>
                  <li><a href="page-about-app.html">About Axatech</a></li>
                  <li><a href="page-portfolio-5.html">Projects</a></li>
                  <li><a href="page-product-app.html">Product</a></li>
                  <li><a href="page-blog-5.html">Blog</a></li>
                  <li><a href="page-contact-app.html">Contact</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="items">
                <div className="title">Resource</div>
                <ul>
                  <li><a href="#">Online Documentation</a></li>
                  <li><a href="#">Roadmap</a></li>
                  <li><a href="#">Integrations</a></li>
                  <li><a href="#">FAQs</a></li>
                  <li><a href="#">Help Center</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="foot">
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div className="logo">
                  <img src={logoFoot} alt="Axatech Footer Logo" />
                </div>
              </div>
              <div className="col-lg-6">
                <small className="small">
                  © 2023 Copyrights by <a href="#" className="fw-bold text-decoration-underline">Axatech</a> All Rights Reserved. Designed by{' '}
                  <a href="https://themeforest.net/user/themescamp" className="fw-bold text-decoration-underline">Axatech</a>
                </small>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default PortFooter;
