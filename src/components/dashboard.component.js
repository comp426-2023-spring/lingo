import React, { Component } from 'react';
import { fire, auth } from '../firebase';
import { onAuthStateChanged } from "firebase/auth";

export default class Dashboard extends Component {

  constructor(props) {
    super(props);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log(uid);
      } else {
        console.log("no one signed in booo");
      }
    })
    // this.user = auth.currentUser;
    // console.log(this.user);
  }

  render() {
    return (
      
      <div>
          <h1>dashboard</h1>
      </div>

    );
  }
}