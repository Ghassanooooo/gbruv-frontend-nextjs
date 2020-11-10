import React from 'react';

/*
const UserCard = ({ icon, title, bio, username }) => (
  <Card
    className="UserCard"
    image={icon && icon}
    header={username && username}
    meta={title && title}
    description={bio && bio}
  />
);*/
export default function index({ page }) {
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
