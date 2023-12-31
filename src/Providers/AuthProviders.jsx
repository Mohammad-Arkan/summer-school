
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import app from "../firebase/firebase.config";

 export const AuthContext = createContext(null)
 const auth = getAuth(app);
const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

const createUser =(email, password)=> {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
}

const signIn =(email, password)=> {
    setLoading(true)
   return signInWithEmailAndPassword(auth, email, password)
}


const updateUserProfile =(name, photo)=> {
    return updateProfile(auth.currentUser, {
        displayName: name, photoURL: photo,
      })
      
}

useEffect(()=> {
    const unSubscribe =  onAuthStateChanged(auth, currendUser => {
        setUser(currendUser);
        console.log('current user', currendUser);
        setLoading(false);
    })
    return () => {
        return unSubscribe()
    }
},[])

const logOut = ()=> {
    setLoading(false)
    return signOut(auth)
}

    const authInfo = {
        user,
        loading,
        createUser,
        updateUserProfile,
        signIn,
        logOut,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}

        </AuthContext.Provider>
    );
};

export default AuthProviders;