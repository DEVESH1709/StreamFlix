import React from 'react';
import {
 BrowserRouter,
  RouterProvider,
  Route,Routes,
  Link,
} from "react-router-dom";
import { useEffect } from 'react';
import './App.css';
import Home from './screens/Home';
import Login from './screens/Login';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './firebase';
import Profile from './screens/Profile';

function App() {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        })
      )
        // setUser(userAuth);
      } else {
        // Logged out
        dispatch(logout());
      }
    });
    
    return unsubscribe;
  }, [dispatch]);


  return (
    <div className="app">
    <BrowserRouter>
      {!user ? (<Login />) : (
        <Routes>
          <Route path="/profile" element={<Profile />} />
          
          <Route exact path="/" element={<Home/>} />;
        </Routes>
      )}
    </BrowserRouter>


  </div>
  );
}

export default App;
