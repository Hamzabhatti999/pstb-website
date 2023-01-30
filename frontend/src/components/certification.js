import React from 'react';
import './certification.css'
import foundation from '../assets/foundation.jpg'
import a4q from '../assets/A4Q.jpg'
import tmmi from '../assets/TMMI.jpg'
import testmanger from '../assets/test manager.jpg'
import testanalysts from '../assets/test analyst.jpg'
import agile from '../assets/agile.jpg'
import FlipCard from './common/flipCard';
import { useState } from 'react';

export default function certification() {
  const [certifications, setCertifications] = useState([
    {
      imgUrl: foundation,
      name: 'Foundation CTFL',
      exams: [{
        city: 'Lahore',
        date: 'February 18, 2023'
      },
      {
        city: 'Karachi',
        date: 'February 17, 2023'
      },
      {
        city: 'Islamabad',
        date: 'February 17, 2023'
      },
      ],
      description: 'Foundation Level Certification exam provides an opportunity to professionals to exhibit their practical knowledge of fundamental concepts of the field of software testing. The target for this certification program are following professionals:Test Designers,Test Analysts,Test Engineers,Test Consultants,Test Managers,User Acceptance Testers,IT Professionals.',
      details: true
    },
    {
      imgUrl: a4q,
      name: 'A4Q Foundation Level Tester for Appium',
      exams: [{
        city: 'Lahore:',
        date: 'February 18, 2023'
      }, {
        city: 'Karachi:',
        date: 'February 17, 2023'
      }, {
        city: 'Islamabad:',
        date: 'February 17, 2023'
      }],
      description: 'The A4Q Foundation Level Tester for Appium Certification attests to an individual’s understanding and knowledge of mobile application testing and automating native, hybrid and mobile web apps on Android, iOS and Windows platforms, using the Appium® automated testing tool.',
      
    
    },
    {
      imgUrl: a4q,
      name: 'A4Q Selenium Tester Foundation Certification',
      exams: [{
        city: 'Lahore:',
        date: 'February 18, 2023'
      }, {
        city: 'Karachi:',
        date: 'February 17, 2023'
      }, {
        city: 'Islamabad:',
        date: 'February 17, 2023'
      }],
      description: 'The A4Q Selenium Tester Foundation Certification is an independent, internationally recognised certification as proof of expertise in the field of test automation with Selenium WebDriver.'
    },
    {
      imgUrl: tmmi,
      name: 'TMMi Professional Certification',
      exams: [{
        city: 'Lahore:',
        date: 'February 18, 2023'
      }, {
        city: 'Karachi:',
        date: 'February 17, 2023'
      }, {
        city: 'Islamabad:',
        date: 'February 17, 2023'
      }],
      description: 'The TMMi Professional qualification is aimed at anyone involved in using the TMMi model. This includes people in roles such as test process improvers, test consultants, TMMi (lead-)assessors, business stakeholders, test managers, and members of a Test Process Group. This TMMi Professional qualification is appropriate for anyone who wants an understanding of the TMMi model. Holders of the TMMi Professional Certificate will be able to demonstrate a level of knowledge required as a prerequisite to become an accredited TMMi lead-assessor or assessor.',
    
    },
    {
      imgUrl: testmanger,
      name: 'Test Manager CTAL',
      exams: [{
        city: 'Exam Will be conducted on request. For more information contac info@pstb.pk'
      }],
      description: 'The Advanced Level qualification is aimed at people who have achieved an advanced point in their careers in software testing. This includes people in roles such as testers, test analysts, test engineers, test consultants, test managers, user acceptance testers and software developers.',
      details: true
    },
    {
      imgUrl: testanalysts,
      name: 'Test Analyst CTAL',
      exams: [{
        city: 'Exam Will be conducted on request. For more information contac info@pstb.pk'
      }],
      description: 'The Advanced Level qualification is aimed at people who have achieved an advanced point in their careers in software testing. This includes people in roles such as testers, test analysts, test engineers, test consultants, test managers, user acceptance testers and software developers.',
      details: true
    },
    {
      imgUrl:agile,
      name:'Agile Tester Extension',
      exams: [{
        city: 'Lahore:',
        date: 'February 18, 2023'
      }, {
        city: 'Karachi:',
        date: 'February 17, 2023'
      }, {
        city: 'Islamabad:',
        date: 'February 17, 2023'
      }],
      description:'The Agile Tester – Foundation Level certification exam provides an opportunity to professionals who wants a deeper understanding of software testing in the Agile world, such as project managers, quality managers, software development managers, management consultants, IT directors, and business analysts.',
      details: true
    },
  ])
  const [reserve,setReserve] = useState([{
    name: 'Reserve a Seat',
    description:'Please reserve an exam seat by filling the following registration form.Payment details will be emailed to you after seat reservation.'
  }])
  return (
    <>
      <div className='container' id='certification' >
        <div className='main-heading'>
          <h2>Certification </h2>
          <p className='text-muted'>ISTQB® Certified Tester is the most widespread qualification scheme in the world, and the syllabi contents and  glossary have
            <br></br>
            become the de facto industry reference for the software testing profession.
          </p>
        </div>
        <div className='row'>
          
            <FlipCard data={certifications} formData={reserve} />
            
        </div>
      </div>
    </>

  )
}
