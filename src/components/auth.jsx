import React, { useState } from "react";

import { auth, googleProvider } from "../config/firebase";
import { signInWithPopup, signOut } from "firebase/auth";

export const Auth = () => {
    const [isLoggedIn, setLoggedIn] = useState(false);

    console.log(auth?.currentUser?.email);

    const signIn = async () => {
        try
        {
            await signInWithPopup(auth, googleProvider);

            setLoggedIn(true);
        }
        catch (ex)
        {
            console.error(ex);
        }
        
    };

    const logOut = async () => {
        try
        {
            await signOut(auth);
        }
        catch (ex)
        {
            console.error(ex);
        }
    };

    return (
        <div>
            {isLoggedIn == false && <button onClick={signIn}>Log In with Google</button>}
            {isLoggedIn == true && <button onClick={logOut}>Log Out</button>}
        </div>
    );
}