import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <React.Fragment>
            {/* Navbar */}
            <nav className="navbar navbar-expand-md navbar-dark bg-dark flex-shrink-0">
                {/* Container wrapper */}
                <div className="container-fluid">
                    {/* Toggle button */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>

                    {/* Collapsible wrapper */}
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        {/* Navbar brand */}
                        <Link to="/" className="navbar-brand">Grapple Gears</Link>
                        {/* Left links */}
                        <ul className="navbar-nav me-auto">
                            
                            <li className="nav-item">
                                    <Link to="/products" className="nav-link active">Products</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Orders</a>
                            </li>
                        </ul>
                        {/* Left links */}
                    </div>
                    {/* Collapsible wrapper */}

                    {/* Right elements */}
                    <div className="d-flex align-items-center">
                        {/* Avatar */}
                        <div className="dropdown">
                            <a className="dropdown-toggle d-flex align-items-center hidden-arrow" href="#"
                                id="navbarDropdownMenuAvatar" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color: 'white'}}>
                                <img src={require('../assets/images/avatar.png')} className="rounded-circle"
                                    height="25" alt="Avatar" loading="lazy" />
                            </a>
                            <ul className="dropdown-menu dropdown-menu-dark dropdown-menu-end" aria-labelledby="navbarDropdownMenuAvatar">
                                <li>
                                    <a className="dropdown-item" href="#">My profile</a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">Logout</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* Right elements */}
                </div>
                {/* Container wrapper */}
            </nav>
            {/* Navbar */}
        </React.Fragment>
    )
}