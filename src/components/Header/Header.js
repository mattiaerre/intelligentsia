import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Logo from '../../images/logo-dark.svg';
import withCopy from '../withCopy/withCopy';
import './Header.css';

function Header({ copy }) {
  const nav = [
    {
      label: copy.About,
      to: '/about'
    },
    {
      label: copy.Format,
      to: '/format'
    },
    {
      label: copy.Services,
      to: '/services'
    },
    {
      label: copy.Contact,
      to: '/contact'
    }
  ];

  return (
    <header className="header">
      <Link to="/">
        <Logo className="header__Logo" />
      </Link>
      <ul className="header__ul">
        {nav.map(({ label, to }) => (
          <li key={to}>
            <Link
              activeClassName="header__Link--active"
              className="header__Link"
              to={to}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
}

Header.propTypes = {
  copy: PropTypes.object.isRequired
};

export default withCopy(Header);
