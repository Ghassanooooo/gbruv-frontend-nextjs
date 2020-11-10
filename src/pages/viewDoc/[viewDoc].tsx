import React from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Image from 'next/image';
import axios from 'axios';
import useSWR from 'swr';
import { getArticleConfig, getCurrentTags } from '../../shared/fetchers';
const LayoutSEOana = dynamic(() => import('../../components/Layout/LayoutSEOana'));
const Layout = dynamic(() => import('../../components/Layout/Layout'));
const ViewDoc = ({ currentTags, frontendURL, backendApiURL, docInitData, docURL }) => {
  const { data: doc } = useSWR(docURL, getArticleConfig, { initialData: docInitData });

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
                        <Image width={800} height={600} src={doc.image} alt={doc.title} quality={100} />
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
/*
const params = Object.values(InfoPageEnum).map(path => {
  let pathToArray = path.split('/').filter(i => i != '');
  let extParam = pathToArray[pathToArray.length - 1];
  return { params: { info: extParam } };
});
*/
export async function getStaticPaths() {
  const { backendApiURL } = process.env;
  const DocsData = await axios(backendApiURL + 'docs/all');
  const BlogsData = await axios(backendApiURL + 'blogs/all');
  const blogsParams = BlogsData.data.map(blog => {
    let param = 'blogs_' + blog._id;
    return { params: { viewDoc: param } };
  });
  const docsParams = DocsData.data.map(doc => {
    let param = 'docs_' + doc._id;
    return { params: { viewDoc: param } };
  });

  const params = [...blogsParams, ...docsParams];

  return {
    paths: params,
    fallback: true,
  };
}

export const getStaticProps = async context => {
  const {
    params: { viewDoc },
  } = context;

  const { backendApiURL } = process.env;
  const { frontendURL } = process.env;
  let slug = viewDoc.split('_').filter(i => i != '');
  let rout = slug[slug.length - 1];
  let contentType = slug[0];
  let docURL = backendApiURL + contentType + '/view/' + rout;

  const docInitData = await getArticleConfig(docURL);
  const currentTags = await getCurrentTags(backendApiURL + 'navbar/', contentType);

  return {
    props: {
      contentType,
      currentTags,
      docURL,
      frontendURL,
      backendApiURL,
      docInitData,
    },
    revalidate: 1,
  };
};

export default ViewDoc;
