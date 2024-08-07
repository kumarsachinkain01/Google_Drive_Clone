import React, { useState } from 'react';
import Header from './Component/Header/Header';
import SideBar from './Component/SideBar/SideBar';
import Hero from './Component/Hero/Hero';
import './App.css';
import './index.css';
import { auth, provider } from './firebase';
import { signInWithPopup } from 'firebase/auth';

const App = () => {
  const [user, setUser] = useState(null);

  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <>
      {user ? (
        <>
          <Header photoURL={user.photoURL} />
          <div className='App'>
            <SideBar />
            <Hero />
          </div>
        </>
      ) : (
        <div className='loginWrap'>
          <img src='src\Logo_Name.png' alt=' logo-image' className='login-image' />
          <button onClick={signIn}>Login to Google Drive Clone</button>
        </div>
      )}
    </>
  );
};

export default App;
