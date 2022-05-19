import React, { useContext } from 'react';
import UserContext from '../context/UserContext';
import Loading from '../components/Loading';
import { loginSchema, registerSchema } from '../assets/schema';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import '../assets/styles/form.css'
import { Link } from 'react-router-dom';

export default function UserLoginRegister() {
    // state and functions from context
    const {
        isLoading, login, loginData, setLoginData,
        userRegister, registerData, setRegisterData
    } = useContext(UserContext)
    // handle login forms
    const {
        register: registerLogin,
        handleSubmit: handleSubmitLogin,
        formState: { errors: errorsLogin }
    } = useForm({
        resolver: yupResolver(loginSchema)
    })
    const updateLoginData = (evt) => {
        setLoginData({
            ...loginData,
            [evt.target.name]: evt.target.value
        })
    }
    const onLoginSubmit = () => {
        login(loginData)
    }
    // hanlde register forms
    const {
        register: registerRegister,
        handleSubmit: handleSubmitRegister,
        formState: { errors: errorsRegister }
    } = useForm({
        resolver: yupResolver(registerSchema)
    })
    const updateRegisterData = (evt) => {
        setRegisterData({
            ...registerData,
            [evt.target.name]: evt.target.value
        })
    }
    const onRegisterSubmit = () => {
        userRegister({
            first_name: registerData.first_name,
            last_name: registerData.last_name,
            email: registerData.register_email,
            password: registerData.register_password
        })
    }

    return (isLoading ? (
        <Loading />
    ) : (
        <div className="container-fluid py-4" id="login-register-page">
            <div className="container content-container">
                <div className='row justify-content-center'>
                    <div className='col-12 col-md mx-3 p-3 mb-md-0 mb-3 shadow-lg rounded-3 border border-dark bg-light' style={{ width: "320px" }}>
                        <h3 className='text-center'>Login</h3>
                        <form onSubmit={handleSubmitLogin(onLoginSubmit)}>
                            <div className='w-75 mx-auto'>
                                <div className="form-floating mb-3">
                                    <input name="email"
                                        value={loginData.email}
                                        {...registerLogin('email', { onChange: updateLoginData })}
                                        type="text"
                                        className={`form-control ${errorsLogin.email ? 'is-invalid' : ''}`}
                                        id="loginEmail"
                                        placeholder='name@example.com' />
                                    <label htmlFor='loginEmail' className="text-muted">Email</label>
                                    <div className="invalid-feedback">{errorsLogin.email?.message}</div>
                                </div>
                                <div className='form-floating mb-3'>
                                    <input name="password"
                                        value={loginData.password}
                                        {...registerLogin('password', { onChange: updateLoginData })}
                                        type="password"
                                        className={`form-control ${errorsLogin.password ? 'is-invalid' : ''}`}
                                        id="loginPassword"
                                        placeholder='password' />
                                    <label htmlFor='loginPassword' className="text-muted">Password</label>
                                    <div className="invalid-feedback">{errorsLogin.password?.message}</div>
                                </div>
                                <div className='d-grid gap-2 mb-2'>
                                    <button type="submit" className="btn btn-dark btn-outline-light">Login</button>
                                </div>
                                <Link to="/users/login-register" className='text-dark'>Forgot your password?</Link>
                            </div>
                        </form>
                    </div>
                    <div className='col-12 col-md mx-3 p-3 shadow-lg rounded-3 border border-dark bg-light' style={{ width: "320px" }}>
                        <h3 className="text-center">Register</h3>
                        <form onSubmit={handleSubmitRegister(onRegisterSubmit)}>
                            <div className='w-75 mx-auto'>
                                <div className="form-floating mb-3">
                                    <input name="first_name"
                                        value={registerData.first_name}
                                        {...registerRegister('first_name', { onChange: updateRegisterData })}
                                        type="text"
                                        className={`form-control ${errorsRegister.first_name ? 'is-invalid' : ''}`}
                                        id="registerFirstName"
                                        placeholder='John' />
                                    <label htmlFor='registerFirstName' className="text-muted">First Name</label>
                                    <div className="invalid-feedback">{errorsRegister.first_name?.message}</div>
                                </div>
                                <div className="form-floating mb-3">
                                    <input name="last_name"
                                        value={registerData.last_name}
                                        {...registerRegister('last_name', { onChange: updateRegisterData })}
                                        type="text"
                                        className={`form-control ${errorsRegister.last_name ? 'is-invalid' : ''}`}
                                        id="registerLastName"
                                        placeholder='Doe' />
                                    <label htmlFor='registerLastName' className="text-muted">Last Name</label>
                                    <div className="invalid-feedback">{errorsRegister.last_name?.message}</div>
                                </div>
                                <div className="form-floating mb-3">
                                    <input name="register_email"
                                        value={registerData.register_email}
                                        {...registerRegister('register_email', { onChange: updateRegisterData })}
                                        type="email"
                                        className={`form-control ${errorsRegister.register_email ? 'is-invalid' : ''}`}
                                        id="registerEmail"
                                        placeholder='name@example.com' />
                                    <label htmlFor='registerEmail' className="text-muted">Email</label>
                                    <div className="invalid-feedback">{errorsRegister.register_email?.message}</div>
                                </div>
                                <div className='form-floating mb-3'>
                                    <input name="register_password"
                                        value={registerData.register_password}
                                        {...registerRegister('register_password', { onChange: updateRegisterData })}
                                        type="password"
                                        className={`form-control ${errorsRegister.register_password ? 'is-invalid' : ''}`}
                                        id="registerPassword"
                                        placeholder='password' />
                                    <label htmlFor='registerPassword' className="text-muted">Password</label>
                                    <div className="invalid-feedback">{errorsRegister.register_password?.message}</div>
                                </div>
                                <div className='form-floating mb-3'>
                                    <input name="confirm_password"
                                        {...registerRegister('confirm_password')}
                                        type="password"
                                        className={`form-control ${errorsRegister.confirm_password ? 'is-invalid' : ''}`}
                                        id="registerConfirmPassword"
                                        placeholder='password' />
                                    <label htmlFor='registerConfirmPassword' className="text-muted">Confirm Password</label>
                                    <div className="invalid-feedback">{errorsRegister.confirm_password?.message}</div>
                                </div>
                                <div className='d-grid gap-2'>
                                    <button type="submit" className="btn btn-dark btn-outline-light">Register</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
    )
}