import React, { Component } from 'react';
import './sign_.component.css';
import { collection, doc, setDoc, addDoc, getDoc, getDocs, query, where } from "firebase/firestore";
import { auth, db } from '../firebase';
import { onAuthStateChanged } from '@firebase/auth';

var set_names = [];

  export default function CardSets() {
    let subject = null;
    // const params = useParams();
    // const set_id = params.id
    onAuthStateChanged(auth, (user) => {
      if (user) {
        subject = user;
      }
    })
  
    // var set_details = null;
    // var languages = null;
    // var card_ids = null;
    // var sides = null;

    getSet = async () => {
      console.log("in get set");

      if (setSnap.exists())
      i = 0;
      // const querySnapshot = await getDocs(collection(db, "sets"));
      querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        set_names[i] = doc.name;
        i++;
      });
    }

    function makeButtons(c) {
      for (var i = 0; i < c.length; i++) {
        $('.button-holder').append('<button value=' + c[i] + '>' + c[i] +
          '</button>');
      }
    }
    
    makeButtons(set_names);
  

// Firestore data converter

    return (

      <div>
          <h1>Cardsets</h1>
          <div class="button-holder"></div>
      </div>

    );
}