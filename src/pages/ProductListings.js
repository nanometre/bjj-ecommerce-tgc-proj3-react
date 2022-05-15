import React, { useContext } from "react";
import ProductContext from "../context/ProductContext";
import ProductCard from "../components/ProductCard";
import SearchForm from "../components/SearchForm";
import Loading from "../components/Loading";

export default function ProductListings() {
    const { products, isLoading } = useContext(ProductContext)

    return (isLoading ? (
        <Loading />
    ) : (
        <React.Fragment>
            <div>
                <img src={require('../assets/images/product-listing-bg.jpg')}
                    style={{ width: '100%', height: '50vh', objectFit: 'cover'}} alt='Men hugging after a match' />
            </div>
            <div className="container-fluid py-4">
                <div className="container content-container">
                    <div>
                        <h3>Shop</h3>
                        <div className="row">
                            <div className="col-lg-3 col-xxl-2">
                                <SearchForm />
                            </div>
                            <div className="col-lg-9 col-xxl-10 d-flex flex-wrap justify-content-around">
                                {products?.map((p, i) =>
                                    <React.Fragment key={i}>
                                        <ProductCard p={p} />
                                    </React.Fragment>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
    )
}