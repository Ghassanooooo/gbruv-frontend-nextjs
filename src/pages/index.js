import React from 'react';
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';
//import Home from 'containers/Home';
import { withTranslation } from '../utils/with-i18next';

const Layout = dynamic(() => import('../components/Layout/Layout'));
export class IndexPage extends React.PureComponent {
  render() {
    return (
      <Layout>
        <div>home</div>
      </Layout>
    );
  }
}

IndexPage.getInitialProps = async () => ({
  namespacesRequired: ['common', 'banner', 'features'],
});

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
