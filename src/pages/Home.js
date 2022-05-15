import React, { useContext } from "react";
import UserContext from "../context/UserContext";
import Loading from "../components/Loading";
import "../assets/styles/app.css"

export default function Home() {
    const { isLoading } = useContext(UserContext)

    return (isLoading ? (
        <Loading />
    ) : (
        <React.Fragment>
            <div className="container content-container">
                <h3>Home Page</h3>
            </div>
        </React.Fragment>
    )
    )
}