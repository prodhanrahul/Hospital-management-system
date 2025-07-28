import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <div>
      <div className="footer">
  <div className="footer-container">
    <div className="footer-col contact-info">
      <h4>Chat With Us</h4>
      <ul>
      <li>
        <i className="fas fa-phone" /> +1 (800) 123-4567
      </li>
      <li>
        <i className="fas fa-envelope" /> info@xyzhospital.com
      </li>
      </ul>
    </div>
    <div className="footer-col">
      <h4>Solutions</h4>
      <ul>
        <li>
          <a href="#">Inpatient Services</a>
        </li>
        <li>
          <a href="#">Outpatient Care</a>
        </li>
        <li>
          <a href="#">Emergency Services</a>
        </li>
        <li>
          <a href="#">Telemedicine</a>
        </li>
      </ul>
    </div>
    <div className="footer-col">
      <h4>Company</h4>
      <ul>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Careers</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">Privacy Policy</a>
        </li>
      </ul>
    </div>
    <div className="footer-col">
      <h4>Resources</h4>
      <ul>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">Health Tips</a>
        </li>
        <li>
          <a href="#">FAQ</a>
        </li>
        <li>
          <a href="#">Support</a>
        </li>
      </ul>
    </div>
  </div>
  <div className="footer-bottom">
    © 2025 XYZ Hospital.All rights reserved.
  </div>
</div>

    </div>
  )
}

export default Footer
