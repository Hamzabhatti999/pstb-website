import React from 'react'
import { useState } from 'react'
import "./register.css"
export default function Register() {
    // const getExamValue = (params) => {}
    
    // const postData = (data) => {
    //     fetch('http://form.co/api/user', {
    //         method: 'POST',
    //         body: JSON.stringify(data),
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     })
            
    //         .then(res => console.log("Success", JSON.stringify(res)))
    //         .catch(err => console.log("fetch",err))
    // }
    const [fullname, setName] = useState('');
    const [cnicNo, setCnic] = useState('');
    const [emailAdd, setEmail] = useState('');
    const [offEmail, setOffmail] = useState('');
    const [mobileNo, setMobile] = useState('');
    const [postalAdd, setPostal] = useState('');
    const [testlocation, setLocation] = useState('');
    const [examdate, setExam] = useState('');
    const [detail, setDetail] = useState('');
    const [language, setLang] = useState('')
    const [condition, setCondition] = useState('')
    // handle the form Submission
    const handleSubmit = (event) => {
        event.preventDefault()
        const data = {
            Fullname: fullname,
            CNIC: cnicNo,
            Email: emailAdd,
            Official_Email: offEmail,
            Mobile_No: mobileNo,
            Postal_Address: postalAdd,
            Location: testlocation,
            Exam_Date: examdate,
            Disability: detail,
            Native_Language: language,
            Terms_and_Condition: condition
        }
        console.log("Form Data=", JSON.stringify(data))
        // postData(data)
      
    }
    return (
        <>
            <div className="container">
                <form  onSubmit={handleSubmit} method="POST">
                    <h5 className="text-center">ISTQB-PSTB CTFL Exam Seat Reservation Form</h5>
                    <div className="register-form">
                        <div className="form-group">
                            <label htmlFor="fname">Full Name</label>
                            <input type="text" className="form-control" id="fname" placeholder="Enter your Full name" onChange={(e) => setName(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="cnic">CNIC Number</label>
                            <input type="text" className="form-control" id="cnic" placeholder="Enter CNIC Number" onChange={(e) => setCnic(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input type="email" className="form-control" id="email" placeholder="Your email address that you check regularly." onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="oemail">Official Email</label>
                            <input type="email" className="form-control" id="oemail" placeholder="Your Official/Company email address " onChange={(e) => setOffmail(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Mobile Number</label>
                            <input type="tel" className="form-control" id="typePhone" placeholder="Your Current Mobile Number" onChange={(e) => setMobile(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="address" >Postal Address</label>
                            <input type="text" className="form-control" id="address1" placeholder="Enter Address" onChange={(e) => setPostal(e.target.value)} />
                            <p><strong>Note:</strong> Please provide your complete postal address on which you can receive your certificate, after passing the exam.</p>
                        </div>
                        <div className="form-group">
                            <label htmlFor="location">Select Location</label>
                            <select className="form-control form-select" id="locate" onChange={(e) => setLocation(e.target.value)}>
                                <option disabled selected>Select your Exam location</option>
                                <option>Islamabad</option>
                                <option>Lahore</option>
                                <option>Karachi</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="location">Select Exam</label>
                            <select className="form-control form-select" id="exam" onChange={(e) => setExam(e.target.value)} required>
                                <option disabled selected>Select your Exam Date</option>
                                <option>ISB-February 17, 2023</option>
                                <option>LHR-February 18, 2023</option>
                                <option>KCH-February 17, 2023</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Is "English" your native language ?</label>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="terms" id="terms-yes" value="yes" onChange={(e) => setLang(e.target.value)} required />
                                <label className="form-check-label" htmlFor="terms-yes">
                                    Yes
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="terms" id="terms-no" value="no" onChange={(e) => setLang(e.target.value)} required />
                                <label className="form-check-label" htmlFor="terms-no">
                                    No
                                </label>
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Do you require any special service/treatment due to some disablity? Please provide details</label>
                            <input type="text" className="form-control" placeholder="Your Answer" onChange={(e) => setDetail(e.target.value)} />
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
                                <input className="form-check-input" type="radio" name="terms" id="terms-yes" value="yes" onChange={(e) => setCondition(e.target.value)} required />
                                <label className="form-check-label" htmlFor="terms-yes">
                                    Agree
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="terms" id="terms-no" value="no" required onChange={(e) => setCondition(e.target.value)} />
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
                <p>
                    fullname : {fullname} <br />
                    CNIC: {cnicNo} <br />
                    Email : {emailAdd} <br />
                    Official : {offEmail} <br />
                    Mobile : {mobileNo} <br />
                    Postal : {postalAdd} <br />
                    Location : {testlocation} <br />
                    Exam : {examdate} <br />
                    Detail : {detail} <br />
                    language : {language} <br />
                    Condition : {condition}
                </p>
            </div>

        </>

    )
}
