import React, { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserContext = createContext();

function Home() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("currentUser");

    if (!savedUser) {
      navigate("/login");
    } else {
      // Check if savedUser is a valid JSON string (starts with { or [)
      if (savedUser.startsWith("{") || savedUser.startsWith("[")) {
        setCurrentUser(JSON.parse(savedUser));
      } else {
        // If it's just a plain string (like name), wrap it
        setCurrentUser({ name: savedUser });
      }
    }
  }, [navigate]);

  return (
    <UserContext.Provider value={currentUser}>
      <h2>{`Welcome ${currentUser ? currentUser.name : "users"}`}</h2>
    </UserContext.Provider>
  );
}

export default Home;
