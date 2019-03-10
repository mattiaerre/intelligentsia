import PropTypes from 'prop-types';
import React from 'react';
import Layout from '../components/Layout/Layout';
import withCopy from '../components/withCopy/withCopy';
import SEO from '../components/SEO';

function QuotePage({ copy }) {
  return (
    <Layout>
      <SEO title={copy.Quote} />
      <h1>{copy['Get a Quote']}</h1>
    </Layout>
  );
}

QuotePage.propTypes = {
  copy: PropTypes.object.isRequired
};

export default withCopy(QuotePage);
