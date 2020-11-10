import React from 'react';
import dynamic from 'next/dynamic';
import Template from '../components/Template/Template';
import { getPageConfig } from '../shared/fetchers';

const LayoutSEOana = dynamic(() => import('../components/Layout/LayoutSEOana'));
const Layout = dynamic(() => import('../components/Layout/Layout'));
const IndexPage = ({ page, frontendURL, backendApiURL }) => {
  return (
    <Layout backendApiURL={backendApiURL}>
      {!!page && (
        <LayoutSEOana page={page} frontendURL={frontendURL}>
          {!!page &&
            !!page.options &&
            page.options.map(
              (template, index) => !!template && !!template.template && <Template key={index} {...template} />
            )}
        </LayoutSEOana>
      )}
    </Layout>
  );
};

export const getStaticProps = async () => {
  const { backendApiURL } = process.env;
  const { frontendURL } = process.env;
  try {
    const page = await getPageConfig(`${backendApiURL}pages/home`);

    return {
      props: { page, frontendURL, backendApiURL },

      revalidate: 1,
    };
  } catch (ex) {
    console.log('ERRORS   =====> ', ex);
    return {
      props: { page: null, frontendURL, backendApiURL },

      revalidate: 1,
    };
  }
};

export default IndexPage;
