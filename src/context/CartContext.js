import { createContext, useContext, useEffect, useState } from "react";
import UserContext from "./UserContext";
import axiosAPI from "../api/axiosAPI";
import { toast } from "react-toastify";

const CartContext = createContext({})
export default CartContext

export const CartProvider = ({ children }) => {
    // import user context
    const { token } = useContext(UserContext)
    // state
    const [cart, setCart] = useState([])
    const [checkoutResponse, setCheckoutResponse] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    // useEffect to get cart items on componenet did moint
    useEffect(() => {
        getCart()
    }, [token])

    //context functions
    const getCart = async () => {
        if (token) {
            try {
                const cartResponse = await axiosAPI.get('/cart', {
                    headers: {
                        Authorization: `Bearer ${token.accessToken}`
                    }
                })
                setCart(cartResponse.data)
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
                const checkoutResponse = await axiosAPI.get('/checkout', {
                    headers: {
                        Authorization: `Bearer ${token.accessToken}`
                    }
                })
                setCheckoutResponse(checkoutResponse.data)
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