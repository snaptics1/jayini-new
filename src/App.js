import "./App.css";
import AboutusPage from "./components/AboutUs/AboutusPage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ServicesPage from "./components/services/ServicesPage";
import PatientEducation from "./components/education/PatientEducation";
import ContactUspage from "./components/contact/ContactUspage";
import { useEffect } from "react";
import Blogsingle from "./components/blogsingle/Blogsingle";
import Gallery from "./components/gallery/Gallery";
import PhysiotherapyTabs from "./components/physiotherapy/PhysiotherapyTabs";
import YashwanthPokala from "./components/doctor-desc/YashwanthPokala";
import JayiniRammohen from "./components/doctor-desc/JayiniRammohen ";

function App() {
  return (
    <div className="App fullwebssiteClass">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="" element={<Homepage />} />
          <Route path="/about" element={<AboutusPage />} />
          <Route path="/patient-education" element={<ServicesPage />} />
          <Route path="/services" element={<PatientEducation />} />
          <Route path="/contact-us" element={<ContactUspage />} />
          <Route path="/blog-single" element={<Blogsingle />} />
          <Route path="/physiotherapy" element={<PhysiotherapyTabs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/yasnwanth-pokala" element={<YashwanthPokala/>} />
          <Route path="/JayiniRammohen" element={<JayiniRammohen/>} />
        </Routes>
        <div class="floating_btn">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://wa.me/919137454545?text=Hi%20Jayini%20Clinics%2C%20I'm%20interested%20in%20learning%20more%20about%20your%20services"
          >
            <div class="contact_icon">
              <i class="fa fa-whatsapp my-float"></i>
            </div>
          </a>
          <p class="text_icon">Talk to us?</p>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
