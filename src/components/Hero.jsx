import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-container section">
      <div className="container">
        <div className="hero-content animate-fade-in">
          <h2 className="hero-subtitle">Hi, I'm Abies Abbey</h2>
          <h1 className="hero-title">
            Architecting <span className="gradient-text">Intelligence</span> <br/>
            for the Future of Tech & Healthcare.
          </h1>
          <p className="hero-description">
            An experienced Data Expert, Machine Learning, and Senior AI Engineer. I specialize in designing and deploying sophisticated, production-ready AI models, highly scalable data pipelines, and intelligent systems that solve complex, real-world challenges across healthcare and technology sectors. My passion lies in transforming raw data into actionable insights and robust predictive engines.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#contact" className="btn btn-secondary">Get in Touch</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
