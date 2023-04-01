import { Component } from 'react';
import { getAuth, signOut } from 'firebase/auth';

export default class LogOut extends Component {

  constructor(props) {
    super(props);
    signOut(getAuth()).then(() => { 
      console.log("yayy it worked");
      window.location.href = '/';
      window.reload();
    }).catch((error) => {
      console.log("logout error");
      console.log(error);
    });
    
  }

  render() {
    return(<div></div>)
  }

}