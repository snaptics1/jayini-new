import React from 'react'
import CommonBanner from '../CommonBanner'
import { Link } from 'react-router-dom'

const AboutBanner = () => {
    return ( 
        <>
            <CommonBanner title={"About Us"} text={"About Us"}/>
            <div className='about-content-parent'>
                <div className='about-abs-image'>
                    <img src="/assets/images/Frame-about.png" alt="" />
                </div>
                <div className='about-content-sub'>
                    <div className="container-lg">
                        <div className="row p-0 m-0 align-items-center">
                            <div className="col-md-6">
                                <div className='about-mainimage'>
                                    <img src="/assets/images/Group 47652.png" alt="" />
                                    <div className='about-doctor-text'>
                                        <h5>Dr Jayini P Ram Mohan</h5>
                                        <small>One of the Best Orthopedic Doctors In Hyderabad</small>

                                    </div>
                                </div>

                            </div>
                            <div className="col-md-6">
                                <div className='about-main-content'>
                                    <p><b>About</b> </p>
                                    <h4 className='text-success'>Dr Jayini P Ram Mohan </h4>
                                    <p>Jayini P Rammohen is a leading and reputed Orthopedician and Joint Replacement Surgeon. He has over 25+ years of experience.</p>
                                    <br />
                                    <p>His expertise includes cruciate ligament reconstruction, frozen shoulder treatment, sports injury treatment/rehabilitation, primary hip & knee arthroplasty, soft tissue injury management, revision hip & knee arthroplasty, articular degenerative disease treatment, Achilles tendon rupture treatment, pain management/counselling, etc.</p>

                                    <div className='about-buttons'>
                                        <button><Link to='/contact-us'>Book Appointment</Link></button>
                                        <button> <i class="fa-solid fa-phone me-2"></i> <a href="tel:9137464646">9137464646</a></button>

                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutBanner