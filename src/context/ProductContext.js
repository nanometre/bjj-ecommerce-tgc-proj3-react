import { createContext, useState, useEffect } from 'react';
import { toast } from "react-toastify";
import axiosAPI from '../api/axiosAPI';

const ProductContext = createContext({});
export default ProductContext;

export const ProductProvider = ({ children }) => {
    // states
    const [products, setProducts] = useState([])
    const [oneProduct, setOneProduct] = useState({product: "", variants: []})
    const [selection, setSelection] = useState({variant_id: "", quantity: ""})
    const [tempVariant, setTempVariant] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    // useEffect to get all products on component did mount
    useEffect(() => {
        getProducts()
    }, [])
    // context functions
    const getProducts = async () => {
        try {
            const response = await axiosAPI.get('/products')
            setProducts(response.data)
            setIsLoading(false)
        } catch (err) {
            toast.error('Unable to connect to server. Please try again later.', {
                position: "bottom-right",
                autoClose: 3500,
                toastId: 'getProductsError'
            })
        }
    }
    const getProductById = async (productId) => {
        try {
            const response = await axiosAPI.get(`/products/${productId}/variants`)
            setOneProduct(response.data)
        } catch (err) {
            toast.error('Unable to connect to server. Please try again later.', {
                position: "bottom-right",
                autoClose: 3500,
                toastId: 'getProductError'
            })
        }
        setIsLoading(false)
    }
    // return context provider
    return <ProductContext.Provider value={{
        products,
        oneProduct, setOneProduct, 
        selection, setSelection,
        tempVariant, setTempVariant,
        getProductById,
        isLoading, setIsLoading,
    }}>
        {children}
    </ProductContext.Provider>
}

