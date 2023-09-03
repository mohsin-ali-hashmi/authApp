import React, { useState } from 'react';
import { collection,  setDoc, doc } from 'firebase/firestore';
import { firestore } from '../../firebaseConfig/firebase';
import './profile.css';

function Profile({ user }) {
  const [additionalFields, setAdditionalFields] = useState({
    age: '',
    gender: '',
  });

  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setAdditionalFields({ ...additionalFields, [name]: value });
  };

  const saveProfile = async () => {
    try {
      setLoading(true); // Set loading state to true while saving
      setError(null); // Clear any previous errors

      const age = additionalFields.age;
      const gender = additionalFields.gender;

       await setDoc(
        doc(collection(firestore, 'authData'), user.uid),
        {
          age,
          gender,
        }
      );

      console.log('Profile saved successfully:');
    } catch (err) {
      setError(err.message); // Set error state with the error message
      console.error('Error saving profile:', err);
    } finally {
      setLoading(false); // Set loading state back to false whether successful or not
    }
  };

  return (
    <div className="profile-form-wrapper">
      <div className="profile-form">
        <h2 className="welcome-heading">Welcome, {user.displayName}!</h2>
        <p className="info-message">Please fill in your additional information.</p>
        <form>
          <div className="form-group">
            <label className="form-label" htmlFor="age">
              Age:
            </label>
            <input
              type="text"
              className="form-input"
              id="age"
              name="age"
              value={additionalFields.age}
              onChange={handleFieldChange}
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="gender">
              Gender:
            </label>
            <select
              className="form-input"
              id="gender"
              name="gender"
              value={additionalFields.gender}
              onChange={handleFieldChange}
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <button className="form-button" onClick={saveProfile} disabled={loading}>
            {loading ? 'Saving...' : 'Save Profile'}
          </button>
          {error && <div className="error-message">{error}</div>}
        </form>
      </div>
    </div>
  );
}

export default Profile;
