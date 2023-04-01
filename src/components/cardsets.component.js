import React, { Component } from 'react';
import './sign_.component.css';
import { collection, doc, setDoc, addDoc, getDoc, getDocs, query, where } from "firebase/firestore";
import { auth, db } from '../firebase';

 
export default class Cardsets extends Component {

  constructor(card_ids, languages, sides, user) {
    super();
    this.isDefault = isDefault;
    this.card_ids = card_ids;
    this.languages = languages;
    this.sides = sides;
    this.user = user;
  
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getDoc = this.getDoc.bind(this);
  }

  async handleSubmit(event) {
    console.log("make card");
    event.preventDefault();
    this.setDoc();
    this.setDoc2();
    this.setDoc3();
    this.setDoc4();
    this.getDoc();
  }
  // Add a new document with a generated ID
  
setDoc = async () => {
  try {
  const docRef = await addDoc(collection(db, "sets"), {
    isDefault: true,
    card_ids: ['Yessir'],
    languages: ['Enlgish', 'Spanish'],
    sides: 4,
    user: 'JoMama',
  })
  console.log("The cardset ID: ", docRef.id);  
} catch(error) {
  console.log(error.message);
  alert(error.message);
}
};

setDoc2 = async () => {
  try {
  const docRef = await addDoc(collection(db, "sets"), {
    isDefault: true,
    card_ids: ['nope'],
    languages: ['Japanese', 'French'],
    sides: 5,
    user: 'JoMama',
  })
  console.log("The cardset ID: ", docRef.id);  
} catch(error) {
  console.log(error.message);
  alert(error.message);
}
};

setDoc3 = async () => {
  try {
  const docRef = await addDoc(collection(db, "sets"), {
    isDefault: true,
    card_ids: ['no'],
    languages: ['French', 'English'],
    sides: 4,
    user: 'JoMama',
  })
  console.log("The cardset ID: ", docRef.id);  
} catch(error) {
  console.log(error.message);
  alert(error.message);
}
};

// converter() {
//   const cardConverter = {
//     toFirestore: (sets) => {
//       console.log("grabbing data");
//         return {
//             card_ids: sets.card_ids,
//             languages: sets.languages,
//             sides: sets.sides,
//             user: sets.user
//             };
//     },
//     fromFirestore: (snapshot, options) => {
//         console.log("creating cardset");
//         const data = snapshot.data(options);
//         return new Cardsets(data.card_ids, data.languages, data.sides, data.user);
//     }
//   };
  
//   const ref = doc(db, "cities", "LA").withConverter(cityConverter);
//   const docSnap = await getDoc(ref);
//   if (docSnap.exists()) {
//     // Convert to City object
//     const city = docSnap.data();
//     // Use a City instance method
//     console.log(city.toString());
//   } else {
//     console.log("No such document!");
//   }
// }

// Firestore data converter
getDoc = async () => {
  console.log("in get doc");

// implement once user is auth
// const q = query(collection(db, "cities"), where("capital", "==", true));

  const querySnapshot = await getDocs(collection(db, "sets"), where('isDefault', '==', true));
  querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
    // set = new Cardsets(doc.data().card_ids, doc.data().languages, doc,data().sides, doc.data().user);
    // CardsetsList = [sets];
    for (var i in doc) {
      const docArray = doc[i].data();
    }
  });
}

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