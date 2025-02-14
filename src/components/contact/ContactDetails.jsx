import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import CommonModal from '../CommonModal'; 

const ContactDetails = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const handleDateChange = (date) => {
        setSelectedDate(date);
        setShowModal(true);
        setTimeout(() => {
            const modalTrigger = document.getElementById('modalTrigger');
            if (modalTrigger) modalTrigger.click();
        }, 100);
    };

    return (
        <>
            <div className="ContactDetails-parent">
                <div className="container-lg">
                    <div className="col-lg-10 mx-auto">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="contact-left">
                                    <h4>Contact Details :</h4>
                                    <p>
                                        Get in touch with us for any medical-related
                                        questions and about our projects.
                                    </p>

                                    <div className="contact-location">
                                        <i className="fa-solid fa-location-dot"></i>
                                        <div>
                                            <h5>Address 1</h5>
                                            <p>
                                                5th Floor, Above Sachdev Sports, Sri Tirumala’s Subash Arcade, H.1-62/1
                                                Kondapur, X Roads, Kothaguda, Hyderabad, Telangana 500084
                                            </p>
                                        </div>
                                    </div>
                                    <div className="contact-location">
                                        <i className="fa-solid fa-location-dot"></i>
                                        <div>
                                            <h5>Address 2</h5>
                                            <p>
                                                Plot 101/D, RISE Commercial Complex, 3rd Floor, Over Van Lavino Cafe,
                                                opp. to APARNA SAROVAR GRANDE, Nallagandla, Telangana 500019
                                            </p>
                                        </div>
                                    </div>
                                    <div className="contact-location">
                                        <i className="fa-solid fa-envelope"></i>
                                        <div>
                                            <h5>Email</h5>
                                            <p>
                                                <a href="mailto:jayiniclinics@gmail.com">jayiniclinics@gmail.com</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="contact-location">
                                        <i className="fa-solid fa-phone"></i>
                                        <div>
                                            <h5>Book Appointment</h5>
                                            <p>
                                                <a href="tel:+91-9137464646">+91 - 9137464646</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="calender-parent">
                                    <h4 className="text-center">Book Your Appointment</h4>
                                    <DatePicker
                                        selected={selectedDate}
                                        onChange={handleDateChange}
                                        inline
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <button
                id="modalTrigger"
                type="button"
                className="btn btn-primary d-none"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
            ></button>

            {showModal && <CommonModal selectedDate={selectedDate} />}
        </>
    );
};

export default ContactDetails;
