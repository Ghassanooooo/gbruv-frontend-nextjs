import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import useSWR from 'swr';
import { getPageConfig, getCurrentPayloads, slugResolve, getNavbarConfig } from '../../shared/fetchers';

import Template from '../../components/Template/Template';
import CollectionC3CardBlog from '../../components/Template/CostumeTemplates/CollectionC3CardBlog/CollectionC3CardBlog';
const LayoutSEOana = dynamic(() => import('../../components/Layout/LayoutSEOana'));
const Layout = dynamic(() => import('../../components/Layout/Layout'));
const Page = ({ pageInitData, frontendURL, backendApiURL, currentPayloadsInitData, pageURL, currentPayloadsURL }) => {
  const { data: page } = useSWR(pageURL, getPageConfig, { initialData: pageInitData });
  const { data: currentPayloads } = useSWR(currentPayloadsURL, getCurrentPayloads, {
    initialData: currentPayloadsInitData,
  });

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
                      <div key={index}>
                        <Template {...template} />
                        <CollectionC3CardBlog currentPayloads={currentPayloads} />
                      </div>
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

export async function getStaticPaths() {
  const { backendApiURL } = process.env;

  const navbar = await getNavbarConfig(backendApiURL + 'navbar/');

  const pathToArray = path => path.split('/').filter(i => i != '');
  const params = navbar.reduce((boxParams, category) => {
    const pathArr = pathToArray(category.path);
    let targetparam = pathArr[pathArr.length - 1];
    let catParam = category.contentType + '_' + targetparam;
    boxParams.push({ params: { page: catParam } });

    if (category.options && category.options.length > 0) {
      for (let subCat of category.options) {
        let subCatParam = catParam + '_' + subCat.value;
        boxParams.push({ params: { page: subCatParam } });
        if (subCat.options && subCat.options.length > 0) {
          for (let subSubCat of subCat.options) {
            boxParams.push({ params: { page: subCatParam + '_' + subSubCat.value } });
          }
        }
      }
    }

    return boxParams;
  }, []);

  return {
    paths: params,
    fallback: true,
  };
}

export const getStaticProps = async context => {
  const {
    params: { page },
  } = context;

  const { backendApiURL } = process.env;
  const { frontendURL } = process.env;
  console.log('page ==> ', page);
  let slug = slugResolve(page);
  let rout = slug[slug.length - 1];
  let contentType = slug[0];
  let categorie = slug[1];
  let subCategorie = slug[2];
  let subSubCategorie = slug[3];
  let currentPayloadsURL = `${
    backendApiURL + contentType
  }?categorie=${categorie}&subCategorie=${subCategorie}&subSubCategorie=${subSubCategorie}`;
  let pageURL = `${backendApiURL}pages/${rout}`;
  const currentPayloadsInitData = await getCurrentPayloads(currentPayloadsURL);

  const pageInitData = await getPageConfig(pageURL);

  return {
    props: {
      pageInitData,
      currentPayloadsURL,
      pageURL,
      page,
      frontendURL,
      backendApiURL,
      currentPayloadsInitData,
    },
    revalidate: 1,
  };
};

export default Page;
