import React from 'react';
import headLine from '../../assets/img/header/head5_line.png';
import headPen from '../../assets/img/header/head5_pen.png';
import contactGlobe from '../../assets/img/img2/contact_globe.svg';

function Access() {
  return (
    <div className='portfolio-page style-1'>
      <section className="download section-padding style-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="content text-center">
                <h2>
                  Access your business potentials today & find opportunity for{' '}
                  <span>
                    bigger success
                    <img src={headLine} alt="Header Line" className="head-line" />
                    <img src={headPen} alt="Header Pen" className="head-pen" />
                  </span>
                </h2>
                <div className="butns mt-70">
                  <a href="page-contact-5.html" className="btn rounded-pill blue5-3Dbutn hover-blue2 sm-butn fw-bold mx-1">
                    <span> Start A Project Now </span>
                  </a>
                  <a href="page-about-5.html" className="btn rounded-pill blue5-3Dbutn hover-blue2 sm-butn fw-bold mx-1">
                    <span> See Pricing & Plan </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img src={contactGlobe} alt="Contact Globe" className="contact_globe" />
      </section>
    </div>
  );
}

export default Access;
