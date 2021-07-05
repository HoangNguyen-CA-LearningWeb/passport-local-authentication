import React from 'react';
import styles from './styles.module.css';

const AuthLayout = ({ header, children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <h1 className={styles.header}> {header}</h1>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
