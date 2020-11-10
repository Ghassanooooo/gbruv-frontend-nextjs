import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import useSWR from 'swr';
import { getPageConfig, getCurrentPayloads } from '../../shared/fetchers';

import Template from '../../components/Template/Template';
import CollectionC3CardBlog from '../../components/Template/CostumeTemplates/CollectionC3CardBlog/CollectionC3CardBlog';
const LayoutSEOana = dynamic(() => import('../../components/Layout/LayoutSEOana'));
const Layout = dynamic(() => import('../../components/Layout/Layout'));
const Page = ({ page, frontendURL, backendApiURL, currentPayloads }) => {
  if (!!page && page.options[0].template === 'TemplateHeaderCarAPD') {
    return (
      <Layout backendApiURL={backendApiURL}>
        {!!page && (
          <LayoutSEOana page={page} frontendURL={frontendURL}>
            {!!page &&
              !!page.options &&
              page.options.map((template, index) => {
                console.log('Page ==> ', template);
                if (index === 0 && template.template === 'TemplateHeaderCarAPD') {
                  return (
                    !!template &&
                    !!template.template && (
                      <>
                        <Template key={index} {...template} />
                        <CollectionC3CardBlog currentPayloads={currentPayloads} />
                      </>
                    )
                  );
                }
                return !!template && !!template.template && <Template key={index} {...template} />;
              })}
          </LayoutSEOana>
        )}
      </Layout>
    );
  }

  return (
    <>
      <Layout backendApiURL={backendApiURL}>
        <CollectionC3CardBlog currentPayloads={currentPayloads} />
        {!!page && (
          <LayoutSEOana page={page} frontendURL={frontendURL}>
            {!!page &&
              !!page.options &&
              page.options.map((template, index) => {
                return !!template && !!template.template && <Template key={index} {...template} />;
              })}
          </LayoutSEOana>
        )}
      </Layout>
    </>
  );
};

export const getServerSideProps = async context => {
  const {
    query: { page },
  } = context;
  const { backendApiURL } = process.env;
  const { frontendURL } = process.env;
  let slug = page.split('_').filter(i => i != '');
  let rout = slug[slug.length - 1];
  let contentType = slug[0];
  let categorie = slug[1];
  let subCategorie = slug[2];
  let subSubCategorie = slug[3];
  let currentPayloadsURL = `${
    backendApiURL + contentType
  }?categorie=${categorie}&subCategorie=${subCategorie}&subSubCategorie=${subSubCategorie}`;
  let pageURL = `${backendApiURL}pages/${rout}`;
  try {
    const currentPayloads = await getCurrentPayloads(currentPayloadsURL);
    const page = await getPageConfig(pageURL);

    return {
      props: {
        currentPayloadsURL,
        pageURL,
        page,
        frontendURL,
        backendApiURL,
        currentPayloads,
      },
    };
  } catch (ex) {
    console.log('ERRORS   =====> ', ex);
    return {
      props: { page: null, frontendURL },
    };
  }
};

export default Page;
