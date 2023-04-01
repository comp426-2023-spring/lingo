import React, { useState } from 'react';
import './navbar.component.css';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';

export default function NavBar() {

  const [loggedIn, setLoggedIn] = useState(false);
  console.log("set to false");
  auth.onAuthStateChanged((user) => {
    if (user) {
      setLoggedIn(true);
      console.log("true");
    } else {
      setLoggedIn(false);
      console.log("false");
    }
  });
  

  return (
    <div className='navbar'>
      <div className='left-container'>
        <Link to="/" class="link">
          <img className='logo' src='logo192.png' alt='lingo-logo'/>
        </Link>
        <p className='title'>lingo</p>
      </div>
      <div className='right-container'>
        {loggedIn ? 
        <Link to="/log-out" className="link"><button className="nav-button">Log Out</button></Link>:
        <Link to="/sign-up" className="link"><button className="nav-button">Sign Up</button></Link>}
      </div>
    </div>

  );
}