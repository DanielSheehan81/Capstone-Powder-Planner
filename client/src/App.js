import './App.css';

import React, {useState, useEffect} from 'react';
import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';
import {Routes, Route} from "react-router-dom";
import SnowboardMan from './Components/SnowboardMan';
function App() {
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    fetch("/me", {
      credentials: "include",
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user);
        });
      } else {
      }
    });
  }, []);










  return (
    <div >
      <SnowboardMan />
      <div >

    {currentUser ? (
        <div>
          <Home currentUser={currentUser} setCurrentUser={setCurrentUser}/>
        </div>
      ) : (
        <div className="login-page">
          <Login
            setCurrentUser={setCurrentUser}
            currentUser={currentUser}
          />
    </div>)}

    <Routes>
    <Route path="/login" element={<Login
          setCurrentUser={setCurrentUser}
          currentUser={currentUser}
        />} />
      {currentUser ? (
        ""
      ) : (

      <Route path="/signup" element={<Signup setCurrentUser={setCurrentUser} />} />
      )}
      {/* <Route path="/" element={<Home currentUser={currentUser} />} /> */}


    </Routes>
      </div>
    </div>
  );
}

export default App;
