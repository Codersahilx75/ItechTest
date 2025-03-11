import React from "react";
import headerImg from "../../assets/img/header/header.png";
import headerCircle from "../../assets/img/header/circle.png";
import logoShape from "../../assets/img/header/logo.png";

export default function Dashboard() {
  return (
    <div>
      <header className="style-3 overflow-hidden">
        <div className="container">
          <div className="content section-padding">
            <div className="row">
              <div className="col-lg-5">
                <div className="info">
                  <h1 className="h1">
                    Make your life easier with help from <span>Axatech</span>
                  </h1>
                  <p className="p">
                    We help businesses elevate their value through custom
                    software development, product design, QA & consultancy
                    services.
                  </p>
                  <h5 className="h5">
                    Get Free Quote!{" "}
                    <span className="fw-normal ms-1">
                      We’ll contact back in 24h
                    </span>
                  </h5>
                  <form
                    action="https://iteck-html.themescamp.com/contact.php"
                    className="form mt-30"
                    method="post"
                  >
                    <div className="row gx-3">
                      <div className="col-6">
                        <div className="form-group input-with-icon">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Your Email *"
                          />
                          <span className="input-icon">
                          <i className="bi bi-envelope"></i>
                          </span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="form-group">
                          <select className="form-select" defaultValue="">
                            <option value="" disabled>
                              Your inquiry about
                            </option>
                            <option value="software">
                              Software Development
                            </option>
                            <option value="design">Product Design</option>
                            <option value="qa">QA & Consultancy</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-12">
                        <button className="btn dark-butn hover-darkBlue rounded-pill py-4 w-100 mt-3">
                          <span>Request A Consultation</span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main-img">
          <img src={headerImg} alt="Header Pattern" className="pattern" />
          <img src={headerCircle} alt="Header Circle" className="circle" />
          <img src={logoShape} alt="Logo Shape" className="logo_shap" />
        </div>
      </header>
    </div>
  );
}
