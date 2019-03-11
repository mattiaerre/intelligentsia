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
      <p className="IndexPage__p-slogan">{copy['There are some']}</p>
      <p className="IndexPage__p-description">{copy['We can use']}</p>
    </Layout>
  );
}

IndexPage.propTypes = {
  copy: PropTypes.object.isRequired
};

export default withCopy(IndexPage);

// /Users/mrichetto/projects/intelligentsia/src/images/brooke-campbell-44085-unsplash.jpg
