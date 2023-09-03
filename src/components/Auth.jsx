import React from 'react';
import {auth} from '../firebaseConfig/firebase';

function Auth() {
  const signInWithGoogle = () => {
    const provider = new auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
    
  };

  return (
    <div>
      <h2>Sign In</h2>
      <button onClick={signInWithGoogle}>Sign In with Google</button>
    </div>
  );
}

export default Auth;
