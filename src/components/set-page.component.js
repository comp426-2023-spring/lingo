import React from 'react';
import { db, auth } from '../firebase';
import { onAuthStateChanged } from "firebase/auth";
import {useParams} from 'react-router-dom';
import { doc, getDoc } from "firebase/firestore";
import { useState, useEffect } from 'react';

export default function SetPage() {
  let subject = null;
  const params = useParams();
  const set_id = params.id;

  const [setdata, setSetData] = useState([]);
  const [languages, setLanguages] = useState("loading...");
  const [cards, setCards] = useState([]);
  
  onAuthStateChanged(auth, (user) => {
    if (user) {
      subject = user;
    }
  })

  // check that set_id is in subject's set ids or public before showing

  useEffect(() => {
      const getSetData = async () => {
        const docRef = doc(db, "sets", set_id);
        const docSnap = await getDoc(docRef);

        setSetData(docSnap.data());

        var language_string = "";
        if(setdata.languages) {
          setdata.languages.forEach((language) => language_string += language + ", ");
          language_string = language_string.substring(0, language_string.length - 2);
          setLanguages(language_string);
        }

        if(setdata.card_ids) {
          let i;
          setCards([]);
          for(i = 0; i < setdata.card_ids.length; i++) {
            var card_id = setdata.card_ids[i];
            const cardRef = doc(db, "cards", card_id);
            const cardSnap = await getDoc(cardRef);
            setCards(arr => [...arr , cardSnap.data()]);
          }
        }
      }

      getSetData();
  }, [])
    
  return (
    
    <div>
      <h1>{setdata.name}</h1>
      <p>{setdata.description}</p>
      <p>Language(s): {languages}</p>
      <table id="terms">
        <tbody>
          <tr>
            <th>Term</th>
            <th>Pronunciation</th>
            <th>Definition</th>
          </tr>
          {
            cards.map((data) => (
              <tr key={data.term}>
                <td>{data.term}</td>
                <td>{data.pronunciation}</td>
                <td>{data.definition}</td>
              </tr>
              ))
          }
        </tbody>
      </table>
    </div>

  );
}