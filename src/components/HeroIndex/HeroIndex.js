import { graphql, Link, useStaticQuery } from 'gatsby';
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
  const {
    placeholderImage: {
      childImageSharp: { fluid }
    }
  } = useStaticQuery(query);

  return (
    <>
      <Img fluid={fluid} />
      <h1 className="HeroIndex__h1">
        {copy['Accurate Affordable Transription']}
      </h1>
      <Link className="HeroIndex__Link" to="/order">
        {copy.Order}
      </Link>
    </>
  );
}

HeroIndex.propTypes = {
  copy: PropTypes.object.isRequired
};

export default withCopy(HeroIndex);
