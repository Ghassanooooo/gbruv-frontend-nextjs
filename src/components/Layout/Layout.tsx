import React, { useEffect } from 'react';
import ErrorBound from './ErrorBound';

import SEO from '../../SEO';

import { initGA, logPageView } from '../../GoogleAnalytics';

import Navbar from './Navbar/NewNavbar';

import Footer from './Footer';

import Subscribe from './Subscribe';

export default function Layout(props: any) {
  const { page } = props;
  useEffect(() => {
    if (!!page) {
      if (!(window as any).GA_INITIALIZED) {
        initGA();
        (window as any).GA_INITIALIZED = true;
      }
      logPageView();
    }
  }, []);
  return (
    <>
      {!!page && <SEO title={page.title} description={page.description} url={page.url} />}
      <ErrorBound>
        <Navbar />
        <main>{props.children}</main>
        <Subscribe />
        <Footer />
      </ErrorBound>
    </>
  );
}
