import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Logo from '../../images/logo-light.svg';
import withCopy from '../withCopy/withCopy';
import './Footer.css';

function Footer({ copy }) {
  const nav = [
    {
      label: copy.Quote,
      to: '/quote'
    },
    {
      label: copy.Order,
      to: '/order'
    },
    {
      label: copy.Payment,
      to: '/payment'
    },
    {
      label: copy.Contact,
      to: '/contact'
    }
  ];

  const social = [
    {
      className: 'footer__i-social fab fa-linkedin-in',
      href: 'https://www.linkedin.com/company/moving-on-productions-llc'
    },
    {
      className: 'footer__i-social fab fa-twitter',
      href: 'https://twitter.com/MovingOnProd'
    },
    {
      className: 'footer__i-social fab fa-facebook-f',
      href: 'https://www.facebook.com/movingontranscription'
    }
  ];

  return (
    <footer className="footer">
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.0.13/css/all.css"
        integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp"
        crossOrigin="anonymous"
      />
      <Logo className="footer__Logo--light" />
      <ul className="footer__ul-nav">
        {nav.map(({ label, to }) => (
          <li key={to}>
            <Link className="footer__Link" to={to}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
      <ul className="footer__ul-social">
        {social.map(({ className, href }) => (
          <li className="footer__li-social">
            <a href={href} rel="noopener noreferrer" target="_blank">
              <i className={className} />
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}

Footer.propTypes = {
  copy: PropTypes.object.isRequired
};

export default withCopy(Footer);
