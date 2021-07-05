import React, { Component } from 'react';
import styles from '../styles.module.css';
import { loginUser } from '../../../actions';

export default class LoginForm extends Component {
  state = {
    username: '',
    password: '',
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const data = await loginUser(this.state.username, this.state.password);
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
