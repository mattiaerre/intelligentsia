import PropTypes from 'prop-types';
import React from 'react';
import Layout from '../components/Layout/Layout';
import withCopy from '../components/withCopy/withCopy';
import SEO from '../components/SEO';

function PaymentPage({ copy }) {
  return (
    <Layout>
      <SEO title={copy.Payment} />
      <h1>{copy.Payment}</h1>
    </Layout>
  );
}

PaymentPage.propTypes = {
  copy: PropTypes.object.isRequired
};

export default withCopy(PaymentPage);
