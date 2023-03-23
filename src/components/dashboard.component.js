import React, { Component } from 'react';
import { auth } from '../firebase';

export default class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.user = auth.currentUser;
    console.log(this.user);
  }

  render() {
    return (
      
      <div>
          <h1>dashboard</h1>
      </div>

    );
  }
}