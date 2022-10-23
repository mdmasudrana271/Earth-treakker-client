import React, { createContext, useEffect, useState } from 'react';

import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../firebase/firebase.config'

export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null)

    const [loading, setLoading] = useState(true)

    const googleSignIn = (googleProvider)=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }

    const facebookSignIn = (facebookProvider) =>{
        setLoading(true)
        return signInWithPopup(auth,facebookProvider)
    }

    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }


    const updateUserProfile = (profile) =>{
        setLoading(true)
        return updateProfile(auth.currentUser, profile)
    }

    const loginWithEmailAndPassword = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }


    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }

    const varifyEmailAddress = () =>{
        return sendEmailVerification(auth.currentUser)
    }

    const resetPassword = (email) =>{
        return sendPasswordResetEmail(auth,email)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser === null || currentUser?.emailVerified) {
                setLoading(false)
              setUser(currentUser);
            }
            
          });

        return () => {
            unsubscribe();
          };
    },[])

    const authInfo = {googleSignIn, facebookSignIn, createUser, loginWithEmailAndPassword, updateUserProfile, user,logOut, varifyEmailAddress, loading, resetPassword }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;