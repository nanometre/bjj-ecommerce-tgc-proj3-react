import { createContext, useState, useEffect } from 'react';
import axiosAPI from '../api/axiosAPI';

const ProductContext = createContext({});
export default ProductContext;

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([])
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

    const getProductById = (productId) => {
        return products.filter(p => p.product_id === productId)[0]
        // try {
        //     const response = await axiosAPI.get(`/products/${productId}/variant`)
        //     setIsLoading(false)
        //     return response.data
        // } catch (err) {
        //     console.log(err.message)
        // }
        
    }

    return <ProductContext.Provider value={{
        products,
        getProductById,
        isLoading
    }}>
        {children}
    </ProductContext.Provider>
}

