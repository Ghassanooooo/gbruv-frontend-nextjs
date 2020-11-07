import React from 'react';
import dynamic from 'next/dynamic';
//import Home from 'containers/Home';

import axios from 'axios';
import Template from '../../components/Template/Template';
import CollectionC3CardBlog from '../../components/Template/CostumeTemplates/CollectionC3CardBlog/CollectionC3CardBlog';
const LayoutSEOana = dynamic(() => import('../../components/Layout/LayoutSEOana'));
const Layout = dynamic(() => import('../../components/Layout/Layout'));
const Page = ({ page, frontendURL, backendApiURL, currentPayloads }) => {
  return (
    <>
      <Layout backendApiURL={backendApiURL}>
        <CollectionC3CardBlog currentPayloads={currentPayloads} />
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
  let contentType = slug[0];
  let categorie = slug[1];
  let subCategorie = slug[2];

  let subSubCategorie = slug[3];

  console.log('slug ==> slug==>', slug);
  const { backendApiURL } = process.env;
  const { frontendURL } = process.env;
  try {
    const currentPayloads = await axios(
      backendApiURL +
        `${contentType}?categorie=${categorie}&subCategorie=${subCategorie}&subSubCategorie=${subSubCategorie}`
    );
    console.log('currentPayloads now==>', currentPayloads.data);
    const pageConfig = await axios(`${backendApiURL}pages/${rout}`);
    const page = pageConfig.data;
    console.log('page   =====> ', page);
    return {
      props: { page, frontendURL, backendApiURL, currentPayloads: currentPayloads.data },
    };
  } catch (ex) {
    console.log('ERRORS   =====> ', ex);
    return {
      props: { page: null, frontendURL },
    };
  }
};

export default Page;
