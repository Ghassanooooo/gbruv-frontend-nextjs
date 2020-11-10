import React, { useState, useEffect } from 'react';
import ErrorBound from './ErrorBound';
import Navbar from './Navbar/NewNavbar';
import Footer from './Footer';
import Subscribe from './Subscribe';
import useSWR from 'swr';
import { getNavbarConfig, getFooterConfig, getArticleConfig, getCurrentTags, slug } from '../../shared/fetchers';

export default function Layout({ backendApiURL, children }) {
  const { data: navbar } = useSWR(backendApiURL + 'navbar/', getNavbarConfig);
  const [footerData, setFooterData] = useState();

  function footerConfig() {
    if (!!navbar) {
      const footer: any = [];
      navbar.map((cat, idx) => {
        cat && footer.push({ title: cat.title, options: [] });
        cat &&
          cat.options.map(col => {
            col && footer[idx].options.push({ path: '/page/' + slug(col.path), title: col.title });
          });
      });

      setFooterData(footer);
    }
  }
  useEffect(() => {
    footerConfig();
  }, [navbar]);
  return (
    <>
      {navbar && (
        <ErrorBound>
          <Navbar backendApiURL={backendApiURL} navbar={navbar} />
          {children}
          <Subscribe />
          <Footer footerData={footerData} />
        </ErrorBound>
      )}
    </>
  );
}

//   {navbar && JSON.stringify(navbar, null, 4)}
