import React, { useContext } from "react";
import ProductContext from "../context/ProductContext";
import { Link } from "react-router-dom";

export default function ProductListings() {
    let productContext = useContext(ProductContext)
    return (
        <React.Fragment>
            <ul>
                {productContext.products().map(p =>
                    <Link to={"/products/" + p.id}><li>{p.product_name} - {p.cost}</li></Link>
                )}
            </ul>
        </React.Fragment>
    )
}