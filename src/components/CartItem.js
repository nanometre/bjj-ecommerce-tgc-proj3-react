import React, { useContext, useEffect, useState } from "react";
import CartContext from "../context/CartContext";
import { updateCartQuantitySchema } from "../assets/schema";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'

export default function CartItem(props) {
    const { cart, setCart, getCart, updateCartItem, deleteCartItem } = useContext(CartContext)
    const [quantity, setQuantity] = useState("")
    // handle delete button
    const onDelete = async (variantId) => {
        await deleteCartItem(variantId)
        setCart(
            cart.filter(c => c.variant_id !== variantId)
        )
    }
    // useEffect to set initial quantity
    useEffect(() => {
        setQuantity(props.c.quantity)
    }, [])

    // handle quantity update and form
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(updateCartQuantitySchema)
    })
    const updateQuantity = (evt) => {
        setQuantity(evt.target.value)
    }
    const onUpdateQuantity = async () => {
        await updateCartItem(props.c.variant_id, quantity)
        await getCart()
    }

    // return jsx
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
                        <p>
                            <span className="text-muted">Size: </span>{props.c.variant.size.size_name}<br />
                            <span className="text-muted">Color: </span>{props.c.variant.color.color_name}
                        </p>
                    </div>
                    <div className="col-md-3 col-lg-3 col-xl-2">
                        <form onSubmit={handleSubmit(onUpdateQuantity)} className=" d-flex">
                            <input className={`form-control form-control-sm ${errors.quantity ? 'is-invalid' : ''}`} 
                                type="text"
                                name="quantity" 
                                value={quantity} 
                                {...register('quantity', {onChange: updateQuantity})}/>
                            <button className="btn btn-dark btn-outline-light px-2">Update</button>
                            <div className="invalid-feedback">{errors.quantity?.message}</div>
                        </form>
                    </div>
                    <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                        <h5 className="mb-0">SGD {(props.c.variant.product.cost * props.c.quantity / 100).toFixed(2)}</h5>
                    </div>
                    <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                        <a role="button" className="text-dark" onClick={() => onDelete(props.c.variant_id)}><i className="bi bi-trash" style={{ fontSize: '1.5rem' }}></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}