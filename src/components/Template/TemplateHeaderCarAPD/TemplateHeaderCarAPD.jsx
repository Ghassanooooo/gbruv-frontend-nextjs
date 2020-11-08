import React from 'react';
import Link from 'next/link';

import dynamic from 'next/dynamic';
const VisibilitySensor = dynamic(() => import('react-visibility-sensor'), { ssr: false });
const OwlCarousel = dynamic(() => import('react-owl-carousel3'), { ssr: false });

import OwlCarouselOptions from './options';

export default function TemplateHeaderCarAPD(props) {
  const { options } = props;
  return (
    <>
      {true ? (
        <OwlCarousel className="home-slides owl-carousel owl-theme" {...OwlCarouselOptions}>
          {options.map((data, idx) => (
            <div
              key={idx}
              className="main-banner item-bg2"
              style={{
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'auto',
                backgroundImage: `url(${data.image})`,
              }}>
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <VisibilitySensor>
                      {({ isVisible }) => (
                        <div className="main-banner-content">
                          <span className={isVisible ? 'animated fadeInUp opacityOne' : 'opacityZero'}>
                            New Inspiration 2020
                          </span>
                          <h1 className={isVisible ? 'animated fadeInUp opacityOne' : 'opacityZero'}>{data.title}</h1>
                          <p className={isVisible ? 'animated fadeInUp opacityOne' : 'opacityZero'}>
                            {data.description}
                          </p>
                        </div>
                      )}
                    </VisibilitySensor>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </OwlCarousel>
      ) : (
        ''
      )}
    </>
  );
}
