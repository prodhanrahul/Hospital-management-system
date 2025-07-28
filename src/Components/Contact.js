import React from 'react'
import "./Contact.css"
function Contact() {
  return (
    <div>
        <div className="main">
      <div className="container">
  <h1>Contact Us</h1>
  <p>If you have any questions, feel free to reach out to us.</p>
  <form className="contact-form">
    <label htmlFor="name">Full Name</label>
    <input type="text" id="name" name="name" required="" />
    <label htmlFor="email">Email Address</label>
    <input type="email" id="email" name="email" required="" />
    <label htmlFor="message">Message</label>
    <textarea id="message" name="message" rows={5} required="" defaultValue={""} />
    <button type="submit">Send Message</button>
  </form>
  <div className="contact-info">
    <h2>Our Contact Info</h2>
    <p>
      <strong>Phone:</strong> +1 234 567 8900
    </p>
    <p>
      <strong>Email:</strong> contact@xyzhospital.com
    </p>
    <p>
      <strong>Address:</strong> 123 Health St, Medical City, Kolkata
    </p>
  </div>
</div>
</div>
</div>
  )
}

export default Contact
