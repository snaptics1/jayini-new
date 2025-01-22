import React, { useEffect } from 'react'
import '../services/services.css'
import Education from './Education'
import CommonBanner from '../CommonBanner'

const PatientEducation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <CommonBanner title={'Patient Education'} text={'Patient Education'}/>
    <Education/>
    </>
  )
}

export default PatientEducation