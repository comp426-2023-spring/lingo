import React, { Component } from 'react';
import './sign_.component.css';
import { collection, doc, setDoc, addDoc } from "firebase/firestore";
import { auth } from '../firebase';

 
export default class Cardsets extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sides: 2,
      languages: '',
      user_id: '',
      set_id: '',
      card_ids: ''
    }
    this.set_Doc = this.set_Doc.bind(this);
    this.set_with_merge = this.set_with_merge.bind(this);
    this.data_types = this.data_types.bind(this);

  }

  // Add a new document with a generated i
set_Doc(event) {
  const docRef = addDoc(collection("English", "sets"), {
    sides: 3,
  });
  console.log("The cardset ID: ", docRef.id);  
};

  render() {
    return (

      <div>
          <h1>Cardsets</h1>
          <form className="button" onSubmit = {this.setDoc}>
          <input type ="submit" value="test"></input>
          </form>
      </div>

    );
  }
}