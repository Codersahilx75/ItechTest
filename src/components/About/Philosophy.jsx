import React from 'react';
import img1 from '../../assets/img/about/cl1.png';
import img2 from '../../assets/img/about/cl2.png';
import img3 from '../../assets/img/about/cl3.png';

export default function Philosophy() {
  return (
    <div>
      <section className="culture section-padding style-5">
        <div className="section-head text-center style-4 mb-60">
          <small className="title_small"> Our Philosophy </small>
          <h2 className="mb-20"> Discover our <span> Culture </span> </h2>
          <p> More 15,000 Companies & partners trusted & choice Axatech </p>
        </div>
        <div className="content">
          <div className="culture-slider position-relative pb-80 style-5">
            <div className="swiper-container">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <a href={img1} className="culture-card d-block" data-fancybox="gallery">
                    <img src={img1} alt="Culture 1" />
                    <span className="overlay"></span>
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href={img2} className="culture-card d-block" data-fancybox="gallery">
                    <img src={img2} alt="Culture 2" />
                    <span className="overlay"></span>
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href={img3} className="culture-card d-block" data-fancybox="gallery">
                    <img src={img3} alt="Culture 3" />
                    <span className="overlay"></span>
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href={img1} className="culture-card d-block" data-fancybox="gallery">
                    <img src={img1} alt="Culture 1 Repeat" />
                    <span className="overlay"></span>
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href={img2} className="culture-card d-block" data-fancybox="gallery">
                    <img src={img2} alt="Culture 2 Repeat" />
                    <span className="overlay"></span>
                  </a>
                </div>
              </div>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
