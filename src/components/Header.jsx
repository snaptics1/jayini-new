import React, { useState } from "react";
import CommonModal from "./CommonModal";
import { Link } from "react-router-dom";

const Header = () => {
  const [isNavOpen, setNavOpen] = useState(false);

  const handleNavToggle = () => {
    setNavOpen(!isNavOpen);
  };

  return (
    <>
      <div className="navbar-parent">
        <div className="logoSection d-flex justify-content-between container py-2 align-items-center">
          <Link to="">
            <div className="navbar-logo">
              <img src="/assets/images/jayanilogo.jpg" alt="" />
            </div>
          </Link>

          <div className="d-flex gap-4 align-items-center">
            <p>Book Appointment</p>
            <div>
              <p>
                {" "}
                Nallagandla :<a href="tel:+91-9137464646"> +91 - 9137464646</a>
              </p>
              <p>
                {" "}
                Kondapur :
                <a className="mx-3" href="tel:+91-9362454545">
                  +91 - 9362454545
                </a>
              </p>
            </div>
          </div>
        </div>
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <button
              className="navbar-toggler"
              type="button"
              onClick={handleNavToggle}
              aria-controls="navbarSupportedContent"
              aria-expanded={isNavOpen}
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`}
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="" onClick={handleNavToggle}>
                    HOME
                  </Link>
                </li>
               
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="/about"
                    onClick={handleNavToggle}
                  >
                    ABOUT US
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="/about">
                        {" "}
                        Dr . Jayini
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/about#aboutYashwanth"
                        onClick={() => setNavOpen(false)}
                      >
                        Dr . Yashwant
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/about#ourMission">
                        Our Mission
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/services"
                    onClick={handleNavToggle}
                  >
                    OUR SERVICES
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="/patient-education"
                    onClick={handleNavToggle}
                  >
                    PATIENT EDUCATION
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="#">
                        Shoulder
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        Elbow
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        Wrist & Hand
                      </Link>
                    </li>
                    <li className="dropdownsubitemHoverLast">
                      <Link className="dropdown-item dropdown-toggle" to="#">
                        Knee
                      </Link>
                      {/* <ul className="dropdown-submenu">
                                                <li><Link className="dropdown-item" to="#">Arthritis</Link></li>
                                                <li><Link className="dropdown-item" to="#">Injuries</Link></li>
                                            </ul> */}
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        Spine
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        General
                      </Link>
                    </li>
                  </ul>
                </li>
                
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/gallery"
                    onClick={handleNavToggle}
                  >
                    GALLERY
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/physiotherapy"
                    onClick={handleNavToggle}
                  >
                    PHYSIOTHERAPY
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/contact-us"
                    onClick={handleNavToggle}
                  >
                    CONTACT US
                  </Link>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <button
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  className="btn btn-outline-success bg-success text-white"
                >
                  SECOND OPINION
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>

      {/* ----------------- Contact Form Modal ------------ */}
      <CommonModal />
    </>
  );
};

export default Header;
