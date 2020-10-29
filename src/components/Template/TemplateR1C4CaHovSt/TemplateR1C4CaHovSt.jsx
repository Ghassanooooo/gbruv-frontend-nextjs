import React, { Component } from 'react';
import Link from 'next/link';

import OwlCarouselOptions from './options';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(() => import('react-owl-carousel3'), { ssr: false });
const RenderImage = img => {
  if (typeof img === 'object') {
    return <img src={URL.createObjectURL(img)} alt="image" />;
  }
  return <img src={img} alt="image" />;
};

const TemplateR1C4CaHovSt = props => {
  const { title, options } = props;

  console.log('TemplateR1C4CaHovSt ==> ', props);
  return (
    <section className="best-sellers-area pb-60">
      <div className="container">
        <div className="section-title without-bg">
          <h2>
            <span className="dot" /> {title}
          </h2>
        </div>

        <div className="row">
          {true ? (
            <OwlCarousel className="best-sellers-products-slides owl-carousel owl-theme" {...OwlCarouselOptions}>
              {options.map((data, idx) => (
                <div className="col-lg-12 col-md-12" key={idx}>
                  <div className="single-product-box">
                    <div className="product-image">
                      <a href={data.imageUrl} target="_blank">
                        {RenderImage(data.image)}
                      </a>

                      <ul>
                        <li>
                          <Link href="#">
                            <a data-tip="Quick View" data-place="left">
                              <i className="far fa-eye" />
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <a data-tip="Add to Wishlist" data-place="left">
                              <i className="far fa-heart" />
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <a data-tip="Add to Compare" data-place="left">
                              <i className="fas fa-sync" />
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div className="product-content">
                      <h3>
                        <a href={data.titleUrl} target="_blank">
                          {data.title}
                        </a>
                      </h3>

                      <div className="product-price">
                        <span className="new-price" />
                      </div>

                      <div className="rating">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="far fa-star" />
                      </div>
                      <a target="_blank" href={data.descriptionUrl} className="btn btn-light">
                        Check the price
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </OwlCarousel>
          ) : (
            ''
          )}
        </div>
      </div>
    </section>
  );
};

export default TemplateR1C4CaHovSt;
