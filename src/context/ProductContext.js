import { createContext, useState, useEffect } from 'react';
import axiosAPI from '../api/axiosAPI';

const ProductContext = createContext({});
export default ProductContext;

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([])
    const [oneProduct, setOneProduct] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(() => {
        getProducts()
    }, [])

    const getProducts = async () => {
        try {
            const response = await axiosAPI.get('/products')
            setProducts(response.data)
            setIsLoading(false)
        } catch (err) {
            console.log(err.message)
        }
    }

    const getProductById = async (productId) => {
        try {
            const response = await axiosAPI.get(`/products/${productId}/variants`)
            setOneProduct(response.data)
            setIsLoading(false)
        } catch (err) {
            console.log(err.message)
        }
        
    }

    return <ProductContext.Provider value={{
        products,
        oneProduct,
        getProductById,
        isLoading,
        setIsLoading
    }}>
        {children}
    </ProductContext.Provider>
}

