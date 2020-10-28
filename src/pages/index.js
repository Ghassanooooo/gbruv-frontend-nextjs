import React from 'react';
import dynamic from 'next/dynamic';
//import Home from 'containers/Home';
import { withTranslation } from '../utils/with-i18next';
import axios from 'axios';
import Template from '../components/Template/Template';
const Layout = dynamic(() => import('../components/Layout/Layout'));

const IndexPage = ({ page, frontendURL, asPath }) => {
  return (
    !!page && (
      <Layout page={page}>
        {!!page &&
          !!page.options &&
          page.options.map(
            (template, index) => !!template && !!template.template && <Template key={index} {...template} />
          )}
      </Layout>
    )
  );
};

/*
IndexPage.getInitialProps = async () => {
  console.log(process.env.backendApiURL);
  return { namespacesRequired: ['common', 'banner', 'features'] };
};
*/

IndexPage.getInitialProps = async context => {
  const { asPath } = context;
  const { backendApiURL } = process.env;
  const { frontendURL } = process.env;
  try {
    const pathToArray = asPath
      .split('/')
      .filter(item => item !== '' && item !== 'en')
      .reverse();
    const pullPageName = pathToArray[0] || 'home';
    const pageConfig = await axios(`${backendApiURL}pages/${pullPageName}`);
    const page = pageConfig.data;
    return {
      page,
      frontendURL,
      asPath,
      namespacesRequired: ['common'],
    };
  } catch (ex) {
    console.log('ERRORS   =====> ', ex);
    return {
      namespacesRequired: ['common'],
    };
  }
};

export default withTranslation('common')(IndexPage);

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
