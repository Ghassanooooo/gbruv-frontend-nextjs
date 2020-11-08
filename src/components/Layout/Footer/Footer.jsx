import React, { useState, useEffect, memo } from 'react';
import Link from 'next/link';
import axios from 'axios';

const infoPages = [
  { path: '/info/about', title: 'about' },
  { path: '/info/faq', title: 'QAndA' },

  { path: '/info/affiliate', title: 'Affiliate' },

  { path: '/info/our-team', title: 'OurTeam' },

  { path: '/info/privacy-policy', title: 'PrivacyPolicy' },
  { path: '/info/contact', title: 'Contact' },
];

function Footer({ backendApiURL }) {
  const [pages, setPages] = useState(null);
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
        cat && crawl.push({ title: cat.title, options: [] });
        cat &&
          cat.options.map(col => {
            col && crawl[idx].options.push({ path: '/page/' + slug(col.path), title: col.title });
          });
      });
      setPages(crawl);
    } catch (ex) {
      console.log('Footer ==> ', ex);
    }
  };
  useEffect(() => {
    navbarPages();
  }, []);
  return (
    <>
      <footer className="footer-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="single-footer-widget">
                <h3>Information</h3>
                <ul className="information-links">
                  {infoPages.map((info, idx) => (
                    <li key={idx}>
                      <Link href="/info/[info]" as={info.path}>
                        <a>{info.title}</a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {pages &&
              pages.map((page, idx) => (
                <div className="col-lg-3 col-md-6" key={idx}>
                  <div className="single-footer-widget">
                    <h3>{page.title}</h3>
                    <ul className="information-links">
                      {page.options.map((article, idxx) => (
                        <li key={idxx}>
                          <Link href="/page/[page]" as={article.path}>
                            <a>{article.title}</a>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className="copyright-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                <p>Copyright @ 2020 Gbruv.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default memo(Footer);

/**
 *    <div className="col-lg-3 col-md-6">
              <div className="single-footer-widget">
                <h3>Quick Links</h3>

                <ul className="quick-links">
                  <li>
                    <Link href="/about">
                      <a>About Us</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/faq">
                      <a>Faq's</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/website-map">
                      <a>Website Map</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact-us">
                      <a>Contact Us</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

 */
