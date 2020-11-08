import React, { useState, useEffect, memo } from 'react';
import dynamic from 'next/dynamic';
//import Home from 'containers/Home';
import Link from 'next/link';
import axios from 'axios';
import Template from '../../components/Template/Template';
import CollectionC3CardBlog from '../../components/Template/CostumeTemplates/CollectionC3CardBlog/CollectionC3CardBlog';
const LayoutSEOana = dynamic(() => import('../../components/Layout/LayoutSEOana'));
const Layout = dynamic(() => import('../../components/Layout/Layout'));
const ViewDoc = ({ frontendURL, backendApiURL, doc }) => {
  const [currentTags, setCurrentTags] = useState(null);

  const getCurrentArticle = async () => {
    if (!!doc) {
      const { contentType } = doc;
      const slug = path =>
        path
          .split('/')
          .filter(i => i != '')
          .join('_');
      try {
        const currentPayloads = [];
        const navbarPaylod = await axios(backendApiURL + 'navbar/');

        navbarPaylod.data.map(payload => {
          if (payload.contentType === contentType) {
            payload.options.map(option => {
              option.options.map(load => {
                currentPayloads.push({ title: load.title, path: '/page/' + slug(load.path) });
              });
            });
          }
        });
        setCurrentTags(currentPayloads);
      } catch (ex) {
        console.log(ex);
      }
    }
  };

  useEffect(() => {
    getCurrentArticle();
  }, []);
  console.log('DOC ==> ', doc);
  return (
    <>
      <Layout backendApiURL={backendApiURL}>
        {!!doc && (
          <LayoutSEOana page={doc} frontendURL={frontendURL}>
            <main className="blog-details-area ptb-60">
              <div className="container">
                <div className="row">
                  <div className="col-lg-8 col-md-12 offset-lg-2 offset-md-0">
                    <div className="blog-details">
                      <div className="article-img">
                        <img width="800" height="600" src={doc.image} alt={doc.title} />
                      </div>

                      <div className="article-content">
                        <ul className="entry-meta">
                          <li>
                            <i className="far fa-user"></i>
                            <Link href="/info/[info]" as="/info/our-team">
                              <a href="/info/our-team">{doc.creatorId.username}</a>
                            </Link>
                          </li>
                          <li>
                            <i className="far fa-calendar-alt"></i> {doc.updatedDate}
                          </li>
                          <li>
                            <i className="fas fa-eye"></i> {doc.views}
                          </li>
                        </ul>

                        <h1>{doc.title}</h1>
                        <h4>
                          <p>{doc.description} </p>
                        </h4>

                        <div
                          dangerouslySetInnerHTML={{
                            __html:
                              (doc.blogReview && doc.blogReview.content) || (doc.docReview && doc.docReview.content),
                          }}
                        />
                        {currentTags && (
                          <ul className="category">
                            <li>
                              <span>Tags:</span>
                            </li>
                            {currentTags.map((tag, idx) => (
                              <li key={idx}>
                                <Link href="/page/[page]" as={tag.path}>
                                  <a href={tag.path}>{tag.title}</a>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
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
