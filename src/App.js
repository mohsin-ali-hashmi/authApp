import React, { useState, useEffect } from 'react';
import {auth} from './firebaseConfig/firebase';
import Auth from './components/Auth';
import Profile from './components/Profile';
import Welcome from './components/Welcome';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="App">
      {user ? (
        <Profile user={user} />
      ) : (
        <Auth />
      )}
      {user && user.displayName ? (
        <Welcome user={user} />
      ) : null}
    </div>
  );
}

export default App;
