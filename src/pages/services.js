import PropTypes from 'prop-types';
import React from 'react';
import Layout from '../components/Layout/Layout';
import withCopy from '../components/withCopy/withCopy';
import SEO from '../components/SEO';

function ServicesPage({ copy }) {
  return (
    <Layout>
      <SEO title={copy.Services} />
      <h1>{copy['What We Do']}</h1>
    </Layout>
  );
}

ServicesPage.propTypes = {
  copy: PropTypes.object.isRequired
};

export default withCopy(ServicesPage);
