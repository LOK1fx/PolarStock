import { React } from "react";
import { Auth } from "../../components/auth";
import { auth } from "../../config/firebase";
import { logOut } from "../../components/auth";

export const AccountInfo = () => {
    return (
        <div>
            <div className="profile-banner">
                <img src="https://i.postimg.cc/FsbDkdC9/Image-2.png"></img>
            </div>
            
            <div className="account-info-background">
                <img src={auth.currentUser.photoURL} className="avatar"></img>

                <div className="user-info">
                    <h2 className="">{auth.currentUser.displayName}</h2>

                    { auth?.currentUser?.email &&
                        <h3>{auth.currentUser.email}</h3>
                    }
                </div>

                <div className="payments-block">
                    <button className="payments-button">
                        <img src="https://i.postimg.cc/520zph0H/Live-area-1.png"></img>
                        <h2>Кошелек</h2>
                    </button>

                    <button className="payments-button">
                        <img src="https://i.postimg.cc/cHXZDb6H/Live-area-2.png"></img>
                        <h2>История</h2>
                    </button>

                    <button className="payments-button">
                        <img src="https://i.postimg.cc/JnzR9RNC/Live-area.png"></img>
                        <h2>Доставки</h2>
                    </button>
                </div>
            </div>
        </div>
    );
}