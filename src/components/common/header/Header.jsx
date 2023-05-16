import React from 'react';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="/path/to/logo.png" alt="Logo" />
      </div>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
