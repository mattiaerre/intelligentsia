import PropTypes from 'prop-types';
import React from 'react';
import HeroIndex from '../components/HeroIndex/HeroIndex';
import Layout from '../components/Layout/Layout';
import withCopy from '../components/withCopy/withCopy';
import SEO from '../components/SEO';
import './index.css';

function IndexPage({ copy }) {
  return (
    <Layout>
      <SEO title={copy.Home} />
      <HeroIndex />
      <p className="p--border-bottom p--font-24 p--max-width-490 p--putty p--serif">
        {copy['There are some']}
      </p>
      <p className="p--max-width-570">{copy['We can use']}</p>
    </Layout>
  );
}

IndexPage.propTypes = {
  copy: PropTypes.object.isRequired
};

export default withCopy(IndexPage);
