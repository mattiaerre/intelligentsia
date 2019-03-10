import PropTypes from 'prop-types';
import React from 'react';
import Layout from '../components/Layout/Layout';
import withCopy from '../components/withCopy/withCopy';
import SEO from '../components/SEO';

function FormatPage({ copy }) {
  return (
    <Layout>
      <SEO title={copy.Format} />
      <h1>{copy['What We Can']}</h1>
    </Layout>
  );
}

FormatPage.propTypes = {
  copy: PropTypes.object.isRequired
};

export default withCopy(FormatPage);
