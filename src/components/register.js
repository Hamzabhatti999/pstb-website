import React from 'react'
//import "./register.css"
export default function register() {
    const getExamValue = (params) => { }
    const handleSubmit = (event)=>{
        
    }
    return (
        <>
            <div class="container">
                <form onSubmit={handleSubmit}>
                    <div class="form-group row">
                        <h5 class="text-center">ISTQB-PSTB CTFL Exam Seat Reservation Form</h5>
                        <label for="fname" class="control-label col-sm-2">Full Name</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="fname" placeholder="Enter your Full name" required />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="cnic" class="col-sm-2 col-form-label">CNIC Number</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="cnic" placeholder="Enter CNIC Number" required />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="lname" class="control-label col-sm-2">Last Name</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="lname" placeholder="Last name" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="email" class="control-label col-sm-2">Email Address</label>
                        <div class="col-sm-10">
                            <input type="email" class="form-control" id="email" placeholder="Your email address that you check regularly." required />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="oemail" class="control-label col-sm-2">Official Email</label>
                        <div class="col-sm-10">
                            <input type="email" class="form-control" id="oemail" placeholder="Your Official/Company email address " />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="phone" class="control-label col-sm-2">Mobile Number</label>
                        <div class="col-sm-10">
                            <input type="tel" class="form-control" id="typePhone" placeholder="Your Current Mobile Number" required />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="password" class="control-label col-sm-2">Password</label>
                        <div class="col-sm-10">
                            <input type="password" class="form-control" id="password" placeholder="Your password" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="address" class="control-label col-sm-2">Postal Address</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="address1" placeholder="Enter Address" />
                            <p><strong>Note:</strong> Please provide your complete postal address on which you can receive your certificate, after passing the exam.</p>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="location" class="control-label col sm-2">Select Location</label>
                        <div class="col-sm-10 ">
                            <select class="form-control form-select" id="locate">
                                <option disabled selected>Select your Exam location</option>
                                <option>Islamabad</option>
                                <option>Lahore</option>
                                <option>Karachi</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="location" class="control-label col sm-2">Select Exam</label>
                        <div class="col-sm-10" >
                            <select class="form-control form-select" id="locate" required>
                                <option disabled selected>Select your Exam Date</option>
                                <option>ISB-February 17, 2023</option>
                                <option>LHR-February 18, 2023</option>
                                <option>KCH-February 17, 2023</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="control-label col-sm-2">Terms and Conditions</label>
                        <div class="col-sm-10">
                            <strong>PSTB Terms and Conditions</strong>
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
                    </div>
                    <div class="form-group row">
                        <div class="offset-sm-2 col-sm-10 pull-right">
                            <button type="submit" id="submit-btn" class="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
            
            </>

    )
}
