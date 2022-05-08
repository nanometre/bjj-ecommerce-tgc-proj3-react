import React from "react";
import {
    Routes,
    Route,
    Link
} from "react-router-dom"
import { ProductProvider } from "../context/ProductContext";
import ProductListingPage from "./ProductListingPage";
import ProductDetailsPage from "./ProductDetailsPage";

export default function Products() {


    return (
        <div>
            <ProductProvider>
                <h3>Products</h3>
                <Routes>
                    <Route path="/" element={<ProductListingPage />} />
                    <Route path="/:product_id" element={<ProductDetailsPage />} />
                </Routes>
            </ProductProvider>
        </div>
    )
}