import React from 'react'
import health from "../images/health.jpg";
import docpati from "../images/doctorpatient.jpg";
import hospitalfacility from "../images/hospital facility.jpg";
import "./About.css";
function About() {
  return (
    <div>
        <>
  <div className="about-section">
    <div className="about-content">
      <h2>About Us</h2>
      <p>
        Our Hospital Management System is designed to simplify the day-to-day
        operations of healthcare facilities. From patient registration to
        discharge, our platform ensures seamless coordination, secure data
        storage, and real-time access for doctors, nurses, and administrators.
      </p>
      <p>
        We are committed to enhancing patient care through digital innovation
        and efficiency. Our system supports electronic health records,
        appointment scheduling, billing, pharmacy management, and more—all under
        one platform.
      </p>
      <p>
        Backed by a dedicated team of developers, healthcare professionals, and
        IT specialists, we aim to bridge the gap between technology and
        healthcare for a smarter future.
      </p>
    </div>
  </div>
  <div className="image-gallery">
    <h3>Our Team &amp; Facilities</h3>
    <div className="gallery">
      <img src={health} alt="Healthcare Team" />
      <img src={hospitalfacility} alt="Hospital Facility" />
      <img src={docpati} alt="Doctors at Work" />
    </div>
  </div>
</>

      
    </div>
  )
}

export default About
