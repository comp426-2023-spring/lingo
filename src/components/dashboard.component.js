import React, { Component } from 'react';
import { fire } from '../firebase';
import { getAuth } from 'firebase/auth';

export default class Dashboard extends Component {

  constructor(props) {
    super(props);
    //this.auth = getAuth();
    console.log(fire.auth);
    //this.user = fire.auth.currentUser;
    //console.log(this.user);
  }

  render() {
    return (
      
      <div>
          <h1>dashboard</h1>
      </div>

    );
  }
}