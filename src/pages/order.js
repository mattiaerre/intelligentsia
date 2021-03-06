import PropTypes from 'prop-types';
import React from 'react';
import Layout from '../components/Layout/Layout';
import withCopy from '../components/withCopy/withCopy';
import SEO from '../components/SEO';

function OrderPage({ copy }) {
  return (
    <Layout>
      <SEO title={copy.Order} />
      <h1>{copy["Let's Get Started"]}</h1>
    </Layout>
  );
}

OrderPage.propTypes = {
  copy: PropTypes.object.isRequired
};

export default withCopy(OrderPage);
