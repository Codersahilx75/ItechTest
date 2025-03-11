import React, { useState } from "react";
import img2 from "../../assets/img/team/2.jpg";
import img4 from "../../assets/img/team/4.jpg";

export default function Description() {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="product-page style-5">
      <section className="product-details pt-100">
        <div className="container">
          {/* Tab Navigation */}
          <ul className="nav nav-pills mb-4 justify-content-center border-bottom pb-2">
            {["description", "reviews", "information"].map((tab) => (
              <li className="nav-item mx-2" key={tab}>
                <button
                  className={`nav-link px-4 py-2 ${
                    activeTab === tab ? "fw-bold " : "text-muted"
                  }`}
                  onClick={() => setActiveTab(tab)}
                  style={{
                    background: "none",
                    border: "none",
                    fontSize: "18px",
                  }}
                >
                  {tab === "description"
                    ? "Description"
                    : tab === "reviews"
                    ? "Reviews (2)"
                    : "Additional Information"}
                </button>
              </li>
            ))}
          </ul>

          {/* Tab Content */}
          <div className="tab-content text-center">
            {/* Description Section */}
            {activeTab === "description" && (
              <div className="content-info px-md-5">
                <p className="text-muted">
                  Nulla velit turpis, tincidunt eget elit vitae, congue sodales
                  metus. Sed sed neque luctus, sollicitudin sem sed, consectetur
                  libero. Nunc mollis turpis velit, vitae laoreet sapien
                  vehicula nec. Curabitur blandit ac libero eu dictum. Nullam
                  vehicula hendrerit nisl eu laoreet. Cras non velit est.
                  Vivamus tincidunt lacus est, at auctor elit finibus et.
                  Maecenas a consequat metus. Aliquam ac nisl nec est mollis
                  faucibus eget vitae eros. Duis bibendum vestibulum felis id
                  mattis.
                </p>
                <p className="text-muted">
                  Suspendisse metus sapien, lacinia eu lectus sit amet,
                  consequat mollis felis. Mauris convallis augue quis semper
                  venenatis. Vivamus imperdiet leo at neque efficitur, id
                  faucibus arcu eleifend. Vivamus in massa bibendum, aliquet est
                  quis, ornare lacus.
                </p>
              </div>
            )}

            {/* Reviews Section */}
            {activeTab === "reviews" && (
              <div className="product-reviews pt-30">
                <h5 className="mb-40 text-capitalize review-title">
                  02 Reviews
                </h5>
                <div className="row justify-content-center">
                  {/* Reviews List */}
                  <div className="col-lg-7">
                    {[
                      { name: "Robert Downey Jr", img: img2 },
                      { name: "Ben Chiwell", img: img4 },
                    ].map((review, index) => (
                      <div key={index} className="review-card">
                        <div className="review-left">
                          <img
                            src={review.img}
                            alt={review.name}
                            className="review-img"
                          />
                          <div>
                            <h6 className="review-name">{review.name}</h6>
                            <p className="review-text">
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit.
                            </p>
                          </div>
                        </div>
                        <div className="review-right">
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star"></i>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Review Form */}
                  <div className="col-lg-5">
                    <form>
                      <h5 className="mb-3 text-start">Add a review</h5>
                      <div className="mb-3 text-start">
                        <label className="form-label">Your Rating</label>
                        <div className="text-secondary d-flex">
                          {[...Array(5)].map((_, i) => (
                            <i key={i} className="bi bi-star-fill"></i>
                          ))}
                        </div>
                      </div>
                      <textarea
                        className="form-control mb-3"
                        rows="4"
                        placeholder="Write your comment here"
                      ></textarea>
                      <div className="d-flex gap-2 mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Your Name *"
                        />
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Your Email *"
                        />
                      </div>
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="saveInfo"
                        />
                        <label className="form-check-label" htmlFor="saveInfo">
                          Save my name & email for next time I comment
                        </label>
                      </div>

                      <button type="submit" className=" purple py-3 w-100">
                        Submit Review
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            )}

            {/* Additional Information Section */}
            {activeTab === "information" && (
              <div className="content-info px-md-5">
                <table className="table custom-table">
                  <tbody>
                    <tr>
                      <th>Weight</th>
                      <td>0.6 kg</td>
                    </tr>
                    <tr>
                      <th>Dimensions</th>
                      <td>40 × 30 × 30 cm</td>
                    </tr>
                    <tr>
                      <th>Color</th>
                      <td>White, Black, Red</td>
                    </tr>
                    <tr>
                      <th>Year</th>
                      <td>2021</td>
                    </tr>
                    <tr>
                      <th>Style</th>
                      <td>Classic, Modern</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
