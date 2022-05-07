import React from "react";
import {
    BrowserRouter as Router,
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
                <Routes>
                    <Route path="/" element={<ProductListingPage />} />
                    <Route path="/:product_id" element={<ProductDetailsPage />} />
                </Routes>
            </ProductProvider>
        </div>
    )
}