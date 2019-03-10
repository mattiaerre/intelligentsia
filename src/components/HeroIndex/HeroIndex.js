import { graphql, Link, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';
import withCopy from '../withCopy/withCopy';
import './HeroIndex.css';

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

function HeroIndex({ copy }) {
  return (
    <StaticQuery
      query={query}
      render={({
        placeholderImage: {
          childImageSharp: { fluid }
        }
      }) => (
        <>
          <Img fluid={fluid} />
          <h1 className="h1--centered">
            {copy['Accurate Affordable Transription']}
          </h1>
          <Link className="Link__order" to="/order">
            {copy.Order}
          </Link>
        </>
      )}
    />
  );
}

HeroIndex.propTypes = {
  copy: PropTypes.object.isRequired
};

export default withCopy(HeroIndex);
