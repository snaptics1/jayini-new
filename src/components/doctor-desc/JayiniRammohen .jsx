import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./doctorprofile.css";
import { Link } from "react-router-dom";

const JayiniRammohen = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <div className="doctor-profile-page">
      {/* Hero Section */}
      <section className="text-center About-banner-content">
        <div className="container">
          <h1 className="display-3 fw-bold text-white">Dr. Jayini Rammohen</h1>
          <p className="fon-weight-bold text-light fs-5 mb-3">
            <b> Distinguished Orthopaedic Surgeon</b>
          </p>
          <p className="text-light mb-2">
            Renowned for surgical excellence and compassionate patient care.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img
                src="/assets/images/Group 47652.png"
                alt="Dr. Jayini Rammohen"
                className="img-fluid rounded"
              />
            </div>
            <div className="col-lg-6 mt-4 mt-lg-0">
              <h2 className="fw-bold mb-4">About Dr. Jayini Rammohen</h2>
              <p className="lead mb-4 mobiletext">
                Dr. Jayini Rammohen is a distinguished orthopaedic surgeon in
                Hyderabad, renowned for his surgical excellence, compassionate
                patient care, and a conservative approach to treatment. With
                over 20 years of experience in orthopaedic practice, Dr. Jayini
                has successfully treated more than 1 Lakh patients, earning a
                reputation as one of the best in his field.
              </p>
              <p className="mb-4 mobiletext">
                As the Founder of Jayini Multi-Speciality Clinics, Dr. Jayini
                prioritizes non-surgical treatment options whenever possible,
                ensuring that surgery is considered only when absolutely
                necessary. He firmly believes in managing orthopaedic conditions
                through conservative methods first and avoids unnecessary
                diagnostic procedures, always focusing on patient well-being and
                recovery. He is a patient listener and empathizes with his
                patients, ensuring they receive compassionate and personalized
                care. His mantra of healing emphasizes correcting malnutrition,
                particularly addressing Vitamin-D, B12, and calcium
                deficiencies, while also promoting healing through physiotherapy
                in musculoskeletal conditions
              </p>
              <p className="mb-4 mobiletext">
                Dr. Jayini has performed close to 7,500 joint replacements and
                arthroscopic surgeries, including primary and revision
                procedures for the hip, knee, and shoulder. His expertise
                extends to ACL & PCL reconstruction, meniscus repair, and
                rotator cuff repairs, congenital orthopaedic conditions (club
                foot, congenital hip dysplasia), spine surgeries making him a
                trusted specialist in complex orthopaedic cases.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Credentials Section */}
      <section className="education-credentials-section bg-light py-5">
        <div className="container">
          <h2 className="fw-bold text-center mb-5">Education & Credentials</h2>
          <p className="mobiletext">
            Dr. Jayini Rammohen completed his medical graduation from Deccan
            Medical College, Hyderabad, followed by a post-graduate degree in
            Orthopaedics from SRMC, Chennai. He further honed his expertise with
            a fellowship in Joint Replacement & Arthroscopy equipping him with
            advanced skills in modern surgical techniques.
          </p>
        </div>
      </section>

{/* Contributions & Professional Affiliations Section */}
<section className="contributions-affiliations-section py-5">
  <div className="container">
    <h2 className="fw-bold text-center mb-3">
      Contributions & Professional Affiliations
    </h2>
    <p className="proudMember">
      Dr. Jayini is an active contributor to orthopaedic research and is a
      proud member of:
    </p>
    <div className="row">
      <div className="col-md-6">
        <div className="card mb-4 shadow-sm">
          <div className="card-body">
            <h5 className="card-title fw-bold">Indian Orthopaedic Association</h5>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="card mb-4 shadow-sm">
          <div className="card-body">
            <h5 className="card-title fw-bold">Indian Arthroscopic Society</h5>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="card mb-4 shadow-sm">
          <div className="card-body">
            <h5 className="card-title fw-bold">Telangana Orthopaedic Association</h5>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="card mb-4 shadow-sm">
          <div className="card-body">
            <h5 className="card-title fw-bold">Telangana Arthroscopic Society</h5>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="card mb-4 shadow-sm">
          <div className="card-body">
            <h5 className="card-title fw-bold">Tamil Nadu Arthroscopic Society</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Professional Experience Section */}
<section className="professional-experience-section bg-light py-5">
  <div className="container">
    <h2 className="fw-bold text-center mb-5">Professional Experience</h2>
    <div className="row">
      <div className="col-md-6">
        <div className="card mb-4 shadow-sm">
          <div className="card-body">
            <h5 className="card-title fw-bold">Founder & Chief Consultant (2018 - Present)</h5>
            <p className="card-text">Jayini Multi-Speciality Clinics, Nallagandla & Kondapur, Hyderabad</p>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="card mb-4 shadow-sm">
          <div className="card-body">
            <h5 className="card-title fw-bold">Senior Consultant Orthopaedics (2016 - 2018)</h5>
            <p className="card-text">PACE Hospitals, Hi-Tech City, Hyderabad</p>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="card mb-4 shadow-sm">
          <div className="card-body">
            <h5 className="card-title fw-bold">Consultant Orthopaedic Surgeon (2014 - 2016)</h5>
            <p className="card-text">KIMS Hospitals, Kondapur, Hyderabad</p>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="card mb-4 shadow-sm">
          <div className="card-body">
            <h5 className="card-title fw-bold">Consultant Orthopaedic Surgeon (2013 - 2014)</h5>
            <p className="card-text">Continental Hospitals, Gachibowli, Hyderabad</p>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="card mb-4 shadow-sm">
          <div className="card-body">
            <h5 className="card-title fw-bold">Senior Registrar, Dept. of Orthopaedics (2009 - 2013)</h5>
            <p className="card-text">KIMS Hospitals, Secunderabad, Hyderabad</p>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="card mb-4 shadow-sm">
          <div className="card-body">
            <h5 className="card-title fw-bold">Senior Resident, Dept. of Orthopaedics (2009)</h5>
            <p className="card-text">Gandhi Medical College, Secunderabad</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Call to Action Section */}
      <section className="cta-section text-center py-5 bg-primary text-white">
        <div className="container">
          <h2 className="fw-bold mb-4">
            Let us help you move better, live stronger, and achieve your health
            goals!
          </h2>
          <button className="btn text-white bg-success">
            <Link className="text-white" to="/contact-us">
              Book an Appointment
            </Link>
          </button>
        </div>
      </section>
    </div>
  );
};

export default JayiniRammohen;
