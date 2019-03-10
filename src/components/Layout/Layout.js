import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import withCopy from '../withCopy/withCopy';
import './Layout.css';

function Layout({ children }) {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              name
              version
            }
          }
        }
      `}
      render={withCopy(({ copy, site: { siteMetadata } }) => (
        <>
          <header>{copy['Moving On Productions']}</header>
          <div className="div__max-width">
            <main>{children}</main>
            <footer>{`${siteMetadata.name} v${siteMetadata.version}`}</footer>
          </div>
        </>
      ))}
    />
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
