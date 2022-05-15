import React, { useContext } from "react";
import CartContext from "../context/CartContext";
import UserContext from "../context/UserContext"
import CartItem from "../components/CartItem"
import "../assets/styles/form.css"

export default function Cart() {
    const { cart, checkout } = useContext(CartContext)
    const { token } = useContext(UserContext)

    const onCheckoutSubmit = () => {
        checkout()
    }

    return (!token ? (
        <h5>Please login to access the cart</h5>
    ) : (
        <React.Fragment>
            <div className="container content-container">
                <div className="h-100 rounded-3 shadow-lg border border-dark" style={{width: "90%"}}>
                    <div className="h-100 p-4">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-12">
                                <h3 className="mb-3">Shopping Cart</h3>
                                {cart.length === 0 ?
                                    <div>No items in cart</div> :
                                    cart?.map((c, i) =>
                                        <React.Fragment key={i}>
                                            <CartItem c={c} />
                                        </React.Fragment>
                                    )}
                                <div className="d-flex justify-content-end me-3">
                                    <h4>Total: {(cart?.reduce((sum, cartItem) => sum + (cartItem.quantity * (cartItem.variant.product.cost / 100)), 0)).toFixed(2)}</h4>
                                </div>
                                <div className="custom-btn-group me-3">
                                    <button className="btn btn-dark btn-outline-light" onClick={onCheckoutSubmit}>Checkout</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
    )
}