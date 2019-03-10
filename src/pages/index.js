import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';
import Layout from '../components/Layout/Layout';
import withCopy from '../components/withCopy/withCopy';

const query = graphql`
  query {
    placeholderImage: file(relativePath: { eq: "hero-img.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

function IndexPage({ copy }) {
  return (
    <StaticQuery
      query={query}
      render={({
        placeholderImage: {
          childImageSharp: { fluid }
        }
      }) => (
        <Layout>
          <Img fluid={fluid} />
          <h1 className="h1__max-width">
            {copy['Accurate Affordable Transription']}
          </h1>
          <p className="p__border-bottom p__font-24 p__max-width-490 p__putty p__serif">
            {copy['There are some']}
          </p>
          <p className="p__max-width-570">{copy['We can use']}</p>
        </Layout>
      )}
    />
  );
}

IndexPage.propTypes = {
  copy: PropTypes.object.isRequired
};

export default withCopy(IndexPage);
