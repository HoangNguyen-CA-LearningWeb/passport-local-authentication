import React, { Component } from 'react';
import { userContext } from '../../context/userContext';

export default class ProtectedRoute extends Component {
  static contextType = userContext;
  render() {
    return (
      <div>
        <h1>{JSON.stringify(this.context.user)}</h1>
      </div>
    );
  }
}
