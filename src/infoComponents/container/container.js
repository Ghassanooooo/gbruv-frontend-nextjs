import React from "react";

export default function InfoContainer(props) {
  const { page } = props;
  return (
      <section className="compare-area ptb-60">
        <div className="container">
              <div className="section-title">
          <h2>
                      <span className="dot" /> {page.title}
                  </h2>
        </div>
              <p>{page.description}</p>
              <div
          className="products-details-tab-content"
            dangerouslySetInnerHTML={{
            __html: page.productReview,
          }}
        />
      </div>
    </section>
  );
}
