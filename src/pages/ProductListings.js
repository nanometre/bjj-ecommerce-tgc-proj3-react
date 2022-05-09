import React, { useContext } from "react";
import ProductContext from "../context/ProductContext";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";

export default function ProductListings() {
    const { products, isLoading } = useContext(ProductContext)
    return (isLoading ? (
        <Loading />
    ) : (
        <ul>
            {products.map(p =>
                <Link to={"/products/" + p.product_id}><li key={p.product_id}>{p.product_name} - {(p.cost / 100).toFixed(2)}</li></Link>)}
        </ul>
    )
    )
}