import React from "react";
import { toast } from "react-toastify";
import "../assets/styles/contact-us.css"

export default function ContactUs() {
    const onContactUsSubmit = () => {
        toast.success("Form successfully submitted.")
    }

    return (
        <React.Fragment>
            <div className="container-fluid py-4" id="contact-us-page">
                <div className="container content-container" >
                    <div className="d-flex justify-content-center align-content-center">
                        <form className="text-center border border-dark rounded-3 p-4 shadow-lg bg-light" style={{ width: '320px'}} action="#!">
                            <h3 className=" mb-4">Need assistance?</h3>
                            <p>Fill up the form with your contact information and message. We will get back to you within 5 business days.</p>
                            <hr/>
                            <div className="form-floating mb-3">
                                <input type="text" id="contactFormName" className="form-control" placeholder="Name" />
                                <label htmlFor="contactFormName" className="text-muted">Name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="email" id="contactFormEmail" className="form-control" placeholder="E-mail" />
                                <label htmlFor="contactFormEmail" className="text-muted">Email</label>
                            </div>
                            <div className='form-floating mb-3'>
                                <select className="form-select" id="enquiry">
                                    <option value="1">Product Enquiry</option>
                                    <option value="2">Order enquiry</option>
                                    <option value="3">Feedback</option>
                                    <option value="4">Report a bug</option>
                                </select>
                                <label htmlFor="enquiry">Type of Enquiry</label>
                            </div>
                            <div className="form-floating mb-3">
                                <textarea className="form-control" placeholder="Leave a comment here" id="content" style={{ height: "100px" }}></textarea>
                                <label htmlFor="content" className="text-muted">Comments</label>
                            </div>
                            <div className="d-grid gap-2 d-block">
                                <button className="btn btn-dark btn-outline-light"
                                    type="submit"
                                    onClick={(evt) => {
                                        evt.preventDefault()
                                        onContactUsSubmit()
                                    }}>Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}