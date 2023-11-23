import React, { useState } from "react";

import { auth, googleProvider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { signOut } from "firebase/auth";

import "./auth.css"

export const logOut = async () => {
    try
    {
        await signOut(auth);
    }
    catch (ex)
    {
        console.error(ex);
    }
};

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

    return (
        <div>
            {isLoggedIn == false &&
            <div>
                <h1>Вы не вошли в аккаунт</h1>
                <button onClick={signIn} className="login-google">Войти (Google)</button>
            </div>
            }
        </div>
    );
}