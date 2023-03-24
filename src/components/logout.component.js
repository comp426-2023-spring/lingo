import { Component } from 'react';
//import { auth } from '../firebase';
import { getAuth, signOut } from 'firebase/auth';

export default class LogOut extends Component {

  constructor(props) {
    super(props);
    signOut(getAuth()).then(() => {
      // Sign-out successful.
      console.log("yayy it worked");
    }).catch((error) => {
      // An error happened.
    });
    window.location.href = '/';
    window.reload();
  }

  render() {
    return(<div></div>)
  }

}