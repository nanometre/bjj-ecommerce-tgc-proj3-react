import React from "react";
import { Link } from "react-router-dom";

export default function CheckoutCancel() {
    return (
        <div className="container content-container my-4">
            <div className="p-4 rounded-3 shadow-lg border border-dark">
                <h3>Your order has been cancelled!</h3>
                <div className='mt-4'>
                    <p>Go back to <Link to="/cart" className="text-dark fw-bold">cart</Link> and checkout again. Or <Link to="/products" className="text-dark fw-bold">shop</Link> for other products.</p>
                </div>
            </div>
        </div>
    )
}