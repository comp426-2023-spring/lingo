import React, { Component, useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';
import './sign_.component.css';

export default function SignIn(props) {
  const [state , setState] = useState({
    email : "",
    password : ""
  })

  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value
    });
  }

  const handleSubmitClick = (e) => {
    e.preventDefault();
    login();
  }

  let login = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, state.email, state.password);
      const u = auth.currentUser;
      window.location.href = '/dashboard/';
      }
      catch(error) {
        console.log(error.message);
        alert(error.message);
      }
  };

  return (
    <div className="page">
    <div className="content">
      <div className="form-section">
        <h1 className="heading">Welcome Back!</h1>

        <form className="form" onSubmit={handleSubmitClick}><br></br>
      
        <label className="input-label" for="email">Email</label>
        <input className="input-field" name="email" type="text" value={state.email} placeholder="sample@email.com" onChange={handleChange} />
        
        <label className="input-label" for="email">Password</label>
        <input className="input-field" name="password" type="password" value={state.password} placeholder="your password" onChange={handleChange} />

        <input className="submit-button" type="submit" value="Submit" />
        <p className="redirect">Don't have an account? <a className="redirect-link" href="/sign-up">Sign up here!</a></p>
      </form>
      </div>
      <div className="info-section">
        <p>i'm gonna be an image one day!</p>
      </div>
    </div>
    </div>
  );
  }