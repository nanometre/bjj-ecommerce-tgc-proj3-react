import React, { useContext } from 'react';
import ProductContext from '../context/ProductContext';

export default function SearchForm() {
    const {  
        products, materials, weaves, categories, brands, 
        searchInputs, setSearchInputs, getProducts 
    } = useContext(ProductContext)
    
    const updateSearchInputs = (evt) => {
        setSearchInputs({
            ...searchInputs,
            [evt.target.name]: evt.target.value
        })
    }
    const onSearchInputsSubmit = () => {
        getProducts()
    }
    const onSearchInputsReset = async () => {
        setSearchInputs({})
    }

    return (
        <div className="accordion mt-2 border border-dark rounded-3 shadow-lg" id="accordionSearch">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingSearch">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                        <span><i className="bi bi-search"></i> Search</span>
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingSearch" data-bs-parent="#accordionSearch">
                    <div className="accordion-body">
                        {products.length !== 0
                            ?
                            <p className="alert alert-dark">{products.length} result(s) found.</p>
                            :
                            <p className="alert alert-danger">No results found.</p>
                        }
                        <form className='row'>
                            <div className="col-6 col-lg-12">
                                <div className='form-floating'>
                                    <input id="name"
                                        name="name"
                                        className="form-control mb-2"
                                        type="text"
                                        onChange={updateSearchInputs}
                                        value={searchInputs?.name || ""}
                                        placeholder="T-shirt" />
                                    <label htmlFor="name" className='text-muted'>Name</label>
                                </div>
                                <div className='form-floating'>
                                    <input id="minCost"
                                        name="min_cost"
                                        className="form-control mb-2"
                                        type="text"
                                        onChange={updateSearchInputs}
                                        value={searchInputs?.min_cost || ""}
                                        placeholder="100" />
                                    <label htmlFor="minCost" className='text-muted'>Min Cost</label>
                                </div>
                                <div className='form-floating'>
                                    <input id="maxCost"
                                        name="max_cost"
                                        className="form-control mb-2"
                                        type="text"
                                        onChange={updateSearchInputs}
                                        value={searchInputs?.max_cost || ""}
                                        placeholder="100" />
                                    <label htmlFor="maxCost" className='text-muted'>Max Cost</label>
                                </div>
                                <div className='form-floating'>
                                    <input id="minWeight"
                                        name="min_weight"
                                        className="form-control mb-2"
                                        type="text"
                                        onChange={updateSearchInputs}
                                        value={searchInputs?.min_weight || ""}
                                        placeholder="100" />
                                    <label htmlFor="minWeight" className='text-muted'>Min Weight</label>
                                </div>
                                <div className='form-floating'>
                                    <input id="maxWeight"
                                        name="max_weight"
                                        className="form-control mb-2"
                                        type="text"
                                        onChange={updateSearchInputs}
                                        value={searchInputs?.max_weight || ""}
                                        placeholder="100" />
                                    <label htmlFor="maxWeight" className='text-muted'>Max Weight</label>
                                </div>
                            </div>
                            <div className="col-6 col-lg-12">
                                <div className='form-floating'>
                                    <select className="form-select mb-2" 
                                        id="material"
                                        onChange={updateSearchInputs}
                                        value={searchInputs?.material_id || ""}
                                        name="material_id">
                                        <option value="">----------</option>
                                        {materials?.map((m, i) => <option key={i} value={m[0]}>{m[1]}</option>)}
                                    </select>
                                    <label htmlFor="material">Material</label>
                                </div>
                                <div className='form-floating'>
                                    <select className="form-select mb-2" 
                                        id="weave"
                                        onChange={updateSearchInputs}
                                        value={searchInputs?.weave_id || ""}
                                        name="weave_id">
                                        <option value="">----------</option>
                                        {weaves?.map((w, i) => <option key={i} value={w[0]}>{w[1]}</option>)}
                                    </select>
                                    <label htmlFor="weave">Weave</label>
                                </div>
                                <div className='form-floating'>
                                    <select className="form-select mb-2" 
                                        id="category"
                                        onChange={updateSearchInputs}
                                        value={searchInputs?.category_id || ""}
                                        name="category_id">
                                        <option value="">----------</option>
                                        {categories?.map((c, i) => <option key={i} value={c[0]}>{c[1]}</option>)}
                                    </select>
                                    <label htmlFor="category">Category</label>
                                </div>
                                <div className='form-floating'>
                                    <select className="form-select mb-2" 
                                        id="brand"
                                        onChange={updateSearchInputs}
                                        value={searchInputs?.brand_id || ""}
                                        name="brand_id">
                                        <option value="">----------</option>
                                        {brands?.map((b, i) => <option key={i} value={b[0]}>{b[1]}</option>)}
                                    </select>
                                    <label htmlFor="brand">Brand</label>
                                </div>
                            </div>
                            <div className='custom-btn-group'>
                                <button type="submit" 
                                    className="btn btn-dark btn-outline-light me-2" 
                                    onClick={(evt) => {
                                        evt.preventDefault()
                                        onSearchInputsSubmit()
                                    }}
                                    >Search</button>
                                <button type="reset" 
                                    className="btn btn-light btn-outline-dark"
                                    onClick={(evt) => {
                                        evt.preventDefault()
                                        onSearchInputsReset()
                                    }}>Reset</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}