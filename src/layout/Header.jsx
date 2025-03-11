import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/img/img2/logo.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("home");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 992);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const path = location.pathname;
    if (path === "/") setActiveMenu("home");
    else if (path === "/contact") setActiveMenu("contact");
    else if (path === "/portfolio") setActiveMenu("portfolio");
   
    else if (path === "/whatwedo") setActiveMenu("whatwedo");
  }, [location]);

  const toggleNavbar = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    if (isMobile) {
      setIsOpen(false);
      setIsDropdownOpen(false); // Close dropdown when item is clicked
    }
  };
  

  return (
    <nav className="navbar navbar-expand-lg navbar-dark style-3 position-absolute w-100">
      <div className="container">
        <Link className="navbar-brand me-auto" to="/">
          <img src={logo} alt="Company Logo" />
        </Link>

        <button
          className="navbar-toggler ms-auto"
          type="button"
          onClick={toggleNavbar}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {!isMobile ? (
          <div className="navbar-collapse">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0 text-uppercase">
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    activeMenu === "home" ? "active" : ""
                  }`}
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                <span
                  className={`nav-link d-flex align-items-center ${
                    activeMenu === "whatwedo" ? "active" : ""
                  }`}
                  role="button"
                >
                  What We Do <i className="bi bi-chevron-down ms-2"></i>
                </span>
                <ul className="dropdown-menu px-3 py-2 rounded-lg">
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/about"
                      onClick={() => handleMenuClick("whatwedo")}
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/product"
                      onClick={() => handleMenuClick("whatwedo")}
                    >
                      Product
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/page-services-5"
                      onClick={() => handleMenuClick("whatwedo")}
                    >
                      Services
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    activeMenu === "portfolio" ? "active" : ""
                  }`}
                  to="/portfolio"
                >
                  Portfolio
                </Link>
              </li>
              
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    activeMenu === "contact" ? "active" : ""
                  }`}
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        ) : (
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="navbar-collapse"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <ul className="navbar-nav m-auto mb-2 mb-lg-0 text-uppercase">
                  <li className="nav-item">
                    <Link
                      className={`nav-link ${
                        activeMenu === "home" ? "active" : ""
                      }`}
                      to="/"
                    >
                      Home
                    </Link>
                  </li>

                  <li className="nav-item dropdown">
                    <span
                      className={`nav-link d-flex align-items-center ${
                        activeMenu === "whatwedo" ? "active" : ""
                      }`}
                      role="button"
                      onClick={toggleDropdown}
                    >
                      What We Do <i className="bi bi-chevron-down ms-2"></i>
                    </span>

                    {isDropdownOpen && (
                      <motion.ul
                        className="dropdown-menu px-3 py-2 rounded-lg"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <li>
                          <Link
                            className="dropdown-item"
                            to="/about"
                            onClick={() => handleMenuClick("whatwedo")}
                          >
                            About
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            to="/product"
                            onClick={() => handleMenuClick("whatwedo")}
                          >
                            Product
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            to="/page-services-5"
                            onClick={() => handleMenuClick("whatwedo")}
                          >
                            Services
                          </Link>
                        </li>
                      </motion.ul>
                    )}
                  </li>

                  <li className="nav-item">
                    <Link
                      className={`nav-link ${
                        activeMenu === "portfolio" ? "active" : ""
                      }`}
                      to="/portfolio"
                    >
                      Portfolio
                    </Link>
                  </li>
                 
                  <li className="nav-item">
                    <Link
                      className={`nav-link ${
                        activeMenu === "contact" ? "active" : ""
                      }`}
                      to="/contact"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </div>
    </nav>
  );
}
