import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import withCopy from '../withCopy/withCopy';
import './Layout.css';
import Logo from '../../images/logo-dark.svg';

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

function Layout({ children, copy }) {
  return (
    <StaticQuery
      query={query}
      render={({ site: { siteMetadata } }) => (
        <>
          <header className="header__max-width">
            <a href="/">
              <Logo />
            </a>
          </header>
          <div className="div__max-width">
            <main>{children}</main>
            <footer>{`${siteMetadata.name} v${siteMetadata.version}`}</footer>
          </div>
        </>
      )}
    />
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  copy: PropTypes.object.isRequired
};

export default withCopy(Layout);
