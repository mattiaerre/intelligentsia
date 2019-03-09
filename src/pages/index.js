import PropTypes from 'prop-types';
import React from 'react';
// import { Link } from 'gatsby';
import Layout from '../components/layout';
import withCopy from '../components/withCopy';
// import Image from '../components/image';
// import SEO from '../components/seo';

function IndexPage({ copy }) {
  return (
    <Layout>
      <h1>{copy['Accurate Affordable Transription']}</h1>
      <p className="p__border-bottom p__font-24 p__putty p__serif">
        {copy['There are some']}
      </p>
      <p>{copy['We can use']}</p>
    </Layout>
  );
}

IndexPage.propTypes = {
  copy: PropTypes.object.isRequired
};

export default withCopy(IndexPage);
