import React from 'react';
import dynamic from 'next/dynamic';
//import Home from 'containers/Home';

import axios from 'axios';
import Template from '../../components/Template/Template';
import CollectionC3CardBlog from '../../components/Template/CostumeTemplates/CollectionC3CardBlog/CollectionC3CardBlog';
const LayoutSEOana = dynamic(() => import('../../components/Layout/LayoutSEOana'));
const Layout = dynamic(() => import('../../components/Layout/Layout'));
const ViewDoc = ({ frontendURL, backendApiURL, doc }) => {
  return (
    <>
      <Layout backendApiURL={backendApiURL}>
        {!!doc && (
          <LayoutSEOana page={doc}>
            <main className="products-details-area pt-60">
              <div className="container">
                <div className="section-title">
                  <h2>
                    <span className="dot"></span> {doc.title}
                  </h2>
                </div>
                <p>{doc.description}</p>
                <div
                  className="products-details-tab-content"
                  dangerouslySetInnerHTML={{
                    __html: (doc.blogReview && doc.blogReview.content) || (doc.docReview && doc.docReview.content),
                  }}
                />
              </div>
            </main>
          </LayoutSEOana>
        )}
      </Layout>
    </>
  );
};

export const getServerSideProps = async context => {
  const {
    asPath,
    query: { viewDoc },
  } = context;

  let slug = viewDoc.split('_').filter(i => i != '');
  let rout = slug[slug.length - 1];
  let contentType = slug[0];
  let categorie = slug[1];
  let subCategorie = slug[2];

  let subSubCategorie = slug[3];

  console.log('slug ==> slug==>', slug);
  const { backendApiURL } = process.env;
  const { frontendURL } = process.env;
  try {
    const doc = await axios(backendApiURL + contentType + '/view/' + rout);
    return {
      props: { viewDoc, frontendURL, backendApiURL, doc: doc.data },
    };
  } catch (ex) {
    console.log('ERRORS   =====> ', ex);
    return {
      props: { viewDoc: null, frontendURL },
    };
  }
};

export default ViewDoc;

/**
 *   {!!page && (
          <LayoutSEOana page={page}>
            {!!page &&
              !!page.options &&
              page.options.map(
                (template, index) => !!template && !!template.template && <Template key={index} {...template} />
              )}
          </LayoutSEOana>
        )}
 */
