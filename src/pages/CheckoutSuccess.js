import React from "react";
import { Link } from "react-router-dom";

export default function CheckoutSuccess() {
    return (
        <div className="container content-container my-4">
            <div className="p-4 rounded-3 shadow-lg border border-dark">
                <h3>Success!</h3>
                <p>Your order has been processed! Click <Link to="/products" className="text-dark">here</Link> continue shopping.</p>
            </div>
        </div>
    )
}