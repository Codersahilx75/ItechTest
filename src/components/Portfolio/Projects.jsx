import React from "react";

// Image Imports
import img1 from "../../assets/img/projects/prog/1.jpg";
import img2 from "../../assets/img/projects/prog/2.png";
import img3 from "../../assets/img/projects/prog/3.jpg";
import img4 from "../../assets/img/projects/4.png";
import img5 from "../../assets/img/projects/5.png";
import img6 from "../../assets/img/projects/6.png";
import img7 from "../../assets/img/projects/7.png";
import img8 from "../../assets/img/projects/1.png";
import img9 from "../../assets/img/projects/2.png";

function Projects() {
  return (
    <div>
      <main className="portfolio-page style-1">
        <section className="portfolio-projects section-padding pt-50 style-1">
          <div className="container">
            <div className="section-head text-center mb-60 style-5">
              <h2 className="mb-20">
                {" "}
                Our <span> Projects </span>{" "}
              </h2>
              <p>
                {" "}
                We have an experienced team of production and inspection
                personnel to ensure quality.{" "}
              </p>
            </div>
            <div className="controls">
              <button type="button" className="control font-size: medium" data-filter="all">
                All
              </button>
              <button type="button" className="control font-size: medium" data-filter=".consultation">
                IT Consultation
              </button>
              <button type="button" className="control font-size: medium" data-filter=".security">
                Data Security
              </button>
              <button type="button" className="control font-size: medium" data-filter=".website">
                Website Development
              </button>
              <button type="button" className="control font-size: medium" data-filter=".design">
                UI/UX Design
              </button>
              <button type="button" className="control font-size: medium" data-filter=".cloud">
                Cloud Service
              </button>
              <button type="button" className="control font-size: medium" data-filter=".development">
                Game Development
              </button>
            </div>
            <section className="portfolio style-1">
              <div className="content">
                <div className="row mix-container">
                  <div className="col-lg-4 mix security consultation">
                    <div className="portfolio-card mb-50">
                      <div className="img">
                        <img src={img1} alt="" />
                      </div>
                      <div className="info">
                        <h5>
                          <a href="page-single-project-5.html">
                            {" "}
                            Infrastructure Upgrade{" "}
                          </a>
                        </h5>
                        <small className="d-block color-main text-uppercase">
                          IT Consultation
                        </small>
                        <div className="text">
                          Trust our top minds to eliminate workflow pain points,
                          implement new tech & app.
                        </div>
                        <div className="tags">
                          <a href="#">Consultation</a>
                          <a href="#">Management</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 mix design security">
                    <div className="portfolio-card mb-50">
                      <div className="img">
                        <img src={img2} alt="" />
                      </div>
                      <div className="info">
                        <h5>
                          <a href="page-single-project-5.html">
                            {" "}
                            Criftocy Landing Page{" "}
                          </a>
                        </h5>
                        <small className="d-block color-main text-uppercase">
                          Website Development, UI/UX Design
                        </small>
                        <div className="text">
                          Trust our top minds to eliminate workflow pain points,
                          implement new tech & app.
                        </div>
                        <div className="tags">
                          <a href="#">WordPress</a>
                          <a href="#">PHP</a>
                          <a href="#">HTML/CSS</a>
                          <a href="#">Figma</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 mix website development">
                    <div className="portfolio-card mb-50">
                      <div className="img">
                        <img src={img3} alt="" />
                      </div>
                      <div className="info">
                        <h5>
                          <a href="page-single-project-5.html">
                            {" "}
                            AR/VR War 1986 Game{" "}
                          </a>
                        </h5>
                        <small className="d-block color-main text-uppercase">
                          Game Developemnt
                        </small>
                        <div className="text">
                          Trust our top minds to eliminate workflow pain points,
                          implement new tech & app.
                        </div>
                        <div className="tags">
                          <a href="#">VR/AR</a>
                          <a href="#">iOS & Android</a>
                          <a href="#">Unity 2D/3D</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 mix cloud design">
                    <div className="portfolio-card mb-50">
                      <div className="img">
                        <img src={img4} alt="" />
                      </div>
                      <div className="info">
                        <h5>
                          <a href="page-single-project-5.html">
                            {" "}
                            Okpay E-Wallet Optimized{" "}
                          </a>
                        </h5>
                        <small className="d-block color-main text-uppercase">
                          SEO analysis
                        </small>
                        <div className="text">
                          Trust our top minds to eliminate workflow pain points,
                          implement new tech & app.
                        </div>
                        <div className="tags">
                          <a href="#">SEO Analysis</a>
                          <a href="#">Content Strategy</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 mix website development cloud">
                    <div className="portfolio-card mb-50">
                      <div className="img">
                        <img src={img5} alt="" />
                      </div>
                      <div className="info">
                        <h5>
                          <a href="page-single-project-5.html">
                            {" "}
                            e-Commerce Dashboard{" "}
                          </a>
                        </h5>
                        <small className="d-block color-main text-uppercase">
                          website design & develoment
                        </small>
                        <div className="text">
                          Trust our top minds to eliminate workflow pain points,
                          implement new tech & app.
                        </div>
                        <div className="tags">
                          <a href="#">WordPress</a>
                          <a href="#">PHP</a>
                          <a href="#">HTML/CSS</a>
                          <a href="#">Figma</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 mix design consultation">
                    <div className="portfolio-card mb-50">
                      <div className="img">
                        <img src={img6} alt="" />
                      </div>
                      <div className="info">
                        <h5>
                          <a href="page-single-project-5.html">
                            {" "}
                            Crypto Blockchain{" "}
                          </a>
                        </h5>
                        <small className="d-block color-main text-uppercase">
                          Data security
                        </small>
                        <div className="text">
                          Trust our top minds to eliminate workflow pain points,
                          implement new tech & app.
                        </div>
                        <div className="tags">
                          <a href="#">Security</a>
                          <a href="#">Management</a>
                          <a href="#">Backup & Recovery</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 mix cloud design">
                    <div className="portfolio-card mb-50">
                      <div className="img">
                        <img src={img7} alt="" />
                      </div>
                      <div className="info">
                        <h5>
                          <a href="page-single-project-5.html">
                            {" "}
                            Car Rental Dashboard{" "}
                          </a>
                        </h5>
                        <small className="d-block color-main text-uppercase">
                          UI/UX Design
                        </small>
                        <div className="text">
                          Trust our top minds to eliminate workflow pain points,
                          implement new tech & app.
                        </div>
                        <div className="tags">
                          <a href="#">HTML/CSS</a>
                          <a href="#">Figma</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 mix security cloud">
                    <div className="portfolio-card mb-50">
                      <div className="img">
                        <img src={img8} alt="" />
                      </div>
                      <div className="info">
                        <h5>
                          <a href="page-single-project-5.html">
                            {" "}
                            Encrypt Blockchain{" "}
                          </a>
                        </h5>
                        <small className="d-block color-main text-uppercase">
                          Data security, it consultation
                        </small>
                        <div className="text">
                          Trust our top minds to eliminate workflow pain points,
                          implement new tech & app.
                        </div>
                        <div className="tags">
                          <a href="#">Data Security</a>
                          <a href="#">Python</a>
                          <a href="#">Data Backup</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 mix development consultation">
                    <div className="portfolio-card">
                      <div className="img">
                        <img src={img9} alt="" />
                      </div>
                      <div className="info">
                        <h5>
                          <a href="page-single-project-5.html">
                            {" "}
                            Robotchat AI Development{" "}
                          </a>
                        </h5>
                        <small className="d-block color-main text-uppercase">
                          machine learning
                        </small>
                        <div className="text">
                          Trust our top minds to eliminate workflow pain points,
                          implement new tech & app.
                        </div>
                        <div className="tags">
                          <a href="#">AI</a>
                          <a href="#">Machine Learning</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <a
                  href="page-portfolio-5.html"
                  className="btn rounded-pill blue5-3Dbutn hover-blue2 sm-butn fw-bold mt-30"
                >
                  <span> Load More (24) </span>
                </a>
              </div>
            </section>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Projects;
