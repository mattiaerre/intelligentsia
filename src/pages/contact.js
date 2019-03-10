import PropTypes from 'prop-types';
import React from 'react';
import Layout from '../components/Layout/Layout';
import withCopy from '../components/withCopy/withCopy';
import SEO from '../components/SEO';

function ContactPage({ copy }) {
  return (
    <Layout>
      <SEO title={copy.Contact} />
      <h1>{copy['Keep In Touch']}</h1>
    </Layout>
  );
}

ContactPage.propTypes = {
  copy: PropTypes.object.isRequired
};

export default withCopy(ContactPage);
