import React from 'react'
import "./Appontment.css"
import doctor from "../images/doctor2.jpg";
import { useState } from "react"
function Appontment() {
  return (
    <div>
       <div className="appointment-page">
  <div className="image-section">
    <img src={doctor} alt="Doctor" />
  </div>
  <div className="form-section">
    <h1>Book an Appointment</h1>
    <form className="appointment-form">
      <label htmlFor="name">Full Name</label>
      <input type="text" id="name" name="name" required="" />
      <label htmlFor="email">Email Address</label>
      <input type="email" id="email" name="email" required="" />
      <label htmlFor="phone">Phone Number</label>
      <input type="tel" id="phone" name="phone" required="" />
      <label htmlFor="doctor">Select Doctor</label>
      <select id="doctor" name="doctor" required="">
        <option value="">--Choose--</option>
        <option>Dr. Smith - Cardiologist</option>
        <option>Dr. Lee - Pediatrician</option>
        <option>Dr. Khan - Neurologist</option>
        <option>Dr. Sen - Orthopedics</option>
        <option>Dr. Roy - Pediatrics</option>
        <option>Dr. Lili - ENT</option>
        <option>Dr. Sing - Radiology</option>
        <option>Dr. Sarkar - Immunology</option>
      </select>
      <label htmlFor="date">Preferred Date</label>
      <input type="date" id="date" name="date" required="" />
      <label htmlFor="time">Preferred Time</label>
      <input type="time" id="time" name="time" required="" />
      <button type="submit">Book Appointment</button>
    </form>
  </div>
</div>

      
    </div>
  )
}

export default Appontment
