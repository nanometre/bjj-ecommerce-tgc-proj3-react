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
            <div className="h-100 rounded-3 shadow-lg">
                <div className="h-100 p-3">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-10">
                            <h3 className="mb-3 text-black">Shopping Cart</h3>
                            {cart?.map((c, i) =>
                                <React.Fragment key={i}>
                                    <CartItem c={c} />
                                </React.Fragment>
                            )}
                            <h6>Total: {(cart?.reduce((sum, cartItem)=> sum + (cartItem.quantity * (cartItem.variant.product.cost / 100)), 0)).toFixed(2)}</h6>
                            <div className="custom-btn-group">
                                <button className="btn btn-dark btn-outline-light" onClick={onCheckoutSubmit}>Checkout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
    )
}