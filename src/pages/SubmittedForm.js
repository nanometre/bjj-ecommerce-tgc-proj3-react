import React from "react";
import { useLocation } from "react-router-dom";
// in the HTML specs, location refers to one URL

export default function SubmittedForm() {
    const location = useLocation()
    let fullName = location.state.formData.fullname
    let email = location.state.formData.email

    return (
        <React.Fragment>
            <h1>Feedback received</h1>
            <p>
                Hi {fullName}
                Thank you for your feedback. We will forward your query to the relevant department.
                Please look forward to an reply to {email}
            </p>
        </React.Fragment>
    )
}