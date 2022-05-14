import { createContext, useContext, useEffect, useState } from "react";
import UserContext from "./UserContext";
import axiosAPI from "../api/axiosAPI";
import { toast } from "react-toastify";
import { loadStripe } from "@stripe/stripe-js";
import { useNavigate } from "react-router-dom";

const CartContext = createContext({})
export default CartContext

export const CartProvider = ({ children }) => {
    // import user context and useNavigate
    const { token } = useContext(UserContext)
    const navigate = useNavigate()
    // state
    const [cart, setCart] = useState([])
    const [selection, setSelection] = useState({ variant_id: "", quantity: "" })
    const [tempVariant, setTempVariant] = useState({})
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
        setIsLoading(true)
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

    const addToCart = async () => {
        if (token) {
            try {
                await toast.promise(axiosAPI.post(`/cart/${selection.variant_id}/add`,
                    { quantity: `${selection.quantity}` },
                    {
                        headers: {
                            'Authorization': `Bearer ${token.accessToken}`
                        }
                    }), {
                    pending: 'Adding to cart',
                    success: 'Successfully added to cart.'
                })
                setTempVariant({
                    ...tempVariant,
                    stock: tempVariant.stock - selection.quantity
                })
            } catch (err) {
                if (err.response.status === 403) {
                    toast.error('Quantity exceeds stock available', {
                        toastId: 'addToCartError'
                    })
                } else {
                    toast.error('Unable to connect to server. Please try again later.', {
                        toastId: 'addToCartError'
                    })
                }

            }
        } else if (!token) {
            toast.error('Please login to add to cart', {
                toastId: 'addToCartError'
            })
        }
    }

    const updateCartItem = async (variantId, newQuantity) => {
        if (token) {
            try {
                await toast.promise(axiosAPI.post(`/cart/${variantId}/quantity/update`,
                    { newQuantity: newQuantity },
                    {
                        headers: {
                            'Authorization': `Bearer ${token.accessToken}`
                        }
                    }), {
                    pending: 'Updating cart item quantity',
                    success: 'Successfully updated cart item quantity.'
                })
            } catch (err) {
                if (err.response.status === 403) {
                    toast.error('Quantity exceeds stock available', {
                        toastId: 'updateCartError'
                    })
                } else {
                    toast.error('Unable to connect to server. Please try again later.', {
                        toastId: 'updateCartError'
                    })
                }
            }
        }
    }

    const deleteCartItem = async (variantId) => {
        if (token) {
            try {
                await toast.promise(axiosAPI.get(`/cart/${variantId}/delete`, {
                    headers: {
                        Authorization: `Bearer ${token.accessToken}`
                    }
                }), {
                    pending: 'Deleting cart item',
                    success: 'Successfully deleted cart item.'
                })
            } catch {
                toast.error('Unable to connect to server. Please try again later.', {
                    toastId: 'deleteCartError'
                })
            }
        }
    }

    const checkout = async () => {
        if (token && cart.length !== 0) {
            try {
                const response = await axiosAPI.get('/checkout', {
                    headers: {
                        Authorization: `Bearer ${token.accessToken}`
                    }
                })
                setCheckoutResponse(response.data)
            } catch (err) {
                toast.error('Unable to checkout now. Please refresh and try again.', {
                    toastId: 'checkoutError'
                })
            }
        } else if (token && cart.length === 0) {
            toast.error('Add something into your cart before checkout', {
                toastId: 'noItemError'
            })
        } else {
            toast.error('Please login to checkout', {
                toastId: 'checkoutError'
            })
            navigate('/users/login-register')
        }

    }
    // return cart provider
    return (
        <CartContext.Provider value={{
            cart, setCart,
            selection, setSelection,
            tempVariant, setTempVariant,
            checkoutResponse,
            isLoading, setIsLoading,
            getCart,
            addToCart,
            updateCartItem,
            deleteCartItem,
            checkout
        }}>
            {children}
        </CartContext.Provider>
    )
}