import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup, updateProfile } from "firebase/auth";
import app from "../../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);


const AuthProvider = ({ children }) => {
    // const [user, setUser] = useState(null);

    const googleProviderLogin = (googleProvider) => {
        return signInWithPopup(auth,googleProvider)
    }

    const creatUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }

    // useEffect(() => {
    //     const unsubscribe = onAuthStateChanged(auth,(currentUser) =>{
    //         console.log('inside auth state change', currentUser);
    //     })
    // }, []);

    const authInfo = { creatUser, updateUserProfile,googleProviderLogin }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;