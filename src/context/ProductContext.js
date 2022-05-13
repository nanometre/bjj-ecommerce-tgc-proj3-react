import { createContext, useState, useEffect } from 'react';
import { toast } from "react-toastify";
import axiosAPI from '../api/axiosAPI';

const ProductContext = createContext({});
export default ProductContext;

export const ProductProvider = ({ children }) => {
    // states
    const [materials, setMaterials] = useState([])
    const [weaves, setWeaves] = useState([])
    const [categories, setCategories] = useState([])
    const [brands, setBrands] = useState([])
    const [products, setProducts] = useState([])
    const [oneProduct, setOneProduct] = useState({ product: "", variants: [] })
    const [searchInputs, setSearchInputs] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    // useEffect to get all products on component did mount
    useEffect(() => {
        getProducts()
        getSearchSelection()
    }, [])
    // context functions
    const getProducts = async () => {
        try {
            const response = await toast.promise(axiosAPI.post('/products', searchInputs), {
                pending: 'Fetching products',
                success: 'Fetched products',
                error: 'Error fetching products'
            }, {toastId: "fetchProducts"})
            setProducts(response.data)
            setIsLoading(false)
        } catch (err) {
            toast.error('Unable to connect to server. Please try again later.', {
                toastId: 'getProductsError'
            })
        }
    }
    const getSearchSelection = async () => {
        try {
            setMaterials((await axiosAPI.get('/products/materials')).data)
            setWeaves((await axiosAPI.get('/products/weaves')).data)
            setCategories((await axiosAPI.get('/products/categories')).data)
            setBrands((await axiosAPI.get('/products/brands')).data)
        } catch (err) {
            toast.error('Unable to connect to server. Please try again later.', {
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
                toastId: 'getProductError'
            })
        }
        setIsLoading(false)
    }
    // return context provider
    return <ProductContext.Provider value={{
        materials, weaves, categories, brands, products,
        oneProduct, setOneProduct,
        searchInputs, setSearchInputs,
        isLoading, setIsLoading,
        getProducts, getProductById,
    }}>
        {children}
    </ProductContext.Provider>
}

