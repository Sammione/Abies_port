import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <span className="section-label">// get in touch</span>
        <h2 className="section-title">Let's Build <span className="gradient-text">Together</span></h2>
        <p className="contact-intro">
          Open for collaborations, consulting, and speaking engagements in AI &amp; Healthcare.
        </p>

        <div className="contact-grid">
          <div className="bento-panel contact-cta-card">
            <div className="contact-cta-icon">📬</div>
            <h3 className="contact-cta-title">Start a Conversation</h3>
            <p className="contact-cta-desc">
              Whether you have a project in mind, need AI expertise, or just want to connect — my inbox is always open.
            </p>
            <a href="mailto:hello@abiogbebor.com" className="btn btn-primary">
              Send an Email →
            </a>
          </div>

          <div className="contact-links-grid">
            <a href="mailto:hello@abiogbebor.com" className="bento-panel contact-link-card">
              <span className="contact-link-icon">📧</span>
              <div>
                <div className="contact-link-label">Email</div>
                <div className="contact-link-value">hello@abiogbebor.com</div>
              </div>
            </a>
            <a href="https://linkedin.com/in/abiogbebor" target="_blank" rel="noreferrer" className="bento-panel contact-link-card">
              <span className="contact-link-icon">💼</span>
              <div>
                <div className="contact-link-label">LinkedIn</div>
                <div className="contact-link-value">linkedin.com/in/abiogbebor</div>
              </div>
            </a>
            <a href="https://github.com/abiogbebor" target="_blank" rel="noreferrer" className="bento-panel contact-link-card">
              <span className="contact-link-icon">🐙</span>
              <div>
                <div className="contact-link-label">GitHub</div>
                <div className="contact-link-value">github.com/abiogbebor</div>
              </div>
            </a>
          </div>
        </div>

        <div className="contact-footer">
          <p>© 2025 Abi Ogbebor · Built with React</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
