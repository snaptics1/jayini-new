import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Deals = () => {
    const data = [
        {
            image: "/assets/images/general.png",
            title: "General Trauma",
            description: "Injuries or physical damage to the body caused by accidents, falls, or other external forces. These injuries can range from minor to severe and affect various parts of the body.",
            details: ["Fractures", "Sprains and Strains", "Dislocations", "Soft Tissue Injuries", "Whiplash", "Tendon Injuries"]
        },
        {
            image: "/assets/images/image 6.png",
            title: "Knee Disorders and Treatment",
            description: "The knee is one of the most complex and weight-bearing joints in the body, and it is highly susceptible to injuries, especially in physically active individuals. ",
            details: ["Osteoarthritis (OA)", "Meniscus Tears", "Ligament Injuries (ACL, PCL, MCL, LCL)", "Patellar Tendonitis", "Bursitis", "Knee Fractures"]
        },
        {
            image: "/assets/images/image 7.png",
            title: "Shoulder",
            description: "The shoulder is one of the most flexible and mobile joints in the body, but its range of motion also makes it susceptible to injury. ",
            details: ["Rotator Cuff Injuries", "Frozen Shoulder (Adhesive Capsulitis)", "Shoulder Dislocation", "Shoulder Impingement Syndrome", "Shoulder Bursitis", "AC Joint Injury", "Labral Tears", "Osteoarthritis of the Shoulder"]
        },
        {
            image: "/assets/images/image 8.png",
            title: "Hands, Wrists, and Elbows",
            description: "The hands, wrists, and elbows are essential for daily activities and mobility, and they are prone to injuries, whether from trauma, repetitive use, or degenerative conditions.",
            details: ["Carpal Tunnel Syndrome", "Wrist Sprains and Strains", "Tennis Elbow (Lateral Epicondylitis)", "Golfer’s Elbow (Medial Epicondylitis)", "Fractures (Wrist, Elbow, Hand)", "De Quervain’s Tenosynovitis", "Arthritis (Osteoarthritis, Rheumatoid Arthritis)", "Tendonitis", "Trigger Finger", "Elbow Dislocation"]
        },
        {
            image: "/assets/images/image 9.png",
            title: "Hip Disorders & Treatments",
            description: "The hip joint is crucial for mobility and bears much of the body's weight. It is vulnerable to various conditions, from age-related wear to traumatic injuries.",
            details: ["Hip Osteoarthritis", "Hip Fractures", "Hip Bursitis", "Labral Tears", "Trochanteric Bursitis", "Hip Dislocation", "Tendinitis", "Hip Impingement Syndrome", "Piriformis Syndrome", "Groin Strain"]
        },
        {
            image: "/assets/images/image 10.png",
            title: "Foot & Ankle Disorders & Treatments",
            description: "The foot and ankle play a vital role in movement and stability. Due to their complex structure and constant use, they are prone to various injuries and conditions.",
            details: ["Ankle Sprains", "Plantar Fasciitis", "Achilles Tendinitis", "Flat Feet (Pes Planus)", "Bunionss", "Fractures (Foot and Ankle)", "Ankle Instability", "Gout", "Piriformis Syndrome", "Tarsal Tunnel Syndrome", "Morton’s Neuroma"]
        }
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <>
            <div className='Deals-parent' style={{ position: "relative", height: 'fit-content' }}>
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    style={{
                        position: 'absolute',
                        top: 0,
                        right:0,
                        width: '30%',
                        height: '100%',
                        objectFit: 'cover',
                        zIndex: -1,
                    }}
                >
                    <source src="/assets/images/taruma.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <div className='deals-sub-parent py-5'>
                    <div className="col-md-11 col-lg-8 mx-auto">
                        <div className="row m-0">
                            {
                                data.map((item, index) => (
                                    <div
                                        key={index}
                                        className={`col-6 col-sm-4 col-md-2 p-0 `}
                                        onClick={() => setActiveIndex(index)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <div className='deals-content'>
                                            <img src={item.image} alt="" />
                                        </div>
                                    </div>
                                ))
                            }
                        </div>

                        <div className="row p-0 m-0">
                            <div className="col-md-5 mt-3">
                                <div className='specialities-image'>
                                    <img src="/assets/images/specialities.png" alt="" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className='sepecialities-content pt-4'>
                                    <h3>{data[activeIndex].title}</h3>
                                    <p>{data[activeIndex].description}</p>
                                    <ul>
                                        {data[activeIndex].details.map((detail, idx) => (
                                            <li key={idx}> {detail}</li>
                                        ))}
                                    </ul>
                                    <button className='bg-success text-white'>
                                        <Link className='text-white' to="/services">VIEW DETAILS</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
};

export default Deals;
