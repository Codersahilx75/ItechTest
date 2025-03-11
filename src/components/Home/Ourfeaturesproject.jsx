import React from 'react';
import projectImg3 from '../../assets/img/projects/3.png';
import projectImg4 from '../../assets/img/projects/4.png';
import projectImg5 from '../../assets/img/projects/5.png';
import projectImg6 from '../../assets/img/projects/6.png';

export default function Ourfeaturesproject() {
  return (
    <div>
      <section className="projects section-padding style-3">
        <div className="container">
          <div className="section-head style-3 text-center">
            <h3>Our Featured <span>Projects</span></h3>
          </div>
          <div className="content">
            <div className="row">
              <div className="col-lg-7">
                <div className="project-card d-block mb-30 style-3">
                  <a href="page-single-project-5.html" className="img img-cover d-block">
                    <img src={projectImg3} alt="Project 3" />
                  </a>
                  <div className="info">
                    <h5 className="h5"><a href="page-single-project-5.html">Catty Boxes NFT Blockchain</a></h5>
                    <small className="small"><a href="#">Game Development</a></small>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="project-card d-block mb-30 style-3">
                  <a href="page-single-project-5.html" className="img img-cover d-block">
                    <img src={projectImg4} alt="Project 4" />
                  </a>
                  <div className="info">
                    <h5 className="h5"><a href="page-single-project-5.html">Catty Boxes NFT Blockchain</a></h5>
                    <small className="small"><a href="#">Game Development</a></small>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="project-card d-block style-3 mb-30 mb-lg-0">
                  <a href="page-single-project-5.html" className="img img-cover d-block">
                    <img src={projectImg5} alt="Project 5" />
                  </a>
                  <div className="info">
                    <h5 className="h5"><a href="page-single-project-5.html">Catty Boxes NFT Blockchain</a></h5>
                    <small className="small"><a href="#">Game Development</a></small>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="project-card d-block style-3">
                  <a href="page-single-project-5.html" className="img img-cover d-block">
                    <img src={projectImg6} alt="Project 6" />
                  </a>
                  <div className="info">
                    <h5 className="h5"><a href="page-single-project-5.html">Catty Boxes NFT Blockchain</a></h5>
                    <small className="small"><a href="#">Game Development</a></small>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <a href="page-portfolio-5.html" className="btn rounded-pill bg-blue2 sm-butn mt-60 text-white">
                <span>See All Projects</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
