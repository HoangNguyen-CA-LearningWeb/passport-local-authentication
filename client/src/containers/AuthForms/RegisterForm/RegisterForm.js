import React, { Component } from 'react';
import styles from '../styles.module.css';
import { registerUser } from '../../../actions';

export default class RegisterForm extends Component {
  state = {
    username: '',
    password: '',
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const data = await registerUser(this.state.username, this.state.password);
    console.log(data);
  };

  render() {
    return (
      <div className={styles.container}>
        <h1>Register</h1>
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
