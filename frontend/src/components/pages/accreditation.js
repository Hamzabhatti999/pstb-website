import React from "react";
import Navbar from "../navbar";
import "./accreditation.css";
import accredited_img from "../../assets/accreditedTraining.jpg"
import apply_img from "../../assets/Picture2.png"
export default function Accredition() {
    return (
        <>
            <Navbar />
            <div className="container ">
                <div className="row top-portion">
                    <div className="col-md-6 accredited_img">
                        <img className="top-image " src={accredited_img} alt="training" />
                    </div>
                    <div className="col-md-4 accredited-text">
                        <h1>Accredited Training Program</h1>
                        <p>The accreditation is globally recognised which means our training providers have met the terms of ISTQB accreditation.
                            The training providers are active and valued partners of the PSTB and are best
                            positioned to instruct participants on the knowledge and application of the ISTQB Syllabi.</p>
                    </div>
                </div>
                <hr />
                <div className="marquee-text">
                    <div className="inner-text">
                        <p>PSTB invites you to submit proposals regarding Accredited Training Providers for ISTQB Certification Exam.</p>
                    </div>
                    <div className="outer-text">
                        <p>PSTB has certified Approximately 200 ISTQB® testers in Pakistan.
                            This rapid growth trend demands availability of Accredited Training Provider. Training providers being the crux of the training process are active and valued partners of the PSTB.
                            They are best positioned to train participants in the applicability of the ISTQB Syllabi because of their years long experience in the industry .</p>
                    </div>
                </div> 
                <div className="mid-portion ">
                    <h3>ISTQB® Accreditation</h3>
                    <p>Training providers wishing to advertise their courses as being ISTQB® compliant must pass an accreditation process which is designed to ensure that:</p>
                    <ul>
                        <li>Training materials conform with the current syllabi</li>
                        <li>Trainers have relevant experience and skills in both software testing and training</li>
                        <li>Organisations have access to facilities adequate for delivering training</li>
                    </ul>
                    <h3>Applying for ISTQB® Accreditation</h3>
                    <p>PSTB welcomes applications for accreditation and provides support in the application process. Training Provider must follow the <a href="/">PSTB’s rules and regulations.</a></p>
                    <p>The submission form and details of the accreditation process are available here. <a href="/">Application Form for PSTB Training Accreditation</a> </p>
                    <img className="apply-img" src={apply_img} alt="img" />
                </div>
            </div>
            <footer>
            <hr />
            </footer>
        </>
    )
}