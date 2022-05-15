import React, { useContext } from "react";
import UserContext from "../context/UserContext";
import Loading from "../components/Loading";
import "../assets/styles/home.css"

export default function Home() {
    const { isLoading } = useContext(UserContext)

    return (isLoading ? (
        <Loading />
    ) : (
        <React.Fragment>
            {/* <video
                    src={require("../assets/images/home-hero-video.mp4")}
                    autoPlay
                    muted
                /> */}
            <div className="container-fluid py-4" id="home-page">
                <div className="container content-container">
                    <div className="card">
                        <h4>One-stop for your grappling needs</h4>
                        <button role="button" className="btn btn-light btn-outline-dark">Shop now!</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
    )
}