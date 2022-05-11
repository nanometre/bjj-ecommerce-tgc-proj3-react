import React, {useState} from "react";

export default function CartItem(props) {
    console.log(props.c)
    const [quantity, setQuantity] = useState(null)
    
    return (
        <div className="card rounded-3 mb-4 align-self-center">
            <div className="card-body p-4">
                <div className="row d-flex justify-content-between align-items-center">
                    <div className="col-md-2 col-lg-2 col-xl-2">
                        <img
                            src={props.c.variant.product_image_url}
                            className="img-fluid rounded-3" alt={props.c.variant.product.product_name} />
                    </div>
                    <div className="col-md-3 col-lg-3 col-xl-3">
                        <p className="lead fw-normal mb-2">{props.c.variant.product.product_name}</p>
                        <p><span className="text-muted">Size: </span>Model to include size <span className="text-muted">Color: </span>Model to include color</p>
                    </div>
                    <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                        <input id="form1" min="0" name="quantity" value={props.c.quantity} type="number"
                            className="form-control form-control-sm" />

                        <button className="btn btn-dark btn-outline-light px-2">Update Quantity</button>
                    </div>
                    <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                        <h5 className="mb-0">SGD {(props.c.variant.product.cost * props.c.quantity / 100).toFixed(2)}</h5>
                    </div>
                    <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                        <a href="#!" className="text-dark"><i className="bi bi-trash"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}