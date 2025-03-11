import React from "react";
import product1 from "../../assets/img/shop/products/1.png";
import product2 from "../../assets/img/shop/products/2.png";
import product3 from "../../assets/img/shop/products/3.png";
import product4 from "../../assets/img/shop/products/4.png";
import product5 from "../../assets/img/shop/products/5.png";
import product6 from "../../assets/img/shop/products/6.png";
import product7 from "../../assets/img/shop/products/7.png";
import product8 from "../../assets/img/shop/products/8.png";

export default function RelatedProducts() {
  return (
    <div className="product-page">
      <section className="related-products section-padding">
        <div className="container">
          <div className="text-center title">
            <h3>Related Products</h3>
          </div>
          <div className="related-products-slider position-relative">
            <div className="swiper-container">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="product-card">
                    <div className="img">
                      <img src={product1} alt="" />
                      <span className="label new">new</span>
                      <span className="fav-btn active">
                        {" "}
                        <i className="bi bi-heart-fill"></i>{" "}
                      </span>
                    </div>
                    <div className="info">
                      <h6 className="category">asus</h6>
                      <h5 className="title">
                        ASUS Chromebook Flip -10.2 inch, 256GB
                      </h5>
                      <div className="rate">
                        <div className="stars">
                          <i className="fas fa-star active"></i>
                          <i className="fas fa-star active"></i>
                          <i className="fas fa-star active"></i>
                          <i className="fas fa-star active"></i>
                          <i className="fas fa-star"></i>
                        </div>
                        <span className="rev">3 Reviews</span>
                      </div>
                    </div>
                    <div className="price">$197.00</div>

                    <a
                      href="#"
                      className="btn rounded-pill bg-blue4 fw-bold text-white mt-20"
                      target="_blank"
                    >
                      <span> Add To Cart </span>
                    </a>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="product-card">
                    <div className="img">
                      <img src={product2} alt="" />
                      <span className="label sale-off">15% off</span>
                      <span className="fav-btn">
                        {" "}
                        <i className="bi bi-heart-fill"></i>{" "}
                      </span>
                    </div>
                    <div className="info">
                      <h6 className="category">apple</h6>
                      <h5 className="title">Macbook Air 2018, 1 TB</h5>
                      <div className="rate">
                        <div className="stars">
                          <i className="fas fa-star active"></i>
                          <i className="fas fa-star active"></i>
                          <i className="fas fa-star active"></i>
                          <i className="fas fa-star active"></i>
                          <i className="fas fa-star active"></i>
                        </div>
                        <span className="rev">3 Reviews</span>
                      </div>
                    </div>
                    <div className="price">
                      <span className="price-sale">$421.00</span>{" "}
                      <span className="old-price">$521.00</span>
                    </div>

                    <a
                      href="#"
                      className="btn rounded-pill bg-blue4 fw-bold text-white mt-20"
                      target="_blank"
                    >
                      <span> Add To Cart </span>
                    </a>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="product-card">
                    <div className="img">
                      <img src={product3} alt="" />
                      <span className="fav-btn">
                        {" "}
                        <i className="bi bi-heart-fill"></i>{" "}
                      </span>
                    </div>
                    <div className="info">
                      <h6 className="category">Samsung</h6>
                      <h5 className="title">Samsung New VR Headset, Oculus 2.0</h5>
                      <div className="rate">
                        <div className="stars">
                          <i className="fas fa-star active"></i>
                          <i className="fas fa-star active"></i>
                          <i className="fas fa-star active"></i>
                          <i className="fas fa-star active"></i>
                          <i className="fas fa-star"></i>
                        </div>
                        <span className="rev">3 Reviews</span>
                      </div>
                    </div>
                    <div className="price">$197.00</div>

                    <a
                      href="#"
                      className="btn rounded-pill bg-blue4 fw-bold text-white mt-20"
                      target="_blank"
                    >
                      <span> Add To Cart </span>
                    </a>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="product-card">
                    <div className="img">
                      <img src={product4} alt="" />
                      <span className="fav-btn">
                        {" "}
                        <i className="bi bi-heart-fill"></i>{" "}
                      </span>
                    </div>
                    <div className="info">
                      <h6 className="category">brand name</h6>
                      <h5 className="title">iPhone 6s Gold 64GB, Retina Ready</h5>
                      <div className="rate">
                        <div className="stars">
                          <i className="fas fa-star active"></i>
                          <i className="fas fa-star active"></i>
                          <i className="fas fa-star active"></i>
                          <i className="fas fa-star active"></i>
                          <i className="fas fa-star"></i>
                        </div>
                        <span className="rev">3 Reviews</span>
                      </div>
                    </div>
                    <div className="price">$197.00</div>

                    <a
                      href="#"
                      className="btn rounded-pill bg-blue4 fw-bold text-white mt-20"
                      target="_blank"
                    >
                      <span> Add To Cart </span>
                    </a>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="product-card">
                    <div className="img">
                      <img src={product5} alt="" />
                      <span className="fav-btn">
                        {" "}
                        <i className="bi bi-heart-fill"></i>{" "}
                      </span>
                    </div>
                    <div className="info">
                      <h6 className="category">Xbox</h6>
                      <h5 className="title">Xbox One Controller</h5>
                      <div className="rate">
                        <div className="stars">
                          <i className="fas fa-star active"></i>
                          <i className="fas fa-star active"></i>
                          <i className="fas fa-star active"></i>
                          <i className="fas fa-star active"></i>
                          <i className="fas fa-star"></i>
                        </div>
                        <span className="rev">3 Reviews</span>
                      </div>
                    </div>
                    <div className="price">$197.00</div>

                    <a
                      href="#"
                      className="btn rounded-pill bg-blue4 fw-bold text-white mt-20"
                      target="_blank"
                    >
                      <span> Add To Cart </span>
                    </a>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="product-card">
                    <div className="img">
                      <img src={product6} alt="" />
                      <span className="label sale-off">15% off</span>
                      <span className="fav-btn">
                        {" "}
                        <i className="bi bi-heart-fill"></i>{" "}
                      </span>
                    </div>
                    <div className="info">
                      <h6 className="category">amcrest</h6>
                      <h5 className="title">Amcrest Outdoor Camera</h5>
                      <div className="rate">
                        <div className="stars">
                          <i className="fas fa-star active"></i>
                          <i className="fas fa-star active"></i>
                          <i className="fas fa-star active"></i>
                          <i className="fas fa-star active"></i>
                          <i className="fas fa-star"></i>
                        </div>
                        <span className="rev">3 Reviews</span>
                      </div>
                    </div>
                    <div className="price">
                      <span className="price-sale">$421.00</span>{" "}
                      <span className="old-price">$521.00</span>
                    </div>

                    <a
                      href="#"
                      className="btn rounded-pill bg-blue4 fw-bold text-white mt-20"
                      target="_blank"
                    >
                      <span> Add To Cart </span>
                    </a>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="product-card">
                    <div className="img">
                      <img src={product7} alt="" />
                      <span className="fav-btn">
                        {" "}
                        <i className="bi bi-heart-fill"></i>{" "}
                      </span>
                    </div>
                    <div className="info">
                      <h6 className="category">dji2</h6>
                      <h5 className="title">
                        DJI II Phantom 4 Quad Drone With Camera
                      </h5>
                      <div className="rate">
                        <div className="stars">
                          <i className="fas fa-star active"></i>
                          <i className="fas fa-star active"></i>
                          <i className="fas fa-star active"></i>
                          <i className="fas fa-star active"></i>
                          <i className="fas fa-star"></i>
                        </div>
                        <span className="rev">3 Reviews</span>
                      </div>
                    </div>
                    <div className="price">$197.00</div>

                    <a
                      href="#"
                      className="btn rounded-pill bg-blue4 fw-bold text-white mt-20"
                      target="_blank"
                    >
                      <span> Add To Cart </span>
                    </a>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="product-card">
                    <div className="img">
                      <img src={product8} alt="" />
                      <span className="fav-btn">
                        {" "}
                        <i className="bi bi-heart-fill"></i>{" "}
                      </span>
                    </div>
                    <div className="info">
                      <h6 className="category">gopro</h6>
                      <h5 className="title">
                        Gopro Hero 4 Sliver 4K HD, Wireles Sport Camera
                      </h5>
                      <div className="rate">
                        <div className="stars">
                          <i className="fas fa-star active"></i>
                          <i className="fas fa-star active"></i>
                          <i className="fas fa-star active"></i>
                          <i className="fas fa-star active"></i>
                          <i className="fas fa-star"></i>
                        </div>
                        <span className="rev">3 Reviews</span>
                      </div>
                    </div>
                    <div className="price">$197.00</div>

                    <a
                      href="#"
                      className="btn rounded-pill bg-blue4 fw-bold text-white mt-20"
                      target="_blank"
                    >
                      <span> Add To Cart </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
