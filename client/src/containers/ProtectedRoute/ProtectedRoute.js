import React, { Component } from 'react';
import { userContext } from '../../context/userContext';
import styles from './ProtectedRoute.module.css';

import { logoutUser } from '../../actions';

export default class ProtectedRoute extends Component {
  static contextType = userContext;

  handleLogout = async () => {
    const res = await logoutUser();
    if (res) {
      this.context.setUser(null);
    }
  };

  render() {
    let items;

    if (this.context.user === null) {
      items = <h1>No user logged in.</h1>;
    } else {
      items = (
        <>
          <h1 className={styles.text}>
            Logged in as: {JSON.stringify(this.context.user)}
          </h1>
          <button
            type='button'
            onClick={this.handleLogout}
            className={styles.button}
          >
            Logout
          </button>
        </>
      );
    }
    return <div className={styles.container}>{items}</div>;
  }
}
