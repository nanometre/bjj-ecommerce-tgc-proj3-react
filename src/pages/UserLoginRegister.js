import React, { useContext, useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import '../assets/styles/form.css'
import UserContext from '../context/UserContext';
import Loading from '../components/Loading';

export default function UserLoginRegister() {
    const { isLoading, login, loginData, setloginData } = useContext(UserContext)

    const updateloginData = (evt) => {
        setloginData({
            ...loginData,
            [evt.target.name]: evt.target.value
        })
    }

    const onLoginSubmit = () => {
        login(loginData)
        setloginData({
            "email": '',
            "password": ''
        })
    }

    return (isLoading ? (
        <Loading />
    ) : (
        <div className='row'>
            <div className='col-12 col-md shadow-lg rounded-3 m-3 p-3'>
                <h3>Login</h3>
                <div className='w-75 mx-auto'>
                    <div className="form-floating mb-3">
                        <input name="email" value={loginData.email} onChange={updateloginData} type="email"
                            className='form-control' id="loginEmail" placeholder='name@example.com' />
                        <label htmlFor='loginEmail'>Email</label>
                    </div>
                    <div className='form-floating mb-3'>
                        <input name="password" value={loginData.password} onChange={updateloginData} type="password"
                            className='form-control' id="loginPassword" placeholder='password' />
                        <label htmlFor='loginPassword'>Password</label>
                    </div>
                    <div className='custom-btn-group'>
                        <button className="btn btn-light btn-outline-dark" onClick={onLoginSubmit}>Login</button>
                    </div>
                </div>
            </div>
            <div className='col-12 col-md shadow-lg rounded-3 m-3 p-3'>
                <h3>Register</h3>
                <div className='w-75 mx-auto'>
                    <div className="form-floating mb-3">
                        <input type="text" className='form-control' id="registerFirstName" placeholder='John' />
                        <label htmlFor='registerFirstName'>First Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className='form-control' id="registerLastName" placeholder='Doe' />
                        <label htmlFor='registerLastName'>Last Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="email" className='form-control' id="registerEmail" placeholder='name@example.com' />
                        <label htmlFor='registerEmail'>Email</label>
                    </div>
                    <div className='form-floating mb-3'>
                        <input type="password" className='form-control' id="registerPassword" placeholder='password' />
                        <label htmlFor='registerPassword'>Password</label>
                    </div>
                    <div className='form-floating mb-3'>
                        <input type="password" className='form-control' id="registerConfirmPassword" placeholder='password' />
                        <label htmlFor='registerConfirmPassword'>Confirm Password</label>
                    </div>
                    <div className='custom-btn-group'>
                        <button className="btn btn-light btn-outline-dark">Register</button>
                    </div>
                </div>

            </div>
        </div>
    )
    )
}