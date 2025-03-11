import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/img2/logo_lgr.png";
import heartIcon from "../../assets/img/icons/nav_icon/imoj_heart.png";
import priceIcon from "../../assets/img/icons/nav_icon/price.png";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 992);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleNavbar = () => {
    setIsNavOpen((prev) => !prev);
    if (!isNavOpen) setIsDropdownOpen(false); // Close dropdown when navbar opens
  };

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setIsDropdownOpen((prev) => !prev);
  };

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
      {/* Top Navbar */}
      <div className="top-navbar style-4">
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

      {/* Main Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light style-4">
        <div className="container">
          {/* Logo */}
          <Link className="navbar-brand me-auto" to="/">
            <img src={logo} alt="Logo" style={{ maxWidth: "120px", height: "auto" }} />
          </Link>

          {/* Toggle Button */}
          <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Links */}
          <div className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`}>
            <ul className="navbar-nav m-auto mb-2 mb-lg-0 text-uppercase align-items-lg-center">
              <li className="nav-item">
                <Link className="nav-link" to="/" onClick={() => setIsNavOpen(false)}>
                  Home
                </Link>
              </li>

              {/* Dropdown Menu */}
              <li className="nav-item dropdown d-lg-inline-block">
                <span
                  className="nav-link"
                  role="button"
                  onClick={toggleDropdown}
                >
                  What We Do <i className="bi bi-chevron-down ms-2"></i>
                </span>
                <ul className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}>
                  <li><Link className="dropdown-item" to="/about" onClick={() => setIsNavOpen(false)}>About</Link></li>
                  <li><Link className="dropdown-item" to="/product" onClick={() => setIsNavOpen(false)}>Product</Link></li>
                  <li><Link className="dropdown-item" to="/services" onClick={() => setIsNavOpen(false)}>Services</Link></li>
                  <li><Link className="dropdown-item" to="/shop" onClick={() => setIsNavOpen(false)}>Shop</Link></li>
                  <li><Link className="dropdown-item" to="/single-project" onClick={() => setIsNavOpen(false)}>Single Project</Link></li>
                  <li><Link className="dropdown-item" to="/single-post" onClick={() => setIsNavOpen(false)}>Single Post</Link></li>
                </ul>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/portfolio" onClick={() => setIsNavOpen(false)}>
                  Portfolio
                </Link>
              </li>
             
              <li className="nav-item">
                <Link className="nav-link" to="/contact" onClick={() => setIsNavOpen(false)}>
                  <img src={priceIcon} alt="Contact Icon" className="icon-15 me-1" />
                  Contact
                </Link>
              </li>
            </ul>

            {/* Right Side Icons */}
            <div className="nav-side d-flex align-items-center">
              <Link to="/profile" className="search-icon me-4">
                <i className="bi bi-person"></i>
              </Link>
              <Link to="/join" className="btn rounded-pill brd-gray hover-blue4 sm-butn fw-bold">
                <span>
                  Join Axatech Hub <i className="bi bi-arrow-right ms-1"></i>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
