import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import ProductContext from "../context/ProductContext";
import CartContext from "../context/CartContext";
import Loading from "../components/Loading";
import { addToCartQuantitySchema } from "../assets/schema";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../assets/styles/product.css"

export default function ProductDetails() {
    // context
    const {
        oneProduct, getProductById, isLoading, setIsLoading
    } = useContext(ProductContext)
    const {
        selection, setSelection, tempVariant, setTempVariant, 
        getCart, addToCart
    } = useContext(CartContext)

    // params
    const params = useParams()
    const productId = params.product_id

    // useEffect on params change
    useEffect(() => {
        const getProduct = async () => {
            setIsLoading(true)
            await getProductById(productId)
        }
        getProduct()
        setSelection({ variant_id: "", quantity: "" })
    }, [productId])

    // useEffec on variant selection change
    useEffect(() => {
        if (selection.variant_id !== "") {
            const variant = oneProduct.variants.filter(v => v.variant_id === parseInt(selection.variant_id))
            setTempVariant(variant[0])
        } else if (selection.variant_id === "") {
            setTempVariant({})
        }
    }, [selection])

    // handle selection and quantity form
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(addToCartQuantitySchema)
    })
    const updateSelection = (evt) => {
        setSelection({
            ...selection,
            [evt.target.name]: evt.target.value
        })
    }
    const onSelectionSubmit = async () => {
        await addToCart()
        await getCart()
    }
    // return jsx
    return (isLoading ? (
        <Loading />
    ) : (
        <React.Fragment>
            <div className="row">
                {/* carousel */}
                <div className="col-12 col-md-6">
                    <Carousel autoFocus={true} emulateTouch={true} useKeyboardArrows={true}>
                        {oneProduct.variants?.length === 0 ?
                            <div>
                                <img src={process.env.REACT_APP_NO_IMAGE_URL} alt={oneProduct.product?.product_name} />
                                <p className="legend">No image available for this product</p>
                            </div> :
                            oneProduct.variants?.map((v, i) =>
                                <div key={i}><img src={v.product_image_url} alt="Not available" /></div>)
                        }
                    </Carousel>
                </div>
                {/* product info */}
                <div className="col-12 col-md-6">
                    <h3>{oneProduct.product?.product_name}</h3>
                    <h6>SGD {(oneProduct.product?.cost / 100).toFixed(2)}</h6>
                    {Object.keys(tempVariant).length === 0
                        ? null
                        : tempVariant.tags.map((t, i) => <span key={i} className="badge rounded-pill bg-dark me-1">{t.tag_name}</span>)}
                    <form className="my-4" onSubmit={handleSubmit(onSelectionSubmit)}>
                        <div className="row">
                            <div className="col">
                                <label className="form-label">Options</label>
                                <select className={`form-select form-select-sm form-control ${errors.variant_id ? 'is-invalid' : ''}`}
                                    aria-label="form-select-sm"
                                    name="variant_id"
                                    value={selection.variant_id}
                                    {...register('variant_id', {onChange: updateSelection})}
                                    disabled={oneProduct.variants.length === 0}>
                                    <option value="" disabled="disabled">-- Select an option --</option>
                                    {oneProduct.variants?.map((v, i) =>
                                        <option key={i} value={v.variant_id}>{v.color.color_name} - {v.size.size_name}</option>
                                    )}
                                </select>
                                <div className="invalid-feedback">{errors.variant_id?.message}</div>
                            </div>
                            <div className="col">
                                <label className="form-label">Quantity</label>
                                <input className={`form-control form-control-sm ${errors.quantity ? 'is-invalid' : ''}`}
                                    type="text"
                                    name="quantity"
                                    value={selection.quantity}
                                    {...register('quantity', { onChange: updateSelection })}
                                    disabled={oneProduct.variants.length === 0} />
                                <div className="invalid-feedback">{errors.quantity?.message}</div>
                            </div>
                        </div>
                        {Object.keys(tempVariant).length === 0 ? null : <p className="mt-1 text-danger">{tempVariant.stock} stock available!</p>}
                        {oneProduct.variants.length === 0 ? <p className="mt-1 text-danger">This product is not in stock!</p> : null}
                        <div className="d-grid gap-2 mt-3">
                            <button type="submit" className="btn btn-dark btn-outline-light" hidden={oneProduct.variants.length === 0}>Add to cart</button>
                        </div>
                    </form>
                    <p>{oneProduct.product?.description}</p>
                    <div className="accordion" id="moreDetailsAccordion">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="accordionHeading">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#accordionCollapse" aria-expanded="false" aria-controls="accordionCollapse">
                                    Product Details
                                </button>
                            </h2>
                            <div id="accordionCollapse" className="accordion-collapse collapse" aria-labelledby="accordionHeading"
                                data-bs-parent="#moreDetailsAccordion">
                                <div className="accordion-body row">
                                    <div className="col">
                                        <p><span className="text-muted">Brand:</span> {oneProduct.product?.brand?.brand_name}</p>
                                        <p><span className="text-muted">Category:</span> {oneProduct.product?.category?.category_name}</p>
                                        <p><span className="text-muted">Material:</span> {oneProduct.product?.material?.material_name}</p>
                                    </div>
                                    <div className="col">
                                        {oneProduct.product?.weave?.weave_name === "N/A"
                                            ? null
                                            : <p><span className="text-muted">Weave:</span> {oneProduct.product?.weave?.weave_name}</p>}
                                        <p><span className="text-muted">Weight:</span> {oneProduct.product?.weight / 1000} kg</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    ))
}