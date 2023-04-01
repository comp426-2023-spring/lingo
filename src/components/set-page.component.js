import React from 'react';
import { db, auth } from '../firebase';
import { onAuthStateChanged } from "firebase/auth";
import {useParams} from 'react-router-dom';
import { doc, getDoc } from "firebase/firestore";

export default function SetPage() {
  let subject = null;
  const params = useParams();
  const set_id = params.id;
  onAuthStateChanged(auth, (user) => {
    if (user) {
      subject = user;
    }
  })

  const getSet = async () => {
    const setRef = doc(db, "sets", set_id);
    const setSnap = await getDoc(setRef);

    if (setSnap.exists()) {
        console.log("Document data:", setSnap.data());
    } else {
        console.log("Set not found!");
    }
  }

  getSet();
    
  return (
    
    <div>
        <h1>dashboard</h1>
    </div>

  );
}