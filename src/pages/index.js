import React from 'react';
import dynamic from 'next/dynamic';
import Template from '../components/Template/Template';
import { getPageConfig } from '../shared/fetchers';
import useSWR from 'swr';
const LayoutSEOana = dynamic(() => import('../components/Layout/LayoutSEOana'));
const Layout = dynamic(() => import('../components/Layout/Layout'));
const IndexPage = ({ frontendURL, backendApiURL, pageInitData }) => {
  const { data: page } = useSWR(`${backendApiURL}pages/home`, getPageConfig, { initialData: pageInitData });

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
  const pageInitData = await getPageConfig(`${backendApiURL}pages/home`);
  return {
    props: { pageInitData, frontendURL, backendApiURL },
    revalidate: 1,
  };
};

export default IndexPage;
