import React from "react";
import {
    Routes,
    Route,
} from "react-router-dom"
import { ProductProvider } from "../context/ProductContext";
import ProductListings from "./ProductListings";
import ProductDetails from "./ProductDetails";

export default function Products() {
    return (
        <div className="container content-container">
            <ProductProvider>
                <Routes>
                    <Route path="/" element={<ProductListings />} />
                    <Route path="/:product_id" element={<ProductDetails />} />
                </Routes>
            </ProductProvider>
        </div>
    )
}