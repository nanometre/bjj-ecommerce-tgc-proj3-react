import React from "react";
import {
    Routes,
    Route,
} from "react-router-dom";
import { UserProvider } from "../context/UserContext";
import UserLoginRegister from "./UserLoginRegister";
import Orders from "./Orders"

export default function Users() {
    return (
        <UserProvider>
            <Routes>
                <Route path="login-register" element={<UserLoginRegister />}/>
                <Route path="orders" element={<Orders />}/>
            </Routes>
        </UserProvider>
    )
}