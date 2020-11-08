import React, { useEffect } from 'react';

import SEO from '../../SEO';

import { initGA, logPageView } from '../../GoogleAnalytics';

export default function LayoutSEOana(props: any) {
  const { page, url, frontendURL } = props;
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
      {!!page && <SEO frontendURL={frontendURL} title={page.title} description={page.description} url={url} />}

      <main>{props.children}</main>
    </>
  );
}
