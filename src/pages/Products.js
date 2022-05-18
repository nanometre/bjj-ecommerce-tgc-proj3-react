import React from "react";
import {
    Routes,
    Route,
} from "react-router-dom"
import { ProductProvider } from "../context/ProductContext";
import ProductListings from "./ProductListings";
import ProductDetails from "./ProductDetails";
import Error from "./Error";

export default function Products() {
    return (
        <ProductProvider>
            <Routes>
                <Route path="/" element={<ProductListings />} />
                <Route path="/:product_id" element={<ProductDetails />} />
                <Route path="*" element={<Error />}/>
            </Routes>
        </ProductProvider>
    )
}