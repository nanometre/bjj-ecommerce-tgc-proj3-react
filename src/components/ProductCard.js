import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard(props) {
    return (
        <div className="card shadow-lg rounded-3 border border-dark m-2" style={{ width: "13rem" }}>
            <img src={
                props.p?.variants?.[0]?.product_image_url ? 
                props.p?.variants?.[0]?.product_image_url :
                'http://res.cloudinary.com/nanometre/image/upload/v1651226796/yuyr6i2kxlmivpgxrs8r.png'
                } className="card-img-top" alt={props.p?.product_name} />
            <div className="card-body text-center">
                <h5 className="card-title">{props.p?.product_name}</h5>
                <p className="card-text">SGD {(props.p?.cost / 100).toFixed(2)}</p>
                <div className="custom-btn-group justify-content-center">
                    <Link to={"/products/" + props.p?.product_id} 
                        className="btn btn-dark btn-outline-light">More Info</Link>
                </div>
            </div>
        </div>
    )
}