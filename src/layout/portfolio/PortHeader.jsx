import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/img2/logo_home5.png";
import heartIcon from "../../assets/img/icons/nav_icon/imoj_heart.png";

function PortHeader() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 992);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleNavbar = () => setIsNavbarOpen(!isNavbarOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown")) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div>
      {/* ====== Top Navbar ====== */}
      <div className="top-navbar style-5">
        <div className="container">
          <div className="content text-white">
            <span className="btn sm-butn bg-white py-0 px-2 me-2 fs-10px">
              <small className="fs-10px">Special</small>
            </span>
            <img src={heartIcon} alt="Heart Icon" className="icon-15" />
            <span className="fs-10px op-6">Get </span>
            <small className="op-10 fs-10px">20% Discount</small>
            <span className="fs-10px op-6">Get for New Account</span>
            <Link to="/register" className="fs-10px text-decoration-underline ms-2">
              Register Now
            </Link>
          </div>
        </div>
      </div>

      {/* ====== Main Navbar ====== */}
      <nav className="navbar navbar-expand-lg navbar-light style-5">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Logo" />
          </Link>

          <button
            className="navbar-toggler ms-auto"
            type="button"
            onClick={toggleNavbar}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse ${isNavbarOpen ? "show" : ""}`}>
            <ul className="navbar-nav m-auto align-items-lg-center d-lg-flex">
              <li className="nav-item">
                <Link className="nav-link " to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown d-lg-inline-block">
                <span
                  className="nav-link "
                  role="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleDropdown();
                  }}
                >
                  What We Do <i className="bi bi-chevron-down ms-2"></i>
                </span>
                <ul className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}>
                  <li><Link className="dropdown-item" to="/about">About</Link></li>
                  <li><Link className="dropdown-item" to="/product">Product</Link></li>
                  <li><Link className="dropdown-item" to="/services">Services</Link></li>
                  <li><Link className="dropdown-item" to="/shop">Shop</Link></li>
                  <li><Link className="dropdown-item" to="/single-project">Single Project</Link></li>
                  <li><Link className="dropdown-item" to="/single-post">Single Post</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/portfolio">Portfolio</Link>
              </li>
            
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact Us</Link>
              </li>
            </ul>

            <div className="nav-side">
              <div className="d-flex align-items-center">
                <span className="nav-item">
                  <Link className="nav-link" to="/login">
                     Sign In
                  </Link>
                </span>
                <Link to="/free-trial" className="btn rounded-pill blue5-3Dbutn hover-blue2 sm-butn fw-bold">
                  <span>
                    Start Free Trial <i className="bi bi-arrow-right ms-1"></i>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default PortHeader;
