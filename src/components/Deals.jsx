import React, { useState } from "react";
import { Link } from "react-router-dom";

const Deals = () => {
  const data = [
    {
      image: "/assets/images/general.png",
      title: "General Trauma",
      description:
        "Injuries or physical damage to the body caused by accidents, falls, or other external forces. These injuries can range from minor to severe and affect various parts of the body.",
      details: [
        "Fractures",
        "Sprains and Strains",
        "Dislocations",
        "Soft Tissue Injuries",
        "Whiplash",
        "Tendon Injuries",
      ],
    },
    {
      image: "/assets/images/image 6.png",
      title: "Knee Disorders and Treatment",
      description:
        "The knee is one of the most complex and weight-bearing joints in the body, and it is highly susceptible to injuries, especially in physically active individuals. ",
      details: [
        "Osteoarthritis (OA)",
        "Meniscus Tears",
        "Ligament Injuries (ACL, PCL, MCL, LCL)",
        "Patellar Tendonitis",
        "Bursitis",
        "Knee Fractures",
      ],
    },
    {
      image: "/assets/images/image 7.png",
      title: "Shoulder",
      description:
        "The shoulder is one of the most flexible and mobile joints in the body, but its range of motion also makes it susceptible to injury. ",
      details: [
        "Rotator Cuff Injuries",
        "Frozen Shoulder (Adhesive Capsulitis)",
        "Shoulder Dislocation",
        "Shoulder Impingement Syndrome",
        "Shoulder Bursitis",
        "AC Joint Injury",
        "Labral Tears",
        "Osteoarthritis of the Shoulder",
      ],
    },
    {
      image: "/assets/images/image 8.png",
      title: "Hands, Wrists, and Elbows",
      description:
        "The hands, wrists, and elbows are essential for daily activities and mobility, and they are prone to injuries, whether from trauma, repetitive use, or degenerative conditions.",
      details: [
        "Carpal Tunnel Syndrome",
        "Wrist Sprains and Strains",
        "Tennis Elbow (Lateral Epicondylitis)",
        "Golfer’s Elbow (Medial Epicondylitis)",
        "Fractures (Wrist, Elbow, Hand)",
        "De Quervain’s Tenosynovitis",
        "Arthritis (Osteoarthritis, Rheumatoid Arthritis)",
        "Tendonitis",
        "Trigger Finger",
        "Elbow Dislocation",
      ],
    },
    {
      image: "/assets/images/image 9.png",
      title: "Hip Disorders & Treatments",
      description:
        "The hip joint is crucial for mobility and bears much of the body's weight. It is vulnerable to various conditions, from age-related wear to traumatic injuries.",
      details: [
        "Hip Osteoarthritis",
        "Hip Fractures",
        "Hip Bursitis",
        "Labral Tears",
        "Trochanteric Bursitis",
        "Hip Dislocation",
        "Tendinitis",
        "Hip Impingement Syndrome",
        "Piriformis Syndrome",
        "Groin Strain",
      ],
    },
    {
      image: "/assets/images/image 10.png",
      title: "Foot & Ankle Disorders & Treatments",
      description:
        "The foot and ankle play a vital role in movement and stability. Due to their complex structure and constant use, they are prone to various injuries and conditions.",
      details: [
        "Ankle Sprains",
        "Plantar Fasciitis",
        "Achilles Tendinitis",
        "Flat Feet (Pes Planus)",
        "Bunionss",
        "Fractures (Foot and Ankle)",
        "Ankle Instability",
        "Gout",
        "Piriformis Syndrome",
        "Tarsal Tunnel Syndrome",
        "Morton’s Neuroma",
      ],
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <div
        className="Deals-parent"
        style={{ position: "relative", height: "fit-content" }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "20%",
            height: "100%",
            objectFit: "cover",
            zIndex: -1,
          }}
        >
          <source src="/assets/images/taruma.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* <div className='deals-sub-parent py-5'>
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
                </div> */}

        <div
          className="homepageOurLocationsSection py-5"
          // style={{background:"#031735"}}
        >
          <div className="locationHeading text-center">
            <h2>Our Locations</h2>
            <p>
              We offer comprehensive medical & surgical treatments for a vast
              range of orthopaedic conditions under one roof. We are available
              round the clock to ensure timely treatment for all orthopaedic
              emergencies.
            </p>
          </div>
          <div className="col-md-11 col-lg-8 mx-auto">
            <div className="maps">
              <div className="maps-sub-1">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.0389386008187!2d78.3651732!3d17.4578503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93df8a913649%3A0xf69f91838bfc7a2f!2sDr%20Jayini%20P%20Rammohen%20I%20Best%20Orthopedic%20Doctor%20in%20Hyderabad!5e0!3m2!1sen!2sin!4v1734623280532!5m2!1sen!2sin"
                  width="100%"
                  height="220"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <div className="maps-text">
                  <h4>Kondapur Clinic</h4>
                  <p>
                    5th Floor, Above Sachdev Sports, Sri Tirumala Subash Arcade,
                    Kondapur X Roads, Kothaguda, Hyderabad, Telangana 500084.
                  </p>
                  <button className="bg-success mt-3">
                    <a
                      className="text-white"
                      target="_blank"
                      rel="noreferrer"
                      href="https://maps.app.goo.gl/9JwBqjrDCkucBKbR6"
                    >
                      Get Direction
                    </a>
                  </button>
                </div>
              </div>
              <div className="maps-sub-1">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30447.102149392147!2d78.2710679!3d17.465085!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb92c53d4319dd%3A0x224cbb8c0349f993!2sJayini%20Multi%20Speciality%20Clinics%20(Nallagandla)!5e0!3m2!1sen!2sin!4v1734623399375!5m2!1sen!2sin"
                  width="100%"
                  height="220"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <div className="maps-text">
                  <h4>Nallagandla Clinic</h4>
                  <p>
                    RISE Commercial Complex, 3rd Floor, Over Van Lavino Cafe,
                    Opp. to APARNA SAROVAR GRANDE, Nallagandla,Telangana 500019.
                  </p>
                  <button className="bg-success text-white mt-3">
                    <a
                      className="text-white"
                      target="_blank"
                      rel="noreferrer"
                      href="https://maps.app.goo.gl/ymyqu3FRi4XgPByh6"
                    >
                      Get Direction
                    </a>
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
