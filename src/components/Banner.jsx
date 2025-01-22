import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <>
            <div className='Banner-section-parent'>
                <div className='banner-sub-parent'>
                    <div className="row banner-row text-white w-100 p-0 m-0">
                        <div className="col-md-7 p-0">
                            <div className='banner-left'>
                                <div className='banner-left-image'>
                                    <img src="/assets/images/doctor.png" alt="Doctor" />
                                </div>
                                <div className='banner-content'>
                                    <h3>Dr. Jayini P Rammohen</h3>
                                    <p>Over 23+ years of Excellence in Orthopedic & Joint Replacement Surgery</p>
                                    <button style={{backgroundColor:"red"}} className='btn mt-2 text-white'>
                                        <Link to='/contact-us'>BOOK APPOINTMENT</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 p-0">
                            <div className='banner-right'>
                                <video autoPlay muted loop playsInline className="background-video">
                                    <source src="/assets/images/banner.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Banner;
 