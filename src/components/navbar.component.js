import React, { Component } from 'react';
import './navbar.component.css';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {

  render() {
    return (
      
      <div className='navbar'>
        <div className='left-container'>
          <Link to="/" class="link">
            <img className='logo' src='logo192.png' alt='lingo-logo'/>
          </Link>
          <p className='title'>lingo</p>
        </div>
        <div className='right-container'>
          <Link to="/sign-up" className="link"><button className="nav-button">Sign Up</button></Link>
        </div>
      </div>

    );
  }
}