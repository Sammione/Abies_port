import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section contact-section">
      <div className="container glass-panel contact-container">
        <h2 className="section-title">Let's Connect</h2>
        <p className="contact-subtitle">
          Open for collaborations, speaking engagements, and consulting opportunities 
          in AI and Healthcare.
        </p>
        
        <div className="contact-details">
          <div className="contact-item">
            <span className="contact-icon">📧</span>
            <div className="contact-info">
              <span className="contact-label">Email</span>
              <a href="mailto:hello@abiesabbey.com" className="contact-link">hello@abiesabbey.com</a>
            </div>
          </div>
          
          <div className="contact-item">
            <span className="contact-icon">📱</span>
            <div className="contact-info">
              <span className="contact-label">Phone</span>
              <a href="tel:+12345678900" className="contact-link">+1 (234) 567-8900</a>
            </div>
          </div>
          
          <div className="contact-item">
            <span className="contact-icon">💼</span>
            <div className="contact-info">
              <span className="contact-label">LinkedIn</span>
              <a href="https://linkedin.com/in/abiesabbey" target="_blank" rel="noreferrer" className="contact-link">linkedin.com/in/abiesabbey</a>
            </div>
          </div>
          
          <div className="contact-item">
            <span className="contact-icon">🐙</span>
            <div className="contact-info">
              <span className="contact-label">GitHub</span>
              <a href="https://github.com/abiesabbey" target="_blank" rel="noreferrer" className="contact-link">github.com/abiesabbey</a>
            </div>
          </div>
        </div>
        
        <div className="contact-cta">
          <a href="mailto:hello@abiesabbey.com" className="btn btn-primary">Send a Message</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
