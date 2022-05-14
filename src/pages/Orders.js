import React, { useContext, useEffect, useState } from "react";
import axiosAPI from "../api/axiosAPI";
import UserContext from "../context/UserContext";
import PendingOrderItem from "../components/PendingOrderItem";
import CompletedOrderItem from "../components/CompletedOrderItem";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

export default function Orders() {
    // state and context
    const { token } = useContext(UserContext)
    const [pendingOrders, setPendingOrders] = useState([])
    const [completedOrders, setCompletedOrders] = useState([])
    // useEffect to get orders
    useEffect(() => {
        const getOrders = async () => {
            if (token) {
                const response = await toast.promise(axiosAPI.get('/orders', {
                    headers: {
                        Authorization: `Bearer ${token.accessToken}`
                    }
                }), {
                    pending: 'Fetching your orders',
                    success: 'Fetched orders',
                    error: 'Error fetching orders. Please try again later.'
                }, {
                    toastId: "fetchOrders"
                })
                setPendingOrders(response.data.filter(o => o.status.status_name !== "Delivered/Completed"))
                setCompletedOrders(response.data.filter(o => o.status.status_name === "Delivered/Completed"))
            }
        }
        getOrders()
    }, [token])
    console.log(pendingOrders)
    console.log(completedOrders)
    // return jsx
    return (!token ? (
        <h5>Please login to access your orders</h5>
    ) : (
        <React.Fragment>
            <div className="h-100 rounded-3 border border-dark shadow mb-5">
                <div className="h-100 p-4">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-12">
                            <div className="row justify-content-between">
                                <h3 className="mb-3 col">Pending Order(s)</h3>
                                <div className="mb-0 col text-end">Need help with your order?
                                    <span> <Link to="/contact-us" className='text-dark'>Contact us!</Link></span>
                                </div>
                            </div>

                            {pendingOrders === 0 ?
                                <div>No pending orders</div> :
                                pendingOrders?.map((po, i) =>
                                    <React.Fragment key={i}>
                                        <PendingOrderItem po={po} />
                                    </React.Fragment>
                                )}

                        </div>
                    </div>
                </div>
            </div>
            <div className="h-100 rounded-3 border border-dark  shadow">
                <div className="h-100 p-4">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-12">
                            <h3 className="mb-3">Completed Order(s)</h3>
                            {completedOrders === 0 ?
                                <div>No pending orders</div> :
                                completedOrders?.map((po, i) =>
                                    <React.Fragment key={i}>
                                        <CompletedOrderItem po={po} />
                                    </React.Fragment>
                                )}
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
    )
}