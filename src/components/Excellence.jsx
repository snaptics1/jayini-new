import React from 'react'
import { Link } from 'react-router-dom'

const Excellence = () => {
    return (
        <>
            <div className='excellence-parent'>
                <div className="excellence-sub-parent">
                    <div className="col-md-11 col-lg-9 mx-auto">
                        <div className="row">
                            <div className="col-md-4 position-relative">
                                <div className='badge'>
                                    <img style={{ position: "relative" }} src="/assets/images/Rectangle 27.png" alt="" />
                                    <div className='badge-text'>
                                        <h2>23+</h2>
                                        <small>of</small>
                                        <p>experience</p>
                                    </div>
                                </div>
                                <div className='excellence-image'>
                                    <img src="/assets/images/image.png" alt="" />

                                </div>
                            </div>
                            <div className="col-md-8 bg-white">
                                <div className='excellence-content'>
                                    <p className='text-success'> <b>ABOUT</b></p>
                                    <h4>Best <span className='text-success fw-bold'>Orthopedic Doctor</span> in Hyderabad</h4>
                                    <p>Jayini P Rammohen is a leading and reputed Orthopedician and Joint Replacement Surgeon. He has over 25+ years of experience.</p> <br />
                                    <p>His expertise includes cruciate ligament reconstruction, frozen shoulder treatment, sports injury treatment/rehabilitation, primary hip & knee arthroplasty, soft tissue injury management, revision hip & knee arthroplasty, articular degenerative disease treatment, Achilles tendon rupture treatment, pain management/counselling, etc.</p>
                                    <div className='excellence-content-sub'>
                                        <div className="onlineAppointment">
                                            <i class="fa-solid fa-calendar-days"></i>
                                            <h5 className='text-success' style={{fontWeight:600}}> <Link to="/contact-us">Book Appointment</Link> </h5>
                                        </div>
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

export default Excellence