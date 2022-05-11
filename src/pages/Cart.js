import React, { useContext } from "react";
import CartContext from "../context/CartContext";
import Loading from "../components/Loading";
import CartItem from "../components/CartItem"
import "../assets/styles/form.css"

export default function Cart() {
    const { cart, checkoutResponse, isLoading, checkout } = useContext(CartContext)

    const onCheckoutSubmit = async () => {
        await checkout()
        console.log(checkoutResponse)
    }

    return (isLoading ? (
        <Loading />
    ) : (
        <React.Fragment>
            <div className="h-100 rounded-3 shadow-lg">
                <div className="h-100 p-3">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-10">
                            <h3 className="mb-3 text-black">Shopping Cart</h3>
                            {cart?.map((c, i) =>
                                <CartItem c={c} i={i} />
                            )}
                            <h6>Total: </h6>
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