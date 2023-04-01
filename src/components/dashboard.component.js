import React, { Component } from 'react';
import { fire, auth } from '../firebase';
import { onAuthStateChanged } from "firebase/auth";

export default function Dashboard() {
  let subject = null;
  onAuthStateChanged(auth, (user) => {
    if (user) {
      subject = user;
    }
  })
  
  return (
    
    <div>
        <h1>dashboard</h1>
    </div>

  );
}