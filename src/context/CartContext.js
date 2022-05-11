import { createContext, useContext, useEffect, useState } from "react";
import UserContext from "./UserContext";
import axiosAPI from "../api/axiosAPI";
import { toast } from "react-toastify";
import { loadStripe } from "@stripe/stripe-js";

const CartContext = createContext({})
export default CartContext

export const CartProvider = ({ children }) => {
    // import user context
    const { token } = useContext(UserContext)
    // state
    const [cart, setCart] = useState([])
    const [checkoutResponse, setCheckoutResponse] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    // useEffect to get cart items on componenet did mount
    useEffect(() => {
        getCart()
    }, [token])

    useEffect(() => {
        const stripeCheckout = async () => {
            const stripePromise = loadStripe(checkoutResponse.publishableKey)
            const stripe = await stripePromise
            stripe.redirectToCheckout({ sessionId: checkoutResponse.sessionId })
        }
        if (Object.keys(checkoutResponse).length !== 0) {
            stripeCheckout()
        }
    }, [checkoutResponse])

    //context functions
    const getCart = async () => {
        if (token) {
            try {
                const response = await axiosAPI.get('/cart', {
                    headers: {
                        Authorization: `Bearer ${token.accessToken}`
                    }
                })
                setCart(response.data)
                setIsLoading(false)
            } catch {
                toast.error('Unable to connect to server. Please try again later.', {
                    position: 'bottom-right',
                    autoClose: 3500,
                    toastId: 'getCartError'
                })
                setIsLoading(false)
            }
        }
        setIsLoading(false)
    }

    const checkout = async () => {
        if (token) {
            try {
                const response = await axiosAPI.get('/checkout', {
                    headers: {
                        Authorization: `Bearer ${token.accessToken}`
                    }
                })
                setCheckoutResponse(response.data)
            } catch (err) {

            }
        }

    }
    // return cart provider
    return (
        <CartContext.Provider value={{
            cart,
            checkoutResponse,
            isLoading,
            checkout
        }}>
            {children}
        </CartContext.Provider>
    )
}