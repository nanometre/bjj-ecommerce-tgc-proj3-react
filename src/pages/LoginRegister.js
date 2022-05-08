import React from 'react';
import {
    Link
} from 'react-router-dom';
import '../assets/styles/form.css'

export default function LoginRegister() {
    return (
        <div className='row'>
            <div className='col-12 col-md shadow-lg rounded-3 m-3 p-3'>
                <h3>Login</h3>
                <form className='w-75 mx-auto'>
                    <div className="form-floating mb-3">
                        <input type="email" className='form-control' id="loginEmail" placeholder='name@example.com'></input>
                        <label htmlFor='loginEmail'>Email</label>
                    </div>
                    <div className='form-floating mb-3'>
                        <input type="password" className='form-control' id="loginPassword" placeholder='password'></input>
                        <label htmlFor='loginPassword'>Password</label>
                    </div>
                    <div className='custom-btn-group'>
                        <button className="btn btn-light btn-outline-dark">Login</button>
                    </div>
                </form>
            </div>
            <div className='col-12 col-md shadow-lg rounded-3 m-3 p-3'>
                <h3>Register</h3>
                <form className='w-75 mx-auto'>
                    <div className="form-floating mb-3">
                        <input type="text" className='form-control' id="registerFirstName" placeholder='John'></input>
                        <label htmlFor='registerFirstName'>First Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className='form-control' id="registerLastName" placeholder='Doe'></input>
                        <label htmlFor='registerLastName'>Last Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="email" className='form-control' id="registerEmail" placeholder='name@example.com'></input>
                        <label htmlFor='registerEmail'>Email</label>
                    </div>
                    <div className='form-floating mb-3'>
                        <input type="password" className='form-control' id="registerPassword" placeholder='password'></input>
                        <label htmlFor='registerPassword'>Password</label>
                    </div>
                    <div className='form-floating mb-3'>
                        <input type="password" className='form-control' id="registerConfirmPassword" placeholder='password'></input>
                        <label htmlFor='registerConfirmPassword'>Confirm Password</label>
                    </div>
                    <div className='custom-btn-group'>
                        <button className="btn btn-light btn-outline-dark">Register</button>
                    </div>
                </form>

            </div>
        </div>
    )
}