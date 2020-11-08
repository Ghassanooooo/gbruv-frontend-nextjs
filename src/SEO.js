import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
// const mainTitle = 'Classic Body | Runners best source for Reviews, Trends & News!';
// const mainDescription =
//     'We pride ourselves on writing easily readable reviews for all running related products - We also blog about running trends and worldwide running News!';

const SEO = props => {
  const { asPath } = useRouter();
  const { title, description, url, frontendURL } = props;
  console.log('router =====> ', frontendURL + asPath);
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={frontendURL + asPath} />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
    </Head>
  );
};

export default SEO;
