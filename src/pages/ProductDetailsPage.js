import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import ProductContext from "../context/ProductContext";

export default function ProductDetailsPage() {
    const params = useParams()
    const productId = params.product_id
    const [product, setProduct] = useState({})
    const productContext = useContext(ProductContext)

    useEffect(() => {
        const fetchProduct = () => {
            let tempProduct = productContext.getProductById(parseInt(productId))
            setProduct(tempProduct)
        }
        fetchProduct()
    }, [productId])

    return <React.Fragment>
        <h3>Product Details</h3>
        <ul>
            <li>ID: {product.id}</li>
            <li>Name: {product.product_name}</li>
            <li>Cost: {product.cost}</li>
        </ul>
    </React.Fragment>
}