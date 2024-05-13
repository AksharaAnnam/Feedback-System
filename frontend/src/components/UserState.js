import UserContext from "./UserContext";
import { useState } from "react";
import { Login } from "./login";
import { BrowserRouter, Routes, Route} from "react-router-dom";

const UserState=(props)=>{
    const s1={
        "uname":"Some",
        "role":"",
        "isLoggedIn":false
    }
    const [state,setState]=useState(s1);

    const login=(email,role)=>{
        setState({
            "uname":email,
            "role":role,
            "isLoggedIn":true
        })
    }
    return(
        <UserContext.Provider value={{state,login}}>
            {props.children}
            <BrowserRouter>
            <Routes>
                <Route path="/" element="login">
                </Route>
            </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    )
}

export default UserState;