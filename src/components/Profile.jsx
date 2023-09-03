import React, { useState } from 'react';
import firebase from '../firebaseConfig/firebase';

function Profile({ user }) {
  const [additionalFields, setAdditionalFields] = useState({
    age: '',
    gender: '',
  });

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setAdditionalFields({ ...additionalFields, [name]: value });
  };

  const saveProfile = () => {
    // Save additionalFields to Firestore
    const db = firebase.firestore();
    const userRef = db.collection('users').doc(user.uid);
    userRef.set(additionalFields, { merge: true });
  };

  return (
    <div>
      <h2>Welcome, {user.displayName}!</h2>
      <label>
        Age:
        <input
          type="text"
          name="age"
          value={additionalFields.age}
          onChange={handleFieldChange}
        />
      </label>
      <label>
        Gender:
        <input
          type="text"
          name="gender"
          value={additionalFields.gender}
          onChange={handleFieldChange}
        />
      </label>
      <button onClick={saveProfile}>Save Profile</button>
    </div>
  );
}

export default Profile;
