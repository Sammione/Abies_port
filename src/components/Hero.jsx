import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-bg-image"></div>
      <div className="container hero-grid">
        {/* LEFT: Text content */}
        <div className="hero-content animate-fade-in">
          <div className="hero-mono-tag">
            <span className="dot"></span> Available for opportunities
          </div>
          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Abi Ogbebor</span>
          </h1>
          <h2 className="hero-role">
            Senior AI Engineer &amp; Data Scientist
          </h2>
          <p className="hero-description">
            I architect intelligent, production-ready AI systems and scalable data pipelines 
            that solve complex real-world challenges across healthcare and technology. 
            Turning raw data into life-changing insights is what drives me.
          </p>
          <div className="hero-badges">
            <span className="tech-badge">Machine Learning</span>
            <span className="tech-badge">LLMs</span>
            <span className="tech-badge">Data Engineering</span>
            <span className="tech-badge">Healthcare AI</span>
          </div>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#contact" className="btn btn-ghost">Get in Touch</a>
          </div>
        </div>

        {/* RIGHT: Profile picture */}
        <div className="hero-image-wrapper animate-fade-in">
          <div className="profile-glow-ring"></div>
          <div className="profile-container">
            <img src="/profile.JPG" alt="Abi Ogbebor" className="hero-profile-pic" />
          </div>
          {/* Floating stat chips */}
          <div className="hero-chip chip-1">
            <span className="chip-num">50+</span>
            <span className="chip-label">AI Models</span>
          </div>
          <div className="hero-chip chip-2">
            <span className="chip-num">12</span>
            <span className="chip-label">Publications</span>
          </div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="hero-scroll-hint">
        <span>scroll down</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
};

export default Hero;
