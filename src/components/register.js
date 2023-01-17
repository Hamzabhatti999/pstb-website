import React from 'react'
import "./register.css"
import { useState } from 'react'
export default function Register() {
    const [fullName , setFullName] = useState('')
    const getExamValue = (params) => { }
    const handleSubmit = (event) => {

    }
    const [userDetails , setUserDetails] = useState({
        fullName:'',
        cnic:'',
    })
    return (
        <>
            <div class="container">
                <form onSubmit={handleSubmit}>
                    <h5 class="text-center">ISTQB-PSTB CTFL Exam Seat Reservation Form</h5>
                    <div class="register-form">
                        <div class="form-group">
                            <label for="fname">Full Name</label>

                            <input type="text" class="form-control" id="fname" placeholder="Enter your Full name" onChange={(e)=> setFullName(e.target.value)} required />

                        </div>
                        <div class="form-group">
                            <label for="cnic">CNIC Number</label>

                            <input type="text" class="form-control" id="cnic" placeholder="Enter CNIC Number" required />
                        </div>
                        <div class="form-group">
                            <label for="lname" >Last Name</label>

                            <input type="text" class="form-control" id="lname" placeholder="Last name" />

                        </div>
                        <div class="form-group">
                            <label for="email">Email Address</label>

                            <input type="email" class="form-control" id="email" placeholder="Your email address that you check regularly." required />

                        </div>
                        <div class="form-group">
                            <label for="oemail">Official Email</label>

                            <input type="email" class="form-control" id="oemail" placeholder="Your Official/Company email address " />

                        </div>
                        <div class="form-group">
                            <label for="phone">Mobile Number</label>

                            <input type="tel" class="form-control" id="typePhone" placeholder="Your Current Mobile Number" required />

                        </div>
                        <div class="form-group">
                            <label for="password" >Password</label>

                            <input type="password" class="form-control" id="password" placeholder="Your password" />

                        </div>
                        <div class="form-group">
                            <label for="address" >Postal Address</label>

                            <input type="text" class="form-control" id="address1" placeholder="Enter Address" />
                            <p><strong>Note:</strong> Please provide your complete postal address on which you can receive your certificate, after passing the exam.</p>

                        </div>
                        <div class="form-group">
                            <label for="location">Select Location</label>

                            <select class="form-control form-select" id="locate">
                                <option disabled selected>Select your Exam location</option>
                                <option>Islamabad</option>
                                <option>Lahore</option>
                                <option>Karachi</option>
                            </select>

                        </div>
                        <div class="form-group">
                            <label for="location">Select Exam</label>

                            <select class="form-control form-select" id="locate" required>
                                <option disabled selected>Select your Exam Date</option>
                                <option>ISB-February 17, 2023</option>
                                <option>LHR-February 18, 2023</option>
                                <option>KCH-February 17, 2023</option>
                            </select>

                        </div>
                        <div class="form-group">
                            <label>PSTB Terms and Conditions</label>
                            <p> In order to appear in exam, all candidates must accept the below agreement.</p>
                            <div class="form-check">
                                <p>In order to appear in exam, all candidates must accept the below agreement.
                                    As per PSTB and ISTQB rules, the question paper and the answer sheets are property of PSTB and will not be displayed to the candidate after the examination.
                                    I agree to abide by PSTB decisions.</p>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="terms" id="terms-yes" value="yes" required />
                                <label class="form-check-label" for="terms-yes">
                                    Agree
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="terms" id="terms-no" value="no" required />
                                <label class="form-check-label" for="terms-no">
                                    Disagree (Cancel registration)
                                </label>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="sub-button">
                                <button type="submit" id="submit-btn" class="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

        </>

    )
}
