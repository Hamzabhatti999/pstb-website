import React from 'react';
import './certification.css'
import foundation from '../assets/foundation.jpg'
import a4q from '../assets/A4Q.jpg'
import tmmi from '../assets/TMMI.jpg'
import testmanger from '../assets/test manager.jpg'
import testanalysts from '../assets/test analyst.jpg'
import agile from '../assets/agile.jpg'

export default function certification() {
  return (
    <>
      <div className='mid-section' >
        <div className='main-heading'>
          <h2>Certification </h2>
          <p className='text-muted'>ISTQB® Certified Tester is the most widespread qualification scheme in the world, and the syllabi contents and  glossary have
            <br></br>
            become the de facto industry reference for the software testing profession.
          </p>
        </div>
        <div className='card-section'>
          <div className='card-body '>
          <div className='card-img center'>
              <img  src={foundation} alt='foundation' />
            </div>
            <div className='card-title'>
              Foundation CTFL
            </div>
            <div className='card-text'>
              Foundation Level Certification exam provides an opportunity to professionals to exhibit their practical knowledge of fundamental concepts of the field of software testing.
              The target for this certification program are following professionals:
              Test Designers,
              Test Analysts,
              Test Engineers,
              Test Consultants,
              Test Managers,
              User Acceptance Testers,
              IT Professionals.
              <p className='text-muted'>Click here to view <a href='/#'> Certified Testers List.</a></p>
            </div>
            <div className='exam-section'>
              <h2>Exam Date</h2>
              <p><strong>Lahore:</strong>
                February 18, 2023
              </p>
              <p><strong>Karachi:</strong>
                February 17, 2023
              </p>
              <p><strong>Islamabad:</strong>
                February 17, 2023
              </p>
            </div>
            
          </div>
          <div className='card-body'>
          <div className='card-img'>
              <img src={a4q} alt='a4q' />
            </div>
            <div className='card-title'>
              A4Q Foundation Level Tester for Appium
            </div>
            <div className='card-text'>
              The A4Q Foundation Level Tester for Appium Certification attests to an individual’s understanding and knowledge of mobile application testing and automating native,
              hybrid and mobile web apps on Android, iOS and Windows platforms, using the Appium® automated testing tool.
            </div>
            <div className='exam-section'>
              <h2>Exam Date</h2>
              <p><strong>Lahore:</strong>
                February 18, 2023
              </p>
              <p><strong>Karachi:</strong>
                February 17, 2023
              </p>
              <p><strong>Islamabad:</strong>
                February 17, 2023
              </p>
            </div>
           
          </div>
          <div className='card-body'>
          <div className='card-img'>
              <img src={a4q} alt='a4q' />
            </div>
            <div className='card-title'>
              A4Q Selenium Tester Foundation Certification
            </div>
            <div className='card-text'>
              The A4Q Selenium Tester Foundation Certification is an independent, internationally recognised certification as proof of expertise in the field of test automation with Selenium WebDriver.
            </div>
            <div className='exam-section'>
              <h2>Exam Date</h2>
              <p><strong>Lahore:</strong>
                February 18, 2023
              </p>
              <p><strong>Karachi:</strong>
                February 17, 2023
              </p>
              <p><strong>Islamabad:</strong>
                February 17, 2023
              </p>
            </div>
            
          </div>
        </div>
        <div className='card-section'>
          <div className='card-body '>
          <div className='card-img'>
              <img src={tmmi} alt='tmmi' />
            </div>
            <div className='card-title'>
              TMMi Professional Certification
            </div>
            <div className='card-text'>
              The TMMi Professional qualification is aimed at anyone involved in using the TMMi model. This includes people in roles such as test process improvers, test consultants, TMMi (lead-)assessors, business stakeholders, test managers, and members of a Test Process Group.
              This TMMi Professional qualification is appropriate for anyone who wants an understanding of the TMMi model. Holders of the TMMi Professional Certificate will be able to demonstrate a level of knowledge required as a prerequisite to become an accredited TMMi lead-assessor or assessor.
            </div>
            <div className='exam-section'>
              <h2>Exam Date</h2>
              <p><strong>Lahore:</strong>
                February 18, 2023
              </p>
              <p><strong>Karachi:</strong>
                February 17, 2023
              </p>
              <p><strong>Islamabad:</strong>
                February 17, 2023
              </p>
            </div>
           
          </div>
          <div className='card-body'>
          <div className='card-img'>
              <img src={testmanger} alt='tests'/>
            </div>
            <div className='card-title'>
              Test Manager CTAL
            </div>
            <div className='card-text'>
              The Advanced Level qualification is aimed at people who have achieved an advanced point in their careers in software testing. This includes people in roles such as testers,
              test analysts, test engineers, test consultants, test managers, user acceptance testers and software developers.
              <p className='text-muted'>Click here to view <a href='/#'> Certified Testers List.</a></p>
            </div>
            <div className='exam-section'>
              <h2>Exam Date</h2>
              <strong> <p> Exam Will be conducted on request. </p>
                <p> For more information contact </p>
                <p>info@pstb.pk</p></strong>
            </div>
            
          </div>
          <div className='card-body'>
          <div className='card-img'>
              <img src={testanalysts} alt='tests' />
            </div>
            <div className='card-title'>
              Test Analyst CTAL
            </div>
            <div className='card-text'>
              The Advanced Level qualification is aimed at people who have achieved an advanced point in their careers in software testing. This includes people in roles such as testers,
              test analysts, test engineers, test consultants, test managers, user acceptance testers and software developers.
              <p className='text-muted'>Click here to view <a href='/#'> Certified Testers List.</a></p>
            </div>
            <div className='exam-section'>
              <h2>Exam Date</h2>
              <strong> <p> Exam Will be conducted on request. </p>
                <p> For more information contact </p>
                <p>info@pstb.pk</p></strong>
            </div>
          
          </div>
        </div>
        <div className='card-section'>
          <div className='card-body '>
          <div className='card-img'>
              <img src={agile} alt='agile'/>
            </div>
            <div className='card-title'>
            Agile Tester Extension
            </div>
            <div className='card-text'>
            The Agile Tester – Foundation Level certification exam provides an opportunity to professionals who wants a deeper understanding of software testing in the Agile world, 
            such as project managers, quality managers, software development managers, management consultants, IT directors, and business analysts.
            <p className='text-muted'>Click here to view <a href='/#'> Certified Testers List.</a></p>
            </div>
            <div className='exam-section'>
              <h2>Exam Date</h2>
              <p><strong>Lahore:</strong>
                February 18, 2023
              </p>
              <p><strong>Karachi:</strong>
                February 17, 2023
              </p>
              <p><strong>Islamabad:</strong>
                February 17, 2023
              </p>
              <p>For more information contact</p>
              <strong>info@pstb.pk</strong>
            </div>
           
          </div>
          <div className='card-body'>
            <div className='card-title'>
            Reserve a Seat
            </div>
            <div className='card-text'>
           <p> Please reserve an exam seat by filling the following registration form . Payment details will be emailed to you after seat reservation</p>
           <p> <a href='/register.js'> Registration Form for Certification</a></p>
            </div>
          </div>
          
        </div>
      </div>
    </>

  )
}
