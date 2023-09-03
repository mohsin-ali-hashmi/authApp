import React, { useState, useEffect } from "react";
import { auth } from "./firebaseConfig/firebase";
import Auth from "./components/Auth/Auth";
import Profile from "./components/Profile/Profile";
import DeleteAccount from "./components/Delete/DeleteAccount";
import './App.css'
// import firestoreTest from './firestoreTest';

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
        <>
          <DeleteAccount user={user} />
          <Profile user={user} />
        </>
      ) : (
        <Auth />
      )}
    </div>
  );
}

export default App;
