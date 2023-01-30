import './flipcard.css';
import React,{useState} from 'react';

export default function FlipCard(props) {
    
    return (
        <>
            {props.data.map((value, index) => (
                <div className="flip-card col-12 col-md-4 col-xl-4" key={index}>
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img src={value.imgUrl} alt="" />
                            <h4 className='headingMain certificationHead'>{value.name}</h4>
                            <div className='mt-4'>
                                <h5 className='headingMain text-left'>Exam Date:</h5>
                                {value.exams.map((value, index) => (
                                    <div className='text-left examDate'>
                                        <h4>{value.city} - <b>{value.date}</b></h4>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flip-card-back">
                            <div className='card-text descCertification'>
                                {value.description}
                                {value.details &&
                                    <p className='text-muted'>Click here to view <a href='/#testers'> Certified Testers List.</a></p>

                                }
                            </div>
                        </div>
                    </div>
                </div>

            ))}
            {props.formData.map((value, index) => (
                <div className='simple-card col-12 col-md-4 col-xl-4'>
                    <div className='inner-card'>
                        <div className='inner-heading'>
                        <h4 className='reserve-heading'>{value.name}</h4>
                        </div>
                        <p>{value.description}</p>
                        <p className='card-text text-muted'><a href='/registeration'> Registration Form for Certification</a></p>
                    </div>
                </div>
            ))}
        </>

    )
}


