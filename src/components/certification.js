import React from 'react'
import foundation from '../assets/foundation.jpg'
import training from '../assets/ISTQB_AccreditedTrainingProvider.png'
import a4q from '../assets/A4Q.jpg'
import tmmi from '../assets/TMMI.jpg'
import testmang from '../assets/test manager.jpg'
import analysts from '../assets/test analyst.jpg'
import agile from '../assets/agile.jpg'
export default function certification() {
  return (
    <>
      {/* Certification Section */}
      <section>
        {/* Foundation CTFL  Section*/}
        <div class="row foundation">
          <div class="row-md-4">
            <h1 class="heading ">Certification</h1>
            <p class=" text-muted ">ISTQB® Certified Tester is the most widespread qualification scheme in the world, and the syllabi contents and  glossary have <br />
              become the de facto industry reference for the software testing profession.</p>
          </div>
          <div class="col-md-4 " >
            <h4 class="subheading">
              <a href="/" class="found">Foundation CTFL</a>
            </h4>
            <p class="text-muted">
              Foundation Level Certification exam provides an opportunity to professionals to exhibit their practical knowledge of fundamental concepts of the field of software testing.
              The target for this certification program are following professionals:
              Test Designers,
              Test Analysts,
              Test Engineers,
              Test Consultants,
              Test Managers,
              User Acceptance Testers,
              IT Professionals.
              Click here to view
              <strong class="list"><a href="/" class="found"> Certified Testers List. </a> </strong>
            </p>
          </div>
          <div class="col-md-2 " >
            <a class="card rounded-circle" href='/'>
              <img src={foundation} class="card-img-top rounded-cricle" alt="ccc" />
              <div class="card-img-overlay" id="green-overlay">
                <p class="card-title text-white">More Details</p>
              </div>
            </a>
          </div>
          <div class="col-md-4 exam" >
            <h5>Exam Date</h5>
            <p><strong>Lahore:</strong>
              February 18, 2023
            </p>
            <p><strong>Islamabad:</strong>
              February 17, 2023
            </p>
            <p><strong>Karachi:</strong>
              February 17, 2023
            </p>
            <a class="card rounded-circle" id="accr-img" href='/'>
              <img src={training} class="card-img-top rounded-cricle" alt="ccc" />
              <div class="card-img-overlay" id="black-overlay">
                <p class="card-title text-white">More Details</p>
              </div>
            </a>
          </div>
        </div>
        {/* Appium Level Tester  Section*/}
        <div class="row appium ">
          <div class="col-md-4">
            <h5>Exam Date</h5><br />
            <p><strong>Lahore:</strong>
              February 18, 2023
            </p>
            <p><strong>Islamabad:</strong>
              February 17, 2023
            </p>
            <p><strong>Karachi:</strong>
              February 17, 2023
            </p>
          </div>
          <div class="col-md-2">
            <a class="card rounded-circle" href='/'>
              <img src={a4q} class="card-img-top rounded-cricle" alt="ccc" />
              <div class="card-img-overlay" id="green-overlay">
                <h5 class="card-title afq text-white">More Details</h5>
              </div>
            </a>
          </div>
          <div class="col-md-5 a4q ">
            <div class="a4q-heading">
              <a href='/'><h4>A4Q Foundation Level Tester for Appium</h4></a>
            </div>
            <div class="text-muted text">
              <p>The A4Q Foundation Level Tester for Appium Certification attests to an individual’s understanding and knowledge of mobile application testing and automating native, hybrid and mobile web apps on Android,
                 iOS and Windows platforms, using the Appium® automated testing tool.</p>
            </div>

          </div>
        </div>
        {/* Selenuim Level Tester */}
        <div class="row selenuim">
          <div class="sel col-md-4" >
            <h4 class="sel-heading">
              <a href="/">A4Q Selenium Tester Foundation Certification</a>
            </h4>
            <p class="text-muted">
              The A4Q Selenium Tester Foundation Certification is an independent, internationally recognised certification as proof of expertise in the field of test automation with Selenium WebDriver.
            </p>
          </div>
          <div class="col-md-2">
            <a class="card rounded-circle" href='/'>
              <img src={a4q} class="card-img-top rounded-cricle" alt="ccc" />
              <div class="card-img-overlay" id="green-overlay">
                <h5 class="card-title afq text-white">More Details</h5>
              </div>
            </a>
          </div>
          <div class="col-md-4 exam" >
            <h5>Exam Date</h5>
            <p><strong>Lahore:</strong>
              February 18, 2023
            </p>
            <p><strong>Islamabad:</strong>
              February 17, 2023
            </p>
            <p><strong>Karachi:</strong>
              February 17, 2023
            </p>
          </div>
        </div>
        {/* TMMI Professional Certification */}
        <div class="row appium ">
          <div class="col-md-4">
            <h5>Exam Date</h5><br />
            <p><strong>Lahore:</strong>
              February 18, 2023
            </p>
            <p><strong>Islamabad:</strong>
              February 17, 2023
            </p>
            <p><strong>Karachi:</strong>
              February 17, 2023
            </p>
          </div>
          <div class="col-md-2">
            <a class="card rounded-circle" href='/'>
              <img src={tmmi} class="card-img-top rounded-cricle" alt="ccc" />
              <div class="card-img-overlay" id="green-overlay">
                <h5 class="card-title afq text-white">More Details</h5>
              </div>
            </a>
          </div>
          <div class="col-md-5 a4q ">
            <div class="a4q-heading">
              <a href='/'><h4>TMMi Professional Certification</h4></a>
            </div>
            <div class="text-muted text">
              <p>The TMMi Professional qualification is aimed at anyone involved in using the TMMi model. This includes people in roles such as test process improvers,
                test consultants, TMMi (lead-)assessors, business stakeholders, test managers, and members of a Test Process Group. This TMMi Professional qualification is appropriate for anyone who wants an understanding of the TMMi model.
                Holders of the TMMi Professional Certificate will be able to demonstrate a level of knowledge required as a prerequisite to become an accredited TMMi lead-assessor or assessor.</p>
            </div>

          </div>
        </div>
        {/* Test Manager Ctal */}
        <div class="row ctal">
          <div class="ctal col-md-4" >
            <h4 class="ctal-heading">
              <a href="/">Test Manager CTAL</a>
            </h4>
            <p class="text-muted">
              The Advanced Level qualification is aimed at people who have achieved an advanced point in their careers in software testing. This includes people in roles such as testers, test analysts, test engineers,
               test consultants, test managers, user acceptance testers and software developers.  Click here to view
              <strong class="list"><a href="/" class="found"> Certified Testers List. </a> </strong>
            </p>
          </div>
          <div class="col-md-2">
            <a class="card rounded-circle" href='/'>
              <img src={testmang} class="card-img-top rounded-cricle" alt="ccc" />
              <div class="card-img-overlay" id="green-overlay">
                <h5 class="card-title afq text-white">More Details</h5>
              </div>
            </a>
          </div>
          <div class="col-md-4 ctal-exam" >
            <h5>Exam Date</h5>
            <p>
              Will be conducted on request.
              For more information contact <br />
              <strong>info@pstb.pk</strong>
            </p>
          </div>
        </div>
        {/* Test Analyst Ctal */}
        <div class="row appium ">
          <div class="col-md-4">
            <h5>Exam Date</h5>
            <p class="text-analyst">
              Will be conducted on request.
              For more information contact <br />
              <strong>info@pstb.pk</strong>
            </p>
          </div>
          <div class="col-md-2">
            <a class="card rounded-circle" href='/'>
              <img src={analysts} class="card-img-top rounded-cricle" alt="ccc" />
              <div class="card-img-overlay" id="green-overlay">
                <h5 class="card-title afq text-white">More Details</h5>
              </div>
            </a>
          </div>
          <div class="col-md-5 a4q ">
            <div class="a4q-heading">
              <a href='/'><h4>Test Analyst CTAL</h4></a>
            </div>
            <div class="text-muted text">
              <p>The Advanced Level qualification is aimed at people who have achieved an advanced point in their careers in software testing.
                This includes people in roles such as testers, test analysts, test engineers, test consultants, test managers, user acceptance testers and software developers.
                Click here to view
                <strong class="list"><a href="/" class="found"> Certified Testers List. </a> </strong>
              </p>
            </div>
          </div>
        </div>
        {/* Agile Tester Extension */}
        <div class="row selenuim">
          <div class="sel col-md-4" >
            <h4 class="sel-heading">
              <a href="/">Agile Tester Extension</a>
            </h4>
            <p class="text-muted">
             The Agile Tester – Foundation Level certification exam provides an opportunity to professionals who wants a deeper understanding of software testing in the Agile world,
              such as project managers, quality managers, software development managers, management consultants, IT directors, and business analysts.Click here to view
              <strong class="list"><a href="/" class="found"> Certified Testers List.</a> </strong>
            </p>
          </div>
          <div class="col-md-2">
            <a class="card rounded-circle" href='/'>
              <img src={agile} class="card-img-top rounded-cricle" alt="ccc" />
              <div class="card-img-overlay" id="green-overlay">
                <h5 class="card-title afq text-white">More Details</h5>
              </div>
            </a>
          </div>
          <div class="col-md-4 exam" >
            <h5>Exam Date</h5>
            <p><strong>Lahore:</strong>
              February 18, 2023
            </p>
            <p><strong>Islamabad:</strong>
              February 17, 2023
            </p>
            <p><strong>Karachi:</strong>
              February 17, 2023
            </p>
          </div>
        </div>
        {/* Seat Reservation / Registration Form */}
        <div class="row appium ">
          <div class="col-md-4">
          </div>
          <div class="col-md-2" id="register">
            <a class="card rounded-circle" href='/'>
            <img src={agile} class="card-img-top rounded-cricle" alt="ccc" />
              <div class="card-img-overlay" id="transparent-overlay">
                <h5 class="card-title afq text-white">Register For Exam</h5>
              </div>
            </a>
          </div>
          <div class="col-md-5 a4q ">
            <div class="a4q-heading">
              <a href='/'><h4>Reserve a Seat</h4></a>
            </div>
            <div class="text-muted reserve">
              <p>Please reserve an exam seat by filling the following registration form  
                <a href='/#'>Registration Form for Certification.</a>  Payment details will be emailed to you after seat reservation
              
              </p>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
