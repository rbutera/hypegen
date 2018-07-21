import React from 'react';
// import Link from 'gatsby-link';
import styles from './Header.module.scss';
import logo from '../../../../logo/hypegen-logo-dark.svg';

const Header = () => (
  <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="container">
      <img alt="Hypegen" className={styles.logo} src={logo} />
    </div>
  </nav>
);

export default Header;
