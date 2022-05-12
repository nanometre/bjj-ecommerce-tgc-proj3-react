import React, { useContext } from "react";
import UserContext from "../context/UserContext";
import Loading from "../components/Loading";

export default function Home() {
    const { isLoading } = useContext(UserContext)

    return (isLoading ? (
        <Loading />
    ) : (
        <React.Fragment>
            <h3>Home Page</h3>
        </React.Fragment>
    )
    )
}