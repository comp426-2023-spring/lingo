import React, { useState } from 'react';
import './navbar.component.css';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';

export default function NavBar() {

  const [loggedIn, setLoggedIn] = useState(false);
  auth.onAuthStateChanged((user) => {
    if (user) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  });
  

  return (
    <div className='navbar'>
      <div className='left-container'>
        <Link to="/" className="link">
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