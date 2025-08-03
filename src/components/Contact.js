import React from 'react';
import './Contact.css';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaDownload } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Contact Me</h2>
      <p className="contact-subtitle">Below are the details to reach out to me!</p>

      <div className="contact-grid">
        <div className="contact-card">
          <div className="contact-icon"><FaMapMarkerAlt /></div>
          <h4>Address</h4>
          <p>Dallas, Texas</p>
        </div>

        <div className="contact-card">
          <div className="contact-icon"><FaPhoneAlt /></div>
          <h4>Phone</h4>
          <p>+1 (813) 568-5536</p>
        </div>

        <div className="contact-card">
          <div className="contact-icon"><FaEnvelope /></div>
          <h4>Email</h4>
          <p>dasranigopal@gmail.com</p>
        </div>

        <div className="contact-card">
          <div className="contact-icon"><FaDownload /></div>
          <h4>Resume</h4>
          <p className='contact-link'><a  href="/Dushyanth_Asrani_Gopal_Resume_Data_Engineer.pdf" target="_blank" rel="noopener noreferrer">View</a></p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
