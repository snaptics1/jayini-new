import React, { useEffect } from 'react'
import '../services/services.css'
import ServicesBanner from './ServicesBanner'
import Services1 from './Services1'
import Education from '../Education'
import ServicePageTabs from './ServicePageTabs'

const ServicesPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <>
            <ServicesBanner />
           <ServicePageTabs/>
            {/* <Services1/> */}

        </>
    )
}

export default ServicesPage