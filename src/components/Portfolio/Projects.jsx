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
      <main class="portfolio-page style-1">
        <section class="portfolio-projects section-padding pt-50 style-1">
          <div class="container">
            <div class="section-head text-center mb-60 style-5">
              <h2 class="mb-20">
                {" "}
                Our <span> Projects </span>{" "}
              </h2>
              <p>
                {" "}
                We have an experienced team of production and inspection
                personnel to ensure quality.{" "}
              </p>
            </div>
            <div class="controls">
              <button type="button" class="control" data-filter="all">
                All
              </button>
              <button type="button" class="control" data-filter=".consultation">
                IT Consultation
              </button>
              <button type="button" class="control" data-filter=".security">
                Data Security
              </button>
              <button type="button" class="control" data-filter=".website">
                Website Development
              </button>
              <button type="button" class="control" data-filter=".design">
                UI/UX Design
              </button>
              <button type="button" class="control" data-filter=".cloud">
                Cloud Service
              </button>
              <button type="button" class="control" data-filter=".development">
                Game Development
              </button>
            </div>
            <section class="portfolio style-1">
              <div class="content">
                <div class="row mix-container">
                  <div class="col-lg-4 mix security consultation">
                    <div class="portfolio-card mb-50">
                      <div class="img">
                        <img src={img1} alt="" />
                      </div>
                      <div class="info">
                        <h5>
                          <a href="page-single-project-5.html">
                            {" "}
                            Infrastructure Upgrade{" "}
                          </a>
                        </h5>
                        <small class="d-block color-main text-uppercase">
                          IT Consultation
                        </small>
                        <div class="text">
                          Trust our top minds to eliminate workflow pain points,
                          implement new tech & app.
                        </div>
                        <div class="tags">
                          <a href="#">Consultation</a>
                          <a href="#">Management</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 mix design security">
                    <div class="portfolio-card mb-50">
                      <div class="img">
                        <img src={img2} alt="" />
                      </div>
                      <div class="info">
                        <h5>
                          <a href="page-single-project-5.html">
                            {" "}
                            Criftocy Landing Page{" "}
                          </a>
                        </h5>
                        <small class="d-block color-main text-uppercase">
                          Website Development, UI/UX Design
                        </small>
                        <div class="text">
                          Trust our top minds to eliminate workflow pain points,
                          implement new tech & app.
                        </div>
                        <div class="tags">
                          <a href="#">WordPress</a>
                          <a href="#">PHP</a>
                          <a href="#">HTML/CSS</a>
                          <a href="#">Figma</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 mix website development">
                    <div class="portfolio-card mb-50">
                      <div class="img">
                        <img src={img3} alt="" />
                      </div>
                      <div class="info">
                        <h5>
                          <a href="page-single-project-5.html">
                            {" "}
                            AR/VR War 1986 Game{" "}
                          </a>
                        </h5>
                        <small class="d-block color-main text-uppercase">
                          Game Developemnt
                        </small>
                        <div class="text">
                          Trust our top minds to eliminate workflow pain points,
                          implement new tech & app.
                        </div>
                        <div class="tags">
                          <a href="#">VR/AR</a>
                          <a href="#">iOS & Android</a>
                          <a href="#">Unity 2D/3D</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 mix cloud design">
                    <div class="portfolio-card mb-50">
                      <div class="img">
                        <img src={img4} alt="" />
                      </div>
                      <div class="info">
                        <h5>
                          <a href="page-single-project-5.html">
                            {" "}
                            Okpay E-Wallet Optimized{" "}
                          </a>
                        </h5>
                        <small class="d-block color-main text-uppercase">
                          SEO analysis
                        </small>
                        <div class="text">
                          Trust our top minds to eliminate workflow pain points,
                          implement new tech & app.
                        </div>
                        <div class="tags">
                          <a href="#">SEO Analysis</a>
                          <a href="#">Content Strategy</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 mix website development cloud">
                    <div class="portfolio-card mb-50">
                      <div class="img">
                        <img src={img5} alt="" />
                      </div>
                      <div class="info">
                        <h5>
                          <a href="page-single-project-5.html">
                            {" "}
                            e-Commerce Dashboard{" "}
                          </a>
                        </h5>
                        <small class="d-block color-main text-uppercase">
                          website design & develoment
                        </small>
                        <div class="text">
                          Trust our top minds to eliminate workflow pain points,
                          implement new tech & app.
                        </div>
                        <div class="tags">
                          <a href="#">WordPress</a>
                          <a href="#">PHP</a>
                          <a href="#">HTML/CSS</a>
                          <a href="#">Figma</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 mix design consultation">
                    <div class="portfolio-card mb-50">
                      <div class="img">
                        <img src={img6} alt="" />
                      </div>
                      <div class="info">
                        <h5>
                          <a href="page-single-project-5.html">
                            {" "}
                            Crypto Blockchain{" "}
                          </a>
                        </h5>
                        <small class="d-block color-main text-uppercase">
                          Data security
                        </small>
                        <div class="text">
                          Trust our top minds to eliminate workflow pain points,
                          implement new tech & app.
                        </div>
                        <div class="tags">
                          <a href="#">Security</a>
                          <a href="#">Management</a>
                          <a href="#">Backup & Recovery</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 mix cloud design">
                    <div class="portfolio-card mb-50">
                      <div class="img">
                        <img src={img7} alt="" />
                      </div>
                      <div class="info">
                        <h5>
                          <a href="page-single-project-5.html">
                            {" "}
                            Car Rental Dashboard{" "}
                          </a>
                        </h5>
                        <small class="d-block color-main text-uppercase">
                          UI/UX Design
                        </small>
                        <div class="text">
                          Trust our top minds to eliminate workflow pain points,
                          implement new tech & app.
                        </div>
                        <div class="tags">
                          <a href="#">HTML/CSS</a>
                          <a href="#">Figma</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 mix security cloud">
                    <div class="portfolio-card mb-50">
                      <div class="img">
                        <img src={img8} alt="" />
                      </div>
                      <div class="info">
                        <h5>
                          <a href="page-single-project-5.html">
                            {" "}
                            Encrypt Blockchain{" "}
                          </a>
                        </h5>
                        <small class="d-block color-main text-uppercase">
                          Data security, it consultation
                        </small>
                        <div class="text">
                          Trust our top minds to eliminate workflow pain points,
                          implement new tech & app.
                        </div>
                        <div class="tags">
                          <a href="#">Data Security</a>
                          <a href="#">Python</a>
                          <a href="#">Data Backup</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 mix development consultation">
                    <div class="portfolio-card">
                      <div class="img">
                        <img src={img9} alt="" />
                      </div>
                      <div class="info">
                        <h5>
                          <a href="page-single-project-5.html">
                            {" "}
                            Robotchat AI Development{" "}
                          </a>
                        </h5>
                        <small class="d-block color-main text-uppercase">
                          machine learning
                        </small>
                        <div class="text">
                          Trust our top minds to eliminate workflow pain points,
                          implement new tech & app.
                        </div>
                        <div class="tags">
                          <a href="#">AI</a>
                          <a href="#">Machine Learning</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="text-center">
                <a
                  href="page-portfolio-5.html"
                  class="btn rounded-pill blue5-3Dbutn hover-blue2 sm-butn fw-bold mt-30"
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
