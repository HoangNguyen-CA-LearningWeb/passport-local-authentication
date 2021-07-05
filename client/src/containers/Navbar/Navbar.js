import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link to='/' className={styles.link}>
        Protected Route
      </Link>
      <Link to='/login' className={styles.link}>
        Login
      </Link>
      <Link to='/register' className={styles.link}>
        Register
      </Link>
    </div>
  );
};

export default Navbar;
