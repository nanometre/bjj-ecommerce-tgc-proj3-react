import { createContext, useEffect, useState } from "react";
import axiosAPI from '../api/axiosAPI';

const UserContext = createContext({});
export default UserContext

export const UserProvider = ({ children }) => {
    // states
    const [token, setToken] = useState(null)
    const [user, setUser] = useState(null)
    const [newUser, setNewUser] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [loginData, setloginData] = useState({
        "email": '',
        "password": ''
    })

    // useEffect to get and set user, and refresh access token
    useEffect(() => {
        // get and set user
        if (token) {
            const getUserData = async () => {
                try {
                    let profileResponse = await axiosAPI.get('/users/profile', {
                        headers: {
                            Authorization: `Bearer ${token.accessToken}`
                        }
                    }
                    )
                    if (profileResponse.data) {
                        setUser(profileResponse.data)
                    }
                } catch (err) {
                    console.log(err.message)
                }
            }
            getUserData()   
        }
        // refresh access token every 1h
        if (token) {
            const refreshAccessToken = setInterval(() => {
                const newAccessToken = async () => {
                    try {
                        let tokenResponse = await axiosAPI.post('/users/refresh', {
                            refreshToken: token.refreshToken
                        })
                        setToken({
                            refreshToken: token.refreshToken,
                            accessToken: tokenResponse.data.accessToken
                        })
                        localStorage.setItem('token',
                            JSON.stringify({
                                refreshToken: token.refreshToken,
                                accessToken: tokenResponse.data.accessToken
                            }))
                    } catch (err){
                        console.log(err.message)
                    }
                }
                newAccessToken()
            }, 1000 * 60 * 60)
            // clean up function for useEffect to clear interval on unmount
            return () => clearInterval(refreshAccessToken);
        }
    }, [token])

    // context functions
    const login = async (loginData) => {
        setIsLoading(true)
        try {
            const loginResponse = await axiosAPI.post('/users/login', loginData)
            if (loginResponse) {
                setToken(loginResponse.data)
                setNewUser(false)
                localStorage.setItem("token", JSON.stringify(loginResponse.data))
            }
        } catch (err) {
            let errorMessage
            if (err?.response?.status === 401) {
                errorMessage = "Wrong email or password. Please try again"
            } else {
                errorMessage = "Something went wrong. Please try again"
            }
        }
        setIsLoading(false)
    }

    // return context provider
    return (
        <UserContext.Provider value={{
            token,
            setToken,
            user,
            setUser,
            isLoading,
            setIsLoading,
            login,
            loginData,
            setloginData
        }}>
            {children}
        </UserContext.Provider>
    )
}

