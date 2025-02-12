import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./doctorprofile.css";
import { Link } from "react-router-dom";

const YashwanthPokala = () => {
    useEffect(()=>{
      window.scrollTo(0,0)
    },[])
  return (
    <div className="doctor-profile-page">
      {/* Hero Section */}
      <section className="text-center About-banner-content">
      <div className="container">
            <h1 className="display-3 fw-bold text-white">
              Dr. Yaswanth Pokala
            </h1>
            <p className="fon-weight-bold text-light fs-5 mb-3">
             <b> MPT (Sports Physical Therapist) & Ergonomist</b>
            </p>
            <p className="text-light mb-2">
              Certified Dry Needling Practitioner | Certified Temporomandibular
              Disorder Specialist
            </p>

          </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img
                src="/assets/images/yashwanthPokala.jpg"
                alt="Dr. Yaswanth Pokala"
                className="img-fluid rounded yashwanthPokalaImage"
              />
            </div>
            <div className="col-lg-6 mt-4 mt-lg-0">
              <h2 className="fw-bold mb-4">About Dr. Yaswanth Pokala</h2>
              <p className="lead mb-4 mobiletext">
                At Jayini Physiotherapy, we prioritize your well-being by
                combining advanced physiotherapy techniques with compassionate
                care. Led by Yaswanth Pokala, an accomplished physiotherapist
                with a passion for improving lives through movement, our clinic
                is committed to providing exceptional care tailored to each
                individual.
              </p>
              <p className="mb-4 mobiletext">
                Yaswanth Pokala is a strong advocate of the philosophy that
                "exercise is medicine" and believes that movement is the key to
                enhancing functionality. With expertise in Sports and Orthopedic
                Specialties, Yaswanth combines empathy and skill to help
                patients recover, perform better, and lead healthier lives.
              </p>
              <p className="mb-4 mobiletext">
                Currently, Yaswanth serves as the Head of the Physiotherapy
                Department at Jayini Multi Speciality Clinics, ensuring the
                highest standards of care for all patients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Career Highlights Section */}
      <section className="career-highlights-section bg-light py-5">
        <div className="container">
          <h2 className="fw-bold text-center mb-5">Career Highlights</h2>
          <div className="row">
            <div className="col-md-6">
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title fw-bold">
                    Associate Professor & Senior Clinical Physiotherapist
                  </h5>
                  <p className="card-text">
                    NRI College of Physiotherapy, NRI General Hospital
                    (2018–2023)
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title fw-bold">
                    Business Head & Ergonomist
                  </h5>
                  <p className="card-text">OSHER Worldwide (2017–2023)</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title fw-bold">
                    Sports Physiotherapist & Health and Wellness Specialist
                  </h5>
                  <p className="card-text">ILTD, ITC Ltd.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title fw-bold">Former Physiotherapist</h5>
                  <p className="card-text">
                    Andhra Pradesh Cricket Association (ACA)
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title fw-bold">
                    {" "}
                    Health & Wellness Manager
                  </h5>
                  <p className="card-text">
                    Former Health & Wellness Manager at ITC for 5 years
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Achievements Section */}
      <section className="key-achievements-section py-5">
        <div className="container">
          <h2 className="fw-bold text-center mb-5">Key Achievements</h2>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <ul className="list-group list-group-flush mobiletext">
                <li className="list-group-item">
                  Presented a talk on the <b>importance of physical activity in
                  preventing osteoporosis</b> in underprivileged children at
                  AIIMS-Mangalagiri on World Osteoporosis Day.
                </li>
                <li className="list-group-item">
                  Delivered a presentation on <b>Physiotherapy for
                  Metabolic-Influenced Tendon Disorders</b> at Saveetha College of
                  Physiotherapy.
                </li>
                <li className="list-group-item">
                  Conducted over <b>100 corporate ergonomics sessions</b> for renowned
                  organizations such as TCS, Genpact, Shell, Allianz, and
                  Qualcomm.
                </li>
                <li className="list-group-item">
                  Served as <b> Chief Physiotherapist</b> for the <b>All-India Senior
                  Ranking Badminton Championship 2017.</b>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      

      {/* Mission Section */}
      <section className="mission-section bg-light py-5">
        <div className="container">
          <h2 className="fw-bold text-center mb-5">Our Mission</h2>
          <div className="ourMissionContent">
            <ul className="mobiletext">
              <li>
                <b>Treating Sports Injuries:</b> Helping athletes recover and
                perform at their best.
              </li>
              <li>
                <b>Post-Operative Rehabilitation:</b> Guiding patients through
                recovery after surgery to restore strength and mobility.
              </li>
              <li>
                <b>
                  Conservative Management of Shoulder Rotator Cuff Injuries,
                  Knee Partial Ligament & Meniscus Tears, and Ankle Injuries:
                </b>{" "}
                Using non-invasive techniques to facilitate healing and improve
                functionality.
              </li>
              <li>
                <b>Management of Slipped Disc:</b> Providing relief through
                targeted therapies for spinal health.
              </li>
              <li>
                <b>Posture Correction and Ergonomics:</b> Promoting long-term
                musculoskeletal health through education and customized plans.
              </li>
              <li>
                <b>Physiotherapy After Burn Surgeries:</b> Restoring movement
                and functionality with gentle, specialized care.
              </li>
              <li>
                <b>Vertigo Management:</b> Alleviating symptoms through
                vestibular rehabilitation techniques.
              </li>
              <li>
                <b>Strength and Conditioning Programs:</b> Enhancing physical
                fitness and preventing injuries.
              </li>
              <li>
                <b>Stroke Rehabilitation:</b> Assisting individuals in regaining
                mobility and independence after a stroke.
              </li>
              <li>
                <b>Dry Needling & Cupping:</b> Using holistic concepts to help
                patients recover from rigid issues that don’t respond to
                conventional therapy.
              </li>
            </ul>
          </div>

          <p className="text-dark mt-3 mobiletext">
            At the core of our philosophy is a commitment to creating tailored
            treatment plans that cater to each patient’s unique needs, combining
            expertise, innovation, and compassion. Whether you’re recovering
            from an injury, managing a chronic condition, or looking to optimize
            your performance, we’re here to support you every step of the way.
          </p>
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

export default YashwanthPokala;
