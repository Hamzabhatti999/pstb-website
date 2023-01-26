import React from 'react'
import { useState } from 'react';
import axios from 'axios'
import "./register.css"
export default function Register() {
    // const getExamValue = (params) => {}

    const postData = (data) => {
        axios.post('http://localhost:3100/form', data)
            .then(res => { console.log("response", res) })
            .catch((err) => { console.log("error :", err) })
    }

    const [users, setUsers] = useState({
        fullname: "",
        cnicNo: "",
        emailAdd: "",
        offEmail: "",
        mobileNo: "",
        postalAdd: "",
        testlocation: "",
        examdate: "",
        language: "",
        detail: "",
        terms: ""
    });
    const valueChange = (e) => {
        setUsers({
            ...users, [e.target.name]: e.target.value
        })
    }
    // handle the form Submission
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("Form Data=", users)
        postData(users)
    }
    return (
        <>
            <div className="container">
                <form onSubmit={handleSubmit} method="POST">
                    <h5 className="text-center">ISTQB-PSTB CTFL Exam Seat Reservation Form</h5>
                    <div className="register-form">
                        <div className="form-group">
                            <label htmlFor="fname">Full Name</label>
                            <input type="text" className="form-control" id="fname" name="fullname" placeholder="Enter your Full name" onChange={valueChange} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="cnic">CNIC Number</label>
                            <input type="text" className="form-control" id="cnic" name="cnicNo" placeholder="Enter CNIC Number" onChange={valueChange} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input type="email" className="form-control" id="email" name="emailAdd" placeholder="Your email address that you check regularly." onChange={valueChange} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="oemail">Official Email</label>
                            <input type="email" className="form-control" id="oemail" name="offEmail" placeholder="Your Official/Company email address " onChange={valueChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Mobile Number</label>
                            <input type="tel" className="form-control" id="typePhone" name="mobileNo" placeholder="Your Current Mobile Number" onChange={valueChange} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="address" >Postal Address</label>
                            <input type="text" className="form-control" id="address1" name="postalAdd" placeholder="Enter Address" onChange={valueChange} />
                            <p><strong>Note:</strong> Please provide your complete postal address on which you can receive your certificate, after passing the exam.</p>
                        </div>
                        <div className="form-group">
                            <label htmlFor="location">Select Exam Location</label>
                            <select className="form-control form-select" id="locate" name="testlocation" onChange={valueChange}>
                                <option disabled selected>Select your Exam location</option>
                                <option>Islamabad</option>
                                <option>Lahore</option>
                                <option>Karachi</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="location">Select Exam Date</label>
                            <select className="form-control form-select" id="exam" name="examdate" onChange={valueChange} required>
                                <option disabled selected>Select your Exam Date</option>
                                <option>ISB-February 17, 2023</option>
                                <option>LHR-February 18, 2023</option>
                                <option>KCH-February 17, 2023</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Is "English" your native language ?</label>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="language" id="lang-yes" value="yes" onChange={valueChange} required />
                                <label className="form-check-label" htmlFor="lang-yes">
                                    Yes
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="language" id="lang-no" value="no" onChange={valueChange} required />
                                <label className="form-check-label" htmlFor="lang-no">
                                    No
                                </label>
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Do you require any special service/treatment due to some disability? Please provide details</label>
                            <input type="text" className="form-control" placeholder="Your Answer" name="detail" onChange={valueChange} />
                        </div>
                        <div className="form-group">
                            <label>PSTB Terms and Conditions</label>
                            <p> In order to appear in exam, all candidates must accept the below agreement.</p>
                            <div className="form-check">
                                <p>In order to appear in exam, all candidates must accept the below agreement.
                                    As per PSTB and ISTQB rules, the question paper and the answer sheets are property of PSTB and will not be displayed to the candidate after the examination.
                                    I agree to abide by PSTB decisions.</p>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="terms" id="terms-yes" value="agree" onChange={valueChange} required />
                                <label className="form-check-label" htmlFor="terms-yes">
                                    Agree
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="terms" id="terms-no" value="disagree" onChange={valueChange} required />
                                <label className="form-check-label" htmlFor="terms-no">
                                    Disagree (Cancel registration)
                                </label>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="sub-button">
                                <button type="submit" id="submit-btn" className="btn btn-primary" >Submit</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

        </>

    )
}
