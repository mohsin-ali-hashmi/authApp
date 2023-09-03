import React, { useState } from 'react';
import { deleteDoc, doc } from 'firebase/firestore';
import { deleteUser } from 'firebase/auth';
import { auth, firestore } from '../../firebaseConfig/firebase';
import './deleteAccount.css';

const DeleteAccount = ({ user }) => {
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state

  const handleDeleteAccount = async () => {
    try {
      setLoading(true); // Set loading state to true while deleting
      setError(null); // Clear any previous errors

      await deleteDoc(doc(firestore, 'authData', user.uid));
      await deleteUser(auth.currentUser);

      console.log('Account deleted.');
    } catch (err) {
      setError(err.message); // Set error state with the error message
      console.error('Error deleting account:', err);
    } finally {
      setLoading(false); // Set loading state back to false whether successful or not
    }
  };

  return (
    <div>
      {user && (
        <div className="delete-button-container">
          <button
            className="delete-button"
            onClick={handleDeleteAccount}
            disabled={loading}
          >
            {loading ? 'Deleting...' : 'Delete My Account'}
          </button>
          {error && <div className="error-message">{error}</div>}
        </div>
      )}
    </div>
  );
};

export default DeleteAccount;
