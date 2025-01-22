import React, { useEffect } from 'react'
import '../AboutUs/about.css'
import AboutBanner from './AboutBanner'
import WhyChoose from './WhyChoose'
import Counter from '../Counter'
import ABoutReviews from './ABoutReviews'
const AboutusPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='about-us-page-parent'>
        <AboutBanner/>
        <Counter/>
        <WhyChoose/>
        <ABoutReviews/>
    </div>
  )
}

export default AboutusPage