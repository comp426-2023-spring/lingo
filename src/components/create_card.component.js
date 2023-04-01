import React, { Component } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';
import './sign_.component.css';

// use to create multiple cardsets at once

export default class CreateCard extends Component {
  
    // constructor(props) {
    //   super(props);
    //   this.state = {
    //     languages: '',
    //     sides: ''
    //   };
  
    //   this.handleInputChange = this.handleInputChange.bind(this);
    //   this.handleSubmit = this.handleSubmit.bind(this);
    //   this.auth = auth;
    // }
  
    // handleInputChange(event) {
    //   const target = event.target;
    //   const value = target.value;
    //   const name = target.name;
  
    //   this.setState({
    //     [name]: value
    //   });
    // }
  
    // async handleSubmit(event) {
    //   event.preventDefault();
    //   this.create_cardset();
    // }
  
    // create_cardset = async () => {
    //   //login here
    //   try {
    //     const user = await create_card(this.auth, this.state.email, this.state.password);
    //     const u = this.auth.currentUser;
    //     const uid = u.uid;
    //     // redirect to cardsets page
    //     window.location.href = '/cardsets/1'
    //     }
    //     catch(error) {
    //       console.log(error.message);
    //       alert(error.message);
    //     }
    // };
  
    //   render() {
    //     return (
    //       <div className="page">
    //       <div className="content">
    //         <div className="form-section">
    //           <h1 className="heading">Welcome Back!</h1>
  
    //          <form className="form" onSubmit={this.handleSubmit}><br></br>
            
    //           <label className="input-label" for="email">Email</label>
    //           <input className="input-field" name="email" type="text" value={this.state.value} placeholder="sample@email.com" onChange={this.handleInputChange} />
              
    //           <label className="input-label" for="email">Password</label>
    //           <input className="input-field" name="password" type="password" value={this.state.value} placeholder="your password" onChange={this.handleInputChange} />
  
    //           <input className="submit-button" type="submit" value="Submit" />
    //           <p className="redirect">Don't have an account? <a className="redirect-link" href="/sign-up">Sign up here!</a></p>
    //         </form>
    //         </div>
    //         <div className="info-section">
    //           <p>i'm gonna be an image one day!</p>
    //         </div>
    //       </div>
    //       </div>
    //     );
    //   }
    }