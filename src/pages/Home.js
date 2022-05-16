import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../context/UserContext";
import Loading from "../components/Loading";
import "../assets/styles/home.css"

export default function Home() {
    const { isLoading } = useContext(UserContext)

    return (isLoading ? (
        <Loading />
    ) : (
        <React.Fragment>
            <div id="hero-banner">
                <video autoPlay loop muted id='hero-video'>
                    <source src={require("../assets/images/home-hero-video.mp4")} type="video/mp4" />
                </video>
                <div id="overlay"></div>
                <div id="callout">
                    <h1>One-stop for your grappling needs</h1>
                    <p>Browse and shop BJJ and MMA gears from multiple brands. If you would like to see other brands or products in our collection,
                        <span> <Link to="/contact-us" className="text-light">contact us</Link></span>
                        !</p>
                    <div>
                        <Link to={"/products"} className="btn btn-light btn-outline-dark">Shop now!</Link>
                    </div>
                </div>
            </div>
            {/* <div className="container-fluid py-4">
                <div className="container content-container">
                    <div className="card">
                        <h4>One-stop for your grappling needs</h4>
                        <button className="btn btn-light btn-outline-dark">Shop now!</button>
                    </div>
                </div>
            </div> */}
        </React.Fragment>
    )
    )
}