import React, { useEffect } from 'react'
import Header from './Header'
import '../components/style.css'
import Banner from './Banner'
import Reviews from './Reviews'
import Excellence from './Excellence'
import Counter from './Counter'
import Locations from './Locations'
import Education from './Education'
const Homepage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    {/* <Header/> */}
    <Banner/>
    <Reviews/>
    <Excellence/>
    <Counter/>
    <Locations/>
    <Education/>
    {/* <Footer/> */}
    </>
  )
}

export default Homepage