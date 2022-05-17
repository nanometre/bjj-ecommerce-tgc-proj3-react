import React from "react";
import CheckoutSuccess from "./CheckoutSuccess";
import CheckoutCancel from "./CheckoutCancel";
import { Routes, Route } from "react-router-dom";

export default function Checkout() {
    return (
        <Routes>
            <Route path="/success" element={<CheckoutSuccess />} />
            <Route path="/cancel" element={<CheckoutCancel />} />
        </Routes>
    )
}