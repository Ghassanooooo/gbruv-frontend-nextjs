import React from "react";

export default function About(props) {
  const { page } = props;
  return (
    <section className="about-area ptb-60">
      {page && (
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-content">
                <h2>{page.title}</h2>
                <p>{page.description}</p>

                <div className="signature mb-0">
                  <img
                    src={
                      "https://assets-global.website-files.com/580ea75512564ed05c3a8455/59f4ce1cdefbd9000100e63c_hellosign-blog-header%20copy%20139.jpg"
                    }
                    alt="image"
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="about-image">
                <img
                  src={
                    "https://novine-react.envytheme.com/_next/static/images/about2-e2cd8055953bb9af7af23174cf6c6443.jpg"
                  }
                  className="about-img1"
                  alt="image"
                />

                <img
                  src={
                    "https://novine-react.envytheme.com/_next/static/images/about2-e2cd8055953bb9af7af23174cf6c6443.jpg"
                  }
                  className="about-img2"
                  alt="image"
                />
              </div>
            </div>
          </div>
          <div
            className="products-details-tab-content"
            dangerouslySetInnerHTML={{
              __html: page.productReview,
            }}
          />
        </div>
      )}
    </section>
  );
}
