import React from 'react';
import dynamic from 'next/dynamic';
//import Home from 'containers/Home';

import axios from 'axios';
import Template from '../../components/Template/Template';
const LayoutSEOana = dynamic(() => import('../../components/Layout/LayoutSEOana'));
const Layout = dynamic(() => import('../../components/Layout/Layout'));
const Page = ({ page, frontendURL, backendApiURL }) => {
  return (
    <>
      <Layout backendApiURL={backendApiURL}>
        {!!page && (
          <LayoutSEOana page={page}>
            {!!page &&
              !!page.options &&
              page.options.map(
                (template, index) => !!template && !!template.template && <Template key={index} {...template} />
              )}
          </LayoutSEOana>
        )}
      </Layout>
    </>
  );
};

export const getServerSideProps = async context => {
  const {
    asPath,
    query: { page },
  } = context;

  let slug = page.split('_').filter(i => i != '');
  let rout = slug[slug.length - 1];
  console.log('slug ==> slug==>', slug[slug.length - 1]);
  const { backendApiURL } = process.env;
  const { frontendURL } = process.env;
  try {
    const pageConfig = await axios(`${backendApiURL}pages/${rout}`);
    const page = pageConfig.data;
    console.log('page   =====> ', page);
    return {
      props: { page, frontendURL, backendApiURL },
    };
  } catch (ex) {
    console.log('ERRORS   =====> ', ex);
    return {
      props: { page: null, frontendURL },
    };
  }
};

export default Page;
