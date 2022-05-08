import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import ProductContext from "../context/ProductContext";

export default function ProductDetailsPage() {
    const params = useParams()
    const productId = params.product_id
    const [product, setProduct] = useState({})
    const { getProductById } = useContext(ProductContext)

    useEffect(() => {
        const getProduct = () => {
            let tempProduct = getProductById(parseInt(productId))
            setProduct(tempProduct)
        }
        getProduct()
    }, [productId])
    console.log(product)
    return <React.Fragment>
        <h3>Product Details</h3>
        <ul>
            <li>ID: {product.product_id}</li>
            <li>Name: {product.product_name}</li>
            <li>Cost: {product.cost}</li>
        </ul>
    </React.Fragment>
}