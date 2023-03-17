import React, { Component } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";

export default class SignUp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
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
        const u = this.auth.currentUser;
        const uid = u.uid;
        // redirect to dashboard page
        }
        catch(error) {
        console.log(error.message);
        alert(error.message);
        }
    };

  render() {
    return (
      <div className="slide-up">
        <div className="border">
          <h1>welcome to lingo!</h1>
          <p>please sign up here:</p>
        <form className="form" onSubmit={this.handleSubmit}><br></br>
                 
        <input name="email" type="text" value={this.state.value} placeholder="email" onChange={this.handleInputChange} />
        <input name="password" type="password" value={this.state.value} placeholder="password" onChange={this.handleInputChange} />

        <input type="submit" value="Submit" />
        <p className="body">already have an account? <a className="body" href="/sign-in">sign in here!</a></p>
        </form>
        </div>

      </div>
    );
  } 
}