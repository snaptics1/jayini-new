import React, { useEffect } from 'react'
import '../services/services.css'
import Education from './Education'
import CommonBanner from '../CommonBanner'
import PatientEducationTabs from './PatientEducationTabs'

const PatientEducation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <CommonBanner title={'Our Services'} text={'Our Services'}/>
    <PatientEducationTabs/>
    {/* <Education/> */}
    </>
  )
}

export default PatientEducation