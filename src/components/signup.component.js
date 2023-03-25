import React, { Component } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";
import './sign_.component.css';

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      fname: '',
      lname: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.auth = auth;
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  async handleSubmit(event) {
    console.log("test");
    event.preventDefault();
    this.register();
  }

  register = async () => {
    try {
        const user = await createUserWithEmailAndPassword(this.auth, this.state.email, this.state.password);
        window.location.href = '/dashboard/';
        }
        catch(error) {
        console.log(error.message);
        alert(error.message);
        }
    };

  render() {
    return (
      <div className="page">
      <div className="content">
        <div className="form-section">
          <h1 className="heading">Create Account</h1>
        
        <form className="form" onSubmit={this.handleSubmit}><br></br>
          <div className="horizontal-box">
            <div className="left">
              <label className="input-label" for="fname">First Name</label>
              <input className="input-field" name="fname" type="text" value={this.state.value} placeholder="Jane" onChange={this.handleInputChange} />
            </div>
            <div className="left">
              <label className="input-label" for="lname">Last Name</label>
              <input className="input-field" name="lname" type="text" value={this.state.value} placeholder="Doe" onChange={this.handleInputChange} />
            </div>
          </div>
          <label className="input-label" for="email">Email</label>
          <input className="input-field" name="email" type="text" value={this.state.value} placeholder="sample@email.com" onChange={this.handleInputChange} />
          
          <label className="input-label" for="email">Password</label>
          <input className="input-field" name="password" type="password" value={this.state.value} placeholder="your password" onChange={this.handleInputChange} />

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
}