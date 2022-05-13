import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axiosAPI from '../api/axiosAPI';

const UserContext = createContext({});
export default UserContext

export const UserProvider = ({ children }) => {
    // states
    const [token, setToken] = useState(null)
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [loginData, setLoginData] = useState({
        "email": '',
        "password": ''
    })
    const [registerData, setRegisterData] = useState({
        "first_name": '',
        "last_name": '',
        "register_email": '',
        "register_password": ''
    })

    const navigate = useNavigate()

    // useEffect to check if there are tokens are in localStorage
    useEffect(() => {
        setIsLoading(true)
        const localStorageToken = JSON.parse(localStorage.getItem('token'))
        if (localStorageToken) {
            const newAccessToken = async () => {
                try {
                    const refreshResponse = await axiosAPI.post('/users/refresh', {
                        refreshToken: localStorageToken.refreshToken
                    })
                    setToken({
                        refreshToken: localStorageToken.refreshToken,
                        accessToken: refreshResponse.data.accessToken
                    })
                    localStorage.setItem('token',
                        JSON.stringify({
                            refreshToken: localStorageToken.refreshToken,
                            accessToken: refreshResponse.data.accessToken
                        }))
                } catch (err) {
                    toast.error('Unable to connect to server. Please login again.', {
                        toastId: 'getUserError'
                    })
                    localStorage.removeItem("token")
                    setToken(null)
                    setUser(null)
                }
            }
            newAccessToken()
        }
        setIsLoading(false)
    }, [])
    // useEffect to get and set user, and refresh access token
    useEffect(() => {
        // get and set user
        if (token) {
            const getUserData = async () => {
                try {
                    const profileResponse = await axiosAPI.get('/users/profile', {
                        headers: {
                            Authorization: `Bearer ${token.accessToken}`
                        }
                    }
                    )
                    if (profileResponse.data) {
                        setUser(profileResponse.data)
                    }
                } catch (err) {
                    toast.error('Unable to get user data. Please login again.', {
                        toastId: 'getUserError'
                    })
                    localStorage.removeItem("token")
                    setToken(null)
                    setUser(null)
                }
            }
            getUserData()
        }
        // refresh access token every 1h
        if (token) {
            const refreshAccessToken = setInterval(() => {
                const newAccessToken = async () => {
                    try {
                        const refreshResponse = await axiosAPI.post('/users/refresh', {
                            refreshToken: token.refreshToken
                        })
                        setToken({
                            refreshToken: token.refreshToken,
                            accessToken: refreshResponse.data.accessToken
                        })
                        localStorage.setItem('token',
                            JSON.stringify({
                                refreshToken: token.refreshToken,
                                accessToken: refreshResponse.data.accessToken
                            }))
                    } catch (err) {
                        toast.error('Session expired. Please login again.', {
                            toastId: 'getUserError'
                        })
                        localStorage.removeItem("token")
                        setToken(null)
                        setUser(null)
                    }
                }
                newAccessToken()
            }, 1000 * 60 * 55) // refresh access token every 1h

            // clean up function for useEffect to clear interval on unmount
            return () => clearInterval(refreshAccessToken);
        }
    }, [token])

    // context functions
    const userRegister = async (registerData) => {
        try {
            const registerResponse = await toast.promise(axiosAPI.post('/users/register', registerData), {
                pending: 'Registering an account',
                success: 'Successfully registered an account.'
            })
            if (registerResponse) {
                setToken(registerResponse.data)
                localStorage.setItem("token", JSON.stringify(registerResponse.data))
                setRegisterData({
                    "first_name": '',
                    "last_name": '',
                    "register_email": '',
                    "register_password": ''
                })
            }
            navigate('/')
        } catch (err) {
            let errorMessage
            if (err?.response?.status === 403) {
                errorMessage = "This email has been registered to an account. Login or use another email."
            } else {
                errorMessage = "Something went wrong. Please try again."
            }
            toast.error(errorMessage, {
                toastId: 'registerError'
            })
        }
    }

    const login = async (loginData) => {
        try {
            const loginResponse = await toast.promise(axiosAPI.post('/users/login', loginData), {
                pending: 'Logging you in',
                success: 'Successfully logged in'
            })
            if (loginResponse) {
                setToken(loginResponse.data)
                localStorage.setItem("token", JSON.stringify(loginResponse.data))
                setLoginData({
                    "email": '',
                    "password": ''
                })
            }
            navigate(-1)
        } catch (err) {
            let errorMessage
            if (err?.response?.status === 401) {
                errorMessage = "Wrong email or password. Please try again."
            } else {
                errorMessage = "Something went wrong. Please try again."
            }
            toast.error(errorMessage, {
                toastId: 'loginError'
            })
        }
    }

    const logout = async () => {
        try {
            await toast.promise(axiosAPI.post('/users/logout', {
                refreshToken: token.refreshToken
            }), {
                pending: 'Logging you out',
                success: 'Successfully logged out.'
            })
            localStorage.removeItem("token")
            setToken(null)
            setUser(null)
            navigate('/')
        } catch (err) {
            toast.error('Something went wrong. Please login again.', {
                toastId: 'logoutError'
            })
        }
    }

    // return context provider
    return (
        <UserContext.Provider value={{
            token, setToken,
            user, setUser,
            isLoading, setIsLoading,
            loginData, setLoginData,
            registerData, setRegisterData,
            userRegister,
            login,
            logout
        }}>
            {children}
        </UserContext.Provider>
    )
}

