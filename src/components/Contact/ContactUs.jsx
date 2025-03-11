import React, { useState } from 'react';
import mailIcon from '../../assets/img/icons/mail3d.png';
import mapIcon from '../../assets/img/icons/map3d.png';
import msgIcon from '../../assets/img/icons/msg3d.png';
import contactA from '../../assets/img/icons/contact_a.png';
import contactMessage from '../../assets/img/icons/contact_message.png';

function ContactUs() {
  const [selectedOption, setSelectedOption] = useState("help");

  return (
    <div>
      <main className="contact-page style-5">
        <section className="community section-padding style-5">
          <div className="container">
            <div className="section-head text-center style-4 mb-40">
              <small className="title_small">Contact us</small>
              <h2 className="mb-20">
                Get In <span> Touch </span>
              </h2>
              <p>We will contact you within 24 hours of receiving your request.</p>
            </div>
            <div className="content rounded-pill">
              <div className="commun-card">
                <div className="icon icon-45">
                  <img src={mailIcon} alt="Mail" />
                </div>
                <div className="inf">
                  <h5>admin@axatech.in</h5>
                </div>
              </div>
              <div className="commun-card">
                <div className="icon icon-45">
                  <img src={mapIcon} alt="Location" />
                </div>
                <div className="inf">
                  <h5>3rd Phase, J. P. Nagar, Bengaluru</h5>
                </div>
              </div>
              <div className="commun-card">
                <div className="icon icon-45">
                  <img src={msgIcon} alt="Message" />
                </div>
                <div className="inf">
                  <h5>(+91) 7090054701</h5>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact section-padding pt-0 style-6">
          <div className="container">
            <div className="content">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <form action="#" className="form" method="post">
                    <p className="text-center text-danger fs-12px mb-30">
                      Fields marked with * are required
                    </p>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group mb-20">
                          <input type="text" name="name" className="form-control" placeholder="Name" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group mb-20">
                          <input type="text" name="email" className="form-control" placeholder="Email Address *" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group mb-20">
                          <input type="text" name="phone" className="form-control" placeholder="Phone Number (Optional)" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group mb-20">
                          <input type="text" name="website" className="form-control" placeholder="Your Website (Optional)" />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group mb-20">
                          {/* ✅ Fixed: Use 'value' instead of 'selected' */}
                          <select
                            name="option"
                            className="form-select"
                            value={selectedOption}
                            onChange={(e) => setSelectedOption(e.target.value)}
                          >
                            <option value="help">How can we help you?</option>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <textarea rows="10" className="form-control" placeholder="How can we help you?"></textarea>
                        </div>
                      </div>
                      <div className="col-lg-12 text-center">
                        <div className="form-check d-inline-flex mt-30 mb-30">
                          <input className="form-check-input me-2 mt-0" type="checkbox" id="flexCheckDefault" />
                          <label className="form-check-label small" htmlFor="flexCheckDefault">
                            By submitting, I agree to the <a href="#" className="text-decoration-underline">Terms & Conditions</a>
                          </label>
                        </div>
                      </div>
                      <div className="col-lg-12 text-center">
                        <input type="submit" value="Send Your Request" className="btn rounded-pill bg-blue4 fw-bold text-white text-light fs-12px" />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <img src={contactA} alt="Decoration" className="contact_a" />
              <img src={contactMessage} alt="Message" className="contact_message" />
            </div>
          </div>
        </section>

        {/* ====== Random Map (Dublin, Ireland) ====== */}
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2381.469934083485!2d-6.267493584913394!3d53.349805479979195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670e9b7e6d1fdf%3A0x5c89bafcb3ff7d5a!2sDublin%2C%20Ireland!5e0!3m2!1sen!2sin!4v1612513122352!5m2!1sen!2sin"
            height="500"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </main>
    </div>
  );
}

export default ContactUs;
