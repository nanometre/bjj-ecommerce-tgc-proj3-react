import React, { useContext } from "react";
import ProductContext from "../context/ProductContext";
import ProductCard from "../components/ProductCard";
import Loading from "../components/Loading";

export default function ProductListings() {
    const { products, isLoading } = useContext(ProductContext)
    
    return (isLoading ? (
        <Loading />
    ) : (
        <div>
            <h3>Products</h3>
            <div className="d-flex flex-wrap justify-content-around">
                {products.map((p, i) =>
                    <React.Fragment key={i}>
                        <ProductCard p={p} />
                    </React.Fragment>
                )}
            </div>
        </div>

    )
    )
}