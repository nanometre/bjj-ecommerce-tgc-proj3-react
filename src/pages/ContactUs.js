import React from "react";
import { toast } from "react-toastify";

export default function ContactUs() {
    const onContactUsSubmit = () => {
        toast.success("Form successfully submitted. We will get back to you in 5 working days.")
    }

    return (
        <React.Fragment>
            <div className="d-flex justify-content-center align-content-center">
                <form class="text-center border border-dark rounded-3 p-5 shadow-lg" style={{ minWidth: '350px' }} action="#!">
                    <p class="h3 mb-4">Contact us</p>
                    <div class="form-floating mb-3">
                        <input type="text" id="contactFormName" class="form-control" placeholder="Name" />
                        <label htmlFor="contactFormName" className="text-muted">Name</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="email" id="contactFormEmail" class="form-control" placeholder="E-mail" />
                        <label htmlFor="contactFormEmail" className="text-muted">Email</label>
                    </div>
                    <div className='form-floating mb-3'>
                        <select className="form-select" id="enquiry">
                            <option value="1" selected>Product Enquiry</option>
                            <option value="2">Order enquiry</option>
                            <option value="3">Feedback</option>
                            <option value="4">Report a bug</option>
                        </select>
                        <label htmlFor="enquiry">Type of Enquiry</label>
                    </div>
                    <div class="form-floating mb-3">
                        <textarea class="form-control" placeholder="Leave a comment here" id="content" style={{ height: "100px" }}></textarea>
                        <label for="content" className="text-muted">Comments</label>
                    </div>
                    <div className="d-grid gap-2 d-md-block">
                        <button class="btn btn-dark btn-outline-light"
                            type="submit"
                            onClick={(evt) => {
                                evt.preventDefault()
                                onContactUsSubmit()
                            }}>Send</button>
                    </div>
                </form>
            </div>
        </React.Fragment>
    )
}