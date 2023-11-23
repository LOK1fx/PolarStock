import React from "react";
import { Auth } from "../../components/auth";
import { auth } from "../../config/firebase";
import { logOut } from "../../components/auth";

import { AccountInfo } from "./account_info";

import "./account_page.css"

export const AccountPage = () => {
    return (
        <div className="account-page">
            { auth?.currentUser?.email == undefined &&
                <Auth></Auth>
            }

            { auth?.currentUser?.email != undefined &&
                <AccountInfo></AccountInfo>
            }
            


            { auth?.currentUser?.email != undefined &&
                <button onClick={logOut} className="logout">Выйти из аккаунта</button>
            }
            
        </div>
    );
}