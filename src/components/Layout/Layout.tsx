import React, { useEffect } from 'react';
import ErrorBound from './ErrorBound';

import SEO from '../../SEO';

import { initGA, logPageView } from '../../GoogleAnalytics';

import Navbar from './Navbar/NewNavbar';

import Footer from './Footer';

import Subscribe from './Subscribe';

export default function Layout(props: any) {
  const { page, backendApiURL } = props;

  return (
    <>
      <ErrorBound>
        <Navbar backendApiURL={backendApiURL} />
        {props.children}
        <Subscribe />
        <Footer backendApiURL={backendApiURL} />
      </ErrorBound>
    </>
  );
}
