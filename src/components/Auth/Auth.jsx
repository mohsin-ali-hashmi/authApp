import React, { useState } from 'react';

import {GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import {auth} from '../../firebaseConfig/firebase';
import './auth.css'

function Auth() {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const signInWithGoogle = async () => {
    try {
      setLoading(true); 
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      setLoading(false); 
    } catch (err) {
      setError(err.message); 
      setLoading(false); 
    }
    
  };

  return (
    <div className="auth-container">
    <h2 className="auth-heading">Sign In</h2>
    {error && <div className="auth-error">{error}</div>}
      <button className="auth-button" onClick={signInWithGoogle} disabled={loading}>
        {loading ? 'Signing In...' : 'Sign In with Google'}
      </button>
  </div>
  );
}

export default Auth;
