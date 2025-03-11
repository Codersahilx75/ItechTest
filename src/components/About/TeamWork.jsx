import React from "react";
import img1 from "../../assets/img/team/1.jpg";
import img2 from "../../assets/img/team/5.jpg";
import img3 from "../../assets/img/team/3.jpg";
import img4 from "../../assets/img/team/4.jpg";

export default function TeamWork() {
  return (
    <div>
      <section className="team section-padding style-6">
        <div className="content">
          <div className="container">
            <div className="section-head text-center style-4 mb-60">
              <small className="title_small"> The Team Work </small>
              <h2 className="mb-20">
                {" "}
                Our <span> Leaders </span>{" "}
              </h2>
              <p> The Professional Creative Team for Growth-up Works </p>
            </div>
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div className="team-card mb-30 mb-lg-0 style-6">
                  <div className="img img-cover">
                    <img src={img1} alt="Michael Edwards" />
                    <div className="social-icons">
                      <a href="#">
                        <i className="bi bi-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="bi bi-facebook"></i>
                      </a>
                      <a href="#">
                        <i className="bi bi-linkedin"></i>
                      </a>
                      <a href="#">
                        <i className="bi bi-github"></i>
                      </a>
                    </div>
                  </div>
                  <div className="info">
                    <a className="d-block" href="#">
                      <h6>Michael Edwards</h6>
                    </a>
                    <small>CEO Founder</small>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="team-card mb-30 mb-lg-0 style-6">
                  <div className="img img-cover">
                    <img src={img2} alt="Bobby Kane" />
                    <div className="social-icons">
                    <a href="#">
                        <i className="bi bi-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="bi bi-facebook"></i>
                      </a>
                      <a href="#">
                        <i className="bi bi-linkedin"></i>
                      </a>
                      <a href="#">
                        <i className="bi bi-github"></i>
                      </a>
                    </div>
                  </div>
                  <div className="info">
                    <a className="d-block" href="#">
                      <h6>Bobby Kane</h6>
                    </a>
                    <small>CTO</small>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="team-card mb-30 mb-lg-0 style-6">
                  <div className="img img-cover">
                    <img src={img3} alt="Robert Downey Jr" />
                    <div className="social-icons">
                    <a href="#">
                        <i className="bi bi-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="bi bi-facebook"></i>
                      </a>
                      <a href="#">
                        <i className="bi bi-linkedin"></i>
                      </a>
                      <a href="#">
                        <i className="bi bi-github"></i>
                      </a>
                    </div>
                  </div>
                  <div className="info">
                    <a className="d-block" href="#">
                      <h6>Robert Downey Jr</h6>
                    </a>
                    <small>Project Manager</small>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="team-card style-6">
                  <div className="img img-cover">
                    <img src={img4} alt="Andrew Robertson" />
                    <div className="social-icons">
                    <a href="#">
                        <i className="bi bi-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="bi bi-facebook"></i>
                      </a>
                      <a href="#">
                        <i className="bi bi-linkedin"></i>
                      </a>
                      <a href="#">
                        <i className="bi bi-github"></i>
                      </a>
                    </div>
                  </div>
                  <div className="info">
                    <a className="d-block" href="#">
                      <h6>Andrew Robertson</h6>
                    </a>
                    <small>Marketing Leader</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
