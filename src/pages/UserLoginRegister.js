import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
import '../assets/styles/form.css'
import UserContext from '../context/UserContext';
import Loading from '../components/Loading';

export default function UserLoginRegister() {
    const { isLoading, login, loginData, setLoginData, register, registerData, setRegisterData } = useContext(UserContext)

    const updateLoginData = (evt) => {
        setLoginData({
            ...loginData,
            [evt.target.name]: evt.target.value
        })
    }
    const onLoginSubmit = () => {
        login(loginData)
    }

    const updateRegisterData = (evt) => {
        setRegisterData({
            ...registerData,
            [evt.target.name]: evt.target.value
        })
    }
    const onRegisterSubmit = () => {
        register(registerData)
    }

    return (isLoading ? (
        <Loading />
    ) : (
        <div className='row'>
            <div className='col-12 col-md m-3 p-3 shadow-lg rounded-3 border border-dark'>
                <h3>Login</h3>
                <div className='w-75 mx-auto'>
                    <div className="form-floating mb-3">
                        <input name="email" value={loginData.email} onChange={updateLoginData} type="email"
                            className='form-control' id="loginEmail" placeholder='name@example.com' />
                        <label htmlFor='loginEmail'>Email</label>
                    </div>
                    <div className='form-floating mb-3'>
                        <input name="password" value={loginData.password} onChange={updateLoginData} type="password"
                            className='form-control' id="loginPassword" placeholder='password' />
                        <label htmlFor='loginPassword'>Password</label>
                    </div>
                    <div className='custom-btn-group'>
                        <button className="btn btn-light btn-outline-dark" onClick={onLoginSubmit}>Login</button>
                    </div>
                </div>
            </div>
            <div className='col-12 col-md m-3 p-3 shadow-lg rounded-3 border border-dark'>
                <h3>Register</h3>
                <div className='w-75 mx-auto'>
                    <div className="form-floating mb-3">
                        <input name="first_name" value={registerData.first_name} onChange={updateRegisterData} type="text" className='form-control' id="registerFirstName" placeholder='John' />
                        <label htmlFor='registerFirstName'>First Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input name="last_name" value={registerData.last_name} onChange={updateRegisterData} type="text" className='form-control' id="registerLastName" placeholder='Doe' />
                        <label htmlFor='registerLastName'>Last Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input name="email" value={registerData.email} onChange={updateRegisterData} type="email" className='form-control' id="registerEmail" placeholder='name@example.com' />
                        <label htmlFor='registerEmail'>Email</label>
                    </div>
                    <div className='form-floating mb-3'>
                        <input name="password" value={registerData.password} onChange={updateRegisterData} type="password" className='form-control' id="registerPassword" placeholder='password' />
                        <label htmlFor='registerPassword'>Password</label>
                    </div>
                    <div className='form-floating mb-3'>
                        <input type="password" className='form-control' id="registerConfirmPassword" placeholder='password' />
                        <label htmlFor='registerConfirmPassword'>Confirm Password</label>
                    </div>
                    <div className='custom-btn-group'>
                        <button className="btn btn-light btn-outline-dark" onClick={onRegisterSubmit}>Register</button>
                    </div>
                </div>

            </div>
        </div>
    )
    )
}