import React from "react";
import { Link } from "react-router-dom";

export default function CheckoutSuccess() {
    return (
        <div className="container content-container my-4">
            <div className="p-4 rounded-3 shadow-lg border border-dark">
                <h3>Your order has been processed!</h3>
                <div className='mt-4'>
                    <p>View your <Link to="/orders" className="text-dark fw-bold">order(s)</Link>. Or <Link to="/products" className="text-dark fw-bold">shop</Link> for other products.</p>
                </div>
            </div>
        </div>
    )
}