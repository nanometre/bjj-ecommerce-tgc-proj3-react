import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../context/UserContext";


export default function Navbar() {
    const { user, logout } = useContext(UserContext)

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
                        <span className="navbar-toggler-icon" />
                    </button>

                    {/* Collapsible wrapper */}
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        {/* Navbar brand */}
                        <Link to="/" className="navbar-brand">
                            <img src={require('../assets/images/favicon.ico')} style={{height: '2rem', margin: '0 0.25rem'}} alt="Brand Logo"/>
                            Grapple Gears
                        </Link>
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
                    {user ? (
                        <div className="d-flex align-items-center">
                            <span className="text-white mx-3">Hi, {user.first_name}</span>
                            {/* Avatar */}
                            <div className="dropdown d-inline-block">
                                <a className="dropdown-toggle d-flex align-items-center hidden-arrow" href="#"
                                    id="navbarDropdownMenuAvatar" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: 'white' }}>
                                    <img src={require('../assets/images/avatar.png')} className="rounded-circle"
                                        height="25" alt="Avatar" loading="lazy" />
                                </a>
                                <ul className="dropdown-menu dropdown-menu-dark dropdown-menu-end" aria-labelledby="navbarDropdownMenuAvatar">
                                    <li>
                                        <a className="dropdown-item" href="#">My profile</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" onClick={(evt) => {
                                            evt.preventDefault()
                                            logout()
                                        }}>Logout</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    ) : (
                        <div className="d-flex align-items-center">
                            <Link to="/users/login-register" className="text-white">Login or Register</Link>
                        </div>
                    )}
                    {/* Right elements */}
                </div>
                {/* Container wrapper */}
            </nav>
            {/* Navbar */}
        </React.Fragment>
    )
}