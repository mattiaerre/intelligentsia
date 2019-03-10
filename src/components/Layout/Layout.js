import PropTypes from 'prop-types';
import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Layout.css';

function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="div--max-width">
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
