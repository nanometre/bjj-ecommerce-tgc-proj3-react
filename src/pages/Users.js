import React from "react";
import {
    Routes,
    Route,
} from "react-router-dom";
import UserLoginRegister from "./UserLoginRegister";
import Orders from "./Orders"

export default function Users() {
    return (
        <Routes>
            <Route path="login-register" element={<UserLoginRegister />} />
            <Route path="orders" element={<Orders />} />
        </Routes>
    )
}