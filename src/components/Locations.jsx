import React from "react";
import Deals from "./Deals";

const Locations = () => {
  return (
    <>
      <div
        className="locations-parent"
        style={{ position: "relative", zIndex: 2, overflow: "hidden" }}
      >
        <video
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: -1,
            objectFit: "cover",
          }}
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/assets/images/locations.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="locationHeading text-center" style={{visibility:"hidden"}}>
          <h2>Our Locations</h2>
          <p>
            We offer comprehensive medical & surgical treatments for a vast
            range of orthopaedic conditions under one roof. We are available
            round the clock to ensure timely treatment for all orthopaedic
            emergencies.
          </p>
        </div>
        <div className="col-md-11 col-lg-8 mx-auto" style={{visibility:"hidden"}}>
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
                  RISE Commercial Complex, 3rd Floor, Over Van Lavino Cafe, Opp.
                  to APARNA SAROVAR GRANDE, Nallagandla,Telangana 500019.
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
      <div className="homepageOurLocationsSection py-5 d-none" 
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
                  RISE Commercial Complex, 3rd Floor, Over Van Lavino Cafe, Opp.
                  to APARNA SAROVAR GRANDE, Nallagandla,Telangana 500019.
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

      {/* ortho needs */}

      <div className="orthoneeds-parent">
        <div className="orthoneeds-parent-sub py-5">
          <div className="row m-0 align-items-center firstRow">
            <div className="col-md-7">
              <div class="orthoneeds-main-image">
                <video autoPlay muted loop playsInline>
                  <source
                    src="/assets/images/orthoneeds.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            <div className="col-md-5 mx-auto">
              <div className="orthoneeds-content text-center">
                <h4>All Ortho Needs</h4>
                <p>
                  OUR COMPREHENSIVE KNEE REPLACEMENT PROGRAM IS WITH YOU AT
                  EVERY STEP
                </p>
                <div className="orthoneeds-sub text-center">
                  <div className="col-md-12">
                    <div className="row">
                      <div className="col-6 col-lg-3 col-md-4">
                        <div className="orthoneeds-child">
                          <img
                            src="/assets/images/shin.png"
                            alt=""
                          />
                          <h5>Regenerative Orthopaedics</h5>
                        </div>
                      </div>
                      <div className="col-6 col-lg-3 col-md-4">
                        <div className="orthoneeds-child">
                          <img
                            src="/assets/images/Knee Replacement.png"
                            alt=""
                          />
                          <h5>PRP/Growth Factor treatment
                          </h5>
                        </div>
                      </div>
                      <div className="col-6 col-lg-3 col-md-4">
                        <div className="orthoneeds-child">
                          <img src="/assets/images/technology.png" alt="" />
                          <h5>Robotic Treatments</h5>
                        </div>
                      </div>
                      <div className="col-6 col-lg-3 col-md-4">
                        <div className="orthoneeds-child">
                          <img
                            src="/assets/images/bone-joint.png"
                            alt=""
                          />
                          <h5>Joint Replacement
                          </h5>
                        </div>
                      </div>

                      {/* second row */}
                      <div className="col-6 col-lg-3 col-md-4">
                        <div className="orthoneeds-child">
                          <img src="/assets/images/spine-care.png" alt="" />
                          <h5>Spine Care
                          </h5>
                        </div>
                      </div>
                      <div className="col-6 col-lg-3 col-md-4">
                        <div className="orthoneeds-child">
                          <img src="/assets/images/Sports Medicine.png" alt="" />
                          <h5>Sports Medicine</h5>
                        </div>
                      </div>
                      <div className="col-6 col-lg-3 col-md-4">
                        <div className="orthoneeds-child">
                          <img src="/assets/images/shin.png" alt="" />
                          <h5>General Orthopaedics
                          </h5>
                        </div>
                      </div>
                      <div className="col-6 col-lg-3 col-md-4">
                        <div className="orthoneeds-child">
                          <img src="/assets/images/physical-therapy.png" alt="" />
                          <h5>Advanced Physiotherapy
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Deals />
      </div>
    </>
  );
};

export default Locations;
