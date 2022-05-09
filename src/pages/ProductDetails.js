import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import ProductContext from "../context/ProductContext";
import Loading from "../components/Loading";

export default function ProductDetailsPage() {
    const params = useParams()
    const productId = params.product_id
    const { oneProduct, getProductById, isLoading, setIsLoading } = useContext(ProductContext)

    useEffect(() => {
        const getProduct = async () => {
            setIsLoading(true)
            await getProductById(productId)
        }
        getProduct()
    }, [])

    return (isLoading ? (
        <Loading />
    ) : (
        <React.Fragment>
            <h3>Product Details</h3>
            <ul>
                <li>ID: {oneProduct.product?.product_id}</li>
                <li>Name: {oneProduct.product?.product_name}</li>
                <li>Cost: {oneProduct.product?.cost}</li>
            </ul>
        </React.Fragment>
    ))
}