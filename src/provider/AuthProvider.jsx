import React, { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../firebase/firebase_config";

export const authContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading,setLoading] = useState(true)

  //! createUser
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //! signInUser
  const signIn = (email,password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
  }

  //!observe
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currenUser) => {
      console.log("user in the auth state change", currenUser);
      setUser(currenUser);
      setLoading(false)
    });
    return () => {
      unSubscribe();
    };
  }, []);

  //!SignOut

  const logOut = () =>{
    return signOut(auth)
  }

  //! Google SignIn
  const googleProvider = new GoogleAuthProvider();
  const googleLogin = () => {
    signInWithPopup(auth, googleProvider);
  };

  const authInfo = { googleLogin, user, createUser,logOut,signIn,loading };

  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
};

export default AuthProvider;
