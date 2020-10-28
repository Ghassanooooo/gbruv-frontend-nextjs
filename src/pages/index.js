import React from 'react';
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';
//import Home from 'containers/Home';
import { withTranslation } from 'utils/with-i18next';

const Footer = dynamic(() => import('../layout/footer'));
export class IndexPage extends React.PureComponent {
  render() {
    return (
      <>
        <div>home</div>
        <Footer />
      </>
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
