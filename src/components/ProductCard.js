import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard(props) {
    // console.log(props.p)
    return (
        <div className="card shadow-lg rounded-3 border border-dark m-3" style={{ width: "18rem" }}>
            <img src={props.p.variants[0].product_image_url} className="card-img-top" alt="Product Image" />
            <div className="card-body text-center">
                <h5 className="card-title">{props.p.product_name}</h5>
                <p className="card-text">SGD {(props.p.cost / 100).toFixed(2)}</p>
                <div className="custom-btn-group">
                    <Link to={"/products/" + props.p.product_id} 
                        className="btn btn-light btn-outline-dark">More Info</Link>
                </div>
            </div>
        </div>
    )
}