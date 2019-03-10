import PropTypes from 'prop-types';
import React from 'react';
import HeroIndex from '../components/HeroIndex/HeroIndex';
import Layout from '../components/Layout/Layout';
import withCopy from '../components/withCopy/withCopy';
import './index.css';

function IndexPage({ copy }) {
  return (
    <Layout>
      <HeroIndex />
      <p className="p__border-bottom p__font-24 p__max-width-490 p__putty p__serif">
        {copy['There are some']}
      </p>
      <p className="p__max-width-570">{copy['We can use']}</p>
    </Layout>
  );
}

IndexPage.propTypes = {
  copy: PropTypes.object.isRequired
};

export default withCopy(IndexPage);
