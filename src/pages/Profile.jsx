import { getAuth } from "firebase/auth";
import { useState, useEffect } from "react";
import React from "react";
import SignIn from "./SignIn";

function Profile() {
  const [user, setUser] = useState(null);
  const auth = getAuth();
  useEffect(() => {
    setUser(auth.currentUser);
  }, []);

  return user ? <h1>Welcome </h1> : <SignIn />;
}

export default Profile;
