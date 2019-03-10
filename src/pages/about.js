import PropTypes from 'prop-types';
import React from 'react';
import Layout from '../components/Layout/Layout';
import withCopy from '../components/withCopy/withCopy';
import SEO from '../components/SEO';

// eslint-disable-next-line no-unused-vars
function AboutPage({ copy }) {
  return (
    <Layout>
      <SEO title={copy.About} />
    </Layout>
  );
}

AboutPage.propTypes = {
  copy: PropTypes.object.isRequired
};

export default withCopy(AboutPage);
