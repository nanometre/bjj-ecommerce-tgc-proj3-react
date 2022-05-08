import React, {useState} from 'react';
import axios from 'axios';

const ProductContext = React.createContext({});
export default ProductContext;

export const ProductProvider = (props) => {
    // const productAPI = await axios.get('https://bjj-ecom-tgc-proj3-express.herokuapp.com/api/products')
    // console.log(productAPI)
    const [products, setProducts] = useState([
        {
            id: 1,
            product_name: "Brown Rice Cookies",
            cost: 9.99
        },
        {
            id: 2,
            product_name: "Soya Bean Milkshake",
            cost: 12.50
        },
        {
            id: 3,
            product_name: "Mock Meat Burger",
            cost: 15.00
        }
    ])

    const productContext = {
        products: () => {
            return products;
        },
        getProductById: (productId) => {
            return products.filter(p => p.id === productId)[0]
        }
    }

    return <ProductContext.Provider value={productContext}>
        {props.children}
    </ProductContext.Provider>
}

