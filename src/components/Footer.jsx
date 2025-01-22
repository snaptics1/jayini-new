import React from "react";

const Footer = () => {
  return (
    <>
      <div className="footer-parent text-black">
        <div className="footer-sub-parent">
          <div className="footer-abs-image">
            <img src="/assets/images/Frame (1).png" alt="" />
            <img src="/assets/images/Frame.png" alt="" />
          </div>
          <div className="col-md-10 col-lg-8 mx-auto">
            <div className="row m-0">
              <div className="col-md-6">
                <div className="footer-content1">
                  <h5>Our Locations :</h5>
                  <div className="footer-address">
                    <i class="fa-solid fa-location-dot"></i>
                    <div>
                      <p> Kondapur Clinic</p>
                      <p>
                        5th Floor, Above Sachdev Sports, Sri Tirumala Subash
                        Arcade, Kondapur X Roads, Kothaguda, Hyderabad,
                        Telangana 500084.
                      </p>
                     
                    </div>
                  </div>
                  <div className="footer-address py-2 mb-3">
                        <i class="fa-solid fa-phone"></i>
                        <a href="tel:+919362454545">+919362454545</a>
                      </div>
                  <div className="footer-address">
                    <i class="fa-solid fa-location-dot"></i>
                    <div>
                      <p>Nallagandla Clinic</p>
                      <p>
                        RISE Commercial Complex, 3rd Floor, Over Van Lavino
                        Cafe, Opp. to APARNA SAROVAR GRANDE,
                        Nallagandla,Telangana 500019.
                      </p>
                    </div>
                  </div>
                  <div className="footer-contact">
                    <div className="footer-address">
                      <i class="fa-solid fa-phone"></i>
                      <a href="tel:+919137454545">+919137454545</a>
                    </div>
                    <div className="footer-address mt-2">
                      <i class="fa-solid fa-envelope"></i>
                      <a href="mailto:jayiniclinics@gmail.com">
                        jayiniclinics@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="footer-links">
                  <h5>Our Services</h5>
                  <ul>
                    <li>
                      <a href="#">Regenerative Orthopaedics</a>
                    </li>
                    <li>
                      <a href="#">PRP/Growth Factor treatment</a>
                    </li>
                    <li>
                      <a href="#">Robotic Joint Replacement</a>
                    </li>
                    <li>
                      <a href="#"> Joint Replacement</a>
                    </li>
                    <li>
                      <a href="#">Sports Medicine</a>
                    </li>
                    <li>
                      <a href="#"> General Orthopaedics</a>
                    </li>
                    <li>
                      <a href="#">Advanced Physiotherapy</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <div className="footer-links">
                  <h5>Quick Links</h5>
                  <ul>
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="/about">About</a>
                    </li>
                    <li>
                      <a href="/services">Our Services</a>
                    </li>
                    <li>
                      <a href="/contact-us">Contact Us</a>
                    </li>
                    <li>
                      <a href="/patient-education">Patient Education</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-end">
          <img src="/assets/images/footer-bg-last.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default Footer;
