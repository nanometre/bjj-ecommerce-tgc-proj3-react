import React from "react";
// useNavigate is an example of a hook
// hook is a function that you can call to add certain features
// to your function base component
// a hook returns a function that represent some shared functionality or data
import { useNavigate } from "react-router-dom";
// useState hook allows us to create state variable 
import { useState } from "react";

export default function ContactUs() {
    // get the navigate hook from react-router-dom
    const navigate = useNavigate()
    
    function submitForm() {
        navigate('/submitted-form', {
            state: {
                formData: formState
            }
        })
    }

    // create two state variables: the email address and the fullname
    // first arg of useState is the default value
    // useState will return 2 values
    // first return value: the state variable itself
    // second return value: the function used to modify the state variable
    const [formState, setFormState] = useState({
        fullname: "",
        email: ""
    })

    const updateFormField = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }
    
    return (
        <React.Fragment>
            <h1>Contact Us</h1>
            <form>
                <div>
                    <label>Full Name:</label>
                    <input type="text" name="fullname" value={formState.fullname} 
                        onChange={ updateFormField }/>
                </div>
                <div>
                    <label>Email:</label>
                    <input type="text" name="email" value={formState.email}
                        onChange={ updateFormField }/>
                </div>
                <button onClick={submitForm}>Submit</button>
            </form>
        </React.Fragment>
    )
}