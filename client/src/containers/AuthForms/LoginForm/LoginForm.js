import React, { Component } from 'react';
import styles from '../styles.module.css';

export default class LoginForm extends Component {
  state = {
    username: '',
    password: '',
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const body = JSON.stringify({
      username: this.state.username,
      password: this.state.password,
    });

    const res = await fetch('/api/auth', {
      method: 'POST',
      body: body,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.text();
    console.log(data);
  };

  render() {
    return (
      <div className={styles.container}>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <label className={styles.label}>
            Username:
            <input
              value={this.state.username}
              onChange={(e) => this.setState({ username: e.target.value })}
              className={styles.input}
            ></input>
          </label>
          <label className={styles.label}>
            Password:
            <input
              value={this.state.password}
              onChange={(e) => this.setState({ password: e.target.value })}
              className={styles.input}
            ></input>
          </label>

          <button className={styles.button} type='submit'>
            Submit
          </button>
        </form>
      </div>
    );
  }
}
