import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Header from '../Header/Header';
import './Layout.css';

const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        name
        version
      }
    }
  }
`;

function Layout({ children }) {
  return (
    <StaticQuery
      query={query}
      render={({ site: { siteMetadata } }) => (
        <>
          <Header />
          <div className="div--max-width">
            <main>{children}</main>
            <footer>{`${siteMetadata.name} v${siteMetadata.version}`}</footer>
          </div>
        </>
      )}
    />
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
