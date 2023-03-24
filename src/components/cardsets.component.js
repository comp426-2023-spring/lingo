import React, { Component } from 'react';
import './sign_.component.css';
import { collection, doc, setDoc, addDoc } from "firebase/firestore";
import { auth, db } from '../firebase';

 
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
    // this.setDoc = this.setDoc.bind(this);
    // this.set_with_merge = this.set_with_merge.bind(this);
    // this.data_types = this.data_types.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  async handleSubmit(event) {
    console.log("test");
    event.preventDefault();
    this.setDoc();
  }
  // Add a new document with a generated i
  
setDoc = async () => {
  try {
  const docRef = await addDoc(collection(db, "sets"), {
    sides: 3,
  });
  console.log("The cardset ID: ", docRef.id);  
} catch(error) {
  console.log(error.message);
  alert(error.message);
}
};

  render() {
    return (

      <div>
          <h1>Cardsets</h1>
          <form className="button" onSubmit = {this.handleSubmit}>
          <input type ="submit" value="test"></input>
          </form>
      </div>

    );
  }
}