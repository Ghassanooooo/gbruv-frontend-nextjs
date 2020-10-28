import React from "react";
import { NextSeo } from "next-seo";

// const mainTitle = 'Classic Body | Runners best source for Reviews, Trends & News!';
// const mainDescription =
//     'We pride ourselves on writing easily readable reviews for all running related products - We also blog about running trends and worldwide running News!';

const SEO = props => {
  const { title, description, asPath } = props;

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical="https://www.classicbody.org/"
        openGraph={{
          locale: "en_US",
          type: "website",
          url: `https://www.classicbody.org${asPath}`,
          title,
          description,
          images: [
            {
              url: "https://www.example.ie/og-image-01.jpg",
              width: 800,
              height: 600,
              alt: "Og Image Alt",
            },
            {
              url: "https://www.example.ie/og-image-02.jpg",
              width: 900,
              height: 800,
              alt: "Og Image Alt Second",
            },
            { url: "https://www.example.ie/og-image-03.jpg" },
            { url: "https://www.example.ie/og-image-04.jpg" },
          ],
          site_name: "Classic Body",
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            property: "p:domain_verify",
            content: "03734f5d2a8a8f0c648531b613ebe3269e39",
          },
          {
            property: "msvalidate.01",
            content: "03734f5d2a8a8f0c648531b613ebe3269e39",
          },
          {
            property: "google-site-verification",
            content: "03734f5d2a8a8f0c648531b613ebe3269e39",
          },
        ]}
      />
    </>
  );
};

export default SEO;
