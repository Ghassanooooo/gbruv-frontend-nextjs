import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';

import dynamic from 'next/dynamic';

const OwlCarousel = dynamic(() => import('react-owl-carousel3'), { ssr: false });

const options = {
  loop: true,
  nav: false,
  dots: false,
  autoplayHoverPause: true,
  autoplay: true,
  animateOut: 'slideOutDown',
  animateIn: 'flipInX',
  items: 1,
  navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
};

const TopPanel = ({ backendApiURL }) => {
  const [pages, setPages] = useState(null);
  const [display, setDisplay] = useState(false);
  const [panel, setPanel] = useState(true);
  const navbarPages = async () => {
    const slug = path =>
      path
        .split('/')
        .filter(i => i != '')
        .join('_');
    try {
      const crawl = [];

      const navbarData = await axios(backendApiURL + 'navbar/');

      navbarData.data.map((cat, idx) => {
        cat &&
          cat.options.map(col => {
            col &&
              col.options.map(link => {
                crawl.push({ categoryTitle: cat.title, subSubCatTitle: link.title, path: '/page/' + slug(link.path) });
              });
          });
      });
      setPages(crawl);
      console.log('TopPanel ==> ', crawl);
    } catch (ex) {
      console.log('Footer ==> ', ex);
    }
  };
  useEffect(() => {
    navbarPages();
    setDisplay(true);
  }, []);

  return (
    pages && (
      <div className={`top-panel ${panel ? '' : 'hide'}`}>
        <div className="container">
          <div className="panel-content">
            {display ? (
              <OwlCarousel className="top-panel-slides owl-carousel owl-theme" {...options}>
                {pages.map((page, idx) => (
                  <div className="single-item-box" key={idx}>
                    <p>
                      <strong>{page.categoryTitle}</strong> select your Stack from {page.subSubCatTitle + ' '}
                      <Link href="/page/[page]" as={page.path}>
                        <a>More Details</a>
                      </Link>
                    </p>
                  </div>
                ))}
              </OwlCarousel>
            ) : (
              ''
            )}

            <i onClick={() => setPanel(false)} className="fas fa-times panel-close-btn" />
          </div>
        </div>
      </div>
    )
  );
};

export default TopPanel;
