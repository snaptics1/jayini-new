import React, { useEffect } from 'react';
import '../services/services.css'
import ContactDetails from './ContactDetails'
import CommonBanner from '../CommonBanner'

const ContactUspage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <>
            <CommonBanner title={'Contact Us'} text={'Contact Us'}/>
            <ContactDetails/>
        </>
    )
}

export default ContactUspage