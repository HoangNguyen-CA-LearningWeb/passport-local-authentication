import React from 'react';
import styles from './Layout.module.css';

const Layout = ({ children, header }) => {
  return <div className={styles.container}>{children}</div>;
};

export default Layout;
