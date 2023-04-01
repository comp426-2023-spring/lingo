import React, { Component, useState } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";
import './sign_.component.css';

export default function SignUp(props) {
  const [state, setState] = useState({
    fname : "",
    lname : "",
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
    register();
  }

  let register = async () => {
    try {
      // await signUp(state.email, state.password)
        const user = await createUserWithEmailAndPassword(auth, state.email, state.password);
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
        <h1 className="heading">Create Account</h1>
      
      <form className="form" onSubmit={handleSubmitClick}><br></br>
        <div className="horizontal-box">
          <div className="left">
            <label className="input-label" for="fname">First Name</label>
            <input className="input-field" name="fname" type="text" value={state.fname} placeholder="Jane" onChange={handleChange} />
          </div>
          <div className="left">
            <label className="input-label" for="lname">Last Name</label>
            <input className="input-field" name="lname" type="text" value={state.lname} placeholder="Doe" onChange={handleChange} />
          </div>
        </div>
        <label className="input-label" for="email">Email</label>
        <input className="input-field" name="email" type="text" value={state.email} placeholder="sample@email.com" onChange={handleChange} />
        
        <label className="input-label" for="email">Password</label>
        <input className="input-field" name="password" type="password" value={state.password} placeholder="your password" onChange={handleChange} />

        <input className="submit-button" type="submit" value="Sign Up"/>
        <p className="redirect">Already have an account? <a className="redirect-link" href="/sign-in">Log in here!</a></p>
      
      </form>
      </div>
      <div className="info-section">
          <p>i'm gonna be an image one day!</p>
        </div>
    </div>
    </div>
  );
}