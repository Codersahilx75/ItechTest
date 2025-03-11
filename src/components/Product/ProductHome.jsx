import React from "react";
import pr1 from "../../assets/img/shop/products/pr1.png";
import pr2 from "../../assets/img/shop/products/pr2.png";
import pr4 from "../../assets/img/shop/products/pr4.png";
import pr5 from "../../assets/img/shop/products/pr5.png";

export default function ProductHome() {
  return (
    <div className="product-page style-5">
      <section className="container product pt-50">
        <div className="">
          <div className="section-head text-center mb-80 style-5">
            <div className="page-links color-999">
              <a href="#" className="me-2">
                Home
              </a>
              <span className="me-2">/</span>
              <a href="#" className="me-2">
                Axatech’s Store
              </a>
              <span className="me-2">/</span>
              <a href="#" className="color-000">
                Samsung New VR Headset Oculus 2.0
              </a>
            </div>
          </div>

          <div className="content">
            <div className="row gx-5">
              <div className="col-lg-6">
                <div className="product-slider">
                  <div className="swiper-container gallery-thumbs">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div className="img">
                          <img src={pr1} alt="" />
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="img">
                          <img src={pr2} alt="" />
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="img">
                          <img src={pr4} alt="" />
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="img">
                          <img src={pr5} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-container gallery-top">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div className="img">
                          <img src={pr1} alt="" />
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="img">
                          <img src={pr2} alt="" />
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="img">
                          <img src={pr4} alt="" />
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="img">
                          <img src={pr5} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="product-info">
                  <h6 className="category">Samsung</h6>
                  <h5 className="title">Samsung New VR Headset Oculus 2.0</h5>
                  <div className="rate">
                    <div className="stars">
                    <i className="bi bi-star-fill active"></i>
                    <i className="bi bi-star-fill active"></i>
                    <i className="bi bi-star-fill active"></i>
                    <i className="bi bi-star-fill active"></i>
                    <i className="bi bi-star-fill "></i>
                    </div>
                    <span className="rev">3 Reviews</span>
                  </div>
                  <div className="price">$222.65</div>
                  <div className="info-text">
                    Without a strong digital platform, time and money are
                    wasted, content sits unnoticed, and prospective clients
                    disappear.
                  </div>
                  <ul className="info-list">
                    <li className="d-flex align-items-center">
                     
                      VR 2 in 1, support 3D/4D AR
                    </li>
                    <li className="d-flex align-items-center">
                     
                      Intergrate with all devices as mobile, PS4, PS5, etc
                    </li>
                    <li className="d-flex align-items-center">
                    
                      Sync and Save data with Cloud
                    </li>
                  </ul>
                  <div className="color-quantity">
                    <div className="select-color">
                      <span className="me-4 mb-1 color-000 fw-bold fs-14px">
                        Select Color
                      </span>
                      <div className="colors-content">
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="colorSelect"
                            id="colorSelect1"
                            
                          />
                          <label className="form-check-label" htmlFor="colorSelect1">
                            <span className="color-circle gray"></span>
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="colorSelect"
                            id="colorSelect2"
                          />
                          <label className="form-check-label" htmlFor="colorSelect2">
                            <span className="color-circle black"></span>
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="colorSelect"
                            id="colorSelect3"
                          />
                          <label className="form-check-label" htmlFor="colorSelect3">
                            <span className="color-circle blue"></span>
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="colorSelect"
                            id="colorSelect4"
                          />
                          <label className="form-check-label" htmlFor="colorSelect4">
                            <span className="color-circle green"></span>
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="qyt-addCart">
                      <span className="me-4 mb-1 color-000 fw-bold fs-14px">
                        QTY
                      </span>
                      <div className="add-more">
                        <span className="qt-minus">
                        <i className="bi bi-dash"></i>
                        </span>
                        <span className="qt">1</span>
                        <span className="qt-plus">
                        <i className="bi bi-plus"></i>
                        </span>
                      </div>
                      <a
                        href="#"
                        className="btn rounded-pill bg-blue4 fw-bold text-white"
                        target="_blank"
                      >
                        <small> Add To Cart </small>
                      </a>
                      <div className="fav-btn">
                      <i className="bi bi-heart-fill"></i>
                      </div>
                    </div>
                  </div>

                  <div className="more-info pt-20 mt-1 border-1 border-top brd-gray">
                    <p className="text-uppercase fs-14px color-666 mb-1">
                      {" "}
                      <strong className="color-000">SKU:</strong> VRO20-5112
                    </p>
                    <p className="fs-14px color-666 mb-1">
                      {" "}
                      <strong className="color-000">Category:</strong>
                      Technology
                    </p>
                    <p className="fs-14px color-666 mb-1">
                      {" "}
                      <strong className="color-000">Tags:</strong>{" "}
                      <a href="#">samsung</a> ,{" "}
                      <a href="#" className="color-blue5 text-decoration-underline">
                        headset
                      </a>{" "}
                      , <a href="#">vr</a> , <a href="#">oculus</a> ,{" "}
                      <a href="#">ar</a>{" "}
                    </p>
                  </div>

                  <div className="socail-icons">
                    <a
                      href="#"
                      className="icon-35 rounded-circle bg-gray overflow-hidden d-inline-flex align-items-center justify-content-center text-gray me-2"
                    >
                     <i className="bi bi-twitter"></i>
                    </a>
                    <a
                      href="#"
                      className="icon-35 rounded-circle bg-gray overflow-hidden d-inline-flex align-items-center justify-content-center text-gray me-2"
                    >
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a
                      href="#"
                      className="icon-35 rounded-circle bg-gray overflow-hidden d-inline-flex align-items-center justify-content-center text-gray me-2"
                    >
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a
                      href="#"
                      className="icon-35 rounded-circle bg-gray overflow-hidden d-inline-flex align-items-center justify-content-center text-gray me-2"
                    >
                      <i className="bi bi-pinterest"></i>
                    </a>
                    <a
                      href="#"
                      className="icon-35 rounded-circle bg-gray overflow-hidden d-inline-flex align-items-center justify-content-center text-gray"
                    >
                      <i className="bi bi-linkedin"></i>
                    </a>
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
