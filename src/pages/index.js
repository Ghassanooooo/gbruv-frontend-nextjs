import React from 'react';
import dynamic from 'next/dynamic';
//import Home from 'containers/Home';

import axios from 'axios';
import Template from '../components/Template/Template';
const LayoutSEOana = dynamic(() => import('../components/Layout/LayoutSEOana'));
const Layout = dynamic(() => import('../components/Layout/Layout'));
const IndexPage = ({ page, frontendURL, backendApiURL }) => {
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

/*
IndexPage.getInitialProps = async () => {
  console.log(process.env.backendApiURL);
  return { namespacesRequired: ['common', 'banner', 'features'] };
};
*/

export const getStaticProps = async context => {
  const { backendApiURL } = process.env;
  const { frontendURL } = process.env;
  try {
    const pageConfig = await axios(`${backendApiURL}pages/home`);
    const page = pageConfig.data;
    return {
      props: { page, frontendURL, backendApiURL },
      // Next.js will attempt to re-generate the page:
      // - When a request comes in
      // - At most once every second
      revalidate: 1, // In seconds
    };
  } catch (ex) {
    console.log('ERRORS   =====> ', ex);
    return {
      props: { page: null, frontendURL },
      // Next.js will attempt to re-generate the page:
      // - When a request comes in
      // - At most once every second
      revalidate: 1, // In seconds
    };
  }
};

export default IndexPage;

/**
 export class IndexPage extends React.PureComponent {
  render() {
    const { t } = this.props;

    return <Home t={t} />;
  }
}

IndexPage.propTypes = {
  t: PropTypes.func,
};
 */
