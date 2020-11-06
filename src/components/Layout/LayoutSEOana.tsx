import React, { useEffect } from 'react';

import SEO from '../../SEO';

import { initGA, logPageView } from '../../GoogleAnalytics';

export default function LayoutSEOana(props: any) {
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

      <main>{props.children}</main>
    </>
  );
}
